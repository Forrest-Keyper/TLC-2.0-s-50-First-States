// shortens console.log

function c() {
  console.log(...arguments);
}

// in order to have our game's code be neat and tidy we must have our developer "sandboxes" as variables (obvjects) and so must be defined *before* the methods are called


let States = {
  currentState: "start",
  devState: "anon"
}

var _Anon = {
  state_init: function (){
    States.currentState = "jailed"
    c("As you slowly regain consciousness you become quickly aware of a throbbing headache and the sensation of metal on your ankles")
    c("A cursory examination of the room enlightens you to the fact you are shackled to a wall in what appears to be a medieval dungeon.")
    c("All you notice that occupies the room at this point is a few plaster white skeletons and a low table near a wooden door.")
    c("[You are now able to use the command 'inspect' which will garner information about the environment you are in.]")
  },

}


var _Pm = {

  state_init: function (){
    States.currentState = "veil";
    States.devState = "pm";
    devpass();

  },

  door_1: function (){
    switch(States.currentState){
      case "veil":
        States.currentState = "cosmic beach";

    }

  },



}



Object.defineProperties(window, {

// for movement, can be bound by each developer to any actiuon however SHOULD be used to traverse spaces
  w: { get: _door1 },
  a: { get: _door2 },
  s: { get: _door3 },
  d: { get: _door4 },


// for additional actions. can be bound by each developer to any action however SHOULD be environment interactions
/*
  q: { get: _extra1 },
  e: { get: _extra2 },
  r: { get: _extra3 },
  f: { get: _extra4 },
  z: { get: _extra5 },
  x: { get: _extra6 },
  c: { get: _extra7 },
  v: { get: _extra8 },
  g: { get: _extra9 },
*/
// should be used ONLY for environment interactions

/*
  inspect: { get: _environment },
  use: { get: _tool },
  take: { get: _additem},
*/
//returns definitions of commands in current state

  // help: { get: _help },

// place the command for users to invoke to access your room here

// takes form [command_name]: { get: _[developer's init function]}

  start: { get: _Anon.state_init },
  nexus: { get: _Pm.state_init },
});


// stores the currentState in variable form for later use
var pass_choice;


// to be called at state change, setting pass_choice for current developer's environment

// must be called at beginning of developer's personal function
// following devpass() all functions can rely upon pass_choice (represents devState)

function devpass(){

  switch (States.devState){

    case "anon":
      pass_choice = 0;
      break;

    case "rg":
      pass_choice = 1;
      break;

    case "ls":
      pass_choice = 2;
      break;

    case "eu":
      pass_choice = 3;
      break;

    case "as":
      pass_choice = 4;
      break;

    case "jd":
      pass_choice = 5;
      break;

     case "zr":
      pass_choice = 6;
      break;

     case "pm":
      pass_choice = 7;
      break;

     case "jm":
      pass_choice = 8;
      break;

     case "aa":
      pass_choice = 9;
      break;

     case "dm":
      pass_choice = 10;
      break;

     case "ct":
      pass_choice = 11;
      break;

  }

}

function _door1(pass_choice){
  switch (pass_choice){
    case 0:
      _Anon.door_1();
      break;

    case 1:
      _Rg.door_1();
      break;

    case 2:
      _Ls.door_1();
      break;

    case 3:
      _Eu.door_1();
      break;

    case 4:
      _As.door_1();
      break;

    case 5:
      _Jd.door_1();
      break;

    case 6:
      _Zr.door_1();
      break;

    case 7:
      _Pm.door_1();
      break;

    case 8:
      _Jm.door_1();
      break;

    case 9:
      _Aa.door_1();
      break;

    case 10:
      _Dm.door_1();
      break;

    case 11:
      _Ct.door_1();
      break;

    }

}


function _door2(pass_choice){

  switch (pass_choice){
    case 0:
      _Anon.door_2();
      break;

    case 1:
      _Rg.door_2();
      break;

    case 2:
      _Ls.door_2();
      break;

    case 3:
      _Eu.door_2();
      break;

    case 4:
      _As.door_2();
      break;

    case 5:
      _Jd.door_2();
      break;

    case 6:
      _Zr.door_2();
      break;

    case 7:
      _Pm.door_2();
      break;

    case 8:
      _Jm.door_2();
      break;

    case 9:
      _Aa.door_2();
      break;

    case 10:
      _Dm.door_2();
      break;

    case 11:
      _Ct.door_2();
      break;

  }

}





function _door3(pass_choice){

  switch (pass_choice){
    case 0:
      _Anon.door_3();
      break;

    case 1:
      _Rg.door_3();
      break;

    case 2:
      _Ls.door_3();
      break;

    case 3:
      _Eu.door_3();
      break;

    case 4:
      _As.door_3();
      break;

    case 5:
      _Jd.door_3();
      break;

    case 6:
      _Zr.door_3();
      break;

    case 7:
      _Pm.door_3();
      break;

    case 8:
      _Jm.door_3();
      break;

    case 9:
      _Aa.door_3();
      break;

    case 10:
      _Dm.door_3();
      break;

    case 11:
      _Ct.door_3();
      break;

    }
}


function _door4(pass_choice){
  switch (pass_choice){
    case 0:
      _Anon.door_4();
      break;

    case 1:
      _Rg.door_4();
      break;

    case 2:
      _Ls.door_4();
      break;

    case 3:
      _Eu.door_4();
      break;

    case 4:
      _As.door_4();
      break;

    case 5:
      _Jd.door_4();
      break;

    case 6:
      _Zr.door_4();
      break;

    case 7:
      _Pm.door_4();
      break;

    case 8:
      _Jm.door_4();
      break;

    case 9:
      _Aa.door_4();
      break;

    case 10:
      _Dm.door_4();
      break;

    case 11:
      _Ct.door_4();
      break;
    }
}




// state check


_Anon.state_init()
