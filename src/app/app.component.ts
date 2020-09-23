import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public testData = true;
  public testData2: ConNguoi = {
    ten: 'Luận',
    tuoi: 21,
    gioiTinh: true,
    mauDa: MauDa.DaDen,
  };

  public sanPham: SanPham = {
    maSP: 'SP0-01/X',
    hinhAnh:
      'https://tech5s.com.vn/uploads/tintuc/9-loi-khuyen-khi-chup-anh-san-pham-tren-website-ban-hang-2-banner.jpg',
    moTa: 'Mô tả.....',
    gia: 1000000,
    trangThai: TrangThai.ConHang,
  };

  constructor() {
    this.testData2.ten = 'Dương';
    this.testData2.tuoi = 30;
  }
}
enum MauDa {
  DaDen,
  DaTrang,
  DaVang,
}

class ConNguoi {
  public ten: string;
  public tuoi: number;
  public gioiTinh: boolean;
  public mauDa: MauDa;
  constructor() {}
}

enum TrangThai {
  ConHang,
  HetHang,
}

interface SanPham {
  maSP: string;
  hinhAnh: string;
  moTa: string;
  gia: number;
  trangThai: TrangThai;
}
