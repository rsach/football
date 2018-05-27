import {Component, Input, OnInit} from '@angular/core';
import {Fixture} from './fixture';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {

  @Input() fixture: Fixture;
  constructor() { }
  timer_string: string;
  timer_stop
  ngOnInit() {
    this.timer_stop = requestAnimationFrame(() => this.timer());
  }

  timer () {

      // Get todays date and time
      const now = new Date().getTime();
      const countDownDate = new Date(this.fixture.date).getTime()


      // Find the distance between now an the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
       this.timer_string = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        this.timer_string = "EXPIRED";
        window.cancelAnimationFrame(this.timer_stop)
      }
      window.requestAnimationFrame(() => this.timer())
  }

}
