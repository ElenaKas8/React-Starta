
import pizzaImage from '../assets/pizza.png'
function Post(props) {
    const {title, text, author} = props

    return (
        <div className='post'>
            <h1>{title}</h1>
            <img src={pizzaImage} width={400}/>
            <p>{text}</p>
            <p>Author:{props.author}</p>
        </div>
    );
}

export default Post