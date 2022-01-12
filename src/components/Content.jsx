import React from 'react'
import egg1 from "../assets/content.jpg"
import egg2 from "../assets/content2.jpg"

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img className="h-full rounded mb-20 shadow" src={egg1} alt="" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">
                        Egg Muffins
                    </h2>
                    <p className="mb-2">Crisply Shit and Nutritious too</p>
                    <span>$16</span>
                </div>
            </div>
            <div className="menu-card">
                <img className="h-full rounded mb-20 shadow" src={egg2} alt="" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">
                        Egg Salad
                    </h2>
                    <p className="mb-2">Very Good Shit</p>
                    <span>$18</span>
                </div>
                </div>
        </>
    )
}

export default Content