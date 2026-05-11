import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCourseModalComponent } from './components/modals/create-course-modal/create-course-modal.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { BottomTabsComponent } from './components/bottom-tabs/bottom-tabs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    CreateCourseModalComponent,
    SidebarNavComponent,
    BottomTabsComponent
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    ReactiveFormsModule,
    LogoComponent,
    CreateCourseModalComponent,
    SidebarNavComponent,
    BottomTabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
