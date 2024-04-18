import React from 'react';
import './myPage.css';

const myPage  = () =>{
   return (
      <div className="myPage_All">
      <div className="myPage_Header">
        <div className="myPage_Head">MY PAGE</div>
      </div>
      <div className="myPage_Nav">
        <button className="myHeart_Btn">
          <div className="myHeart">MY 하트</div>
        </button>
        <button className="myClothe_Btn">
          <div className="myClothe">나의 옷장</div>
        </button>
        <button className="myInfo_Btn">
          <div className="myInfo">정보 관리</div>
        </button>
      </div>


      <div className = "myStyle_Box">
         <div className = "myHeartStyle">MY 하트 스타일 (4)</div>
         <div className = "more_View">More +</div>
      </div>
      <div className = "distinct_Block"/>
      <div className = "myStyle_imgs">
        <img className = "img_Box" src = " img/em1.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = " img/em2.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = " img/em3.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = " img/em4.jpg" alt ="heartFashion"/>
      </div>


      <div className = "myStyle_Box">
         <div className = "myHeartStyle">나의 옷장 (7)</div>
         <div className = "more_View">More +</div>
      </div>
      <div className = "distinct_Block"/>
      <div className = "myStyle_imgs">
        <img className = "img_Box" src = " img/em5.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = " img/em6.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = " img/em7.jpg" alt ="heartFashion"/>
        <img className = "img_Box" src = " img/em8.jpg" alt ="heartFashion"/>
        
      </div>

      
    </div>
      
   );
};

export default myPage;