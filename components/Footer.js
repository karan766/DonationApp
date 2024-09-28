import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
   <footer className="bg-black text-white px-4 h-16 flex justify-center  items-center">
    <p > Copyright &copy; {currentYear} Collection website for funding a project-All rights reserved !</p>
   </footer>
  )
}

export default Footer
