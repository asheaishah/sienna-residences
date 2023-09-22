<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <section class="space-y-6">
    <form class="space-y-4" @submit.prevent="send">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="send_brochure" class="inline-flex items-center w-full p-4 font-medium text-gray-600 border rounded-lg border-theme-100 bg-theme-50">
            <input
              id="send_brochure"
              v-model="send_brochure"
              type="checkbox"
              class="border-gray-300 rounded shadow-sm text-theme-600 focus:border-theme-300 focus:ring focus:ring-theme-200 focus:ring-opacity-50"
            />
            <span class="ml-2">Send me E-Brochure, Floor Plan & Pricing now</span>
          </label>
        </div>
        <div>
          <label for="enquiry" class="block font-medium text-gray-500">Enquiry<span class="text-red-500">*</span></label>
          <select id="enquiry" v-model="enquiry" required class="form-input">
            <option value="">Please select</option>
            <option value="Purchase">Purchase</option>
            <option value="I want to purchase, but I have an existing property to sell">I want to purchase, but I have an existing property to sell</option>
            <option value="I want updates only">I want updates only</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <label for="name" class="block font-medium text-gray-500">Full Name<span class="text-red-500">*</span></label>
          <input id="name" v-model="name" type="text" required class="form-input" />
        </div>
        <div>
          <label for="mobile" class="block font-medium text-gray-500">Mobile<span class="text-red-500">*</span></label>
          <input id="mobile" v-model="mobile" type="number" required class="lowercase form-input" />
          <div v-if="errors.mobile" class="mt-2 text-sm text-red-500">{{ errors.mobile }}</div>
        </div>
        <div>
          <label for="email" class="block font-medium text-gray-500">Email<span class="text-red-500">*</span></label>
          <input id="email" v-model="email" type="email" required class="form-input" />
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block font-medium text-gray-500">Message</label>
          <textarea v-model="message" class="form-input"></textarea>
        </div>
        <div class="sm:col-span-2">
          <label for="make_appt" class="block font-medium text-gray-500">Make an Appointment?<span class="text-red-500">*</span></label>
          <div class="space-y-2">
            <label class="flex items-center">
              <input v-model="isAppointment" type="radio" value="Would like to make an appointment." class="mr-2" />
              I have some questions and I would like to make an appointment to discuss in detail.
            </label>
            <label class="flex items-center">
              <input v-model="isAppointment" type="radio" value="No appointment required." class="mr-2" />
              No appointment required for now.
            </label>
            <div v-if="errors.isAppointment" class="mt-2 text-sm text-red-500">{{ errors.isAppointment }}</div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="accept_privacy_policy" class="block font-medium text-gray-500">Acceptance of Privacy Policy<span class="text-red-500">*</span></label>
          <label class="inline-flex items-center">
            <input v-model="policyIsAgree" type="checkbox" value="1" required class="border-gray-300 rounded shadow-sm text-theme-600 focus:border-theme-300 focus:ring focus:ring-theme-200 focus:ring-opacity-50" />
            <span class="ml-2">
              I have read and agree to the
              <NuxtLink to="/privacy-policy" class="font-medium underline text-theme-600">Privacy Policy</NuxtLink>
            </span>
          </label>
        </div>
      </div>
      <button
    class="inline-flex items-center px-4 py-2 text-xs font-medium tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 custom-button"
  >
    Submit
    <span class="button-hover-effect"></span>
  </button>
  <button
    class="inline-flex items-center px-4 py-2 text-xs font-medium tracking-widest uppercase transition border border-transparent border-gray-800 rounded-md hover:border-theme-700 hover:text-theme-700 focus:outline-none focus:shadow-outline-gray disabled:opacity-25 custom-button"
    @click.prevent="reset"
  >
    Reset
    <span class="button-hover-effect"></span>
  </button>
    </form>

    <div>
      <div v-if="errors.length" class="flex items-center p-4 border rounded-lg bg-red-100">
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-8 h-8 mr-2 text-red-500">
          <path d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"></path>
        </svg>
        <div class="select-none">
          The given data was invalid. Please input valid information. Thank you.
          <div v-for="(error, index) in errors" :key="index">
            <p>{{ error }}</p>
          </div>
        </div>
      </div>
      <div v-else-if="success" class="flex items-center p-4 border rounded-lg bg-green-100">
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-8 h-8 mr-2 text-green-500">
          <path d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"></path>
          <path d="M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"></path>
        </svg>
        <div class="select-none">
          Thank you for your enquiry, we will respond to your request as soon as possible. Thank you!
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      enquiry: '',
      name: '',
      mobile: '',
      email: '',
      message: '',
      isAppointment: '',
      errors: {},
      success: false,
      policyIsAgree: '',
      send_brochure: false,
      email_2: 'siennaresidencekch@gmail.com',
      newSendBrochure: '', 
    };
  },
  created() {
    this.$axios = axios;
  },
  methods: {
    send() {
      this.errors = {};

      if (!this.enquiry) {
        this.errors.enquiry = 'Please select an enquiry type.';
      }

      if (!this.name) {
        this.errors.name = 'Please enter your name.';
      }

      if (!this.mobile) {
    this.errors.mobile = 'Please enter your mobile number.';
        } else {
    // Convert this.mobile to a string before using substring
    const mobileString = this.mobile.toString();
    if ( mobileString.length <= 7) {
      this.errors.mobile = 'The mobile field contains an invalid number.';
         }
      }

      if (!this.email) {
        this.errors.email = 'Please enter your email address.';
      }

      if (!this.isAppointment) {
        this.errors.isAppointment = 'Please select an appointment option.';
      }

      if (!this.policyIsAgree) {
        this.errors.policyIsAgree = 'Please accept the privacy policy.';
      }

      if (Object.keys(this.errors).length === 0) {
        // This line ensures that newSendBrochure gets set based on send_brochure
        this.newSendBrochure = this.send_brochure ? 'Yes' : 'No';

        const emailBody =
        `<h3>Dear ${this.name},</h3>` +
        `<h4>Thank you for your interest in Sienna Residence. We are thrilled to offer you the opportunity to be among the first to experience our new, upcoming single-storey terrace house.</h4>` +
        `<h4>As a valued prospect, we want to keep you informed of all the latest updates and developments related to Sienna Residence. Our team is dedicated to providing you with the most up-to-date information available, and we will be sure to keep you in the loop as we progress.</h4>` +
        `<h4>In addition, we also update our website regularly with new information and exciting developments related to Sienna Residence. Be sure to check back often for the latest news at: <a href="https://http://SiennaResidence.kuchingproperty.com/"><b>SiennaResidence.kuchingproperty.com</b></a></h4>` +
        `<h4>If you have any questions or concerns, please do not hesitate to contact us at <a href="tel:+6017 809 3305"><b>+6017 809 3305</b></a> or reply to this email: <a href="mailto:siennaresidencekch@gmail.com"><b>siennaresidencekch@gmail.com</b></a>. Our team is here to provide you with the highest level of service and support.</h4>` +
        `<h4>Thank you for considering Sienna Residence as your next home. We look forward to the opportunity to serve you!</h4>` +
        `<h4>Best regards,</h4>` +
        `<h4>Sienna Residence</h4>`;

        this.$axios
          .post('https://siennaresidences.kuchingproperty.com/send_mail.php', {
            To: process.env.EMAIL_USER,
            From: this.email,
            Subject: 'Sienna Residence - Receipt Acknowledgement',
            Body: emailBody,
          })
          .then(() => {
            const appointmentBody =
              `<h3>Dear Admin,</h3>` +
              `<h4>We have received a new appointment submission from a potential buyer who wishes to visit the property. The details of the appointment are as follows:</h4>` +
              `<ul>` +
              `<li><strong>Enquiry: ${this.enquiry}</strong></li>` +
              `<li><strong>Name: ${this.name}</strong></li>` +
              `<li><strong>Mobile: ${this.mobile}</strong></li>` +
              `<li><strong>Email: ${this.email}</strong></li>` +
              `<li><strong>Message: ${this.message}</strong></li>` +
              `<li><strong>Appointment: ${this.isAppointment}</strong></li>` +
              `<li><strong>Send Brochure: ${this.newSendBrochure}</strong></li>` +
              `</ul>` +
              `<h4>Thanks,</h4>` +
              `<h4>Sienna Residence</h4>`;

            this.$axios.post('https://siennaresidences.kuchingproperty.com/send_mail.php', {
              To: process.env.EMAIL_USER,
              From: this.email_2,
              Subject: `Sienna Residence - New Appointment Submission [${this.name}]`,
              Body: appointmentBody,
            }).then(() => {
              this.success = true;
              this.reset();
            }).catch((error) => {
              console.log(error);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    reset() {
      this.enquiry = '';
      this.name = '';
      this.mobile = '';
      this.email = '';
      this.message = '';
      this.isAppointment = '';
      this.errors = {};
      this.policyIsAgree = '';
      this.send_brochure = false;
    },
  },
};
</script>

