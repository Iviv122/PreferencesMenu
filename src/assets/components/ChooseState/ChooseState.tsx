import { useContext } from 'react';
import './ChooseState.css';
import CurrentWindowProvider, { CurrentWindowContext } from '../../context/currentwindow';
import Account from '../MenuState/Account/Account';
import Password from '../MenuState/Password/Password';
import Preferences from '../MenuState/Preferences/Preferences';

export default function ChooseState(){
    const context = useContext(CurrentWindowContext);
    const changeComponent = (Element : JSX.Element) => {context?.setComponent(Element)}; 

    return(
        <div className='ChooseState'>
            <button onClick={()=>{
                changeComponent(<Account/>)
                }}
                >Account</button>
            <button onClick={()=>{
                changeComponent(<Password/>);
                }}>Password</button>
            <button onClick={()=>{
                changeComponent(<Preferences/>);
                }}  
            >Preferences</button>
        </div>
    );
}