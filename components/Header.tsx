import { useEffect, useRef, useState } from "react";
import styles from "../styles/Projects.module.css";

// material UI
import GitIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/LanguageSharp";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [menuOn, setMenuOn] = useState<boolean>(false);
  const ref = useRef<HTMLHeadingElement>(null);

  const onScroll = () => {
    setScrollTop(window.scrollY);
  }

  const onChangeWidth = () => {
    setInnerWidth(window.innerWidth);
    if(window.innerWidth > 768) setMenuOn(false);
  }

  const onClickMenu = () => {
    setMenuOn(prev => !prev);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onChangeWidth);
    setInnerWidth(window.innerWidth);
    setScrollTop(window.scrollY);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize',onChangeWidth);
    }
  },[])

  useEffect(() => {
    if(!ref.current) return;
    if(scrollTop > 48){
      ref.current.style.boxShadow = "rgba(204, 204, 204, 0.8) 0px 1px 4.8px 0px";
    }else{
      ref.current.style.boxShadow = "";
    }
  },[scrollTop])

  const moveToSection = (id:string) => {
    const scrollPosition = document.getElementById(id)?.getBoundingClientRect().top;
    if(scrollPosition) {
      window.scrollTo(0, scrollPosition + window.pageYOffset - 72);
    }
  }

  return (
    <div className={styles.header} ref={ref}>
      <div className={styles.header_content}>
        <div style={{display: 'flex', width:"100%", justifyContent: 'space-between'}}>
          <span className={styles.header_title}>
            Lee Ji Woong
          </span>
          {
            innerWidth > 768
            ? (
                <ul className={styles.header__navigation__container}>
                  <li className={styles.header__navigation__item} onClick={()=>moveToSection('aboutme')}>
                    About Me
                  </li>
                  <li className={styles.header__navigation__item} onClick={()=>moveToSection('projects')}>
                    Projects
                  </li>
                  <li className={styles.header__navigation__item} onClick={()=>moveToSection('skills')}>
                    Skills
                  </li>
                  <li className={styles.header__navigation__item} onClick={()=>moveToSection('experiences')}>
                    Experiences
                  </li>
                  <li className={styles.header__navigation__item} onClick={()=>moveToSection('education')}>
                    Education
                  </li>
                  <li className={styles.header__social__item}>
                    <a href="https://github.com/eziong" target="_blank" rel="noopener noreferrer">
                      <GitIcon />
                    </a>
                  </li>
                  <li className={styles.header__social__item}>
                    <a href="https://eziong.tistory.com/" target="_blank" rel="noopener noreferrer">
                    <WebIcon/>
                    </a>
                  </li>
                </ul>
            )
            :(
              <div onClick={onClickMenu}>
                <MenuIcon style={{fontSize: 28}}/>
              </div>
            )
          }
        </div>
        {menuOn && (
          <div className={styles.header__menu__list__container}>
            <ul className={styles.header__navigation__container}>
              <li className={styles.header__navigation__item} onClick={()=>moveToSection('aboutme')}>
                About Me
              </li>
              <li className={styles.header__navigation__item} onClick={()=>moveToSection('projects')}>
                Projects
              </li>
              <li className={styles.header__navigation__item} onClick={()=>moveToSection('skills')}>
                Skills
              </li>
              <li className={styles.header__navigation__item} onClick={()=>moveToSection('experiences')}>
                Experiences
              </li>
              <li className={styles.header__navigation__item} onClick={()=>moveToSection('education')}>
                Education
              </li>
              <li className={styles.header__social__item}>
                <a href="https://github.com/eziong" target="_blank" rel="noopener noreferrer">
                  <GitIcon />
                </a>
              </li>
              <li className={styles.header__social__item}>
                <a href="https://eziong.tistory.com/" target="_blank" rel="noopener noreferrer">
                <WebIcon/>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;