import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/intex";
import { PostInfo } from "../../components/PostInfo";
import { getRepoParams, GithubApiResponse } from "../../services/github";
import { ParagraphCardContent } from "./styles";

export function PostBlog () {
  const { postNumber } = useParams<{ postNumber: string }>();
  const [post, setPost] = useState<GithubApiResponse>({});

  const githubAxios = async() => {
    const apiGetRepo: GithubApiResponse = await getRepoParams(postNumber)
    setPost(apiGetRepo)
  }

  useEffect(() => {
    githubAxios()
  }, []) 


  return (
    <div>
      <Header />
      <PostInfo post={post}/>
      <ParagraphCardContent>
        {post?.body}
      </ParagraphCardContent>
    </div>       
  )
}