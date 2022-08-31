const MenuCards = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curr) => {
          const { id, image, name, price, type, description } = curr;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="cardbody">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span an className="card-author subtle">
                      {price}
                    </span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="" />
                  <span className="card-tag">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export { MenuCards };
