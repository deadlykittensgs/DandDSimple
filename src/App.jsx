import React, { useState, useEffect } from 'react';
import './App.css';


function App() {


  // Date -----------------------------

const [showPopup, setShowPopup] = useState(false);
const [currentlyEditing, setCurrentlyEditing] = useState(null);


    // Load saved data once on component mount
const [playerData, setPlayerData] = useState(() => {
  const saved = localStorage.getItem('playerData');
  return saved ? JSON.parse(saved) : {
    name: 'Default',
    lvl: 0,
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
  };
});


// Functions -----------------------------------

// pop up to add details 
const togglePopup = (field = null) => {
  setCurrentlyEditing(field);
  setShowPopup(prev => !prev);
};


  // Save to localStorage whenever playerData changes
  useEffect(() => {
    localStorage.setItem('playerData', JSON.stringify(playerData));
  }, [playerData]);


  const closePopup = () => {
  setShowPopup(false);
};


  return (

    <div className="min-h-screen bg-slate-100 p-6">

{/* Pop Up ------------------------------ */}
  {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-[300px] text-center">
            <h2 className="text-xl font-bold mb-4">Select value</h2>
            {/* <input value={playerData.name} onChange={(e) => setPlayerData(prev => ({ ...prev, name: e.target.value}))}  type="text" className='bg-slate-200 rounded p-1' /> */}
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

{/* Main Body ------------------------- */}
      <header className='flex justify-evenly'> 
        <button className='bg-slate-400 rounded w-[50px] h-[40px]'>Reset</button>
         <h1 className="text-3xl font-bold text-center mb-6 text-slate-800">D&D Character Sheet</h1>
         <button className='bg-slate-400 rounded w-[50px] h-[40px]'>Lock</button>
      </header>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-slate-800 font-medium">
       
       
        <div className=" flex p-4 rounded bg-red-100 justify-between">
         <div className='w-[50%]'>
          <p>Name</p>
          <p>{playerData.name}</p>
          </div> 
          {/* <button onClick={togglePopup} className='bg-slate-100 p-1 '>change</button> */}
          <button onClick={() => togglePopup('name')} className='bg-slate-100 p-1 '>change</button>

        </div>

        <div className="flex p-4 rounded justify-between bg-orange-100">
          <div className='w-[50%]'>
            <p>Classname</p>
            <p>{playerData.classType}</p>
          </div>
          {/* <button onClick={togglePopup} className='bg-slate-100 p-1 '>change</button> */}

<button onClick={() => togglePopup('classType')} className='bg-slate-100 p-1 '>change</button>
        </div>



<div className="flex p-4 rounded justify-between bg-yellow-100">
  <div className="w-[50%]">
    <p>Level</p>
    <p>{playerData.lvl}</p>
  </div>
  <button onClick={() => togglePopup('lvl')} className="bg-slate-100 p-1">change</button>
</div>

<div className="flex p-4 rounded justify-between bg-lime-100">
  <div className="w-[50%]">
    <p>Race</p>
    <p>{playerData.race}</p>
  </div>
  <button onClick={() => togglePopup('race')} className="bg-slate-100 p-1">change</button>
</div>

<div className="flex p-4 rounded justify-between bg-green-100">
  <div className="w-[50%]">
    <p>Background</p>
    <p>{playerData.background}</p>
  </div>
  <button onClick={() => togglePopup('background')} className="bg-slate-100 p-1">change</button>
</div>

<div className="flex p-4 rounded justify-between bg-teal-100">
  <div className="w-[50%]">
    <p>Alignment</p>
    <p>{playerData.alignment}</p>
  </div>
  <button onClick={() => togglePopup('alignment')} className="bg-slate-100 p-1">change</button>
</div>

<div className="flex p-4 rounded justify-between bg-cyan-100">
  <div className="w-[50%]">
    <p>Experience Points</p>
    <p>{playerData.size}</p>
  </div>
  <button onClick={() => togglePopup('size')} className="bg-slate-100 p-1">change</button>
</div>


        {/* <div className="p-4 rounded bg-sky-100"><p>strength</p>{strength}</div>
        <div className="p-4 rounded bg-blue-100"><p>dexterity</p>{dexterity}</div>
        <div className="p-4 rounded bg-indigo-100"><p>constitution</p>{constitution}</div>
        <div className="p-4 rounded bg-violet-100"><p>intelligence</p>{intelligence}</div>
        <div className="p-4 rounded bg-purple-100"><p>wisdom</p>{wisdom}</div>
        <div className="p-4 rounded bg-pink-100"><p>charisma</p>{charisma}</div>

        <div className="p-4 rounded bg-rose-100"><p>strengthMod</p>{strengthMod}</div>
        <div className="p-4 rounded bg-red-200"><p>dexMod</p>{dexMod}</div>
        <div className="p-4 rounded bg-orange-200"><p>conMod</p>{conMod}</div>
        <div className="p-4 rounded bg-yellow-200"><p>intMod</p>{intMod}</div>
        <div className="p-4 rounded bg-lime-200"><p>wisMod</p>{wisMod}</div>
        <div className="p-4 rounded bg-green-200"><p>chaMod</p>{chaMod}</div>

        <div className="p-4 rounded bg-teal-200"><p>profBonus</p>{profBonus}</div>
        <div className="p-4 rounded bg-cyan-200"><p>savingThrows</p>{savingThrows}</div>
        <div className="p-4 rounded bg-sky-200"><p>skills</p>{skills}</div>
        <div className="p-4 rounded bg-blue-200"><p>armorClass</p>{armorClass}</div>
        <div className="p-4 rounded bg-indigo-200"><p>initiative</p>{initiative}</div>
        <div className="p-4 rounded bg-violet-200"><p>speed</p>{speed}</div>
        <div className="p-4 rounded bg-purple-200"><p>hitPointMax</p>{hitPointMax}</div>
        <div className="p-4 rounded bg-pink-200"><p>currentHP</p>{currentHP}</div>
        <div className="p-4 rounded bg-rose-200"><p>tempHP</p>{tempHP}</div>
        <div className="p-4 rounded bg-red-300"><p>hitDice</p>{hitDice}</div>
        <div className="p-4 rounded bg-orange-300"><p>deathSaves</p>{deathSaves}</div>

        <div className="p-4 rounded bg-yellow-300"><p>attacks</p>{attacks}</div>
        <div className="p-4 rounded bg-lime-300"><p>weapon1</p>{weapon1}</div>
        <div className="p-4 rounded bg-green-300"><p>weapon2</p>{weapon2}</div>
        <div className="p-4 rounded bg-teal-300"><p>weapon3</p>{weapon3}</div>

        <div className="p-4 rounded bg-cyan-300"><p>spellClass</p>{spellClass}</div>
        <div className="p-4 rounded bg-sky-300"><p>spellAbility</p>{spellAbility}</div>
        <div className="p-4 rounded bg-blue-300"><p>spellSaveDC</p>{spellSaveDC}</div>
        <div className="p-4 rounded bg-indigo-300"><p>spellAttackBonus</p>{spellAttackBonus}</div>
        <div className="p-4 rounded bg-violet-300"><p>cantrips</p>{cantrips}</div>
        <div className="p-4 rounded bg-purple-300"><p>lvl1</p>{lvl1}</div>
        <div className="p-4 rounded bg-pink-300"><p>lvl2</p>{lvl2}</div>
        <div className="p-4 rounded bg-rose-300"><p>lvl3</p>{lvl3}</div>
        <div className="p-4 rounded bg-red-400"><p>lvl4</p>{lvl4}</div>
        <div className="p-4 rounded bg-orange-400"><p>lvl5</p>{lvl5}</div>
        <div className="p-4 rounded bg-yellow-400"><p>lvl6</p>{lvl6}</div>
        <div className="p-4 rounded bg-lime-400"><p>lvl7</p>{lvl7}</div>
        <div className="p-4 rounded bg-green-400"><p>lvl8</p>{lvl8}</div>
        <div className="p-4 rounded bg-teal-400"><p>lvl9</p>{lvl9}</div>

        <div className="p-4 rounded bg-cyan-400"><p>features</p>{features}</div>
        <div className="p-4 rounded bg-sky-400"><p>equipment</p>{equipment}</div>
        <div className="p-4 rounded bg-blue-400"><p>personalityTraits</p>{personalityTraits}</div>
        <div className="p-4 rounded bg-indigo-400"><p>ideals</p>{ideals}</div>
        <div className="p-4 rounded bg-violet-400"><p>bonds</p>{bonds}</div>
        <div className="p-4 rounded bg-purple-400"><p>flaws</p>{flaws}</div>

        <div className="p-4 rounded bg-pink-400"><p>languages</p>{languages}</div>
        <div className="p-4 rounded bg-rose-400"><p>toolsProf</p>{toolsProf}</div>
        <div className="p-4 rounded bg-red-500"><p>armorProf</p>{armorProf}</div>
        <div className="p-4 rounded bg-orange-500"><p>NaweaponProfme</p>{weaponProf}</div>

        <div className="p-4 rounded bg-yellow-500"><p>passiveWis</p>{passiveWis}</div>
        <div className="p-4 rounded bg-lime-500"><p>otherProfs</p>{otherProfs}</div>
        <div className="p-4 rounded bg-green-500"><p>appearance</p>{appearance}</div>
        <div className="p-4 rounded bg-teal-500"><p>allies</p>{allies}</div>
        <div className="p-4 rounded bg-cyan-500"><p>backstory</p>{backstory}</div>
        <div className="p-4 rounded bg-sky-500"><p>treasure</p>{treasure}</div> */}
      </div>
    </div>



  );
}

export default App;
