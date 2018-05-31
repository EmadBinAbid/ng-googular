import { Component, OnInit } from '@angular/core';
/*import { ActivatedRoute, Router } from '@angular/router';*/

@Component({
  selector: 'ga-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
 

  constructor(/*private route: ActivatedRoute, private router: Router*/)
  {
    
  }

  ngOnInit() {
  }

  /*showList()
  {
    this.router.navigate(['agents-list'], {relativeTo: this.route});  
  }*/
}
