import React from 'react';

export interface ColorBarProps { hex: string; isLocked: boolean; onLock: any, onCopy: any };

const ColorBar: React.FunctionComponent<ColorBarProps> = props => {
    const { hex, isLocked, onLock, onCopy } = props;
    console.log("color: " + hex);
    return (
        <div className='colorBar' style={{ background: "#" + hex, color: 'white' }}>
            <p className="colorText">#{hex.toUpperCase()}</p>
            <a className="pointer" onClick={onCopy}><span className="material-symbols-outlined">
                content_copy
            </span></a>
            {isLocked && <a className="pointer" onClick={onLock}><span className="material-symbols-outlined">
                lock
            </span></a>}
            {!isLocked && <a className="pointer" onClick={onLock}><span className="material-symbols-outlined">
                lock_open_right
            </span></a>}
        </div>
    )
}

export default ColorBar;