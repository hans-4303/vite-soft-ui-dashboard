/* 컴포넌트에 대입될 setter 함수 */

/* eslint-disable */

export default function setNavPills() {
  /* 클래스 전부 선택 */
  var total = document.querySelectorAll(".nav-pills");

  /* initNavs() => void; */
  function initNavs() {
    /* total 배열을 forEach 순회, 이전 문법 */
    total.forEach(function (item, i) {
      /* 요소 생성 */
      var moving_div = document.createElement("div");
      /* item에서 요소 반환 */
      var first_li = item.querySelector("li:first-child .nav-link");
      /* 반환된 요소를 복제 */
      var tab = first_li.cloneNode();
      /* 복제된 요소의 innerHTML에 - 대입 */
      tab.innerHTML = "-";

      /* 생성된 요소에 class == css 추가 */
      moving_div.classList.add("moving-tab", "position-absolute", "nav-link");
      /* 생성된 요소에 child 덧붙이기 */
      moving_div.appendChild(tab);
      /* 순회 중 요소에 생성된 요소 덧붙이기 */
      item.appendChild(moving_div);

      /* li들의 길이 반환 */
      var list_length = item.getElementsByTagName("li").length;

      /* 생성된 요소 스타일 정의 */
      moving_div.style.padding = "0px";
      moving_div.style.width =
        item.querySelector("li:nth-child(1)").offsetWidth + "px";
      moving_div.style.transform = "translate3d(0px, 0px, 0px)";
      moving_div.style.transition = ".5s ease";

      /* 순회 중 요소에 마우스 이벤트 */
      item.onmouseover = function (event) {
        /* 이벤트 타겟 반환 */
        let target = getEventTarget(event);
        /* 타겟 제일 가까운 li 반환 */
        let li = target.closest("li"); // get reference
        /* li가 있다면 */
        if (li) {
          /* li로 부터 가장 가까운 ul을 찾고 자식 요소를 반환, 하지만 HTMLCollection이라 일반 배열 아님
          Array.from()에 인수로 넘기고 JS 배열로 반환 */
          let nodes = Array.from(li.closest("ul").children); // get array

          /* nodes 배열에서 li 요소 인덱스를 찾음
          만약 요소가 없다면 -1 반환이지만 요소를 바로 생성했기 때문에 -1은 불가능
          li 요소 인덱스를 찾은 뒤 + 1을 더 하여 1부터 시작하도록 변환 */
          let index = nodes.indexOf(li) + 1;
          /* 순회 중 요소에서 querySelector 호출, index 번째 요소 지정하고 onclick 이벤트 걸기 */
          item.querySelector("li:nth-child(" + index + ") .nav-link").onclick =
            function () {
              /* 생성된 요소를 순회 item 중 다른 요소로 초기화 */
              moving_div = item.querySelector(".moving-tab");
              /* sum = 0; 변수 생성 */
              let sum = 0;
              /* 순회 item의 class가 flex-column을 포함한다면 */
              if (item.classList.contains("flex-column")) {
                /* nodes 배열에서 li 요소 인덱스 지정하고 초기 값 1부터 for문 반복 */
                for (var j = 1; j <= nodes.indexOf(li); j++) {
                  /* li의 j번째 요소 접근하여 offsetHeight sum 복합 연산 */
                  sum += item.querySelector(
                    "li:nth-child(" + j + ")"
                  ).offsetHeight;
                }
                /* 생성된 요소의 스타일과 트랜스폼 대입 */
                moving_div.style.transform =
                  "translate3d(0px," + sum + "px, 0px)";
                /* 생성된 요소의 길이에 순회 중 item의 j번째 요소 offsetHeight 대입 */
                moving_div.style.height = item.querySelector(
                  "li:nth-child(" + j + ")"
                ).offsetHeight;
                /* !(item.classList.contains('flex-column')) */
              } else {
                /* nodes 배열에서 li 요소 인덱스 지정하고 초기 값 1부터 for문 반복 */
                for (var j = 1; j <= nodes.indexOf(li); j++) {
                  /* li의 j번째 요소 접근하여 offsetWidth sum 복합 연산 */
                  sum += item.querySelector(
                    "li:nth-child(" + j + ")"
                  ).offsetWidth;
                }
                /* 생성된 요소 transform에 translate 대입 */
                moving_div.style.transform =
                  "translate3d(" + sum + "px, 0px, 0px)";
                /* 생성된 요소 width에 순회 중 item의 인덱스 번째 자식 찾아 offsetWidth 대입 */
                moving_div.style.width =
                  item.querySelector("li:nth-child(" + index + ")")
                    .offsetWidth + "px";
              }
            };
        }
      };
    });
  }

  /* 0.1초마다 initNav() 함수 콜백 */
  setTimeout(function () {
    initNavs();
  }, 100);

  /* 탭 네비게이션 사이즈가 재조정된다면 */

  // Tabs navigation resize

  /* window 객체 다루고 resize 이벤트 지정, 익명 함수 */
  window.addEventListener("resize", function (event) {
    /* total HTMLCollection을 순회 */
    total.forEach(function (item, i) {
      /* 순회하는 item 중 특정 요소 제거 */
      item.querySelector(".moving-tab").remove();
      /* 요소 생성 */
      var moving_div = document.createElement("div");
      /* 순회하는 item 중 특정 요소 확보 및 클론 */
      var tab = item.querySelector(".nav-link.active").cloneNode();
      /* tab 요소의 내부에 - 대입 */
      tab.innerHTML = "-";

      /* 생성된 요소 클래스 == css 대입 */
      moving_div.classList.add("moving-tab", "position-absolute", "nav-link");
      /* 생성된 요소 child로 tab 대입 */
      moving_div.appendChild(tab);

      /* 순회 중 item child로 생성된 요소 대입 */
      item.appendChild(moving_div);

      /* 생성 요소 CSS 대입 */
      moving_div.style.padding = "0px";
      moving_div.style.transition = ".5s ease";

      /* 순회 중 item에 요소 선택 */
      let li = item.querySelector(".nav-link.active").parentElement;

      /* 요소가 있다면 */
      if (li) {
        /* li에서 가까운 요소의 children을 찾고 HTMLCollection -> Array 변환 */
        let nodes = Array.from(li.closest("ul").children); // get array
        /* 배열 중 li 요소의 인덱스 찾고 1 더해서 사용하기 */
        let index = nodes.indexOf(li) + 1;

        /* sum = 0; 선언 및 초기화 */
        let sum = 0;
        /* 순회 중 item이 flex-column 클래스 포함했다면 */
        if (item.classList.contains("flex-column")) {
          /* 배열 중 li 요소의 인덱스만큼 반복 */
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            /* 순회 중 item의 li 중 j 요소를 선택하고 offsetHeight를 sum 복합 연산 */
            sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
          }
          /* 생성된 요소에 CSS 대입 */
          moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
          moving_div.style.width =
            item.querySelector("li:nth-child(" + index + ")").offsetWidth +
            "px";
          moving_div.style.height = item.querySelector(
            "li:nth-child(" + j + ")"
          ).offsetHeight;
          /* 순회 중 item에 flex-column가 없다면 */
        } else {
          /* node 기준 li 인덱스만큼 반복 */
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            /* 순회 item의 li에 접근하여 j번째 자식을 체크하고 offsetWidth을 복합 연산 */
            sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
          }
          /* 생성 요소에 CSS 추가 */
          moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
          moving_div.style.width =
            item.querySelector("li:nth-child(" + index + ")").offsetWidth +
            "px";
        }
      }
    });

    /* window의 너비를 확인 */
    if (window.innerWidth < 991) {
      /* total 요소 순회 */
      total.forEach(function (item, i) {
        /* 만약 지정 클래스가 없다면 */
        if (!item.classList.contains("flex-column")) {
          /* 클래스 == CSS 제거 */
          item.classList.remove("flex-row");
          /* 클래스 == CSS 추가 */
          item.classList.add("flex-column", "on-resize");
          /* 순회 중 요소의 부모 노드 선택 */
          let li = item.querySelector(".nav-link.active").parentElement;
          /* li 요소의 가장 가까운 ul의 children으로 다시 접근하고 배열 반환 */
          let nodes = Array.from(li.closest("ul").children); // get array
          /* 배열 중 li 요소 인덱스 찾아 + 1 */
          let index = nodes.indexOf(li) + 1;
          /* sum = 0; 선언 및 초기화 */
          let sum = 0;
          /* node 배열의 li 요소 인덱스 자리만큼 반복 */
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            /* 순회 중 item의 li, j번째 자식 접근해서 offsetHeight 복합 연산 */
            sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
          }
          /* 요소 선언하고 클래스 요소 찾아 반환 */
          var moving_div = document.querySelector(".moving-tab");
          /* 요소에 CSS 작성 */
          moving_div.style.width =
            item.querySelector("li:nth-child(1)").offsetWidth + "px";
          moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
        }
      });
      /* 너비가 안 맞다면 */
    } else {
      /* total 순회 */
      total.forEach(function (item, i) {
        /* 순회 item에 on-resize가 있다면 */
        if (item.classList.contains("on-resize")) {
          /* 클래스 == CSS 제거 및 대입 */
          item.classList.remove("flex-column", "on-resize");
          item.classList.add("flex-row");
          /* 순회 중 아이템에서 요소 찾고 부모로 접근 */
          let li = item.querySelector(".nav-link.active").parentElement;
          /* li에서 가장 가까운 ul과 children 찾고 배열로 반환 */
          let nodes = Array.from(li.closest("ul").children); // get array
          /* 배열 중 li 요소의 인덱스 자리 찾고 + 1 대입 */
          let index = nodes.indexOf(li) + 1;
          /* sum = 0; 선언 및 초기화 */
          let sum = 0;
          /* node 요소 중 li 인덱스만큼 반복 */
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            /* 순회 item 요소 중 li의 j번째 자식 찾아서 offsetWidth 복합 연산 */
            sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
          }
          /* 요소 선언하고 반환 */
          var moving_div = document.querySelector(".moving-tab");
          /* 요소 CSS 대입 */
          moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
          moving_div.style.width =
            item.querySelector("li:nth-child(" + index + ")").offsetWidth +
            "px";
        }
      });
    }
  });

  /* 모바일 기기에서 flex row를 제거하는 경우 작동 */
  // Function to remove flex row on mobile devices
  if (window.innerWidth < 991) {
    /* total 순회 */
    total.forEach(function (item, i) {
      /* item이 flex-row 포함한다면 CSS 제거 및 추가 */
      if (item.classList.contains("flex-row")) {
        item.classList.remove("flex-row");
        item.classList.add("flex-column", "on-resize");
      }
    });
  }

  /* 마우스 클릭 이벤트 받는 함수 */
  function getEventTarget(e) {
    /* 해당 위치 이벤트 혹은 window 이벤트 가르키기 */
    e = e || window.event;
    /* 이벤트 타겟 혹은 이벤트 소스 요소 반환 */
    return e.target || e.srcElement;
  }
}
