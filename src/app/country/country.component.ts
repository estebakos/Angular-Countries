import { Component, OnInit, Input } from '@angular/core';

const TEAMS: Team[] = [
  { teamTournaments: 15, teamName: 'Atlético Nacional' },
  { teamTournaments: 13, teamName: 'América' },
  { teamTournaments: 14, teamName: 'Millonarios' }
];

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  teams = TEAMS;
  newTeam: Team;
  constructor() {
    this.newTeam = new Team();
  }

  addTeam() {
    if (this.newTeam) {

      const entry = {
        'teamName': this.newTeam.teamName,
        'teamTournaments': this.newTeam.teamTournaments
      };

      this.teams.push(entry);
    }
  }

  removeTeam(team: Team, id: string) {
    this.teams.splice(this.teams.indexOf(team), 1);
  }
  addOperation(saludos: HTMLUListElement){
  saludos.style.backgroundColor = 'red';
}

ngOnInit() {
}

}

export class Team {
  teamName: string;
  teamTournaments: number;
}

