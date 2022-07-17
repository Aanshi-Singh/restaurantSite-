import React from 'react'

const Menucard = ({menuData}) => {
    console.log(menuData);
  return (
    <>

    <section className="main-card--cointainer">
    {menuData.map((curr) => 
        
            <>
            <div className=" card-container" key = {curr.id}>
        <div className="card">
            <div className="cardbody">
                <span className="card-number card-circle subtle">
                    {curr.id}
                </span>
                <span an className="card-author subtle">{curr.price }</span>
                <h2 className="card-title">{curr.name}</h2>
                <span className="card-description subtle">{curr.description}</span>
                <div className="card-read">Read</div>
            </div>
            {/* <img src={image} alt="" /> */}
            <span className="card-tag">Order Now</span>
        </div>
    </div> 
            </>
       
    

    )
    }
    </section>
    </>
  )
}

export default Menucard;