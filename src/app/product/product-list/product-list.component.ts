import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,NavigationExtras,Router} from "@angular/router";
import {ApiService} from '../../api.service';
/*//@ts-ignore
import  * as alldata from '../../../assets/pets.json';*/

interface grade{
  name:string;
  black:boolean;
}
interface detailCard{
  id:number;
  title: string;
  price:number;
  category:string;
  commit: string;
  imgUrl:string;
  rate:grade[];
};

@Component({
  selector: 'app-orders-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  options:string[]=['from low to high','from high to low'];

  allDetails:unknown;

  details: detailCard[]=[];

  keepDetails:detailCard[]=[];

  moreViews:any=[];
  constructor(private route: ActivatedRoute,
              private apiService:ApiService) {

    //this.allDetails=alldata.default;

  }
  sort():void{
    const obj:HTMLBaseElement|null=document.querySelector('#select');
    //met a bug
    setTimeout(()=>{
      if(obj&&obj.textContent){
      let order=this.options.indexOf(obj.textContent)===0?1:-1;
      if(this.details){
      this.details.sort((a:detailCard,b:detailCard)=>(a.price-b.price)*order)}
      }
    },0);
  }


   priceFilter(...arg:string[]):void{
      let value=this.details=this.keepDetails.filter((item:any):boolean=>{
      let max=!arg[1]?1<<20:arg[1];
      let min=!arg[0]?0:arg[0];
      return item['price']>=min && item['price']<=max;
    }
  )
/*     this.moreViews.push({'data':value,'name':'price'+arg[0]+'-'+arg[1]});*/
}



  rateFilter(option:number):void{
   /* const id=9;*/
      this.details=this.keepDetails.filter(item=>{
      const oneRateNum=item['rate'].filter((item: { black: any;})=>
      {return !item.black})
      //return the prodect who rateStar number greater than option.
      return oneRateNum.length>=option
      }
    )
    /*if(this.moreViews.length){
      (this.moreViews.slice(-1))['0'].id===id&&this.moreViews.pop();
    }
    this.moreViews.push({'data':value,'name':'rate:'+option+' star',id});*/
  }

  filter(option:string,data:string):void{
   // const id=10;
 if(this.allDetails instanceof Array)
    this.keepDetails=this.details=this.allDetails.filter((item:any)=>{
      return item[option].search(data)>-1
    })
/*    if(this.moreViews.length){
      (this.moreViews.slice(-1))['0'].id===id&&this.moreViews.pop();
    }
    this.moreViews.push({'data':value,'name':option,id});*/

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
  ngOnInit():void {
    //subsecribe the router params
    this.route.params.subscribe(params =>
    {
      this.apiService.getPets({id:0}).subscribe(
        (data)=>{
          if(data instanceof  Array)
          this.allDetails=data.map((item:any)=>(
            {id:item.pets_id,
            title:item.title,
            price:item.price,
            category:item.category,
            imgUrl:item.img,
            rate:this.rateForm(item.rate)
          }));
          const searchData:string=params['id'];
          searchData[0]==="?"
            ?this.filter('title',searchData.substr(1))
            :this.filter('category',searchData)
        },
        err=>console.error('network get error:'+ err)
      );

     })
  }

}
