import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../component/confirm-dialog/confirm-dialog.component';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  publishers =[
    {
      id: "DC Comics",
      desc: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ];
  hero: Hero ={
    superhero:"",
    alter_ego:"",
    characters:"",
    first_appearance:"",
    publisher: Publisher.DCComics,
    alt_img:"",
  }

  constructor( private heroesService: HeroesService,
               private activatedRout: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes("edit")){
      return;
    }

    this.activatedRout.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id)))
    .subscribe( hero => this.hero = hero);

  }

  save(){
    if(this.hero.superhero.trim().length === 0){
      //Validación nombre requerido
      return;
    }
    if(this.hero.id){
      //Actualizar
      this.heroesService.updateHero(this.hero)
        .subscribe(hero => {
          this.router.navigate(['/heroes',hero.id]);
          this.showSnackBar(hero.superhero+" actualizado exitosamente (:")
        })
    }else{
      //Crear
      this.heroesService.addHero(this.hero)
        .subscribe( hero => {
          this.router.navigate(['/heroes',hero.id]);
          this.showSnackBar(hero.superhero+ " creado exitosamente :)");
      })
    }
  }

  delete(){
    
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '100%',
      data: {...this.hero}
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if(result) {
          this.heroesService.deleteHero(this.hero.id!)
          .subscribe(resp => {
            this.router.navigate(['/heroes']);
            this.showSnackBar(this.hero.superhero+ " borrado exitosamente");
          });
        }
      }
    )
  }

  showSnackBar(message: string){
    this.snackBar.open(message, "Got it!",{
      duration:3500
    })
  }

}
