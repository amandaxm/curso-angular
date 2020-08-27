import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];
  constructor(private cursoService: CursoService) {
    this.nomePortal = 'http://loiane.training';
  
    //var servico = new CursoService();
    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}
