import { HttpParams } from '@angular/common/http';

import { isNullOrUndefined } from 'util';

export function toParamMap(...properties): HttpParams {
  let httpParams = new HttpParams();
  properties.forEach(p => {
    if (p) {
      Object.keys(p).forEach(key => {
        if (!isNullOrUndefined(p[key]) && p[key] !== '') {
          if (p[key] instanceof Date) {
            httpParams = httpParams.set(key, p[key].toISOString());
          } else if (p[key] instanceof Array) {
            p[key].forEach(element => {
              if (element) {
                httpParams = httpParams.append(key, element);
              }
            });
          } else {
            httpParams = httpParams.set(key, p[key]);
          }
        }
      });
    }
  });

  return httpParams;
}
