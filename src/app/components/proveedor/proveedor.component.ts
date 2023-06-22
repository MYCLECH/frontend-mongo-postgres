import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/model/proveedor';
import { Ubigeo } from 'src/app/model/ubigeo';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { UbigeoService } from 'src/app/service/ubigeo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  proveedorForm!: FormGroup;
  public ubigeoOptions!: Ubigeo[];

  constructor(private proveedorService: ProveedorService,
    private ubigeoService: UbigeoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.proveedorForm = this.formBuilder.group({
      razonSocial: ['', Validators.required],
      ruc: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      celular: ['', Validators.required],
      contacto: ['', Validators.required],
      estado: ['', Validators.required],
      fechaRegistro: ['', Validators.required],
      ubigeo: ['', Validators.required]
    });
    this.ubigeoService.listar().subscribe(data => {
      this.ubigeoOptions = data;

    });
  }

  registrarProveedor(): void {
    if (this.proveedorForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El formulario es invalido',
      });
      return;
    }

    const proveedor: Proveedor = this.proveedorForm.value;
    if (this.proveedorForm.valid) {
      const proveedor: Proveedor = this.proveedorForm.value;
      this.proveedorService.guardar(proveedor).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El cliente ha sido registrado correctamente',
        });

        this.proveedorForm.reset();
      });
    }
  }
}
