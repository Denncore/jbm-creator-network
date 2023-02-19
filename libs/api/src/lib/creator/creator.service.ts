import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Environment, ENVIRONMENT} from '@jbm-creator-network/environment';
import {Observable} from 'rxjs';
import {CreatorsEntity} from "@jbm-creator-network/model";

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  constructor(
    @Inject(ENVIRONMENT) public env: Environment,
    private httpClient: HttpClient
  ) {
  }

  getCreators(): Observable<CreatorsEntity[]> {
    return this.httpClient.get<CreatorsEntity[]>(`${this.env.baseUrlApi}/creator/`);
  }
}
