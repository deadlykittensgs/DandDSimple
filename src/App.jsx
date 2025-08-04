import React  from 'react'
import { useState, useEffect } from 'react'


export default function App() {


const [showPopup, setShowPopup] = useState(false); // for changing fields with custom values 
const [showPopupScroll, setShowPopupScroll] = useState(false); // for changing fields with defined values 
const [currentlyEditing, setCurrentlyEditing] = useState(null);  // for setting what is being edited in the pop up 
// const [rolled, setRolled] = useState(null);
const [lock, setLock] = useState(true)
// const [count, setCount] = useState(0);

// options for defined values 
    const classTypes = ["Barbarian","Bard","Cleric","Druid", "Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard","Artificer", "Blood Hunter","-Other-"];
    const levelOptions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const racesOf = [ "Dragonborn","Dwarf","Elf","Gnome","Half-Elf", "Halfling", "Half-Orc","Human", "Tiefling", "Aarakocra","Genasi","Goliath","Aasimar","Bugbear","Firbolg","Goblin", "Hobgoblin", "Kenku", "Kobold", "Lizardfolk", "Orc", "Tabaxi","Triton","Yuan-ti Pureblood","Gith", "Eladrin", "Shadar-Kai", "Changeling", "Kalashtar","Orc of Eberron","Shifter","Warforged", "Centaur", "Minotaur", "Satyr","Triton of Theros","Pallid Elf", "Sea Elf", "Tortle","Dhampir", "Hexblood", "Reborn","Centaur of Ravnica","Loxodon","Simic Hybrid","Vedalken","Fairy","Harengon","Owlin","Verdan","Grung", "Automaton", "Eidolon", "Soulless", "Tiefling Variant", "Aetherborn","Khenra", "Naga", "Reborn"];
    const danddsize =["Tiny","small","Medium","Large","Huge",]
    const danddAlignment =["LG","NG","CG","LN","N","CN","LE","NE","CE"]    
    const backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin", "Cloistered Scholar", "Courtier", "Faction Agent", "Far Traveler", "Gladiator", "Haunted One", "Investigator", "Knight", "Mercenary Veteran", "Urban Bounty Hunter", "Pirate", "Smuggler", "Waterdhavian Noble", "Anthropologist", "Archaeologist", "City Watch", "Clan Crafter", "Uthgardt Tribe Member"];



 // Player total data 
const [playerData, setPlayerData] = useState(() => {
  const saved = localStorage.getItem('playerData'); //Load saved data once on component mount
  return saved ? JSON.parse(saved) : {
    name: 'Default',
    lvl: 1,
    roll: 0,
    race: 'elf', 
    classType: 'bard',
    hp: 10,
    hpLeft: 10,
    speed: 30,
    ac: 13,
    strTotal: '+1',
    dexTotal: '+1',
    conTotal: '+1',
    intTotal: '+1',
    wisTotal: '+1',
    chaTotal: '+1',
    strTotalNumber: 10,
    dexTotalNumber: 15,
    conTotalNumber: 14,
    intTotalNumber: 16,
    wisTotalNumber: 12,
    chaTotalNumber: 8,
    gold: 50,
    playerName: 'yourName',
    background: 'folk Hero',
    size: 'medium',
    alignment: 'NG',
    initiative: '+3',
    deathSaves: 0,
    actions: [
      { id: 100, action: 'Swing Sword', description: 'Swing a sword for x dmg' },
      { id: 200, action: 'Swing ax', description: 'Swing an ax for x dmg' },
      { id: 300, action: 'Shoot Bow', description: 'Shoot bow for x dmg' },
    ],
    savingThrows: [0, 0, 0, 0, 0, 0],
    SelectedSavingThrows: ['yes', 'no', 'no', 'no', 'no', 'no'],
    skills: Array(18).fill(0),
    selectedSkills: ['yes', ...Array(17).fill('no')],
    toolProficiencie: ['tool 1', 'tool 2', 'tool 3'],
    abilities: [
      { id: 400, action: 'dark Vision', description: 'see in the dark 60 ft' },
      { id: 500, action: 'trance', description: 'sleep shorter' },
      { id: 600, action: 'Fay Ancestory', description: 'Resist charms' },
    ],
    inventory: ['thing 1', 'thing 2', 'thing 3'],
    notes: ['note 1', 'note 2', 'note 3'],
    languages: ['language 1', 'language 2', 'language 3'],
    note: ["note one", "Note two"],
  };
});


// Do I want everything defined here or do i want it all defined in the Json? 
let skills = playerData.skills
let classType = playerData.classType
let lvl = playerData.lvl
let background = playerData.background
let dexTotal = playerData.dexTotal
let dexTotalNumber = 0
let conTotal = 0
let conTotalNumber = 0
let intTotal = 0
let intTotalNumber = 0
let wisTotal = playerData.wisTotal
let wisTotalNumber = 0
let charTotal = 0
let chaTotal = 0;
let chaTotalNumber = 0;
let ac = 0;
let initiative = 0;
let speed = 0;
let hpLeft = 0;
let hp = 0;
let deathSaves = 0;
let roll = 0;
let strTotal = 0;
let profBonus = 0;
let actions = 0;
let toolProficiencie = 0;
let languages = 0;
let notes = 0;
let listItems = 0;
let name = 0;
let race = 0;
let itemList = 0;
let savingThrows = 0

   


// Functions -----------------------------------


// pop up to add details 
const togglePopup = (field = null) => {
  setCurrentlyEditing(field);
  setShowPopup(prev => !prev);
};
// Pop up for defined data 
const togglePopupScroll = (field = null) => {
  setCurrentlyEditing(field);
  setShowPopupScroll(prev => !prev);
};


// update player level  
const changeLevel = (num) => {
  setPlayerData((prev) => {
    if (prev.lvl >= 20 && num === 1) {
      return prev; // don't increase above 20
    }
    if (prev.lvl <= 1 && num === -1) {
      return prev; // don't decrease below 1
    }

    return {
      ...prev,
      lvl: prev.lvl + num
    };
  });
};







  // Save to localStorage whenever playerData changes
  useEffect(() => {
    localStorage.setItem('playerData', JSON.stringify(playerData));
  }, [playerData]);






// --------


function incrementFirstNumber(arr, place, times) {

if (lock === false) {
  // Increment the first number `times` times
  arr[place] += times;
 
  setPlayerData({...playerData, place: arr  })
  // Return the modified array
  console.log(playerData)
  return arr;
} else {
  return
}
}


const rollTheDice = (max) => {
  let roll =  Math.floor(Math.random() * max) + 1
  setPlayerData({...playerData, roll:(roll)})
}


function savingThrowEdit(arr, place, value) {
  setPlayerData({...playerData, place: arr  })
  // Return the modified array
  console.log(playerData)
  // saveChanges()
  // {incrementFirstNumber(savingThrows, 0, 1)}} 
}

  return (
    <div className='flex bg-slate-200/60 w-full h-fit'> 


    // {/* Pop Up ------------------------------ */}
//   {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-[300px] text-center">
            <h2 className="text-xl font-bold mb-4">Select value</h2>
           <input
  value={playerData[currentlyEditing] || ''}
  onChange={(e) =>
    setPlayerData((prev) => ({ ...prev, [currentlyEditing]: e.target.value }))
  }
  type="text"
  className="bg-slate-200 rounded p-1"
/>
           <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}

{/* Pop Up Scroll ------------------------------ */}
  {showPopupScroll && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-[300px] text-center">
            <h2 className="text-xl font-bold mb-4">Select value</h2>
<select
  value={playerData[currentlyEditing] || ''}
  onChange={(e) =>
    setPlayerData((prev) => ({ ...prev, [currentlyEditing]: e.target.value }))
  }
  className="bg-slate-200 rounded p-1"
>
  <option value="">Select an option</option>
  {classTypes.map((option, idx) => (
    <option key={idx} value={option}>
      {option}
    </option>
  ))}
</select>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={togglePopupScroll}>
              Close
            </button>
          </div>
        </div>
      )}

