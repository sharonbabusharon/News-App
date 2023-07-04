import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';

const routes: Routes = [

  {path: '' ,component: TopheadingComponent},
  {path: 'technews', component:TechNewsComponent},
  {path: 'buisness', component:BuisnessNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
