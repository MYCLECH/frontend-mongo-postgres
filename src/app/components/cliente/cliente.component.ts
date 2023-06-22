import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';
import { Ubigeo } from 'src/app/model/ubigeo';
import { ClienteService } from 'src/app/service/cliente.service';
import { UbigeoService } from 'src/app/service/ubigeo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clienteForm: FormGroup;
  public ubigeoOptions!: Ubigeo[];

  constructor(private clienteService: ClienteService,
    private ubigeoService: UbigeoService,
    private formBuilder: FormBuilder) {
    this.clienteForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      dni: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      fechaRegistro: ['', Validators.required],
      direccion: ['', Validators.required],
      estado: [true, Validators.required],
      ubigeo: ['', Validators.required]
    });
    ubigeoService.listar().subscribe(data => {
      this.ubigeoOptions = data;

    });
  }

  registrarCliente() {
    if (this.clienteForm.valid) {
      const cliente: Cliente = this.clienteForm.value;
      this.clienteService.guardar(cliente).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El cliente ha sido registrado correctamente',
        });
      });
      this.clienteForm.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El formulario es invalido',
      });
    }
  }
}
