import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class TipoCombustibleService {
    other_header;
    api;

    constructor(private http: HttpClient) {
        this.api = "http://10.125.31.241:3000/tipoCombustibles/";
    }
    /* particularidad de la entidad */

    getList(page, limit) {
        this.other_header = null;
        return this.http
            .get(this.api + page + "/" + limit, { headers: this.other_header })
            .toPromise().catch(err => {

            });
    }

    doUpdate(evento, id) {
        return this.http
            .put(this.api + id, evento, { headers: this.other_header })
            .toPromise().catch(err => {

            });
    }

    doDelete(id) {
        this.other_header = null;
        return this.http
            .delete(this.api + id, { headers: this.other_header })
            .toPromise().catch(err => {

            });
    }

    doInsert(evento) {
        this.other_header = null;
        return this.http
            .post(this.api, evento, { headers: this.other_header })
            .toPromise().catch(err => {

            });
    }

    doCriteria(criteria, one, populate, sort, page, limit) {
        this.other_header = null;

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

}