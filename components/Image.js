import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage {...rest} />
// https://github.com/timlrx/tailwind-nextjs-starter-blog/issues/231
// const Image = ({ ...rest }) => <img  {...rest} />
export default Image
