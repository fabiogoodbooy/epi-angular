
import { ListComponent } from 'src/app/users/list/list.component';
import { Routes } from '@angular/router';
import { AddComponent } from 'src/app/users/add/add.component';
import { ListComponent as Product } from 'src/app/product/list/list.component';


export const routes : Routes =[
    { 
        path: '', redirectTo : 'users',
        pathMatch : 'full'
    },
    {
        path:'users' ,component : ListComponent

        },
        {
            path:'users/add',component :AddComponent
        }
        ,{
            path:'product',component:Product
        }
]