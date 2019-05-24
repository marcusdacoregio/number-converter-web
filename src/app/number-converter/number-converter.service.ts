import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { NumberConversion } from '@model/number-conversion';
import { ConversionResut } from '@model/conversion-result';
import { toParamMap } from '@utils/http-util';

@Injectable()
export class NumberConverterService {

  private _endpoint = '/convert';

  constructor(private _http: HttpClient) { }

  convertToRomanNumeral(numberConversion: NumberConversion): Observable<ConversionResut> {
    return this._http.get<ConversionResut>(`${this._endpoint}/roman`, { params: toParamMap(numberConversion) });
  }
}
