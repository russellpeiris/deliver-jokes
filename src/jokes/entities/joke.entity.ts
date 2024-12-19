import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jokeId: string;

  @Column()
  joke: string;

  @Column()
  category: string;
}
