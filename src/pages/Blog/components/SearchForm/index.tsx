import { useEffect, useState } from "react";
import { SearchContainer, SearchHeaderContainer } from "./styles";

export function SearchForm (posts) {
  const [publicacoes, setPublicacoes] = useState('')
  const totalPublicacoes = posts?.posts?.data?.items?.length

  useEffect(() => {
    if (totalPublicacoes >1)return setPublicacoes('Publicações')
    if (totalPublicacoes <=1)return setPublicacoes('Publicação')
  }, [totalPublicacoes])
  
  return (
    <SearchContainer>
      <SearchHeaderContainer>
        <h1>Publicações</h1>
        <span>{`${totalPublicacoes} ${publicacoes}`}</span>
      </SearchHeaderContainer>
      <input type="text" placeholder="Buscar conteúdo"/>
    </SearchContainer>
  )
}