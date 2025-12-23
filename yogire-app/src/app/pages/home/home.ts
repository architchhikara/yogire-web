import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { OfferingsComponent } from '../../components/offerings/offerings';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, OfferingsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
