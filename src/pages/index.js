import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/sanjeronimo.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Vocación Somascos" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Congregación Padres Somascos <br></br>
                  Provincia Andina
                  </h2>
                  
                </header>
                <p>
                Somos una Comunidad Religiosa de origen Italiano, fundada por san Jerónimo Emiliani 
                en 1486, más o menos por el mismo tiempo en que Cristóbal Colón descubrió América. 
                 Vivimos en comunidad, somos sacerdotes y también Hermanos, dedicados, según el ejemplo
                  de San Jerónimo, a servir a la niñez y juventud menos favorecida en colegios, parroquias, 
                  escuelas de capacitación laboral, hogares para niños… "Allí donde haya un joven, allí hay 
                  lugar para un Somasco". 
               </p>

                <p>
                Estamos presentes hoy en los cinco continentes en 18 naciones, al servicio de la iglesia; 
                sobre todo en el inmenso campo de la juventud marginada y desamparada.
                <p>

                </p>
                Seguir a Jesús, es una experiencia maravillosa.
                </p>

                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Ver mas
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Etapas</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-heart"></span>
                <h2>Aspirantado</h2>
                <p>
                Es un periodo de un año de búsqueda de la voluntad de Dios en una experiencia humana,
                 cristiana, comunitaria y apostólica, fuerte y decisiva que va orientada a un primer 
                 discernimiento y que tendrá como verificación al ingreso al Postulantado
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-child"></span>
                <h2>Postulantado</h2>
                <p>
                Es la etapa de formación inicial en la que el aspirante inicia la experiencia de
                 vivir en comunidad en la congregación, formándose integralmente a fin de clarificar 
                 sus motivaciones y adquirir la preparación suficiente para comenzar el Noviciado
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-home"></span>
                <h2>Noviciado</h2>
                <p>
                Es la etapa de formación inicial en la que el formando conoce y experimenta 
                el nuevo estilo de vida que la Congregación le ofrece, a través de una fuerte
                 experiencia de Dios, de la integración comunitaria y participación de la misión,
                  para discernir su opción vocacional y decidirse en el seguimiento de Jesucristo 
                  e esa congregación por medio de la profesión temporal.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h2>Post-Noviciado</h2>
                <p>
                Es la última etapa de la formación inicial, donde se continua la formación 
                integral, incorporándose los formando totalmente a las comunidades; clarifica
                 y profundiza su carisma personal dentro del proyecto histórico de la Congregación; 
                 unifica, más así, su vida en el amor personal a Jesucristo, y la entrega al Reino 
                 en el Espíritu de la congregación a fin de optar definitivamente por Jesús a través
                  de una profesión perpetua.  
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Ver mas
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ser Somasco</h2>
              <p>
              “A la puerta de tu vida hay un niño huérfano que te espera”
                <br />
                S. Jerónimo E.
              </p>

            </header>
            <ul className="statistics">
              <li className="style3">
                <span className="icon fa-globe"></span>
                <strong>2</strong> paises
              </li>
              <li className="style1">
                <span className="icon fa-map-marker"></span>
                <strong>6</strong> Ciudades
              </li>
              <li className="style2">
                <span className="icon fa-home"></span>
                <strong>+23</strong> Obras
              </li>
              <li className="style4">
                <span className="icon fa-users"></span>
                <strong>+400</strong> Personas
              </li>
              <li className="style5">
                <span className="icon fa-gratipay"></span>
                <strong>50 años</strong> Colombia
              </li>
            </ul>

            <p className="content">
            Hay millones de niños sedientos de amor por las calles de este mundo. <br/>
            Jóvenes con miedo de vivir, que antes eran fuertes, inteligentes, decididos y 
            ahora débiles y embrutecidos por las armas y las drogas. <br/>
            Ser Somasco para ser de Dios,  ser de Dios, para construir una familia con
             los niños más necesitados. <br/>
            ¿No te gustaría entregar tu vida  al estilo de Jesús y san Jerónimo por 
            la causa de un mundo mejor, viviendo el amor universal?
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Ver mas
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>¿Que espereas?</h2>
              <h1>
                JESÚS Te <strong style={{color:"#1378caa9", font:"bold"}}> Llama </strong> 
              </h1>
              <span> La Aventura De Ser <strong style={{color:"#1378caa9", font:"bold"}}>Somasco</strong></span>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Formulario
                  </Link>
                </li>
                <li>
                  <a href="http://www.somascoscolombia.org/index.html" className="button">
                    Saber mas
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
