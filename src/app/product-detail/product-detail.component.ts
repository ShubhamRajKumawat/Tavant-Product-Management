import { Component, OnInit } from "@angular/core";
import { IProduct } from "../product-list/product";

@Component({
  //selector is removed here because we dont need to nested this component.
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: "Product Detail";
  product: IProduct[];
  constructor() {}

  ngOnInit() {}
}
