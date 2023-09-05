import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  forma!: FormGroup;

constructor(private fb:FormBuilder){
  this.crear();
}

get password1NoValido(){
  return this.forma.get('password1')?.invalid && this.forma.get('password1')?.touched;
}
get password2NoValido(){
  return this.forma.get('password2')?.invalid && this.forma.get('password2')?.touched;
}

crear(){
 this.forma = this.fb.group({
  password1: ['', Validators.required],
  password2: ['', [Validators.required, Validators.minLength(6)] ]



 },{
   Validators: this.passwordIguales('password1', 'password2')

 }
 
 
 
 )


}
 guardar(){
  console.log(this.forma);

  this.passNovalido();

  if (this.forma.invalid){

    return Object.values(this.forma.controls).forEach(control=>{
      control.markAllAsTouched();
  })
  }

 }

 passNovalido(){
  const pass1 = this.forma.get('password1')?.value;
  const pass2 = this.forma.get('password2')?.value;

  if(pass1 !== pass2){

     return true;
  }else{
    return false;
  }

 }


 passwordIguales(pass1Name:string, pass2Name:string){

  return( FormGroup: FormGroup) =>{

    const pass1Control = FormGroup.get(pass1Name);
    const pass2Control = FormGroup.get(pass2Name);

    if(pass1Control?.value=== pass2Control?.value){

      pass2Control?.setErrors(null);
    }else{
      pass2Control?.setErrors({noEsIgual:true})
    }
    
  }

 }

}


