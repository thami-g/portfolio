import React from 'react'

function Skill({Icon, level}) {
  return (
    <div className='skill'>
      <Icon cl />
      <span>{level}</span>
    </div>
  )
}

export default Skill
