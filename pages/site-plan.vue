<template>
  <div>
    <div class="py-8 select-none bg-gradient-to-b from-green-600 to-green-200 pb-20 h-10">
        <div class="text-xl font-semibold text-center text-white sm:text-4xl">
          Site Plan
        </div>
      </div>
    <section>
      <div class="bg-gray-200 max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/Sienna/SitePlan/Block_1.jpeg"
          alt="SitePlan for Sienna Residence"
          class="mx-auto"
        />

        <img
        src="~assets/img/Sienna/SitePlan/Block_2.jpeg"
        alt="Description for the second image"
        class="mx-auto"
        />

        <img
        src="~assets/img/Sienna/SitePlan/Block_3.jpeg"
        alt="Description for the second image"
        class="mx-auto"
        />

        <img
        src="~assets/img/Sienna/SitePlan/Block_4.jpeg"
        alt="Description for the second image"
        class="mx-auto"
        />

        <img
        src="~assets/img/Sienna/SitePlan/Block_5.jpeg"
        alt="Description for the second image"
        class="mx-auto"
        />

        <section class="py-6">
          <NuxtLink
            to="/floor-plan"
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
            Continue To Floor Plan 
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
              ></path></svg>
          </NuxtLink>
        </section>
      </div>
    </section>
    <BookAppointment />
  </div>
</template>

