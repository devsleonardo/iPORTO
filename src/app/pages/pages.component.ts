import { Comments } from './../core/models/comments';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//SERVICES
import { GorestService } from '../core/services/gorest/gorest.service';
import { SweetAlertService } from '../core/services/sweetAlertIcon/sweetAlert.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  validButton: boolean = true;
  comments: Comments[] = [];
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),

    // Por padrão, a api do gorest não aceita a falta do envio do status e do genero é uma validação obrigadoria do backend.
    // VEJA: https://gorest.co.in/my-account/logs || Precisa estar autenticado/logado com o token de acesso.

    gender: new FormControl('male', [Validators.required]),
    status: new FormControl('active', [Validators.required]),
  });
  constructor(private gorest: GorestService, private swal: SweetAlertService) {
    this.gorest.getComments().subscribe((res: Comments[]) => {
      this.comments = res;
    });
  }

  ngOnInit() {}

  buttonClick() {
    if (this.validButton) {
      this.validButton = false;
    } else {
      this.validButton = true;
    }
  }

  postContact() {
    this.gorest.postUsers(this.form.value).subscribe(
      (res) => {
        this.swal.showAlert('Sucesso', 'Pedido cadastrado com sucesso', 'success');
      },
      (err) => {
        this.swal.showAlert('Erro', 'Erro ao cadastrar pedido', 'error');
      }
    );
  }
}
