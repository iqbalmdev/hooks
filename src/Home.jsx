import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate()


  function navigateTo(path){
    navigate(path)
  }
  return (
    <>
    <div onClick={()=>navigateTo('/')}>Home</div>

    <button onClick={()=>navigateTo('/useCallback')}>Use Callback</button>
    <button onClick={()=>navigateTo('/useMemo')}>Use Memo</button>
    <button onClick={()=>navigateTo('/useRef')}>Use Ref</button>
    </>
  )
}

export default Home