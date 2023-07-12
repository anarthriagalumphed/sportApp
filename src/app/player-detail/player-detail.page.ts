import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheSportsDBService } from '../services/thesportsdb.service';

interface Player {
  idPlayer: string;
  strPlayer: string;
  strThumb: string;
  strDescriptionEN: string;
  strTeam: string;
  // Add other player properties as needed
}

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
})
export class PlayerDetailPage implements OnInit {
  playerId!: string;
  player!: Player;

  constructor(
    private activatedRoute: ActivatedRoute,
    private theSportsDBService: TheSportsDBService
  ) { }

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('playerId')!;
    this.loadPlayerDetails();
  }

  loadPlayerDetails() {
    this.theSportsDBService.getPlayerById(this.playerId).subscribe((data: any) => {
      this.player = data.players[0];
    });
  }
}
