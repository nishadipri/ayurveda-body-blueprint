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
    text: "How would you describe your physical frame?",
    options: {
      vata: "Small and thin-boned with prominent joints",
      pitta: "Medium, symmetrical build with good muscle tone",
      kapha: "Large, well-developed frame with sturdy bones"
    },
    category: "physical"
  },
  {
    id: 2,
    text: "What best describes your skin?",
    options: {
      vata: "Dry, thin, and cool to touch",
      pitta: "Warm, reddish, sensitive with freckles or moles",
      kapha: "Thick, smooth, and naturally moist"
    },
    category: "physical"
  },
  {
    id: 3,
    text: "Which best describes your hair characteristics?",
    options: {
      vata: "Dry, rough, or curly",
      pitta: "Fine, straight, early graying",
      kapha: "Thick, wavy, and luxuriant"
    },
    category: "physical"
  },
  {
    id: 4,
    text: "How would you describe your eyes?",
    options: {
      vata: "Small, active, darting eyes that are often dry",
      pitta: "Medium-sized, sharp, penetrating gaze",
      kapha: "Large, attractive eyes with thick lashes"
    },
    category: "physical"
  },
  {
    id: 5,
    text: "What are your sleep patterns like?",
    options: {
      vata: "Light sleeper, tends to wake up easily",
      pitta: "Moderate sleep, but sharp and quick to wake",
      kapha: "Deep, long sleeper, slow to wake up"
    },
    category: "physical"
  },
  {
    id: 6,
    text: "How do you typically walk?",
    options: {
      vata: "Quick, light steps with a variable pace",
      pitta: "Determined, purposeful stride",
      kapha: "Slow, steady, graceful gait"
    },
    category: "behavioral"
  },
  {
    id: 7,
    text: "How would you describe your voice?",
    options: {
      vata: "Low volume, fast-talking, tends to ramble",
      pitta: "Sharp, clear, persuasive speech",
      kapha: "Deep, melodious voice, speaks slowly"
    },
    category: "behavioral"
  },
  {
    id: 8,
    text: "What is your typical response to stress?",
    options: {
      vata: "Anxious, worried, and overwhelmed",
      pitta: "Irritable, intense, and argumentative",
      kapha: "Calm, withdrawn, seeks comfort"
    },
    category: "mental"
  },
  {
    id: 9,
    text: "How do you handle finances?",
    options: {
      vata: "Impulsive spender, variable habits",
      pitta: "Calculated spender, good planning",
      kapha: "Conservative, saves money well"
    },
    category: "behavioral"
  },
  {
    id: 10,
    text: "What's your characteristic body temperature?",
    options: {
      vata: "Often feels cold, poor circulation",
      pitta: "Feels warm, doesn't like hot weather",
      kapha: "Moderate, adapts well to most temperatures"
    },
    category: "physical"
  },
  {
    id: 11,
    text: "How is your memory?",
    options: {
      vata: "Learns quickly but forgets quickly",
      pitta: "Sharp, clear memory with good retention",
      kapha: "Slow to learn but never forgets"
    },
    category: "mental"
  },
  {
    id: 12,
    text: "What's your emotional tendency?",
    options: {
      vata: "Easily excited, quick mood changes",
      pitta: "Intense emotions, particularly around achievement",
      kapha: "Steady, calm, slow to anger"
    },
    category: "mental"
  },
  {
    id: 13,
    text: "How's your digestion?",
    options: {
      vata: "Irregular, tends to bloat easily",
      pitta: "Strong, gets hungry quickly",
      kapha: "Slow but steady digestion"
    },
    category: "physical"
  },
  {
    id: 14,
    text: "What about your eating habits?",
    options: {
      vata: "Irregular eating patterns, variable appetite",
      pitta: "Regular meals, strong appetite",
      kapha: "Can skip meals easily, steady appetite"
    },
    category: "behavioral"
  },
  {
    id: 15,
    text: "How do you approach work?",
    options: {
      vata: "Creative but easily distracted",
      pitta: "Focused, organized, and efficient",
      kapha: "Methodical, steady, thorough"
    },
    category: "behavioral"
  },
  {
    id: 16,
    text: "What's your energy level like?",
    options: {
      vata: "Bursts of energy followed by exhaustion",
      pitta: "Strong but measured energy throughout the day",
      kapha: "Steady energy, but slow to get started"
    },
    category: "physical"
  },
  {
    id: 17,
    text: "How do you handle change?",
    options: {
      vata: "Adapts quickly but may feel unstable",
      pitta: "Calculated adaptation when necessary",
      kapha: "Resists change, prefers routine"
    },
    category: "behavioral"
  },
  {
    id: 18,
    text: "What's your physical stamina like?",
    options: {
      vata: "Low stamina, tires quickly",
      pitta: "Moderate stamina with good endurance",
      kapha: "Strong stamina, rarely feels tired"
    },
    category: "physical"
  },
  {
    id: 19,
    text: "How do you make decisions?",
    options: {
      vata: "Quick but often changes mind",
      pitta: "Decisive and calculated",
      kapha: "Careful and methodical"
    },
    category: "mental"
  },
  {
    id: 20,
    text: "What's your typical weight pattern?",
    options: {
      vata: "Difficulty gaining weight, stays thin",
      pitta: "Moderate weight, maintains easily",
      kapha: "Gains weight easily, difficult to lose"
    },
    category: "physical"
  }
];

