import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../services/agents.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ga-agents-add',
  templateUrl: './agents-add.component.html',
  styleUrls: ['./agents-add.component.scss']
})
export class AgentsAddComponent implements OnInit {

  inputFirstName = '';
  inputLastName = '';
  inputStreet = '';
  inputCity = '';
  inputState = '';
  inputPostCode = '';
  inputEmail = '';

  agentData = {};
  
  constructor(private _agentsService: AgentsService) { }

  ngOnInit() {
  }

  addAgent()
  {
    if(this.inputFirstName.length > 0 && this.inputLastName.length > 0 && this.inputStreet.length > 0 && 
      this.inputCity.length > 0 && this.inputState.length > 0 && this.inputPostCode.length > 0 && 
      this.inputEmail.length > 0)
      {
        this.agentData = {
          name: {first: this.inputFirstName, last: this.inputLastName},
          location: {street: this.inputStreet, city: this.inputCity, state: this.inputState, postcode: this.inputPostCode},
          accounts: {email: this.inputEmail}  
        };
    
        //Sending request to AgentsService
        this._agentsService.setAgentsList(this.agentData);
    
        //Clearing input fields.
        this.inputFirstName = this.inputLastName = this.inputStreet = this.inputCity = this.inputState = 
        this.inputPostCode = this.inputEmail = "";
      }
  }

}
