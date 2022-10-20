import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero!: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    // .pipe(
    //   switchMap(({ id }) => this.heroesService.getHeroById(id))
    // )
    // .subscribe(hero => this.hero = hero);
    

    this.activatedRoute.params
    .subscribe(params => {
      this.heroesService.getHeroById(params['id'])
      .subscribe(hero => this.hero = hero);
    });
  }
 

  goBack(){
    this.router.navigate(['heroes/list']);
  }
  goEdit(){
    this.router.navigate(['/heroes/edit', this.hero.id]);
  }

}
