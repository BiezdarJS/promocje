import { Injectable } from '@angular/core';
// Interfaces
import { IPromotion } from 'src/app/models/promotion.model';
// RxJS
import { Observable, map } from 'rxjs';
// HttpClient
import { HttpClient } from '@angular/common/http';


@Injectable()


export class PromotionService {


  constructor(
    private http: HttpClient
  ) {}


  // Post Promotion
  postPromotion(promotion:IPromotion):Observable<Object> {
    return this.http.post(
      'https://promotions-58746-default-rtdb.firebaseio.com/promotions.json',
      promotion
    );
  }


  // Fetch Promotion
  fetchPromotions(): Observable<Object> {
    return this.http
      .get('https://promotions-58746-default-rtdb.firebaseio.com/promotions.json')
      .pipe(
        map(response => {
          const promotionsArray = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              promotionsArray.push({ ...response[key], id: key })
            }
          }
          return promotionsArray;
        }),
    )
  }


  // Update Promotion
  updatePromotion(id: string, promotion: IPromotion):Observable<Object> {
    return this.http.put('https://promotions-58746-default-rtdb.firebaseio.com/promotions/'+id+'.json',
    promotion);
  }


  // Delete Promotions
  deletePromotion(id: string) {
    return this.http.delete('https://promotions-58746-default-rtdb.firebaseio.com/promotions/'+id+'.json');
  }



}
