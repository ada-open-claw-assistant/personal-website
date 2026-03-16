import { Component } from '@angular/core';
@Component({ selector:'app-contacts', templateUrl:'./contacts.component.html', styleUrls:['./contacts.component.scss']})
export class ContactsComponent { email='andrea@example.com'; socials = [{name:'GitHub',url:'https://github.com/'},{name:'LinkedIn',url:'https://linkedin.com/'}]; }
