import Star from './assets/images/icon-star.svg'
import Thankyou from "./assets/images/illustration-thank-you.svg"
import './App.css'
import { useState } from 'react'
import {motion} from "framer-motion";

function App() {
  const [ selectedRating , setSelectedRating ] = useState();
  const [ isSelected, setSelected ] = useState(false);

  const handleSelectedRating = (rating) => {
    setSelectedRating(rating)
  }

  const submitForm = (e) => {
    e.preventDefault();
    setSelected(true);
  }

  return (
    <>
      {isSelected ? (
        <motion.div 
          className="thank-you"
          initial={{scale: 0.5}}
          animate={{scale: 1}}
          exit={{scale: 0}}
          transition={{duration: 1}}
        >
          <img src={Thankyou} alt="" />
          <span className="rating">You selected {selectedRating} out of 5 </span>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
          </p>
        </motion.div>

      ):(
        <motion.form 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 2}}
          onSubmit={submitForm} 
          className="rating-container"
        >
          <div className="star">
            <img  src={Star} alt="Star" />
          </div>
          <h1>How did we do?</h1>

          <p> 
              Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
          </p>

          <div className="rating-numbers">
            {[1,2,3,4,5].map((rating) => (
              <button className='rating-btn' key={rating} onClick={() => handleSelectedRating(rating)} type="button">
                {rating}
              </button>
            ))}
          </div>
          <button className="btn">Submit</button>
        </motion.form>
      )}
      
      
    </>
  )
}

export default App
