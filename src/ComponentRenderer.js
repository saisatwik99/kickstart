import React from 'react';
import { useParams } from 'react-router-dom';


import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import PricingPage from "pages/Pricing.js";
import AboutUsPage from "./components/ExploreCard.js";
import ContactUsPage from "pages/ContactUs.js";
import blog from "./components/GridWithFeaturedPost.js"
import completePage from './components/CompleteExplore.js';

export const components = {

  page: {
    explore: {
      component: AboutUsPage
    },
    blog: {
      component: blog
    },
    price: {
      component: PricingPage
    },
    contact: {
      component: ContactUsPage
    },
    login: {
      component: LoginPage
    },
    signup: {
      component: SignupPage
    },
    info: {
      component: completePage
    }
  }
}

export default () => {
  const { page, item } = useParams()

  try {
    let Component = null;
    if(page === "explore" && item != null){
      Component= components["page"]["info"].component
      return <Component/>
        
    }
    else if(page != null) {
      Component= components["page"][page].component
      return <Component/>
    }
    

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
