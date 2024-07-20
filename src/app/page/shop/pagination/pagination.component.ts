import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  @Input()
  totalPage: any;
  @Input()
  currentPage: any;
  @Input()
  itemsPerPage: any;
  @Output()
  pageSelectEvent: EventEmitter<Number> = new EventEmitter<Number>()
  pages: number[] = []

  ngOnInit(): void {
    console.log(this.currentPage)
    const length = this.totalPage > 4 ? 4 : this.totalPage;
    for(let i = this.currentPage; i <= length; i++) this.pages.push(i);
    console.log(this.pages)
    console.log(this.currentPage)
  }

  getPage(page: number) {
    this.currentPage = page
    this.pageSelectEvent.emit(page);
  }
}
