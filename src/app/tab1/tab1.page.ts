import { Component } from '@angular/core';
import { TheSportsDBService } from '../services/thesportsdb.service';
import { OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  teams: any[] = [];
  leagues: any[] = [];
  selectedLeague: string | undefined;

  constructor(private theSportsDBService: TheSportsDBService, private navCtrl: NavController) { }

  ngOnInit() {
    this.fetchDataTeam();
    this.fetchDataLeagues();
  }

  fetchDataTeam() {
    this.theSportsDBService.getTeams().subscribe((data: any) => {
      this.teams = data.teams;
      console.log(data);
    });
  }

  fetchDataLeagues() {
    this.theSportsDBService.getLeagues().subscribe((data: any) => {
      // Filter hanya liga sepak bola
      this.leagues = data.leagues.filter((league: any) => league.strSport === 'Soccer');
    });
  }

  getTeamsByLeague() {
    if (this.selectedLeague) {
      this.theSportsDBService.getTeamByLeague(this.selectedLeague)
        .subscribe((data: any) => {
          this.teams = data.teams;
          console.log(data);
        });
    } else {
      this.fetchDataTeam(); // Memuat semua tim
    }
  }

  openDetail(idTeam: number) {
    this.navCtrl.navigateForward('/detail/' + idTeam + '/' + this.selectedLeague);
    console.log(idTeam);
  }

}
