import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap, map } from 'rxjs/operators';

interface Team {
  idTeam: string;
  idSoccerXML: string;
  idAPIfootball: string;
  intLoved: string | null;
  strTeam: string;
  strDescriptionEN: string;
  intFormedYear: number;
  strAlternate: string;
  strTeamBadge: string;
  strCountry: string;
  // Tambahkan properti lain sesuai kebutuhan
}

interface Player {
  strPlayer: string;
  strPosition: string;
  strThumb: string;
  // Tambahkan properti lain sesuai kebutuhan
}

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.page.html',
  styleUrls: ['./detail-team.page.scss'],
})
export class DetailTeamPage implements OnInit {
  teams: Team[] = [];
  team: Team | null = null;
  players: Player[] = [];
  league: string = '';

  private apiKey: string = environment.apiKey;
  private baseUrl: string = 'https://www.thesportsdb.com/api/v1/json/';

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const league = this.route.snapshot.paramMap.get('league');
    this.league = league !== null ? league : '';
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const idTeam = params.get('id');
          if (idTeam === null) {
            return of(null);
          }
          return this.getTeams().pipe(
            map((teams) => this.filterTeamById(teams, idTeam))
          );
        }),
        switchMap((team: Team | null) => {
          if (team) {
            this.team = team;
            return this.fetchPlayersByTeam(team.idTeam);
          } else {
            return of([]);
          }
        })
      )
      .subscribe((players: Player[]) => {
        this.players = players;
        console.log(this.players);
      });
  }

  getTeams(): Observable<Team[]> {
    const url = `${this.baseUrl}${this.apiKey}/search_all_teams.php?l=${this.league}`;
    return this.http.get<{ teams: Team[] }>(url).pipe(
      map((response) => response.teams)
    );
  }

  filterTeamById(teams: Team[], teamId: string): Team | null {
    return teams.find((team) => team.idTeam === teamId) || null;
  }

  goBack() {
    this.navCtrl.back();
  }

  fetchPlayersByTeam(teamId: string): Observable<Player[]> {
    const url = `${this.baseUrl}${this.apiKey}/lookup_all_players.php?id=${teamId}`;
    return this.http.get<{ player: Player[] }>(url).pipe(
      map((response) => response.player)
    );
  }
}


// work