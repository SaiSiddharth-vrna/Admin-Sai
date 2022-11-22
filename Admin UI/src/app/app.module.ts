import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderInterceptor } from './shared/interceptor/header-interceptor';
import { SessionService } from './shared/services/session/session.service';
import { AuthGuard } from './shared/gaurds/auth.gaurd';
import { AuthLoginGuard } from './shared/gaurds/auth-login.guard';
import { ToastModule } from 'primeng/toast';
import { ToastService } from './shared/services/toast/toast.service';
import { MessageService } from 'primeng/api';
import { ErrorInterceptor } from './shared/interceptor/error.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SocialLoginModule,SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';



@NgModule({
  declarations: [
    AppComponent,
    
    
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastModule,
   /* SocialLoginModule,*/
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
   
  ],
  providers: [
    AuthLoginGuard,
    AuthGuard,
    SessionService,
    ToastService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
   /* {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }*/
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
