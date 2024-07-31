import React from 'react'
import { leftBarStyle } from '../styles/Styles'
import useScreenWidth from '../Hooks/useScreenWidth'
export default function LeftBar() {
  const [screenWidth] = useScreenWidth()
  return (
    <div style={leftBarStyle}>LeftBar</div>
  )
}
