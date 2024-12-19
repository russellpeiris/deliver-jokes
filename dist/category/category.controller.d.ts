import { CategoryService } from './category.service';
import { CategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CategoryDto): Promise<import("./entities/category.entity").Category>;
}
