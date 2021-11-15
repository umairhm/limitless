import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthComponent } from './month/month.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MonthComponent
  ],
  exports: [
    MonthComponent
  ],
})
export class UiModule {}
