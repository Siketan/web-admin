
import MainCard from "../../MainCard"
function IconCrud({icon, children, onClick}) {
  return (
    <div onClick={onClick}><MainCard  noPadding radius="0" gap="0" center style={{border:"solid 1px black"}} className="cursor-pointer">{icon}<span className="text-xs font-medium" style={{marginTop:-5}}>{children}</span></MainCard></div>

  )
}

export default IconCrud