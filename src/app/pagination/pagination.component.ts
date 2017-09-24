import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {PaginationData} from "../interfaces";

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges{
  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Input() itemsPerPageOptions: number[];
  @Input() firstIndex: number;
  @Output() paginationChange: EventEmitter<PaginationData> = new EventEmitter<PaginationData>();
  // public firstItemIndex: number;
  public _itemsPerPageOptions: MenuItem[];

  ngOnChanges() {
    console.log('on change');
    if (this.firstIndex > this.totalItems - 1 && this.firstIndex > 0) {
      this.prev();
    }
  }

  ngOnInit() {
    if (this.firstIndex === undefined) {
        this.firstIndex = 0;
    }

    this._itemsPerPageOptions = this.itemsPerPageOptions.map((num) => {
      return {
        label: num.toString(),
        command: (item) => {
          this._itemsPerPage = num;
        }
      };
    });
  }

  public next() {
    this.firstIndex += this.itemsPerPage;
    this.emitChanges();
  }

  public prev() {
    this.firstIndex -= this.itemsPerPage;
    this.emitChanges();
  }

  set _itemsPerPage(val: number) {
    this.itemsPerPage = val;
    this.firstIndex = 0;
    this.emitChanges();
  }

  private emitChanges() {
    console.log('in emit changes');
    this.paginationChange.emit({
      itemsPerPage: this.itemsPerPage,
      firstIndex: this.firstIndex
    });
  }
}
