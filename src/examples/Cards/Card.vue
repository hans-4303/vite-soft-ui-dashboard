<template>
  <div class="mb-4 card">
    <div class="p-3 card-body">
      <div class="d-flex" :class="directionReverse ? reverseDirection : ''">
        <div>
          <div class="text-center shadow icon icon-shape border-radius-md" :class="iconBackground">
            <i class="text-lg opacity-10" :class="iconClass" aria-hidden="true"></i>
          </div>
        </div>
        <div :class="contentClass">
          <div class="numbers">
            <p class="mb-0 text-sm text-capitalize font-weight-bold" :class="titleColor">{{ title }}</p>
            <h5 class="mb-0 font-weight-bolder" :class="valueColor">
              {{ value }}
              <span
                class="text-sm font-weight-bolder"
                :class="percentageColor"
              >{{ percentage }}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 상위 컴포넌트 정의 스크립트 단 -->
<script>
export default {
  /* 고유 name */
  name: "CardComponent",
  /* props 명세 */
  props: {
    /* 객체 아닌 키와 값 선언 */
    directionReverse: Boolean,
    /* [key: String]: {
      type: Function;
      required?: Boolean;
      default?: 데이터 타입
    } */
    title: {
      type: String,
      required: true,
    },
    titleColor: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    valueColor: {
      type: String,
      default: ""
    },
    percentage: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      required: true,
    },
    percentageColor: {
      type: String,
      default: "text-success",
    },
    iconBackground: {
      type: String,
      default: "bg-white",
    },
    contentClass: {
      type: String,
      default: ""
    },
  },
  /* data, 함수 형이며 객체 호출되어 키는 컴포넌트 활용 가능 */
  data() {
    return {
      reverseDirection: "flex-row-reverse justify-content-between",
    };
  },
};
</script>
