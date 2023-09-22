<template>
  <div>
    <div class="py-8 select-none bg-gradient-to-b from-green-600 to-green-200 pb-20 h-10">
          <div class="text-xl font-semibold text-center text-white sm:text-4xl">
          Floor Plan
        </div>
      </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4 w-full h-auto">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
        
          </h3>
          <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/Sienna/FloorPlan/FloorPlan_B1.png"
          alt="Location Plan for Sienna Residence"
          class="mx-auto"
        />

        <img
          src="~assets/img/Sienna/FloorPlan/FloorPlan_B2&B3.png"
          alt="Location Plan for Sienna Residence"
          class="mx-auto"
        />

        <img
          src="~assets/img/Sienna/FloorPlan/FloorPlan_B4.png"
          alt="Location Plan for Sienna Residence"
          class="mx-auto"
        />

        <img
          src="~assets/img/Sienna/FloorPlan/FloorPlan_B5.png"
          alt="Location Plan for Sienna Residence"
          class="mx-auto"
        />

        </div>
        </div>
        <!--
          <BedroomImageModal :bed-room-prop="OneBedroom"  style="width: 100%; height: auto;"/>
        </div>
      -->
        <!--        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Two (2) Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="TwoBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            One (3) Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="ThreeBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Four (4) Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="FourBedroom" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Five (5) Bedroom
          </h3>
          <BedroomImageModal :bed-room-prop="FiveBedroom" />
        </div>
      -->
        <section class="py-6">
          <NuxtLink
            to="/gallery"
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
            Continue To Gallery
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
      OneBedroom: [
        { title: '', url: 'floor-plan' },
//        { title: 'Type 1BR 2-PES', url: '2_Type 1BR 2-PES' },
//        { title: 'Type 1BR 3-PES', url: '3_Type 1BR 3-PES' },
//        { title: 'Type 1BR S1-PES', url: '4_Type 1BR S1-PES' },
//        { title: 'Type 1BR S2-PES', url: '5_Type 1BR S2-PES' },
//        { title: 'Type 1BR S3-PES', url: '6_Type 1BR S3-PES' },
//        { title: 'Type 1BR S4-PES', url: '7_Type 1BR S4-PES' },
//        { title: 'Type 1BR S5-PES', url: '8_Type 1BR S5-PES' },
          ],
      
//      TwoBedroom: [
//     { title: 'Type 2BR 1-PES', url: '9_Type 2BR 1-PES' },
//      { title: 'Type 2BR 2', url: '10_Type 2BR 2' },
//      { title: 'Type 2BR DK1-PES', url: '11_Type 2BR DK1-PES' },
//      { title: 'Type 2BR DK2', url: '12_Type 2BR DK2' },
//      { title: 'Type 2BR S1-PES', url: '13_Type 2BR S1-PES' },
//      { title: 'Type 2BR S2-PES', url: '14_Type 2BR S2-PES' },
//      { title: 'Type 2BR S3', url: '15_Type 2BR S3' },
//      { title: 'Type 2BR S4-PES', url: '16_Type 2BR S4-PES' },
//      ],
//      ThreeBedroom: [
//      { title: 'Type 3BR 1-PES', url: '17_Type 3BR 1-PES' },
//      { title: 'Type 3BR 2-PES', url: '18_Type 3BR 2-PES' },
//      { title: 'Type 3BR 3-PES', url: '19_Type 3BR 3-PES' },
//      { title: 'Type 3BR DK1-PES', url: '20_Type 3BR DK1-PES' },
//      { title: 'Type 3BR DK2-PES', url: '21_Type 3BR DK2-PES' },
//      { title: 'Type 3BR FLEX-PES', url: '22_Type 3BR FLEX-PES' },
//      { title: 'Type 3BR G', url: '23_Type 3BR G' },
//      { title: 'Type 3BR LS-PES', url: '24_Type 3BR LS-PES' },
//      ],
//        FourBedroom: [
//        { title: 'Type 4BR L-PES1', url: '25_Type 4BR L-PES1' },
//        { title: 'Type 4BR-PES', url: '26_Type 4BR-PES' },
//        ],
//        FiveBedroom: [
//        { title: 'Type 5BR L-PES', url: '27_Type 5BR L-PES' },
//        ],
      
    }
  },
}
</script>
