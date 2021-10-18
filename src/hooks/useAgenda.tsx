import { useStaticQuery, graphql } from 'gatsby';
import { Agenda } from '../models/Agenda';
import { Speaker } from '../models/Speaker';

export const useAgenda = (speakers: Speaker[]): Agenda[] => {
  const { items } = useStaticQuery(graphql`
    {
      items: allAgendaJson {
        edges {
          node {
            name
            date
            dateISO
            programs {
              title
              startTime
              endTime
              isActivity
              speaker
              winnerTime
            }
          }
        }
      }
    }
  `);

  const SpeakerEntities = speakers.reduce(
    (acc: { [key: string]: Speaker }, speaker: Speaker) => {
      acc[speaker.id] = speaker;
      return acc;
    },
    {},
  );
  return items.edges
    .map((sp: any) => sp.node)
    .map((sp: Agenda) => {
      const agendaWithSpeaker = sp.programs.map((p) => {
        if (p.speaker) {
          const speaker = SpeakerEntities[`${p.speaker}`];
          return {
            ...p,
            speaker: {
              ...speaker,
              talk: {
                ...speaker.talk,
                coSpeaker: SpeakerEntities[`${speaker.talk.coSpeaker}`],
              },
            },
          };
        }
        return p;
      });
      return {
        ...sp,
        programs: agendaWithSpeaker,
      };
    });
};
