import React from "react";

const renderCategories = (categories) => {
  const categoriesComponentArr = [];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categoryComponent = (
      
      
          <div className="col-xl-100%">
            <div className="row">
            
        <div className="shop-cat-box">
          <img className="img-fluid" src={`images/${category.image}`} alt="" />
        </div>
        </div>
        </div>
    );

    categoriesComponentArr.push(categoryComponent);
  }

  return categoriesComponentArr;
};

export default function ShopCategories({ categories }) {
  return (
    <div className="categories-shop">
     
        <div className="row">{renderCategories(categories)}</div>
      </div>
   
  );
}
