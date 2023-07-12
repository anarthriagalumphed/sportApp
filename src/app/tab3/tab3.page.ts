import { Component, OnInit } from '@angular/core';
import { TheSportsDBService } from '../services/thesportsdb.service';
import { NavController } from '@ionic/angular';

interface Player {
  idPlayer: string;
  strPlayer: string;
  strThumb: string;
  // Add other player properties as needed
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  players: Player[] = [];
  selectedTeam: number = 123; // Replace with your default team ID
  teams: any[] = []; // Modify the structure of the teams array to match the response from the API
  filteredPlayers: Player[] = [];

  constructor(private theSportsDBService: TheSportsDBService, private navCtrl: NavController) { }

  ngOnInit() {
    this.onSearchPlayersByTeam();
    this.fetchDataTeams();
  }

  onSearchPlayersByTeam() {
    this.theSportsDBService.getPlayersByTeam(this.selectedTeam.toString()).subscribe((data: any) => {
      this.players = data.player;
      this.filteredPlayers = this.players;
      // Perform data processing as needed
    });
  }

  fetchDataTeams() {
    this.theSportsDBService.getTeams().subscribe((data: any) => {
      this.teams = data.teams;
    });
  }

  openPlayerDetails(playerId: string) {
    this.navCtrl.navigateForward(`/player-detail/${playerId}`);
  }

  filterPlayers(searchTerm: string) {
    if (searchTerm === '') {
      this.filteredPlayers = this.players;
    } else {
      this.theSportsDBService.searchPlayers(searchTerm).subscribe((data: any) => {
        this.filteredPlayers = data;
      });
    }
  }
  //ini adalah last commit yang work//
}


