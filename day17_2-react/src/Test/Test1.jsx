import React from 'react'

export default function Test1(items) {
  return (

    <div>
        <h3>물건 {items.name}</h3>
        {/* <p>가격 {itmes.price}</p> */}
        {items.price && <p>가격 : {items.price}</p>}
        {/* <p></p> */}
        <hr /><br />

        <h3>가격있으면 원 없으면생략</h3>
        <p>이름 {items.name}</p>
        {items.price1 ? `${items.price1}원` :"" }
        <hr /><br />
        {/* {items.price2} */}
        {/* <p>{p1}</p> */}
        <p>가수 : {items.music}</p>

    </div>
  )
}
