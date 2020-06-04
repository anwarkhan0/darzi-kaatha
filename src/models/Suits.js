import axios from 'axios';
import {insertLoader, removeLoader} from '../views/utils/loader';

export class Suits{

    async getSuits(){
        let req = await axios.get('https://darzi-65211.firebaseio.com/suits.json');
        this.result = req.data;
        
    }

    addNewSuits(data){
        axios.post('https://darzi-65211.firebaseio.com/suits.json', data)
        .then((res)=>{
            alert('Successfully Added')
        })
        .catch( err => {
            alert('Operation Not Completed! Please Try Again')
        });
    }

    updateSuit(id, suit){
        
        axios.patch('https://darzi-65211.firebaseio.com/suits/' + id + '/.json', {
            ...suit
        })
        .then(response => {
            alert('changes saved');
        })
        .catch(err => {
            alert('Operation Not Completed! Please Try Again')
            console.log(err);
        });

    }

    deleteSuit(id){
        
        axios.delete('https://darzi-65211.firebaseio.com/suits/' + id + '.json')
        .then(response => {

        })
        .catch(err => {
            alert('Operation Not Completed! Please Try Again')
            console.log(err);
        });

    }

}