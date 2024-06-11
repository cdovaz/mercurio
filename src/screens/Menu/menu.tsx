import styles from './menu.module.css'

export default function Menu() {

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
                    <div style={{display: 'flex'}}>
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
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div className={styles.componentRecent}>
                            <img src="src/assets/DadosColetadosImagem.svg" alt="" />
                            <div style={{marginLeft: '1vw'}}>Dados Coletados</div>
                            <div style={{marginLeft: '6vw'}}> 13/10/2006 00:00</div>
                            <img src="src/assets/check.svg" alt="" />
                        </div>
                        <div className={styles.componentRecent}>
                            <img src="src/assets/DadosColetadosImagem.svg" alt="" />
                            <div style={{marginLeft: '1vw'}}>Dados Coletados</div>
                            <div style={{marginLeft: '6vw'}}> 13/10/2006 00:00</div>
                            <img src="src/assets/check.svg" alt="" />
                        </div>
                        <div className={styles.componentRecent}>
                            <img src="src/assets/DadosColetadosImagem.svg" alt="" />
                            <div style={{marginLeft: '1vw'}}>Dados Coletados</div>
                            <div style={{marginLeft: '6vw'}}> 13/10/2006 00:00</div>
                            <img src="src/assets/check.svg" alt="" />
                        </div>
                        <div className={styles.componentRecent}>
                            <img src="src/assets/DadosColetadosImagem.svg" alt="" />
                            <div style={{marginLeft: '1vw'}}>Dados Coletados</div>
                            <div style={{marginLeft: '6vw'}}> 13/10/2006 00:00</div>
                            <img src="src/assets/check.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}