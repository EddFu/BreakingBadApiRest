import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Personaje } from 'src/app/interface/Personaje';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  personajes: Personaje[] | undefined;
  personajesCopy: Personaje[] | undefined;

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  async getData() {
    await this.http.get<any>(environment.apiUrl + "/characters")
      .subscribe((res) => {
        // console.table(res);
        this.personajes = res.map(({char_id, name, nickname, img, occupation}: Personaje) => {
          return {
            char_id: char_id,
            name: name,
            img: img,
            nickname: nickname,
            occupation: occupation
          }
        });

        this.personajesCopy = this.personajes;

      });
  }

  filter(e:any) {
    const search: string = e.target.value;

    this.personajes = this.personajesCopy?.filter(({ name }: Personaje) => {
      return name.toLocaleLowerCase().includes(search.toLowerCase());
    })
    // console.log({search});
    //filtrar esto
  };

}
