import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"about",component:AboutComponent},
  {path:"skills",component:SkillsComponent},
  {path:"works",component:WorksComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
