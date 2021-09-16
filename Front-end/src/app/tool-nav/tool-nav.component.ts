import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tool-nav',
  templateUrl: './tool-nav.component.html',
  styleUrls: ['./tool-nav.component.scss']
})
export class ToolNavComponent implements OnInit {
  openStope = 'Open Stope';
  homeTitle = 'Home';
  aboutTitle = 'About';
  contactTitle = 'Contact';
  sFactorTitle = 'S FACTOR';
  qValueTitle = "Q' VALUE";
  stressTitle = 'STRESS';
  abcFactorsTitle = 'ADJUSTMENT FACTORS';
  stabilityAnalysisTitle = 'STABILITY PREDICTION';
  outcomeTitle = 'OUTCOME';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
