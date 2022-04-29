import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/tournaments',
    pathMatch: 'full'
  },
  {
    path: 'menu/tournaments',
    loadChildren: () => import('./tournaments/tournaments.module').then(m => m.TournamentsPageModule)
  },
  {
    path: 'menu/dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'menu/teams',
    loadChildren: () => import('./teams/teams.module').then(m => m.TeamsPageModule)
  },
  {
    path: 'menu/favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
