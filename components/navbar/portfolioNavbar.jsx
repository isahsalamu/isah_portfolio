import Link from "next/link";

 
export default function PortfolioNavbar(){
    return(
    

    <div className="d-flex fixed justify-content-evenly w-100 p-3 bg-black text-white"  >
        <div className="">PORTFOLIO</div>
         
        <div className="flex justify-between items-center">
             <ul className='flex justify-between items-center'>
                <Link href = "/">
                    <li className="text-sm">Home</li>
                </Link>

                <Link href = "/">
                    <li>About</li>
                </Link>

                <Link href = "/">
                    <li>Projects</li>
                </Link>

                <Link href = "/">
                    <li>Contact</li>
                </Link>
                
             </ul>
        </div>
    </div>
                 
    )
}
