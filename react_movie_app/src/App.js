import React from 'react';
import PropTypes from 'prop-types';

function Food({name,picture,rating}){
  return (<div>
   <h2>I like {name}</h2>
   <h4>{rating}/5.0</h4>
   <img src={picture} alt={name} />
   
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

const foodILike = [
  {
    id : 1,
    name : "Mcdonalds",
    image :
      "https://yt3.ggpht.com/-ouf_n0GLJa4/AAAAAAAAAAI/AAAAAAAAAAA/2OA9mdbk9iQ/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
      rating : 5
  },
  {
    id : 2,
    name : "Doncasu",
    image : 
      "http://sccdn.chosun.com/news/html/2017/05/12/2017051201001017200071851.jpg",
      rating : 2.1
  },
  {
    id : 3,
    name : "Shakeshack",
    image : 
    "https://jonessign.com/wp-content/uploads/2016/04/shake_shack_stacked.png",
    rating : 4
  },
  {
    id : 4,
    name : "In-N-Out",
    image: 
    "https://fastfoodinusa.com/templates/uploads/news/big/2016/07/In-N-Out-Burger_logo.png" ,
    rating : 4.8
  },
  {
    id : 5,
    name : "Chick-fil-A",
    image: 
    "http://timesleader.com/wp-content/uploads/2016/03/web1_2014-Chick-fil-A-logo_tcm415-68274.jpg",
    rating : 5
  }
]


function renderFood(dish){
  //console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image}/> 
}

function App() {
  return( 
    <div>
      {foodILike.map(dish => 
        <Food name={dish.name} picture={dish.image} rating={dish.rating}
      />)}
    </div>
  );
}

export default App;
