import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../services/agents.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ga-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})
export class AgentDetailsComponent implements OnInit {

  currentAgent= {
    id: null,
    name:{first: "", last: ""},
    location: {street: "", city: "", state: "", postcode:""},
    email: ""
  };
  currentAgentId;

  constructor(private _agentsService: AgentsService, private route: ActivatedRoute) { }

  ngOnInit() {


    
  }

  viewDetails()
  {
    let id = this.route.snapshot.params['id'];
    this.currentAgentId = id;
    console.log(typeof this.currentAgentId);

    this.currentAgent = this._agentsService.receiveCurrentAgentDetails(parseInt(this.currentAgentId));
    console.log(this.currentAgent);
    console.log(this.currentAgentId);
  }

  trackAgent()
  {
    
  }

}
