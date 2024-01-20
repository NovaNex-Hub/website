import Link from 'next/link'


const Button = ({ children, href, handleClick }) => {
  return (
    <Link href={href} onClick={handleClick} className="bg-blue-500 py-2 px-4 rounded-md text-black block text-center">{children}</Link>
  )
}

export default Button