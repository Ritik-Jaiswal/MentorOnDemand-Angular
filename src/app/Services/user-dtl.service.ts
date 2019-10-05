import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDtlService {

  isUserLoggedIn:boolean;
  getId:number;
  readonly rootURL="https://localhost:44384/api";

  constructor(private http:HttpClient) {
    this.isUserLoggedIn=false;
   }

  getData(result){
    return this.http.post(this.rootURL+"/GetAllData",result);
  }  
  signin(result){
    return this.http.post(this.rootURL+"/create",result);
  } 
  login(result1){
    this.isUserLoggedIn=true;
    return this.http.post(this.rootURL+"/login",result1);
  }
  addtech(result){
    return this.http.post(this.rootURL+"/addtech",result);
  } 
  refreshList(){
    return this.http.get(this.rootURL+"/showTech")
  }

  getUserById(id){
    return this.http.get(this.rootURL+"/Details/"+id)
  }
  
  deleteSkills(id){
    return this.http.delete(this.rootURL+"/deleteSkills/"+id)
  }
  skillList(){
    return this.http.get(this.rootURL+"/mentor")
  }
  trainerList(name){
    return this.http.get(this.rootURL+"/searchTrainer/"+name)
  }
  skilldetails(name){
    return this.http.get(this.rootURL+"/skillByName/"+name)
  }
  refreshList1(trainerTechnology){
    return this.http.get(this.rootURL+"/skillByName/"+trainerTechnology)
  }
}
