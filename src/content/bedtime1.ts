// Bedtime stories, part 1: the Prophet ﷺ and his family, and the Companions.
// Retold gently for families from ṣaḥīḥ and ḥasan narrations and the classical
// Sīrah; anything from the biographies rather than ḥadīth is labelled.
// A scholar should review before release.

export type BedtimeCat = "prophet" | "companions" | "prophets" | "imams" | "cities";
export type Bedtime = { id: string; cat: BedtimeCat; title: string; teaser: string; paras: string[]; moral: string; talk: string; src: string };

export const BEDTIME_1: Bedtime[] = [
  // ---------- The Prophet ﷺ and his family ----------
  { id: "halimah", cat: "prophet", title: "The blessed baby of Banū Saʿd", teaser: "A poor family, a thin donkey, and a baby nobody wanted.",
    paras: [
      "Long ago in Makkah, families sent their new babies into the desert to be nursed by Bedouin women. The desert air was clean, and the children grew strong and learned the purest Arabic.",
      "One year, a group of women from the tribe of Banū Saʿd came to Makkah looking for babies to nurse. Among them was a woman called Ḥalīmah. It had been a year of drought. Her donkey was so thin and slow that it kept falling behind, and her she-camel gave not a drop of milk. Her own baby cried all night from hunger.",
      "Every woman was offered a little orphan boy called Muhammad. And every woman said no. “An orphan? His father is dead. Who will pay us?” They wanted babies with rich fathers.",
      "By the end of the day, every woman had a baby except Ḥalīmah. She said to her husband: “I don’t want to go home empty-handed. I will take that orphan.” Her husband said: “Perhaps Allah will put blessing in him for us.”",
      "The moment she held him to her chest, her milk flowed, and both babies, Muhammad and her own son, drank until they were full and fell asleep. That night her husband went to the old she-camel, and her udder was full of milk. They drank until they were satisfied and slept the best sleep they had had in a long time.",
      "On the way home, the thin little donkey raced ahead of all the others. The women called out: “Ḥalīmah, wait for us! Isn’t this the same donkey you came on?” “Yes, by Allah, it is,” she laughed.",
      "Back in the land of Banū Saʿd, the grass was dry everywhere. But Ḥalīmah’s sheep came home every evening full and heavy with milk, while everyone else’s came home hungry. The neighbours told their shepherds: “Graze your sheep where Ḥalīmah’s daughter grazes hers!”",
      "Ḥalīmah knew. The blessing had come with the little orphan nobody wanted.",
    ],
    moral: "Never look down on someone because they are poor or alone. Sometimes the person others turn away is the one Allah has filled with blessing.",
    talk: "Why did the other women refuse baby Muhammad? What would you have done?",
    src: "Ibn Isḥāq, in Ibn Hishām’s Sīrah; Ṣaḥīḥ Ibn Ḥibbān" },

  { id: "khadijah-salam", cat: "prophet", title: "A salām from Allah for Khadījah", teaser: "Jibrīl arrives with a message for one special woman.",
    paras: [
      "Khadījah was the first person in the whole world to believe in the Prophet ﷺ. When he came home trembling from the cave of Ḥirāʾ, she wrapped him in a blanket and told him: “Allah will never disgrace you. You are kind to your family, you help the weak, you feed the poor and you honour your guests.”",
      "She stood by him through the hardest years. When the people of Makkah boycotted his family and they were forced to live in a dry valley, Khadījah, who had once been one of the richest women in Makkah, went with them. She shared their hunger for three long years.",
      "One day, the angel Jibrīl came to the Prophet ﷺ and said: “Messenger of Allah, here is Khadījah coming to you with a dish of food and drink.”",
      "“When she reaches you,” Jibrīl said, “give her salām from her Lord, and from me. And give her the good news of a house in Paradise made of hollow pearl, where there will be no noise and no tiredness.”",
      "Imagine it: a greeting of peace from Allah Himself, sent through Jibrīl, for a woman carrying a plate of food to her husband.",
      "The Prophet ﷺ never forgot her. Years after she died, whenever he slaughtered a sheep, he would send pieces of it to Khadījah’s old friends. ʿĀʾishah once said: it was as if there were no other woman in the world but Khadījah. He replied: “She believed in me when others disbelieved, she trusted me when others called me a liar, and she helped me with her wealth when others refused.”",
    ],
    moral: "Small acts of love, like bringing food to someone who is busy with good work, are seen by Allah. And true loyalty does not end when a person is gone.",
    talk: "How can you help someone in our family who is working hard this week?",
    src: "Bukhari 3820, Muslim 2432; Bukhari 3818" },

  { id: "fatimah", cat: "prophet", title: "Fāṭimah, a part of him", teaser: "The daughter who walked just like her father.",
    paras: [
      "Of all the Prophet’s ﷺ children, the one who lived longest after him was his youngest daughter, Fāṭimah.",
      "When Fāṭimah was a little girl in Makkah, the Prophet ﷺ was praying by the Kaʿbah when some cruel men threw the dirty insides of a slaughtered camel onto his back while he was in sujūd. He stayed in prostration, unable to rise. The men laughed until they fell over.",
      "Someone ran to tell Fāṭimah. The little girl came running, pushed the filth off her father’s back with her small hands, and turned to the men and told them off. She was not afraid.",
      "She grew up to be so like her father that ʿĀʾishah said: I never saw anyone more like the Messenger of Allah ﷺ in her manner, her guidance and the way she walked than Fāṭimah.",
      "Whenever Fāṭimah came in, the Prophet ﷺ stood up, kissed her, took her by the hand and sat her in his own place. And whenever he visited her, she did the same for him.",
      "He said: “Fāṭimah is a part of me. Whatever makes her happy makes me happy, and whatever hurts her hurts me.” And he told her a secret before he died: that she would be the first of his family to join him, and that she would be the leader of the women of Paradise.",
    ],
    moral: "Children can be brave in defending what is right. And parents and children should honour each other with love, as the Prophet ﷺ and Fāṭimah did.",
    talk: "How do we welcome each other when someone in the family comes home?",
    src: "Bukhari 240, Bukhari 3714, Bukhari 3623–3624, Abu Dawud 5217" },

  { id: "hasan-husayn", cat: "prophet", title: "The long sujūd", teaser: "Why did the Prophet ﷺ stay so long in prostration?",
    paras: [
      "One evening in Madinah, the Prophet ﷺ came out to lead the prayer carrying one of his grandsons, al-Ḥasan or al-Ḥusayn, in his arms.",
      "He set the little boy down beside him and began the prayer. The companions prayed behind him, row after row.",
      "Then the Prophet ﷺ went down into sujūd, and stayed there. And stayed there. A long, long time.",
      "One of the companions grew worried. He lifted his head to look. There was the little boy, sitting on the back of the Prophet ﷺ, who was still in prostration, perfectly still.",
      "After the prayer, the people asked: “Messenger of Allah, you made the sujūd so long that we thought something had happened, or that revelation was coming to you.”",
      "The Prophet ﷺ smiled and said: “None of that happened. But my son was riding on my back, and I did not want to hurry him until he had finished what he wanted.”",
    ],
    moral: "The greatest of all people was gentle and patient with little children, even in prayer. Love for children is part of mercy.",
    talk: "What do you think the little boy felt? How do you feel when someone is patient with you?",
    src: "Nasāʾī 1141, Musnad Aḥmad" },

  { id: "aisha-race", cat: "prophet", title: "The race in the desert", teaser: "The Prophet ﷺ and ʿĀʾishah run a race, twice.",
    paras: [
      "Once, the Prophet ﷺ went on a journey with his wife ʿĀʾishah. She was young then, and light on her feet.",
      "Along the way, he told the people to go on ahead. When they were out of sight, he turned to ʿĀʾishah and said: “Come, let’s race!”",
      "Off they ran across the sand. ʿĀʾishah ran as fast as she could, and she won! The Prophet ﷺ laughed.",
      "Years passed. ʿĀʾishah grew a little older and a little heavier, and she forgot all about that race.",
      "Then on another journey, the Prophet ﷺ again told the people to go ahead, and again said: “Come, let’s race!” This time he won.",
      "He laughed and said: “This one is for that one.”",
    ],
    moral: "Being serious about the religion does not mean never playing. The best of people laughed, played and made time for fun with his family.",
    talk: "What game could we play together as a family this week?",
    src: "Abu Dawud 2578, Musnad Aḥmad" },

  { id: "crying-camel", cat: "prophet", title: "The camel who cried", teaser: "A tired camel tells the Prophet ﷺ its secret.",
    paras: [
      "One day, the Prophet ﷺ walked into a garden in Madinah belonging to a man of the Anṣār.",
      "In the garden there was a camel. When the camel saw the Prophet ﷺ, it began to groan, and tears ran down from its eyes.",
      "The Prophet ﷺ went to it and gently stroked the back of its head, behind its ears, until it calmed down.",
      "Then he asked: “Who owns this camel?” A young man of the Anṣār came forward and said: “It is mine, Messenger of Allah.”",
      "The Prophet ﷺ said: “Do you not fear Allah regarding this animal that Allah has given you? It has complained to me that you keep it hungry and tire it out.”",
      "From that day on, the young man fed his camel well and let it rest.",
    ],
    moral: "Animals feel hunger, pain and tiredness, and Allah will ask us how we treated them. Be kind to every creature.",
    talk: "How can we take care of animals around us: pets, birds or stray cats?",
    src: "Abu Dawud 2549" },

  // ---------- The Companions ----------
  { id: "abu-bakr-all", cat: "companions", title: "“I left them Allah and His Messenger”", teaser: "ʿUmar tries to beat Abū Bakr in charity, just once.",
    paras: [
      "One day, the Prophet ﷺ asked the companions to give charity for the army of Tabūk.",
      "ʿUmar ibn al-Khaṭṭāb happened to have a lot of money that day. He thought: “Today I will beat Abū Bakr, if I ever beat him!”",
      "He went home and brought back exactly half of everything he owned, and placed it before the Prophet ﷺ.",
      "The Prophet ﷺ asked: “What have you left for your family?” ʿUmar said: “The same amount, the other half.”",
      "Then Abū Bakr came with his gift. The Prophet ﷺ asked him: “Abū Bakr, what have you left for your family?”",
      "Abū Bakr said: “I have left them Allah and His Messenger.” He had brought everything he had.",
      "ʿUmar shook his head and smiled: “I will never be able to beat him in anything.”",
    ],
    moral: "The companions raced each other in good deeds, not in wealth or fame. And Abū Bakr trusted Allah completely to take care of his family.",
    talk: "What good deed could we have a friendly family race in this week?",
    src: "Tirmidhi 3675, Abu Dawud 1678" },

  { id: "umar-night", cat: "companions", title: "The khalīfah and the cooking pot", teaser: "ʿUmar walks Madinah at night and hears children crying.",
    paras: [
      "When ʿUmar ibn al-Khaṭṭāb became the khalīfah, the leader of all the Muslims, he used to walk the streets of Madinah at night to see how people were living.",
      "One night, outside the town, he saw a small fire. Beside it sat a mother, and around her lay children, crying. Over the fire was a pot.",
      "ʿUmar greeted her and asked why the children were crying. “From hunger,” she said. “And what is in the pot?” he asked. “Only water,” she said, “to calm them until they fall asleep. Allah will judge between us and ʿUmar!”",
      "ʿUmar said gently: “May Allah have mercy on you. How would ʿUmar know about you?” She replied: “He is in charge of us, and he does not know about us?”",
      "ʿUmar hurried back to the storehouse. He filled a sack with flour and a pot of fat, and said to his servant Aslam: “Put it on my back.” Aslam said: “Let me carry it for you.” ʿUmar said: “Will you carry my burden for me on the Day of Judgment?”",
      "He carried it himself, cooked for the family with his own hands, blowing on the fire, and stayed until the children had eaten and were laughing and playing.",
      "The woman, not knowing who he was, said: “May Allah reward you. You are more fit to lead than ʿUmar!”",
    ],
    moral: "A good leader serves the people and feels responsible for every one of them. And all of us are responsible for those in our care.",
    talk: "Who is in our care: little brothers or sisters, pets, plants? How can we look after them better?",
    src: "A famous account in the biographies of ʿUmar (Ibn al-Jawzī, Manāqib ʿUmar; al-Ṭabarī, Tārīkh); its chain is discussed by scholars" },

  { id: "bilal-adhan", cat: "companions", title: "The first adhān", teaser: "The voice that once said “Aḥad, aḥad” calls the whole city to prayer.",
    paras: [
      "Bilāl was a slave in Makkah. His master, Umayyah, was furious when Bilāl became Muslim. He laid Bilāl on the burning sand at midday and put a heavy rock on his chest, shouting: “Leave the religion of Muhammad!”",
      "Bilāl could barely breathe. But all he would say was: “Aḥad, aḥad.” One, One. Allah is One.",
      "Abū Bakr passed by, and his heart broke. He bought Bilāl and set him free.",
      "Years later in Madinah, the Muslims wondered how to call people to prayer. A companion called ʿAbdullāh ibn Zayd saw a dream in which a man taught him the words of the adhān. He told the Prophet ﷺ, who said: “It is a true dream. Teach it to Bilāl, for his voice is louder and more beautiful than yours.”",
      "And so the first adhān in history was called by Bilāl, the freed slave from Abyssinia: “Allāhu akbar, Allāhu akbar…”",
      "On the day Makkah was opened, Bilāl climbed onto the roof of the Kaʿbah, in the very city where he had been tortured, and called the adhān over it for all to hear.",
    ],
    moral: "Allah raises those who stay firm. The man people once treated as worthless became the voice of Islam.",
    talk: "Can you say the first words of the adhān? What do they mean?",
    src: "Abu Dawud 499, Ibn Hishām’s Sīrah" },

  { id: "abu-hurayrah-mother", cat: "companions", title: "Abū Hurayrah’s tears of joy", teaser: "A son who never gave up on his mother.",
    paras: [
      "Abū Hurayrah loved his mother very much. He invited her to Islam again and again, but she refused.",
      "One day, when he invited her, she said something hurtful about the Prophet ﷺ. Abū Hurayrah went to the Prophet ﷺ weeping. “Messenger of Allah, please pray that Allah guides the mother of Abū Hurayrah.”",
      "The Prophet ﷺ raised his hands and said: “O Allah, guide the mother of Abū Hurayrah.”",
      "Abū Hurayrah ran home full of hope. When he reached the door, it was closed, and he heard the sound of water. His mother called out: “Stay where you are, Abū Hurayrah!”",
      "A moment later she opened the door, her hair still wet from ghusl, and said: “Ashhadu an lā ilāha illa-llāh, wa ashhadu anna Muḥammadan ʿabduhū wa rasūluh.”",
      "Abū Hurayrah ran back to the Prophet ﷺ, now crying tears of joy: “Rejoice, Messenger of Allah! Allah has answered your prayer and guided my mother!” And he asked the Prophet ﷺ to pray that all the believers would love him and his mother, and he did.",
    ],
    moral: "Never stop making duʿāʾ for the people you love. Keep inviting them with kindness, and leave guidance to Allah.",
    talk: "Who would you like to make duʿāʾ for tonight?",
    src: "Muslim 2491" },

  { id: "salman", cat: "companions", title: "Salmān’s long search", teaser: "From a fire temple in Persia to a palm tree in Madinah.",
    paras: [
      "Salmān grew up in Persia, the son of a rich village chief. His father loved him so much that he kept him at home like a girl, to tend the sacred fire his people worshipped.",
      "One day, passing a church, Salmān heard people praying and thought: this is better than our religion. He ran away to Syria to learn more, and served one wise, righteous Christian teacher after another.",
      "The last of them, as he lay dying, told him: “The time is near for a prophet to appear in the land of the Arabs, in a land of palm trees between two rocky plains. He accepts gifts but not charity, and between his shoulders is the seal of prophethood.”",
      "Salmān paid some travellers to take him there, but they betrayed him and sold him as a slave. He was bought by a man in Yathrib, a land of palm trees between two rocky plains. Salmān knew: this was the place.",
      "When the Prophet ﷺ arrived in Madinah, Salmān brought him some dates and said: “This is charity.” The Prophet ﷺ gave it to his companions but did not eat. Another day Salmān brought dates and said: “This is a gift.” The Prophet ﷺ ate with them.",
      "Then Salmān saw the seal between his shoulders, and fell upon it, kissing it and weeping. The Prophet ﷺ helped him buy his freedom by planting three hundred palm trees with his own blessed hands.",
      "Later, it was Salmān’s idea to dig the trench that saved Madinah. The Prophet ﷺ is reported to have said of him: “Salmān is one of us, the people of the house.”",
    ],
    moral: "Whoever searches sincerely for the truth, Allah will guide, even if the road is long and hard.",
    talk: "Salmān never gave up. What is something worth never giving up on?",
    src: "Musnad Aḥmad 23737 (ḥasan); al-Ḥākim, al-Mustadrak" },

  { id: "musab", cat: "companions", title: "Muṣʿab’s two cloaks", teaser: "The best-dressed young man in Makkah chooses something better.",
    paras: [
      "Muṣʿab ibn ʿUmayr was the most handsome and best-dressed young man in Makkah. His wealthy mother dressed him in the finest clothes and perfumes. When he walked past, people could smell his perfume in the street.",
      "When he became Muslim, his family locked him up and took everything from him. But he would not leave Islam.",
      "The Prophet ﷺ chose Muṣʿab to be the first teacher sent to Madinah. In one year, he taught so well that almost every home in Madinah heard about Islam, and the city was ready for the Prophet ﷺ to arrive.",
      "One day the companions saw Muṣʿab wearing a rough cloak patched with pieces of leather. The Prophet ﷺ remembered how he used to look in Makkah, and his eyes filled with tears.",
      "Muṣʿab carried the flag of the Muslims at the Battle of Uḥud, and he was martyred there.",
      "When they came to bury him, all he had was one short cloak. If they covered his head, his feet showed; if they covered his feet, his head showed. The Prophet ﷺ said: “Cover his head, and put some grass over his feet.”",
    ],
    moral: "Muṣʿab gave up the finest things of this world for Allah, and Allah gave him something far better: an honoured place with Him.",
    talk: "What would you be willing to give up to please Allah?",
    src: "Bukhari 1276, Tirmidhi 2476" },
];
