import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.css']
})
export class TestInputComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
