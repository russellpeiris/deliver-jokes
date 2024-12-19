import { Repository } from 'typeorm';
import { CategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    create(createCategoryDto: CategoryDto): Promise<Category>;
}
