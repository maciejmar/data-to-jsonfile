import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogstwoComponent } from './pages/dialogstwo/dialogstwo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddDialogComponent } from './pages/add-dialog/add-dialog.component';
import { EditDialogComponent } from './pages/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './pages/delete-dialog/delete-dialog.component';

const routes: Routes = [
  { path:'', redirectTo: '/dialogs', pathMatch: 'full' },
  { path: 'dialogs', component: DialogstwoComponent },
  { path: 'add-dialog', component: AddDialogComponent },
  { path: 'edit/:_id', component: EditDialogComponent },
  { path: 'delete/:_id', component:DeleteDialogComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