{/* player name  */}
<div className='flex flex-col w-full'>
 <div className='flex justify-between items-center text-center bg-white w-full h-[50px] p-3'>
   <button onClick={ () => {togglePopup("name")}} className='bg-slate-300 p-1 rounded'>Name</button> <h1 className='text-[1.3rem] italic ' >{playerData.name}</h1> <button className='bg-slate-300 p-1 rounded' onClick={() => {togglePopup("name")}}>Edit</button>
 </div>



{/* class and race info  */}
<div className="bg-slate-200 w-full flex flex-col px-2 py-2">
  <div className="flex">
    
    {/* Left Column: Class & Race */}
    <div className="flex flex-col flex-1">
      <div className="flex justify-between pr-4">
        {classType}
        <button 
          onClick={() => togglePopupScroll("classType")} 
          className="bg-blue-300 p-1 text-[7px] rounded-full">
          e
        </button>
      </div>
      <div className="flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]">
        Class
      </div>

      <div>
        <div className="flex justify-between pr-4">
          {playerData.race}
          <button 
            onClick={() => togglePopupScroll("race")} 
            className="bg-blue-300 p-1 text-[7px] rounded-full">
            e
          </button>
        </div>
        <div className="flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]">
          Race
        </div>
      </div>
    </div>

    {/* Middle Column: Level & Size */}
    <div className="flex flex-col flex-1">
      <div className="flex justify-between pr-4">
        {lvl}
        <div>
          <button 
            onClick={() => changeLevel(1)} 
            className="bg-red-300"
          >
            up
          </button>
          <button 
            onClick={() => changeLevel(-1)} 
            className="bg-green-300"
          >
            down
          </button>
        </div>
      </div>
      <div className="flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]">
        lvl
      </div>

      <div>
        <div className="flex justify-between pr-4">
          {playerData.size}
          <button 
            onClick={() => togglePopupScroll("sizeChoice")}  
            className="bg-slate-400 p-1 text-[7px] rounded-full"
          >
            e
          </button>
        </div>
        <div className="flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]">
          Size
        </div>
      </div>
    </div>

    {/* Right Column: Background & Alignment */}
    <div className="flex flex-col flex-1">
      <div>
        <div className="flex justify-between pr-4">
          {background}
          <button 
            onClick={() => togglePopupScroll("backgrounds")}  
            className="bg-slate-400 p-1 text-[7px] rounded-full"
          >
            e
          </button>
        </div>
        <div className="flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]">
          Background
        </div>
      </div>

      <div>
        <div className="flex justify-between pr-4">
          {playerData.alignment}
          <button 
            onClick={() => togglePopupScroll("alignment")}  
            className="bg-slate-400 p-1 text-[7px] rounded-full"
          >
            e
          </button>
        </div>
        <div className="flex-1 border border-black border-l-transparent border-r-transparent border-b-transparent italic text-[.8rem]">
          Alignment
        </div>
      </div>
    </div>

  </div>
