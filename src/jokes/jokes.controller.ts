import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJokeDto } from './dto/joke.dto';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokesService.create(createJokeDto);
  }

  @Get(':category?')
  getRandomJoke(@Param('category') category?: string) {
    return this.jokesService.getRandomJoke({ category });
  }
}
