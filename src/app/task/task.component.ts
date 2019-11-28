import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() tache : any;

  constructor() { }

  ngOnInit() {
  }

  invertDoneStatus() {
    this.tache.isDone = !this.tache.isDone;
  }
}