import React from 'react';

function Page404() {
    return(
        <div>
            <h1>Page404</h1>
            {/* Din Login Am vrea sa ajungem cu un click in Register sau in Home => avem nevoie de componenta Link!*/}
            {/* Link este echivalentul unui tag de tip "a", doar ca acesta nu va reincarca pagina catre care directioneaza */}
            {/* In atributul "to" punem ruta catre care vrem sa navigam. */}
        </div>
    );
}

export default Page404;