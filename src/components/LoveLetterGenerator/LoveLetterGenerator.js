import React from "react";
import './LoveLetterGenerator.css';
import '../../App.css';

const salutationPool1 = [
  "BELOVED", "DARLING ", "DEAR", "DEAREST", "FANCIFUL", "HONEY"
];

const salutationPool2 = [
  "MOLE", "DUCK", "LOVE", "MOPPET", "CHICKPEA"
];

const adjectivesPool = [
  "AFFECTIONATE", "AMOROUS", "ANXIOUS", "BEAUTIFUL", "BREATHLESS", "BURNING",
  "CURIOUS", "EAGER", "FERVENT", "FONDEST", "LOVEABLE", "LOVESICK", "LOVING",
  "PASSIONATE", "PRECIOUS", "SEDUCTIVE", "SWEET", "SYMPATHETIC", "WINNING",
  "WISTFUL"
];

const nounsPool = [
  "ADORATION", "AFFECTION", "AMBITION", "APPETITE", "ARDOUR", "BEING", "BURNING",
  "CHARM", "CRAVING", "DESIRE", "DEVOTION", "EAGERNESS", "ENCHANTMENT", "ENTHUSIASM",
  "FANCY", "FELLOW FEELING", "FERVOUR", "FONDNESS", "HEART", "HUNGER", "LITTLE LIKING", "LONGING", "LUST", "PASSION", "THIRST", "WISH"
]

const adverbsPool = [
  "AFFECTIONATELY", "ARDENTLY", "ANXIOUSLY", "BEAUTIFULLY", "BURNINGLY", "CURIOUSLY",
  "EAGERLY", "FERVENTLY", "FONDLY", "IMPATIENTLY", "KEENLY", "LOVINGLY", "PASSIONATELY",
  "SEDUCTIVELY", "TENDERLY", "WISTFULLY"
]

const verbsPool = [
  "ADORES", "ATTRACTS", "CLINGS TO", "HOLDS DEAR", "HOPES FOR", "HUNGERS FOR", "LIKES",
  "LONGS FOR", "LOVES", "LUSTS AFTER", "PANTS FOR", "PINES FOR", "SIGHS FOR", "TEMPTS",
  "THIRSTS FOR", "TREASURES", "YEARNS FOR"
]

// randomly select one word from the arrays
const salutation1 = salutationPool1[Math.floor(Math.random() * salutationPool1.length)].toLowerCase();

const salutation2 = salutationPool2[Math.floor(Math.random() * salutationPool2.length)].toLowerCase();

const adjective1 = adjectivesPool[Math.floor(Math.random() * adjectivesPool.length)].toLowerCase();
const adjective2 = adjectivesPool[Math.floor(Math.random() * adjectivesPool.length)].toLowerCase();
const adjective3 = adjectivesPool[Math.floor(Math.random() * adjectivesPool.length)].toLowerCase();
const adjective4 = adjectivesPool[Math.floor(Math.random() * adjectivesPool.length)].toLowerCase();

const noun1 = nounsPool[Math.floor(Math.random() * nounsPool.length)].toLowerCase();
const noun2 = nounsPool[Math.floor(Math.random() * nounsPool.length)].toLowerCase();
const noun3 = nounsPool[Math.floor(Math.random() * nounsPool.length)].toLowerCase();
const noun4 = nounsPool[Math.floor(Math.random() * nounsPool.length)].toLowerCase();
const noun5 = nounsPool[Math.floor(Math.random() * nounsPool.length)].toLowerCase();
const noun6 = nounsPool[Math.floor(Math.random() * nounsPool.length)].toLowerCase();
const noun7 = nounsPool[Math.floor(Math.random() * nounsPool.length)].toLowerCase();
const noun8 = nounsPool[Math.floor(Math.random() * nounsPool.length)].toLowerCase();

const adverb1 = adverbsPool[Math.floor(Math.random() * adverbsPool.length)].toLowerCase();
const adverb2 = adverbsPool[Math.floor(Math.random() * adverbsPool.length)].toLowerCase();
const adverb3 = adverbsPool[Math.floor(Math.random() * adverbsPool.length)].toLowerCase();

const verb1 = verbsPool[Math.floor(Math.random() * verbsPool.length)].toLowerCase();
const verb2 = verbsPool[Math.floor(Math.random() * verbsPool.length)].toLowerCase();
const verb3 = verbsPool[Math.floor(Math.random() * verbsPool.length)].toLowerCase();

const salutation = `${salutation1.substring(0,1).toUpperCase() + salutation1.substring(1)} ${salutation2.substring(0,1).toUpperCase()+salutation2.substring(1)},`;
const firstRow = `My ${adjective1} ${noun1} ${adverb1} ${verb1} your ${noun2}.`;
const secondRow = ` You are my ${adjective2} ${noun3}, my ${adjective3} ${noun4}.`;
const thirdRow = ` My ${noun5} ${verb2} your ${noun6}. My ${noun7} ${adverb2} ${verb3} your ${adjective4} ${noun8}.`
const ending = `Yours ${adverb3},`;
const signature = `M.U.C`; // Manchester University Computer

const LoveLetterGenerator = (props) => {

  return (
    <div className="App-header">
      <section>
        <p>{salutation}</p>

          <span className="withPadding">{firstRow}</span>
          <span>{secondRow}</span>
          <span>{thirdRow}</span>  

        <p>  
          <span>{ending}<br></br></span>
          <span>{signature}</span>
        </p>


      </section>
      <footer>
        <button onClick={props.onButtonSubmit}>
          generate another letter
        </button>
      </footer>

    </div>
  )
}

export default LoveLetterGenerator;