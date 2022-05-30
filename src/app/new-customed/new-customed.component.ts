import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-customed',
  templateUrl: './new-customed.component.html',
  styleUrls: ['./new-customed.component.less']
})
export class NewCustomedComponent implements OnInit {

  @Input() article: any;
  constructor() { }

  ngOnInit(): void {
  }

}
