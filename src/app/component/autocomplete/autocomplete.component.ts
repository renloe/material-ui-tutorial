import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ColorEntity } from 'src/app/Entity/colorEntity';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  filterOptionsList!: Observable<ColorEntity[]>;
  formControl = new FormControl('');

  colorArrayList: ColorEntity[];

  constructor(private service: MasterService) {
    this.colorArrayList = this.service.getColorList();
  }

  ngOnInit(): void {
    this.filterOptionsList = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.colorListFilter(value || ''))
    );
  }

  private colorListFilter(value: string): ColorEntity[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorArrayList.filter(
      (option) =>
        option.name.toLocaleLowerCase().includes(searchvalue) ||
        option.code.toLocaleLowerCase().includes(searchvalue)
    );
  }
}
