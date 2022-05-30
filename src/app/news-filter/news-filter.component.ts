import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.less']
})
export class NewsFilterComponent implements OnInit {

  @Input() optionsShow : any;
  @Output() optionSelected: any = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  changeOption(elemento: any){
    this.optionSelected.emit(elemento);
  }

}
