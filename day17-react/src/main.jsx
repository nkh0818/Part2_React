import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//콘솔에서 log.alert햇을때 두번씩 실행되는이유가 
// 리엑트가 개발자 실수를 미리 잡기위해 검사용기능
// StrictMode! --- 개발자 실수방지용 1회실행추가
//npm run dev -- 개발자모드 1회실행