import React from "react";
import './collection.css'
import data from "./data";
import Footer from "./homeComponents/Footer";

const Collection = (props) => {
  return (
    <>
      <div className="container">
        <div className="bg-height">
          <div className="collection-bg">
            <div className="collection-shade"></div>
          </div>
          <h4>ALL COLLECTIONS</h4>
        </div>
        <div className="row">
        {
          data.map(item => {
            return (
              <>
                
                  <div className="col-lg-4 col-12 shoes">
                    <div>
                    <img src={item.imgs} />
                    </div>
                    <button onClick={() => props.handleAddProduct(item)}>{item.price}</button>
                  </div>
            
              </>
            )
          })
        }
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Collection;