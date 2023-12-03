import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import {BooksService} from '../../services/books.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books : Book[]  = [];

  constructor(private bookService: BooksService ){}

  ngOnInit(): void {
    this.bookService.getAllBooks()
      .subscribe({
        next:(response) => {
          this.books = response
        }
      })
  }
}
