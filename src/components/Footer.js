import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Sedes</h2>
      <p>
        <ul> 
          <li> BOGOTÁ: Centro San Jerónimo: Cll. 167 N 62-31 tel: 7498590 – cel. 3102895502 <br/>
              Parroquia Nuestra Señora de Guadalupe: Cra. 60  N 94b-90  tel: 2188525</li>
          <li>TUNJA: <br/>
            Centro Juvenil Emiliani: Cra. 3 N 59-82 – tel: 7428510 – Cel: 3142992313
          </li>
          <li>BUCARAMANGA:  <br/>
          Centro Juvenil Amanecer: Cra. 26 N 11n- 30 Regadero norte- tel: 6403495 – Cel. 3142992313
          </li>
          <li>RIONEGRO (ANTIOQUIA):  <br/>
          Villa san Jerónimo: Vereda el Tablazo, tel: 4/5361165 – Cel: 3132955699 
          </li>
          <li>ECUADOR: Guayaquil, <br/>
          El Cenáculo: Tel: 4/2893668 - 4/2600799
          </li>
        </ul>  
      </p>
      <ul className="actions">
        <li>
        <a href="http://www.somascoscolombia.org/index.html" className="button">
                    Saber mas
         </a>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contacto</h2>
      <dl className="alt">
        <dt>Dirección</dt>
        <dd>Calle 167  &bull; N° 62 -31 &bull; Bogotá, Colombia</dd>
        <dt>Teléfono</dt>
        <dd>(+57) 3142992314</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">somascojoven@somasco.org</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-envelope alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-whatsapp alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://goo.gl/maps/qkT7oWJusdxcDeGWA" className="icon fa-map-marker alt" target="_blank">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1131486718227!2d-74.06419188588715!3d4.750372942549119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85a6600d3d51%3A0x16ef566e4d3ae00f!2sSan%20Jer%C3%B3nimo%20Emiliani!5e0!3m2!1ses!2sco!4v1569716501106!5m2!1ses!2sco"  style={{"border":"0", "width":"400px", "height":"300px" ,"frameborder":"0"}} allowfullscreen=""></iframe>
      </div>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
