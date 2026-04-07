import React from "react"

function Clock(props) {
  return(
    <div>
        <h1>
            {props.timeZone} &nbsp; {/* 나라/지역명 */}
            현재시간: { new Date().toLocaleTimeString('ko', { timeZone: props.timeZone }) }
        </h1>
    </div>
  )
}

export default Clock;