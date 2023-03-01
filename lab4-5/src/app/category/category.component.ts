import {Component} from '@angular/core';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})


export class CategoryComponent {
    category = [
        {id: 1, title: 'phones'},
        {id: 2, title: 'headphones'},
        {id: 3, title: 'laptops'},
        {id: 4, title: 'televisions'}
    ]
    


    get_cat(id: number) {
        
    
    }

}
