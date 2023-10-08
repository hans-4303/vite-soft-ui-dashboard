<template>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-6 mb-xl-0 mb-4">
            <master-card />
          </div>
          <div class="col-xl-6">
            <div class="row">
              <div class="col-md-6">
                <default-info-card
                  :class-icon="salary.classIcon"
                  :title="salary.title"
                  :desc="salary.desc"
                  :price="salary.price"
                />
              </div>
              <div class="col-md-6">
                <default-info-card
                  :class-icon="paypal.classIcon"
                  :title="paypal.title"
                  :desc="paypal.desc"
                  :price="paypal.price"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4">
            <payment-card />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <invoice-card />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-7">
        <billing-card />
      </div>
      <div class="col-md-5 mt-4">
        <transaction-card />
      </div>
    </div>
  </div>
</template>

<!-- 컴포넌트 호출 및 상위 컴포넌트 정의하는 script 단 -->
<script>
/* 컴포넌트 호출 */
import setTooltip from "@/assets/js/tooltip.js";
import NavPill from "./components/NavPill.vue";
import MasterCard from "@/examples/Cards/MasterCard.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import PaymentCard from "./components/PaymentCard.vue";
import InvoiceCard from "./components/InvoiceCard.vue";
import BillingCard from "./components/BillingCard.vue";
import TransactionCard from "./components/TransactionCard.vue";

/* 상위 컴포넌트 내보내기 */
export default {
  /* 이름 */
  name: "BillingPage",
  /* 페이지 내부 사용될 컴포넌트 */
  components: {
    NavPill,
    MasterCard,
    DefaultInfoCard,
    PaymentCard,
    InvoiceCard,
    BillingCard,
    TransactionCard,
  },
  /* 현 vue 컴포넌트가 다룰 정보를 가진 prop
  객체 | 함수 */
  data() {
    /* 함수 형태로 리턴 */
    return {
      /* 키 그대로 현 컴포넌트에서 쓰임: data().salary ... 와 같이 접근 X */
      salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Salary",
        desc: "Belong Interactive",
        price: "+$2000",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Paypal",
        desc: "Freelance Payment",
        price: "$455.00",
      },
    };
  },
  /* 마운트 된다면 setTooltip 메서드 호출 */
  mounted() {
    setTooltip();
  },
};
</script>
