import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'demo',
    loadChildren: './demo/demo.module#DemoModule',
  },
  {
    path: 'pre-select',
    loadChildren: './examples/various/basic-example-multi-select.component',
  },
  {
    path: 'documentation',
    loadChildren: './documentation/documentation.module#DocumentationModule',
  },
  {
    path: 'examples',
    loadChildren: './examples/examples.module#ExamplesModule',
  },
];
