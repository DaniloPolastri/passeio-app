import {Component, OnInit} from '@angular/core';
import {Lugar} from '../../lugares/lugar';
import {Categoria} from '../../categorias/categoria';
import {LugaresService} from '../../lugares/lugares-service';
import {CategoriaService} from '../../categorias/categoria.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-galeria-component',
  standalone: false,
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.scss'
})
export class GaleriaComponent implements OnInit {

  lugares$!:  Observable<Lugar[]>;
  categoriasFiltros$!: Observable<Categoria[]>;
  nomeFiltro: string = '';
  categoriaFiltros: string = '';

  constructor(
    private serviceLugar: LugaresService,
    private serviceCategoria: CategoriaService,
  ) {}


  ngOnInit(): void {
    this.categoriasFiltros$ = this.serviceCategoria.obterTodas();
    this.lugares$ = this.serviceLugar.obterTodos();
  }

  getTotalEstrelasLugar(lugar: Lugar): string{
    return '&#9733'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar(){
    this.lugares$ = this.serviceLugar.filtrar(this.nomeFiltro, this.categoriaFiltros);
  }

}
