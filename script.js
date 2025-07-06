

const btn = document.getElementById('button');
const blockCard = document.getElementById('block');
const floorCard = document.getElementById('floor');

btn.addEventListener('click' , async event => {

    const roomNumber = document.getElementById('room-number').value;

    const data = await getRoom(roomNumber);
    displayData(data[0] , data[1]);


})



async function getRoom(roomNumber){

    try{
       const responses = await fetch('room.json'); 

       const data = await responses.json();
       return data[roomNumber];

    }catch(err){

        console.log(err);
        return err;
    }

    
}

function displayData(floor , block){

    blockCard.innerHTML = "";
    floorCard.innerHTML = "";

    const floorNumber = document.createElement('p');
    const blockNumber = document.createElement('p');

    floorNumber.textContent =  `Floor ${floor}`;
    blockNumber.textContent =  `Block ${block}`;

    blockCard.style.display = "block";
    floorCard.style.display = "block";

    blockCard.appendChild(blockNumber);
    floorCard.appendChild(floorNumber);

}