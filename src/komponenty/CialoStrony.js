import React, {useState} from "react";
import classes from './CialoStrony.module.css';
import {Button, Grid} from "@mui/material";

const lista = [
    {
        "id": 1,
        "imie": "Mis",
        "nazwisko": "Koala",
        "dataUrodzenia": "2018-01-01",
        "adres": "Gdansk"
    },
    {
        "id": 2,
        "imie": "Mis",
        "nazwisko": "Panda",
        "dataUrodzenia": "2019-01-01",
        "adres": "Gdansk"
    },
    {
        "id": 3,
        "imie": "Mis",
        "nazwisko": "Paddington",
        "dataUrodzenia": "2000-01-01",
        "adres": "Londyn"
    }
]

function CialoStrony() {
    const [listaObiektow, setListaObiektow] = useState(lista);

    function usunElementZListy(identyfikatorDoUsuniecia){
        console.log("Usuwamy " + identyfikatorDoUsuniecia) // to taki sout
        for (let i = 0; i < listaObiektow.length ; i++) {
            // let == pozwol == zmienna
            // var == variable == zmienna
            let obiekt = listaObiektow[i];

            if(obiekt.id === identyfikatorDoUsuniecia){
                // usun z listy 1 element na indeksie i
                listaObiektow.splice(i,1);
            }
        }
        console.log(listaObiektow);
        setListaObiektow([...listaObiektow]);
    }




    return (<div className={classes.ElementGlowny}>
        <Grid container className={classes.TabelaGrid}>
            <Grid container> {/*Naglowek tabeli*/}
                <Grid className={classes.NaglowekTabeli} item xs={1}>Lp.</Grid>
                <Grid className={classes.NaglowekTabeli} item xs={2}>Imie</Grid>
                <Grid className={classes.NaglowekTabeli} item xs={2}>Nazwisko</Grid>
                <Grid className={classes.NaglowekTabeli} item xs={3}>Data urodzenia</Grid>
                <Grid className={classes.NaglowekTabeli} item xs={2}>Adres</Grid>
                <Grid className={classes.NaglowekTabeli} item xs={2}></Grid>
            </Grid>
            <Grid container className={classes.WierszeTabeli}>{/* kontener do wierszy -> wewnatrz sa wiersze*/}
                {
                    // mapuj czyli zamień
                    listaObiektow.map((elementListy) => {
                        return (<Grid container className={classes.KomorkaTabeli}> {/*Pojedynczy wiersz*/}
                            <Grid item xs={1}>{elementListy.id}</Grid>
                            <Grid item xs={2}>{elementListy.imie}</Grid>
                            <Grid item xs={2}>{elementListy.nazwisko}</Grid>
                            <Grid item xs={3}>{elementListy.dataUrodzenia}</Grid>
                            <Grid item xs={2}>{elementListy.adres}</Grid>
                            <Grid item xs={2}><Button onClick={() => usunElementZListy(elementListy.id)}variant="outlined">Usun</Button></Grid>
                        </Grid>);
                    })
                }
            </Grid>
        </Grid>

    </div>);
}

export default CialoStrony;