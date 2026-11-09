import type { Bedtime } from "./bedtime1";

// Bedtime stories, part 3: the great imams of ḥadīth and fiqh. These come from
// the classical biographies (al-Khaṭīb’s Tārīkh Baghdād, al-Dhahabī’s Siyar
// Aʿlām al-Nubalāʾ, Ibn Ḥajar’s Hady al-Sārī and Tahdhīb al-Tahdhīb, al-Qāḍī
// ʿIyāḍ’s Tartīb al-Madārik). Some well-known accounts have chains scholars
// discuss; they are told as “reported”. A scholar should review before release.

export const BEDTIME_3: Bedtime[] = [
  { id: "bukhari", cat: "imams", title: "Imam al-Bukhārī: the boy from Bukhara", teaser: "A mother’s duʿāʾ, a boy’s memory, and the most trusted book after the Quran.",
    paras: [
      "Over a thousand years ago, in the city of Bukhara, in the land we now call Uzbekistan, a baby boy called Muhammad was born, in the year 194 after the Hijrah. His father, Ismāʿīl, was a scholar of ḥadīth, but he died when Muhammad was very small.",
      "It is reported that when he was a little boy, Muhammad lost his sight. His mother cried and prayed to Allah day and night. One night she saw the prophet Ibrāhīm (as) in a dream, who told her: “Allah has returned your son’s sight because of your many duʿāʾs.” In the morning, the boy could see.",
      "Muhammad had an amazing memory. As a boy in the classes of ḥadīth, he would sit and listen without writing. His classmates teased him. One day he said: “Bring me what you have written.” They brought thousands of ḥadīth, and he recited every one of them from memory, so that they began correcting their notebooks from his memory.",
      "At sixteen he travelled to Makkah for Ḥajj with his mother and brother, and stayed to study. He travelled for years to Madinah, Baṣrah, Kūfah, Baghdad, Egypt and Syria, learning from more than a thousand teachers.",
      "Then he set out to gather the most authentic ḥadīth of the Prophet ﷺ into one book. He looked through some 600,000 narrations and chose only the soundest. It is reported that before writing each ḥadīth in his book, he would make ghusl and pray two rakʿahs. The work took him sixteen years.",
      "That book, Ṣaḥīḥ al-Bukhārī, is considered by Muslims the most trusted book after the Quran.",
      "Imam al-Bukhārī died on the night of ʿĪd al-Fiṭr in the year 256, in the village of Khartank near Samarkand. His resting place stands there to this day, and people from all over the world come to visit it.",
    ],
    moral: "Never underestimate a mother’s duʿāʾ, or what a child who loves knowledge can become.",
    talk: "Imam al-Bukhārī came from our part of the world. What would you like to become, for Allah?",
    src: "Ibn Ḥajar, Hady al-Sārī; al-Khaṭīb, Tārīkh Baghdād; al-Dhahabī, Siyar Aʿlām al-Nubalāʾ" },

  { id: "bukhari-test", cat: "imams", title: "The test of the hundred ḥadīth", teaser: "Baghdad’s scholars try to trick the young imam from Bukhara.",
    paras: [
      "When Imam al-Bukhārī came to Baghdad, his fame had already arrived before him. The scholars of the city decided to test him.",
      "They took one hundred ḥadīth and mixed them up on purpose: each chain of narrators was put with the wrong text, and each text with the wrong chain. Then they gave them to ten men, ten ḥadīth each, to ask him in front of a great crowd.",
      "The first man stood and read his first mixed-up ḥadīth. Al-Bukhārī said: “I do not know it.” The second: “I do not know it.” All ten. The ordinary people in the crowd began to whisper: this man doesn’t know much at all! But the scholars understood.",
      "When all ten men had finished, al-Bukhārī turned to the first one and said: “Your first ḥadīth, you read it like this; its correct form is this.” And he went through all one hundred, putting every chain back with its right text, in the exact order they had been read to him.",
      "The people were stunned. The scholars of Baghdad stood up and acknowledged his greatness.",
      "Ibn Ḥajar commented: the amazing part is not that he knew the correct versions; he was a ḥāfiẓ. The amazing part is that he remembered the wrong versions, in order, after hearing them only once.",
    ],
    moral: "Real knowledge is humble: he simply said “I do not know it” until it was time to explain. And Allah blesses memory with sincerity.",
    talk: "Is it hard to say “I don’t know”? Why is it a good thing to say when it’s true?",
    src: "A famous account in al-Khaṭīb, Tārīkh Baghdād, and Ibn Ḥajar, Hady al-Sārī; scholars discuss its chain" },

  { id: "tirmidhi", cat: "imams", title: "Imam al-Tirmidhī and the blank pages", teaser: "The student from Termez whose teacher learned from him.",
    paras: [
      "Muhammad ibn ʿĪsā was born around the year 209 after the Hijrah, near the city of Termez on the banks of the Amu Darya, in the south of today’s Uzbekistan. That is why he is called al-Tirmidhī.",
      "He travelled to learn ḥadīth, and studied with the greatest teacher of his time, Imam al-Bukhārī. It is reported that al-Bukhārī once told him: “I have benefited from you more than you have benefited from me.”",
      "His memory was legendary. It is reported that he once copied two booklets of ḥadīth from a certain shaykh but had not yet heard them read aloud. On a journey he met the shaykh and asked to hear them, and the shaykh agreed to read. But al-Tirmidhī discovered he had brought the wrong papers, only blank pages!",
      "He held the blank pages in his hands as the shaykh read. Then the shaykh noticed. Angry, he said: “Are you not ashamed? You are mocking me!” Al-Tirmidhī said: “I have memorised everything you read.” “Recite it then!” He recited all of it.",
      "The shaykh could not believe it, and read him forty more ḥadīth he had never heard. Al-Tirmidhī recited all forty back without a single mistake.",
      "He wrote the Jāmiʿ, one of the six great books of ḥadīth, and a beautiful book called al-Shamāʾil, describing how the Prophet ﷺ looked, dressed, ate, laughed and slept, so that people who never saw him could come to love him.",
      "In his old age he became blind, from weeping much out of fear of Allah, it is said. He died in the year 279, and his resting place near Termez, in Sherobod, is visited to this day.",
    ],
    moral: "Knowledge is a trust: memorise it, write it down, and share it so others can love the Prophet ﷺ too.",
    talk: "Al-Tirmidhī wrote about how the Prophet ﷺ smiled and walked. What do you know about how the Prophet ﷺ looked or behaved?",
    src: "al-Dhahabī, Siyar Aʿlām al-Nubalāʾ; Ibn Ḥajar, Tahdhīb al-Tahdhīb" },

  { id: "abu-hanifah", cat: "imams", title: "Imam Abū Ḥanīfah and the quiet neighbour", teaser: "The great jurist notices that a noisy neighbour has gone silent.",
    paras: [
      "Nuʿmān ibn Thābit, known as Abū Ḥanīfah, was born in Kūfah, in Iraq, in the year 80 after the Hijrah. He was a cloth merchant, famous for his honesty, and a scholar so wise that Imam al-Shāfiʿī said: in understanding the religion, all people are the children of Abū Ḥanīfah. The Hanafi school, followed in Central Asia and much of the world, is named after him.",
      "It is reported that once his business partner sold a piece of cloth with a defect without telling the buyer. When Abū Ḥanīfah found out, he gave away the whole price of that sale in charity, because he could not find the buyer to return it.",
      "Abū Ḥanīfah had a neighbour, a young shoemaker, who came home every night, drank, and sang loudly late into the night: “They lost me, and what a young man they lost!” Abū Ḥanīfah, who stayed up praying at night, heard him every night, but he never complained.",
      "One night, the singing stopped. And the next night. Abū Ḥanīfah asked about him and was told: the night watch arrested him, and he is in prison.",
      "The next morning, Abū Ḥanīfah put on his turban and went to the governor himself. The governor was amazed to see the great scholar at his door and asked what he needed. “My neighbour,” said Abū Ḥanīfah, “was arrested. I ask you to release him.” The governor released him, and every prisoner taken that night with him.",
      "As they walked home, Abū Ḥanīfah turned to the young man and said gently: “Young man, did we lose you?” The young man understood. He said: “No, you protected me and took care of me. May Allah reward you.” And he repented and never went back to his old ways.",
      "Abū Ḥanīfah refused to become chief judge for the caliph, fearing he would be forced to judge unjustly. It is reported he was imprisoned for refusing, and he died in the year 150.",
    ],
    moral: "Neighbours have rights even when they are not good to us. Kindness and care can change a heart more than complaints.",
    talk: "How could we show care to a neighbour this week?",
    src: "al-Khaṭīb, Tārīkh Baghdād; al-Dhahabī, Siyar Aʿlām al-Nubalāʾ" },

  { id: "malik", cat: "imams", title: "Imam Mālik and the scorpion", teaser: "The imam of Madinah, and a lesson he would not interrupt.",
    paras: [
      "Mālik ibn Anas was born in Madinah in the year 93 after the Hijrah, and lived his whole life in the city of the Prophet ﷺ. He became the Imam of Madinah, and the Maliki school is named after him. He wrote al-Muwaṭṭaʾ, one of the earliest great books of ḥadīth and fiqh.",
      "His love and respect for the Prophet ﷺ were so great that, it is reported, he would not ride an animal in Madinah, saying: “I am ashamed to trample with hooves a land in which the Messenger of Allah ﷺ is buried.”",
      "Before teaching ḥadīth, he would make wuḍūʾ or ghusl, put on his best clothes and perfume, and sit with dignity and calm. If someone raised their voice in his lesson, he would remind them: Allah said, “Do not raise your voices above the voice of the Prophet” (49:2), and his ḥadīth deserve the same respect.",
      "One day, while he was teaching the ḥadīth of the Prophet ﷺ, his students noticed his face changing colour again and again. But he did not stop, and did not interrupt a single word.",
      "When the lesson ended and the people had left, ʿAbdullāh ibn al-Mubārak asked him what had happened. Imam Mālik showed him: a scorpion had stung him sixteen times during the lesson. “I stayed patient,” he said, “out of respect for the ḥadīth of the Messenger of Allah ﷺ.”",
      "Once the caliph wanted to make everyone in the Muslim world follow al-Muwaṭṭaʾ. Imam Mālik refused: the companions spread to many lands, and each land has knowledge from them. Let the people keep what they have.",
    ],
    moral: "Love for the Prophet ﷺ shows in how we respect his words. And true scholars are humble, respecting knowledge wherever it is found.",
    talk: "How can we show respect when the Quran or a ḥadīth is being read?",
    src: "al-Qāḍī ʿIyāḍ, Tartīb al-Madārik; al-Dhahabī, Siyar Aʿlām al-Nubalāʾ" },

  { id: "shafii", cat: "imams", title: "Imam al-Shāfiʿī: knowledge is light", teaser: "An orphan with no paper who memorised everything.",
    paras: [
      "Muhammad ibn Idrīs al-Shāfiʿī was born in Gaza in the year 150 after the Hijrah, the very year Imam Abū Ḥanīfah died. His father died when he was a baby, and his mother, who was very poor, took him to Makkah to grow up among his relatives.",
      "His mother could not pay the teacher. But the little boy listened so carefully that he began helping the teacher with the other children, and so he studied for free. He had memorised the whole Quran by the age of seven.",
      "He was too poor to buy paper. He wrote his lessons on bones, broken pottery and palm leaves, and stored them in a jar at home.",
      "He lived for years among the desert tribe of Hudhayl to learn the purest Arabic and their poetry. Then he memorised Imam Mālik’s al-Muwaṭṭaʾ and travelled to Madinah to study with him. Mālik saw something special in him and said: “Allah has placed a light in your heart. Do not put it out with sins.”",
      "Al-Shāfiʿī never forgot that. Once, it is reported, he found his memory weakening, and complained to his teacher Wakīʿ. He later wrote in a poem:",
      "“I complained to Wakīʿ of my weak memory; he guided me to leave sins. He told me that knowledge is a light, and the light of Allah is not given to one who disobeys.”",
      "He became one of the greatest imams, founded the Shafiʿi school, and wrote al-Risālah, the first book on the principles of understanding the Quran and Sunnah. He died in Egypt in the year 204.",
    ],
    moral: "Poverty cannot stop a person who loves knowledge. But sin can dim it, because knowledge is a light from Allah.",
    talk: "Al-Shāfiʿī wrote on bones because he had no paper. What do we have to help us learn that he never had?",
    src: "al-Bayhaqī, Manāqib al-Shāfiʿī; al-Dhahabī, Siyar Aʿlām al-Nubalāʾ" },

  { id: "ahmad", cat: "imams", title: "Imam Aḥmad and the trial", teaser: "A scholar who would not say what was not true, whatever it cost.",
    paras: [
      "Aḥmad ibn Ḥanbal was born in Baghdad in the year 164 after the Hijrah. His father died when he was young, and his mother raised him alone. She would wake him before dawn, warm water for his wuḍūʾ, wrap him up, and walk him through the dark streets to the masjid to learn ḥadīth.",
      "He grew up to be one of the greatest scholars of ḥadīth, the founder of the Hanbali school, and wrote al-Musnad, a collection of some 27,000 narrations.",
      "In his time, some caliphs adopted a false idea: that the Quran is created, like any other thing, rather than being the speech of Allah. They forced scholars to say it. Many gave in out of fear.",
      "Imam Aḥmad refused. He said: “Bring me something from the Book of Allah or the Sunnah of His Messenger, and I will say it.”",
      "He was chained, imprisoned and flogged until he fainted. It is reported that a famous thief, Abū al-Haytham, came to him in prison and said: “Aḥmad, I was flogged thousands of times for stealing, and I stayed patient for the sake of falsehood. Will you not stay patient for the sake of the truth?” Imam Aḥmad later made duʿāʾ for that thief.",
      "Imam Aḥmad stayed firm. Years later, a new caliph ended the trial, and the people honoured Aḥmad as the one who had protected the belief of the ummah.",
      "When he died in the year 241, it is said that hundreds of thousands of people attended his funeral prayer.",
    ],
    moral: "Stand firm on the truth with patience. And never belittle anyone: even a thief’s words gave strength to a great imam.",
    talk: "Imam Aḥmad’s mother walked him to the masjid in the dark. Who helps you do good things?",
    src: "al-Dhahabī, Siyar Aʿlām al-Nubalāʾ; Ibn al-Jawzī, Manāqib al-Imām Aḥmad" },
];
