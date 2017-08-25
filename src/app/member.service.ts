import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { MEMBERS } from './member-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers(){
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.database.object('members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localUpdatedMember){
  var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
  memberEntryInFirebase.update({first:    localUpdatedMember.first,
                              last: localUpdatedMember.last,
                              email: localUpdatedMember.email, current: localUpdatedMember.current, past: localUpdatedMember.past,
                            note: localUpdatedMember.note});
  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }


}
