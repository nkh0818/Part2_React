
import './App.css'
import Card1 from './components/card1'
import Person from './components/Person'
import Post from './components/Post'
import Product from './components/Product'
import Profile from './components/Profile'
//컴포넌트 -- 내가 새로 만든 HTML 태그

// 숫자나 계산값이나 보낼때 T/F 보낼떈  중괄호를 {} 이용
function App() {

  return (
    <>
    <h3>Props</h3>      
    <h4>매개변수(Parameter)- 부모에서 자식으로 값을 전달하는 
      함수끼리사용하는 (괄호안에 들어가는 변수들)
    </h4>

    <Product title="asd" />
    <hr />
    <Product title="카페라떼" price={3000}/>
    <hr />
    <Product title="커피" price={1000} isHot={true} decf={false} />
    {/* <h4>이름과나이를 컴포넌트로 넘기기 ..Props </h4>
    <p>숫자나 계산값이나 보낼때 T/F 보낼떈  중괄호를 {} 이용</p>
    <p>리액트는 정보를 담는 변수 타입 2개</p>
     <ul>
      <li>"" 따옴표 == string 문자</li>
      <li>{} 중괄호 == 계산되거나 바뀌는 값을 담는 타입</li>
      <li>중괄호 타입 - number,변수,함수등등..</li>
     </ul> */}

     {/* 성별을 추가하기 true 이면 여성 false 이면 여성 */}
    {/* <Person name="김이박" age={20} gender={true}  />
    <Person name="김이박" age={20}  /> */}








    {/* <h2>Props ?</h2>
    <p>리엑트에서 컴포넌트는 작은함수</p>
    <p>그런데 어떤컴포넌트는 다른컴포넌트에게 정보전달해야할때가 있음
      그때 사용하는게 Props 
    </p>
    <p>App부모_ Card_자식에게 정보보내기 </p>
 */}
    <hr /><br />

    {/* <Post title="출석" uesrId="1" id="Asd" body="Asdas" /> */}

    <hr /><br />

    {/* 개발자 3명의 정보를 Profile 태그를이용해 정보출력 */}
    {/* <Profile name="NK" dept="풀스택" year="0" />
    <Profile name="Alpha" dept="si" year="7" />
    <Profile name="Bravo" dept="BackEnd" year="10" />     */}

    <hr /> <br />
    {/* 똑같은 태그를 기준으로 컴포넌트한테 제목을 각각보내주기
      <Card1 />
      <Card2 />
      <Card3 />
       */}
{/* 
      <Card1 title="계란빵" />
      <Card1 title="아이템" />
      <Card1 title="국거리" /> */}
      <hr /><br />
    </>
  )
}

export default App
