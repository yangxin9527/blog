import { useEffect } from 'react'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'

// import siteMetadata from '@/data/siteMetadata'
// import dynamic from 'next/dynamic'

// const UtterancesComponent = dynamic(
//   () => {
//     return import('@/components/comments/Utterances')
//   },
//   { ssr: false }
// )
// const GiscusComponent = dynamic(
//   () => {
//     return import('@/components/comments/Giscus')
//   },
//   { ssr: false }
// )
// const DisqusComponent = dynamic(
//   () => {
//     return import('@/components/comments/Disqus')
//   },import { useEffect } from 'react';

//   { ssr: false }
// )

const Comments = ({ frontMatter }) => {
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
  console.log(frontMatter.slug)
  useEffect(() => {
    var gitalk = new Gitalk({
      clientID: '20ba6389d19d60888824',
      clientSecret: 'fd78f1e958843208bb2105fda8ee37a8b5b7fa22',
      repo: 'https://github.com/yangxin9527/blog',
      owner: 'yangxin9527',
      admin: ['yangxin9527'],
      id: frontMatter.slug, // Ensure uniqueness and length less than 50
      language: 'zh-CN',
      distractionFreeMode: false, // Facebook-like distraction free mode
    })
    gitalk.render('gitalk-container')
  }, [])

  return (
    // <div id="comment">
    //   {siteMetadata.comment && siteMetadata.comment.provider === 'giscus' && (
    //     <GiscusComponent mapping={term} />
    //   )}
    //   {siteMetadata.comment && siteMetadata.comment.provider === 'utterances' && (
    //     <UtterancesComponent issueTerm={term} />
    //   )}
    //   {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
    //     <DisqusComponent frontMatter={frontMatter} />
    //   )}
    // </div>
    <div id="gitalk-container"></div>
  )
}

export default Comments
