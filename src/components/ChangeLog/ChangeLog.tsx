import { FC } from "react";
import styles from "./ChangeLog.module.css";

type LogData = {
  id: string;
  date: string;
  name: string;
};

type Props = {
  title: string;
  description: string;
  datas: LogData[];
};

export const ChangeLog: FC<Props> = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <hgroup>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </hgroup>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
          <ul className={styles.list}>
            {props.datas.map((data) => (
              <li className={styles.listItem}>
                <time dateTime={data.date} className={styles.date}>
                  {data.date}
                </time>
                <span className={styles.circle}></span>
                <span className={styles.name}>{data.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
