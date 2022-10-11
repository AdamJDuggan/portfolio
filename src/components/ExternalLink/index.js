// React
import React from "react";
// 3rd party
import classnames from "classnames";

export default function ExternalLink(props) {
  return (
    <a
      href={props.link}
      className={classnames("cursor-pointer", props.className)}
      target="_blank"
      rel="noreferrer"
    >
      {props.label}
      {props.arrow && <span>&#8599;</span>}
    </a>
  );
}
