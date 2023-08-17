import React, { useState } from 'react'
import './option.css'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Expectus from './Expectus'




const Option = () => {
    
    const [state, setState] = useState('FirstCard') 

  return (
    <>
     
     <div className='text-center mt-5'>
      <h1 className='pt-5'>BEST SELLERS</h1>
      <h6 className='pt-3'>Just In Now</h6>
      <div className='purple-line'></div>
      <div className='d-flex pt-5'>
        <h5 onClick={() => setState('FirstCard')} className={state === 'FirstCard'? 'black' :'grey'}>All</h5>
        <h5 onClick={() => setState('SecondCard')} className={state === 'SecondCard'? 'black' :'grey'}>Best</h5>
        <h5 onClick={() => setState('ThirdCard')} className={state === 'ThirdCard'? 'black' :'grey'}>Sale</h5>
        <h5 onClick={() => setState('FourthCard')} className={state === 'FourthCard'? 'black' :'grey'}>New</h5>
      </div>
     </div>
      
      {state === 'FirstCard' && <Card1/>}
      {state === 'SecondCard' && <Card2/>}
      {state === 'ThirdCard' && <Card3/>}
      {state === 'FourthCard' && <Card4/>}
 
      <Expectus/>
    </>
  )
}

export default Option