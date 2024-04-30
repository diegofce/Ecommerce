import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './pages/products/detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        children: [
            {
                path: "",
                component: ProductsComponent
            },
            {
                path: ":id",
                component: DetailComponent

            }
        ]

    },
    {
        path: 'login',
        component: LoginComponent
    }
];
