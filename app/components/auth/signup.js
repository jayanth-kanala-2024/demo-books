import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AuthSignupComponent extends Component {
  @service router;
  @tracked errors = {};
  classGreen = 'text-green-500';
  classRed = 'text-red-500';

  @action
  validatePassword() {
    var myInput = document.getElementById('password');
    var letter = document.getElementById('letter');
    var capital = document.getElementById('capital');
    var number = document.getElementById('number');
    var length = document.getElementById('length');
    var special = document.getElementById('special');

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove(this.classRed);
      letter.classList.add(this.classGreen);
    } else {
      letter.classList.remove(this.classGreen);
      letter.classList.add(this.classRed);
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove(this.classRed);
      capital.classList.add(this.classGreen);
    } else {
      capital.classList.remove(this.classGreen);
      capital.classList.add(this.classRed);
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      number.classList.remove(this.classRed);
      number.classList.add(this.classGreen);
    } else {
      number.classList.remove(this.classGreen);
      number.classList.add(this.classRed);
    }

    // Validate length
    if (myInput.value.length >= 8) {
      length.classList.remove(this.classRed);
      length.classList.add(this.classGreen);
    } else {
      length.classList.remove(this.classGreen);
      length.classList.add(this.classRed);
    }

    // Validate special char
    var specials = /[!@#$%^&*]{1,}/;
    if (myInput.value.match(specials)) {
      special.classList.remove(this.classRed);
      special.classList.add(this.classGreen);
    } else {
      special.classList.remove(this.classGreen);
      special.classList.add(this.classRed);
    }
    this.validateConfirmPassword();
  }

  @action
  validateConfirmPassword() {
    var myInput = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm-password');
    var confirm = document.getElementById('confirm');
    if (myInput.value.length > 0 && myInput.value === confirmPassword.value) {
      confirm.classList.remove(this.classRed);
      confirm.classList.add(this.classGreen);
    } else {
      confirm.classList.remove(this.classGreen);
      confirm.classList.add(this.classRed);
    }
  }

  @action
  async submitSignup(e) {
    e.preventDefault();
    this.errors = null;
    const data = new FormData(e.target);
    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
        confirm_password: data.get('confirm_password'),
        terms: data.get('terms'),
      }),
    });
    const out = await response.json();
    if (out.error) {
      this.errors = out.message;
    }
    this.router.transitionTo('auth/login');
    console.log('transitioned done');
    this.router.refresh();
  }
}
