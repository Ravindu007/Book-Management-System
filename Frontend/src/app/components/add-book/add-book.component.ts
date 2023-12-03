import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  implements OnInit{
  ngOnInit(): void {
  }


  constructor(private bookService: BooksService, private router:Router){}

  addBook: Book = { 
    id:'',
    name: '',
    author: '',
    datePublished: '',
    category:''
  }


  addBookRequest(){
    this.bookService.addBook(this.addBook)
    .subscribe({
      next:(response) => {
        this.router.navigate([''])
      }
    })
  }

}
