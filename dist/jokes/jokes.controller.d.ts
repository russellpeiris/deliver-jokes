import { CreateJokeDto } from './dto/joke.dto';
import { JokesService } from './jokes.service';
export declare class JokesController {
    private readonly jokesService;
    constructor(jokesService: JokesService);
    create(createJokeDto: CreateJokeDto): Promise<import("./entities/joke.entity").Joke>;
    getRandomJoke(category?: string): Promise<import("./entities/joke.entity").Joke>;
}
