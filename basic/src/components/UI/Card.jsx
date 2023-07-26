import React from 'react';
import './Card.css';

const Card = (props) => {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

// 모달이나 경고창 같은 공통적인 CSS적인 부분을 추출하여
// 코드의 중복을 피할 수 있다.
// 단, 이 경우에는 children은
// 여는 태그와 닫는 태그의 사이의 값만 추출하기 때문에
// 그 안에 있는 className도 같이 적용하도록 유의하자.
