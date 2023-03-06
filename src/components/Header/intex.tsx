import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from '../../assets/logo.svg'
import leftHeader from '../../assets/leftHeader.svg'
import rightHeader from '../../assets/rightHeader.svg'

export function Header () {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={leftHeader} alt="" />
        <img src={logoImg} alt="" />
        <img src={rightHeader} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}