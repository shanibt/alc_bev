const bevPersonality = {
  // Analysts (INTJ, INTP, ENTJ, ENTP)
  // Sentinels (ISTJ, ISFJ, ESTJ, ESFJ)
  // Diplomats (INFJ, INFP, ENFJ, ENFP)
  // Explorers (ISTP, ISFP, ESTP, ESFP)
  ISTJ: {
    beverage: "American Beer",
    pros: "Reliable, responsible, detail-oriented",
    cons: "Can be rigid, may struggle with flexibility",
    hiddenTalent: "Excellent at maintaining traditions",
    weakness: "Struggles with spontaneity",
    description: "Dependable, straightforward, and practical."
  },
  ISFJ: {
    beverage: "White Wine",
    pros: "Nurturing, attentive, patient",
    cons: "May be overly self-sacrificing, avoids conflict",
    hiddenTalent: "Exceptional at creating a warm environment",
    weakness: "Can be overly reserved about their own needs",
    description: "Supportive, considerate, and reliable."
  },
  INFJ: {
    beverage: "Taiwanese Beer",
    pros: "Insightful, empathetic, creative",
    cons: "Can be overly idealistic, may withdraw from others",
    hiddenTalent: "Deep understanding of others' emotions",
    weakness: "Difficulty in dealing with practical issues",
    description: "Thoughtful, introspective, and caring."
  },
  INTJ: {
    beverage: "Whiskey",
    pros: "Strategic, independent, decisive",
    cons: "Can be perceived as aloof, overly critical",
    hiddenTalent: "Exceptional problem-solving abilities",
    weakness: "May struggle with emotional expression",
    description: "Intelligent, ambitious, and sometimes intimidating."
  },
  ISTP: {
    beverage: "Buzzball",
    pros: "Adventurous, practical, adaptable",
    cons: "Can be impulsive, struggles with long-term commitments",
    hiddenTalent: "Excellent at improvising under pressure",
    weakness: "Difficulty in planning for the future",
    description: "Spontaneous, hands-on, and action-oriented."
  },
  ISFP: {
    beverage: "Hard Seltzer",
    pros: "Creative, easygoing, sensitive",
    cons: "May avoid confrontation, can be inconsistent",
    hiddenTalent: "Highly attuned to aesthetic details",
    weakness: "Avoids dealing with difficult emotions directly",
    description: "Artistic, gentle, and authentic."
  },
  INFP: {
    beverage: "Jungle Juice",
    pros: "Idealistic, empathetic, imaginative",
    cons: "Can be impractical, struggles with decisiveness",
    hiddenTalent: "Strong ability to see the big picture",
    weakness: "Difficulty in dealing with mundane tasks",
    description: "Compassionate, introspective, and passionate."
  },
  INTP: {
    beverage: "Soju",
    pros: "Analytical, innovative, curious",
    cons: "Can be detached, may struggle with social interactions",
    hiddenTalent: "Exceptional at complex problem-solving",
    weakness: "Difficulty in connecting with others emotionally",
    description: "Intellectual, unconventional, and reserved."
  },
  ESTP: {
    beverage: "Hennessy",
    pros: "Energetic, confident, action-oriented",
    cons: "Can be reckless, may avoid long-term planning",
    hiddenTalent: "Skilled at seizing opportunities",
    weakness: "Difficulty in considering long-term consequences",
    description: "Bold, charismatic, and dynamic."
  },
  ESTJ: {
    beverage: "Champagne",
    pros: "Organized, decisive, pragmatic",
    cons: "Can be inflexible, may struggle with emotional nuances",
    hiddenTalent: "Excellent at leadership and management",
    weakness: "May overlook the emotional aspects of decisions",
    description: "Efficient, authoritative, and responsible."
  },
  ESFJ: {
    beverage: "Red Wine",
    pros: "Sociable, empathetic, conscientious",
    cons: "Can be overly concerned with approval, may avoid conflict",
    hiddenTalent: "Strong ability to bring people together",
    weakness: "May neglect their own needs for others' approval",
    description: "Friendly, supportive, and caring."
  },
  ENFJ: {
    beverage: "Pink Whitney",
    pros: "Charismatic, empathetic, motivational",
    cons: "Can be overly idealistic, may struggle with setting boundaries",
    hiddenTalent: "Natural ability to inspire and lead",
    weakness: "May overextend themselves to help others",
    description: "Energetic, engaging, and supportive."
  },
  ENFP: {
    beverage: "Twisted Tea",
    pros: "Creative, enthusiastic, spontaneous",
    cons: "Can be scattered, may struggle with follow-through",
    hiddenTalent: "Exceptional at thinking outside the box",
    weakness: "Difficulty in focusing on long-term goals",
    description: "Fun-loving, imaginative, and energetic."
  },
  ENTP: {
    beverage: "Tequila",
    pros: "Inventive, outgoing, adaptable",
    cons: "Can be argumentative, may struggle with routine",
    hiddenTalent: "Excellent at generating new ideas",
    weakness: "Difficulty in maintaining consistency",
    description: "Quick-witted, innovative, and lively."
  },
  ESFP: {
    beverage: "Beatbox",
    pros: "Outgoing, fun-loving, spontaneous",
    cons: "Can be impulsive, may struggle with responsibilities",
    hiddenTalent: "Natural ability to entertain and energize",
    weakness: "Difficulty in focusing on long-term commitments",
    description: "Vibrant, entertaining, and energetic."
  },
  ENTJ: {
    beverage: "Vodka",
    pros: "Strategic, assertive, decisive",
    cons: "Can be domineering, may overlook others perspectives",
    hiddenTalent: "Strong leadership and organizational skills",
    weakness: "Can be perceived as overbearing or dismissive",
    description: "Commanding, efficient, and driven."
  }
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

const prompt=require("prompt-sync")({sigint:true}); // this is req for prompt() to work in VSCode. but not in online compiler. 

function getPersonality(){
  const scores = {
    ISTJ: 0, ISFJ: 0, INFJ: 0, INTJ: 0,
    ISTP: 0, ISFP: 0, INFP: 0, INTP: 0,
    ESTP: 0, ESTJ: 0, ESFJ: 0, ENFJ: 0,
    ENFP: 0, ENTP: 0, ESFP: 0, ENTJ: 0
  };

  quiz.forEach(question => {
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

function getBev(personalityType) {
  const details = bevPersonality[personalityType];
  return `
    Your beverage personality is: ${details.beverage}
    Pros: ${details.pros}
    Cons: ${details.cons}
    Hidden Talent: ${details.hiddenTalent}
    Weakness: ${details.weakness}
    How Others Describe Them: ${details.description}
  `;
}

const personalityType = getPersonality();
const bev = getBev(personalityType);
console.log(`Your personality type is ${personalityType}\n${bev}`);