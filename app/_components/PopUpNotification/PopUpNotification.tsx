import React, { useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import styles from "./PopUpNotification.module.scss";

const PopUpNotification = ({ props }) => {
  // const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  if (typeof window !== "undefined") {
    const popupCloseTime = JSON.parse(localStorage.getItem("popupCloseTime"));

    const keepCloseForXHours = Number(
      props.data.options.keep_close_for_x_hours || 24
    );

    const now = moment(new Date());
    const end = moment(popupCloseTime?.timestamp);
    const duration = moment.duration(now.diff(end));
    const hours = duration.asHours();

    if (
      (hours >= keepCloseForXHours || !popupCloseTime?.timestamp) &&
      isActive === false
    ) {
      setIsActive(true);
    }
  }

  const closeButton = () => {
    setIsActive(false);

    // We keep the current timestamp in the local storage
    const currentTime = { timestamp: new Date().getTime() };
    localStorage.setItem("popupCloseTime", JSON.stringify(currentTime));
  };

  return false ? (
    props &&
    props.data &&
    props.data.options &&
    props.data.options.notification_fr &&
    props.data.options.notification_fr.content &&
    props.data.options.notification_fr.content !== "" ? (
      <div
        className={
          isActive ? `${styles.popup} ${styles.popupActive}` : styles.popup
        }
      >
        <div className={styles.popup__left}>
          <p className={styles.popup__paragraph}>
            {props.data.options.notification_fr.content}
          </p>

          {props &&
            props.data &&
            props.data.options &&
            props.data.options.notification_fr &&
            props.data.options.notification_fr.link && (
              <a
                className={styles.popup__eyebrow}
                href={props.data.options.notification_fr.link.url || "#"}
                target={props.data.options.notification_fr.link.target || ""}
              >
                {props.data.options.notification_fr.link.title}
              </a>
            )}
        </div>

        <div className={styles.popup__right} onClick={closeButton}>
          <button className={styles.popup__button}></button>
        </div>
      </div>
    ) : null
  ) : props &&
    props.data &&
    props.data.options &&
    props.data.options.notification_en &&
    props.data.options.notification_en.content &&
    props.data.options.notification_en.content !== "" ? (
    <div
      className={
        isActive ? `${styles.popup} ${styles.popupActive}` : styles.popup
      }
    >
      <div className={styles.popup__left}>
        <p className={styles.popup__paragraph}>
          {props.data.options.notification_en.content}
        </p>

        {props &&
          props.data &&
          props.data.options &&
          props.data.options.notification_en &&
          props.data.options.notification_en.link && (
            <a
              className={styles.popup__eyebrow}
              href={props.data.options.notification_en.link.url || "#"}
              target={props.data.options.notification_en.link.target || ""}
            >
              {props.data.options.notification_en.link.title}
            </a>
          )}
      </div>

      <div className={styles.popup__right} onClick={closeButton}>
        <button className={styles.popup__button}></button>
      </div>
    </div>
  ) : null;
};

export default PopUpNotification;
