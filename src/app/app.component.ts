import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-front-end';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    $('button').click(function () {
      $('#result').html('<b>hello world</b>');
    });
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
