import logo from './../../assets/imgs/logo.png'
import logo2x from './../../assets/imgs/logo@2x.png'
import logo3x from './../../assets/imgs/logo@3x.png'


type LogoProps = {
    className?: string
}

const Logo = ({className}: LogoProps) => {
    return <img srcSet={`${logo2x} 2x, ${logo3x} 3x"`} className={className} src={logo} alt="logo"/>
}


export default Logo
