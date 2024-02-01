import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
  
})


export class AppModule {}
