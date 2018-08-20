import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  todo = {};
  fbTodo: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.fbTodo = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  logFBForm(){
     console.log(this.fbTodo.value);
  }
  logForm() {
    console.log(this.todo);
  }
}
