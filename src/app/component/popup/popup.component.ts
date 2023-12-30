import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  inputData: any;
  editData: any;
  closeMessage = 'Closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private popupRef: MatDialogRef<PopupComponent>,
    private builder: FormBuilder,
    private masterService: MasterService
  ) {}

  ngOnInit(): void {
    this.inputData = this.data;
    if (this.inputData.code > 0) {
      this.setPopupData(this.inputData.code);
    }
  }

  setPopupData(code: any) {
    this.masterService.getCustomerByCode(code).subscribe((item) => {
      this.editData = item;
      this.myForm.setValue({
        name: this.editData.name,
        email: this.editData.email,
        phone: this.editData.phone,
        status: this.editData.status,
      });
    });
  }

  closePopup() {
    this.popupRef.close('Closed using function');
  }

  myForm = this.builder.group({
    name: this.builder.control(''),
    email: this.builder.control(''),
    phone: this.builder.control(''),
    status: this.builder.control(true),
  });

  saveUser() {
    this.masterService.saveCustomer(this.myForm.value).subscribe((res) => {
      this.closePopup();
    });
  }
}
