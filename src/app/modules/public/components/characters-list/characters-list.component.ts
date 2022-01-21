import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: any = [];
  url = environment.API_CHARACTERS_URL;

  endOfList = false;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.charactersService.getAll(this.url).subscribe((data: any) => {
      this.characters = [...this.characters, ...data.results];

      if(data.info.next != null){
        this.url = data.info.next;
      } else {
        this.endOfList = true;
      }
    });
  }

}