export const doshaDescriptions = {
  vata: {
    title: "Vata",
    subtitle: "Air & Ether",
    description: "Vata types are characterized by qualities of air and space, embodying movement, creativity, and quickness. When in balance, Vata individuals are energetic, creative, and flexible thinkers.",
    characteristics: [
      "Creative and imaginative",
      "Quick to learn but might forget easily",
      "Thin frame with prominent joints",
      "Dry skin and hair",
      "Variable energy and appetite",
      "Tendency toward anxiety when out of balance"
    ],
    color: "border-ayurveda-sky",
    recommendations: {
      diet: "Favor warm, cooked, moist, and slightly oily foods. Reduce raw foods, especially in winter. Include sweet, sour, and salty tastes.",
      lifestyle: "Maintain regular routines, especially with sleep and meals. Practice gentle, grounding exercise like yoga and walking. Keep warm and avoid excessive cold or wind.",
      herbs: "Ashwagandha, ginger, cinnamon, and cardamom can be beneficial."
    }
  },
  pitta: {
    title: "Pitta",
    subtitle: "Fire & Water",
    description: "Pitta types embody qualities of fire and water, representing transformation, intensity, and sharpness. When balanced, Pittas are intelligent, focused, and great leaders.",
    characteristics: [
      "Strong intellect and good concentration",
      "Medium build with good muscle development",
      "Fair skin that burns easily",
      "Strong digestion and appetite",
      "Natural leaders with sharp focus",
      "Tendency toward irritability when out of balance"
    ],
    color: "border-ayurveda-terra",
    recommendations: {
      diet: "Favor cooling, moderately heavy foods. Include sweet, bitter, and astringent tastes. Limit spicy, salty, and sour foods.",
      lifestyle: "Avoid excessive heat and intense competition. Engage in moderate exercise during cooler times of day. Practice relaxation techniques and moonlight walks.",
      herbs: "Aloe vera, coriander, mint, and fennel can be beneficial."
    }
  },
  kapha: {
    title: "Kapha",
    subtitle: "Earth & Water",
    description: "Kapha types reflect qualities of earth and water, representing stability, nurturing, and strength. When in balance, Kaphas are compassionate, patient, and grounded individuals.",
    characteristics: [
      "Strong, sturdy build with well-developed physique",
      "Smooth, cool skin with good hydration",
      "Calm, steady temperament",
      "Strong immunity and stamina",
      "Loyal and supportive nature",
      "Tendency toward lethargy when out of balance"
    ],
    color: "border-ayurveda-leaf",
    recommendations: {
      diet: "Favor light, dry, and warm foods. Include pungent, bitter, and astringent tastes. Limit heavy, oily, and sweet foods.",
      lifestyle: "Engage in regular, stimulating exercise. Create variety and new experiences in your routine. Rise early and avoid daytime naps.",
      herbs: "Ginger, black pepper, turmeric, and honey can be beneficial."
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
