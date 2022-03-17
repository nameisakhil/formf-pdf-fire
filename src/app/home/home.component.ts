import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../shared/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fontStyleControl = new FormControl();
  formArray = [];


  constructor(public formService:FormService,private router:Router) { }

  ngOnInit(): void {
    this.formService.getFormList().subscribe(
      list => {
        this.formArray = list.map((item) => {
          return {
            $key:item.key,
            expand:false,
            ...item.payload.val()
          };
        });
      }
    );

  }

  onDelete($key){
    if (window.confirm('Are you sure to delete this record?')){
      this.formService.deleteUser($key);
    }
  }

  onClickForm(){
    this.formService.Form1.reset();
  }

}
