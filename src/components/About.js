import { logDOM } from "@testing-library/dom";
import App from "./App";    

function About({ aboutText, imgSrc ="https://via.placeholder.com/215"
})

    {

  return  (
      <div>
          <img src={"logo.png"} alt="blog logo" />
          <p>{aboutText}</p>
      </div>
  )
}

export default About;