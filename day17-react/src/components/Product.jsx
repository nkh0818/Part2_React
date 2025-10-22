import React from 'react'


//부모가 자식에게 전달하는구나
//프롭스를 쓰면 짧게 변경위해 
//매개변수 자리에 중괄호를 달아 {} 가독성을 높이고 변수명만 쓸수있게 해준다
export default function Product(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.price}원</p>
        <p>{props.decf}</p>
        {/* <p>{props.isHot && <p>🔥</p>}</p> */}
        {/* p태그 안에 p태그 금지 */}

    </div>
  )
}
