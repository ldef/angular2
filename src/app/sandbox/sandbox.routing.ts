import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxComponent } from './sandbox.component';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { PostListComponent } from './posts/list/post-list.component';
import { PostEditComponent } from './posts/edit/post-edit.component';

export const routes: Routes = [
  { path: '', component: SandboxComponent, children: [
    { path: '', component: GridComponent },
    { path: 'grid', component: GridComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'posts/new', component: PostEditComponent },
    { path: 'posts/:id', component: PostEditComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SandboxRoutingModule {}
