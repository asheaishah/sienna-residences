<template>
  <div>
    <div>
      <div class="py-8 select-none bg-gradient-to-b from-green-600 to-green-200 pb-20 h-10">
          <div class="text-xl font-semibold text-center text-white sm:text-4xl">
          Project Details
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
          <div class="p-9 bg-gray-200 rounded-lg shadow-lg">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-gray-700 font-bold">Project Name</label>
                <p>Sienna Residence @Matang</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Developer</label>
                <p>Tecktonic & Sons Holdings Sdn Bhd</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Location</label>
                <p>Lot 945, Block 6, Jalan Matang, 93050 Kuching, Sarawak</p>
              </div>
              
              <div>
                <label class="block text-gray-700 font-bold">District</label>
                <p>Kuching</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Site Area</label>
                <p>16.54 acres approx</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Number of Blocks</label>
                <p>5 Blocks</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Number of Units</label>
                <p>Total 496 units</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Number of Floors</label>
                <p>4 Storeys</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Freehold/Leasehold</label>
                <p>TBC (Min. 60 years)</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Lift per Block</label>
                <p>1</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Number of carparks</label>
                <p>2 shaded carpark per unit only</p>
              </div>
              <div>
                <label class="block text-gray-700 font-bold">Tiers of Security</label>
                <p>24 hour security</p>
              </div>
            </div>
          </div>
          <div class="py-4 italic text-center text-gray-600">
            (Project details for Bridgelux Homes may be subjected to change without prior notice)
          </div>
          <section class="py-6">
            <NuxtLink
              to="/location-map"
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
              Continue To Location Map
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  d="M13 6l6 6-6 6M5 6l6 6-6 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
            ></NuxtLink>
          </section>
        </div>
      </section>
      
      <BookAppointment />
    
    </div>
  </div>
</template>
<script>
export default {}
</script>
