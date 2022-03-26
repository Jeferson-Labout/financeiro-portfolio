import { Injectable, Injector } from '@angular/core';
import { Category } from "./category.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService<Category> {

  constructor(protected injector: Injector) {
    super(`${environment.API}category`, injector, Category.fromJson);
  }

}