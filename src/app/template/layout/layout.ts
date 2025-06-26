import {Component, OnInit} from '@angular/core';
import {LayoutProps} from './layoutProps';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map} from 'rxjs';
import {Authgoogle} from '../../authgoogle';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {
    props : LayoutProps = {titulo: '' , subTitulo: ''};

    constructor(
      private router: Router,
      private activatedRouter: ActivatedRoute,
      private loginService: Authgoogle
    ) {}

  ngOnInit(): void {

      this.router.events
        .pipe(
          filter(() => this.activatedRouter.firstChild !== null),
          map(() => this.obterPropsLayout())
        ).subscribe((props: LayoutProps) => this.props = props);
    }

  obterPropsLayout(): LayoutProps {

      let rotaFilha = this.activatedRouter.firstChild;

      while (rotaFilha?.firstChild){
        rotaFilha = rotaFilha.firstChild;
      }

      return rotaFilha?.snapshot.data as LayoutProps;
  }

  logout(){
      this.loginService.logout();
  }
}
