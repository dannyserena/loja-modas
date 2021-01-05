import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LojasService } from 'src/app/lojas/lojas.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /*como o componente review tem que ser acessado loja pelo caminho
     /loja/id usa subrota do componente PARENT da rota antes do snapshot */
      this.reviews = this.lojasService
          .reviewsofLoja(this.route.parent.snapshot.params['id'])
  }

}