</div>


 {/* stats info  */}
     <div className='bg-sky-300/80 min-h-[170px] w-full flex flex-col ' >
      
      <div className='flex justify-evenly items-center flex-1'>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Strength</div>
        <div onClick={() => {rollTheDice(playerData.strTotal)}} className=' h-[24px]  bg-sky-200' >{playerData.strTotal}</div>
        <div className='bg-sky-500 rounded-full'>{playerData.strTotalNumber}</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Dexterity</div>
        <div onClick={() => {rollTheDice(dexTotal)}} className=' h-[24px]  bg-sky-200' >{dexTotal}</div>
        <div className='bg-sky-500 rounded-full'>{dexTotalNumber}</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Constitution</div>
        <div onClick={() => {rollTheDice(conTotal)}} className='h-[24px] bg-sky-200' >{playerData.conTotal}</div>
        <div className='bg-sky-500 rounded-full'>{playerData.conTotalNumber}</div>
      </div>
      </div>
    
  <div className='flex justify-evenly items-center flex-1'>  
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.5rem]' >Intelligence</div>
        <div onClick={() => {rollTheDice(intTotal)}} className=' h-[24px]  bg-sky-200' >{playerData.intTotal}</div>
        <div className='bg-sky-500 rounded-full'>{playerData.intTotalNumber}</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Wisdom</div>
        <div onClick={() => {rollTheDice(playerData.wisTotal)}} className=' h-[24px]  bg-sky-200' >{playerData.wisTotal}</div>
        <div className='bg-sky-500 rounded-full'>{playerData.wisTotalNumber}</div>
      </div>
    
      <div className='text-center bg-slate-200 h-fit w-[60px] rounded p-1'>
        <div className='font-bold text-[.7rem]' >Charisma</div>
        <div onClick={() => {rollTheDice(playerData.chaTotal)}} className=' h-[24px]  bg-sky-200' >{playerData.chaTotal}</div>
        <div className='bg-sky-500 rounded-full'>{playerData.chaTotalNumber}</div>
      </div>
      </div>
