import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 @Input() Drawer:any;
  usuarioLogado:string="";

  subscription !: Subscription;

  constructor(private shared:SharedService){
    this.subscription = this.shared.getUsername().subscribe((retorno:string)=>{
      this.usuarioLogado=retorno;
    });
  }  
    


 public showMenu(){
  this.Drawer.toggle();
 }
}
