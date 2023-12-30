import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css'],
})
export class AssociateComponent implements OnInit {
  associates: any = [];
  addressArray!: FormArray<any>;

  constructor(private builder: FormBuilder, private service: MasterService) {}

  ngOnInit(): void {
    this.loadAssociates();
  }

  myform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    address: this.builder.control(''),
  });

  saveAssociate() {
    console.log(this.associates);
  }

  addAddress() {
    this.addressArray = this.myform.get<any>('address') as FormArray;
    this.addressArray.push(this.createAddressRow());
  }

  createAddressRow() {
    return this.builder.group({
      title: this.builder.control(''),
      country: this.builder.control(''),
      fullAddress: this.builder.control(''),
    });
  }

  loadAssociates() {
    this.service.getAssociates().subscribe({
      next: (associates) => {
        this.associates = associates;
      },
    });
  }

  get getAddress() {
    return this.myform.get<any>('address') as FormArray;
  }
}
