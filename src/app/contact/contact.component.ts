import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{FormsubmitService}from '../services/formsubmit.service'
import { Feedback, ContactType } from '../shared/feedback';
import { flyInOut,expand } from '../animations/app.animation';
import { visibility } from '../animations/app.animation';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
   host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {
  visibility="shown"
notHidden:boolean;
notsubmitted:boolean;
errMess:string
  feedbackForm: FormGroup;
  feedback: Feedback;
  
  feedbackcopy:Feedback;
  contactType = ContactType;
 color='primary'; //Colour for slide toggle
 formErrors={
   firstname:'',
   'lastname':'',
   'email':'',
   'telnum':''
 }
  validationMessages = {      
    firstname: {                        //Properties having a group of properties.
      required:      'First Name is required.',
      minlength:     'First Name must be at least 2 characters long.',
      maxlength:     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };
    
  
  constructor(private fb: FormBuilder,private fbsubmit:FormsubmitService) {
    this.notHidden=true;
    this.notsubmitted=true;
    //this.createForm(); =>both are correct.
  }

  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    this.feedbackForm = this.fb.group({     //Form model
      firstname: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      lastname:  ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      telnum:['',[Validators.required,Validators.pattern]],
      email:  ['',[Validators.email,Validators.required]],
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackForm.valueChanges.subscribe((data)=>this.onValueChanged(data));// Value changes observable observes for Any changes in form . 
  }                                                                                
    
onValueChanged(data?:any){
if(!(this.feedbackForm)){return}
const form=this.feedbackForm;

for(const field in this.formErrors)
  {
 this.formErrors[field]='';
 const control=form.get(field);
 if(control && control.dirty && !control.valid){
const message=this.validationMessages[field];
for(const key in control.errors)
  {
    this.formErrors[field]+=message[key]+'';
  }
 }
  }
}


  onSubmit() {
    this.visibility='hidden'
  
    this.notHidden=!this.notHidden;
    this.feedback = this.feedbackForm.value;
    this.fbsubmit.onFeedbackSubmit(this.feedback).subscribe(feedbackcopy=>{  this.notsubmitted=true;this.feedbackcopy=feedbackcopy},errMess=>this.errMess=errMess)
    setTimeout(()=>{this.notsubmitted=false;this.notHidden=!this.notHidden;this.feedbackcopy=null;},5000);

    console.log(this.feedback);
    this.feedbackForm.reset({ 
     firstname: '',
      lastname: '',
      telnum: '',
      email:  '',
      agree: false,
      contacttype: 'None',
      message: ''

    })

    ;
  }

}
