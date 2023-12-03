import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl : string  = environment.baseApiUrl;

  constructor(private http: HttpClient) { }


  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl + '/api/Book')
  }
  
  getSingleBook(id:string) : Observable<Book>{
    return this.http.get<Book>(this.baseUrl + '/api/Book/' + id)
  }

  addBook(addBookRequest: Book): Observable<Book>{
    addBookRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Book>(this.baseUrl + '/api/Book', addBookRequest)
  }

  updateBook(id:string, updatedBook: Book): Observable<Book>{
    return this.http.put<Book>(this.baseUrl + '/api/Book/' + id , updatedBook)
  }
}
