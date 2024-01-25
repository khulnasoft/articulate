import PhoneNumber from 'awesome-phonenumber';
import { extend } from 'vee-validate';

extend('phone', {
  message: 'This is not a valid phone number',
  validate(value) {
    const phone = new PhoneNumber(value);
    return phone.isValid();
  },
});
