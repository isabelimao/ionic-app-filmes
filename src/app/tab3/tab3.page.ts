import { ICartaz, IAtores } from './../model/IFilme';
import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaAtores: IAtores[] = [
{
  nome: 'Tom Holland',
  foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2qhIDp44cAqP2clOgt2afQI07X8.jpg',
  idade: 26,
  filmes: ['Homem Aranha'],
  series: ['Sem séries'],
  favorito: false,
},
{
  nome: 'Marlon Brando',
  foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg',
  idade: 76,
  filmes: ['O Poderoso Chefão'],
  series: ['Sem séries'],
  favorito: false,
},
{
  nome: 'Terceiro Ator',
  foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2qhIDp44cAqP2clOgt2afQI07X8.jpg',
  idade: 26,
  filmes: ['Homem Aranha'],
  series: ['Sem séries'],
  favorito: false,
}
  ];
  exibirFilme(filme: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(filme: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
