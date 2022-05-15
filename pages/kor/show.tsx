import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import Title from "../../components/Title";
import Header from "../../components/Header";
import Image from "next/image";
import Bubble from "../../utils/styles/Bubble";
import classNames from "classnames";

function Show() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lee Ji Woong - Projects</title>
        <meta name="description" content="display projects" />
        <link rel="icon" href="/codingOnTheBed.png" />
      </Head>
      <Header />
        <div className={styles.department_aboutme} id="aboutme">
          <div className={styles.title}>
            <Title title="About Me"/>
          </div>
          <Bubble>
            <div className={styles.profile__container}>
              <div className={styles.profile_image}>
                <Image 
                  src="/profileImage.jpeg"
                  alt="profileImage"
                  width={200}
                  height={270}
                />
              </div>
              <div>
                <div className={styles.profile_contacts}>
                  <div style={{fontWeight:800}}>Name</div>
                  <div>이지웅</div>
                  <div style={{fontWeight:800}}>Email</div>
                  <div>eziong1001@gmail.com</div>
                  <div style={{fontWeight:800}}>Blog</div>
                  <div>https://eziong.tistory.com/</div>
                  <div style={{fontWeight:800}}>GitHub</div>
                  <div>https://github.com/eziong/</div>
                </div>
                <ul className={styles.profile_phrase}>
                  <li className={styles.profile_phrase_item}>
                    안녕하세요! <span style={{color:'brown'}}>트렌디한 개발자</span> 이지웅입니다.
                  </li>
                  <li className={styles.profile_phrase_item}>
                    최신 기술 스택에 관심이 많습니다.
                  </li>
                  <li className={styles.profile_phrase_item}>
                    코드를 원칙에 따라 작성합니다.
                  </li>
                  <li className={styles.profile_phrase_item}>
                    문제를 해결되지 않은 상태로 두지 않습니다.
                  </li>
                </ul>
              </div>
            </div>
          </Bubble>
        </div>
        <div className={styles.department_projects} id="projects">
          <div className={styles.title}>
            <Title title="Projects" color="white"/>
          </div>
          <div className={styles.projects__container}>
            <Bubble>
              <div className={styles.card__container}>
                <div className={styles.card_image}>
                  <Image 
                    src="/randomdraw.webp"
                    alt="randomdraw"
                    width={250}
                    height={250}
                    objectFit="cover"
                    style={{borderRadius:5}}
                  />
                </div>
                <div className={styles.card_description}>
                  <h1>랜덤뽑기 앱</h1>
                  <p className={styles.summary}>
                    리액트 네이티브를 공부하고 어플리케이션의 코딩부터 출시까지 경험해보고자 만들었습니다.
                  </p>
                  <div>
                    <h3 className={styles.title_small}>주요 기능</h3>
                    <span>지정된 범위의 숫자 또는 그룹 내 원소를 랜덤으로 뽑는 어플리케이션</span>
                  </div>
                  <div>
                    <h3 className={styles.title_small}>Frontend</h3>
                    <span>React Native</span>
                  </div>
                  <div>
                    <h3 className={styles.title_small}>Notion</h3>
                    <span className={styles.link}><a href="https://coral-ghost-ec2.notion.site/38fd82736d154d0b912e58971fc438c9" target="_blank" rel="noopener noreferrer">Project datail</a></span>
                  </div>
                  <div>
                    <h3 className={styles.title_small}>GitHub</h3>
                    <span className={styles.link}><a href="https://github.com/eziong/RandomDrawApp" target="_blank" rel="noopener noreferrer">https://github.com/eziong/RandomDrawApp</a></span>
                  </div>
                  
                </div>
              </div>
            </Bubble>
          </div>  
        </div>
        <div className={styles.department_skills} id="skills">
          <div className={styles.title}>
            <Title title="Skills"/>
          </div>
            <div className={styles.skills__container}>
              <Bubble className={classNames({
                [styles.skills_card_1]:true,
                [styles.hover_move_up]:true,
              })}>
                <div className={styles.skill_title}>
                  Frontend
                </div>
                <Image
                  src="/front.png"
                  alt="front"
                  width={250}
                  height={400}
                />
              </Bubble>
              <Bubble className={classNames({
                [styles.skills_card_2]:true,
                [styles.hover_move_up]:true,
              })}>
                <div className={styles.skill_title}>
                  Backend
                </div>
                <Image
                  src="/back.png"
                  alt="back"
                  width={230}
                  height={400}
                />
              </Bubble>
              <Bubble className={classNames({
                [styles.skills_card_3]:true,
                [styles.hover_move_up]:true,
              })}>
                <div className={styles.skill_title}>
                  Database
                </div>
                <Image
                  src="/database.png"
                  alt="database"
                  width={230}
                  height={300}
                />
              </Bubble>
              <Bubble className={classNames({
                [styles.skills_card_4]:true,
                [styles.hover_move_up]:true,
              })}>
                <div className={styles.skill_title}>
                  Mobile
                </div>
                <Image
                  src="/mobile.png"
                  alt="mobile"
                  width={230}
                  height={80}
                  />
              </Bubble>
              <Bubble className={classNames({
                [styles.skills_card_5]:true,
                [styles.hover_move_up]:true,
              })}>
                <div className={styles.skill_title}>
                  Deployment
                </div>
                <Image
                  src="/deployment.png"
                  alt="deployment"
                  width={230}
                  height={120}
                />
              </Bubble>
            </div>
        </div>
        <div className={styles.department_experiences} id="experiences">
          <div className={styles.title}>
            <Title title="Experiences" color="white"/>
          </div>
          <Bubble>
            <div className={styles.experiences__container}>
              <div className={styles.experience_left}>
                <h1 style={{margin:"48px 0px 0px 24px"}}>
                  Aigenn
                </h1>
              </div>
              <div className={styles.experience_right}>
                <div className={styles.summary}>
                  <div style={{marginBottom:8}}>
                    <span style={{fontSize:22,fontWeight:600}}>
                      (주) 아이젠
                    </span>
                  </div>
                  <div style={{color:'grey', paddingTop:4}}>
                    2021.03 ~ 2021.12
                  </div>
                  <div style={{paddingTop:4}}>
                    아이젠의 주력 사업은 마이짐 플랫폼입니다.
                    마이짐 플랫폼은 개인 또는 기업의 창고 대여 중개 서비스를 제공합니다.
                    <br /><br/>
                    리액트 웹 페이지와 리액트 네이티브 모바일 앱이 서비스 중이고,
                    웹 페이지와 모바일 앱의 유지 보수를 담당했습니다.
                    <br /><br />
                    <a href="https://myzzym.com/" target="_blank" rel="noopener noreferrer" style={{color:'grey'}}>마이짐 홈페이지</a>
                    <br />
                    <a href="https://play.google.com/store/apps/details?id=com.myzzymcp&hl=ko&gl=US" target="_blank" rel="noopener noreferrer" style={{color:'grey'}}>마이짐 플레이스토어</a>
                    <br />
                    <a href="https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EC%A7%90/id1546815903" target="_blank" rel="noopener noreferrer" style={{color:'grey'}}>마이짐 앱스토어</a>
                  </div>
                </div>
                <div className={styles.detail}>
                  <p style={{fontWeight:700}}>[마이짐] 웹, 모바일 채팅서비스 개발</p>
                  <ul style={{paddingLeft: 20}}>
                    <li>
                      React, React Native에서 채팅 서비스 구현
                    </li>
                    <li>
                      Node.js(Express) 소켓 서버와 MongoDB로 백엔드 구현
                    </li>
                    <li>
                      문자 전송, 이미지 파일 전송 및 다운로드 구현
                    </li>
                  </ul>
                  <p style={{fontWeight:700}}>[마이짐] 퍼포먼스 최적화 진행</p>
                  <ul style={{paddingLeft: 20}}>
                    <li>
                      모바일 앱 스크롤 최적화
                    </li>
                    <li>
                      이미지 캐싱
                    </li>
                    <li>
                      불필요하거나 중복되는 코드 삭제
                    </li>
                  </ul>
                  <p style={{fontWeight:700}}>[마이짐] 기타 유지보수</p>
                  <ul style={{paddingLeft: 20}}>
                    <li>
                      푸시 알림 서비스 스케쥴러 구현
                    </li>
                    <li>
                      전반적인 코드 리팩토링
                    </li>
                  </ul>
                  <p style={{fontWeight:700}}>[국가지원사업] 도시재생 프로젝트 대시보드 프론트 개발</p>
                  <ul style={{paddingLeft: 20}}>
                    <li>
                      React로 웹 대시보드 구현
                    </li>
                    <li>
                      ElasticSearch 데이터 쿼리
                    </li>
                    <li>
                      국토부 장관상 수상
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Bubble>
        </div>
        <div className={styles.department_education} id="education">
          <div className={styles.title}>
            <Title title="Education"/>
          </div>
          <Bubble>
            <div className={styles.education__container}>
              <div className={styles.education_left}>
                <Image 
                  src="/education1.jpeg"
                  alt="education1"
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.education_right}>
                <div>
                  <div style={{marginBottom: 12}}>컴퓨터공학부 소프트웨어전공</div>
                  <div style={{color:'grey'}}>2015.03 ~ 2022.02</div>
                </div>
              </div>
            </div>
          </Bubble>
        </div>
    </div>
    
  );
}

export default Show;