import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService } from '../service/newsapiservice.service'
 
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit{
  
  constructor(private services:NewsapiserviceService){}


  techNewsDisplay:any=[]

  ngOnInit(): void {

    this.services.techNews().subscribe((result)=>{
      console.log(result);
      this.techNewsDisplay=result.articles
      
    })

  }

}
