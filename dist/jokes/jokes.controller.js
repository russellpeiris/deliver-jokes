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
exports.JokesController = void 0;
const common_1 = require("@nestjs/common");
const joke_dto_1 = require("./dto/joke.dto");
const jokes_service_1 = require("./jokes.service");
let JokesController = class JokesController {
    constructor(jokesService) {
        this.jokesService = jokesService;
    }
    create(createJokeDto) {
        return this.jokesService.create(createJokeDto);
    }
    getRandomJoke(category) {
        return this.jokesService.getRandomJoke({ category });
    }
};
exports.JokesController = JokesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [joke_dto_1.CreateJokeDto]),
    __metadata("design:returntype", void 0)
], JokesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':category?'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JokesController.prototype, "getRandomJoke", null);
exports.JokesController = JokesController = __decorate([
    (0, common_1.Controller)('jokes'),
    __metadata("design:paramtypes", [jokes_service_1.JokesService])
], JokesController);
//# sourceMappingURL=jokes.controller.js.map