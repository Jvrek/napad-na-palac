import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;


    const countDown = new Date(2022,5,4,18,0,0).getTime();

    setInterval(() => {  
          const now = new Date().getTime();
          const distance = countDown - now;
          document.getElementById("days")!.innerText = Math.floor(distance / (day)).toString(),
          document.getElementById("hours")!.innerText = Math.floor((distance % (day)) / (hour)).toString(),
          document.getElementById("minutes")!.innerText = Math.floor((distance % (hour)) / (minute)).toString(),
          document.getElementById("seconds")!.innerText = Math.floor((distance % (minute)) / second).toString();

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline")!.innerText = "to już!";
          document.getElementById("countdown")!.style.display = "none";
          document.getElementById("content")!.style.display = "block";
        }
        //seconds
      }, 1)
  }

}
