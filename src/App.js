import './App.css';
import React, {useState} from 'react';
import { CrosswordProvider, CrosswordGrid, DirectionClues, ThemeProvider } from '@jaredreisinger/react-crossword';
import { Grid2, Alert, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography} from '@mui/material';

const data = {
    across: {
      1: {
        clue: '"Always bet on black" - Lego Batman',
        answer: 'GAMBLING',
        row: 0,
        col: 0,
      },
      2: {
        clue: 'Us?',
        answer: 'GAYS',
        row: 0,
        col: 9,
      },
      3: {
        clue: 'What you are going through with your ATIP requests',
        answer: 'DATA',
        row: 0,
        col: 14,
      },
      4: {
        clue: '__ healthy __ a horse',
        answer: 'AS',
        row: 1,
        col: 3,
      },
      5: {
        clue: 'Town in Germany situated in the foothills of the Ebbegebirge in North Rhine-Westphalia',
        answer: 'OLPE',
        row: 1,
        col: 6,
      },
      6: {
        clue: 'Association of Ontario Midwives',
        answer: 'AOM',
        row: 1,
        col: 11,
      },
      7: {
        clue: 'Abv of state where Bojack lived',
        answer: 'CAL',
        row: 1,
        col: 15,
      },
      8: {
        clue: 'Boyles and Vivians Wedding Invites in Brooklyn 99',
        answer: 'STD',
        row: 2,
        col: 2,
      },
      9: {
        clue: 'Referring to oneself',
        answer: 'I',
        row: 2,
        col: 6,
      },
      10: {
        clue: '"To be enclosed or surrounded by something else" - Oxford Dictionary',
        answer: 'IN',
        row: 2,
        col: 8,
      },
      11: {
        clue: 'When we correctly predict something that gonna happen in a day',
        answer: 'PSYCHIC',
        row: 2,
        col: 11,
      },
      12: {
        clue: 'When we agree with something, "that so ____"',
        answer: 'TRUE',
        row: 3,
        col: 0,
      },
      13: {
        clue: 'Something i repeat 3 times when I am shocked or taken aback',
        answer: 'CRAZY',
        row: 3,
        col: 5,
      },
      14: {
        clue: '"In addition" - Oxford Dictionary',
        answer: 'TOO',
        row: 3,
        col: 13,
      },
      15: {
        clue: 'Three genders, puppy dog, kitty cat and ...',
        answer: 'BUNNIES',
        row: 4,
        col: 0,
      },
      16: {
        clue: 'Your first email account',
        answer: 'YAHOO',
        row: 4,
        col: 11,
      },
      17: {
        clue: 'Santas workers and Id say you about the size of one of these',
        answer: 'ELF',
        row: 5,
        col: 0,
      },
      18: {
        clue: 'That Bruno Mars and Rose from Blackpink son',
        answer: 'APT',
        row: 5,
        col: 8,
      },
      19: {
        clue: 'What you say when I ask if you like me',
        answer: 'NO',
        row: 5,
        col: 16,
      },
      20: {
        clue: 'Place white people are talking about when they say double hockey sticks',
        answer: 'HELL',
        row: 6,
        col: 0,
      },
      21: {
        clue: 'Canadian Government Agency that responsible for tax laws',
        answer: 'CRA',
        row: 6,
        col: 5,
      },
      22: {
        clue: 'What the aliens probe cows in',
        answer: 'UFO',
        row: 6,
        col: 11,
      },
      23: {
        clue: 'What British people say to get someones attention',
        answer: 'OY',
        row: 7,
        col: 2,
      },
      24: {
        clue: 'What you say when youre scared or falling',
        answer: 'AAH',
        row: 7,
        col: 5,
      },
      25: {
        clue: '_____ ONE, usually says on a ticket',
        answer: 'ADMIT',
        row: 7,
        col: 9,
      },
      26: {
        clue: 'Chinese philosophy that this energy that flows through your body',
        answer: 'CHI',
        row: 7,
        col: 15,
      },
      27: {
        clue: 'To make a promise',
        answer: 'VOWS',
        row: 8,
        col: 0,
      },
      28: {
        clue: 'Tampas Internation Airport',
        answer: 'TPA',
        row: 8,
        col: 5,
      },
      29: {
        clue: 'Apache Maven',
        answer: 'MVN',
        row: 8,
        col: 11,
      },
      30: {
        clue: 'One of your woman role models that are on your wall, is a US representative',
        answer: 'AOC',
        row: 8,
        col: 15,
      },
      31: {
        clue: 'Waters solid state',
        answer: 'ICE',
        row: 9,
        col: 0,
      },
      32: {
        clue: 'My perfect, beautiful, smart, sweet, kind girl',
        answer: 'SHAILEE',
        row: 9,
        col: 6,
      },
      33: {
        clue: 'Digital units used in computation and digital communication',
        answer: 'BITS',
        row: 9,
        col: 14,
      },
      34: {
        clue: 'What we say when one of us say something valid',
        answer: 'OHREAL',
        row: 10,
        col: 0,
      },
      35: {
        clue: '"Chisel or pointed iron or steel bar for loosening ore or rock" - Merriam Webster',
        answer: 'GAD',
        row: 10,
        col: 9,
      },
      36: {
        clue: 'Upside down big tennis match',
        answer: 'AO',
        row: 11,
        col: 5,
      },
      37: {
        clue: 'What I do when I have nothing to say',
        answer: 'NOD',
        row: 11,
        col: 8,
      },
      38: {
        clue: 'People that work in ambulances',
        answer: 'EMTS',
        row: 11,
        col: 12,
      },
      39: {
        clue: 'What I say when we could do something',
        answer: 'RUNNABLE',
        row: 12,
        col: 0,
      },
      40: {
        clue: 'Where I got when I keep the public safe',
        answer: 'CSIS',
        row: 12,
        col: 11,
      },
      41: {
        clue: 'Chapstick Brand',
        answer: 'EOS',
        row: 13,
        col: 6,
      },
      42: {
        clue: 'Roti?',
        answer: 'ATTA',
        row: 13,
        col: 11,
      },
      43: {
        clue: 'Yes in German or Dutch',
        answer: 'JA',
        row: 13,
        col: 16,
      },
      44: {
        clue: 'Synonym',
        answer: 'CINNAMON',
        row: 14,
        col: 0,
      },
      45: {
        clue: 'Slang for I dont know',
        answer: 'Ion',
        row: 14,
        col: 9,
      },
      46: {
        clue: 'University of Texas',
        answer: 'UT',
        row: 15,
        col: 3,
      },
      47: {
        clue: 'Litwally you as an animal',
        answer: 'REDPANDAS',
        row: 15,
        col: 9,
      },
      48: {
        clue: 'Goofing off, your favourite word from your favourite JusReign video',
        answer: 'KARTOTTIYA',
        row: 16,
        col: 0,
      },
      49: {
        clue: 'Tiny animals that can lift 10-50x their body weight',
        answer: 'ANT',
        row: 16,
        col: 15,
      },
      50: {
        clue: 'Where like 90% of the scenes in Greys take place',
        answer: 'ER',
        row: 17,
        col: 0,
      },
      51: {
        clue: 'Gross people that do not take care of em selves',
        answer: 'SLOBS',
        row: 17,
        col: 3,
      },
      52: {
        clue: 'GOOFIEST 21 questions answer to date',
        answer: 'GRAVEL',
        row: 17,
        col: 10,
      },
    },
    down: {
      1: {
        clue: 'Daily way of life for us',
        answer: 'GOATBEHAVIOUR',
        row: 0,
        col: 0,
      },
      2: {
        clue: 'Costcos best dessert',
        answer: 'CAKE',
        row: 14,
        col: 0,
      },
      3: {
        clue: 'Best Diary of a Wimpy Kid Book, Rodrick ____',
        answer: 'RULE',
        row: 3,
        col: 1,
      },
      4: {
        clue: 'Largest Provider of Community and Affordable Rentals in Ottawa',
        answer: 'OCH',
        row: 8,
        col: 1,
      },
      5: {
        clue: 'Augmented reality, what Apple Vision Pros use',
        answer: 'AR',
        row: 16,
        col: 1,
      },
      6: {
        clue: 'My girls favourite flower',
        answer: 'SUNFLOWER',
        row: 2,
        col: 2,
      },
      7: {
        clue: 'Hey sisters?',
        answer: 'NUN',
        row: 12,
        col: 2,
      },
      8: {
        clue: 'To avail according to Wiktionary (Im sorry i tried to fill as many squares as possible)',
        answer: 'BATEN',
        row: 0,
        col: 3,
      },
      9: {
        clue: 'Lilies in French',
        answer: 'LYS',
        row: 6,
        col: 3,
      },
      10: {
        clue: '"Squrriels bury these and then they forget, that how we get so many trees planted" - Fact I learned from Shailee',
        answer: 'NUTS',
        row: 14,
        col: 3,
      },
      11: {
        clue: 'Fun psychedelic drug',
        answer: 'LSD',
        row: 0,
        col: 4,
      },
      12: {
        clue: 'The movie with the clown in the gutter',
        answer: 'IT',
        row: 4,
        col: 4,
      },
      13: {
        clue: '"Yah and sheeps are all like __" - Common Shailee type phase',
        answer: 'BA',
        row: 9,
        col: 4,
      },
      14: {
        clue: 'Explosive mixture of AMMONIUM NITRATE and TRINITROTOLUENE',
        answer: 'AMATOL',
        row: 12,
        col: 4,
      },
      15: {
        clue: 'Common Era',
        answer: 'CE',
        row: 3,
        col: 5,
      },
      16: {
        clue: 'Oreo or Bambi',
        answer: 'CAT',
        row: 6,
        col: 5,
      },
      17: {
        clue: 'Where scientists COOK bro',
        answer: 'LAB',
        row: 10,
        col: 5,
      },
      18: {
        clue: 'In direction of',
        answer: 'TO',
        row: 16,
        col: 5,
      },
      19: {
        clue: 'Plural of genre of crime film or fiction',
        answer: 'NOIRS',
        row: 0,
        col: 6,
      },
      20: {
        clue: 'Your favourite, Kendrick and Tyler, do this',
        answer: 'RAPS',
        row: 6,
        col: 6,
      },
      21: {
        clue: 'Goofy synonym for Ghee',
        answer: 'OLEO',
        row: 11,
        col: 6,
      },
      22: {
        clue: 'Abv of an old timey disease',
        answer: 'TB',
        row: 16,
        col: 6,
      },
      23: {
        clue: 'Abv for the first two words in the title for your favourite Chappel Roan Song',
        answer: 'GL',
        row: 0,
        col: 7,
      },
      24: {
        clue: 'Common response when you find something funny',
        answer: 'AHAHA',
        row: 6,
        col: 7,
      },
      25: {
        clue: 'Really lonnngggggg period of time',
        answer: 'EON',
        row: 12,
        col: 7,
      },
      26: {
        clue: '"Verb that is the third-person singular of the present tense of the verb "be" - Dictionary',
        answer: 'IS',
        row: 16,
        col: 7,
      },
      27: {
        clue: 'City Goose apparently has the best of these',
        answer: 'PIZZA',
        row: 1,
        col: 8,
      },
      28: {
        clue: 'What generation Millennials are',
        answer: 'GENY',
        row: 0,
        col: 9,
      },
      29: {
        clue: 'What we are in spanish',
        answer: 'AMIGOS',
        row: 7,
        col: 9,
      },
      30: {
        clue: 'Individual retirement arrangement or Irish Republican Army',
        answer: 'IRA',
        row: 14,
        col: 9,
      },
      31: {
        clue: 'Young man or boy in Britishin Lauguage',
        answer: 'LAD',
        row: 9,
        col: 10,
      },
      32: {
        clue: 'Operational Enablement, the team ima be on this winter',
        answer: 'OE',
        row: 14,
        col: 10,
      },
      33: {
        clue: 'One could say we are this as we like to talk a lot',
        answer: 'YAPPY',
        row: 0,
        col: 11,
      },
      34: {
        clue: 'When you say something and i agree with it and really take it in',
        answer: 'UMMED',
        row: 6,
        col: 11,
      },
      35: {
        clue: 'Your apparently favourtie word to use',
        answer: 'CANDOR',
        row: 12,
        col: 11,
      },
      36: {
        clue: 'Signal sent out when need help',
        answer: 'SOS',
        row: 0,
        col: 12,
      },
      37: {
        clue: 'How many fingies we got on our hands or how many tosies we got',
        answer: 'FIVE',
        row: 6,
        col: 12,
      },
      38: {
        clue: 'Best Timezone',
        answer: 'EST',
        row: 11,
        col: 12,
      },
      39: {
        clue: 'A traditional story, like romans or greeks have',
        answer: 'MYTH',
        row: 1,
        col: 13,
      },
      40: {
        clue: 'Optical Transport Network, what Cisco works on',
        answer: 'OTN',
        row: 6,
        col: 13,
      },
      41: {
        clue: 'To release or discharge',
        answer: 'EMIT',
        row: 10,
        col: 13,
      },
      42: {
        clue: 'Short version of a word',
        answer: 'ABV',
        row: 15,
        col: 13,
      },
      43: {
        clue: 'Cheffing something up',
        answer: 'COOK',
        row: 2,
        col: 14,
      },
      44: {
        clue: 'Sound make when you sneeze',
        answer: 'ACHOO',
        row: 0,
        col: 15,
      },
      45: {
        clue: 'A fruit, used to make bowls',
        answer: 'ACAI',
        row: 6,
        col: 15,
      },
      46: {
        clue: 'ABV for university in Halifax',
        answer: 'DAL',
        row: 2,
        col: 15,
      },
      47: {
        clue: 'A widespread group of peoples in southeast Asia',
        answer: 'TAI',
        row: 0,
        col: 16,
      },
      48: {
        clue: 'What I say when you send me a pic of you',
        answer: 'HOT',
        row: 7,
        col: 16,
      },
      49: {
        clue: 'Your favourite term of endearment',
        answer: 'JAAN',
        row: 13,
        col: 16,
      },
      50: {
        clue: 'Dream job!',
        answer: 'ALCOHOLICS',
        row: 0,
        col: 17,
      },
      51: {
        clue: 'What you say when you leave someone',
        answer: 'CYA',
        row: 11,
        col: 17,
      },
      52: {
        clue: 'Skilled Trades Ontario',
        answer: 'STO',
        row: 15,
        col: 17,
      },
    }
};

