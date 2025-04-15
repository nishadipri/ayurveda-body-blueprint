export interface Question {
  id: number;
  text: string;
  options: {
    vata: string;
    pitta: string;
    kapha: string;
  };
  category: "physical" | "mental" | "behavioral";
}

export interface DoshaScore {
  vata: number;
  pitta: number;
  kapha: number;
}

export const doshaQuestions: Question[] = [
  {
    id: 1,
    text: "How would you describe your body frame naturally?",
    options: {
      vata: "Slim and delicate with prominent joints",
      pitta: "Medium, athletic with good muscle tone",
      kapha: "Strong, well-built with sturdy joints"
    },
    category: "physical"
  },
  {
    id: 2,
    text: "What's your typical skin condition?",
    options: {
      vata: "Dry, rough, or gets chapped easily",
      pitta: "Sensitive, prone to redness",
      kapha: "Smooth, naturally moisturized"
    },
    category: "physical"
  },
  {
    id: 3,
    text: "How do you usually feel in cold weather?",
    options: {
      vata: "Very sensitive to cold, need extra layers",
      pitta: "Moderate discomfort, adapt quickly",
      kapha: "Handle cold well, enjoy winter"
    },
    category: "physical"
  },
  {
    id: 4,
    text: "What's your typical eating pattern?",
    options: {
      vata: "Irregular, sometimes forget meals",
      pitta: "Sharp hunger, need regular meals",
      kapha: "Can easily skip meals, steady appetite"
    },
    category: "behavioral"
  },
  {
    id: 5,
    text: "How do you respond to stress at work?",
    options: {
      vata: "Become anxious and overwhelmed",
      pitta: "Get frustrated and intense",
      kapha: "Remain calm but withdraw"
    },
    category: "mental"
  },
  {
    id: 6,
    text: "What's your usual sleep pattern?",
    options: {
      vata: "Light sleeper, wake up easily",
      pitta: "Regular sleep but wake up hot",
      kapha: "Deep sleeper, hard to wake up"
    },
    category: "physical"
  },
  {
    id: 7,
    text: "How do you prefer to exercise?",
    options: {
      vata: "Gentle yoga or walking",
      pitta: "Intense workouts, competitive sports",
      kapha: "Slow but steady, endurance activities"
    },
    category: "behavioral"
  },
  {
    id: 8,
    text: "How's your memory?",
    options: {
      vata: "Quick to learn, quick to forget",
      pitta: "Sharp and focused memory",
      kapha: "Slow to learn but never forget"
    },
    category: "mental"
  },
  {
    id: 9,
    text: "What's your speaking style?",
    options: {
      vata: "Fast, enthusiastic, sometimes jumping topics",
      pitta: "Clear, focused, precise",
      kapha: "Calm, methodical, thoughtful"
    },
    category: "behavioral"
  },
  {
    id: 10,
    text: "How do you handle weather changes?",
    options: {
      vata: "Very sensitive to weather shifts",
      pitta: "Mostly affected by heat",
      kapha: "Adapt well to changes"
    },
    category: "physical"
  },
  {
    id: 11,
    text: "What's your typical energy level throughout the day?",
    options: {
      vata: "Fluctuating energy levels",
      pitta: "Strong energy until exhaustion",
      kapha: "Steady, consistent energy"
    },
    category: "physical"
  },
  {
    id: 12,
    text: "How do you make decisions?",
    options: {
      vata: "Quick but often changing mind",
      pitta: "Decisive and determined",
      kapha: "Careful and methodical"
    },
    category: "mental"
  },
  {
    id: 13,
    text: "What's your reaction to humid summers?",
    options: {
      vata: "Enjoy the warmth and moisture",
      pitta: "Feel uncomfortable and irritated",
      kapha: "Feel heavy and sluggish"
    },
    category: "physical"
  },
  {
    id: 14,
    text: "How do you handle projects and tasks?",
    options: {
      vata: "Start many, finish few",
      pitta: "Focused and goal-oriented",
      kapha: "Steady, methodical completion"
    },
    category: "behavioral"
  },
  {
    id: 15,
    text: "What's your relationship with routine?",
    options: {
      vata: "Prefer flexibility and spontaneity",
      pitta: "Like structured but flexible schedules",
      kapha: "Thrive on fixed routines"
    },
    category: "behavioral"
  }
];

