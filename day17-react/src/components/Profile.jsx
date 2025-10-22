import React from 'react'

export default function Profile({name,dept,year}) {
  return (
    <div>
        <h3>개발자 이름 : {name} </h3>
        <p>부서 : {dept} </p>
        <p>입사 : {year} </p>
    </div>
  )
}
