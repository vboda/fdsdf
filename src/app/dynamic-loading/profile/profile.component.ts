import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProfileHostDirective } from '../profile-host.directive';
import { Subject } from 'rxjs';
import { ProfileService } from '../profile.service';
import { takeUntil, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  template: `
  <ng-template appProfileHost></ng-template>
`
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild(ProfileHostDirective, {static: true}) profileHost: ProfileHostDirective;
  private destorySubject = new Subject();
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    const viewContainerRef = this.profileHost.viewContainerRef;
    this.profileService.isLoggedIn$
    .pipe(
      takeUntil(this.destorySubject),
      mergeMap(isLoggedIn => 
        this.profileService.loadComponent(viewContainerRef, isLoggedIn)
        )
    )
    .subscribe();
  }

  ngOnDestroy() {
    this.destorySubject.next();
    this.destorySubject.complete();
  }
}
