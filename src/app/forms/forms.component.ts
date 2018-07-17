import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private api: DataService) { }

  ngOnInit() {
  }

  signup(form) {
    console.log("Hurray I got Data", form.value)
    console.log("Hey Ramu here I'm in forms.component.ts transfering file to data.service.ts")
    this.api.post(form.value).subscribe(result => {
      // here it will return response from api
    })
  }
}
