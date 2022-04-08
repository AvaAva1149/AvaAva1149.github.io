import React from "react"
import "../../index.css";

import { Link } from "react-router-dom";


const Mealitem=()=>{
  return(
      <>
      
      <div className="row">
      <div className="column">
        <img  className="img"src="https://media.istockphoto.com/photos/honey-garlic-glazed-salmon-with-fresh-salad-in-a-black-plate-healthy-picture-id1341814595?b=1&k=20&m=1341814595&s=170667a&w=0&h=yKD9f8BOBvlrYA0su_hNZn1xtlptvJ9Wo55iIOHdAcM=" alt="Snow"  />
        <h3 className="h3-qe" >Honey Garlic Salmon</h3> 
        
      </div>
      <div className="column">
        <img className="img" src="https://media.istockphoto.com/photos/spaghetti-with-tomato-sauce-shot-on-rustic-wooden-table-picture-id1166678093?k=20&m=1166678093&s=612x612&w=0&h=gICfSjYEFNNXgQfdc6nh7FoE8cu9ED4Jn9u_Y3b4-Mo=" alt="Forest"  />
       
       
        <Link ClassName="link-qe" to="/NoodleRecipe" >
        <h3 className="h3-qe">Noodle</h3> 
</Link>



      </div>
      <div className="column">
        <img className="img" src="https://media.istockphoto.com/photos/classic-lasagne-piece-on-a-plate-picture-id1347984667?k=20&m=1347984667&s=612x612&w=0&h=gvZASV-ETZ79joEIUrfv56sYVmQ3sO7TiiGtPwYnWHI="/>
        <h3 className="h3-qe">Classic Lasagna</h3> 
      </div>

      <div className="column">
        <img className="img" src="https://media.istockphoto.com/photos/bruschetta-chicken-in-a-casserole-dish-picture-id1325291315?b=1&k=20&m=1325291315&s=170667a&w=0&h=J_GlNCUHFojabH5w3evy6vY6Oo3_LChB57yv3kxdv10=" alt="Mountains"  />
        <h3 className="h3-qe">Balsamic Chicken</h3> 
      </div>
    </div>

    <div className="row">
      <div className="column">
        <img className="img" src="https://media.istockphoto.com/photos/overhead-view-of-a-dish-of-spaghetti-bolognese-picture-id1303480139?b=1&k=20&m=1303480139&s=170667a&w=0&h=LYFe7l8leKL0SgduRzb-0nX08-mwhfmHdINGDM3Qiuc=" alt="Snow"  />
        <h3 className="h3-qe">Pasta</h3> 
      </div>
      <div className="column">
        <img className="img" src="https://media.istockphoto.com/photos/fruit-salad-in-a-ceramic-bowl-picture-id949404248?k=20&m=949404248&s=612x612&w=0&h=8MQZHBkDqeRimapM-igaBml7p5Pp6B8iPwBniLQvQsk=" alt="Forest"  />
        <h3 className="h3-qe">Fruit Salad</h3> 
      </div>
      <div className="column">
        <img className="img" src="https://media.istockphoto.com/photos/pasta-variation-picture-id185065945?b=1&k=20&m=185065945&s=170667a&w=0&h=_zzul7RY46M0eDtAwNfJ66bH8Bs3Qbr58GWM25xDm9s=" alt="Mountains"/>
        <h3 className="h3-qe">Honey Garlic Salmon</h3> 
      </div>

      <div className="column">
        <img className="img" src="https://media.istockphoto.com/photos/pasta-variation-picture-id185065945?b=1&k=20&m=185065945&s=170667a&w=0&h=_zzul7RY46M0eDtAwNfJ66bH8Bs3Qbr58GWM25xDm9s=" alt="Mountains" />
        <h3 className="h3-qe">Honey Garlic Salmon</h3> 
      </div>
     
    </div>
     
      
     
      </>
  )
}
export default Mealitem;




