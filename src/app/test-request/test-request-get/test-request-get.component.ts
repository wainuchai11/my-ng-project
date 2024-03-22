import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.scss',
})
export class TestRequestGetComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Book[]>('https://www.anapioficeandfire.com/api/books/')
      .subscribe((respones) => {
        console.log(
          '🚀 ~ file: test-request-get.component.ts:17 ~ TestRequestGetComponent ~ .subscribe ~ respones:',
          respones
        );
        this.bookList = respones;
      });
  }
}
