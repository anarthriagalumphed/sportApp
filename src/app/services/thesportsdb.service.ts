import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TheSportsDBService {
  private apiKey: string = environment.apiKey;
  private baseUrl: string = 'https://www.thesportsdb.com/api/v1/json/';

  constructor(private http: HttpClient) { }

  getTeams() {
    const url = `${this.baseUrl}${this.apiKey}/search_all_teams.php?l=English%20League%20Championship`;
    return this.http.get(url);
  }

  getTeamByLeague(strLeague: string) {
    const url = `${this.baseUrl}${this.apiKey}/search_all_teams.php?l=${strLeague}`;
    return this.http.get(url);
  }

  getEvents() {
    const url = `${this.baseUrl}${this.apiKey}/eventsseason.php?id=4328&s=2023-2024`;
    return this.http.get(url);
  }

  getLeagues() {
    const url = `${this.baseUrl}${this.apiKey}/all_leagues.php`;
    return this.http.get(url);
  }

  getPlayersByTeam(teamId: string) {
    const url = `${this.baseUrl}${this.apiKey}/lookup_all_players.php?id=${teamId}`;
    return this.http.get(url);
  }


  getEventsByYear(strYear: number) {
    const url = `${this.baseUrl}${this.apiKey}/eventsseason.php?id=4328&s=${strYear}`;
    return this.http.get(url);
  }

  getActivePlayers(teamId: string) {
    const url = `${this.baseUrl}${this.apiKey}/lookup_all_players.php?id=${teamId}`;
    return this.http.get(url);
  }

  getTeamById(teamId: string) {
    const url = `${this.baseUrl}${this.apiKey}/lookupteam.php?id=${teamId}`;
    return this.http.get(url);
  }
  getPlayersByTeamAndName(teamName: string, playerName: string) {
    const url = `${this.baseUrl}${this.apiKey}/searchplayers.php?t=${teamName}&p=${playerName}`;
    return this.http.get(url).pipe(
      map((data: any) => data.player)
    );
  }

  //above is last commit 


  searchPlayers(searchTerm: string) {
    const url = `${this.baseUrl}${this.apiKey}/searchplayers.php?p=${searchTerm}`;
    return this.http.get(url).pipe(
      map((data: any) => data.player)
    );
  }

  getPlayerById(playerId: string) {
    const url = `${this.baseUrl}${this.apiKey}/lookupplayer.php?id=${playerId}`;
    return this.http.get(url);
  }
  // sampai sini terakhir work 

  getActivePlayersByTeamId(teamId: string) {
    const url = `${this.baseUrl}${this.apiKey}/lookup_all_players.php?id=${teamId}`;
    return this.http.get(url);
  }
  //work

  getAllPlayers() {
    const url = `${this.baseUrl}${this.apiKey}/searchplayers.php?p=`
    return this.http.get(url);
  }

  // Tambahkan metode lain sesuai dengan kebutuhan proyek Anda, seperti mendapatkan detail olahraga, jadwal pertandingan, dll.
}
