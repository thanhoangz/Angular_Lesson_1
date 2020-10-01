import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public resultToScreen: number = 0;
  public subResultToScreen: any = 0;
  public subtend = null;

  public firstNumber = 0;
  public secondNumber = 0;

  public flag = false;
  constructor() { }

  ngOnInit() {
  }

  /* Thay đổi giá trị cho biến resultToScreen - để in ra màn */
  public changeResultToScreen(number: number) {
    this.resultToScreen = Number(this.resultToScreen) * 10 + number;
    // nhập cho số thứ nhất
    if (null === this.subtend) {
      this.firstNumber = Number(this.resultToScreen);
    } else {     // nhập cho số thứ hai
      if (false === this.flag) {
        this.flag = true;
        this.resultToScreen = 0;
        this.secondNumber = Number(this.resultToScreen) * 10 + number;
        this.resultToScreen = this.secondNumber;
      } else {
        this.secondNumber = Number(this.secondNumber) * 10 + number;
        this.resultToScreen = this.secondNumber;
      }



    }
    //this.subResultToScreen = this.subResultToScreen + ' ' + number;
  }

  // hàm xóa số cuối
  public deleteFinalNumber() {
    this.resultToScreen = Math.floor(Number(this.resultToScreen) / 10);
    this.subResultToScreen = Math.floor(Number(this.subResultToScreen) / 10);
  }

  // Hàm xử lý dấu +, -, *, / +:0 -: , *2, /3
  public changeSubtend(subtend: string) {
    switch (subtend) {
      case '+':
        this.subtend = 0;
        break;
      case '-':
        this.subtend = 1;
        break;
      case '*':
        this.subtend = 2;
        break;
      case '/':
        this.subtend = 3;
        break;

      default:
        break;
    }
  }

  // hàm xử lý dấu =
  public CalNumber() {
    switch (this.subtend) {
      case 0:
        this.resultToScreen = Number(this.firstNumber) + Number(this.secondNumber);
        this.subtend = null;
        this.firstNumber = Number(this.resultToScreen);
        this.secondNumber = 0;
        this.flag = false;
        break;
      case 1:
        this.resultToScreen = Number(this.firstNumber) - Number(this.secondNumber);
        this.subtend = null;
        this.firstNumber = Number(this.resultToScreen);
        this.secondNumber = 0;
        this.flag = false;

        break;
      case 2:
        break;
      case 3:
        break;

      default:
        break;
    }


  }
}
