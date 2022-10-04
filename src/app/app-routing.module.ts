import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CryptostuffProComponent } from './components/cryptostuff-pro/cryptostuff-pro.component';
import { HomeComponent } from './components/home/home.component';
import { LectureComponent } from './components/lecture/lecture.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TradingSandboxComponent } from './components/trading-sandbox/trading-sandbox.component';
import { VideoLectureComponent } from './components/video-lecture/video-lecture.component';
import { VideoLecturesComponent } from './components/video-lectures/video-lectures.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lectures', component: LecturesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'video-lectures', component: VideoLecturesComponent },
  { path: 'trading-sandbox', component: TradingSandboxComponent },
  { path: 'cryptostuff-premium', component: CryptostuffProComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lecture/:id', component: LectureComponent },
  { path: 'video-lecture/:id', component: VideoLectureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  declarations: [],
})
export class AppRoutingModule {}
