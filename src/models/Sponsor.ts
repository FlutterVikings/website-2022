import { ImageSharp } from './ImageSharp';

export class Sponsor {
  id: string;
  name: string;
  link: string;
  level: number;
  image: ImageSharp;
  constructor({ id, name, level, link }: any, image: any) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.link = link;
    this.image = image;
  }
}
