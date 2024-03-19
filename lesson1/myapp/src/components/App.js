import React from 'react'
import Post from './Post'
function App() {
  

    let text = 'Hallo world'
    let number = 10
    let classValue = 'test'

    let styleObgect = {
        color: 'red',
        fontSize: '20px'
    }
    return (
      <div>   
        {Math.random()*100} TEST VALUE
        <div className={classValue+ ' dom'}>{text}</div>
        <p>{(number>5) ? 'число больше 5' : 'число меньше или равно 5 или 5'}</p> 
        <p style={styleObgect}>TEST STYLE</p>


{/* Пример передачи props (свойств, атрибутов,ргументов) в дочерний компонент */}

        <div>

            <Post title='Title 1' text='Текст поста 1' author='Alex'/>
            <Post title='Title 2' text='Текст поста 2' author='Neena'/>
            <Post title='Title 3' text='Текст поста 3' author='Steaven'/>
        </div>
       </div>
    );
}

export default App

//добавьте в компонент Post новій проп author,который будет содержать имя автора поста.будет содержать имена авторов постов.
//Alex,neena,Steven
//'Эти имена укажите как значение текстового свойства для нового парвграфа как последний дочерний элемент 