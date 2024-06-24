/**
 * 
 * foiDetectado: false
 * Quantidade: 0
 * Data: 11/06/2024
*/

export function FoundedOre({IsDetected, Quantity, Date, style2} : {IsDetected: boolean, Quantity: string, Date: string, style2: any}) {
    if(IsDetected){
        console.log("Teste")
    }
    return (
            <div className={style2}>
                <div>
                    <img src="src/assets/DadosColetadosImagem.svg" alt="" />
                    <p>Quantidade: {Quantity}</p>
                </div>
                <div>
                    <p> {Date}</p>
                    <img src="src/assets/check.svg" alt="" />
                </div>
            </div>
    )
}