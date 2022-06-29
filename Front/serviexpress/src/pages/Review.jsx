import React from 'react'
import BurgerButton from '../components/NavBar/NavBar'
import FooterBar from '../components/FooterBar/FooterBar'
import Styles from './styles/Review.module.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {FaStar} from 'react-icons/fa'
import { useState } from 'react'
import { postReview } from '../redux/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const Review = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [input, setInput] = useState({
    review: '',
    rating: ''
  })

  const [rating, setRating] = useState()
  const [hover, setHover] = useState()

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postReview(input))
    swal({
      title: "Review Submitted",
      text: "Thank you for your review!",
      icon: "success",
    })
    setInput({
      review: '',
      rating: ''
    })
    navigate('/home')
  }

  return (
    <div className={Styles.container} >
        <BurgerButton />

        <div className={Styles.form}>
        <h4>Give us your review!</h4>

        <Form onSubmit={handleSubmit}>
         <Form.Control as="textarea" rows={10} placeholder="Write something..." onChange={(e) => handleChange(e)}/>


        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
            <input 
            type='radio'
            name='rating'
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
            onChange={(e) => handleChange(e)}
            />
            <FaStar
            className={Styles.star}
            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            size={50}
            />
          </label>
          )
        })
      }

           <h5>Rating selected: {rating}</h5>
       
            <Button variant="primary" type="submit" className={Styles.btn}>
              Submit
            </Button>
           </Form>
        </div>
        
        <FooterBar />
    </div>
  )
}

export default Review