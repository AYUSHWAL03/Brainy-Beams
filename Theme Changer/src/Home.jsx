import React,{useContext} from 'react'
// import { ThemeChange } from './App'

function Home() {
    // const {bgColor,color} = useContext(ThemeChange) //To use Context from App
    const bgColor = localStorage.getItem('bgColor') || 'white'; //This is localStorage implementation
    const color = localStorage.getItem('color') || 'black';
    return (
        <>
        <div  className='h-dvh w-dvh' style={{color:color,backgroundColor:bgColor}}> 
            {/* THis is how we set color */}
            {console.log(color, bgColor)}
            <h2 className='flex justify-center text-2xl p-2'>
            This is Home
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam cumque dicta ea culpa neque iste et laudantium. Ipsa, vel necessitatibus fugiat explicabo, commodi cum et ratione amet animi sapiente aliquid?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam cumque dicta ea culpa neque iste et laudantium. Ipsa, vel necessitatibus fugiat explicabo, commodi cum et ratione amet animi sapiente aliquid?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam cumque dicta ea culpa neque iste et laudantium. Ipsa, vel necessitatibus fugiat explicabo, commodi cum et ratione amet animi sapiente aliquid?</p>
        </div>
        </>
    )
}

export default Home