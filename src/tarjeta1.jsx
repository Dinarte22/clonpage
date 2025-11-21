import React from "react";
import fondo from './assets/fondo.png'
import './tarjeta1.css'

function Tarjeta1(){


    return(

        <div className="contenido">

            <h1>
            Run JavaScript <br /> Everywhere
            </h1>

            <p className="descripcion">
            Node.js® is a free, open-source, cross-platform JavaScript runtime
            environment that lets developers create servers, web apps,
            command line tools and scripts.
            </p>

            <button className="btn-primary">Get Node.js®</button>
            <button className="btn-secondary">
                Get security support <br />
                <span className="mini-text">for EOL Node.js versions</span>
            </button>

            <div className="logos">
            <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000"><path stroke-linecap="round" d="m13.5 7l3.5 3.5m-10 3l3.5 3.5m0-10L7 10.5m10 3L13.5 17"/><circle cx="12" cy="5.5" r="2"/><circle cx="12" cy="18.5" r="2"/><circle cx="5.5" cy="12" r="2"/><circle cx="18.5" cy="12" r="2"/><circle cx="12" cy="5.5" r=".5"/><circle cx="12" cy="18.5" r=".5"/><circle cx="5.5" cy="12" r=".5"/><circle cx="18.5" cy="12" r=".5"/></g></svg></div>
            <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 117"><path fill="#FBAD41" d="M205.52 50.813c-.858 0-1.705.03-2.551.058c-.137.007-.272.04-.398.094a1.424 1.424 0 0 0-.92.994l-3.628 12.672c-1.565 5.449-.983 10.48 1.646 14.174c2.41 3.416 6.42 5.421 11.289 5.655l19.679 1.194c.585.03 1.092.312 1.4.776a1.92 1.92 0 0 1 .2 1.692a2.496 2.496 0 0 1-2.134 1.662l-20.448 1.193c-11.11.515-23.062 9.58-27.255 20.633l-1.474 3.9a1.092 1.092 0 0 0 .967 1.49h70.425a1.872 1.872 0 0 0 1.81-1.365A51.172 51.172 0 0 0 256 101.828c0-28.16-22.582-50.984-50.449-50.984"/><path fill="#F6821F" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.822 1.822 0 0 1-1.459-.776a1.919 1.919 0 0 1-.203-1.693a2.496 2.496 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a26.996 26.996 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.905 27.905 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.223 2.223 0 0 0 2.106-1.63"/></svg></div>
            <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#000000" d="M23.827 19.729h-5.595c-.094 0-.17.058-.17.172v1.515c0 .094.058.17.172.17h5.594c.096 0 .172-.044.172-.164v-1.515c0-.105-.057-.166-.173-.166v-.014zM16.463 2.463c.016.034.03.067.047.12v18.79c0 .06-.02.096-.037.114a.168.168 0 0 1-.135.06H.153c-.038 0-.075 0-.097-.02A.181.181 0 0 1 0 21.393V2.564c0-.076.04-.134.096-.15h16.242c.04 0 .096.017.115.034v.016zM1.818 19.573c0 .072.038.135.096.152h12.643c.058-.019.096-.076.096-.154V4.402c0-.073-.039-.134-.098-.15H1.915c-.056.02-.096.073-.096.15l-.003 15.17zm5.174-8.375c.65 0 1.014.177 1.396.62c.058.074.153.093.23.034l1.034-.92c.075-.044.058-.164.02-.224c-.635-.764-1.554-1.244-2.74-1.244c-1.59 0-2.79.795-3.255 2.206c-.165.495-.24 1.126-.24 1.98c0 .854.075 1.483.255 1.98c.465 1.425 1.665 2.204 3.255 2.204c1.2 0 2.115-.48 2.745-1.216c.045-.074.06-.165-.015-.226l-1.037-.915c-.073-.047-.163-.047-.224.027c-.39.45-.795.69-1.454.69c-.706 0-1.245-.345-1.47-1.035c-.136-.39-.166-.87-.166-1.483c0-.615.045-1.068.18-1.47c.24-.66.766-1.008 1.486-1.008z"/></svg></div>
            <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#000000" d="M23 21.648L12 2.352L1 21.648zm-3.442-2H4.442L12 6.39z"/></svg></div>
            <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256"><path fill="#F1511B" d="M121.666 121.666H0V0h121.666z"/><path fill="#80CC28" d="M256 121.666H134.335V0H256z"/><path fill="#00ADEF" d="M121.663 256.002H0V134.336h121.663z"/><path fill="#FBBC09" d="M256 256.002H134.335V134.336H256z"/></svg></div>
            <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1792 1792"><path fill="#000000" d="M1792 336v1120q0 139-98.5 237.5T1456 1792H336q-139 0-237.5-98.5T0 1456V336Q0 197 98.5 98.5T336 0h1120q139 0 237.5 98.5T1792 336zm-896 779q39 0 77-55l222-312v671q0 31 21.5 52.5t52.5 21.5h149q31 0 53-21.5t22-52.5V373q0-31-22-52.5t-53-21.5h-149q-13 0-24.5 2t-20 4.5t-17.5 8.5t-14 9t-12.5 11t-10 11t-9.5 12t-8 10L896 729L639 367q-1-1-8-10t-9.5-12t-10-11t-12.5-11t-14-9t-17.5-8.5t-20-4.5t-24.5-2H374q-31 0-53 21.5T299 373v1046q0 31 22 52.5t53 21.5h149q31 0 52.5-21.5T597 1419V748l222 312q38 55 77 55z"/></svg></div>
            </div>

            <p className="texto-final">
            Node.js is proudly supported by the partners above and <span>more.</span>
            </p>

      </div>
    


    )
}

export default Tarjeta1