import React, { useEffect, useState } from 'react';
import ColorBar from "../components/ColorBar.tsx";

export interface IHomePageProps { };

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
 const [colors, setColors] = useState<string[]>(["E6E6E6", "39393A", "3F84E5", "EF476F", "FFC43D"]);
    const [locks, setLocks] = useState<boolean[]>([false, false, false, false, false]);

    function handleClick() {
        let color1 = colors[0];
        let color2 = colors[1];
        let color3 = colors[2];
        let color4 = colors[3];
        let color5 = colors[4];

        if (!locks[0]) {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            color1 = n.slice(0, 6);
        }

        if (!locks[1]) {
            let o = (Math.random() * 0xfffff * 1000000).toString(16);
            color2 = o.slice(0, 6);
        }

        if (!locks[2]) {
            let p = (Math.random() * 0xfffff * 1000000).toString(16);
            color3 = p.slice(0, 6);
        }

        if (!locks[3]) {
            let p = (Math.random() * 0xfffff * 1000000).toString(16);
            color4 = p.slice(0, 6);
        }

        if (!locks[4]) {
            let p = (Math.random() * 0xfffff * 1000000).toString(16);
            color5 = p.slice(0, 6);
        }

        setColors([color1, color2, color3, color4, color5]);
    }

    const handleCopy = (i: number) => {
        navigator.clipboard.writeText(colors[i])
    }

    const handleLock = (i: number) => {
        let oldLocks = locks;

        console.log(i.toString());
        for (let index in locks) {
            console.log("index: " + index);
            if (i.toString() == index) {
                oldLocks[i] = !oldLocks[i];
                setLocks([...oldLocks]);
            } else {
                console.log("This is not locked: " + index);
            }
        }
    }

    return (
        <>
            <div className="homePage">
                <h1>Palette Generator</h1>
                <div className="colorsBin">
                    {
                        colors.map((c, i) =>
                            <div key={i}>
    
                                <ColorBar hex={c} isLocked={locks[i]} onLock={() => handleLock(i)} onCopy={() => handleCopy(i)}></ColorBar>
                            </div>
    
                        )
                    }
                </div>
                <button className="cust-btn" onClick={handleClick} >Generate</button>
            </div>
            
        </>
    )
};

export default HomePage;