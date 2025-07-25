import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Test");
  const [className, setClassName] = useState("Class: Bard");
  const [level, setLevel] = useState("Level: 1");
  const [race, setRace] = useState("Race");
  const [background, setBackground] = useState("Background");
  const [alignment, setAlignment] = useState("Alignment");
  const [experiencePoints, setExperiencePoints] = useState("Experience Points");

  const [strength, setStrength] = useState("Strength");
  const [dexterity, setDexterity] = useState("Dexterity");
  const [constitution, setConstitution] = useState("Constitution");
  const [intelligence, setIntelligence] = useState("Intelligence");
  const [wisdom, setWisdom] = useState("Wisdom");
  const [charisma, setCharisma] = useState("Charisma");

  const [strengthMod, setStrengthMod] = useState("Strength Modifier");
  const [dexMod, setDexMod] = useState("Dexterity Modifier");
  const [conMod, setConMod] = useState("Constitution Modifier");
  const [intMod, setIntMod] = useState("Intelligence Modifier");
  const [wisMod, setWisMod] = useState("Wisdom Modifier");
  const [chaMod, setChaMod] = useState("Charisma Modifier");

  const [profBonus, setProfBonus] = useState("Proficiency Bonus");
  const [savingThrows, setSavingThrows] = useState("Saving Throws");
  const [skills, setSkills] = useState("Skills");
  const [armorClass, setArmorClass] = useState("Armor Class (AC)");
  const [initiative, setInitiative] = useState("Initiative");
  const [speed, setSpeed] = useState("Speed");
  const [hitPointMax, setHitPointMax] = useState("Hit Point Maximum");
  const [currentHP, setCurrentHP] = useState("Current Hit Points");
  const [tempHP, setTempHP] = useState("Temporary Hit Points");
  const [hitDice, setHitDice] = useState("Hit Dice");
  const [deathSaves, setDeathSaves] = useState("Death Saves");

  const [attacks, setAttacks] = useState("Attacks and Spellcasting");
  const [weapon1, setWeapon1] = useState("Weapon 1");
  const [weapon2, setWeapon2] = useState("Weapon 2");
  const [weapon3, setWeapon3] = useState("Weapon 3");

  const [spellClass, setSpellClass] = useState("Spellcasting Class");
  const [spellAbility, setSpellAbility] = useState("Spellcasting Ability");
  const [spellSaveDC, setSpellSaveDC] = useState("Spell Save DC");
  const [spellAttackBonus, setSpellAttackBonus] = useState("Spell Attack Bonus");
  const [cantrips, setCantrips] = useState("Cantrips");
  const [lvl1, setLvl1] = useState("Level 1 Spells");
  const [lvl2, setLvl2] = useState("Level 2 Spells");
  const [lvl3, setLvl3] = useState("Level 3 Spells");
  const [lvl4, setLvl4] = useState("Level 4 Spells");
  const [lvl5, setLvl5] = useState("Level 5 Spells");
  const [lvl6, setLvl6] = useState("Level 6 Spells");
  const [lvl7, setLvl7] = useState("Level 7 Spells");
  const [lvl8, setLvl8] = useState("Level 8 Spells");
  const [lvl9, setLvl9] = useState("Level 9 Spells");

  const [features, setFeatures] = useState("Features and Traits");
  const [equipment, setEquipment] = useState("Equipment");
  const [personalityTraits, setPersonalityTraits] = useState("Personality Traits");
  const [ideals, setIdeals] = useState("Ideals");
  const [bonds, setBonds] = useState("Bonds");
  const [flaws, setFlaws] = useState("Flaws");

  const [languages, setLanguages] = useState("Languages");
  const [toolsProf, setToolsProf] = useState("Tools Proficiencies");
  const [armorProf, setArmorProf] = useState("Armor Proficiencies");
  const [weaponProf, setWeaponProf] = useState("Weapon Proficiencies");

  const [passiveWis, setPassiveWis] = useState("Passive Wisdom (Perception)");
  const [otherProfs, setOtherProfs] = useState("Other Proficiencies and Languages");
  const [appearance, setAppearance] = useState("Character Appearance");
  const [allies, setAllies] = useState("Allies & Organizations");
  const [backstory, setBackstory] = useState("Backstory");
  const [treasure, setTreasure] = useState("Treasure");

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-slate-800">D&D Character Sheet</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-slate-800 font-medium">
        <div className="p-4 rounded bg-red-100"><p>Name</p>{name}</div>
        <div className="p-4 rounded bg-orange-100"><p>Classname</p>{className}</div>
        <div className="p-4 rounded bg-yellow-100"><p>level</p>{level}</div>
        <div className="p-4 rounded bg-lime-100"><p>race</p>{race}</div>
        <div className="p-4 rounded bg-green-100"><p>background</p>{background}</div>
        <div className="p-4 rounded bg-teal-100"><p>alignment</p>{alignment}</div>
        <div className="p-4 rounded bg-cyan-100"><p>experiencePoints</p>{experiencePoints}</div>

        <div className="p-4 rounded bg-sky-100"><p>strength</p>{strength}</div>
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
        <div className="p-4 rounded bg-sky-500"><p>treasure</p>{treasure}</div>
      </div>
    </div>
  );
}

export default App;
