
import './App.css'
import FruitList from './components/FruitList';
import Test1 from './Test/Test1';

function App() {
//배열을 props로넘기기

//  let fruitInfo ={
//     name : "🍎",
//     price: 2000
//   };
  return (
    <>
      <Test1 name=" 이름" price={2000} price1={20} music="사람임"/>


      {/* <Test1 name=" X " price1={3000}/> */}




      {/* 객체 형태 */}
      {/* <h1>as</h1> */}
      {/* <FruitList itmes={fruitInfo}/> */}

      {/* 배열 형태
        <FruitList items={fruits}/> */}
    </>
  )
}

export default App
