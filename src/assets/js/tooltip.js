/* bootstrap 호출 */
import bootstrap from "bootstrap/dist/js/bootstrap";

/* 툴팁 초기화 메서드 */
// initialization of Tooltips
export default function setTooltip() {
  /* [].slice.call(): 선택한 요소 목록을 배열로 변환하고 반환함 */
  var tooltipTriggerList = [].slice.call(
    /* 문서에서 해당 조건 맞는 모든 요소 검색 */
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  /* 조건 맞는 배열을 순회하고 bootstrap.Tooltip 호출한 뒤 요소를 인수로 대입 */
  // eslint-disable-next-line no-unused-vars
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}
