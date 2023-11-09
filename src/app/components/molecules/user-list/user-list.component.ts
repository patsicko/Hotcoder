import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Profile , SignupData} from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  @Output() onUpdateUser: EventEmitter<Profile>= new EventEmitter();
  editUserForm: FormGroup;
  users:Profile[]=[];

  constructor(private userService:UserService ){}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users)=>{
      this.users=users
    })
  }
 onSubmit(){
  

 }
 onEdit(){}
 onRemove(){}
}
