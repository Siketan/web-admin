import React from 'react'
import MainCard from "@/components/MainCard"
function IconCrud({icon, children}) {
  return (
    <MainCard noPadding radius="0" gap="0" center style={{border:"solid 1px black"}} className="cursor-pointer">{icon}<span className="text-xs font-medium" style={{marginTop:-5}}>{children}</span></MainCard>
  )
}

export default IconCrud