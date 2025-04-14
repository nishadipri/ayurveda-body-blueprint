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
    text: "What's your typical body frame?",
    options: {
      vata: "Thin, light, or petite",
      pitta: "Medium, athletic build",
      kapha: "Solid, strong build"
    },
    category: "physical"
  },
  {
    id: 2,
    text: "How does your skin usually feel?",
    options: {
      vata: "Dry and rough",
      pitta: "Warm and sensitive",
      kapha: "Smooth and oily"
    },
    category: "physical"
  },
  {
    id: 3,
    text: "What best describes your hair?",
    options: {
      vata: "Dry, frizzy",
      pitta: "Fine, early graying",
      kapha: "Thick, oily"
    },
    category: "physical"
  },
  {
    id: 4,
    text: "How do you walk?",
    options: {
      vata: "Fast, light steps",
      pitta: "Purposeful stride",
      kapha: "Slow, steady"
    },
    category: "behavioral"
  },
  {
    id: 5,
    text: "How do you handle stress?",
    options: {
      vata: "Anxious, worried",
      pitta: "Irritable, angry",
      kapha: "Calm, withdrawn"
    },
    category: "mental"
  },
  {
    id: 6,
    text: "How's your appetite?",
    options: {
      vata: "Irregular, variable",
      pitta: "Strong, frequent",
      kapha: "Steady, can skip meals"
    },
    category: "physical"
  },
  {
    id: 7,
    text: "What's your energy like?",
    options: {
      vata: "Bursts of energy",
      pitta: "Sharp, focused",
      kapha: "Steady, sustained"
    },
    category: "physical"
  },
  {
    id: 8,
    text: "How do you learn new things?",
    options: {
      vata: "Quick but forgetful",
      pitta: "Sharp and focused",
      kapha: "Slow but thorough"
    },
    category: "mental"
  },
  {
    id: 9,
    text: "How do you sleep?",
    options: {
      vata: "Light, easily disturbed",
      pitta: "Moderate, regular",
      kapha: "Deep, long"
    },
    category: "physical"
  },
  {
    id: 10,
    text: "How do you handle money?",
    options: {
      vata: "Impulsive spender",
      pitta: "Strategic planner",
      kapha: "Careful saver"
    },
    category: "behavioral"
  }
];

export const doshaDescriptions = {
  vata: {
    title: "Vata",
    subtitle: "Air & Ether",
    description: "Your Vata constitution reflects qualities of air and space. You're naturally creative, quick, and adaptable.",
    characteristics: [
      "Light and agile physical structure",
      "Creative and quick-thinking",
      "Energetic and enthusiastic",
      "Flexible and adaptable",
      "Sensitive to cold",
      "Variable digestion and appetite"
    ],
    color: "border-ayurveda-sky",
    recommendations: {
      diet: "Focus on warm, nourishing foods. Best foods: sweet fruits, cooked vegetables, nuts, seeds, warm milk, ghee, and warming spices like ginger and cinnamon. Avoid: cold foods, raw vegetables, and caffeine.",
      lifestyle: "Maintain regular daily routines, especially with meals and sleep. Practice gentle yoga, meditation, and self-massage with warm oils. Keep warm and protected from cold winds.",
      herbs: "Ashwagandha for strength, Shatavari for nourishment, Calamus for mental clarity, Licorice root for vitality."
    }
  },
  pitta: {
    title: "Pitta",
    subtitle: "Fire & Water",
    description: "Your Pitta constitution embodies transformation and intensity. You're naturally focused, sharp, and determined.",
    characteristics: [
      "Athletic, medium build",
      "Sharp intellect and good focus",
      "Natural leader qualities",
      "Strong metabolism",
      "Sensitive to heat",
      "Precise and organized"
    ],
    color: "border-ayurveda-terra",
    recommendations: {
      diet: "Choose cooling, sweet foods. Best foods: sweet fruits, coconut, milk, ghee, green vegetables, and mint. Avoid: spicy foods, fermented foods, and excessive salt.",
      lifestyle: "Exercise during cooler hours, practice moon-gazing, swimming, and cooling breath work. Avoid excessive heat and competition.",
      herbs: "Amalaki for cooling, Brahmi for mental balance, Neem for purification, Shatavari for emotional balance."
    }
  },
  kapha: {
    title: "Kapha",
    subtitle: "Earth & Water",
    description: "Your Kapha constitution reflects stability and strength. You're naturally calm, grounded, and nurturing.",
    characteristics: [
      "Strong, well-built frame",
      "Calm and patient nature",
      "Excellent stamina",
      "Steady emotional state",
      "Good immunity",
      "Methodical and thorough"
    ],
    color: "border-ayurveda-leaf",
    recommendations: {
      diet: "Favor light, warm, and spicy foods. Best foods: leafy greens, legumes, honey, spices like black pepper and ginger. Avoid: heavy, cold, and sweet foods.",
      lifestyle: "Engage in vigorous exercise, try new activities, wake up early. Practice energizing breathing exercises and dry massage.",
      herbs: "Trikatu for metabolism, Guggulu for energy, Punarnava for vitality, Chitrak for digestion."
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
