import React from "react";
import classNames from "classnames/bind";
import Icon, { IconName } from "../CustomIcon";
import styles from "./Tags.module.scss";

const cx = classNames.bind(styles);

export interface TagsProps {
  tags: string[];
  icon?: IconName;
}

export const Tags: React.FC<TagsProps> = ({ tags, icon }) => {
  return (
    <div className={cx("tags")}>
      {tags.map((tag, index) => (
        <div key={tag} className={cx("tags__tag")}>
          {icon && <Icon icon={icon} height={16} width={16} />}
          <span>{tag}</span>
        </div>
      ))}
    </div>
  );
};
