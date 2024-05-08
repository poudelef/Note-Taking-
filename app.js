
const notes = require('./note.js')
const yargs = require('yargs');


 
// yargs support command line


// const comand = process.argv[2]; Gets the value after we run node app.js Something... It is in arrry. 

//add,reamove,read,list

// We can create a commmand using yargs from npm. 
//  it helps to create a command and that the it does. 


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body:{
            describe:'Body of the Note',
            demandOption: true,
            type:'string',
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Removes the  notes',
            demandOption: true,
            type:'string',
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

})

// Create list command
yargs.command({
    command:'list',
    describe:'Shows the list of notes',
    handler(){
        notes.listNote()
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'Reads from the notes',
    builder:{
        title:{
            describe:"Read the note",
            demandOption: true,
            type:'string',
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(process.argv)




