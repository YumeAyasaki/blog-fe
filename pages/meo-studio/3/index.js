import React from 'react'

import style from './index.module.scss'

export default function Index() {
  return (
    <div>
        <div>Nav bar</div>
        <div>Main page</div>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
    return (
      <>
        {page}
      </>
    )
  }