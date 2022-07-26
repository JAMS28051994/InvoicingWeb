import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.APIUrl;
@Injectable({ providedIn: 'root' })

export class LoginService {

    constructor(private httpClient: HttpClient) {

    }

    public ValidataUserCredentials(username: string, password: string) {
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic am1hZHJpZ2FsXzk0QG91dGxvb2suY29tOlBhc3N3b3JkMTIz'
            })
        };

        return this.httpClient.get(API_URL + 'Login/ValidateLogin/' + username + "/" + password, httpOptions);
    }
}