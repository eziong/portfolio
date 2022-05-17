import styles from "../styles/Projects.module.css";
import classNames from "classnames";
import Image from "next/image";
import Bubble from "../utils/styles/Bubble";

function Skills() {
  return (
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
          height={500}
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
          width={250}
          height={340}
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
          width={250}
          height={330}
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
          width={250}
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
          width={250}
          height={130}
        />
      </Bubble>
    </div>
  );
}

export default Skills;