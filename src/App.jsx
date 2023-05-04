import 'normalize.css';
import './App.css';

import { useState } from 'react';

import Phrase from './Phrase';

function App() {
    const [background, setBackground] = useState('');

    return (
        <div className="app" style={{ background: background }}>
            <h1>Fortune cookies</h1>

            <Phrase setterBackground={setBackground} />
        </div>
    );
}

export default App;
