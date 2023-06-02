import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../subscriber.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-json-visualizer-modal',
  templateUrl: './json-visualizer-modal.component.html',
  styleUrls: ['./json-visualizer-modal.component.scss'],
})
export class JsonVisualizerModalComponent implements OnInit {
  constructor(
    private subscriber: SubscriberService,
    private global: GlobalService
  ) {}

  ngOnInit(): void {
    //Visualization
    const jsonDataToVisualize = this.global.get_temp_data();
    const jsonCrackEmbed = document.querySelector('iframe');
    const json = JSON.stringify(jsonDataToVisualize);

    const options = {
      theme: 'light', // "light" or "dark"
      direction: 'RIGHT', // "UP", "DOWN", "LEFT", "RIGHT"
    };

    window?.addEventListener('message', (event) => {
      jsonCrackEmbed.contentWindow.postMessage(
        {
          json,
          options,
        },
        '*'
      );
    });
  }

  close(): void {
    this.subscriber.set_popup(false, 'json-visualizer-modal', false);
  }
}
