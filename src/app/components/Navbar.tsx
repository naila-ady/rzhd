
import { Inter } from 'next/font/google';
import Link from 'next/link';


//for google fonts
const inter=Inter({subsets:['latin']})

const Navbar = () =>{
    //navbar items
    let navitems=[
        {
            name:"Home",
            link:"./",
        },

        {
        name:"Works",
        link:"work",
    },
    {
        name:"Blogs",
        link:"blog",
    },
    {
        name:"Contacts",
        link:"contact",
    },
]
    return(
         
        <ul className ={` ${inter.className} w-[100%] bg-recentbackground flex items-center justify-end h-[84px] font-medium text-[16px]
           space-x-2`}>
            {
                navitems.map((item ,i)=>(
                    <li key={i}>
                        <Link href={item.link}>
                        {item.name}
                        </Link>
                    </li>
                ))
            }
            </ul>
    
    )
}
export default Navbar