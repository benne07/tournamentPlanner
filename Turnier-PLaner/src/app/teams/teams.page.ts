import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PlayerClass} from '../Services/player-class';

@Component({
  selector: 'app-tournaments',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  public folder: string;
  public playerClass: PlayerClass = new PlayerClass();
  public numberOfPLayer =  ['test','test'];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

addMorePlayer(){
    this.numberOfPLayer.push('test');
}

}

