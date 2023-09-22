<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Book An Appointment
      </div>
    </div>
    <div class="py-12 space-y-6">
      <section class="max-w-4xl px-4 mx-auto space-y-8 divide-y text-justify">
        <div class="space-y-6">
          <p>
            It is important to only engage the Official Direct Developer Team to
            assist you on all matters related to the new launch single-storey terrace house at
            <b>Bridgelux Homes</b>. There are several complex procedures and key factors
            to consider before committing to purchase a unit. Rest assured that
            all our representatives are certified, well-trained and committed to
            delivering and value-add.
          </p>
          <!--
          <p>
            By engaging the Official Direct Developer Team, you will also enjoy
            <span class="text-red-500">
              early bird discounts &amp; the best possible direct developer
              price </span
            >. There is no commission required to be paid.
          </p>
          -->
          <!--
          <p>
            Viewing of <b>Grand Dunman Showflat</b> is by appointment only. Register
            for an appointment below. Our friendly appointed representative will
            get back to you as soon as we can.
          </p>
          -->
        </div>
        <p class="py-6">
          <span class="font-semibold text-red-500">Important Note:</span> To
          book a unit, please call
          <a href="tel:+60178093305" class="font-medium text-brown-500"
            >+6017 809 3305</a
          >
          to tentatively reserve your choice unit before coming down to the house
          to avoid disappointment. Units are selling fast and are based on
          first come first serve basis. If you wish to visit the house first
          before making a decision, kindly book an appointment via the form
          below before coming down.
        </p>
      </section>
      <section class="max-w-2xl px-4 mx-auto space-y-4">
        <form class="space-y-4" @submit.prevent="send">
          <section
            v-if="step === 1"
            class="grid grid-cols-1 gap-2 transition-all transform sm:gap-6"
          >
            <div>
              <label for="date" class="block font-medium text-gray-500"
                >Visit Date<span class="text-red-500">*</span></label
              >
              <flat-pickr
                v-model="date"
                :config="config"
                class="form-input"
              ></flat-pickr>
              <!---->
            </div>
            <div>
              <label for="time" class="block font-medium text-gray-500"
                >Time<span class="text-red-500">*</span></label
              >
              <select
                id="time"
                v-model="time"
                required="required"
                class="form-input"
              >
                <option>11:00 AM</option>
                <option>11:30 AM</option>
                <option>12:00 PM</option>
                <option>12:30 PM</option>
                <option>01:00 PM</option>
                <option>01:30 PM</option>
                <option>02:00 PM</option>
                <option>02:30 PM</option>
                <option>03:00 PM</option>
                <option>03:30 PM</option>
                <option>04:00 PM</option>
                <option>04:30 PM</option>
                <option>05:00 PM</option>
                <option>05:30 PM</option>
                <option>06:00 PM</option>
                <option>06:30 PM</option>
              </select>
              <!---->
            </div>
            <div>
              <label for="bedroom_size" class="block font-medium text-gray-500">
                Bedroom Size Preference<span class="text-red-500"
                  >*</span
                ></label
              >
              <select
                id="bedroom_size"
                v-model="bedroom"
                required="required"
                class="form-input"
              >
                <option>1 Bedroom</option>
                <option>2 Bedroom</option>
                <option>3 Bedroom</option>
                <option>4 Bedroom</option>
                <option>Penthouse</option>
              </select>
              <!---->
            </div>

            <div class="flex flex-wrap items-center justify-end pt-5 sm:pt-0">
              <button
                v-if="isFilled"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  text-xs
                  font-medium
                  tracking-widest
                  text-white
                  uppercase
                  transition
                  bg-gray-800
                  border border-transparent
                  rounded-md
                  hover:bg-gray-700
                  active:bg-gray-900
                  focus:outline-none
                  focus:border-gray-900
                  focus:shadow-outline-gray
                  disabled:opacity-25
                "
                @click.prevent="next()"
              >
                Next
              </button>
            </div>
          </section>
          <section
            v-if="step === 2"
            class="grid grid-cols-1 gap-2 transition-all transform sm:gap-6"
          >
            <div>
              <label for="name" class="block font-medium text-gray-500"
                >Name<span class="text-red-500">*</span></label
              >
              <input
                id="name"
                v-model="name"
                type="text"
                required="required"
                class="form-input"
              />
              <!---->
            </div>
            <div>
              <label for="email" class="block font-medium text-gray-500"
                >Email<span class="text-red-500">*</span></label
              >
              <input
                id="email"
                v-model="email"
                type="email"
                required="required"
                class="form-input"
              />
              <!---->
            </div>
            <div>
              <label for="mobile" class="block font-medium text-gray-500"
                >Mobile<span class="text-red-500">*</span></label
              >
              <input
                id="mobile"
                v-model="mobile"
                type="text"
                required="required"
                class="lowercase form-input"
              />
              <!---->
              <div v-for="(arrayError, arrayIndex) in errors" :key="arrayIndex">
                <div v-for="(error, index) in arrayError" :key="index">
                  <p
                    v-if="index === 'mobile'"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ error }}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label
                for="lvl_of_interest"
                class="block font-medium text-gray-500"
              >
                Level Of Interest<span class="text-red-500">*</span></label
              >
              <select
                id="lvl_of_interest"
                v-model="interest"
                required="required"
                class="form-input"
              >
                <option>Exploring options.</option>
                <option>Ready to place a cheque.</option>
              </select>
              <!---->
            </div>
            <div>
              <label for="message" class="block font-medium text-gray-500"
                >Acceptance of Privacy Policy<span class="text-red-500"
                  >*</span
                ></label
              >
              <label class="inline-flex items-center"
                ><input
                  type="checkbox"
                  value="1"
                  required="required"
                  class="
                    border-gray-300
                    rounded
                    shadow-sm
                    text-brown-600
                    focus:border-brown-300
                    focus:ring
                    focus:ring-brown-200
                    focus:ring-opacity-50
                  "
                />
                <span class="ml-2"
                  >I have read and agree to the
                  <a
                    href="/privacy-policy"
                    class="font-medium underline text-brown-600"
                    >Privacy Policy</a
                  ></span
                ></label
              >
              <!---->
            </div>
            <div
              class="flex flex-wrap items-center justify-between pt-5 sm:pt-0"
            >
              <button
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  text-xs
                  font-medium
                  tracking-widest
                  text-white
                  uppercase
                  transition
                  bg-gray-800
                  border border-transparent
                  rounded-md
                  hover:bg-gray-700
                  active:bg-gray-900
                  focus:outline-none
                  focus:border-gray-900
                  focus:shadow-outline-gray
                  disabled:opacity-25
                "
                @click.prevent="previous()"
              >
                Back
              </button>
              <div>
                <button
                  class="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    text-xs
                    font-medium
                    tracking-widest
                    uppercase
                    transition
                    border border-transparent border-gray-800
                    rounded-md
                    hover:border-brown-700 hover:text-brown-700
                    focus:outline-none focus:shadow-outline-gray
                    disabled:opacity-25
                  "
                  @click.prevent="reset()"
                >
                  Reset
                </button>
                <button
                  class="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    text-xs
                    font-medium
                    tracking-widest
                    text-white
                    uppercase
                    transition
                    bg-gray-800
                    border border-transparent
                    rounded-md
                    hover:bg-gray-700
                    active:bg-gray-900
                    focus:outline-none
                    focus:border-gray-900
                    focus:shadow-outline-gray
                    disabled:opacity-25
                  "
                >
                  Submit
                </button>
              </div>
            </div>
          </section>
        </form>
        <div>
          <div
            v-if="errors.length"
            class="flex items-center p-4 border rounded-lg bg-red-100"
          >
            <!---->
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-8 h-8 mr-2 text-red-500"
            >
              <path
                d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"
              ></path>
            </svg>
            <div class="select-none">
              The given data was invalid.
              <div v-for="(arrayError, arrayIndex) in errors" :key="arrayIndex">
                <div v-for="(error, index) in arrayError" :key="index">
                  <p>{{ error }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- success !-->
          <div
            v-else-if="success"
            class="flex items-center p-4 border rounded-lg bg-green-100"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-8 h-8 mr-2 text-green-500"
            >
              <path
                d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
              ></path>
              <path
                d="M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"
              ></path>
            </svg>
            <!---->
            <div class="select-none">
              Thank you for your enquiry, we will respond to your request soon.
              <div></div>
            </div>
          </div>
        </div>
        <!---->
      </section>
    </div>
  </div>
</template>
<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
  components: {
    flatPickr,
  },
  data() {
    return {
      step: 1,
      date: null,
      time: null,
      bedroom: null,
      isFilled: false,
      name: null,
      email: null,
      mobile: null,
      interest: null,
      errors: '',
      success: false,
      email_2:'siennaresidencekch@gmail.com',
      config: {
        wrap: true,
        altFormat: 'd/m/Y - l',
        altInput: true,
        minDate: 'today',
      },
    }
  },
  computed: {
    compoundProperty() {
      return [this.date, this.time, this.bedroom].join()
    },
  },
  watch: {
    compoundProperty() {
      if (this.date && this.time && this.bedroom) {
        this.isFilled = true
      }
    },
  },

  methods: {
    next() {
      this.step++
    },
    previous() {
      this.step--
    },
    reset() {
      this.step = 1
      this.date = null
      this.time = null
      this.bedroom = null
      this.isFilled = false
      this.name = null
      this.email = null
      this.mobile = null
      this.interest = null
    },
    send() {
      this.errors = []

 /*     if (this.mobile) {
        const prefix = this.mobile.substring(0, 2)
        if (prefix !== '65' || this.mobile.length <= 7) {
          this.errors.push({
            mobile: 'The mobile field contains an invalid number.',
          })
        }
      } */

      if (!this.errors.length) {
        // eslint-disable-next-line
       this.$axios
        .post('https://siennaresidences.kuchingproperty.com/send_mail.php', {
          To: process.env.EMAIL_USER,
          From: this.email,
          Subject: 'Bridgelux Homes - Receipt Acknowledgement for Appointment',
          Body:
            '<h3><b>Dear ' + this.name + '</b><h3>' + 
            '<h4>Congratulations!</h4>'+ 
            '<h4>We are pleased to inform you that your appointment to view the house for Bridgelux Homes on '+
            this.date + ' at ' + this.time + 
            ' with our developer staff has been confirmed. Congratulations on securing your appointment!</h4>' + 
            '<h4>Our developer staff will be contacting you shortly to reconfirm the details of your appointment. </h4>'+ 
            '<h4>We kindly ask that you refrain from scheduling any other appointments during the time you have reserved with us to avoid any potential scheduling conflicts.</h4>'+
            '<h4>In the event that you need to reschedule your appointment, kindly inform us by replying to this email, <a href="mailto:bridgeluxhome@gmail.com"><b>bridgeluxhome@gmail.com</b></a> with your preferred appointment date and time.</h4>'+ 
            '<h4>Should you have any queries, you may contact us by replying to this email, <a href="mailto:bridgeluxhome@gmail.com"><b>bridgeluxhome@gmail.com</b></a>, or calling us at <a href="tel:+60178093305"><b>+6017 809 3305</b></a>.</h4>' +  
            '<h4>We hope you have a pleasant day and look forward to welcoming you to Bridgelux Homes.</h3>' + 
            '<h4>Best regards,</h4>' + 
            '<h4>Bridgelux Homes</h4>',
        }).then(() => {
        this.$axios
        .post('https://siennaresidences.kuchingproperty.com/send_mail.php', {
          To: process.env.EMAIL_USER,
          From: this.email_2,
          Subject: 'Bridgelux Homes - New Booking Submission' +' [' + this.name +']',
          Body:
            '<h3>Dear Admin, </h3>' +
            '<h4>Below are the details for the New Booking Submission, do check it out: </h4>' +
            '<ul>'+
            '<li> <strong> Date: ' + this.date + '</strong></li>' +
            '<li> <strong> Time: ' + this.time + '</strong></li>' +
            '<li> <strong> Bedroom Size: ' + this.bedroom + '</strong></li>' +
            '<li> <strong> Name: ' + this.name + '</strong></li>' +
            '<li> <strong> Email: ' + this.email + '</strong></li>' +
            '<li> <strong> Mobile: ' + this.mobile + '</strong></li>' +
            '<li> <strong> Level Of Interest: ' + this.interest + '</strong></li>' +
            '</ul>'+
            '<h4>Thanks, </h4>' + 
            '<h4>Bridgelux Homes</h4>',
        })
         
          this.success = true
          this.reset()
        }).catch( () => {
          
        })
      }
    },
  },
}
</script>
