import { Button } from "./Button"


export const Navbar = () => {
  return (
   <div className="border-b">
   <div className="flex  justify-between max-w-screen-xl mx-auto " >
        <div className="text-2xl font-bold flex flex-col justify-center">
            CourseX

        </div>
        <div>
        <Button onClick={() => {
            window.location.href = "https://github.com/KaushalSoniii/Cource"
        }} >Open Source</Button>
        <Button onClick={()=> {
            window.location.href = "https://github.com/KaushalSoniii"
        }}>GitHub</Button>
        </div>    
        
    
    </div>
    </div>
  )
}

