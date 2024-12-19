import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateJokeDto, GetRandomJokeDto } from './dto/joke.dto';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokesService.create(createJokeDto);
  }

  @Get()
  getRandomJoke(@Body() body: GetRandomJokeDto) {
    return this.jokesService.getRandomJoke(body);
  }
}
