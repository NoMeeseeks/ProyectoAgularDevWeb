import { Component } from '@angular/core';

export interface Card{
  id: number;
  svg: string;
  description: string;
  buttonOne: string,
  buttonTwo:string,
  time: string;
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  cards: Card[] = [
    {
      id: 1,
      svg: "Thumbnail1",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      buttonOne: "View",
      buttonTwo: "Edit",
      time: "9 mins",
    },
    {
      id: 2,
      svg: "Thumbnail2",
      description: "A short description here.",
      buttonOne: "View",
      buttonTwo: "Delete",
      time: "5 mins",
    },
    {
      id: 3,
      svg: "Thumbnail3",
      description: "Another description with more details that might interest the user.",
      buttonOne: "Share",
      buttonTwo: "Save",
      time: "12 mins",
    },
    {
      id: 4,
      svg: "Thumbnail4",
      description: "This is a different type of description. It can be longer or shorter.",
      buttonOne: "View",
      buttonTwo: "Edit",
      time: "15 mins",
    },
    {
      id: 5,
      svg: "Thumbnail5",
      description: "A brief overview of what is inside this particular card.",
      buttonOne: "View",
      buttonTwo: "Delete",
      time: "8 mins",
    },
    {
      id: 6,
      svg: "Thumbnail6",
      description: "The content in this card is designed to be informative and concise.",
      buttonOne: "Share",
      buttonTwo: "Save",
      time: "3 mins",
    },
    {
      id: 7,
      svg: "Thumbnail7",
      description: "A short but engaging description with key points.",
      buttonOne: "View",
      buttonTwo: "Edit",
      time: "10 mins",
    },
    {
      id: 8,
      svg: "Thumbnail8",
      description: "Details about a topic or project can go here. This one is slightly longer.",
      buttonOne: "Share",
      buttonTwo: "Save",
      time: "7 mins",
    },
    {
      id: 9,
      svg: "Thumbnail9",
      description: "Final card description, summarizing the content or purpose of the card.",
      buttonOne: "View",
      buttonTwo: "Edit",
      time: "20 mins",
    }
  ];

}
