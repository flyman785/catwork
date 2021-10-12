import { Injectable } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService {

  constructor(
    private remoteConfig: AngularFireRemoteConfig
  ) { }

  async get(): Promise<any> {
    const remoteConfig = this.remoteConfig;

    return remoteConfig.settings.then(async conf => {
      console.log('conf', conf);
      // conf.fetchTimeoutMillis = 160000;
      // conf.minimumFetchIntervalMillis = 36000;

      return remoteConfig.fetchAndActivate()
      .then(async (data) => {
        console.log('fetchAndActivate', data);
        return JSON.parse(await remoteConfig.getString('basic_config'));
      })
      .catch((err) => {
        console.error(err);
      });
    })
    .catch(e => {
      console.error(e);
    });

  }
}
