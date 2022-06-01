import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null!,
  };

  constructor(private productSerivce: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productSerivce.create(this.product).subscribe(() => {
      this.productSerivce.showMessage("Produto Criado com sucesso !");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
