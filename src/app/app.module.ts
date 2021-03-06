import { CalculatorComponent } from './calculator/calculator.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NewComponentComponent, CalculatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule, // input
    MatFormFieldModule, // mat-form-field
    FormsModule, // ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
