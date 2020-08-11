import { Injectable } from '@angular/core';

// demo class to understand different service instances
// @Injectable({
//   providedIn: 'root'
// })
export class LoggingService {
  lastLog: string;

  printLog(message: string) {
    console.log(message);
    console.log(this.lastLog);
    this.lastLog = message;
  }
}
