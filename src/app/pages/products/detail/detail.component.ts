import { Component, Input } from '@angular/core';
import { ProductsService } from '../../../api/services/products.service';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() id: number = 0;


}
