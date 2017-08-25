import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService} from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MemberService]
})
export class MessageComponent implements OnInit {


  constructor(){}

  ngOnInit() {
  }


}
