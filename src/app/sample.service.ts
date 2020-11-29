import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SampleService {
  baseUrl: string;
  apiPath: string;
  constructor(public http: HttpClient) {}

  /**
   *  Gets all data for DataViewReport
   */

  public getBooks(): Observable<any> {
    return this.http.get<any>(
      "https://www.googleapis.com/books/v1/volumes?q=filibusterismo"
    );
  }
}
