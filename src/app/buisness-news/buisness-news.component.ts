import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-buisness-news',
  templateUrl: './buisness-news.component.html',
  styleUrls: ['./buisness-news.component.css']
})
export class BuisnessNewsComponent  implements OnInit{

constructor(private services:NewsapiserviceService){}

biznews:any=[]

  ngOnInit(): void {
    
this.services.bisNews().subscribe((result)=>{
this.biznews=result.articles
})

  }

}
