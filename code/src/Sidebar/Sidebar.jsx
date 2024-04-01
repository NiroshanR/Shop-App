import './Sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import Logo from './logo3.png'

const Sidebar = ({handleChange}) => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
          <h1><img src={Logo} alt="" /></h1>
        </div>

        <Category handleChange = {handleChange}/>
        <Price handleChange = {handleChange}/>
        <Colors handleChange = {handleChange}/>
    </section>
    </>
  )
}

export default Sidebar