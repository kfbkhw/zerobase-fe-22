import countUp from "./utils/numberCountUp.js";
import setTabMenu from "./module/tabMenu.js";
import getSnackCardList from "./module/snackCardList.js";

const data = { participant: 1341513412 }

const participantCount = document.getElementById('participate-number');
countUp(participantCount, data.participant, 1);

setTabMenu();
getSnackCardList();