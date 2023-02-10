<!--
[App.vue 설명]
1. App.vue 는 Vue 애플리케이션의 최상위 컴포넌트입니다

2. template :
   - 화면 상에 표시할 요소 작성 실시
   - 컴포넌트의 모든 마크업 구조와 디스플레이 로직 작성

3. script :
   - import 구문을 사용해 template에서 사용할 컴포넌트 불러온다
   - export default 구문에서 해당 App 컴포넌트가 main.js 파일에서 불러와지도록 내용 작성 실시
   - export default 구문에서 모듈의 함수, 객체, 변수 등을 다른 모듈에서 가져다 사용 할 수 있도록 내보냅니다

4. style :
   - 스타일 지정 실시

5. {{ message }} : 데이터 바인딩 시 사용

6. data : 컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)

7. methods : 메소드 정의 실시

8. router-view : 라우터에서 설정한 뷰 로드 실시
-->

<template>
  <!-- Vue 컴포넌트 객체 생성 시 초기화할 데이터 및 메시지 설정 -->
  <MyCalculator title="계산기"/>
  <HelloWorld></HelloWorld>

  <div>
    <router-view/>
  </div>
</template>

<script>
//import MyCalculator from './components/MyCalculator.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App', // main.js에 등록한 App 컴포넌트
  components: { // 동적 변환 컴포넌트 페이지 : 기본 페이지
    //MyCalculator,
    //HelloWorld
  },

  // [생명 주기 : 라이프 사이클]
  beforeCreate() {
    console.log("");
    console.log("[App] : [beforeCreate] : [start]");
    console.log("설 명 : 인스턴스 초기화 준비");
    console.log("");
  },
  created() {
    console.log("");
    console.log("[App] : [created] : [start]");
    console.log("설 명 : 인스턴스 생성 완료");
    console.log("");
  },
  beforeMount() {
    console.log("");
    console.log("[App] : [beforeMount] : [start]");
    console.log("설 명 : DOM 렌더링 준비");
    console.log("");
  },
  mounted() {
    console.log("");
    console.log("[App] : [mounted] : [start]");
    console.log("설 명 : DOM 렌더링 완료");
    console.log("");
  },
  beforeUpdate() {
    console.log("");
    console.log("[App] : [beforeUpdate] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    console.log("");
  },
  updated() {
    console.log("");
    console.log("[App] : [updated] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    console.log("");
  },
  beforeUnmount() {
    console.log("");
    console.log("[App] : [beforeUnmount] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 준비");
    console.log("");
  },
  unmounted() {
    console.log("");
    console.log("[App] : [unmounted] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 완료");
    console.log("");
  },

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    return {
      data: "APP VUE"
    }
  },

  methods: {
    logTest: function(){
      console.log("");
      console.log("[App] : [logTest] : [start]");
      console.log("");

      // [데이터 바인딩 값 변경 실시]
      this.log = "App Vue Log Change";
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
