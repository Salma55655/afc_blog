import React from "react";

function Arabic(props) {
  const isArabic = /[^\u0000-\u007F]+/.test(props.children);

  if (isArabic) {
    return (
      <blockquote style={{ direction: "rtl" }}>{props.children}</blockquote>
    );
  } else {
    return <p>{props.children}</p>;
  }
}
export default Arabic;