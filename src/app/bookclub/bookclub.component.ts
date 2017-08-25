import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-bookclub',
  templateUrl: './bookclub.component.html',
  styleUrls: ['./bookclub.component.css']
})
export class BookclubComponent implements OnInit {
  members: Member[] = [
    new Member("Bob", "Ross", "bob@email.com", "Moby Dick", "Her", "Stuff", 1),
    new Member("Bill", "Bob", "bb@email.com", "Her", "1984", "Stuffs", 2),
  ];

  constructor() { }

  ngOnInit() {
  }

}
