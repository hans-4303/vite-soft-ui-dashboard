<template>
  <div class="card mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Payment Method</h6>
        </div>
        <div class="col-6 text-end">
          <vsud-button color="dark" variant="gradient">
            <i class="fas fa-plus me-2"></i>
            Add New Card
          </vsud-button>
        </div>
      </div>
    </div>
    <div class="card-body p-3">
      <div class="row">
        <div class="col-md-6 mb-md-0 mb-4">
          <div
            class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          >
            <img class="w-10 me-3 mb-0" src="../../assets/img/logos/mastercard.png" alt="logo" />
            <h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
            <i
              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Edit Card"
              aria-label="Edit Card"
            ></i>
            <span class="sr-only">Edit Card</span>
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          >
            <img class="w-10 me-3 mb-0" src="../../assets/img/logos/visa.png" alt="logo" />
            <h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
            <i
              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Edit Card"
              aria-label="Edit Card"
            ></i>
            <span class="sr-only">Edit Card</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 컴포넌트 및 이미지 호출, 선언되는 스크립트 단 -->
<script>
/* 컴포넌트 및 이미지 호출 */
import VsudButton from "@/components/VsudButton.vue";
import img1 from "../../assets/img/logos/mastercard.png";
import img2 from "../../assets/img/logos/visa.png";

/* 상위 컴포넌트 선언 */
export default {
  /* 고유 name */
  name: "PaymentCard",
  /* 호출 컴포넌트 */
  components: {
    VsudButton,
  },
  /* 데이터, 함수 형태이며 객체로 리턴되고 키는 현 컴포넌트에서 사용 가능 */
  data() {
    return {
      img1,
      img2,
    };
  },
};
</script>
