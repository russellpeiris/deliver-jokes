export class CreateJokeDto {
  jokeId: string;
  joke: string;
  category: string;
}

export class GetRandomJokeDto {
  category?: string;
}
