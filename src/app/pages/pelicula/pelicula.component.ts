import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieDetailsResponse } from '../../interfaces/movie-response';
import { Movie } from '../../interfaces/cartelera-response';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieDetailsResponse;
  public cast: Cast[];

  constructor(private activatedRouter: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    const { id }=this.activatedRouter.snapshot.params;
        this.peliculasService.getPeliculaDetalle(id).subscribe(movie=>{

          this.pelicula=movie;
          if (!movie) {
            this.router.navigateByUrl('/home');
            return;
          }
          this.pelicula=movie;
        });
    
    
        this.peliculasService.getCast(id).subscribe(cast=>{
          this.cast=cast;
        })
    
      }