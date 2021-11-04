// import siteMetadata from '@/data/siteMetadata'
import { useEffect } from 'react'
// import dynamic from 'next/dynamic'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'

interface Props {
  frontMatter: PostFrontMatter
}

const Comments = ({ frontMatter }: Props) => {
  // let term
  // switch (
  //   siteMetadata.comment.giscusConfig.mapping ||
  //   siteMetadata.comment.utterancesConfig.issueTerm
  // ) {
  //   case 'pathname':
  //     term = frontMatter.slug
  //     break
  //   case 'url':
  //     term = window.location.href
  //     break
  //   case 'title':
  //     term = frontMatter.title
  //     break
  // }
  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: '20ba6389d19d60888824',
      clientSecret: 'fd78f1e958843208bb2105fda8ee37a8b5b7fa22',
      repo: 'blog',
      owner: 'yangxin9527',
      admin: ['yangxin9527'],
      id: frontMatter.slug, // Ensure uniqueness and length less than 50
      language: 'zh-CN',
      distractionFreeMode: false, // Facebook-like distraction free mode
    })
    gitalk.render('gitalk-container')
  }, [frontMatter.slug])
  return (
    // <>
    //   {siteMetadata.comment && siteMetadata.comment.provider === 'giscus' && (
    //     <GiscusComponent mapping={term} />
    //   )}
    // </>
    <div id="gitalk-container"></div>
  )
}

export default Comments
