import {fetchUserProfile} from './BattleApi'

fetchUserProfile('nkovlev')
  .then(data => console.log(data))


function Battle() {
    return ( 
        <div className="column">
            <input type="text" placeholder="GitHub №1" />
            <input type="text" placeholder="GitHub №2"/>
            <button className="button">Battle</button>
        </div> 
        
    );
}

export default Battle;