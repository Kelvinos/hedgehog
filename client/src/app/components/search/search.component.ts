import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  smartphones: any = [];

  search(term: string): void {

    this.smartphones = [];

    if (term === "")
      return;

    this.dataService.getSmartPhone()
      .subscribe(
        data => {

          for (const d of (data as any)) {

            if (d.name.includes(term)) {
              this.smartphones.push({
                name: d.name,
                price: d.price
              });
            }

          }
          console.log(this.smartphones);
        }
      )
  }

}
