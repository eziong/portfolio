import { useEffect, useRef, useState } from "react";

function Title({
  title,
  color,
}:{
  title: string,
  color?: string,
}) {
  const [bottomPosition, setBottomPosition] = useState<number>(0);
  const [showed, setShowed] = useState<boolean>(false);
  const ref = useRef<HTMLHeadingElement>(null);

  const onChangePosition = () => {
    setBottomPosition(window.scrollY + window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', onChangePosition);
    setBottomPosition(window.scrollY + window.innerHeight);
    return () => {
      window.removeEventListener('scroll', onChangePosition);
    }
  },[])

  useEffect(() => {
    if(showed) return;
    if(!ref.current) return;
    if(ref.current.offsetTop < bottomPosition && 
      ref.current.offsetTop + ref.current.offsetHeight > bottomPosition - window.innerHeight){
      ref.current.style.animation = "opacityShow 2s 1"
      ref.current.style.opacity = "1";
      setShowed(true);
    }
  },[bottomPosition])
  
  return (
    <h1 ref={ref} style={{color: color ? color : "black", margin:0, padding:"32px 0px 48px 0px", fontSize:48}}>
      {title}
    </h1>
  );
}

export default Title;