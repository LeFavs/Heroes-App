import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes: Hero [] = [];

  constructor( private heroesservice: HeroesService) { }

  ngOnInit(): void {
    this.heroesservice.getHeroes()
    .subscribe( heroes => this.heroes = heroes );
  }

}
