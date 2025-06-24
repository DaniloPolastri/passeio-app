import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Layout} from './layout/layout';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias-module').then(m => m.CategoriasModule),
        pathMatch: 'full',
        data : {
          titulo: 'Categorias',
          subTitulo: 'Realize o Cadastro de novas Categorias'
        }
      },
      {
        path: 'lugares',
        loadChildren: () =>import('../lugares/lugares-module').then(m => m.LugaresModule),
        pathMatch: 'full',
        data : {
          titulo: 'Lugares',
          subTitulo: 'Realize o Cadastro de novos Lugares'
        }
      },
      {
        path: 'galerias',
        loadChildren:() => import('../galeria/galeria-module').then(m => m.GaleriaModule),
        pathMatch: 'full',
        data : {
          titulo: 'Galeria de Lugares',
          subTitulo: 'Descubra os melhores lugares para se visitar! '
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
