import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.component.html',
  styleUrls: ['./guest-profile.component.scss']
})
export class GuestProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    console.log('guest Profile is loading');
  }
  login() {
    this.profileService.login();
  }

}
