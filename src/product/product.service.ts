import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    findAllProducts():string {
        return "Product Data List";
    }

    findAProduct(productId: string): string {
        return `Product ID : ${productId}`;
    }

    createAProduct(product: any): any {
        return product;
    }

    updateAProduct(productId: string, product: any): string {
        console.log(product);        
        return `Product : ${productId} Updated`
    }

    deleteAProduct(productId: string): string {
        return `Product ${productId} Deleted Successfully`;
    }
}
