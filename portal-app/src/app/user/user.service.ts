import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  // private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = "/api";

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/" + user.id);
  }


  //Sends an http post request to node express server at the url below
  public createUser(user) {
    //return this.http.post<User>(this.userUrl, user);
    return this.http.post<User>(`http://localhost:8080/event/post/${user.firstName}/${user.lastName}/${user.email}`, user);
  }
}
