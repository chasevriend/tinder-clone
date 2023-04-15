import React from "react";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";


const TinderMatches = () => {
    return(
        <div>
            <Header />
            <TinderCards />
            <SwipeButtons />
        </div>
    )
}

export default TinderMatches;