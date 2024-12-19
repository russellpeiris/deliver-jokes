import { Repository } from 'typeorm';
import { CreateJokeDto, GetRandomJokeDto } from './dto/joke.dto';
import { Joke } from './entities/joke.entity';
export declare class JokesService {
    private jokeRepository;
    constructor(jokeRepository: Repository<Joke>);
    create(createJokeDto: CreateJokeDto): Promise<Joke>;
    getRandomJoke(param: GetRandomJokeDto): Promise<Joke>;
}
