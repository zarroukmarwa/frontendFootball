import { Injectable } from "../../node_modules/@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        let authReq = req;
        let token = sessionStorage.getItem('token');
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }

}
