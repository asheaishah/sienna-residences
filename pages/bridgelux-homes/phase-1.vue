<template>
    <div>
      <div class="py-8 select-none bg-gradient-to-b from-green-600 to-green-200 pb-20 h-10">
            <div class="text-xl font-semibold text-center text-white sm:text-4xl">
            Poster
          </div>
        </div>
      <section>
        <section>
          <li>
            <h1 class="text-xl font-semibold mb-2">
              <span class="text-blue-800"><NuxtLink to="/contact-us">Contact us</NuxtLink></span> for pricing details
            </h1>
                  </li>
                    <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
                    <div class="flex justify-center">
                    <img
                      src="~assets/img/Sienna/E-brosure.jpeg"
                      width="800"
                      alt="Sienna Residence B-brochure"
                    />
                    </div>
                    </div>
       </section>            
          <section class="py-6">
            <NuxtLink
              to="/sales-memo"
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
              Continue Sales Memo
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
          </section>
        </div>
      <BookAppointment />
  </template>
  
  <style scoped>
  
      h1 {
          margin-top: 50px;
          margin-bottom: 5px;
          font-size: 20px;
          text-align: center;
      }
  
    </style>