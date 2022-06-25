import './recipieCard.css';

const addLike = (e) => {
    if(e.target.className === "far fa-thumbs-up"){
      e.target.className = 'fas fa-thumbs-up';
    }else{
      e.target.className = 'far fa-thumbs-up';
    }
      }

const RecipieCard = ({recipe}) => {
    return (
        <div className='recipiecard br bs-0 df fd-c'>
            <header className="recipiecard-header df">
                <div>
                    <img className='recipie-img' src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg?quality=82&strip=1&resize=640%2C360" alt=""/>
                </div>
                <div className='recipie-header-name'>
                    <span className='recipie-user'>@{recipe.userId}</span>
                    <h2 className="recipiecard-name">{recipe.name}</h2>
                </div>
            </header>
            <div className="recipie-body df fd-c">
                <div className='recipie-ingridients'> 
                    <h3>Ingrideints</h3>
                    <span>{recipe.ingredients}</span>
                </div>
                <div className='recipie-des'>
                    <h3>Description</h3>
                    <p>{recipe.description}</p>
                </div>
            </div>
            <div className='recipie-bottom'>
                <i onClick={addLike} className="far fa-thumbs-up"></i>
                <span>122 likes</span>
            </div>
            
        </div>
    );
}

export default RecipieCard;