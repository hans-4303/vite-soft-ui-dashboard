<template>
  <div class="card bg-transparent shadow-xl">
    <div
      class="overflow-hidden position-relative border-radius-xl"
      :style="{
        backgroundImage:
          `url(${bgImg})`,
      }"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="card-body position-relative z-index-1 p-3">
        <i class="fas fa-wifi text-white p-2" aria-hidden="true"></i>
        <h5 class="text-white mt-4 mb-5 pb-2">
          4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
        </h5>
        <div class="d-flex">
          <div class="d-flex">
            <div :class="$store.state.isRTL ? 'ms-4' : 'me-4'">
              <p class="text-white text-sm opacity-8 mb-0">
                {{ cardHolderText }}
              </p>
              <h6 class="text-white mb-0">{{ name }}</h6>
            </div>
            <div>
              <p class="text-white text-sm opacity-8 mb-0">
                {{ cardExpirationText }}
              </p>
              <h6 class="text-white mb-0">11/22</h6>
            </div>
          </div>
          <div
            class="w-20 d-flex align-items-end justify-content-end"
            :class="$store.state.isRTL ? 'me-auto' : 'ms-auto'"
          >
            <vsud-avatar class="w-60 mt-2" :img="img1" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 컴포넌트 및 이미지 호출하고 상위 컴포넌트 선언하는 스크립트 단 -->
<script>
/* 컴포넌트 및 이미지 호출 */
import VsudAvatar from "@/components/VsudAvatar.vue";
import img from "../../assets/img/curved-images/curved14.jpg";
import img1 from "../../assets/img/logos/mastercard.png";
import bgImg from '@/assets/img/curved-images/curved14.jpg';

/* 상위 컴포넌트 정의 */
export default {
  /* 고유 name */
  name: "MasterCard",
  /* 호출 컴포넌트 */
  components: {
    VsudAvatar,
  },
  /* props 명세 */
  props: {
    /* [key: String]: {
      type: Function,
      default: String
    } */
    cardHolderText: {
      type: String,
      default: "Card Holder",
    },
    name: {
      type: String,
      default: "Jack Peterson",
    },
    cardExpirationText: {
      type: String,
      default: "Expires",
    },
  },
  /* data, 함수 형이며 객체 반환하고 키는 현 컴포넌트에서 활용 */
  data() {
    return {
      img,
      img1,
      bgImg
    };
  },
};
</script>
