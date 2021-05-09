import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../api.service';

//@ts-ignore
/*import  * as alldata from '../../../assets/pets.json';*/

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  num:number=1;
  detail:any;
  price:number=0;
  description:string='';
  constructor(private route:ActivatedRoute,private apiService:ApiService) {

  }

   add():void{
    this.num++;
     this.detail.price=this.price*this.num
  }
  remove():void{
   if(this.num>1) {this.num--;
     this.detail.price=this.price*this.num
   }
  }
  rateForm(value:number){
    let a: { name: string; black: boolean; }[]=[];
    for(let i=1;i<6;i++){
      if(i<=value){
        a.push({
          name:"grade",
          black:false
        })
      }else{
        a.push({
          name:"grade",
          black:true
        })
      }
    }
    return a;
  };
  ngOnInit(): void {

    this.route.params.subscribe(params =>
    {
      // @ts-ignore
      let subscription = this.apiService.getPets(params).subscribe(
         (sqldata:any)=>{
          let data = sqldata[0];
          this.detail={id:data.pets_id,
            title:data.title,
            price:data.price,
            category:data.category,
            imgUrl:data.img,
            rate:this.rateForm(data.rate)
          };
            this.price=data.price;
            this.description=data.description;
        });
  })
}
}
