import { useEffect, useState } from "react";
import { Header } from "../../components/Header/intex";
import { Profile } from "../../components/Profile";
import { getRepo } from "../../services/github";
import { SearchForm } from "./components/SearchForm";
import { CardContainer, CardContent, CardContentHeader, ParagraphCardContent } from "./styles";
import moment from "moment";
import 'moment/dist/locale/pt-br'

export function Blog () {
  const [ posts, setPost] = useState()  
  const [searchValue, setSearchValue] = useState('');

  const githubAxios = async() => {
    const apiGetRepo = await getRepo()
    setPost(apiGetRepo)
  }

  useEffect(() => {
    githubAxios()
  }, [])

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const filteredPosts = posts?.data?.items?.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase()) || post.body.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <Header />
      <Profile />
      <SearchForm totalPosts={posts?.data?.items?.length} onSearch={handleSearch} />         
        <CardContainer>
        {filteredPosts?.map((post) => {
        return(
          <a key={post.id} href={`/posts/${post.number}`} >          
            <CardContent>
              <CardContentHeader>
                <h1>{post.title}</h1>
                <span>{moment(post.created_at).locale('pt-br').fromNow()}</span>
              </CardContentHeader>
              <ParagraphCardContent>
                {post.body}
              </ParagraphCardContent>
            </CardContent>
          </a>
        )
        })}
      </CardContainer>
    </div>
  )
}