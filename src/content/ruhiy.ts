import type { Block, Lesson } from "./library";

// Spiritual Tarbiyah, volume 1: explainer lessons on "Ruhiy tarbiya, 1-juz"
// by Shaykh Muhammad Sodik Muhammad Yusuf (Hilol-Nashr). Each lesson teaches
// the topic in depth: what it is, why it matters (with evidence), its types,
// how to practise it, warning signs and key takeaways. Used with the rights
// holder's permission. A scholar should review before public release.

export const RUHIY_BOOK = {
  title: "Ruhiy tarbiya, 1-juz",
  author: "Shaykh Muhammad Sodik Muhammad Yusuf",
  publisher: "Hilol-Nashr",
};

const src = (pages: string) => `${RUHIY_BOOK.title}, pp. ${pages}`;

// Shared helpers so every explainer has the same shape.
export const P = (text: string): Block => ({ type: "p", text });
export const L = (title: string, items: string[]): Block => ({ type: "points", title, items });

export const RUHIY_LESSONS: Lesson[] = [
  { id: "nafs", title: "The nafs and its purification (tazkiyah)", summary: "What the self is, its three states, and why purifying it was the mission of the prophets.", sources: [src("1–21"), "Quran 89:27–30", "Quran 75:2", "Quran 12:53", "Quran 2:129, 2:151", "Quran 87:14–15", "Quran 91:7–10"],
    blocks: [
      P("The nafs is the self: the part of a person that wants, desires and inclines. Islam does not treat it as evil by nature. Allah created it able to go either way: “By the soul and how He shaped it, and inspired it with its wickedness and its righteousness” (91:7–8). What the soul becomes depends on how it is trained. Sins, hypocrisy, arrogance, lying and envy stain it, so it needs constant purifying and nurturing."),
      L("The three states of the nafs in the Quran", [
        "An-nafs al-ammārah bis-sūʾ, the soul that commands evil (12:53). This is the self ruled by desire: it pushes toward anger, greed, lust and laziness, and makes bad things look good.",
        "An-nafs al-lawwāmah, the self-reproaching soul (75:2). This is the awakened conscience of the believer. After a sin it asks “Why did you do that?” and after a good deed it asks “Why not more?”",
        "An-nafs al-muṭmaʾinnah, the soul at peace (89:27–30). It has won its struggle with desire, rests in Allah, and at death is called to return to its Lord “well-pleased and pleasing”.",
        "These are not three different souls. One soul moves between these states, sometimes in a single day. The goal of spiritual training is to spend more and more time in the third.",
      ]),
      L("What tazkiyah means", [
        "The Arabic root z-k-y carries two meanings at once: to purify and to grow. A field is cleared of weeds so that the crop can grow.",
        "So tazkiyat al-nafs is two jobs: removing diseases (envy, arrogance, showing off, greed) and growing virtues (sincerity, patience, gratitude, humility).",
        "The scholars define it as freeing the soul from its afflictions, raising it to high stations, and adorning it with beautiful qualities.",
      ]),
      L("Why it matters: the mission of the prophets", [
        "Ibrāhīm (as) prayed for a messenger who would recite Allah’s verses, teach the Book and wisdom, and purify the people (2:129). Allah answered that prayer with Muhammad ﷺ (2:151).",
        "Success is tied directly to it: “Whoever purifies it has succeeded, and whoever corrupts it has failed” (91:9–10), and “Successful is the one who purifies himself, remembers the name of his Lord and prays” (87:14–15).",
        "Knowledge alone is not enough. Many people know what is right but their soul does not obey. Tazkiyah is what turns knowledge into character.",
      ]),
      L("The three relationships it puts right", [
        "With Allah: repentance, gratitude, istighfār, love, trust and humility.",
        "With oneself: knowing one’s own faults, taking off the cloak of arrogance, and regret over sins.",
        "With others: tolerance, good conduct, humility, contentment with people, and forgiveness.",
      ]),
      L("Key takeaways", [
        "Your soul is not fixed. It can be trained, as a body can be trained.",
        "Purification means both cleaning out bad traits and growing good ones.",
        "It is not an optional extra. It was part of the core mission of the Prophet ﷺ.",
      ]),
    ] },

  { id: "heart", title: "Healing the heart (ṭibb al-qulūb)", summary: "The heart is the king of the body. How it falls ill, how it heals, and how to keep it healthy.", sources: [src("14–29"), "Bukhari 52, Muslim 1599", "Muslim 2564", "Tirmidhi 3334", "Tirmidhi 2140", "Quran 10:57", "Quran 26:88–89"],
    blocks: [
      P("Medicine has two branches: medicine of the body and medicine of the heart. The body’s doctor studies when it is healthy, when it is sick, and how to cure it. The scholars of spiritual training did the same for the heart, and called their science ṭibb al-qulūb, the medicine of hearts. Since the heart decides a person’s fate in the Hereafter, they saw it as the more important of the two."),
      L("Why the heart is the centre", [
        "The Prophet ﷺ said that in the body there is a morsel of flesh: when it is sound the whole body is sound, and when it is corrupt the whole body is corrupt, and it is the heart (Bukhari 52, Muslim 1599).",
        "Allah does not look at your bodies or your appearance, but at your hearts and your deeds (Muslim 2564).",
        "On the Day of Judgment, wealth and children will not help, “except one who comes to Allah with a sound heart” (26:88–89).",
      ]),
      L("Two meanings of “heart”", [
        "The physical heart: the organ in the chest that keeps the body alive.",
        "The inner heart: the subtle, spiritual reality that understands, believes, loves and fears. This is what makes us human, and it is the heart this science is about.",
        "The Arabic qalb comes from a root meaning “to turn over”, because the heart is always turning. That is why the Prophet ﷺ often prayed: “O Turner of hearts, keep my heart firm on Your religion” (Tirmidhi 2140).",
      ]),
      L("How the heart falls ill", [
        "Like the body, the heart can be healthy, sick or dead.",
        "Sins stain it: when a believer sins, a black spot appears on his heart. If he repents it is polished away; if he keeps sinning it spreads until it covers the heart (Tirmidhi 3334, explaining 83:14).",
        "Its diseases include doubt, hypocrisy, arrogance, envy, showing off, greed, love of the world and hardness.",
        "The most dangerous sign is when a heart no longer feels its sickness: sins stop hurting and good deeds stop bringing joy.",
      ]),
      L("The medicine", [
        "The Quran is “a healing for what is in the chests” (10:57). Reciting it with understanding is the first medicine.",
        "Repentance and istighfār polish away the stains.",
        "Dhikr, reflection and remembering death soften a hard heart. Each has its own lesson in this volume.",
        "Good company, and keeping away from whatever feeds the disease.",
        "The Prophet ﷺ is the leader of the physicians of the heart; his Sunnah is the prescription.",
      ]),
      L("Key takeaways", [
        "Check your heart as you would check your health: what does it love, fear and hope for?",
        "A heart is never still. It is either getting healthier or sicker.",
        "The goal is to meet Allah with a sound heart (qalb salīm).",
      ]),
    ] },

  { id: "khushu", title: "Khushūʿ and presence of heart in prayer", summary: "Prayer has a body and a soul. How to bring the heart into it.", sources: [src("70–88"), "Quran 23:1–2", "Quran 2:45–46", "Abu Dawud 425", "Bukhari 159", "Bukhari 373", "Bukhari 751", "Muslim 8"],
    blocks: [
      P("A prayer has a body: its obligatory acts, necessary acts and sunnahs, which fiqh teaches. It also has a soul: intention, sincerity, khushūʿ and presence of heart. Khushūʿ is awe and humility before Allah, joined with stillness of the body. A prayer with its body but without its soul may be valid, but it does not do its real work of purifying the heart."),
      L("Why khushūʿ matters", [
        "“Successful indeed are the believers, those who are humble in their prayers” (23:1–2). Khushūʿ is the first quality named for the successful.",
        "Prayer is heavy “except for the humble, who know they will meet their Lord” (2:45–46).",
        "The Prophet ﷺ promised forgiveness to whoever prays the five prayers on time, with good wuḍūʾ and complete rukūʿ and khushūʿ (Abu Dawud 425).",
        "Whoever makes wuḍūʾ well and prays two rakʿahs without his mind wandering has his past sins forgiven (Bukhari 159).",
      ]),
      L("What presence of heart is", [
        "It means the heart is empty of everything except what it is doing and saying. If nothing but the prayer is in your heart, your heart is present.",
        "It follows concern (himmah). Whatever you consider important, your heart attends to. When the Hereafter feels real and important, the heart comes to prayer by itself.",
        "So a wandering mind in prayer is a sign to strengthen faith, not only to try harder in the moment.",
      ]),
      L("How to build it: outer steps", [
        "Prepare: make wuḍūʾ calmly, arrive early, and pray the sunnah first.",
        "Remove distractions: the Prophet ﷺ returned a patterned garment because its design distracted him in prayer (Bukhari 373). Pray away from screens, noise and decoration, and put your phone away.",
        "Keep your gaze on the place of sajdah. Looking around is something Shayṭān snatches from a person’s prayer (Bukhari 751).",
        "Do not rush any position. Let each one settle before moving on.",
      ]),
      L("How to build it: inner steps", [
        "Understand what you say. Learn the meaning of al-Fātiḥah, the short surahs and the dhikr of each position. The prayer guide in this app shows the meanings.",
        "Remember who you stand before. The highest level, iḥsān, is to worship Allah as if you see Him, and if you do not see Him, He sees you (Muslim 8).",
        "Pray as if it is your last prayer.",
        "When your mind wanders, gently bring it back without despair. Each return is part of the effort.",
      ]),
      L("Examples from the early Muslims", [
        "Some companions stood so still in prayer that birds would land on them.",
        "ʿUrwah ibn al-Zubayr is reported to have had his diseased leg amputated while he prayed, because in prayer he did not feel it.",
        "These stories are not meant to discourage us, but to show what a trained heart is capable of.",
      ]),
      L("Key takeaways", [
        "Khushūʿ is the soul of the prayer.",
        "It grows from understanding, focus and a living belief in the Hereafter.",
        "Start small: aim for full presence in just al-Fātiḥah of one prayer today.",
      ]),
    ] },

  { id: "dhikr", title: "Dhikr: remembering Allah", summary: "The strongest everyday means of purifying the soul.", sources: [src("136–152"), "Quran 2:152", "Quran 13:28", "Quran 33:35, 33:41–42", "Quran 20:124", "Bukhari 6407", "Bukhari 7405", "Muslim 2676", "Tirmidhi 3375"],
    blocks: [
      P("Dhikr means remembering, mentioning and keeping something in mind. In the religion it means remembering Allah with the tongue and the heart: His names and attributes, His blessings and His commands, by reciting His Book, praising Him, glorifying Him, thanking Him and calling on Him. It is one of the strongest means of purifying the soul, and anyone can do it at any time."),
      L("Why it matters", [
        "“Remember Me, and I will remember you” (2:152). Allah needs nothing from us; the benefit is entirely ours.",
        "“Surely, in the remembrance of Allah hearts find rest” (13:28).",
        "The one who remembers his Lord and the one who does not are like the living and the dead (Bukhari 6407).",
        "Whoever remembers Allah in himself, Allah remembers him in Himself; whoever remembers Him in a gathering, Allah remembers him in a better gathering (Bukhari 7405).",
        "Turning away from His remembrance brings a narrow, straitened life (20:124): never satisfied, however much one has.",
        "Allah has prepared forgiveness and a great reward for the men and women who remember Him much (33:35).",
      ]),
      L("Kinds of dhikr", [
        "Of the tongue: SubḥānAllāh, Alḥamdulillāh, Lā ilāha illallāh, Allāhu akbar, istighfār and ṣalawāt on the Prophet ﷺ.",
        "Of the heart: being aware that Allah sees you, and thinking about His greatness and blessings.",
        "Of the limbs: obeying Him, because acting on His command is itself remembering Him.",
        "The best is when tongue and heart work together.",
      ]),
      L("How to make it a habit", [
        "Start with the adhkār tied to daily moments: waking, leaving home, after each prayer, before sleep. The Duas world and Mizan in this app list them.",
        "“Keep your tongue moist with the remembrance of Allah” (Tirmidhi 3375): fill waiting, walking and driving time with simple dhikr.",
        "Count on your fingers, as the Prophet ﷺ did.",
        "Understand what you are saying, so that the heart joins the tongue.",
        "Begin with what is easy and stay consistent. Quality grows out of steady quantity.",
      ]),
      L("Its fruits", [
        "Peace of heart and relief from anxiety.",
        "Protection from Shayṭān and from heedlessness.",
        "Constant awareness of Allah, which keeps a person from sin.",
        "Those who remember Allah much are described as having gone ahead of everyone (Muslim 2676).",
      ]),
      L("Key takeaways", [
        "Dhikr is the simplest worship and one of the most powerful.",
        "Tie it to moments you already have, so it becomes part of your day.",
        "Aim for the heart to be present, not only the tongue.",
      ]),
    ] },

  { id: "tafakkur", title: "Tafakkur: reflection", summary: "Thinking deeply about Allah’s signs, so that knowledge turns into faith.", sources: [src("180–197"), "Quran 3:190–191", "Quran 10:24", "Quran 47:24", "Quran 51:20–21"],
    blocks: [
      P("Tafakkur is deep, purposeful thinking. In spiritual training it means reflecting on Allah’s creation, His words and His dealings with people, in order to know Him better and to see one’s own life clearly. The Quran calls people to reflect again and again, and pairs reflection with remembrance."),
      L("Remembrance and reflection together", [
        "The people of understanding “remember Allah standing, sitting and lying on their sides, and reflect on the creation of the heavens and the earth” (3:190–191).",
        "Dhikr without reflection can become words without understanding. Reflection without dhikr can become dry thinking that does not soften the heart. Each completes the other.",
        "Their reflection ends with: “Our Lord, You did not create this in vain” (3:191). Real reflection leads to worship.",
      ]),
      L("What to reflect on", [
        "Creation: the sky, the earth, night and day, plants and animals. Every detail points to a Creator who is knowing and wise.",
        "Yourself: “And in yourselves. Do you not see?” (51:21). Your body, your mind, and the blessings you take for granted.",
        "The Quran: “Do they not reflect on the Quran?” (47:24).",
        "This world: Allah compares it to a crop that flourishes after rain and then suddenly dries up (10:24). Everything here passes.",
        "Your own deeds: what you did today and where it is taking you.",
      ]),
      L("Its fruits", [
        "Knowing that creation is not in vain leads to certainty that there will be a reckoning.",
        "Gratitude, as you notice blessings you had overlooked.",
        "Humility, as you see how small you are.",
        "Wisdom: decisions made in light of the Hereafter.",
      ]),
      L("How to practise", [
        "Set aside a few minutes a day, perhaps after Fajr or before sleep, to think about one sign: the sunrise, your breathing, a verse you recited.",
        "When you read the Quran, stop at one verse and ask: what is Allah telling me here, and what should I change?",
        "When something good or hard happens, ask what lesson it holds.",
      ]),
      L("Key takeaways", [
        "Reflection turns information into faith.",
        "Pair it with dhikr so that it softens the heart.",
        "The world is full of signs for those who stop to look.",
      ]),
    ] },

  { id: "death", title: "Remembering death", summary: "Why forgetting death opens the door to sin, and how remembering it brings life.", sources: [src("197–209"), "Quran 3:185", "Quran 62:8", "Quran 67:2", "Tirmidhi 2307", "Bukhari 6416"],
    blocks: [
      P("Death is the one certainty every person shares. The book counts remembering it among the most important means of purifying the soul, because people fall into wrongdoing largely by forgetting that they will die, be questioned in the grave, be raised again, and enter Paradise or Hell."),
      L("Why it matters", [
        "“Every soul will taste death, and you will only be paid your full reward on the Day of Resurrection” (3:185).",
        "“The death you flee from will meet you; then you will be returned to the Knower of the unseen and the seen, and He will tell you what you used to do” (62:8).",
        "Allah “created death and life to test which of you is best in deeds” (67:2). Death is mentioned first, as a call to good deeds.",
        "The Prophet ﷺ said: “Remember often the destroyer of pleasures,” meaning death (Tirmidhi 2307).",
      ]),
      L("What remembering death does", [
        "It cuts long hopes: a person who knows life is short stops delaying repentance.",
        "It makes this world’s troubles and pleasures small, because both will end.",
        "It drives a person to prepare: to repay debts, mend relationships and increase good deeds.",
        "It softens a hard heart, which is why visiting graves is encouraged.",
      ]),
      L("Healthy and unhealthy remembrance", [
        "Healthy remembrance leads to action and hope: preparing to meet Allah, who is Merciful.",
        "Fear that leads to despair or paralysis is not the goal.",
        "The Prophet ﷺ said: be in this world as a stranger or a traveller (Bukhari 6416). A traveller enjoys the journey but does not forget where he is going.",
      ]),
      L("How to practise", [
        "Before sleep, which is “the minor death”, recite the sleeping duʿāʾ and ask: if I did not wake up, am I ready?",
        "Visit graves, attend funerals, and reflect on people you have lost.",
        "Write down what you would fix if you knew you had one month left, and start on one item.",
      ]),
      L("Key takeaways", [
        "Forgetting death makes sin easy; remembering it makes good deeds easy.",
        "The aim is preparation and hope, not fear alone.",
        "Live each day as a traveller heading home.",
      ]),
    ] },

  { id: "murabata", title: "Murābaṭah: six stations of self-discipline", summary: "A daily system for keeping the soul on track.", sources: [src("209–222"), "Quran 4:1", "Quran 59:18", "Quran 3:200"],
    blocks: [
      P("Murābaṭah means standing guard. In spiritual training it means keeping the soul steadily in obedience to Allah, in an orderly and continuous way. The book compares the intellect to a merchant on the road to the Hereafter, with the soul as his business partner. The profit sought is a purified soul, and the merchant must manage his partner carefully every day."),
      P("The scholars describe six stations of this discipline. Together they make a complete daily cycle."),
      L("1. Mushāraṭah: setting the terms", [
        "At the start of the day, after Fajr, set conditions with your soul, as a merchant briefs his partner before trading.",
        "Tell it: my lifetime is my only capital. Each day is a piece of it that will never return. Today I am investing it, and I expect a profit.",
        "Decide concretely which obligations you will guard, which sins you will avoid, and which good deed you will add.",
      ]),
      L("2. Murāqabah: watchfulness", [
        "Through the day, watch the soul closely, as a merchant watches a partner who might cheat.",
        "Its foundation is knowing that Allah watches you: “Indeed, Allah is ever watching over you” (4:1).",
        "Before any action, ask: is this for Allah, for my desire, or for people?",
      ]),
      L("3. Muḥāsabah: taking account", [
        "At the end of the day, review honestly: did I keep the terms I set this morning?",
        "“Let every soul look to what it has sent forth for tomorrow” (59:18).",
        "ʿUmar (ra) is reported to have said: take account of yourselves before you are taken to account.",
        "Count the gains (deeds done well) and the losses (sins and missed opportunities).",
      ]),
      L("4. Muʿāqabah: consequence", [
        "When the soul falls short, give it a fitting, lawful consequence so that it learns. For example, make up a missed night prayer with extra charity or a voluntary fast.",
        "The point is training, never self-harm or harshness.",
      ]),
      L("5. Mujāhadah: striving", [
        "When you notice laziness, push the soul to do more good than usual.",
        "“Be patient, outlast in patience, and stand guard” (3:200). Murābaṭah takes its name from this verse.",
      ]),
      L("6. Muʿātabah: reproach", [
        "Speak to your soul honestly about its faults, so that it does not grow comfortable with them.",
        "This keeps the self-reproaching soul (an-nafs al-lawwāmah) awake.",
      ]),
      L("A simple daily routine", [
        "After Fajr (2 minutes): set one intention and one thing to avoid today.",
        "Through the day: a quick check before decisions.",
        "Before sleep (2 minutes): review the day, seek forgiveness for the losses, thank Allah for the gains, and set tomorrow’s intention.",
      ]),
      L("Key takeaways", [
        "Spiritual growth needs a system, not only good feelings.",
        "Terms in the morning, watchfulness in the day, review at night.",
        "Be firm with the soul, but gentle: the goal is steady progress.",
      ]),
    ] },

  { id: "tongue", title: "The afflictions of the tongue", summary: "Lying, backbiting, tale-carrying and idle talk, and why silence is often the cure.", sources: [src("258–303"), "Bukhari 6474", "Tirmidhi 2616", "Bukhari 6018", "Bukhari 6477", "Muslim 2589", "Bukhari 6056", "Bukhari 6094", "Quran 49:12"],
    blocks: [
      P("The tongue is small but its effects are enormous. Many of the sins people commit are sins of speech, and they are easy because they cost no effort. The book teaches that the easiest way to be safe from them is silence: it gathers one’s resolve and clears one’s thinking."),
      L("Why it matters", [
        "The Prophet ﷺ guaranteed Paradise to whoever guards what is between his jaws and what is between his legs (Bukhari 6474).",
        "When Muʿādh (ra) asked for a deed that leads to Paradise, the Prophet ﷺ listed the pillars and doors of good, then held his own tongue and said “Restrain this.” He warned that people are thrown into the Fire because of what their tongues harvest (Tirmidhi 2616).",
        "A person may say a word without thinking and fall because of it into the Fire further than the distance between east and west (Bukhari 6477).",
        "“Whoever believes in Allah and the Last Day, let him say good or keep silent” (Bukhari 6018).",
      ]),
      L("The main afflictions", [
        "Lying: truthfulness leads to righteousness and righteousness to Paradise; lying leads to wickedness and wickedness to the Fire (Bukhari 6094).",
        "Backbiting (ghībah): mentioning your brother in his absence with something he would dislike, even if it is true. If it is untrue, it is slander (Muslim 2589). The Quran likens it to eating the flesh of your dead brother (49:12).",
        "Tale-carrying (namīmah): carrying words between people to cause trouble. The tale-carrier will not enter Paradise (Bukhari 6056).",
        "Mockery, cursing, foul language, quarrelling, boasting, false promises, and talking about what does not concern you.",
      ]),
      L("Why we fall into it", [
        "Anger and wanting to vent.",
        "Wanting to fit in with a group that is gossiping.",
        "Envy, or wanting to raise yourself by lowering someone else.",
        "Boredom and the habit of talking too much.",
      ]),
      L("The cure", [
        "Before speaking, ask three questions: is it true, is it good, is it needed?",
        "Speak less and listen more.",
        "When a gathering turns to backbiting, defend the absent person, change the subject, or leave.",
        "To make amends for backbiting: repent, pray for the person you spoke about, speak well of them where you spoke badly, and ask their forgiveness if doing so will not cause more harm.",
      ]),
      L("Key takeaways", [
        "Most sins of the tongue are cured by thinking before speaking.",
        "Silence is not weakness; it is strength and safety.",
        "Use the tongue for dhikr, truth and kind words.",
      ]),
      { type: "link", href: "/learn/akhlaq/speech", label: "Practise it", text: "Try the 7-day challenge in the Akhlaq lesson on guarding the tongue." },
    ] },

  { id: "riya", title: "Riyāʾ: showing off", summary: "The hidden shirk that can empty good deeds of their reward.", sources: [src("380–399"), "Bukhari 1", "Muslim 2985", "Muslim 1905", "Muslim 2642", "Quran 2:264", "Quran 107:4–6", "Bukhari 660"],
    blocks: [
      P("Riyāʾ comes from the word for seeing. It means doing worship or good deeds so that people see them and praise you. Ibn Ḥajar defined it as displaying worship so that people see it and praise the one who does it. The scholars call it “hidden shirk”: the believer is free of idols, but he can still give part of his worship to people’s eyes."),
      L("Why it is so serious", [
        "“Actions are only by intentions” (Bukhari 1). A deed’s value lies in why it is done.",
        "In a ḥadīth qudsī, Allah says He is the One most free of need of partners: whoever does a deed for Him and for someone else, He leaves him with his partner (Muslim 2985).",
        "Among the first judged on the Day of Judgment are a martyr, a scholar and a generous man who did their deeds to be called brave, learned and generous. Their deeds are rejected (Muslim 1905).",
        "Charity done to be seen is like soil on a smooth rock that heavy rain washes away (2:264).",
        "“Woe to those who pray, who are heedless of their prayer, those who make a show” (107:4–6).",
      ]),
      L("Its three roots", [
        "Love of the pleasure of praise.",
        "Fear of the pain of criticism.",
        "Wanting what people have: gifts, status, opportunities.",
      ]),
      L("Degrees of riyāʾ", [
        "The worst: doing a deed only for people, with no thought of Allah.",
        "Mixed intention, for Allah and for people. This damages the deed.",
        "A thought of showing off that comes in the middle of a sincere deed and is pushed away does not ruin it.",
        "Being happy when people notice a good deed you did not seek to show is not riyāʾ. The Prophet ﷺ called it “the glad tidings of the believer” (Muslim 2642).",
      ]),
      L("The cure", [
        "Pull out the roots: remember that people’s praise cannot benefit you, and their criticism cannot harm you, except by Allah’s will.",
        "Hide voluntary deeds where you can. Among the seven shaded on the Day of Judgment is one who gives charity so secretly that his left hand does not know what his right hand gave (Bukhari 660).",
        "Renew your intention before, during and after a deed.",
        "Do not abandon a good deed for fear of riyāʾ. That is another trick of Shayṭān. Do it, and fix the intention.",
        "Pray: “O Allah, I seek refuge in You from associating anything with You knowingly, and I seek Your forgiveness for what I do not know.”",
      ]),
      L("Key takeaways", [
        "The same deed can be gold or dust, depending on intention.",
        "Riyāʾ is fought by remembering who you really work for.",
        "Keep some good deeds that only Allah knows about.",
      ]),
    ] },

  { id: "hasad", title: "Ḥasad: envy", summary: "Envy harms the envier, never the envied. How to tell it from healthy admiration, and how to cure it.", sources: [src("399–421"), "Quran 4:32", "Quran 4:54", "Quran 113:5", "Muslim 2563", "Bukhari 13", "Bukhari 73"],
    blocks: [
      P("The book explains that ḥasad comes from a word meaning to peel or strip, because envy strips the heart. The scholars define it as looking at a blessing someone else has with resentment, and wishing it would leave them, perhaps to come to you."),
      L("Envy and admiration are different", [
        "Ḥasad: resenting another’s blessing and wanting it gone. It is a major sin.",
        "Ghibṭah (in Uzbek, havas): being happy for someone and asking Allah for the same for yourself, without wanting them to lose it. This is allowed and can be good.",
        "The Prophet ﷺ said there is no envy except in two cases: a man given wealth who spends it rightly, and a man given wisdom who judges and teaches by it (Bukhari 73). He meant ghibṭah.",
      ]),
      L("Why it is so serious", [
        "It objects to Allah’s distribution of His favours: “Or do they envy people for what Allah has given them of His bounty?” (4:54).",
        "“Do not wish for that by which Allah has favoured some of you over others” (4:32).",
        "The Prophet ﷺ said: do not envy one another, do not hate one another, do not turn your backs on one another; be servants of Allah, brothers (Muslim 2563).",
        "Iblīs’s first sin came from envy of Ādam, and the first murder, Qābīl killing Hābīl, came from envy.",
        "We are taught to seek refuge from “the evil of an envier when he envies” (113:5).",
      ]),
      L("Its causes", [
        "Hostility and grudges.",
        "Arrogance: not wanting anyone to be above you.",
        "Love of status and of being the only one praised.",
        "A small, miserly soul that is pained by others’ good.",
      ]),
      L("The cure through knowledge", [
        "Envy harms you: it eats your peace of mind and damages your religion.",
        "It cannot remove a blessing Allah has given. The blessing lasts as long as Allah decreed.",
        "It does not harm the envied person in the Hereafter. In fact they gain, because they are wronged.",
        "None of you truly believes until he loves for his brother what he loves for himself (Bukhari 13).",
      ]),
      L("The cure through action", [
        "Do the opposite of what envy demands: if it tells you to criticise, praise; if it tells you to avoid, visit; if it tells you to withhold, give a gift.",
        "Make duʿāʾ for the person you envy, asking Allah to bless them more.",
        "When you admire something, say “Bārak Allāhu lak” (may Allah bless it for you).",
        "Count your own blessings, so you stop measuring yourself against others.",
      ]),
      L("Key takeaways", [
        "Envy wants others to lose; admiration wants to gain too. Choose admiration.",
        "Pray for the people you envy, and envy loses its grip.",
        "Allah’s gifts are not limited. Someone else’s blessing does not shrink yours.",
      ]),
    ] },

  { id: "kibr", title: "Kibr: arrogance", summary: "Rejecting the truth and looking down on people. Its causes and its cure.", sources: [src("421–436"), "Muslim 91", "Muslim 2588", "Quran 7:12", "Quran 31:18", "Quran 17:37"],
    blocks: [
      P("Kibr, arrogance, means seeing yourself as greater than others. The Prophet ﷺ defined it in two parts: rejecting the truth and looking down on people (Muslim 91). Because an arrogant heart cannot receive guidance, the scholars saw it as one of the most destructive diseases of the heart."),
      L("Why it is so serious", [
        "Whoever has an atom’s weight of arrogance in his heart will not enter Paradise (Muslim 91).",
        "It was the first sin: Iblīs refused to bow and said “I am better than him” (7:12).",
        "“Do not turn your cheek away from people, nor walk arrogantly on the earth; Allah does not love the arrogant and boastful” (31:18). “You will never tear the earth apart, nor reach the mountains in height” (17:37).",
        "The scholars say removing arrogance is a personal obligation on every Muslim, because no one is completely free of some trace of it.",
      ]),
      L("Seven things people grow arrogant about", [
        "Knowledge: looking down on those who know less.",
        "Worship and good deeds: thinking yourself better than “sinners”.",
        "Lineage and family.",
        "Beauty.",
        "Strength.",
        "Wealth.",
        "Followers, supporters and influence.",
      ]),
      L("Signs of arrogance", [
        "Refusing to accept the truth when it comes from someone you see as lower.",
        "Being unable to say “I was wrong” or “I don’t know”.",
        "Expecting to be greeted first, served first and given the best place.",
        "Contempt for the poor, the uneducated or the young.",
        "Getting angry when corrected.",
      ]),
      L("The cure", [
        "Through knowledge: know yourself. You began as a drop of fluid, you will end as a body in the earth, and in between you carry your own weaknesses. And know your Lord: all greatness belongs to Him alone.",
        "Through action: practise humility on purpose. Greet people first, sit wherever there is space, serve others, accept the truth from anyone, and spend time with the poor.",
        "No one humbles himself for Allah except that Allah raises him (Muslim 2588).",
        "Arrogance is uprooted slowly, by steady and patient effort.",
      ]),
      L("Key takeaways", [
        "Arrogance is rejecting truth and belittling people.",
        "Every blessing you have is from Allah, so it is a reason for gratitude, not pride.",
        "Humility raises you; arrogance lowers you.",
      ]),
    ] },

  { id: "qanaah", title: "Greed and contentment (qanāʿah)", summary: "The difference between hoping in Allah and craving the world, and how contentment brings true wealth.", sources: [src("456–472"), "Quran 26:82", "Quran 32:16", "Bukhari 6446", "Bukhari 6436", "Muslim 1054", "Muslim 2963"],
    blocks: [
      P("Ṭamaʿ is the soul attaching itself to something with strong desire. Ḥirṣ is greed: never having enough. Qanāʿah is the opposite: contentment with what you have and with what is enough. A Muslim works and earns, but does not let wealth own his heart or covet what others have."),
      L("Two kinds of ṭamaʿ", [
        "Praiseworthy: hoping for Allah’s mercy and forgiveness. Ibrāhīm (as) said he hoped (aṭmaʿu) Allah would forgive him on the Day of Judgment (26:82). The believers call on their Lord in fear and hope (32:16).",
        "Blameworthy: craving the passing things of this world, and wanting what is in other people’s hands.",
      ]),
      L("Why greed is a trap", [
        "If the son of Ādam had a valley of gold, he would want a second (Bukhari 6436). Greed has no finish line.",
        "ʿUmar (ra) said that greed is poverty, and having no need of what people have is wealth.",
        "Greed for what people have strips knowledge of its light; the book cites the early scholars on how it drains knowledge from the hearts of the learned.",
        "Greed leads to stinginess, cheating, envy and humiliation before people.",
      ]),
      L("What true wealth is", [
        "Richness is not having many possessions; richness is richness of the soul (Bukhari 6446).",
        "Successful is the one who accepts Islam, is given enough, and whom Allah makes content with what He gave (Muslim 1054).",
        "Contentment does not mean laziness or refusing to improve your situation. It means peace with what Allah has decreed while you strive.",
      ]),
      L("How to build contentment", [
        "In worldly things, look at those below you, not those above you, so you do not belittle Allah’s blessings (Muslim 2963). In religion, look at those above you.",
        "Remember that provision is written. Striving is your duty; the result is Allah’s.",
        "Limit comparison. Social media is a constant display of what others have.",
        "Practise gratitude daily for specific blessings.",
        "Give in charity. It loosens the grip of wealth on the heart.",
      ]),
      L("Key takeaways", [
        "Hope in Allah is good; craving the world is poverty.",
        "Contentment is the real wealth.",
        "Strive with your hands, but keep your heart free.",
      ]),
    ] },

  { id: "ghadab", title: "Misplaced anger and its cure", summary: "When anger is wrong, why it is dangerous, and the Prophet’s ﷺ practical remedies.", sources: [src("488–500"), "Bukhari 6114", "Bukhari 6116", "Bukhari 6115", "Abu Dawud 4782", "Abu Dawud 4784", "Abu Dawud 4777", "Quran 3:134"],
    blocks: [
      P("Anger itself is a human emotion Allah created. It protects a person and his family, and anger for Allah’s sake when His limits are violated can be praiseworthy. The book’s focus is misplaced anger: anger out of ego, at the wrong time, in the wrong amount, or leading to words and actions a person later regrets."),
      L("Why it is dangerous", [
        "A man asked the Prophet ﷺ for advice and he said “Do not become angry,” repeating it several times (Bukhari 6116). Anger opens the door to many sins.",
        "In anger, people curse, divorce, strike, break family ties, and say things that cannot be unsaid.",
        "The strong one is not the one who wins a wrestling match, but the one who controls himself when angry (Bukhari 6114).",
      ]),
      L("Its causes", [
        "Pride, and feeling that one’s ego has been hurt.",
        "Arguing, joking that turns hurtful, and mockery.",
        "Greed for things and status, and frustration at not getting them.",
        "Tiredness, hunger and stress, which shorten the fuse.",
      ]),
      L("The Prophet’s ﷺ practical remedies", [
        "Seek refuge: say “Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm.” The Prophet ﷺ said these words would remove a man’s anger (Bukhari 6115).",
        "Change your position: if standing, sit down; if it does not pass, lie down (Abu Dawud 4782).",
        "Make wuḍūʾ: a narration says anger is from Shayṭān, Shayṭān is made of fire, and fire is put out with water (Abu Dawud 4784). Scholars differ on the strength of its chain, but cooling down with water is a widely practised remedy.",
        "Stay silent until it passes.",
      ]),
      L("The reward of holding it in", [
        "Allah praises “those who restrain anger and pardon people; and Allah loves those who do good” (3:134).",
        "Whoever restrains his anger while able to act on it, Allah will call him before all creation on the Day of Judgment and let him choose whichever reward he wishes (Abu Dawud 4777).",
      ]),
      L("Long-term cure", [
        "Work on the roots: humility, contentment and patience.",
        "Notice your triggers, and avoid or prepare for them.",
        "When calm, reflect on past outbursts and what they cost you.",
      ]),
      L("Key takeaways", [
        "Strength is self-control, not winning.",
        "Seek refuge, change position, make wuḍūʾ, stay silent.",
        "Restraining anger is one of the deeds Allah loves.",
      ]),
      { type: "link", href: "/learn/akhlaq/anger", label: "Practise it", text: "Try the Akhlaq lesson’s anger challenge this week." },
    ] },

  { id: "dunya", title: "The love of this world", summary: "What “the world” really means, what is blameworthy in it, and what is not.", sources: [src("500–513"), "Quran 57:20", "Quran 18:46", "Bukhari 6416", "Tirmidhi 2320", "Muslim 2957"],
    blocks: [
      P("The Quran and Sunnah warn about love of this world, but the book makes an important point: it is no use condemning “the world” until we know what it is. “This world” is everything before death, and “the Hereafter” is everything after it. Not everything in this world is blameworthy."),
      L("Three kinds of worldly things", [
        "What goes with you into the Hereafter: knowledge of Allah and His religion, and deeds done sincerely for Him. Although they happen in this world, they are not the “world” that is blamed. Some scholars found such joy in knowledge, and some worshippers in prayer, that it became the sweetest thing in their lives.",
        "Pleasure with no benefit for the Hereafter: indulging in permitted luxuries beyond need. Excess here is what is blamed, because it fills the heart and distracts it.",
        "What you need to live and to worship: food, clothing, a home, a livelihood. Taking it with the right intention is part of the road to the Hereafter.",
      ]),
      L("How the Quran and Sunnah describe this world", [
        "“Know that the life of this world is only play, amusement, adornment, boasting among you and competing in wealth and children” (57:20).",
        "“Wealth and children are the adornment of this worldly life, but lasting good deeds are better with your Lord” (18:46).",
        "If this world were worth a mosquito’s wing to Allah, He would not give a disbeliever a sip of water from it (Tirmidhi 2320).",
        "The Prophet ﷺ held up a dead, small-eared kid goat and said this world is more worthless to Allah than this is to you (Muslim 2957).",
      ]),
      L("Signs that love of the world has taken over", [
        "Losing money hurts you more than missing a prayer.",
        "You measure people by what they own.",
        "You delay repentance and good deeds because worldly plans come first.",
        "You never feel you have enough.",
      ]),
      L("The balance Islam teaches", [
        "Be in this world as a stranger or a traveller (Bukhari 6416): use it and enjoy what is lawful, but do not settle in it.",
        "Earn lawfully, spend wisely, give generously, and keep the heart attached to Allah.",
        "Use worldly blessings as tools for the Hereafter: wealth for charity, health for worship, time for knowledge.",
      ]),
      L("Key takeaways", [
        "The problem is not the world in your hand, but the world in your heart.",
        "Knowledge and sincere deeds are the part of this world you take with you.",
        "Live as a traveller: grateful for the road, focused on home.",
      ]),
    ] },
];

