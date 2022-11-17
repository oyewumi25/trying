import { joueur1, joueur2} from "./action-type";

const addUserData1 = (data) => ({
  type: joueur1,
  data: data
});

const addUserData2 = () => ({
  type: joueur2
});

export { addUserData1, addUserData2 };