import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoviesProvider
  ]
})
export class FeedPage {

  public objecto_feed = {
    titulo: "Nelson Chadali by API",
    data: "November 5, 1955",
    descricao: ">Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qtd_likes: 14,
    qtd_comments: 5,
    time: "11h ago"

  }

  public lista_filmes = new Array<any>(); //cria uma lista para guardar os filmes

  public nome_usuario:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private moviesProvider: MoviesProvider) {
  }

  soma(n1:number,n2:number){
    alert(n1 + n2);
  }

  ionViewDidLoad() {
    //this.soma(10,20);
    this.moviesProvider.pegaUltimosFilmes().subscribe(
      data =>{

          const response = (data as any); //faz um cast so provider para um tipo qualquer
          const obj_retorno = JSON.parse(response._body); //converte o response para JSON

          this.lista_filmes = obj_retorno.results; //atribui a lista de filmes o resultado da API

          console.log(obj_retorno);
    }),
    error =>{
      console.log(error);
    }
    console.log('ionViewDidLoad FeedPage');
  }


}
