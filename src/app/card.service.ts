import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

import { Card } from './card';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CardService {
	private cardsUrl = 'http://localhost:8080';
	
	constructor(private http: HttpClient,
    private messageService: MessageService) { }
	/*
	findCardStatusInC3(id: string): Observable<Card> {
    const url = '${this.cardsUrl}/1';
    return this.http.get<Card>(this.cardsUrl + '/cards/1').pipe(
      tap(_ => this.log('fetched card from C3 id=${id}')),
      catchError(this.handleError<Card>('getCard id=${id}'))
    );
	}
	
	public findCardStatusInC3(todoId: string): Observable<Card> {
  return this.http
    .get(this.cardsUrl + '/cards/1')
    .map(response => {
      return new Card(response.json());
    });
    //.catch(this.handleError);
}
	
	findCardStatus(id: string): Observable<Card> {
    const url = '${this.cardsUrl}/${id}';
    return this.http.get<Card>(url).pipe(
      tap(_ => this.log('fetched card id=${id}')),
      catchError(this.handleError<Card>('getCard id=${id}'))
    );
	}
	*/
	getCardStatus (id: string): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsUrl + `/c3info-service/getCardStatus/${id}`).pipe(
        tap(cards => this.log('fetched card status with id=${id}')),
        catchError(this.handleError('getCardStatus', []))
      );
  }
	
	findCardStatusInC3(id: string): Observable<Card> {
    return this.http.get<Card>(this.cardsUrl + `/c3info-service/getCardStatus/${id}`).pipe(
      tap(_ => this.log('fetched card with id=${id} from C3')),
      catchError(this.handleError<Card>('getCard id=${id}'))
    );
	}
	
	findCardStatusInESB(id: string): Observable<Card> {
    return this.http.get<Card>(this.cardsUrl + '/c3info-service/getCardStatus/${id}').pipe(
      tap(_ => this.log('fetched card from ESB id=${id}')),
      catchError(this.handleError<Card>('getCard id=${id}'))
    );
	}
	
	findCardStatusInEPMS(id: string): Observable<Card> {
    return this.http.get<Card>(this.cardsUrl + '/c3info-service/getCardStatus/${id}').pipe(
      tap(_ => this.log('fetched card with id=${id} from EPMS')),
      catchError(this.handleError<Card>('getCard id=${id}'))
    );
	}
	
	findCardStatusInNPS(id: string): Observable<Card> {
    return this.http.get<Card>(this.cardsUrl + '/c3info-service/getCardStatus/${id}').pipe(
      tap(_ => this.log('fetched card with id=${id} from NPS')),
      catchError(this.handleError<Card>('getCard id=${id}'))
    );
	}
	
	findCardStatusInCPSTR(id: string): Observable<Card> {
    return this.http.get<Card>(this.cardsUrl + '/c3info-service/getCardStatus/${id}').pipe(
      tap(_ => this.log('fetched card with id=${id} from CPSTR')),
      catchError(this.handleError<Card>('getCard id=${id}'))
    );
	}
	
	findCardStatusInSMI(id: string): Observable<Card> {
    return this.http.get<Card>(this.cardsUrl + '/c3info-service/getCardStatus/${id}').pipe(
      tap(_ => this.log('fetched card with id=${id} from SMI')),
      catchError(this.handleError<Card>('getCard id=${id}'))
    );
	}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CardService: ' + message);
  }

}
