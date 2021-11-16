// import siteMetadata from '@/data/siteMetadata'
import { useEffect } from 'react'
// import dynamic from 'next/dynamic'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
import siteMetadata from '@/data/siteMetadata'

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
      ...siteMetadata.comment,
      id: frontMatter.slug, // Ensure uniqueness and length less than 50
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
