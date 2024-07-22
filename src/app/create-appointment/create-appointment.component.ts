import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  appointment:Appointment = new Appointment();
  constructor(private appointmentService:AppointmentService,private route:Router){}

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppointment();
    })
  };

  onsubmit(){
    this.saveAppointment();
  }

  goToAppointment(){
    this.route.navigate(['/appointmentlist'])
  }

}