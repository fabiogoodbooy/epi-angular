import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users = ['Omar','farouk','rebhi'];
  constructor() { }

  ngOnInit() {
  }

}