// Update doshaDescriptions to remove specific Danish references
export const doshaDescriptions = {
  vata: {
    title: "Vata",
    subtitle: "Air & Ether",
    description: "Your Vata constitution reflects qualities of air and space, making you naturally creative and adaptable.",
    characteristics: [
      "Light and agile physical structure",
      "Creative and quick-thinking",
      "Sensitive to cold weather",
      "Variable digestion and appetite",
      "Enthusiastic and adaptable",
      "Prone to anxiety when unbalanced"
    ],
    color: "border-ayurveda-sky",
    recommendations: {
      diet: "Focus on warm, grounding foods. Best foods: root vegetables, warming grains, organic dairy, nuts, and local berries. Add warming spices like cardamom, cinnamon, and ginger. Avoid cold foods and raw vegetables.",
      lifestyle: "Maintain regular daily routines. Practice gentle yoga, meditation, and regular oil massage. Keep warm and protected from cold winds. Consider light therapy during darker seasons.",
      herbs: "Beneficial herbs: Chamomile, Fennel, Rosemary, Thyme, and Peppermint. These can be found in local health stores or grown at home."
    }
  },
  pitta: {
    title: "Pitta",
    subtitle: "Fire & Water",
    description: "Your Pitta constitution embodies transformation and intensity, well-suited for focused work.",
    characteristics: [
      "Athletic, medium build",
      "Sharp intellect and good focus",
      "Strong metabolism",
      "Natural leadership qualities",
      "Sensitive to heat",
      "Precise and organized"
    ],
    color: "border-ayurveda-terra",
    recommendations: {
      diet: "Choose cooling, sweet foods. Best foods: berries, apples, pears, cucumber, leafy greens, dairy products, and cooling grains. Include fresh herbs like mint and dill. Avoid excessive spicy foods and fermented dishes.",
      lifestyle: "Exercise during cooler hours, enjoy water activities. Practice cooling breathing exercises. Balance work with relaxation in local parks.",
      herbs: "Cooling herbs: Mint, Dandelion, Nettle, Lemon Balm, and local rose. Many can be found in local markets or grown in home gardens."
    }
  },
  kapha: {
    title: "Kapha",
    subtitle: "Earth & Water",
    description: "Your Kapha constitution reflects stability and strength, complementing a steady lifestyle.",
    characteristics: [
      "Strong, well-built frame",
      "Calm and patient nature",
      "Excellent stamina",
      "Good immunity",
      "Steady emotional state",
      "Methodical approach"
    ],
    color: "border-ayurveda-leaf",
    recommendations: {
      diet: "Favor light, warming foods. Best foods: rye bread, bitter greens, legumes, light soups, and warm spices. Include local herbs and spices like horseradish and mustard. Limit heavy dairy and sweet foods.",
      lifestyle: "Embrace active lifestyle opportunities - cycling, brisk walking in parks, swimming. Start your day early. Join group exercises to stay motivated.",
      herbs: "Stimulating herbs: Juniper, Ginger, Birch, Black Pepper, and Sage. These can be found in local health food stores and markets."
    }
  },
  vata_pitta: {
    title: "Vata-Pitta",
    subtitle: "Air, Ether & Fire",
    description: "A Vata-Pitta constitution combines the creativity and movement of Vata with the intensity and sharpness of Pitta. This dual-dosha type benefits from balancing practices for both energies.",
    characteristics: [
      "Creative and intelligent",
      "Quick-thinking and articulate",
      "Moderate to thin build",
      "Skin tends to be dry and sensitive",
      "Variable energy with periods of intensity",
      "May fluctuate between anxiety and irritability"
    ],
    color: "border-ayurveda-sky",
    recommendations: {
      diet: "Favor warm, nourishing, moderately oily foods. Reduce extremely spicy, cold, or raw foods. Include sweet, sour, and salty tastes in moderation.",
      lifestyle: "Maintain regular routines while allowing for creative expression. Balance activity with rest. Avoid extreme temperatures.",
      herbs: "Ashwagandha, brahmi, and shatavari can be beneficial."
    }
  },
  pitta_kapha: {
    title: "Pitta-Kapha",
    subtitle: "Fire, Water & Earth",
    description: "A Pitta-Kapha constitution combines the intensity and focus of Pitta with the stability and strength of Kapha. This dual-dosha type tends to have good physical stamina and mental determination.",
    characteristics: [
      "Strong physique with good muscle tone",
      "Sharp intellect with emotional stability",
      "Oily skin with good color",
      "Strong digestion and steady appetite",
      "Determined and methodical",
      "May struggle with stubbornness or intensity"
    ],
    color: "border-ayurveda-terra",
    recommendations: {
      diet: "Favor light, warm foods that are not too oily. Include bitter, astringent, and pungent tastes. Moderate sweet, sour, and salty tastes.",
      lifestyle: "Regular, moderate exercise is important. Balance work with relaxation. Maintain schedules but allow for flexibility.",
      herbs: "Triphala, amalaki, and guduchi can be beneficial."
    }
  },
  vata_kapha: {
    title: "Vata-Kapha",
    subtitle: "Air, Ether & Earth, Water",
    description: "A Vata-Kapha constitution combines the creativity and movement of Vata with the stability and nurturing qualities of Kapha. This dual-dosha type often experiences fluctuations between activity and inertia.",
    characteristics: [
      "Variable physique, sometimes thin, sometimes heavier",
      "Dry yet cool skin",
      "Creative with good long-term memory",
      "Fluctuating energy levels",
      "Both adaptable and resistant to change",
      "May experience anxiety or lethargy when out of balance"
    ],
    color: "border-ayurveda-leaf",
    recommendations: {
      diet: "Favor warm, light, and mildly spiced foods. Include pungent, bitter and astringent tastes. Moderate sweet, sour, and salty tastes.",
      lifestyle: "Regular, moderate exercise is important. Find balance between routine and stimulation. Keep warm and dry.",
      herbs: "Ginger, tulsi, and punarnava can be beneficial."
    }
  },
  tri_dosha: {
    title: "Tri-Dosha",
    subtitle: "Balanced Constitution",
    description: "A Tri-Doshic constitution represents a relatively equal balance of all three doshas. This rare constitution combines qualities of Vata, Pitta, and Kapha, often resulting in good health and adaptability.",
    characteristics: [
      "Well-proportioned physique",
      "Balanced skin qualities",
      "Good mental and physical energy",
      "Adaptable to different environments",
      "Generally good health resistance",
      "Requires attention to whichever dosha becomes aggravated"
    ],
    color: "border-ayurveda-forest",
    recommendations: {
      diet: "Focus on seasonal eating and paying attention to which dosha might be becoming imbalanced. Include all six tastes in your diet.",
      lifestyle: "Adjust your routine seasonally. Practice moderate exercise regularly. Pay attention to which dosha might need more attention based on environmental factors.",
      herbs: "Triphala, ashwagandha, and holy basil are generally beneficial."
    }
  }
};