</div>
{/* box 3  */}
<div className='bg-slate-200 w-full h-[200px] flex flex-wrap justify-evenly items-center'>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
    <p>{playerData.ac}</p>
    <p>Armor Class</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
    <p>{playerData.initiative}</p>
    <p>Initiative</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
    <p>{playerData.speed}</p>
    <p>Speed</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
   <div className='flex'>
     <p>{playerData.hpLeft}</p>
    <p>/</p>
    <p>{playerData.hp}</p>
    </div>
    <p>Hp</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center rounded' >
    <p>?</p>
    <p>Hit Dice</p>
</div>
<div className='bg-slate-400 flex flex-col h-[80px] w-[80px] justify-center items-center text-center' >
    <p>{playerData.deathSaves}</p>
    <p>Death Saves</p>
</div>
</div>

<div className='flex w-full justify-center items-center h-[80px] bg-slate-500'>
   <div className='flex flex-1 justify-evenly'>
   <button onClick={() => {rollTheDice(4)}} >d4</button>
    <button onClick={() => {rollTheDice(6)}}>d6</button>
    <button onClick={() => {rollTheDice(8)}}>d8</button>
   </div>
    <div className='bg-gradient-to-r from-slate-500 to-slate-800 border border-black border-2 font-bold rounded-full h-[60px] w-[60px] flex justify-center items-center text-white'>{playerData.roll}</div>
   <div  className='flex flex-1 justify-evenly' >
   <button onClick={() => {rollTheDice(10)}}>d10</button>
    <button onClick={() => {rollTheDice(12)}}>d12</button>
    <button onClick={() => {rollTheDice(20)}}>d20</button>
   </div>
</div>

<div className='justify-center flex  flex-col bg-sky-200/80'>
<div className='flex bg-slate-400 justify-center'><h3>Actions</h3></div>
<div className='flex flex-col h-fit'>
{/* <div>
      {playerData.actions.map((item) => (
        <ListItem playerData={playerData} id={item.id} key={item.action} name={item.action} description={item.description} />
      ))}
    </div> */}

      </div>
</div>



<div className='bg-slate-300/80 flex flex-col'>
 <div className='justify-between flex items-center'>
 <p className='text-[.7rem] p-2 text-center italic w-[100px] flex-wrap' >Proficiencies bonus +2</p>
 <h2 className='text-[1.2rem]'>Proficiencies</h2>
 <button onClick={()=> {setLock(!lock)}} className='w-[100px] h-full '>{lock ? (<i className="fa-solid fa-lock text-red-700"></i>):(<i className="fa-solid fa-lock-open text-green-700"></i>)}</button>

</div>

