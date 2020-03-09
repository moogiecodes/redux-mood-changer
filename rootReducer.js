const INITIAL_STATE = {
  emoji: "❀◕ ‿ ◕❀",
  color: "#EAE1DD"
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "MIDDLE_FINGER":
      return { ...state, emoji: "╭∩╮ʕ•ᴥ•ʔ╭∩╮", color: "#BCF2EA" };
    case "BEAR":
      return { ...state, emoji: "ʕ•ᴥ•ʔ", color: "#BCD1F2" }
    case "CRY":
      return { ...state, emoji: "(╥_╥)", color: "#BCF2C4" }
    case "EXCITED":
      return { ...state, emoji: "(๑>ᴗ<๑)", color: "#F2CDBC" }
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);