export const calculateDoshaType = (scores: DoshaScore): keyof typeof doshaDescriptions => {
  const { vata, pitta, kapha } = scores;
  const total = vata + pitta + kapha;
  
  // Calculate percentages
  const vataPercent = (vata / total) * 100;
  const pittaPercent = (pitta / total) * 100;
  const kaphaPercent = (kapha / total) * 100;
  
  // Thresholds for primary and secondary doshas
  const primaryThreshold = 40; // If a dosha is over 40%, it's primary
  const secondaryThreshold = 30; // If a dosha is over 30%, it's significant
  
  // Check for dominant single dosha (more than 50%)
  if (vataPercent >= 50) return "vata";
  if (pittaPercent >= 50) return "pitta";
  if (kaphaPercent >= 50) return "kapha";
  
  // Check for dual-dosha types
  if (vataPercent >= primaryThreshold && pittaPercent >= secondaryThreshold) return "vata_pitta";
  if (pittaPercent >= primaryThreshold && kaphaPercent >= secondaryThreshold) return "pitta_kapha";
  if (vataPercent >= primaryThreshold && kaphaPercent >= secondaryThreshold) return "vata_kapha";
  if (pittaPercent >= primaryThreshold && vataPercent >= secondaryThreshold) return "vata_pitta";
  if (kaphaPercent >= primaryThreshold && pittaPercent >= secondaryThreshold) return "pitta_kapha";
  if (kaphaPercent >= primaryThreshold && vataPercent >= secondaryThreshold) return "vata_kapha";
  
  // If all three are relatively balanced
  return "tri_dosha";
};
