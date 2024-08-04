import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-focus-and-others',
  templateUrl: './hover-focus-and-others.component.html',
  styleUrls: ['./hover-focus-and-others.component.scss']
})
export class HoverFocusAndOthersComponent implements OnInit {

  persons: any;

  constructor() { }

  ngOnInit(): void {
    this.persons = [
      {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        title: 'Regional Paradigm Technician',
        description: 'Product Designer at',
        web: 'planetaria.tech'
      },
      {
        name: 'Floyd Miles',
        email: 'floyd.miles@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        title: 'Product Directives Officer',
        description: 'Just happy to be here.',
        web: ''
      },
      {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        title: 'Senior Designer',
        description: 'A multidisciplinary designer, working at the intersection of art and technology.',
        web: 'alex-reed.com'
      },
      {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        title: 'Chief Strategy Officer',
        description: 'Pushing pixels. Slinging divs.',
        web: ''
      }
    ]
  }
}
