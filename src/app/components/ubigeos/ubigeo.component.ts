import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ubigeo } from 'src/app/model/ubigeo';
import { UbigeoService } from 'src/app/service/ubigeo.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-ubigeo',
    templateUrl: './ubigeo.component.html',
    styleUrls: ['./ubigeo.component.css']
  })
  export class UbigeoComponent implements OnInit {
    
    
    constructor(private service:UbigeoService){}

    public ubigeo!:Ubigeo[];

    ngOnInit(): void {
        this.service.listar().subscribe(x=>this.ubigeo=x)
    }


  }
  