import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css',
})
export class MissionComponent {
  text = '';
  handleChange(input: any) {
    this.text = input.value;
  }

  handleClick(input: any, inp2Valu: any) {
    this.text = input.value;

    console.log(inp2Valu.value);
  }
}
