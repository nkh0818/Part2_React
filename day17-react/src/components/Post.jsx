import React from 'react'

export default function Post({title,uesrId,id,body}) {
  return (
    <div>
        <h3>{title} </h3>
        <ul>
            <li>{uesrId}  </li>
            <li>{id}  </li>
            <li>{body}  </li>
        </ul>
    </div>
  )
}