function App() {
  const [correct, setCorrect] = useState({}); // Track cell correctness
  const [complete, setComplete] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [openPopup, setOpenPopup] = useState(true); // Popup state

  const handleCorrect = (direction, number, answer) => {
    setAlertMessage(`Correct: ${direction} ${number} - ${answer}`);
    setOpenAlert(true); // Show the alert
  };

  const handleComplete = (isCorrect) => {
    setComplete(true);
    console.log(`Crossword Complete: ${isCorrect ? 'All correct!' : 'Some answers are wrong.'}`);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const getCorrectAnswer = (row, col, direction) => {
    const clues = data[direction]; // Select clues based on direction ('across' or 'down')
  
    // Find the clue that includes the given (row, col)
    for (const clueNumber in clues) {
      const clue = clues[clueNumber];
      const { answer, row: clueStartRow, col: clueStartCol } = clue;
  
      if (direction === "across") {
        // Check if the cell falls within the range of the across clue
        if (clueStartRow === row && col >= clueStartCol && col < clueStartCol + answer.length) {
          const charIndex = col - clueStartCol;
          console.log(answer[charIndex]);
          return answer[charIndex]; // Return the correct character
        }
      } else if (direction === "down") {
        // Check if the cell falls within the range of the down clue
        if (clueStartCol === col && row >= clueStartRow && row < clueStartRow + answer.length) {
          const charIndex = row - clueStartRow;
          console.log(answer[charIndex]);
          return answer[charIndex]; // Return the correct character
        }
      }
    }
    return null; // Return null if no clue matches the cell
  };

  const handleCellChange = (row, col, char) => {
    // Check correctness for the cell in both directions: across and down
    const correctAcross = getCorrectAnswer(row, col, "across");
    const correctDown = getCorrectAnswer(row, col, "down");
  
    // Determine if the input character matches either direction
    const isCorrect =
      (correctAcross && char === correctAcross) ||
      (correctDown && char === correctDown);
  
    if (isCorrect) {
      setCorrect(true);
      console.log(`Cell (${row}, ${col}) input "${char}" is correct!`);
    } else {
      setCorrect(false);
      console.log(`Cell (${row}, ${col}) input "${char}" is incorrect.`);
    }
  };  
  
  const theme = {
    allowNonSquare: true,
    columnBreakpoint: '9999px',
    gridBackground: '#000',
    cellBackground: '#fff',
    cellBorder: '#000',
    textColor: '#000',
    numberColor: '#000',
    focusBackground: correct ? '#d6d851' : '#f00',
    highlightBackground: correct ? '#eff185' : '#f99',
  };

  return (
    <div className="main">
      
      <Dialog
        open={openPopup}
        onClose={handleClosePopup}
        aria-labelledby="welcome-dialog-title"
        aria-describedby="welcome-dialog-description"
        PaperProps={{
          style: { borderRadius: 15, padding: '20px', textAlign: 'center' },
        }}
      >
        <DialogTitle id="welcome-dialog-title" style={{ fontFamily: 'Comic Sans', color: '#4caf50', fontSize: '36px' }}>
          🎁 MERRY CHRISTMAS 🎉
        </DialogTitle>
        <DialogContent>
          <Typography id="welcome-dialog-description" variant="body1" style={{ fontFamily: 'Comic Sans', color: '#333' }}>
            I know you like crosswords, so enjoy this goofy ass crossword I made! I will give you a warning that some of the words are insane
            and like no shot you would guess them. BUT, you are literally HIM so I think you will be fine 😊 (Sorry that the gift was delayed,
            also sorry if it has random lil bugs I will fix em inshallah)
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClosePopup}
            variant="contained"
            color="primary"
            style={{ borderRadius: 20, textTransform: 'none', backgroundColor: '#ff4081' }}
          >
            GET ER DONE!
          </Button>
        </DialogActions>
      </Dialog>


      <div className="banner">
        <h1>The Supreme Court's Crossword</h1>
      </div>
      <div className="crossword">
        <ThemeProvider theme={theme}>
        <CrosswordProvider data={data} onCorrect={handleCorrect} onCrosswordComplete={handleComplete} onCellChange={handleCellChange}>
          <Grid2 container spacing={2}>
            <Grid2 size={5}>
              <div className="grid-container" style={{ width: '35em', borderLeft: '30px solid white' }}>
                <CrosswordGrid />
              </div>
            </Grid2>
            <Grid2 size={3}>
              <div className="clues-container-across">
                <h2>Across Clues</h2>
                <DirectionClues direction="across" />
              </div>
            </Grid2>
            <Grid2 size={3}>
              <div className="clues-container-down">
                <h2>Down Clues</h2>
                <DirectionClues direction="down" />
              </div>
            </Grid2>
          </Grid2>
        </CrosswordProvider>
        </ThemeProvider>

        {/* Does the checking if each of the clues are correct or not */}
        <Snackbar open={openAlert} autoHideDuration={5000} onClose={() => setOpenAlert(false)} >
          <Alert onClose={() => setOpenAlert(false)} severity={alertMessage.startsWith('Correct') ? 'success' : 'error'}>
            {alertMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default App;