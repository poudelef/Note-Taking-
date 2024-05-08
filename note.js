const { bold } = require('ansi-colors')
const fs = require('fs')
const c = require('ansi-colors');

const addNote = (title, body)=>{
    const notes = loadNotes()
    //checking if their is any duplicate
    // const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title)
    // duplicateNotes is array 
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(c.green('New note added'));
    } else{
        console.log(c.red('Note Title taken'))
    }
   
}


const removeNote =(title)=>{
    const notes  = loadNotes()
    const FinalNotes = notes.filter((note)=>{
        return note.title !== title 
    })
    if(notes.length > FinalNotes.length){
        
        console.log(c.green('Note deleted'))
        saveNotes(FinalNotes)
    }
    else{
        console.log(c.red("Title don't exist"))
    }
    
}

const listNote = ()=>{
    console.log(c.yellow('Your notes'))
    const notes = loadNotes()
    const listNote = notes.forEach(note=> {
        console.log(c.green(note.title))
    });  
}

const readNotes= (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
    
    if(note){
        console.log(c.yellow(note.title))
        console.log(note.body)
    }else{
        console.log(c.red('Title not found'))
    }
}





const saveNotes = (notes)=>{
    const dataJson = JSON.stringify(notes)//convert to json
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = ()=>{

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)//returns object
    }catch(e){
        return[]
    }
  
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNotes:readNotes
}

