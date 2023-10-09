<template>
  <div class="pb-0 card-header">
    <h6>Sales overview</h6>
    <p class="text-sm">
      <i class="fa fa-arrow-up text-success"></i>
      <span class="font-weight-bold">4% more</span> in 2021
    </p>
  </div>
  <div class="p-3 card-body">
    <div class="chart">
      <!-- 이 캔버스 요소를 활용해서 Chart 인스턴스 생성됨 -->
      <canvas id="chart-line" class="chart-canvas" height="300"></canvas>
    </div>
  </div>
</template>

<!-- 컴포넌트 혹은 로직 호출하고 선언하는 스크립트 단 -->
<script>
/* 컴포넌트 호출 */
import Chart from "chart.js/auto";

/* 상위 컴포넌트 선언 */
export default {
  /* 고유 name */
  name: "GradientLineChart",

  /* 마운트 되었을 때 */
  mounted() {
    /* canvas 선택하고 getContext("2d") 실행하여 캔버스 객체 반환 */
    var ctx2 = document.getElementById("chart-line").getContext("2d");

    /* 그라데이션 생성 및 색상 중단점 정의 */
    var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(203,12,159,0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(203,12,159,0)"); //purple colors

    /* 그라데이션 생성 및 색상 중단점 정의 */
    var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, "rgba(20,23,39,0.2)");
    gradientStroke2.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke2.addColorStop(0, "rgba(20,23,39,0)"); //purple colors

    /* 차트 인스턴스 만들기, ctx2 캔버스 객체 활용함 */
    new Chart(ctx2, {
      /* 차트 타입 */
      type: "line",
      /* 차트 데이터 */
      data: {
        /* 차트 라벨 */
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        /* 차트 데이터셋: 한 차트 안 여러 곡선이기 때문에 배열 안 객체로 정의 */
        datasets: [
          {
            label: "Mobile apps",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#cb0c9f",
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6,
          },
          {
            label: "Websites",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#3A416F",
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            maxBarThickness: 6,
          },
        ],
      },
      /* 차트 옵션 */
      options: {
        /* 반응형 */
        responsive: true,
        /* 캔버스 비율 유지 */
        maintainAspectRatio: false,
        /* 플러그인 */
        plugins: {
          /* legend 플러그인 명시하고 표시는 안함 */
          legend: {
            display: false,
          },
        },
        /* 상호작용 */
        interaction: {
          /* 교차 안함 */
          intersect: false,
          /* 인덱스 */
          mode: "index",
        },
        /* 축 옵션 */
        scales: {
          /* y축 */
          y: {
            /* grid 이하 선 및 눈금 옵션 */
            grid: {
              /* 테두리 그리기 안함 */
              drawBorder: false,
              /* 표시하고 */
              display: true,
              /* 차트 영역 그리고 */
              drawOnChartArea: true,
              /* 눈금은 없음 */
              drawTicks: false,
              /* 테두리 dash 설정 */
              borderDash: [5, 5],
            },
            /* 눈금 */
            ticks: {
              /* 표시하고 */
              display: true,
              /* 패딩 10 */
              padding: 10,
              /* 색상 넣고 */
              color: "#b2b9bf",
              /* 폰트 지정 */
              font: {
                /* 사이즈 */
                size: 11,
                /* 글꼴 */
                family: "Open Sans",
                /* 스타일 */
                style: "normal",
                /* 줄 간격 */
                lineHeight: 2,
              },
            },
          },
          /* x축 */
          x: {
            /* grid 이하 선 및 눈금 옵션 */
            grid: {
              /* 테두리 안 그림 */
              drawBorder: false,
              /* 표시 안함 */
              display: false,
              /* 차트 영역 그리기 안함 */
              drawOnChartArea: false,
              /* 눈금 안 그리고 */
              drawTicks: false,
              /* 테두리 dash */
              borderDash: [5, 5],
            },
            /* 눈금 */
            ticks: {
              /* 표시하고 */
              display: true,
              /* 색상 지정 */
              color: "#b2b9bf",
              /* 패딩 */
              padding: 20,
              /* 폰트 */
              font: {
                /* 사이즈 */
                size: 11,
                /* 글꼴 */
                family: "Open Sans",
                /* 스타일 넣고 */
                style: "normal",
                /* 줄 간격 */
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  },
};
</script>
