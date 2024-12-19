"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const joke_entity_1 = require("./entities/joke.entity");
let JokesService = class JokesService {
    constructor(jokeRepository) {
        this.jokeRepository = jokeRepository;
    }
    async create(createJokeDto) {
        const joke = new joke_entity_1.Joke();
        joke.jokeId = createJokeDto.jokeId;
        joke.joke = createJokeDto.joke;
        joke.category = createJokeDto.category;
        return await this.jokeRepository.save(joke);
    }
    async getRandomJoke(param) {
        const { category } = param;
        let query = this.jokeRepository.createQueryBuilder();
        if (category) {
            query = query.where('category = :category', { category });
        }
        const joke = await query.orderBy('RAND()').getOne();
        return joke;
    }
};
exports.JokesService = JokesService;
exports.JokesService = JokesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(joke_entity_1.Joke)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JokesService);
//# sourceMappingURL=jokes.service.js.map