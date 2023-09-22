<template>
  <div>
    <div class="py-8 select-none bg-gradient-to-b from-green-600 to-green-200 pb-20 h-10">
          <div class="text-xl font-semibold text-center text-white sm:text-4xl">
          Location Map
        </div>
      </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/Sienna/SR_Location.jpg"
          alt="Location Plan for Sienna Residence"
          class="mx-auto"
        />

      <br>

      <div class="map-container">
    <iframe 
      :src="mapUrl"
      class="map-iframe"
      allowfullscreen 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

        <h3 class="text-xl font-semibold sm:text-2xl">
          Facilities Nearby @ Sienna Residence
        </h3>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            SHOPPING MALLS, MARKET &amp; GROCERIES
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
      
             <!--Start -->
             <!--Train Vector -->
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Matang Mall</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <!-- End First Row -->
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Emart Matang</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">MetroMall @ MetroCity Square</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            EDUCATION INSTITUTIONS
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">SMK Matang Hilir</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">SMK Matang Jaya</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">SMK Agama Sheikh Haji Othman Abdul Wahab (SHOAW)</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">SMK Sri Matang</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">SK Gita</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">SK Tan Sri Datuk Haji Mohamed</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Smart Reader Kids Taman Serira</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            RECREATION
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Dewan Serbaguna Taman Sri Makmur</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">VH Green Nature Park</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            Healthcare & Community Centres
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Country Clinic</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">NG Medical Clinic</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
             
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Masjid Al-Abyad Taman Matang Jaya Masjid Putih</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
             
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Matang Methodist Church</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Mini Pejabat Pos</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>

             
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="py-6">
          <NuxtLink
            to="/site-plan"
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
            Continue To Site Plan
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
              ></path>
              </svg>
            </NuxtLink>
        </section>
      </div>
    </section>
  
    <BookAppointment />
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.722347172775!2d110.28234217324314!3d1.5752955608133268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fb07b920616101%3A0x42526e2bab4131a0!2sSienna%20Residence%20%40%20Matang!5e1!3m2!1sen!2smy!4v1694465855974!5m2!1sen!2smy'
    };
  },
};
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* adjust this value according to your needs */
}

.map-iframe {
  width: 100%;
  max-width: 800px;
  height: 50vh; /* adjust this value according to your needs */
  border: none;
}
</style>