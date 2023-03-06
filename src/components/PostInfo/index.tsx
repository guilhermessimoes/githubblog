import { GithubLogo, Buildings, Users, ArrowSquareOut, ArrowArcLeft, ArrowLeft, ChatTeardrop, Chat, CalendarBlank } from "phosphor-react";
import { FooterCardContent, HeaderCardContent, ProfileCard, ProfileContainer } from "./styles";
import { useEffect, useState } from "react";
import moment from "moment";
import 'moment/dist/locale/pt-br'

export function PostInfo (post) {
  console.log("🚀 ~ file: index.tsx:9 ~ PostInfo ~ post:", post)
  const [comments, setComments] = useState('')
  const titlePost = post?.post?.title
  const gitHubUserlogin = post?.post?.user?.login
  const gitHubComments = post?.post?.comments
  const gitHubData = post?.post?.updated_at

  useEffect(() => {
    if (gitHubComments >1)return setComments('Comentários')
    if (gitHubComments <=1)return setComments('Comentário')
  }, [gitHubComments])

  const dataFormat = moment(gitHubData).locale('pt-br').fromNow();

 
  return (
   <ProfileContainer>
      <HeaderCardContent>
        <a href="/"><ArrowLeft size={18} weight="bold"/> VOLTAR </a>
        <a href="">VER NO GITHUB <ArrowSquareOut size={18} weight="bold"/></a>
      </HeaderCardContent>          
      <h1>{titlePost}</h1>
      <FooterCardContent>
        <span><GithubLogo size={18} color="#3A536B" weight="duotone"/> {gitHubUserlogin}</span>
        <span><CalendarBlank size={18} color="#3A536B" weight="duotone"/> {dataFormat}</span>
        <span><Chat size={18} color="#3A536B" weight="duotone"/> {gitHubComments} {comments}</span>
      </FooterCardContent>
   </ProfileContainer>
  )
}