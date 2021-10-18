import { FixedObject, FluidObject } from 'gatsby-image';

export enum RelativeDirectory {
  speakrs = 'speakers',
  committee = 'committee',
  communities = 'communities',
  sponsors = 'sponsors',
  team = 'team',
  moderators = 'moderators',
}

export interface FileImage {
  name: string;
  publicURL: string;
  relativeDirectory: RelativeDirectory;
  childImageSharp: { fixed: FixedObject; fluid: FluidObject };
}