export const RUHIY_QUIZ = {
  id: "ruhiy", title: "Spiritual Tarbiyah 1", sub: "Ruhiy tarbiya, volume 1", icon: "learn" as const,
  learn: ["Questions are based on the Spiritual Tarbiyah lessons for volume 1 of Ruhiy tarbiya by Shaykh Muhammad Sodik Muhammad Yusuf."],
  questions: [
    { q: "What does “tazkiyah” mean?", options: ["Only cleaning the body", "Purifying and also growing the soul", "Memorising the Quran", "Giving charity"], answer: 1, why: "The word means both to purify and to grow: freeing the soul from its diseases and adorning it with good qualities.", src: src("1–21") },
    { q: "Which nafs blames its owner after a sin and urges more good after a good deed?", options: ["An-nafs al-muṭmaʾinnah", "An-nafs al-lawwāmah", "An-nafs al-ammārah", "None of these"], answer: 1, why: "The self-reproaching soul, the believer’s conscience (Quran 75:2).", src: src("1–21") },
    { q: "According to the hadith, if one organ is sound the whole body is sound. Which is it?", options: ["The tongue", "The brain", "The heart", "The eyes"], answer: 2, why: "Bukhari 52, Muslim 1599.", src: src("14–29") },
    { q: "What does presence of heart in prayer depend on most?", options: ["Praying quickly", "Concern (himmah): how important the Hereafter is to you", "Praying in a large mosque", "Reciting long surahs"], answer: 1, why: "The heart attends to what it considers important.", src: src("70–88") },
    { q: "What does Allah promise in “Remember Me…” (2:152)?", options: ["Wealth", "That He will remember you", "A long life", "Fame"], answer: 1, why: "“Remember Me, and I will remember you.”", src: "Quran 2:152" },
    { q: "Which station of murābaṭah is setting terms with your soul after Fajr?", options: ["Muḥāsabah", "Murāqabah", "Mushāraṭah", "Muʿātabah"], answer: 2, why: "Mushāraṭah: telling the soul that your lifetime is your only capital, invested one day at a time.", src: src("209–222") },
    { q: "What is the difference between ḥasad and ghibṭah (havas)?", options: ["There is none", "Ḥasad wants the blessing removed; ghibṭah wishes for the same without resentment", "Ghibṭah is worse than ḥasad", "Ḥasad is only about money"], answer: 1, why: "Envy wants the blessing gone from the other person; admiration is happy for them and asks Allah for the same.", src: src("399–421") },
    { q: "How did the Prophet ﷺ define kibr (arrogance)?", options: ["Wearing nice clothes", "Rejecting the truth and looking down on people", "Being wealthy", "Speaking confidently"], answer: 1, why: "Muslim 91.", src: src("421–436") },
    { q: "Being happy when people notice a good deed you did not seek to show is…", options: ["Riyāʾ", "The glad tidings of the believer", "Hidden shirk", "Arrogance"], answer: 1, why: "Muslim 2642. Riyāʾ is doing the deed in order to be seen.", src: src("380–399") },
    { q: "What is the first remedy the Prophet ﷺ taught for anger?", options: ["Shouting it out", "Saying “Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm”", "Leaving the house", "Fasting"], answer: 1, why: "Bukhari 6115. Then sit or lie down (Abu Dawud 4782).", src: src("488–500") },
  ],
};
