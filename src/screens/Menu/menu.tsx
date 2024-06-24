import { useEffect, useState } from 'react';
import { FoundedOre } from '../../components/FoundedOre'
import styles from './menu.module.css'
import { getData } from '../../firebase/firebase';

export default function Menu() {
    var [isToShow, setIsToShow] = useState(false);
    var [data, setData] = useState([]);

    useEffect( () => {
        getData().then( (information : any) => { 
            setData(information)
            setIsToShow(true);
        })
    }, []);
    return (
        <div className={styles.mainDiv}>
            <div className={styles.navBar}>
                <div className={styles.navBarNovo}>
                    <img src="src/assets/iconeDeNovo.svg" alt="" />
                    <p>NOVO</p>
                </div>
                <div className={styles.navBarTittle}>
                    Dados Armazenados
                </div>
            </div>

            <div className={styles.div2}>
                <div className={styles.fastAccess}>
                    <h1>Acesso rápido</h1>
                    <div>
                        <div className={styles.folders}>
                            <img src="src/assets/PastaIcon.svg" alt="" />
                            <div>Dispositivo - 1</div>
                        </div>
                        <div className={styles.folders}>
                            <img src="src/assets/PastaIcon.svg" alt="" />
                            <div>Dispositivo - 2</div>
                        </div>
                        <div className={styles.folders}>
                            <img src="src/assets/PastaIcon.svg" alt="" />
                            <div>Dispositivo - 3</div>
                        </div>
                        <div className={styles.folders}>
                            <img src="src/assets/PastaIcon.svg" alt="" />
                            <div>Dispositivo - 4</div>
                        </div>
                    </div>
                </div>

                <div className={styles.favorites}>
                    <h1>Favoritos</h1>
                    <div>Depois de adicionar algum arquivo aos favoritos será mostrado aqui </div>
                </div>

                <div className={styles.recents}>
                    <h1>Recentes</h1>
                    <div>
                        
                        {
                            isToShow &&
                                data.map((data : any) =>(
                                <FoundedOre IsDetected={true} Quantity={data.Quantity} Date={data.Data} style2={styles.componentRecent}/> 
                                ))
                        }
                        </div>
                    </div>
                </div>
            </div>
    )
}