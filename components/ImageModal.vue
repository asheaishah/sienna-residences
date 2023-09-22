<template>
  <div class="grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-3">
    <div v-for="(bedRoom, index) in bedRooms.bedRoomProp" :key="index" class="space-y-1 cursor-pointer"
      @click="toggleModal(bedRoom.url)">
      <img :src="images[bedRoom.url]" class="mx-auto rounded  w-2/3" />
      <p class="text-center">{{ bedRoom.title }}</p>
    </div>

    <div v-if="modal" class="
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
        overscroll-y-contain
        overflow-auto
      ">
      <div ref="modalRef" class="relative w-auto my-auto mx-auto max-w-6xl">

        <div class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          ">

          <div class="relative p-6 flex-auto">
            <img :src="images[imageUrl]" alt="" class="mx-auto rounded" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="modal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { filename } from 'pathe/utils';

let modal = ref(false)
const modalRef = ref(null)
let imageUrl = ref(null)
const bedRooms = defineProps({ bedRoomProp: Array })

onClickOutside(
  modalRef,
  (event) => {
    console.log(event)
    modal.value = false
  },
)

function toggleModal(url) {
  imageUrl.value = url
  modal.value = true
}

const glob = import.meta.glob(`~/assets/img/Sienna/*.png`, { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
</script>