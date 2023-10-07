** 진행사항 **
23/10/7
템플릿 설치:
VUE 3을 충족하는 템플릿으로 찾아봄, Vuex도 학습 가능해보임
scss 이슈:
scss 파일은 마치 함수와 반환 값 형식으로 CSS를 관리하고 있는 것으로 파악했지만, 에러 뜨는 상황이 잦았음: 템플릿 실행을 위해서 sass를 다운그레이드
before) "sass": "^1.54.4"
after) "sass": "~1.32.12"
출처) https://tempodivalse.tistory.com/43