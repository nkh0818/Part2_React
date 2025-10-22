import React from 'react'

export default function FruitList({items}) {
  return (
    <div>
        <h3>과일명 : {items.name} </h3>
        {/* <p>과일 가격 : {items.price} </p> */}
        {/* 선택해서보여줄때 (조건부 렌더링)
        값이 있으면 보여주고 없으면 안보여줌 */}
        {items.price && <p>가격: {items.price}</p> }
    </div>
  )
}

// import React from 'react'

// export default function FruitList({items}) {
//   return (
//     <div>
//         <h3> {items} </h3>
//         <p>사과 {items[0]}</p>
//         <p>바나나 {items[1]}</p>
//         <p>수박 {items[2]}</p>
//     </div>
//   )
// }
