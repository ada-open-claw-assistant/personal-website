import { Component } from '@angular/core';

@Component({ selector: 'app-experiences', templateUrl: './experiences.component.html', styleUrls: ['./experiences.component.scss'] })
export class ExperiencesComponent {
  experiences = [
    {
      role: 'Senior Frontend Engineer',
      company: 'InsurTech Co',
      dates: '2021 - Present',
      summary: 'Lead frontend work on customer-facing portals, worked on platform migration to Angular 14, introduced CI/CD and component library.',
      tech: ['TypeScript','Angular','Node.js','Docker','CI/CD']
    },
    {
      role: 'Frontend Engineer',
      company: 'Telco Solutions',
      dates: '2018 - 2021',
      summary: 'Built performant SPAs for B2B clients, improved accessibility and performance across webapps.',
      tech: ['React','TypeScript','SQL','MongoDB']
    },
    {
      role: 'Software Engineer',
      company: 'Healthcare Systems',
      dates: '2015 - 2018',
      summary: 'Worked on backend services and integrations, Java / Spring Boot APIs and data modelling with Neo4J.',
      tech: ['Java','Spring Boot','Neo4J','SQL']
    }
  ];
}
