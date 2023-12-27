import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css'],
})
export class FormdesignComponent implements OnInit {

  countryList = ['India', 'USA', 'Singapore', 'UK'];
  termList = ['15days', '30days', '45days', '60days'];

  constructor(private builder: FormBuilder) {}
  
  ngOnInit(): void {
    this.customerForm.setValue({
      name: 'Bobby Earl',
      email: 'renloe@live.com',
      phone: '111-222-3333',
      country: "USA",
      term: "45days",
      address: 'add1',
      dateOfBirth: new Date(1968, 5, 22),
      gender: 'Male',
      status: true
    });
  }

  customerForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', [Validators.required, Validators.email]),
    phone: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    term: this.builder.control('', Validators.required),
    dateOfBirth: this.builder.control(new Date(2000, 2, 20)),
    gender: this.builder.control('', Validators.required),
    status: this.builder.control(true),
  });

  saveCustomer() {
    console.log(this.customerForm.value);
    console.log(this.customerForm.valid)
  }

  clearForm() {
    this.customerForm.reset();
  }
}
