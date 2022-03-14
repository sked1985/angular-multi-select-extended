import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  pdList = [
    'application',
    'zipped',
    'xrays',
    'billing',
    'finances',
    'queues',
    'programming'
  ];
  filteredBanksMulti: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      pd: new FormControl([]),
      bankMultiCtrl: new FormControl([]),
      bankMultiFilterCtrl: new FormControl('')
    });
    this.orderList(this.pdList);
    this.filteredBanksMulti.next(this.pdList.slice());

    this.formGroup.get('bankMultiFilterCtrl').valueChanges
      .subscribe(() => {
        this.filterBanksMulti();
      });
  }

  orderList(pdList: string[]) {
    pdList.sort();
  }

  onKey(value) {
    console.log(value);
    // this.dataArray= []; 
    // this.selectSearch(value);       
}

  change(e) {
    const selected = [], unSelected = [];

    this.pdList.forEach(val => {
      if (e.value.indexOf(val) !== -1)
        selected.push(val);
      else
        unSelected.push(val)
    });

    this.pdList = [...selected, ...unSelected.sort()];
  }

  change1(e) {
    const selected = [], unSelected = [];

    this.pdList.forEach(val => {
      if (e.value.indexOf(val) !== -1)
        selected.push(val);
      else
        unSelected.push(val)
    });

    this.pdList = [...selected, ...unSelected.sort()];
    this.filteredBanksMulti.next(this.pdList);
  }

  toggleSelectAll(e) {

  }

  protected filterBanksMulti() {
    if (!this.pdList) {
      return;
    }
    // get the search keyword
    let search = this.formGroup.get('bankMultiFilterCtrl').value;
    if (!search) {
      this.filteredBanksMulti.next(this.pdList.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(
      this.pdList.filter(n => n.toLowerCase().indexOf(search) > -1)
    );
  }
}
