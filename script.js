

const btn = document.getElementById('button');
const blockCard = document.getElementById('block');
const floorCard = document.getElementById('floor');
const listCard = document.getElementById('list');

btn.addEventListener('click' , async event => {

    const roomNumber = document.getElementById('room-number').value;

    const data = await getRoom(roomNumber);
    console.log(data);
    displayRoomFloor(data.room[0] , data.room[1]);
    displayListRoom(data.listRoom , data.room[0] , data.room[1]);


})



async function getRoom(roomNumber){

    try{

       const responses = await fetch('room.json'); 
       const datas = await responses.json();

       const listRoom = [];

       const floor = datas[roomNumber][0];
       const block = datas[roomNumber][1];

       Object.entries(datas).forEach(([key , value]) => {

            if(value[0] === floor && value[1] === block){
                listRoom.push({room: key , data: value});
            }
       })

       console.log(listRoom);


       return {room : datas[roomNumber] , listRoom : listRoom};

    }catch(err){

        console.log(err);
        return err;
    }

    
}

function displayRoomFloor(floor , block){

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

function displayListRoom(listRoom , floor , block){

    listCard.innerHTML = "";
    const head = document.createElement('p');
    const list = document.createElement('p');

    const listText = getList(listRoom);

    head.innerText = `Rooms in Floor ${floor} Block ${block}`;
    list.innerText = listText;

    listCard.style.display = "block";

    listCard.appendChild(head);
    listCard.appendChild(list);


}

function getList(listRoom){
    return listRoom.map(list => list.room).join(',');
}