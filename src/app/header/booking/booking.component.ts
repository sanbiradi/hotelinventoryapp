import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { CustomValidator } from '../validators/custom-validator';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray; //typecast into formArray
  }


  constructor(private configS: ConfigService, private fb: FormBuilder , private router:ActivatedRoute) {}
  ngOnInit(): void {
    const roomId = this.router.snapshot.params['id'];
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          {
            value: roomId,
            disabled: false,
          },
          { validators: Validators.required }
        ),
        guestEmail: [
          '',
          { updateOn: 'blur', validators: [Validators.required] },
        ],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [
          '',
          { updateOn: 'blur', validators: [Validators.required] },
        ],
        guestName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            CustomValidator.ValidateName,
            CustomValidator.validateSpecialChar('*'),
          ],
        ],
        address: this.fb.group({
          guestAddress: [''],
          guestAddress2: [''],
          guestCity: [''],
          guestState: [''],
          guestCountry: { value: 'india' },
          guestZipCode: [''],
        }),
        guestCount: [''],
        guests: this.fb.array([this.guestControl()]),
      },
      { validators: [CustomValidator.validateDate] }
    );
    // ,{updateOn:'blur'}
    console.log(this.bookingForm);
    this.bookingForm.valueChanges.subscribe((data)=>{
      console.log(data)
    })
  }
  addBooking() {
    // console.log(this.bookingForm.value);
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: '',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        guestAddress: '',
        guestAddress2: '',
        guestCity: '',
        guestState: '',
        guestCountry: '',
        guestZipCode: '',
      },
      guestCount: '',
      guests: '',
    });

    this.getBookingData();
  }

  getBookingData() {
    // this.bookingForm.reset({
    //   roomId: '2',
    //   guestEmail: 'test@gmail.com',
    //   checkinDate: '',
    //   checkoutDate: '',
    //   bookingStatus: '',
    //   bookingAmount: '5000',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',
    //   address: {
    //     guestAddress: '',
    //     guestAddress2: '',
    //     guestCity: '',
    //     guestState: '',
    //     guestCountry: '',
    //     guestZipCode: '',
    //   },
    //   guestCount: '',
    //   guests: '',
    // });

    this.bookingForm.patchValue({
 
      guestEmail: 'test@gmail.com',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '5000',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        guestAddress: '',
        guestAddress2: '',
        guestCity: '',
        guestState: '',
        guestCountry: '',
        guestZipCode: '',
      },
      guestCount: '',
      guests: '',
    });


    
  }
  guestControl(): any {
    return this.fb.group({
      guestName: ['', Validators.required],
      age: new FormControl(''),
    });
  }
  addGuest() {
    this.guests.push(this.guestControl());
    console.log('guest added!');
  }
  deleteGuest(i: number) {
    this.guests.removeAt(i);
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  deletePassport() {
    this.bookingForm.removeControl('passport');
  }
}
