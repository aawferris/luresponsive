import React from "react"
import "./Card.css"

const Card = () => {
  return (
    <div id="main-box">
          <div className="card">
              <img
                className="gradient"
                src="/assets/gradient.png"
                alt="gradient blue"
              />
            <div className="bottom-card">
              <div className="left">
                <p className="card-title">Card Title</p>
                <button className="button">Card Tag</button>
              </div>
              <div className="right">
                <div className="plus-box">
                  <img
                    className="plus-btn"
                    src="/assets/plus-btn.png"
                    alt="blue plus sign button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card