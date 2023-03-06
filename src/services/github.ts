import axios from 'axios';

export async function getUserGithub() {
  return axios.get(`https://api.github.com/users/guilhermessimoes`).catch(event => console.log(event))
}

export async function getFollowers() {
  return axios.get(`https://api.github.com/users/guilhermessimoes/followers`).catch(event => console.log(event))
}

export async function getRepo() {
   return axios.get(`https://api.github.com/search/issues?q=A%20repo:guilhermessimoes/posts`).catch(event => console.log(event))
}

export interface GithubApiResponse {
  data?: {
    body: string
  }
}

export async function getRepoParams(postNumber: string): Promise<GithubApiResponse> {
  const response = await axios.get(`https://api.github.com/repos/guilhermessimoes/posts/issues/${postNumber}`)
  return response.data
}