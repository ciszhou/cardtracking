import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  currentCardStatus: Card;
  cardHistory: Card[];

  constructor(private cardService: CardService) {}
  
  ngOnInit():void {}
  
  search(term: string): void {
	  this.cardService.getCardStatus(term).subscribe(cards => {this.cardHistory = cards; this.currentCardStatus = cards[0];});
	  //this.cardService.getCardStatus(term).subscribe(this.refreshSCreen);
/*
	  this.cardService.findCardStatusInESB(term).subscribe(this.esbCallback);
	  
	  this.cardService.findCardStatusInEPMS(term).subscribe(this.epmsCallback);
	  
	  this.cardService.findCardStatusInNPS(term).subscribe(this.npsCallback);
	  
	  this.cardService.findCardStatusInCPSTR(term).subscribe(this.cpstrCallback);
	  
	  this.cardService.findCardStatusInSMI(term).subscribe(this.smiCallback);
*/
  }
  
  refreshSCreen(cards: Card[]) {
	  alert("Card status were retrieved: " + cards.length);
	  this.cardHistory = cards;
	  this.currentCardStatus = cards[0];
  }
  
  /*
  esbCallback(card: Card) {
	  //alert("inside ESB");
	  card.application = "2";
	  if(this.currentCard == null) {
		  //alert("curr-card is null. assign cur card to ESB: " + card.application);
		  this.currentCard = card;
	  } else if(card.application > this.currentCard.application) {
		  //alert("assign cur card to ESB: " + card.application);
		  this.currentCard = card;
	  }
	  //alert("cur card become " + this.currentCard.application);
  }
  epmsCallback(card: Card) {
	  //alert("inside EPMS");
	  card.application = "3";
	  if(this.currentCard == null) {
		  //alert("curr-card is null. assign cur card to EPMS: " + card.application);
		  this.currentCard = card;
	  } else if(card.application > this.currentCard.application) {
		  //alert("assign cur card to EPMS: " + card.application);
		  this.currentCard = card;
	  }
	  //alert("cur card become " + this.currentCard.application);
  }
  npsCallback(card: Card) {
	  //alert("inside NPS");
	  card.application = "4";
	  if(this.currentCard == null) {
		  //alert("curr-card is null. assign cur card to NPS: " + card.application);
		  this.currentCard = card;
	  } else if(card.application > this.currentCard.application) {
		  //alert("assign cur card to NPS: " + card.application);
		  this.currentCard = card;
	  }
	  //alert("cur card become " + this.currentCard.application);
  }
  cpstrCallback(card: Card) {
	  alert("inside CPSTR");
	  card.application = "5";
	  if(this.currentCard == null) {
		  alert("curr-card is null. assign cur card to CPSTR: " + card.id);
		  this.currentCard = card;
	  } else if(card.application > this.currentCard.application) {
		  alert("assign cur card to CPSTR: " + card.id);
		  this.currentCard = card;
	  }
	  alert("cur card become " + this.currentCard.id);
  }
  smiCallback(card: Card) {
	  //alert("inside SMI");
	  card.application = "6";
	  if(this.currentCard == null) {
		  //alert("curr-card is null. assign cur card to SMI: " + card.application);
		  this.currentCard = card;
	  } else if(card.application > this.currentCard.application) {
		  //alert("assign cur card to SMI: " + card.application);
		  this.currentCard = card;
	  }
	  //alert("cur card become " + this.currentCard.application);
  }
*/
}
