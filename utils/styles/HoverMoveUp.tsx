import styles from "../../styles/Projects.module.css";

function HoverMoveUp({
  children,
}:{
  children: React.ReactNode,
}) {
  return (
    <div className={styles.hover_move_up}>
      {children}
    </div>
  );
}

export default HoverMoveUp;