import './MenuState.css';
import CurrentWindowProvider, { CurrentWindowContext } from '../../context/currentwindow';
import { useContext } from 'react';

export default function MenuState(){
    const context =  useContext(CurrentWindowContext);
    return(
        <div className="MenuState">
            {context?.component}
        </div>
    );
}