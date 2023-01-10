import { Button } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

import soundfile from './assert/Betelgeuse.mp3';
function App() {
    const sound = useMemo(() => new Audio(soundfile), []);
    sound.volume = 0.2;
    const [play, setPlay] = useState(false);
    useEffect(() => {
        if (play) sound.play();
        if (!play) sound.pause();
    }, [play, sound]);

    return (
        <div className="App">
            <br />
            <br />
            <Button
                type="primary"
                onClick={() => {
                    setPlay(true);
                }}
                disabled={play}
            >
                play
            </Button>
            <br />
            <br />
            <br />
            <Button
                type="primary"
                onClick={() => {
                    setPlay(false);
                }}
                disabled={!play}
            >
                pause
            </Button>
        </div>
    );
}

export default App;
