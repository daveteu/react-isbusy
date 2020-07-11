import React, { useEffect } from 'react'

import { useBusy } from 'react-usebusy'
import 'react-usebusy/dist/index.css'

const App = () => {

  const [ busy, isBusy, notBusy, busyList ] = useBusy({warning: true});
 

  return (
    <div>
      <button style={block} onClick={() => isBusy('I am busy')}>
        I am Busy
      </button>

      <button style={block} onClick={() => notBusy('I am busy')}>
        I am not busy
      </button>

      <button
        style={block}
        onClick={() => isBusy('I am busy for 5 seconds', 5000)}
      >
        I am busy for 5 seconds
      </button>
      <p>I am busy? {busy('I am busy').toString()}</p>
      <p>
        I am busy for 5 seconds? {busy('I am busy for 5 seconds').toString()}
      </p>
      <p>
        <b>Busy Items</b>
      </p>
      <p>{ JSON.stringify(busyList,null,2) }</p>
    </div>
  )
}

const block = {
  display: 'block'
}
export default App
