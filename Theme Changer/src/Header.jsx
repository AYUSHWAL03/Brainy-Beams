import React,{useState,useContext} from 'react'
// import { ThemeChange } from './App' 
function Header() {
    // const {setBgColor,setColor,bgColor,color} = useContext(ThemeChange) // destructuring of state from context
    const [bgColor, setBgColor] = useState(localStorage.getItem('bgColor')||'white') //This is local storage o
    const [color, setColor] = useState(localStorage.getItem('color') || 'black')
    const BgColorSetter = () =>{
        const newBgColor = bgColor === 'white' ? 'black' : 'white';
        setBgColor(newBgColor);
        localStorage.setItem('bgColor', newBgColor);
        window.location.reload();
    }
    const colorSetter = () =>{
        const newColor = color === 'white' ? 'black' : 'white';
        setColor(newColor);
        localStorage.setItem('color', newColor);
        window.location.reload();
    }
  return (
    
    <div>
        <nav class=" border-gray-200 border-b px-4 lg:px-6 py-2.5 dark:bg-gray-800" style={{color:color,backgroundColor:bgColor,borderColor:color}}>
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {console.log(color,bgColor)}

            <div class="flex items-center lg:order-2"
            onClick={(e)=>{
                e.preventDefault();
                BgColorSetter();
                colorSetter();
                }}>
                <a href="#" title='Theme Changer' style={{color:color,backgroundColor:bgColor}} class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                </svg>
                </a> 
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    
                    <li style={{color:color,backgroundColor:bgColor}}>
                        <a href="#" class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                    </li>
                    <li style={{color:color,backgroundColor:bgColor}}>
                        <a href="#" class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">User</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header