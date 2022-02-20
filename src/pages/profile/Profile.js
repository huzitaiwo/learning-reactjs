import React, { useState } from 'react';
 
function App() {
  const [userList, setUserList] = useState([]);
 
  return (
    <div className="App">
      <h3>Load more pagination in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
      {userList.map((x, i) => {
        return <div key={i} className="box">
          <img src={x.avatar} />
          <div className="name">{x.first_name} {x.last_name}</div>
          <div className="email">{x.email}</div>
        </div>
      })}
      <div className="clearfix"></div>
      <button className="btn-load-more">Load More</button>
    </div>
  );
}
 
export default App;