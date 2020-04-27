import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { error } from 'protractor';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private bookService:BooksService) { }
books=[];
errorMsg="";
  ngOnInit(): void {
    this.bookService.getBook().subscribe(data=>this.books=data,
      error=>this.errorMsg=error)
  }

}
