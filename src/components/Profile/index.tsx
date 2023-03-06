import { GithubLogo, Buildings, Users, ArrowSquareOut } from "phosphor-react";
import { FooterCardContent, HeaderCardContent, ProfileCard, ProfileContainer } from "./styles";
import profileImg from '../../assets/profile.svg'
import { getUserGithub } from "../../services/github";
import { useEffect, useState } from "react";

export function Profile () {
  const [github, setGitHub] = useState()
  
  const githubAxios = async() => {
    const apiGetGithub = await getUserGithub()
    setGitHub(apiGetGithub)
  }

  useEffect(() => {
    githubAxios()
  }, [])

 
  return (
   <ProfileContainer>
      <ProfileCard>
        <img src={github?.data?.avatar_url} alt="" />
        <div>
          <HeaderCardContent>
            <h1>{github?.data?.name}</h1>
            <a href="">GITHUB <ArrowSquareOut size={18} weight="bold"/></a>
          </HeaderCardContent>          
          <p>{github?.data?.bio}</p>
          <FooterCardContent>
            <span><GithubLogo size={18} color="#3A536B" weight="duotone"/> {github?.data?.login}</span>
            <span><Buildings size={18} color="#3A536B" weight="duotone"/> {github?.data?.company}</span>
            <span><Users size={18} color="#3A536B" weight="duotone"/> {github?.data?.followers} Seguidores</span>
          </FooterCardContent>
        </div>
      </ProfileCard>
   </ProfileContainer>
  )
}