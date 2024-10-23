import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() childMessage?: string;
  @Input() secondChild?: string;
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit() {
    this.sendData();
  }

  sendData() {
    this.messageEvent.emit('Hello i am sent from parent');
  }
}
