import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/jero.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Vocación Somascos" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Formulario</h2>
            <div className="formulario">
              <form>
                <div className="box">
                <label className="">Nombre
                </label>
                <input type="text" placeholder="Escriba su nombre"></input>
                <br></br>
                <label>Apellidos</label>
                <input type="text" placeholder="Escriba sus apellidos"></input>
                <br></br>
                <label>Celular</label>
                <input type="text" placeholder="Escriba su numero de celular"></input>
                <br></br>
                <label>Correo</label>
                <input type="email" placeholder="Escriba su correo"></input>
                <br></br>
                <label>Edad</label>
                <input type="text" placeholder="Escriba sus edad"></input>
                <br></br>

                </div>
                <h2>Domicilio</h2>
                <div className="box">
                <label> Departamento</label>
                <select> a
                  <option></option>
                </select>
                <br></br>
                <label> Municipio</label>
                <input type="text" placeholder="Escriba su dirección"></input>
                <br></br>
                <label> Dirección</label>
                <input type="text" placeholder="Escriba su dirección"></input>
                <br></br>
                </div>

                <checkbox>Acepto </checkbox>
              </form>
            </div>
            <h2>Tempus veroeros</h2>
            <p>Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
