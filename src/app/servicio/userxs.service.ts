import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UturuncoUtils } from './uturuncoUtils';


@Injectable({
  providedIn: 'root'
})
export class UserxsService {
  other_header;
  api;

  constructor(private http: HttpClient) {
    this.api = UturuncoUtils.URLPOLD + "exe/";
  }


  /* particularidad de la entidad */

  getList(page, limit) {
    this.other_header = UturuncoUtils.getHeader();
    return this.http
      .get(this.api + page + "/" + limit, { headers: this.other_header })
      .toPromise().catch(err => {

      });
  }

  doUpdate(evento, id) {
    this.other_header = UturuncoUtils.getHeader();
    return this.http
      .put(this.api + id, evento, { headers: this.other_header })
      .toPromise().catch(err => {

      });
  }

  doDelete(id) {
    this.other_header = UturuncoUtils.getHeader();
    return this.http
      .delete(this.api + id, { headers: this.other_header })
      .toPromise().catch(err => {

      });
  }

  doInsert(evento) {
    this.other_header = UturuncoUtils.getHeader();
    return this.http
      .post(this.api, evento, { headers: this.other_header })
      .toPromise().catch(err => {

      });
  }

  doCriteria(criteria, one, populate, sort, page, limit) {
    this.other_header = UturuncoUtils.getHeader();

    const cr = {
      criteria: criteria,
      one: one,
      populate: populate,
      sort: sort
    };

    return this.http
      .post(this.api + "criteria/" + page + "/" + limit, cr, {
        headers: this.other_header
      })
      .toPromise().catch(err => {

      });
  }

  doLogin(dni) {

    this.other_header = UturuncoUtils.getHeader();
    console.log(dni)
    return this.http
      .post(this.api + "login/" + dni, {}, this.other_header)
      .toPromise().catch(err => {
        console.log(err)
      });
  }
  doLogin111(dni) {

    this.other_header = UturuncoUtils.getHeader();
    console.log(dni)
    return this.http
      .post(this.api + "login/" + dni, {}, this.other_header)
      .toPromise().catch(err => {
        console.log(err)
      });
  }


}