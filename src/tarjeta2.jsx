import React from "react"
import './tarjeta2.css'

function Tarjeta2() {

    return (
        <div className="tarjeta">
            <div className="tabs">
                <span className="tab">Write Tests</span>
                <span className="tab active">Read and Hash a File</span>
                <span className="tab">Streams Pipeline</span>
                <span className="tab">Work with Threads</span>
            </div>

            <div className="code-box">
                <p>
                    // crypto.mjs
                    import  createHash  from 'node:crypto';
                    import  readFile  from 'node:fs/promises';
                    const hasher = createHash('sha1');
                    hasher.setEncoding('hex');
                    // ensure you have a `package.json` file for this test!
                    hasher.write(await readFile('package.json'));
                    hasher.end();
                    const fileHash = hasher.read();
                    // run with `node crypto.mjs`

                </p>
            </div>

            <div className="abajo">
                <span className="lang">JavaScript</span>
                <button className="copy-btn">Copiar al portapapeles</button>
            </div>

            <p className="info">
                Learn more what Node.js is able to offer with our{" "}
                <span className="green">Learning materials.</span>
            </p>
        </div>
    )
}

export default Tarjeta2