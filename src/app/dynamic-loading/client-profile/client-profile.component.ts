import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    console.log('client Profile is loading');
  }

  logout() {
    this.profileService.logout();
  }
}
