import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { VideoLecturesComponent } from './components/video-lectures/video-lectures.component';
import { TradingSandboxComponent } from './components/trading-sandbox/trading-sandbox.component';
import { CryptostuffProComponent } from './components/cryptostuff-pro/cryptostuff-pro.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LectureComponent } from './components/lecture/lecture.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VideoLectureComponent } from './components/video-lecture/video-lecture.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/httpService';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LecturesComponent,
    VideoLecturesComponent,
    TradingSandboxComponent,
    CryptostuffProComponent,
    LoginComponent,
    RegisterComponent,
    LectureComponent,
    VideoLectureComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
