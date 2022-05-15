import { useEffect, useRef, useState } from "react";

function Bubble({
  children,
  className,
}:{
  children: React.ReactNode,
  className?: any
}) {
  const [bottomPosition, setBottomPosition] = useState<number>(0);
  const [showed, setShowed] = useState<boolean>(false);
  const ref = useRef<HTMLHeadingElement>(null);

  const onChangePosition = () => {
    setBottomPosition(window.pageYOffset + window.innerHeight);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', onChangePosition);
    setBottomPosition(window.pageYOffset + window.innerHeight);
    return () => {
      window.removeEventListener('scroll', onChangePosition);
    }
  },[])

  useEffect(() => {
    if(showed || bottomPosition === 0) return;
    if(!ref.current) return;
    if(ref.current.offsetTop < bottomPosition ){
      ref.current.style.animation = "bubbleShow 1.5s 1"
      ref.current.style.opacity = "1";
      setShowed(true);
    }
  },[bottomPosition])
  return (
    <div ref={ref} style={{opacity:0}} className={className}>
      {children}
    </div>
  );
}

export default Bubble;