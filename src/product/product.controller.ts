import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @Get()
    getAllProducts(): string{
        return this.productService.findAllProducts();
    }

    @Get(":id")
    getAProduct(@Param("id") id: string): string{
        return this.productService.findAProduct(id);
    }

    @Post()
    createAProduct(@Body() product: {id: string, title: string, brand: string}): string {
        return this.productService.createAProduct(product);
    }

    @Patch(":id")
    updateAProduct(@Param("id") id: string, @Body() data: {id: string, title: string, brand: string}) {
        return this.productService.updateAProduct(id, data);
    }

    @Delete(":id")
    deleteAProduct(@Param("id") id: string) {
        return this.productService.deleteAProduct(id);
    }
}
