import React from 'react'
export const useBusy = ( options = {warning: false}) => {
  const [busyList, setBusyItem] = React.useState([])


  const busy = (item) => {
    return busyList.indexOf(item) > -1
  }

  const isBusy = (item, timer) => {
    if (typeof item !== 'string' && options.warning)
      console.warn(`You can only be busy with Strings!`)
    if (busyList.indexOf(item) === -1) {
      setBusyItem([...busyList, item])
      if (timer) {
        setTimeout(() => notBusy(item), timer)
      }
    } else {
      if (options.warning) console.warn(`Already busy with ${item}`)
    }
  }

  const notBusy = (item) => {
    setBusyItem(busyList.filter((b) => b != item))
    if (options.warning) console.warn(`You are not busy with ${item}`)
  }

  return [ busy, isBusy, notBusy, busyList ]
}
