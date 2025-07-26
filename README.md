The goal of this project is this in these steps 


Make a prefilled d and d page

add a dice roller 

add a HP bar


from there once you have esentually a dive roller with a sheet use lists to add dynamic options to all fields 



once that is done make login an option and have it save one charecter 


once that is done give the option for multiple saved charicters 




 <div className=" flex p-4 rounded justify-between bg-red-100">
         <div className='w-[50%]'>
          <p>Name</p>
          <p>{playerData.name}</p>
          </div> 
          <button onClick={togglePopup} className='bg-slate-100 p-1 '>change</button>
        </div>

        <div className="flex p-4 rounded justify-between bg-orange-100">
          <div className='w-[50%]'>
            <p>Classname</p>
            <p>{playerData.classType}</p>
          </div>
          <button onClick={togglePopup} className='bg-slate-100 p-1 '>change</button>
        </div>
