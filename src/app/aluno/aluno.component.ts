import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }
   enviar(){
     alert(this.lucca)
     


  }

    aluno = ["Não", "Tenho", "Nenhum", "amigo"]
    lucca = ""

}