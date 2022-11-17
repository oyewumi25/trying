import { joueur1, joueur2} from "./action-type";

const initialState = { 
  joueur: {}
};

const reducer = (state , action) => {
    
  switch (action.type) {
    case joueur1:
      return {
        ...state,
       joueur: action.data
      };
    case joueur2:
      return {
        ...state,
        joueur: {}
      };

      default: return state;

  }

};

export default reducer;