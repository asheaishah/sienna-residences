<template>
    <div>
      <div>
        <div class="py-8 select-none bg-gradient-to-b from-green-600 to-green-200 pb-20 h-10">
          <div class="text-xl font-semibold text-center text-white sm:text-4xl">
          Sales Memo
        </div>
      </div>
  <!--
        <div class="max-w-6xl px-4 mx-auto prose text-justify">
          <h1> About Developer </h1>
            <p>
              Teknik Perancang Realty Sdn Bhd Teknik Perancang Realty Sdn Bhd was incorporated on 1980 in Malaysia. Teknik Perancang Realty Sdn Bhd business includes property development
            </p>
        </div>
  -->
        <section class="py-12">
          <div class="max-w-6xl px-4 mx-auto">
            <div class="p-10 bg-gray-200 rounded-lg shadow-lg">
              <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div>
                  <label class="block text-black font-bold">Discount</label>
                  <p>RM 3,000 per unit</p>
                  <br>
                  <p>Freebies:</p>
                  <p><b class="text-gray-500">- Free ceiling fans to living & all bedrooms(s)</b></p>
                  <p><b class="text-gray-500">- Free wardrobe to all bedroom(s)</b></p>
                  <p><b class="text-gray-500">- Free kitchen cabinet</b></p>
                  <br>
                  <p>Entitled HDAS RM10,000 Subsidy</p>
                  <p><b class="text-gray-500">With terms & condition apply</b></p>
                </div>

                <div>
                  <label class="block text-black font-bold">Legal Fees & Stamp Duty</label>
                    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3"></div>
                      <label class="block text-black-500 "><b class="text-gray-500">SPA</b> ----- Borne by developer (only for panel lawyers)</label>
                      <label class="block text-black-500 "><b class="text-gray-500">Loan Documents</b> ----- Borne by developer (only for panel lawyers)</label> 
                      <label class="block text-black-500 "><b class="text-gray-500">DMC</b> ----- Borne by developer (only for panel lawyers)</label> 
                      <label class="block text-black-500 "><b class="text-gray-500">MOT</b> ----- Borne by purchaser</label>
                </div>

                <div>
                  <br>
                  <label class="block text-black font-bold">Booking Fee</label>
                  <p>RM 1,000.00</p>
                </div>

                <div>
                  <br>
                  <label class="block text-black font-bold">Cancellation</label>
                  <p>Bank rejection letter & sign cancellation form</p>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <section class="py-6">
            <NuxtLink
              to="/contact-us"
              class="
                inline-flex
                items-center
                justify-center
                w-full
                px-3
                py-3
                text-white
                transition
                rounded
                sm:px-0
                hover:bg-blue-600
                bg-blue-300
              "
            >
              Contact us
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w- h-5"
              >
                <path
                  d="M13 6l6 6-6 6M5 6l6 6-6 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                </svg>
              </NuxtLink>
            </section>
    </div>
    </div>
</template>

<script>
export default{
  
}
</script>