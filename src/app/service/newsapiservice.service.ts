import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private http:HttpClient) { }

  newaApiUrl=' https://newsapi.org/v2/top-headlines?country=us&apiKey=b584b6eb73eb48b6b3e445054377130b';

  techNewsApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=b584b6eb73eb48b6b3e445054377130b'

  bissNews='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b584b6eb73eb48b6b3e445054377130b'

  topHeading():Observable<any>
  {
    return this.http.get(this.newaApiUrl)
  }

  techNews():Observable<any>{
    return this.http.get(this.techNewsApiUrl)
  }


  bisNews():Observable<any>{
    return this.http.get(this.bissNews)
  }


}
