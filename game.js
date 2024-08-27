const bevPersonality = {
  // Analysts (INTJ, INTP, ENTJ, ENTP)
  // Sentinels (ISTJ, ISFJ, ESTJ, ESFJ)
  // Diplomats (INFJ, INFP, ENFJ, ENFP)
  // Explorers (ISTP, ISFP, ESTP, ESFP)

  ISTJ: "American beer",
  ISFJ: "White wine",
  INFJ: "Taiwanese beer",
  INTJ: "Whiskey",
  ISTP: "Buzzball",
  ISFP: "Hard seltzer",
  INFP: "Jungle juice",
  INTP: "Soju",
  ESTP: "Hennessy",
  ESTJ: "Champagne",
  ESFJ: "Red wine",
  ENFJ: "Pink Whitney",
  ENFP: "Twisted Tea",
  ENTP: "Tequila",
  ESFP: "Beatbox",
  ENTJ: "Vodka"
}

const quiz = [
  {
    q: "1. you wake up and see that you have a busy day ahead. how do you get yourself going?",
    opt: [
      "A. start with a strong coffee and a to-do list",
      "B. meditate, journal, or listen to some calming music",
      "C. check social media or message friends to plan something spontaneous",
      "D. jump straight out of bed with excitement and get moving"
    ],
    types:{
      A:["ISTJ", "ESTJ"],
      B:["INFJ", "ISFJ"],
      C:["ENFP", "ESFP"],
      D:["ESTP", "ENTP"]
    }
  },

  {
    q: "2. breakfast time! what is your go-to meal?",
    opt: [
      "A. a quick, balanced meal like oatmeal or toast with fruit",
      "B. something creative and colorful, like an acai bowl or a smoothie",
      "C. whatever is convenient and gets you out the door faster",
      "D. you'll figure out when you're on the go - maybe grabe something from a cafe"
    ],
    types:{
      A:["ISTJ", "INFP"],
      B:["INFP", "ISFP"],
      C:["ENTJ", "ESTP"],
      D:["ENFP", "ESFP"]
    }
  },

  {
    q: "3. as you plan out your day, what is on your agenda?",
    opt: [
      "A. ticking off tasks and getting things done efficiently",
      "B. taking care of your responsibilities but leaving space for some creativity",
      "C. balancing work with social interactions and something fun",
      "D. making sure you are in control and moving closer to your big goals"
    ],
    types:{
      A:["ISTJ", "ESTJ"],
      B:["INFJ", "INFP"],
      C:["ENFP", "ESFP"],
      D:["ENTJ", "INTJ"]
    }
  },

  {
    q: "4. midday hits and you are feeling a bit tired. how do you recharge?",
    opt: [
      "A. take a short nap or a quiet break alone",
      "B. go for a walk outside or squeeze in some light exercise",
      "C. chat with a friend, grab a coffee, or watch something funny online",
      "D. refocus on your to-do list and power through"
    ],
    types:{
      A:["ISFJ", "INFJ"],
      B:["ISFP", "ESFP"],
      C:["ENFP", "ENTP"],
      D:["ESTJ", "ENTJ"]
    }
  },

  {
    q: "5. it's the afternoon, and you remember you have a party to attend tonight. how do you feel about it?",
    opt: [
      "A. excited, and you are already planning how to maximize your social time there",
      "B. a bit anxious - you are thinking of ways to avoid it or leave early",
      "C. intrigued, wondering who you will meet and what could happen",
      "D. calm and confident - you are ready to make an appearance and leave when you've had enough"
    ],
    types:{
      A:["ESFP", "ENFJ"],
      B:["INTJ", "INFP"],
      C:["ENTP", "ENFP"],
      D:["ISTP", "ESTP"]
    }
  },

  {
    q: "6. it's time to get ready! how do you choose your outfit?",
    opt: [
      "A. something comfortable but stylish that feels like 'you'",
      "B. something classy and put-together that matches your plans",
      "C. a bold or fun outfit that will standout and get attention",
      "D. something practical but still sharp and powerful"
    ],
    types:{
      A:["INFP", "ISFP"],
      B:["ISTJ", "INFJ"],
      C:["ENFP", "ESFP"],
      D:["ESTJ", "ENTJ"]
    }
  },  

  {
    q: "7. as you are getting ready, what is playing in the background?",
    opt: [
      "A. a curated playlist with upbeat and feel-good tunes",
      "B. a podcast or audiobook - something educational or inspiring",
      "C. silence or calming background music while you focus",
      "D. a mix of genres, depending on your mood"
    ],
    types:{
      A:["ENFP", "ESFJ"],
      B:["INTJ", "INTP"],
      C:["ISFJ", "ISTJ"],
      D:["ENTP", "ESFP"]
    }
  },

  {
    q: "8. you arrive at the party. what is your first move",
    opt: [
      "A. find a drink and chat with the host or people you know",
      "B. scope out the room quietly before deciding where to settle",
      "C. dive into action - talk to strangers, start conversations, maybe even dance",
      "D. observe and engage only when something piques your interest"
    ],
    types:{
      A:["ESFJ", "ENFJ"],
      B:["ISTP", "INTJ"],
      C:["ENTP", "ESFP"],
      D:["INFJ", "INFP"]
    }
  },

  {
    q: "9. you are offered a drink at the party. what is your choice?",
    opt: [
      "A. a classic cocktail like a gin and tonic",
      "B. a unique or fruit mixed drink - something a bit different",
      "C. whatever everyone else is having - let's keep it simple",
      "D. a straightforward beer or whiskey - no fuss"
    ],
    types:{
      A:["ISTJ", "ESTJ"],
      B:["ENFP", "ESFP"],
      C:["ESFJ", "ENFJ"],
      D:["ISTP", "INTJ"]
    }
  },

  {
    q: "10. how do you usually end the night?",
    opt: [
      "A. stay until the end, making sure you've connected with everyone you wanted to",
      "B. leave quietly when you've had enough, without much fuss",
      "C. gather a smaller group for an after-party or spontaneous adventure",
      "D. head home early, satisfied that you made an appearance and had fun"
    ],
    types:{
      A:["ENFJ", "ESFP"],
      B:["ISTJ", "INFP"],
      C:["ENTP", "ENFP"],
      D:["INFJ", "INTJ"]
    }
  }
]

function getPersonality(){
  const scores = {
    ISTJ: 0, ISFJ: 0, INFJ: 0, INTJ: 0,
    ISTP: 0, ISFP: 0, INFP: 0, INTP: 0,
    ESTP: 0, ESTJ: 0, ESFJ: 0, ENFJ: 0,
    ENFP: 0, ENTP: 0, ESFP: 0, ENTJ: 0
  };

  quiz.forEach( (question, index) => {
    let answer;
    do {
      answer = prompt(`${question.q}\n${question.opt.join("\n")}\nType A, B, C, or D:\n`).toUpperCase();
    } while(!["A", "B", "C", "D"].includes(answer))

    // increment the scores based on the user's answer
    question.types[answer].forEach(type => {
      scores[type]++
    });
  });

  let maxScore = 0;
  let personalityType = "";
  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore){
      maxScore = score;
      personalityType = type;
    }
  }
  return personalityType
}

function getBev(personalityType){
  return bevPersonality[personalityType];
}

const personalityType = getPersonality();
const bev = getBev(personalityType);
alert(`Your personality type is: ${personalityType}\nYou alcoholc beverage personality is: ${bev}`)