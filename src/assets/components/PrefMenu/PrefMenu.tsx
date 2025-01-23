import ChooseState from '../ChooseState/ChooseState';
import MenuState from '../MenuState/MenuState';
import './PrefMenu.css' ;

export default function PrefMenu(){
    return(
    <div className="PrefMenu">
    
        <p className='Title'>Preferences Menu</p>
        <ChooseState/>
        <MenuState/>
    </div>
    );
}