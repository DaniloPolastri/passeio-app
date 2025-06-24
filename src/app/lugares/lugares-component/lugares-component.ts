import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../categorias/categoria';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriaService} from '../../categorias/categoria.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lugares-component',
  standalone: false,
  templateUrl: './lugares-component.html',
  styleUrl: './lugares-component.scss'
})
export class LugaresComponent implements OnInit {

  camposForm: FormGroup;
  categorias$!: Observable<Categoria[]>;

  constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      localizacao: new FormControl('', [Validators.required]),
      urlFoto: new FormControl('', [Validators.required]),
      avaliacao: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    this.categorias$ = this.categoriaService.obterTodas();
  }

  salvar() {
    console.log(this.camposForm.value);
  }
}
