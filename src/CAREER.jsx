import React from 'react'

import Bottom from './Bottom';
import Card from './Card';

const CAREER = ({course}) => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <img 
             width={1200}
             className="responsive-image"
             height={300}
            src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
            alt=""
          />
        </div>
      <Bottom/>
      {course.map((item,index) => { if(item.id === "Career")
            return (
                <Card key={index} item={item}/>
            );
          })}
      </div>
    </div>
  </>
  )
}

export default CAREER