<div>
    <div className='flex bg-slate-400 justify-center'><h3>Saving Throws</h3></div>
  
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '>  {savingThrows[0] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[0]}</div><p>Strength</p>    </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 0, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 0, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'> {savingThrows[1] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[1]}</div><p>Dexterity</p>    </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 1, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 1, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '> {savingThrows[2] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[2]}</div><p>Constitution</p></div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 2, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 2, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button>  </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '> {savingThrows[3] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[3]}</div><p>Inelegance</p>  </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows,3, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 3, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '> {savingThrows[4] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[4]}</div><p>Wisdom</p>      </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 4, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 4, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex '> {savingThrows[5] >= 0 ? (<p>+</p>) : (<p></p>)} {savingThrows[5]}</div><p>Charisma</p>    </div> <div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(savingThrows, 5, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(savingThrows, 5, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
</div>

<div> 
<div className='flex bg-slate-400 justify-center'><h3>Skills</h3></div>
    <div className='flex text-center justify-between'>  <div className='flex'><div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[0] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[0]}</div><p>Acrobatics(Dex)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 0, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 0, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div> </div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[1] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[1]}</div><p>Animal Handling (Wis)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 1, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 1, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[2] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[2]}</div><p>Arcana(Int)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 2, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 2, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[3] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[3]}</div><p>Athletics(Str)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 3, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills,3, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[4] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[4]}</div><p>Deception(Cha)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 4, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 4, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[5] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[5]}</div><p>History(Int) </p>  </div>  <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 5, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 5, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[6] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[6]}</div><p>Insight(Wis)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 6, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 6, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[7] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[7]}</div><p>Intimidation(Cha)</p> </div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 7, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 7, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[8] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[8]}</div><p>Investigation(Int)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 8, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 8, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[9] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[9]}</div><p>Medicine(Wis)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 9, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 9, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[10] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[10]}</div><p>Nature(Int)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 10, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 10, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[11] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[11]}</div><p>Perception(Wis)</p> </div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 11, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 11, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[12] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[12]}</div><p>Performance(Cha)</p></div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 12, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 12, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2 flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[13] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[13]}</div><p>Persuasion(Cha)</p></div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 13, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 13, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[14] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[14]}</div><p>Religion(Int)</p></div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 14, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 14, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[15] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[15]}</div><p>Slight Of Hand(Dex)</p></div><div className='bg-sky-300 flex  items-center'> <button onClick={() => {incrementFirstNumber(skills, 15, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 15, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[16] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[16]}</div><p>Stealth(Dex)</p></div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 16, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 16, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>
    <div className='flex text-center justify-between'> <div className='flex' ><div className=' border border-slate-500 border-2  flex items-center justify-center h-[30px] w-[30px] rounded-full'></div> <div className='mx-3 underline flex'>{skills[17] >= 0 ? (<p>+</p>) : (<p></p>)} {skills[17]}</div><p>Survival(Wis)</p></div> <div className='bg-sky-300 flex  items-center'><button onClick={() => {incrementFirstNumber(skills, 17, 1)}} className='ml-2 bg-green-300 rounded-full h-6 w-6' >+</button> <button onClick={() => {incrementFirstNumber(skills, 17, -1)}} className='ml-2 bg-red-300 rounded-full h-6 w-6' >-</button> </div></div>


</div>

<div className='flex bg-slate-400 justify-center'><h3>Tool Proficiencies</h3></div>
<div>
{/* <div>
        {toolProficiencie.map((item, index) => (
          <ListItem key={index} description={item}></ListItem>
        ))}
      </div>
      <button onClick={() => {console.log(Item)}}> edit </button>

</div> */}

<div>
<div className='flex bg-slate-400 justify-center'><h3>Abilities</h3></div>
<div>
{/* {abilities.map((item) => (
        <ListItem  key={item.id} name={item.action} description={item.description} />
      ))} */}
</div>
</div>

<div className='justify-center flex  flex-col bg-sky-200/80'>
<div className='flex bg-slate-400 justify-center'><h3>Inventory</h3></div>
{/* <ul>
        {playerData.inventory.map((item, index) => (
          <li key={(index + 1000)}>{item}</li>
        ))}
      </ul> */}
</div>

<div className='flex bg-slate-400 justify-center'><h3>Notes</h3></div>
<div>
{/* <ul>
        {notes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <button onClick={() => {console.log(listItems)}}> edit </button>

</div>
<div className='flex bg-slate-400 justify-center'><h3>Languages</h3></div>
<div>
{/* <ul>
        {languages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <button onClick={() => {console.log(listItems)}}> edit </button>

</div>





</div>






</div>


</div>
</div> 
  )
}