import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Product } from "../model/Product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpCliente: HttpClient) {}

  public getProducts() {
    return this.httpCliente
      .get<Product[]>(`${environment.API}/products`)
      .toPromise()
      .then((products) => {
        products.forEach((p) => {
          p.image = `${environment.API}/file/output/${p.image}`;
          p.loading = false;
          p.message = "AGREGAR";
        });
        return products;
      });
  }

  public getImagen(id: string) {
    return this.httpCliente.get(`${environment.API}/output/${id}`);
  }
}
