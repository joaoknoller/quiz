import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
    key: any;
    duracao: number;
    tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={[
                    '#BCE596',
                    '#F7B801',
                    '#ED827A',
                    '#ED827A'
                ]}
                colorsTime={[
                    props.duracao,
                    (props.duracao * .7),
                    (props.duracao * .3),
                    0
                ]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}