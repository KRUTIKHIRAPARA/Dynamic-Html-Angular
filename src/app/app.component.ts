import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic-Components';

  dynamicArray: Array<DynamicGrid> = [];  
  newDynamic: any = {};  
  ngOnInit(): void {  
      this.newDynamic = {title1: "", title2: "",title3:""};  
      this.dynamicArray.push(this.newDynamic);  
  }  
  
  addRow() {    
      this.newDynamic = {title1: "", title2: "",title3:""};  
      this.dynamicArray.push(this.newDynamic); 
      console.log('New row added successfully');
      console.log(this.dynamicArray);  
      return true;  
    }  
    
    deleteRow(index:any) {  
      if(this.dynamicArray.length ==1) {  
        console.log('Cant delete the row when there is only one row');  
          return false;  
      } else {  
          this.dynamicArray.splice(index, 1); 
          console.log('Row deleted successfully');
          return true;  
      }  
  }  

}

export class DynamicGrid{     
  title1?:string;  
  title2?:string;  
  title3?:string;  
}
