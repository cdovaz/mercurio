import styles from './home.module.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    }
    return (
        <div>
            <div className={styles.navBar}>
                <img src="src/assets/MenuMercurio.svg" alt="Menu" />
                <p className={styles.navText}>| MENU</p>
                <img src="src/assets/LogoSVG.svg" width="90px" height="70px" />
            </div>
            <div className={styles.backgroundDiv1}>
                <h1 className={styles.headerDiv1}>Monitoração de  Mercúrio nos rios da Amazonia.</h1>
                <button onClick={handleClick} className={styles.buttonDiv1}>ACESSAR</button>

            </div>
            <div className={styles.backgroundDiv2}>
                <div className={styles.backgroundSubDiv1}>
                    <div className={styles.explainSubDiv1}>
                        <h3 style={{ color: `rgba(32, 52, 14, 0.59)` }}>Sobre o Mapinguari</h3>
                        <h2 style={{ color: '#283826' }}>Bem-vindo ao Mapinguari</h2>
                        <p style={{ color: '#000' }}>Este site foi criado como parte de um projeto
                            destinado a detectar a presença de mercúrio
                            nos rios da Amazônia. Permitindo a monitoração dos
                            locais que contém a presença desse metal.</p>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundDiv3}>
                <div className={styles.backgroundSubDiv3}>
                    <img src="src/assets/indigena1.png" alt="indígena" />
                    <p className={styles.textSubDiv3}>Em 1993, os Yanomami foram vítimas de um massacre 
                        que ficou conhecido na justiça brasileira como o 
                        primeiro caso de genocídio a ser 
                        oficialmente reconhecido no País, o “massacre de Haximu”,
                         que vitimou 16 indígenas em decorrência de conflitos 
                         com garimpeiros ilegais invasores de suas terras.</p>
                </div>
                <div className={styles.backgroundSubDiv3}>
                    <img src="src/assets/indigena2.png" alt="indígena" />
                    <p className={styles.textSubDiv3}>Além da contaminação pelo mercúrio, 
                    o garimpo ilegal também está fortemente ligado ao aumento no desmatamento, 
                    à sedimentação dos rios, à grilagem de terras e ao aumento da violência no 
                    seu entorno.</p>
                </div>
                <div className={styles.backgroundSubDiv3}>
                    <img src="src/assets/indigena3.png" alt="indígena" />
                    <p className={styles.textSubDiv3}>Efeitos no Sistema Cardiovascular: 
                    Estudos mostraram que a exposição ao mercúrio está associada a distúrbios
                     cardiovasculares, incluindo pressão alta, ritmo cardíaco anormal e aumento
                      do risco de ataques cardíacos.</p>
                </div>
                <div className={styles.backgroundSubDiv3}>
                    <img src="src/assets/indigena4.png" alt="indígena" />
                    <p className={styles.textSubDiv3}>Como o mercúrio afeta a saúde, a 
                    intoxicação de pessoas por mercúrio pode ocorrer pela ingestão de 
                    alimentos contaminados (peixes com alta concentração de mercúrio, 
                    por exemplo).</p>
                </div>
            </div>
            <div className={styles.backgroundDiv4}>
                
            </div>
            <div className={styles.backgroundDiv5}>
                <div className={styles.backgroundSubDivComponent5}>
                    <img src="src/assets/RectangleEnd1.png" alt="" className={styles.SubDivImg} />
                    <p>O projeto representa uma iniciativa ambiental, 
                        onde um dos objetivos é a prevenção da prática do garimpo ilegal. 
                        Através da possivel identificação e monitoração em areas afetadas 
                        pela presença do mercúrio. </p>
                </div>
                <div className={styles.backgroundSubDivComponent5}>
                    <img src="src/assets/RectangleEnd2.png" alt="" className={styles.SubDivImg}/>
                    <p>A preservção da saúde ambiental é uma prioridade global, 
                        especialmete em regiões onde a contaminação por mercúrio 
                        nos rios é uma preocupação. O projeto vai garantir a melhora
                        da questão da saúde nesses ambientes.</p>
                </div>
                <div className={styles.backgroundSubDivComponent5}>
                    <img src="src/assets/RectangleEnd3.png" alt="" className={styles.SubDivImg} />
                    <p>Facilitar a localização de mercúrio nos rios é um passo crucial 
                        para proteger tanto os ecossistemas aquáticos quanto a saúde das
                         comunidades que dependem dessas águas. Portanto, o Mapinguari 
                         vai facilitar essa localização.</p>
                </div>
            </div>
            <div className={styles.backgroundDiv6}>
                <div>
                    <div style={{display: 'flex',marginLeft: '1vw'}}>
                        <img src="src/assets/LogoSVG.svg" alt="" />
                        <p>MAPINGUARI</p>
                    </div>
                    <div style={{ marginLeft: '3vw'}}>
                        <p>mapinguari.tcc@gmail.com</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

/** */