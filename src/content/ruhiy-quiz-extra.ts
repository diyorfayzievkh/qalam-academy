import type { Question } from "./topics";

// Extra questions that bring each Spiritual Tarbiyah quiz to 20.
export const RUHIY_EXTRA: Record<string, Question[]> = {
  ruhiy: [
    { q: "Which nafs “commands evil”?", options: ["An-nafs al-ammārah", "An-nafs al-lawwāmah", "An-nafs al-muṭmaʾinnah", "An-nafs al-rāḍiyah"], answer: 0, why: "Quran 12:53.", src: "Quran 12:53" },
    { q: "What happens to the heart when a believer sins and does not repent?", options: ["Nothing", "A black spot spreads over it", "It grows stronger", "It is purified"], answer: 1, why: "Repentance polishes it; persistence covers it.", src: "Tirmidhi 3334" },
    { q: "Why did the Prophet ﷺ return a patterned garment?", options: ["It was too expensive", "Its design distracted him in prayer", "It was torn", "It was a gift"], answer: 1, why: "Remove distractions to protect khushūʿ.", src: "Bukhari 373" },
    { q: "The one who remembers his Lord and the one who does not are like…", options: ["Rich and poor", "The living and the dead", "Day and night", "Old and young"], answer: 1, why: "Bukhari 6407.", src: "Bukhari 6407" },
    { q: "What do the people of understanding say after reflecting on creation (3:191)?", options: ["“We are tired”", "“Our Lord, You did not create this in vain”", "“It happened by chance”", "Nothing"], answer: 1, why: "Real reflection leads to worship.", src: "Quran 3:191" },
    { q: "What did the Prophet ﷺ call death?", options: ["The friend", "The destroyer of pleasures", "The rest", "The end"], answer: 1, why: "Remember it often.", src: "Tirmidhi 2307" },
    { q: "Which station of murābaṭah is the evening review of the day?", options: ["Mushāraṭah", "Muḥāsabah", "Mujāhadah", "Muʿāqabah"], answer: 1, why: "ʿUmar (ra) said: “Take account of yourselves before you are taken to account”; see also 59:18.", src: "Tirmidhi 2459 (saying of ʿUmar); Quran 59:18" },
    { q: "Who will not enter Paradise, according to Bukhari 6056?", options: ["The silent", "The tale-carrier", "The traveller", "The poor"], answer: 1, why: "Namīmah is a major sin.", src: "Bukhari 6056" },
    { q: "What is true richness?", options: ["Many possessions", "Richness of the soul", "A big house", "Fame"], answer: 1, why: "Bukhari 6446.", src: "Bukhari 6446" },
    { q: "How did the Prophet ﷺ say to be in this world?", options: ["As a king", "As a stranger or a traveller", "As a guard", "As a merchant"], answer: 1, why: "Use it, but do not settle in it.", src: "Bukhari 6416" },
  ],
  "ruhiy-2": [
    { q: "Allah’s right over His servants is that they…", options: ["Build mosques", "Worship Him and associate nothing with Him", "Give all their wealth", "Never sleep"], answer: 1, why: "Bukhari 2856.", src: "Bukhari 2856" },
    { q: "What did Ibrāhīm (as) say when thrown into the fire?", options: ["Help me, people", "Ḥasbunallāhu wa niʿma-l-wakīl", "I am lost", "Nothing"], answer: 1, why: "Allah is sufficient for us, and the best disposer of affairs.", src: "Bukhari 4563" },
    { q: "According to Bukhari 6502, how does a servant draw near until Allah loves him?", options: ["Only by obligations", "By voluntary deeds after the obligations", "By wealth", "By travel"], answer: 1, why: "Then Allah becomes his hearing and sight.", src: "Bukhari 6502" },
    { q: "Hoping for Paradise while doing nothing is…", options: ["True hope", "Wishful thinking", "Patience", "Trust"], answer: 1, why: "Hope needs a cause, like a farmer who has sown.", src: "Ruhiy tarbiya, 2-juz" },
    { q: "Where did the Prophet ﷺ point when he said “taqwā is here”?", options: ["His head", "His chest", "The sky", "The masjid"], answer: 1, why: "Muslim 2564.", src: "Muslim 2564" },
    { q: "Gratitude is made of three parts. Which is NOT one of them?", options: ["Knowledge", "A state of the heart", "Action", "Showing off the gift"], answer: 3, why: "Knowing, rejoicing in the Giver, and using the gift well.", src: "Ruhiy tarbiya, 2-juz" },
    { q: "When is patience forbidden, according to the book?", options: ["Never", "When enduring oppression one should resist", "In Ramadan", "With parents"], answer: 1, why: "Such as being attacked with your family.", src: "Ruhiy tarbiya, 2-juz" },
    { q: "Allah is happier with His servant’s repentance than…", options: ["A king with his crown", "A man who finds his lost camel in the desert", "A child with a toy", "A merchant with profit"], answer: 1, why: "Bukhari 6309.", src: "Bukhari 6309" },
    { q: "Modesty (ḥayāʾ) brings…", options: ["Nothing but good", "Weakness", "Loneliness", "Poverty"], answer: 0, why: "Bukhari 6117.", src: "Bukhari 6117" },
    { q: "Which prophets asked Allah to join them with the righteous?", options: ["None", "Yūsuf, Sulaymān and Ibrāhīm", "Only Nūḥ", "Only Mūsā"], answer: 1, why: "12:101, 27:19, 26:83.", src: "Quran 12:101" },
  ],
  "ruhiy-3": [
    { q: "What are the three stages of the Ruhiy tarbiya volumes?", options: ["Fasting, prayer, Hajj", "Purification, rebuilding, taking on character", "Reading, writing, speaking", "Youth, middle age, old age"], answer: 1, why: "Poklanish, tiklanish, xulqlanish.", src: "Ruhiy tarbiya, 3-juz" },
    { q: "How many parts did Allah divide mercy into?", options: ["Ten", "A hundred", "Seven", "Ninety-nine"], answer: 1, why: "One was sent to earth; ninety-nine kept for the Day of Judgment.", src: "Muslim 2752" },
    { q: "“The Muslim is the one from whose tongue and hand…”", options: ["…wealth flows", "…the Muslims are safe", "…knowledge comes", "…orders are given"], answer: 1, why: "Bukhari 10.", src: "Bukhari 10" },
    { q: "To whom does all honour belong (35:10)?", options: ["Kings", "Allah", "The rich", "Scholars"], answer: 1, why: "He gives it through obedience.", src: "Quran 35:10" },
    { q: "What did the Prophet ﷺ say about treating children in gifts?", options: ["Favour the eldest", "Fear Allah and be just between your children", "Give only to sons", "No rule"], answer: 1, why: "Bukhari 2587.", src: "Bukhari 2587" },
    { q: "When ʿĀʾishah (ra) was asked about the Prophet’s ﷺ character, she said…", options: ["It was strict", "His character was the Quran", "It was quiet", "It was unknown"], answer: 1, why: "Muslim 746.", src: "Muslim 746" },
    { q: "How long did Anas (ra) serve the Prophet ﷺ without hearing “uff”?", options: ["One year", "Ten years", "Three months", "Twenty years"], answer: 1, why: "Bukhari 6038.", src: "Bukhari 6038" },
    { q: "Charity to a relative counts as…", options: ["Nothing extra", "Charity and keeping ties", "Half charity", "Disliked"], answer: 1, why: "Tirmidhi 658.", src: "Tirmidhi 658" },
    { q: "Why did a woman enter the Fire because of a cat?", options: ["She sold it", "She locked it up without food or letting it hunt", "She fed it too much", "She named it badly"], answer: 1, why: "Bukhari 2365.", src: "Bukhari 2365" },
    { q: "Whatever is eaten from a tree you planted is…", options: ["Theft", "Charity for you", "Wasted", "Your loss"], answer: 1, why: "Bukhari 2320.", src: "Bukhari 2320" },
  ],
};
