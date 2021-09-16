import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{allResetValues} from "../services/All-Reset-Form.service"
@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute , private resetService:allResetValues) { }

  ngOnInit(): void {
    if(this.resetService.getactiveval()==2){
      this.router.navigate(['/hr/asymmetric'], {relativeTo: this.route});
    }
    else
    {
      this.router.navigate(['/hr/symmetric'], {relativeTo: this.route});

    }
  
  }

}
