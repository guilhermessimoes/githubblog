import { useEffect, useState } from "react";
import { SearchContainer, SearchHeaderContainer } from "./styles";

export function SearchForm ({ totalPosts, onSearch }) {
  const [publicacoes, setPublicacoes] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (totalPosts > 1) {
      setPublicacoes('Publicações');
    } else {
      setPublicacoes('Publicação');
    }
  }, [totalPosts]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(searchValue);
  };

  
  return (
    <SearchContainer>
      <SearchHeaderContainer>
        <h1>Publicações</h1>
        <span>{`${totalPosts} ${publicacoes}`}</span>
      </SearchHeaderContainer>
      <input type="text" placeholder="Buscar conteúdo" value={searchValue} onChange={handleInputChange} />  
    </SearchContainer>
  )
}