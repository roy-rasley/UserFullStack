import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private baseURL = "http://localhost:8080/api/v1/users"

    constructor(private httpClient: HttpClient){}

    getUserList(): Observable<User[]>{
        return this.httpClient.get<User[]>(`${this.baseURL}`);
    }

    createUser(user: User): Observable<Object>{
        return this.httpClient.post(`${this.baseURL}`, user);
    }

    getUserByName(uname: String): Observable<User>{
        return this.httpClient.get<User>(`${this.baseURL}/${uname}`)
    }

    updateUser(uname: String, user:User): Observable<Object>{
        return this.httpClient.put(`${this.baseURL}/${uname}`,user)
    }

    deleteMovie(uname:String): Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/${uname}`)
    }
}
