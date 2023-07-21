import Bubble from "../../utils/styles/Bubble";
import Head from "next/head";
import Header from "../../components/Header";
import Image from "next/image";
import Skills from "../../components/Skills";
import Title from "../../components/Title";
import styles from "../../styles/Projects.module.css";

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
          <Title title="About Me" />
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
                <div style={{ fontWeight: 800 }}>Name</div>
                <div>Lee Ji woong</div>
                <div style={{ fontWeight: 800 }}>Email</div>
                <div>eziong1001@gmail.com</div>
                <div style={{ fontWeight: 800 }}>Blog</div>
                <div>https://eziong.tistory.com/</div>
                <div style={{ fontWeight: 800 }}>GitHub</div>
                <div>https://github.com/eziong/</div>
              </div>
              <ul className={styles.profile_phrase}>
                <li className={styles.profile_phrase_item}>
                  Hello This is a
                  <span style={{ color: "brown" }}>
                    {" "}
                    Developer who does design before development.
                  </span>
                </li>
                <li className={styles.profile_phrase_item}>
                  Interested in the latest technical stacks.
                </li>
                <li className={styles.profile_phrase_item}>
                  Write code by principle.
                </li>
                <li className={styles.profile_phrase_item}>
                  Don’t leave unsolved problem uncompleted.
                </li>
              </ul>
            </div>
          </div>
        </Bubble>
      </div>
      <div className={styles.department_projects} id="projects">
        <div className={styles.title}>
          <Title title="Projects" color="white" />
        </div>
        <div className={styles.projects__container}>
          <Bubble>
            <div className={styles.card__container}>
              <div className={styles.card_image}>
                <Image
                  src="/randomdraw.webp"
                  width={250}
                  height={250}
                  alt="randomDraw"
                  objectFit="cover"
                  style={{ borderRadius: 5 }}
                />
              </div>
              <div className={styles.card_description}>
                <h1>RandomDraw Application</h1>
                <p className={styles.summary}>
                  For experiencing from coding to deployment after learning
                  React Native.
                </p>
                <div>
                  <h3 className={styles.title_small}>Purpose</h3>
                  <span className={styles.description_small}>
                    Application for drawing random number out of certain area or
                    drawing random items from group.
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>Frontend</h3>
                  <span className={styles.description_small}>React Native</span>
                </div>
                <div>
                  <h3 className={styles.title_small}>Notion</h3>
                  <span className={styles.description_small}>
                    <span className={styles.link}>
                      <a
                        href="https://coral-ghost-ec2.notion.site/38fd82736d154d0b912e58971fc438c9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Project datail
                      </a>
                    </span>
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>GitHub</h3>
                  <span className={styles.description_small}>
                    <span className={styles.link}>
                      <a
                        href="https://github.com/eziong/RandomDrawApp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/eziong/RandomDrawApp
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Bubble>
          <Bubble>
            <div className={styles.card__container}>
              <div className={styles.card_image}>
                <Image
                  src="/myzzym.jpeg"
                  width={250}
                  height={250}
                  alt="randomDraw"
                  objectFit="cover"
                  style={{ borderRadius: 5 }}
                />
              </div>
              <div className={styles.card_description}>
                <h1>Chatting service - Myzzym</h1>
                <p className={styles.summary}>
                  In storage detail page, guest can contact with host for
                  asking.
                </p>
                <div>
                  <h3 className={styles.title_small}>Purpose</h3>
                  <span className={styles.description_small}>
                    To get easy to approach to rent storage for guest.
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>Frontend</h3>
                  <span className={styles.description_small}>
                    React, React Native
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>Frontend</h3>
                  <span className={styles.description_small}>
                    Node.js[Express]
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>Notion</h3>
                  <span className={styles.description_small}>
                    <span className={styles.link}>
                      <a
                        href="https://coral-ghost-ec2.notion.site/Myzzym-eaa0b58c3e5b4aad99d7f7c7ecf01992"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Project datail
                      </a>
                    </span>
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>GitHub</h3>
                  <span className={styles.description_small}>
                    private github - myzzym
                  </span>
                </div>
              </div>
            </div>
          </Bubble>
          <Bubble>
            <div className={styles.card__container}>
              <div className={styles.card_image}>
                <Image
                  src="/craa.png"
                  width={250}
                  height={250}
                  alt="randomDraw"
                  objectFit="cover"
                  style={{ borderRadius: 5 }}
                />
              </div>
              <div className={styles.card_description}>
                <h1>CRAA - clinical research assistant test service</h1>
                <p className={styles.summary}>
                  Product for testing clinical research assistant. This company
                  provides Admin, Client, User, Training sites.
                </p>
                <div>
                  <h3 className={styles.title_small}>Purpose</h3>
                  <span className={styles.description_small}>
                    Test and training clinical research assistant.
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>Frontend</h3>
                  <span className={styles.description_small}>
                    React, Next.js
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>Backend</h3>
                  <span className={styles.description_small}>
                    Node.js[Nest.js]
                  </span>
                </div>
                <div>
                  <h3 className={styles.title_small}>GitHub</h3>
                  <span className={styles.description_small}>
                    private bitbucket - craa
                  </span>
                </div>
              </div>
            </div>
          </Bubble>
        </div>
      </div>
      <div className={styles.department_skills} id="skills">
        <div className={styles.title}>
          <Title title="Skills" />
        </div>
        <Skills />
      </div>
      <div className={styles.department_experiences} id="experiences">
        <div className={styles.title}>
          <Title title="Experiences" color="white" />
        </div>
        <Bubble>
          <div className={styles.experiences__container}>
            <div className={styles.experience_left}>
              <h1 style={{ margin: "48px 0px 0px 24px" }}>Aigenn</h1>
            </div>
            <div className={styles.experience_right}>
              <div className={styles.experience_summary}>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 22, fontWeight: 600 }}>
                    Aigenn Inc.
                  </span>
                </div>
                <div style={{ color: "grey", paddingTop: 4 }}>
                  2021.03 ~ 2021.12
                </div>
                <div style={{ paddingTop: 4 }}>
                  Myzzym platform is main business of Aigenn Inc. Myzzym
                  platform provides storage rental brokerage services for
                  individual or businesses.
                  <br />
                  <br />
                  Web service with React and Mobile app service with React
                  Native are serving. My job was adding new services and
                  refactoring the project code.
                  <br />
                  <br />
                  <a
                    href="https://myzzym.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "grey" }}
                  >
                    Myzzym Web
                  </a>
                  <br />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.myzzymcp&hl=ko&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "grey" }}
                  >
                    Myzzym PlayStore
                  </a>
                  <br />
                  <a
                    href="https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EC%A7%90/id1546815903"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "grey" }}
                  >
                    Myzzym AppStore
                  </a>
                </div>
              </div>
              <div className={styles.experience_detail}>
                <p style={{ fontWeight: 700 }}>
                  [Myzzym] Developing chatting service on web and mobile
                </p>
                <ul style={{ paddingLeft: 20 }}>
                  <li>
                    Developing chatting service on React web and React Native
                    Mobile.
                  </li>
                  <li>
                    Building Backend with Node.js(Express) socket server and
                    MongoDB.
                  </li>
                  <li>
                    Implementing sending message and image and downloading
                    image.
                  </li>
                </ul>
                <p style={{ fontWeight: 700 }}>
                  [Myzzym] Optimizing performance
                </p>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Optimization scrolling on mobile app.</li>
                  <li>Image caching.</li>
                  <li>Removing redundant or unnecessary code.</li>
                </ul>
                <p style={{ fontWeight: 700 }}>[Myzzym] Another maintenance</p>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Implementing scheduler of push service.</li>
                  <li>Overall code refactoring.</li>
                </ul>
                <p style={{ fontWeight: 700 }}>
                  [Government Project] Developing frontend of urban regenerating
                  service{" "}
                </p>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Implementing web dashboard page with react.</li>
                  <li>ElasticSearch data querying.</li>
                  <li>Win minister award.</li>
                </ul>
              </div>
            </div>
          </div>
        </Bubble>
        <Bubble>
          <div className={styles.experiences__container}>
            <div className={styles.experience_left}>
              <h1 style={{ margin: "48px 0px 0px 24px" }}>CRAA</h1>
            </div>
            <div className={styles.experience_right}>
              <div className={styles.summary}>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 22, fontWeight: 600 }}>CRAA</span>
                </div>
                <div style={{ color: "grey", paddingTop: 4 }}>
                  2022.08 ~ 2023.06
                </div>
                <div style={{ paddingTop: 4 }}>
                  CRAA provides solution for testing and training clinical
                  research assistant.
                  <br />
                  <br />
                  Admin, Client, User, Training services are currently in
                  development. developing admin service and
                  maintaining/refactoring backend system.
                  <br />
                  <br />
                  <a
                    href="https://craassessments.com/who-we-are/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "grey" }}
                  >
                    Official homepage - CRAA
                  </a>
                  <br />
                </div>
              </div>
              <div className={styles.detail}>
                <p style={{ fontWeight: 700 }}>Backend</p>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Remodeling DB structure</li>
                  <li>Structuring data</li>
                  <li>Migration - real data to current system</li>
                </ul>
                <p style={{ fontWeight: 700 }}>[Admin] essential UI</p>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Admin data table</li>
                  <li>File uploading system</li>
                  <li>else</li>
                </ul>
              </div>
            </div>
          </div>
        </Bubble>
      </div>
      <div className={styles.department_education} id="education">
        <div className={styles.title}>
          <Title title="Education" />
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
                <div style={{ marginBottom: 12 }}>
                  Computer Science and Engineering / Software
                </div>
                <div style={{ color: "grey" }}>2015.03 ~ 2022.02</div>
              </div>
            </div>
          </div>
        </Bubble>
      </div>
    </div>
  );
}

export default Show;
