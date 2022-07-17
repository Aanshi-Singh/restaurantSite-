import React from 'react'

const Menucard = (menuData) => {
  return (
    <>
    <div className="card-container">
        <div className="card">
            <div className="cardbody">
                <span className="card-number card-circle subtle">
                    1
                </span>
                <span an className="card-author subtle">Lunch</span>
                <h2 className="card-title">Maggi</h2>
                <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quis officiis ab sunt blanditiis rem voluptatum, dolorem velit necessitatibus quas ad natus maiores consequuntur doloremque veniam? Dolores iure eveniet sunt.</span>
                <div className="card-read">Read</div>
            </div>
            {/* <img src={image} alt="" /> */}
            <span className="card-tag">Order Now</span>
        </div>
    </div> 
    </>
  )
}

export default Menucard;