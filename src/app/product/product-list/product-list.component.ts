import { Component, OnInit } from '@angular/core';

//mat
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];
/** Flat node with expandable and level information */
interface detailCard {
  title: string;
  price:number;
  commit: string;
  imgUrl:string;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-orders-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  options:string[]=['from low to high','from high to low'];
  details:detailCard[]=[
    {
      title:'title' ,
      price:20,
      commit:"commit get",
      imgUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      title:'title' ,
      price:20,
      commit:"commit get",
      imgUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      title:'title' ,
      price:20,
      commit:"commit get",
      imgUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg"
    }
  ];

  constructor() {

  }


  ngOnInit(): void {
  }
}
