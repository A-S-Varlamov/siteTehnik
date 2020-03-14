import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../admin/shared/services/auth.service'
import { Router } from '@angular/router'
import { catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token
        }
      })
    }
    return next.handle(req)
      .pipe(
        tap(() => {
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('[interseptor error:]', error)
          if (error.status === 401) {
            this.auth.logout()
            this.router.navigate(['/admin', 'login'], {
              queryParams: {
                authFailed: true
              }
            })
          }
          return throwError(error)
        })
      )
  }

}
