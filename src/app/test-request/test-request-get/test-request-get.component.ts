import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.scss',
})
export class TestRequestGetComponent implements OnInit {
  bookList: Book[] = [];
  url = 'https://anapioficeandfire.com/api/books';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  handleSearch(name: string) {
    this.http.get<Book[]>(this.url + '?name=' + name).subscribe((respones) => {
      this.bookList = respones;
      this.cdr.detectChanges();
    });
    console.log('searching for book with name: ', name);
  }
}
