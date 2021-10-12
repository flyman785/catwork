import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { RemoteConfigService } from '../services/remote-config.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(
    private remoteConfigService: RemoteConfigService
  ) {}

  resolve(): Promise<any> {

    const myconf = this.remoteConfigService.get().then(data => {
      // Create a reference from a Google Cloud Storage URI
      // _.forEach(data.carousel, (obj) => {
      //   storage.refFromURL(obj.background).getDownloadURL().then((url) => {
      //     obj.background = url;
      //   });
      // });

      return data;
    });

    return myconf;
  }

}
