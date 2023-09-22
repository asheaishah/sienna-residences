<template>
  <div>
    <div class="py-8 select-none bg-gradient-to-b from-green-600 to-green-200 pb-20 h-10">
          <div class="text-xl font-semibold text-center text-white sm:text-4xl">
          Gallery
        </div>
      </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <ImageModal :bed-room-prop="imageUrl" />
        <!--
        <div>
          <p class="max-w-2xl mx-auto text-center">
            Disclaimer: Illustrative Image with Update Policy
            </p>
            <br>
            <p>
              The image below is for illustrative purposes only. It does not represent real individuals, places, events, or products. The content is fictional and subject to change without notice.
              </p>
              <p>
              This image is intended for reference or concept demonstration only and should not be used for decision-making. Any updates or alterations are at the discretion of the image creator.
               </p>
          <br><br>
        </div>
      -->
        <section class="py-6">
          <NuxtLink
            to="/bridgelux-homes/phase-1"
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
            Continue To Poster
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
<script>
export default {
  data() {
    return {
      imageUrl: [
        { url: 'Sienna_1' }, 
        { url: 'Sienna_3' },
        { url: 'Sienna_4' }, 
        { url: 'Sienna_5' }, 
        { url: 'BLH-5' }, 
        { url: 'BLH-6' }, 
        { url: 'BLH-7' }, 
        { url: 'BLH-8' }, 
        { url: 'BLH-9' }, 
      ],
    }
  },
}
</script>
