

import { BaseResourceListComponent } from "../../../shared/components/base-resource-list/base-resource-list.component";
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Entry } from "../shared/entry.model";
import { EntryService } from "../shared/entry.service";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {
  @ViewChild('month', { static: true }) month: ElementRef = null;
  @ViewChild('year', { static: true }) year: ElementRef = null;
  constructor(private entryService: EntryService) {
    super(entryService);
  }


  getByMonthAndYear() {
    const month = this.month.nativeElement.value;
    const year = this.year.nativeElement.value;

    if (!month || !year)
      alert('Você precisa selecionar o Mês e o Ano para gerar os relatórios')
    else
      this.entryService.getByMonthAndYear(month, year).subscribe(resources => this.resources = resources.sort(),
        // .sort((a,b) => b.id - a.id)      
        error => alert('Erro ao carregar a lista'))
  }

}
