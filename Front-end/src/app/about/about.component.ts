import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MathContent} from '../math/math-content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  Eq2: MathContent = {
    latex: "$$Q' = \\frac{RQD}{J_n} \\times \\frac{J_r}{J_a}$$"
  };
  Eq3: MathContent = {
    latex: '$$HR = \\frac{Area}{Perimeter}$$'
  };
  Eq4: MathContent = {
    latex: "$$ERF = \\frac{0.5}{\\frac{1}{n} \\sum_{\\theta=1}^n \\frac{1}{r_\\theta}}$$"
  };
  Eq51: MathContent = {
    latex: '$$\\text{Stope Back HR} = \\frac{a \\times b}{2(a + b)}$$'
  }
  Eq52: MathContent = {
    latex: '$$\\text{Sidewall HR} = \\frac{a \\times H}{2(a + H)}$$'
  }
  Eq53: MathContent = {
    latex: '$$\\text{FW & HW HR} = \\frac{b \\times H}{2(b + H)}$$'
  }
  Eq61: MathContent = {
    latex: '$$\\text{Stope Back HR} = \\frac{a \\times b}{2(a + b)}$$'
  }
  Eq62: MathContent = {
    latex: '$$\\text{Sidewall HR} = \\frac{0.5(a + c) \\times h}{(a + h + c +l)}$$'
  }
  Eq63: MathContent = {
    latex: '$$\\text{Footwall HR} = \\frac{b \\times h}{2(b + h)}$$'
  }
  Eq7: MathContent = {
    latex: '$$RQD = \\frac{\\sum \\text{Length of core pieces} > 100 \\text{mm}}{\\text{Total length of core run}} \\times 100\\%$$'
  }
  Eq64: MathContent = {
    latex: '$$\\text{Hangingwall HR} = \\frac{b \\times l}{2(b + l)}$$'
  }

  Eq8: MathContent = {
    latex: '$$A^{3D} = 1.64 \\times A^{or} \\quad \\text{when} \\quad A^{or} \\le 0.61, \\quad \\text{otherwise} \\quad A^{or} = 1.0$$'
  }


  Eq101: MathContent = {
    latex: '$$\\text{If} \\quad  0 < \\frac{\\sigma_c}{\\sigma_1} \\le 10, \\qquad \\text{then} \\quad A = (\\frac{9}{80} \\times \\frac{\\sigma_c}{\\sigma_1}) - 0.125$$'
  }
  Eq102: MathContent = {
    latex: '$$\\text{If} \\quad \\frac{\\sigma_c}{\\sigma_1} \\ge 10, \\qquad \\text{then} \\quad A = 1.0$$'
  }
  Eq103: MathContent = {
    latex: '$$\\text{If} \\quad \\frac{\\sigma_c}{\\sigma_1} \\le 2, \\qquad \\text{then} \\quad A = 0.1$$'
  }
  Eq104: MathContent = {
    latex: '$$\\text{If} \\quad  2 < \\frac{\\sigma_c}{\\sigma_1} \\le 10, \\qquad \\text{then} \\quad A = (\\frac{9}{80} \\times \\frac{\\sigma_c}{\\sigma_1}) - 0.125$$'
  }
  Eq105: MathContent = {
    latex: '$$\\text{If} \\quad \\frac{\\sigma_c}{\\sigma_1} \\ge 10, \\qquad \\text{then} \\quad A = 1.0$$'
  }
  Eq111: MathContent = {
    latex: '$$\\text{If} \\quad  0 \\le \\alpha \\le 20, \\qquad \\text{then} \\quad B = 0.5 - 0.01 \\times \\alpha$$'
  }
  Eq112: MathContent = {
    latex: '$$\\text{If} \\quad 20 < \\alpha \\le 45, \\qquad \\text{then} \\quad B = 0.004 \\times \\alpha + 0.22$$'
  }
  Eq113: MathContent = {
    latex: '$$\\text{If} \\quad 45 < \\alpha \\le 60, \\qquad \\text{then} \\quad B = \\frac{2}{75} \\alpha - 0.8$$'
  }
  Eq114: MathContent = {
    latex: '$$\\text{If} \\quad  60 < \\alpha \\le 90, \\qquad \\text{then} \\quad B = \\frac{1}{150} \\alpha + 0.4$$'
  }
  

  Eq121: MathContent = {
    latex: '$$\\text{If} \\quad  0 \\le \\alpha \\le 10, \\qquad \\text{then} \\quad B = 0.3 - 0.01 \\times \\alpha$$'
  }
  Eq122: MathContent = {
    latex: '$$\\text{If} \\quad 10 < \\alpha \\le 30, \\qquad \\text{then} \\quad B = 0.2$$'
  }
  Eq123: MathContent = {
    latex: '$$\\text{If} \\quad 30 < \\alpha \\le 60, \\qquad \\text{then} \\quad B = 0.02 \\times - 0.4$$'
  }
  Eq124: MathContent = {
    latex: '$$\\text{If} \\quad  60 < \\alpha \\le 90, \\qquad \\text{then} \\quad B = \\frac{1}{150} \\alpha + 0.4$$'
  }


  Eq171: MathContent = {
    latex: '$$ELOS = \\frac{\\text{Volume of slough from stope surface}}{\\text{Stope height} \\times \\text{Wall strike length}}$$'
  };
  Eq172: MathContent = {
    latex: '$$Dilution = \\frac{ELOS}{\\text{Orebody width}} \\times 100$$'
  };

  
  mathMl: MathContent = {
    mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <mover>
      <munder>
        <mo>∫</mo>
        <mn>0</mn>
      </munder>
      <mi>∞</mi>
    </mover>
    <mtext> versus </mtext>
    <munderover>
      <mo>∫</mo>
      <mn>0</mn>
      <mi>∞</mi>
    </munderover>
  </mrow>
</math>`
  };
  
  constructor(private router: Router, private route: ActivatedRoute) 
  { }

  ngOnInit(): void {
    this.router.navigate(['/about']).then(() => this.router.navigate([{ outlets: { qindex: null, factors: null, stab: null } }]));
    
  }
  }
 
