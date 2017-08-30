import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrystudent',
  templateUrl: './entrystudent.component.html',
  styleUrls: ['./entrystudent.component.css']
})
export class EntrystudentComponent implements OnInit {
  studentCollection: Array<object> = [];
  studentRecord: object;
  studNo: number;
  studFName: string;
  studLName: string;
  studProg:string
  studYr: number

  getStudentNum(){
    this.studentRecord = {
      studNum: this.studNo,
      studFName: this.studFName,
      studLName: this.studLName,
      studProg: this.studProg,
      studYr: this.studYr
    }
  }
    
    clearValues(): void{
    this.studNo = null;
    this.studFName = null;
    this.studLName = null;
    this.studProg = null;
    this.studYr = null;

  }

  ngOnInit() {
  }

}
