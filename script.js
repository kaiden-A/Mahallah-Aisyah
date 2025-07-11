

const btn = document.getElementById('button');
const blockCard = document.getElementById('block');
const floorCard = document.getElementById('floor');
const listCard = document.getElementById('list');
const teleCard = document.getElementById('tele');
const whatsappCard = document.getElementById('whatsapp');
const floorplanImg = document.getElementById('floorplan');

const urlSheets = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSYnEfYjV3bnunZk3rz20E9ovkS5fx9Rs9ybjJJkasdtk2VoB7C1GwJpYDpo6loDxlIxjOHchebFLET/pub?output=csv`;

btn.addEventListener('click' , async event => {

    const roomNumber = document.getElementById('room-number').value;

    const data = await getRoom(roomNumber);
    const link = await getSheets(urlSheets);
    const img = await getPicture(data.room[0]);

    displayRoomFloor(data.room[0] , data.room[1]);
    displayListRoom(data.listRoom , data.room[0] , data.room[1]);
    displayFloorPlan(img);
 
    const floor = Number(data.room[0]);
    displayLink(link , floor);


})


async function getSheets(urlSheets){

    try{

        const responses = await fetch(urlSheets);
        const text = await responses.text();

        //split the data in array but skip the header [tele aisyah , https]
        const rows = text.split('\n').slice(1);
        

        let data = []


        rows.forEach(row => {
            const [floor , link] = row.split(',').map(cell => cell.trim());

            if (!floor || !link || floor === '"') return;
            data.push({floor , link});
        })

        return data;

        
    }catch(err){
        console.error(err);
    }

}



async function getPicture(floor){

    if(floor === '1' || floor === '2'){
        return 'images/default.png';
    }

    const responses = await fetch('floorplan.json');

    if(!responses){
        throw new Error("data cannot be fetch")
    }

    const data = await responses.json();

    return data[floor];
}



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

       //console.log(listRoom);


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

    floorNumber.textContent =  `Level ${floor}`;
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

    head.innerText = `Rooms in Level ${floor} Block ${block}`;
    list.innerText = listText;

    listCard.style.display = "block";

    listCard.appendChild(head);
    listCard.appendChild(list);

}

function displayLink(data, floor){

    teleCard.style.display = 'block';
    whatsappCard.style.display = 'block';

    teleCard.innerHTML = `<p>You are invited to join group <a href=${data[0].link} target="_blank">telegram aisyah</a></p>`;
    whatsappCard.innerHTML = `<p>You are a member of Hisbah ${data[floor].floor} please join <a href=${data[floor].link} target="_blank" >Our Whatsapp Group</a></p>`

}

function getList(listRoom){
    return listRoom.map(list => list.room).join(',');
}

function displayFloorPlan(images){

    floorplanImg.innerHTML = "";
    floorplanImg.src = images;

}
