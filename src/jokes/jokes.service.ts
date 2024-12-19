import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJokeDto, GetRandomJokeDto } from './dto/joke.dto';
import { Joke } from './entities/joke.entity';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Joke)
    private jokeRepository: Repository<Joke>,
  ) {}

  async create(createJokeDto: CreateJokeDto) {
    const joke = new Joke();
    joke.jokeId = createJokeDto.jokeId;
    joke.joke = createJokeDto.joke;
    joke.category = createJokeDto.category;
    return await this.jokeRepository.save(joke);
  }

  async getRandomJoke(param: GetRandomJokeDto) {
    const { category } = param;
    let query = this.jokeRepository.createQueryBuilder();

    if (category) {
      query = query.where('category = :category', { category });
    }

    const joke = await query.orderBy('RAND()').getOne();

    return joke;
  }
}
