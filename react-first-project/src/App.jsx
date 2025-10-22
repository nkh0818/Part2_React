// css 파일을 포함해야된다.
// 현재 내 파일을 기준으로 App.css파일을 포함하겠다.

import "./App.css";
import React from 'react'

export default function App() {
  return (
    <div>
      <div id="main_page">
      <div id="main_img_cl"> <img src="data:image/jpeg;base64,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" alt="" />
      </div>
      <p className="border_txt">Hello  <br />im <span className="txt_color">dream coder</span> NK</p>
      <p>a soft..asdasdasdasdsaddsadsa</p>
      <button> contact Me</button>
      </div>

    

    </div>
  )
}


// function App() {
  
//   return (
//     <>
//     {/* div태그를 이용해서 팝업창 
//       html 에서 css 셀렉터  class="클래스명"
//       리액트는 css 셀럭터  className="클래스명"
//     */}
//     <div className="box">
//       팝업창
//     </div>

//     {/* div 클래스 이름 box2 
//     width : 500px 높이: 500px 배경색 원하는걸로
//     그 안에 두번째 박스 content를 저장하시고
//     가운데 정렬(텍스트) */}

//     <div className="box2">
//       팝업창2
//     </div>
//     </>
//   )
// }

// export default App

/*
  <h3>처음 만나는 리액트 프로젝트 구성</h3>
      <ul>
        <li>node_modules - 리액트에서 제공하는 라이브러리들의 모음</li>
        <li>위에 node_modules는 반드시 생성되야된다.</li>
        <li>핵심 폴더 - src </li>
        <li> 안에 app.jsx 메인화면이다! (화면 구조 담당)</li>
        <li> assets 폴더는 이미지,css,폰트등  </li>
        <li>index.css - 전체 스타일 초기화용! </li>
        <li>main.jsx - 프로젝트 시작점 </li>
      </ul>

      <ol>
        <li>리액트 실행시 순서</li>
        <li>cd my-react-app 안으로 이동 해야된다. 
            이름이 길면 tab키를 누른다.</li>
        <li>경로 변경된걸 확인 </li>
        <li> 실행하는 명령어 - npm run dev</li>
        
      </ol>

      <div>
        <h3>Hello world</h3>
      </div>

*/