import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  token:string = '';
  listRoles: any[] =[];
  listProfiles: any[] =[];
  listContacts_Team: any[] =[];
  listContacts: any[] =[];
  listTeams: any[]=[];
  listTeamLeads: any[]=[];
  listProjects: any[]=[];
  listProjects_Team: any[]=[];
  listEmployees_Selected:any[]=[];
  listJobTitles: any[]=[];

  listDatePointage: any[]=[];
  listTotalTimePointage: any[]=[];
  listOutTimePointage: any[]=[];
  listAbsenceEmployee:any[]=[];
  listLeaveEmployee:any[]=[];
  
  constructor() { }
}
