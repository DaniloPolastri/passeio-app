import {Component, OnInit, signal} from '@angular/core';
import {Categoria} from '../../categorias/categoria';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriaService} from '../../categorias/categoria.service';
import {Observable} from 'rxjs';
import {LugaresService} from '../lugares-service';

@Component({
  selector: 'app-lugares-component',
  standalone: false,
  templateUrl: './lugares-component.html',
  styleUrl: './lugares-component.scss'
})
export class LugaresComponent implements OnInit {

  camposForm: FormGroup;
  categories = signal<Categoria[]>([]);

  constructor(
    private categoriaService: CategoriaService,
    private service: LugaresService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      localizacao: new FormControl('', [Validators.required]),
      urlFoto: new FormControl('', [Validators.required]),
      avaliacao: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    this.categoriaService.obterTodas().subscribe((data) => {
      console.log(data);
      this.categories.set(data)

    })
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid) {
      this.service.salvar(this.camposForm.value).subscribe({
        next: data => {
          console.log('Salva com sucesso: ', data);
          this.camposForm.reset();
        },
        error: err => {console.log(err)}
      });
    }

  }

  isCampoInvalido(nomeCampo:string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo.touched && campo?.errors?.['required']) || false;
  }
}
