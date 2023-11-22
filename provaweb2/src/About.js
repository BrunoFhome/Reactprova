import "./styles/styles.css"

import Bruno from "./images/thumb-fotobruno.jpg"

function About() {
    return(
        <div className="about">


            <main class="conteudo">
                <h2 class="ceoaloha">CEO Aloha Turismo</h2>
                <div class="sobremim">
                    <img src={Bruno} alt="" width="300px"/>           
                    <p><strong>BRUNO THOME:</strong> Dolor sit amet consectetur adipisicing elit. Atque iste pariatur eius ipsam, accusantium incidunt officia nobis, ad temporibus cum reprehenderit at eveniet fugiat aliquam modi a dolor rerum cumque.</p>
                </div>


                <div class="historia">
                    <h2 class="ceoaloha">Historia Aloha Turismo</h2>
                    <p>Dolor sit amet consectetur adipisicing elit. Praesentium molestiae, dignissimos id voluptates eos aliquam, quam, quasi libero modi nisi possimus recusandae expedita dolor quod harum quae? Cum, facilis deserunt?</p>
                </div>
            </main>



        </div>
    );
};


export default About;