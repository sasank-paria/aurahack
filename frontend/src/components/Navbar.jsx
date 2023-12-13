import Reac,{ useState} from 'react'

const Navbar = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false);
    const handleMenuToggler = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
      return (
      <header>
        <nav>
            <a href ="/"><svg xmlns="https://imgs.search.brave.com/xYiLsL0OjZ00HsnDt2sMFpiMAnB8aS_7vdjd80Avt7I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9mcmVlbGFuY2Vy/LnN2Zw.svg" width="29" height= "30" viewBox="0 0 29 30" fill="none">
                <circle cx="12.0143" cy="12.5143"r = "12.0143"fill= "#357SE2" fillOpacity="0.4"/>
                <circle cx="16.9857" cy="17.4857" r = "12.0143" fill= "#357SE2" /></svg>
                <span>Job Portal</span></a>
        </nav>
      </header>
        )
}

export default Navbar
