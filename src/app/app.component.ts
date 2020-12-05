import { Component } from '@angular/core';
import { rejects } from 'assert';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

nombre ="Enrique"
nombre2="EnRiQue JoSe GiL qUiNtErO"
arreglo = [1,2,3,4,5,6,7,8,9,10]
video="Soly0ne467M"


activar : boolean = true; 


PI = Math.PI;

a = 0.234; 


salario = 1234.5;


heroe = {
  nombre: 'Logan',
  clave: 'Wolverine',
  edad: 500,
  direccion : {
    calle: 'primera',
    casa: '19'
  }
};

valorDePromesa = new Promise ( ( resolve, reject )=>{
  setTimeout( ()=>resolve('llegoLaData¡¡'), 3500 );
});



fecha = new Date()

}
