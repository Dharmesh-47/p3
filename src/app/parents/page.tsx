'use client'
import { Button } from "@/components/ui/button"

export default function parents(){
    const handleHover = (e) => {
        const windowHeight=window.innerHeight;
        const windowWidth=window.innerWidth;

        const randomX= Math.floor(Math.random()*windowWidth);
        const randomY = Math.floor(Math.random()*windowHeight);

        e.target.style.position='absolute';
        e.target.style.left=`${randomX}px`;
        e.target.style.top=`${randomY}px`;
    }

    const handleClick=()=>{
        window.open(`https://p2-teal.vercel.app/parents2`)
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ... flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"/>
                <p className="font-bold text-5xl text-while">How long has it been?</p>
                <Button onMouseEnter={handleHover} className="bg-gradient-to-r from-orange-500 to-red-500 text-brown h-20 w-60 text-3xl">I want to see!</Button>
                <Button onClick={handleClick} className="bg-gradient-to-r from-orange-500 to-yellow-500 text-brown h-20 w-46 text-xl">I really want to see!</Button>
            </div>
        </div>
    )
}