
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'pelicula', component: PeliculaComponent },
    { path: 'favoritas', component: FavoritosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
