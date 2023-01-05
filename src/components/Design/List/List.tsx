import React from 'react';

function List() {
  const listData = {
    title: '비밀번호 작성규칙',
    content: [
      { id: '1', info: '* 대문자 혹은 소문자로 시작해주세요' },
      { id: '2', info: '* 최소 8자 부터 24자 이내로 작성해주세요' },
      { id: '3', info: '* 특수문자(!,@,#,$,%)를 포함해주세요' },
    ],
  };

  const { title, content } = listData;

  console.log('title', title);
  return (
    <div style={{ padding: '0 0 0 5px', boxSizing: 'border-box' }}>
      <strong
        style={{ display: 'block', fontSize: '13px', margin: '10px 0 5px 0' }}
      >
        {title}
      </strong>
      <ul>
        {content &&
          content.map(({ id, info }) => (
            <li key={id} style={{ margin: '0 0 3px 0' }}>
              <p style={{ fontSize: '12px' }}>{info}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default List;
