import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers'];
  categoryList:string[]=['category-A','category-B','category-C'];

  constructor() { }

  ngOnInit(): void {
  }

}
