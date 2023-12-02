import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books : Book[]  = [
    {
      id:'1',
      name: 'Madolduwa',
      author: 'Martin Wickramasinghe',
      publishedYear: '1990',
      catagory: 'Ádventure'
    },
    {
      id:'2',
      name: 'Hathpana',
      author: 'K. Munidasa',
      publishedYear: '1992',
      catagory: 'Funny'
    },
  ];

  constructor(){}

  ngOnInit(): void {
    
  }
}
