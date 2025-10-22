
import './App.css'

import Board from './Board'
import AppTest from './AppTest'
import Test2 from './Test2'
import Testimonial from './Testimonial'

function App() {

  return (
    <>
          <h3>내가직접만든태그</h3>
        <Testimonial />

        {/* <Board />
        <AppTest />
        <Test2 /> */}
          
      <h3>리엑트 기본문법</h3>
      <p>확장자 JSX (JavaScript XML) </p>
      <p> 자바스크립트 안에서 HTMLdmf 직접 쓸수있게 해주는 문법</p>
      <p>움직이는 페이지를 만들기위해 사용하는게 자바스크립트</p>
      <p> JSX - 자바스크립트 코드로 화면을 직접 제어하기위한 문법 </p>

      <p>리엑트는 함수를 이용해서 화면을 만든다</p>
      <p>내가 직접 태그를 만들수도 있다</p>







    {/* css 셀렉터를 class 썻는데  리엑트는 className 으로 작성 */}
    <section className='AboutMe'>
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae minima officia consequuntur. 
        Doloremque reiciendis commodi quo? Maiores nesciunt quo illo vero exercitationem illum commodi,
        vel cupiditate saepe, eum corrupti?</p>
      <div className='major_parent'>
        <div className='major'>
          <h3>Front-End</h3>
          <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs</p>
        </div>
        <div className='major'>
          <h3>Mobile</h3>
          <p>Android, iOS, React Navtive, Flutter, Java, Swift, Kotlin</p>
        </div>
        <div className='major'>
          <h3>Back-end</h3>
          <p>Java, JavaScript, Go, NodeJs, Rest APIs, GraphQL</p>
        </div>
    </div>
    </section>



      <h3>메인화면을 구성하는 body와 같은 역할을한다</h3>
      <h3> 리엑트란? </h3>
      <ul>
        <li>새로고침없이 화면일부를 빠르게 바꾸는 기능</li>
        <li>웹사이트가 아니라 앱처럼 반응하도록 만들어주는 기능</li>
        <li>SPA는 Single Page Application의 약자이다.
          예전에는 페이지를 요청할때마다 서버로 접속하여 받아왔기 때문에, 페이지가 매번 새로고침 되었지만,
          SPA의 경우 서버에서 제공하는 페이지가 한 개다
        </li>
      </ul>
    </>
  )
}

export default App


/*

import './App.css'

function App() {

  return (
    <>
    css 셀렉터를 class 썻는데  리엑트는 className 으로 작성 
    <section className='AboutMe'>
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae minima officia consequuntur. 
        Doloremque reiciendis commodi quo? Maiores nesciunt quo illo vero exercitationem illum commodi,
        vel cupiditate saepe, eum corrupti?</p>
      <div className='major_parent'>
        <div className='major'>
          <h3>Front-End</h3>
          <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs</p>
        </div>
        <div className='major'>
          <h3>Mobile</h3>
          <p>Android, iOS, React Navtive, Flutter, Java, Swift, Kotlin</p>
        </div>
        <div className='major'>
          <h3>Back-end</h3>
          <p>Java, JavaScript, Go, NodeJs, Rest APIs, GraphQL</p>
        </div>
    </div>
    </section>



      <h3>메인화면을 구성하는 body와 같은 역할을한다</h3>
      <h3> 리엑트란? </h3>
      <ul>
        <li>새로고침없이 화면일부를 빠르게 바꾸는 기능</li>
        <li>웹사이트가 아니라 앱처럼 반응하도록 만들어주는 기능</li>
        <li>SPA는 Single Page Application의 약자이다.
          예전에는 페이지를 요청할때마다 서버로 접속하여 받아왔기 때문에, 페이지가 매번 새로고침 되었지만,
          SPA의 경우 서버에서 제공하는 페이지가 한 개다
        </li>
      </ul>
    </>
  )
}

export default App

*/