import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AdminLayoutComponent } from './shared/component/admin-layout/admin-layout.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component'
import { CreatePageComponent } from './create-page/create-page.component'
import { EditPageComponent } from './edit-page/edit-page.component'
import { AuthService } from './shared/services/auth.service'
import { SharedModule } from '../shared/shared.module'
import { AuthGuard } from './shared/services/auth.guard'
import { SearchPipe } from './shared/search.pipe'
import { ElementPageComponent } from './element-page/element-page.component'

import { LeftSideComponent } from './element-page/components/left-side/left-side.component';
import { RightSideComponent } from './element-page/components/right-side/right-side.component';
import { AreaComponent } from './element-page/components/area/area.component';

import { DndModule } from 'ngx-drag-drop';
import { ElementTextComponent } from './element-page/components/elements/text.component';
import { ElementContainerComponent } from './element-page/components/elements/container.component';
import { ElementImageComponent } from './element-page/components/elements/image.component';
import { UpMenuComponent } from './element-page/components/up-menu/up-menu.component';
import { InputComponent } from './element-page/components/elements/input.component';

@NgModule( {
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    SearchPipe,
    ElementPageComponent,
    LeftSideComponent,
    RightSideComponent,
    AreaComponent,

    ElementContainerComponent,
    ElementTextComponent,
    ElementImageComponent,
    UpMenuComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DndModule,
    RouterModule.forChild( [
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
          { path: 'create', component: CreatePageComponent, canActivate: [AuthGuard] },
          { path: 'elements', component: ElementPageComponent, canActivate: [] },
          { path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] }
        ]
      }
    ] )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ],
  entryComponents: [
    ElementContainerComponent,
    ElementTextComponent,
    ElementImageComponent,
    InputComponent
  ]
} )

export class AdminModule {

}
