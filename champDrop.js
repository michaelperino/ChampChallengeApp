/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
async function printJSON() {
    const response = await fetch("test.json");
    const json = await response.json();
    console.log(json);
}

const challengeDict = JSON.parse('{"It Has \'Ultimate\' In The Name": ["Amumu", "Anivia", "Annie", "Aurelion Sol", "Azir", "Bard", "Bel\'Veth", "Blitzcrank", "Braum", "Cassiopeia", "Corki", "Diana", "Draven", "Ekko", "Evelynn", "Ezreal", "Fiddlestick", "Fizz", "Galio", "Gangplank", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Janna", "Jarvan Iv", "Jinx", "Karthus", "Katarina", "Kayle", "Kennen", "Leona", "Lissandra", "Lux", "Malphite", "Maokai", "Miss Fortune", "Morgana", "Nami", "Neeko", "Nilah", "Nunu & Willump", "Orianna", "Ornn", "Pantheon", "Qiyana", "Rakan", "Rammus", "Rell", "Renata Glasc", "Riven", "Rumble", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Sona", "Swain", "Talon", "Twitch", "Vel\'Koz", "Viktor", "Vladimir", "Volibear", "Xayah", "Xin Zhao", "Yone", "Yuumi", "Zac", "Zeri", "Ziggs", "Zyra"], "We\'re Good Over Here": ["Akshan", "Ashe", "Azir", "Caitlyn", "Cho\'Gath", "Corki", "Dr. Mundo", "Ezreal", "Gangplank", "Jayce", "Jhin", "Jinx", "Kai\'Sa", "Karma", "Kled", "Kog\'Maw", "Lux", "Maokai", "Nidalee", "Pantheon", "Senna", "Seraphine", "Shyvana", "Sivir", "Taliyah", "Twisted Fate", "Vayus", "Vel\'Koz", "Vex", "Viktor", "Xayah", "Xerath", "Yuumi", "Zeri", "Ziggs", "Zoe"], "Hold That Pose": ["Aatrox", "Alistar", "Amumu", "Anivia", "Aurelion Sol", "Bard", "Blitzcrank", "Braum", "Camille", "Galio", "Gnar", "Gragas", "Hecarim", "Ivern", "Janna", "Jarvan Iv", "Kled", "Leblanc", "Leona", "Lissandra", "Lulu", "Maokai", "Morgana", "Nami", "Nautilus", "Neeko", "Nunu & Willump", "Ornn", "Poppy", "Pyke", "Qiyana", "Rammus", "Rell", "Renata Glasc", "Riven", "Sejuani", "Seraphine", "Sett", "Shaco", "Singed", "Sion", "Skarner", "Tahm Kench", "Thresh", "Urgot", "Vi", "Warwick", "Xin Zhao", "Yasuo", "Yone", "Zac", "Zyra"], "Get Over Here": ["Alistar", "Aurelion Sol", "Azir", "Blitzcrank", "Darius", "Gnar", "Gragas", "Hecarim", "Janna", "Jayce", "Kled", "Lee Sin", "Maokai", "Mordekaiser", "Nautilus", "Nilah", "Orianna", "Poppy", "Pyke", "Rell", "Sett", "Singed", "Skarner", "Swain", "Tahm Kench", "Taliyah", "Thresh", "Tristana", "Urgot", "Vayne", "Xin Zhao", "Yone", "Zac", "Ziggs"], "Nowhere To Hide": ["Akshan", "Ashe", "Bard", "Caitlyn", "Draven", "Ezreal", "Galio", "Gangplank", "Jhin", "Jinx", "Kai\'Sa", "Karthus", "Kled", "Lillia", "Lux", "Maokai", "Nocturne", "Pantheon", "Ryze", "Senna", "Shen", "Sion", "Soraka", "Swain", "Taliyah", "Twisted Fate", "Vex", "Xerath", "Ziggs"], "They Just\u2026 Don\'t\u2026 Die!": ["Akshan", "Alistar", "Anivia", "Bard", "Bel\'Veth", "Braum", "Ekko", "Elise", "Evelynn", "Fiora", "Fizz", "Gwen", "Jax", "Kalista", "Karthus", "Kayle", "Kayn", "Kindred", "Kled", "Kog\'Maw", "Lissandra", "Malzahar", "Maokai", "Master Yi", "Olaf", "Pantheon", "Rakan", "Renata Glasc", "Sion", "Tahm Kench", "Taric", "Tryndamere", "Vladimir", "Xin Zhao", "Yuumi", "Zac", "Zed", "Zilean"], "We Protec": ["Alistar", "Annie", "Bard", "Fiora", "Galio", "Ivern", "Janna", "Karma", "Kayle", "Kindred", "Lee Sin", "Lulu", "Lux", "Morgana", "Nami", "Nidalee", "Nilah", "Orianna", "Rakan", "Rell", "Renata Glasc", "Senna", "Seraphine", "Shen", "Sona", "Soraka", "Tahm Kench", "Taric", "Thresh", "Yuumi", "Zilean"], "Where\'d They Go?": ["Akali", "Akshan", "Evelynn", "Kai\'Sa", "Kha\'Zix", "Leblanc", "Neeko", "Nocturne", "Pyke", "Qiyana", "Rengar", "Senna", "Shaco", "Talon", "Teemo", "Twitch", "Vayne", "Viego"], "Summoners on the Rift": ["Annie", "Azir", "Elise", "Fiddlesticks", "Heimerdinger", "Illaoi", "Ivern", "Kalista", "Kindred", "Lissandra", "Malzahar", "Maokai", "Neeko", "Orianna", "Shaco", "Yorick", "Zed", "Zyra"], "It\'s a Trap!": ["Caitlyn", "Gangplank", "Jhin", "Jinx", "Maokai", "Nidalee", "Shaco", "Teemo", "Ziggs", "Zyra"], "I\'m Helping": ["Anivia", "Azir", "Irelia", "Ivern", "Jarvan Iv", "Ornn", "Taliyah", "Trundle", "Veigar", "Yorick"], "5 Under 5\'": ["Corki", "Fizz", "Gnar", "Heimerdinger", "Kennen", "Kled", "Lulu", "Poppy", "Rumble", "Teemo", "Tristana", "Veigar", "Vex", "Yuumi", "Ziggs"], "All Hands on Deck": ["Fizz", "Gangplank", "Graves", "Illaoi", "Miss Fortune", "Nautilus", "Pyke", "Tahm Kench", "Twisted Fate"], "For Demacia": ["Fiora", "Galio", "Garen", "Jarvan Iv", "Kayle", "Lucian", "Lux", "Morgana", "Poppy", "Quinn", "Shyvana", "Sona", "Sylas", "Vayne"], "Ice, Ice, Baby": ["Anivia", "Ashe", "Braum", "Gnar", "Gragas", "Lissandra", "Nunu & Willump", "Olaf", "Ornn", "Sejuani", "Trundle", "Tryndamere", "Udyr", "Volibear"], "Everybody was Wuju Fighting": ["Ahri", "Akali", "Irelia", "Ivern", "Jhin", "Karma", "Kayn", "Kennen", "Lee Sin", "Lillia", "Master Yi", "Rakan", "Sett", "Shen", "Syndra", "Varus", "Wukong", "Xayah", "Yasuo", "Yone", "Zed"], "Elemental, My Dear Watson": ["Malphite", "Neeko", "Nidalee", "Qiyana", "Rengar", "Zyra"], "Strength Above All": ["Cassiopeia", "Darius", "Draven", "Katarina", "Kled", "Leblanc", "Rell", "Riven", "Samira", "Sion", "Swain", "Talon", "Vladimir"], "Calculated": ["Caitlyn", "Camille", "Corki", "Ezreal", "Heimerdinger", "Jayce", "Orianna", "Seraphine", "Vi"], "Spooky Scary Skeletons": ["Elise", "Evelynn", "Fiddlesticks", "Gwen", "Hecarim", "Kalista", "Karthus", "Maokai", "Senna", "Thresh", "Viego", "Yorick"], "The Sun Disc Never Sets": ["Akshan", "Amumu", "Azir", "Nasus", "Rammus", "Renekton", "Sivir", "Skarner", "Taliyah", "Xerath", "Zilean"], "Peak Performance": ["Aphelios", "Aurelion Sol", "Diana", "Leona", "Pantheon", "Soraka", "Taric", "Zoe"], "(Inhuman Screeching Sounds)": ["Bel\'Veth", "Cho\'Gath", "Kai\'Sa", "Kassadin", "Kha\'Zix", "Kog\'Maw", "Malzahar", "Rek\'Sai", "Vel\'Koz"], "Chemtech Comrades": ["Blitzcrank", "Dr. Mundo", "Ekko", "Janna", "Jinx", "Renata Glasc", "Singed", "Twitch", "Urgot", "Viktor", "Warwick", "Zac", "Zeri", "Ziggs"]}');
const champDict = JSON.parse('{"Aatrox": ["Hold That Pose"], "Ahri": ["Everybody was Wuju Fighting"], "Akali": ["Where\'d They Go?", "Everybody was Wuju Fighting"], "Akshan": ["We\'re Good Over Here", "Nowhere To Hide", "They Just\u2026 Don\'t\u2026 Die!", "Where\'d They Go?", "The Sun Disc Never Sets"], "Alistar": ["Hold That Pose", "Get Over Here", "They Just\u2026 Don\'t\u2026 Die!", "We Protec"], "Amumu": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "The Sun Disc Never Sets"], "Anivia": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "They Just\u2026 Don\'t\u2026 Die!", "I\'m Helping", "Ice, Ice, Baby"], "Annie": ["It Has \'Ultimate\' In The Name", "We Protec", "Summoners on the Rift"], "Aphelios": ["Peak Performance"], "Ashe": ["We\'re Good Over Here", "Nowhere To Hide", "Ice, Ice, Baby"], "Aurelion Sol": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "Peak Performance"], "Azir": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Get Over Here", "Summoners on the Rift", "I\'m Helping", "The Sun Disc Never Sets"], "Bard": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Nowhere To Hide", "They Just\u2026 Don\'t\u2026 Die!", "We Protec"], "Bel\'Veth": ["It Has \'Ultimate\' In The Name", "They Just\u2026 Don\'t\u2026 Die!", "(Inhuman Screeching Sounds)"], "Blitzcrank": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "Chemtech Comrades"], "Braum": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "They Just\u2026 Don\'t\u2026 Die!", "Ice, Ice, Baby"], "Caitlyn": ["We\'re Good Over Here", "Nowhere To Hide", "It\'s a Trap!", "Calculated"], "Camille": ["Hold That Pose", "Calculated"], "Cassiopeia": ["It Has \'Ultimate\' In The Name", "Strength Above All"], "Cho\'Gath": ["We\'re Good Over Here", "(Inhuman Screeching Sounds)"], "Corki": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "5 Under 5\'", "Calculated"], "Darius": ["Get Over Here", "Strength Above All"], "Diana": ["It Has \'Ultimate\' In The Name", "Peak Performance"], "Dr. Mundo": ["We\'re Good Over Here", "Chemtech Comrades"], "Draven": ["It Has \'Ultimate\' In The Name", "Nowhere To Hide", "Strength Above All"], "Ekko": ["It Has \'Ultimate\' In The Name", "They Just\u2026 Don\'t\u2026 Die!", "Chemtech Comrades"], "Elise": ["They Just\u2026 Don\'t\u2026 Die!", "Summoners on the Rift", "Spooky Scary Skeletons"], "Evelynn": ["It Has \'Ultimate\' In The Name", "They Just\u2026 Don\'t\u2026 Die!", "Where\'d They Go?", "Spooky Scary Skeletons"], "Ezreal": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Nowhere To Hide", "Calculated"], "Fiddlestick": ["It Has \'Ultimate\' In The Name"], "Fiddlesticks": ["Summoners on the Rift", "Spooky Scary Skeletons"], "Fiora": ["They Just\u2026 Don\'t\u2026 Die!", "We Protec", "For Demacia"], "Fizz": ["It Has \'Ultimate\' In The Name", "They Just\u2026 Don\'t\u2026 Die!", "5 Under 5\'", "All Hands on Deck"], "Galio": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Nowhere To Hide", "We Protec", "For Demacia"], "Gangplank": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Nowhere To Hide", "It\'s a Trap!", "All Hands on Deck"], "Garen": ["For Demacia"], "Gnar": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "5 Under 5\'", "Ice, Ice, Baby"], "Gragas": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "Ice, Ice, Baby"], "Graves": ["It Has \'Ultimate\' In The Name", "All Hands on Deck"], "Gwen": ["They Just\u2026 Don\'t\u2026 Die!", "Spooky Scary Skeletons"], "Hecarim": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "Spooky Scary Skeletons"], "Heimerdinger": ["It Has \'Ultimate\' In The Name", "Summoners on the Rift", "5 Under 5\'", "Calculated"], "Illaoi": ["It Has \'Ultimate\' In The Name", "Summoners on the Rift", "All Hands on Deck"], "Irelia": ["I\'m Helping", "Everybody was Wuju Fighting"], "Ivern": ["Hold That Pose", "We Protec", "Summoners on the Rift", "I\'m Helping", "Everybody was Wuju Fighting"], "Janna": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "We Protec", "Chemtech Comrades"], "Jarvan Iv": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "I\'m Helping", "For Demacia"], "Jax": ["They Just\u2026 Don\'t\u2026 Die!"], "Jayce": ["We\'re Good Over Here", "Get Over Here", "Calculated"], "Jhin": ["We\'re Good Over Here", "Nowhere To Hide", "It\'s a Trap!", "Everybody was Wuju Fighting"], "Jinx": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Nowhere To Hide", "It\'s a Trap!", "Chemtech Comrades"], "Kai\'Sa": ["We\'re Good Over Here", "Nowhere To Hide", "Where\'d They Go?", "(Inhuman Screeching Sounds)"], "Kalista": ["They Just\u2026 Don\'t\u2026 Die!", "Summoners on the Rift", "Spooky Scary Skeletons"], "Karma": ["We\'re Good Over Here", "We Protec", "Everybody was Wuju Fighting"], "Karthus": ["It Has \'Ultimate\' In The Name", "Nowhere To Hide", "They Just\u2026 Don\'t\u2026 Die!", "Spooky Scary Skeletons"], "Kassadin": ["(Inhuman Screeching Sounds)"], "Katarina": ["It Has \'Ultimate\' In The Name", "Strength Above All"], "Kayle": ["It Has \'Ultimate\' In The Name", "They Just\u2026 Don\'t\u2026 Die!", "We Protec", "For Demacia"], "Kayn": ["They Just\u2026 Don\'t\u2026 Die!", "Everybody was Wuju Fighting"], "Kennen": ["It Has \'Ultimate\' In The Name", "5 Under 5\'", "Everybody was Wuju Fighting"], "Kha\'Zix": ["Where\'d They Go?", "(Inhuman Screeching Sounds)"], "Kindred": ["They Just\u2026 Don\'t\u2026 Die!", "We Protec", "Summoners on the Rift"], "Kled": ["We\'re Good Over Here", "Hold That Pose", "Get Over Here", "Nowhere To Hide", "They Just\u2026 Don\'t\u2026 Die!", "5 Under 5\'", "Strength Above All"], "Kog\'Maw": ["We\'re Good Over Here", "They Just\u2026 Don\'t\u2026 Die!", "(Inhuman Screeching Sounds)"], "Leblanc": ["Hold That Pose", "Where\'d They Go?", "Strength Above All"], "Lee Sin": ["Get Over Here", "We Protec", "Everybody was Wuju Fighting"], "Leona": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Peak Performance"], "Lillia": ["Nowhere To Hide", "Everybody was Wuju Fighting"], "Lissandra": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "They Just\u2026 Don\'t\u2026 Die!", "Summoners on the Rift", "Ice, Ice, Baby"], "Lucian": ["For Demacia"], "Lulu": ["Hold That Pose", "We Protec", "5 Under 5\'"], "Lux": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Nowhere To Hide", "We Protec", "For Demacia"], "Malphite": ["It Has \'Ultimate\' In The Name", "Elemental, My Dear Watson"], "Malzahar": ["They Just\u2026 Don\'t\u2026 Die!", "Summoners on the Rift", "(Inhuman Screeching Sounds)"], "Maokai": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Hold That Pose", "Get Over Here", "Nowhere To Hide", "They Just\u2026 Don\'t\u2026 Die!", "Summoners on the Rift", "It\'s a Trap!", "Spooky Scary Skeletons"], "Master Yi": ["They Just\u2026 Don\'t\u2026 Die!", "Everybody was Wuju Fighting"], "Miss Fortune": ["It Has \'Ultimate\' In The Name", "All Hands on Deck"], "Mordekaiser": ["Get Over Here"], "Morgana": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "We Protec", "For Demacia"], "Nami": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "We Protec"], "Nasus": ["The Sun Disc Never Sets"], "Nautilus": ["Hold That Pose", "Get Over Here", "All Hands on Deck"], "Neeko": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Where\'d They Go?", "Summoners on the Rift", "Elemental, My Dear Watson"], "Nidalee": ["We\'re Good Over Here", "We Protec", "It\'s a Trap!", "Elemental, My Dear Watson"], "Nilah": ["It Has \'Ultimate\' In The Name", "Get Over Here", "We Protec"], "Nocturne": ["Nowhere To Hide", "Where\'d They Go?"], "Nunu & Willump": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Ice, Ice, Baby"], "Olaf": ["They Just\u2026 Don\'t\u2026 Die!", "Ice, Ice, Baby"], "Orianna": ["It Has \'Ultimate\' In The Name", "Get Over Here", "We Protec", "Summoners on the Rift", "Calculated"], "Ornn": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "I\'m Helping", "Ice, Ice, Baby"], "Pantheon": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Nowhere To Hide", "They Just\u2026 Don\'t\u2026 Die!", "Peak Performance"], "Poppy": ["Hold That Pose", "Get Over Here", "5 Under 5\'", "For Demacia"], "Pyke": ["Hold That Pose", "Get Over Here", "Where\'d They Go?", "All Hands on Deck"], "Qiyana": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Where\'d They Go?", "Elemental, My Dear Watson"], "Quinn": ["For Demacia"], "Rakan": ["It Has \'Ultimate\' In The Name", "They Just\u2026 Don\'t\u2026 Die!", "We Protec", "Everybody was Wuju Fighting"], "Rammus": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "The Sun Disc Never Sets"], "Rek\'Sai": ["(Inhuman Screeching Sounds)"], "Rell": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "We Protec", "Strength Above All"], "Renata Glasc": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "They Just\u2026 Don\'t\u2026 Die!", "We Protec", "Chemtech Comrades"], "Renekton": ["The Sun Disc Never Sets"], "Rengar": ["Where\'d They Go?", "Elemental, My Dear Watson"], "Riven": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Strength Above All"], "Rumble": ["It Has \'Ultimate\' In The Name", "5 Under 5\'"], "Ryze": ["Nowhere To Hide"], "Samira": ["It Has \'Ultimate\' In The Name", "Strength Above All"], "Sejuani": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Ice, Ice, Baby"], "Senna": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Nowhere To Hide", "We Protec", "Where\'d They Go?", "Spooky Scary Skeletons"], "Seraphine": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Hold That Pose", "We Protec", "Calculated"], "Sett": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "Everybody was Wuju Fighting"], "Shaco": ["Hold That Pose", "Where\'d They Go?", "Summoners on the Rift", "It\'s a Trap!"], "Shen": ["Nowhere To Hide", "We Protec", "Everybody was Wuju Fighting"], "Shyvana": ["We\'re Good Over Here", "For Demacia"], "Singed": ["Hold That Pose", "Get Over Here", "Chemtech Comrades"], "Sion": ["Hold That Pose", "Nowhere To Hide", "They Just\u2026 Don\'t\u2026 Die!", "Strength Above All"], "Sivir": ["We\'re Good Over Here", "The Sun Disc Never Sets"], "Skarner": ["Hold That Pose", "Get Over Here", "The Sun Disc Never Sets"], "Sona": ["It Has \'Ultimate\' In The Name", "We Protec", "For Demacia"], "Soraka": ["Nowhere To Hide", "We Protec", "Peak Performance"], "Swain": ["It Has \'Ultimate\' In The Name", "Get Over Here", "Nowhere To Hide", "Strength Above All"], "Sylas": ["For Demacia"], "Syndra": ["Everybody was Wuju Fighting"], "Tahm Kench": ["Hold That Pose", "Get Over Here", "They Just\u2026 Don\'t\u2026 Die!", "We Protec", "All Hands on Deck"], "Taliyah": ["We\'re Good Over Here", "Get Over Here", "Nowhere To Hide", "I\'m Helping", "The Sun Disc Never Sets"], "Talon": ["It Has \'Ultimate\' In The Name", "Where\'d They Go?", "Strength Above All"], "Taric": ["They Just\u2026 Don\'t\u2026 Die!", "We Protec", "Peak Performance"], "Teemo": ["Where\'d They Go?", "It\'s a Trap!", "5 Under 5\'"], "Thresh": ["Hold That Pose", "Get Over Here", "We Protec", "Spooky Scary Skeletons"], "Tristana": ["Get Over Here", "5 Under 5\'"], "Trundle": ["I\'m Helping", "Ice, Ice, Baby"], "Tryndamere": ["They Just\u2026 Don\'t\u2026 Die!", "Ice, Ice, Baby"], "Twisted Fate": ["We\'re Good Over Here", "Nowhere To Hide", "All Hands on Deck"], "Twitch": ["It Has \'Ultimate\' In The Name", "Where\'d They Go?", "Chemtech Comrades"], "Udyr": ["Ice, Ice, Baby"], "Urgot": ["Hold That Pose", "Get Over Here", "Chemtech Comrades"], "Varus": ["Everybody was Wuju Fighting"], "Vayne": ["Get Over Here", "Where\'d They Go?", "For Demacia"], "Vayus": ["We\'re Good Over Here"], "Veigar": ["I\'m Helping", "5 Under 5\'"], "Vel\'Koz": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "(Inhuman Screeching Sounds)"], "Vex": ["We\'re Good Over Here", "Nowhere To Hide", "5 Under 5\'"], "Vi": ["Hold That Pose", "Calculated"], "Viego": ["Where\'d They Go?", "Spooky Scary Skeletons"], "Viktor": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Chemtech Comrades"], "Vladimir": ["It Has \'Ultimate\' In The Name", "They Just\u2026 Don\'t\u2026 Die!", "Strength Above All"], "Volibear": ["It Has \'Ultimate\' In The Name", "Ice, Ice, Baby"], "Warwick": ["Hold That Pose", "Chemtech Comrades"], "Wukong": ["Everybody was Wuju Fighting"], "Xayah": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Everybody was Wuju Fighting"], "Xerath": ["We\'re Good Over Here", "Nowhere To Hide", "The Sun Disc Never Sets"], "Xin Zhao": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "They Just\u2026 Don\'t\u2026 Die!"], "Yasuo": ["Hold That Pose", "Everybody was Wuju Fighting"], "Yone": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "Everybody was Wuju Fighting"], "Yorick": ["Summoners on the Rift", "I\'m Helping", "Spooky Scary Skeletons"], "Yuumi": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "They Just\u2026 Don\'t\u2026 Die!", "We Protec", "5 Under 5\'"], "Zac": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Get Over Here", "They Just\u2026 Don\'t\u2026 Die!", "Chemtech Comrades"], "Zed": ["They Just\u2026 Don\'t\u2026 Die!", "Summoners on the Rift", "Everybody was Wuju Fighting"], "Zeri": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Chemtech Comrades"], "Ziggs": ["It Has \'Ultimate\' In The Name", "We\'re Good Over Here", "Get Over Here", "Nowhere To Hide", "It\'s a Trap!", "5 Under 5\'", "Chemtech Comrades"], "Zilean": ["They Just\u2026 Don\'t\u2026 Die!", "We Protec", "The Sun Disc Never Sets"], "Zoe": ["We\'re Good Over Here", "Peak Performance"], "Zyra": ["It Has \'Ultimate\' In The Name", "Hold That Pose", "Summoners on the Rift", "It\'s a Trap!", "Elemental, My Dear Watson"]}	')
const challengeNum = JSON.parse('{"It Has \'Ultimate\' In The Name": ["3"], "We\'re Good Over Here": ["3"], "Hold That Pose": ["3"], "Get Over Here": ["3"], "Nowhere To Hide": ["3"], "They Just\u2026 Don\'t\u2026 Die!": ["3"], "We Protec": ["3"], "Where\'d They Go?": ["3"], "Summoners on the Rift": ["5"], "It\'s a Trap!": ["3"], "I\'m Helping": ["3"], "5 Under 5\'": ["5"], "All Hands on Deck": ["5"], "For Demacia": ["5"], "Ice, Ice, Baby": ["5"], "Everybody was Wuju Fighting": ["5"], "Elemental, My Dear Watson": ["5"], "Strength Above All": ["5"], "Calculated": ["5"], "Spooky Scary Skeletons": ["5"], "The Sun Disc Never Sets": ["5"], "Peak Performance": ["5"], "(Inhuman Screeching Sounds)": ["5"], "Chemtech Comrades": ["5"]}')

const champList = Object.keys(champDict)
var champs = []
var select = document.getElementById("champSelector");
for(var i = 0; i < champList.length; i++) {
    var opt = champList[i];
    var el = document.createElement("a");
    el.textContent = opt;
    el.value = opt;
		el.addEventListener ("click", function() {addChamp(event.target.value);});
    select.appendChild(el);
}

function addChamp(inp) {
	if(champs.length < 5 && !champs.includes(inp)) {
		champs.push(inp);
		console.log(inp);
		eraseContent();
		processChamps();
	}
}

function listChallenge(challengeinp) {
	console.log(challengeinp);
	document.getElementById("challengeInfoName").innerHTML = challengeinp;
	document.getElementById("challengeInfoNumberRequired").innerHTML = "Number of champions required for this challenge: " + challengeNum[challengeinp] + "+";
	//document.getElementById("challengeInfoChampListing").innerHTML = challengeDict[challengeinp].join(" || ");
	var champListArea = document.getElementById("challengeInfoChampListing");
	while(champListArea.firstChild) {
		champListArea.removeChild(champListArea.lastChild)
	}
	for(var i = 0; i < challengeDict[challengeinp].length; i++) {
		var el = document.createElement("button");
		el.textContent = challengeDict[challengeinp][i];
		el.value = challengeDict[challengeinp][i];
		el.addEventListener ("click", function() {addChamp(event.target.value);});
		el.classList.add("champbuttonsmall")
		champListArea.appendChild(el);
	}
	document.getElementById("challengeInfoChampListing").style.minHeight = "150px";
}

function processChamps() {
	var challengeCounter = {}
	for(var i = 0; i < champs.length; i++) {
		var applicableColumn = document.getElementById("column" + (i + 1));
		var el = document.createElement("button");
		el.value = champs[i];
		el.textContent = champs[i];
		el.id = "champ"+champs[i]
		el.classList.add("champbutton")
		el.addEventListener ("click", function() {popChamp(event.target.parentElement.id)});
		applicableColumn.appendChild(el);
		for(var j = 0; j < champDict[champs[i]].length; j++){
			el = document.createElement("p");
			el.value = champDict[champs[i]][j];
			el.textContent = champDict[champs[i]][j];
			el.classList.add("challengedisp");
			el.addEventListener ("click", function() {listChallenge(event.target.value)});
			if (!(champDict[champs[i]][j] in challengeCounter)) {
				challengeCounter[champDict[champs[i]][j]] = 1
			}
			else {
				console.log(champDict[champs[i]][j])
				challengeCounter[champDict[champs[i]][j]] += 1
			}
			el.id = champDict[champs[i]][j]+"_challenge_"+challengeCounter[champDict[champs[i]][j]];
			applicableColumn.append(el);
		}
		console.log(challengeCounter)
	}
	challengesApplicable = Object.keys(challengeCounter)
	console.log(challengesApplicable)
	for(var i = 0; i < challengesApplicable.length; i++) {
		if(challengeCounter[challengesApplicable[i]] > 1) {
			color = "#1F1A24";
			if(challengeCounter[challengesApplicable[i]] < challengeNum[challengesApplicable[i]]) {
				color = "yellow";
			}
			if(challengeCounter[challengesApplicable[i]] == challengeNum[challengesApplicable[i]]) {
				color = "green";
			}
			if(challengeCounter[challengesApplicable[i]] > challengeNum[challengesApplicable[i]]) {
				color = "red";
			}
			for(var j = 1; j <= challengeCounter[challengesApplicable[i]]; j++) {
				document.getElementById(challengesApplicable[i]+"_challenge_"+j).style.background = color;
				document.getElementById(challengesApplicable[i]+"_challenge_"+j).style.color = "black";
			}
		}
	}
}

function popChamp(inp) {
	champs.splice(parseInt(inp.charAt(6)) - 1, 1);
	eraseContent();
	processChamps();
}

function eraseContent() {
	for(var i = 1; i < 6; i++) {
		var applicableColumn = document.getElementById("column" + i);
		while(applicableColumn.firstChild) {
			applicableColumn.removeChild(applicableColumn.lastChild)
		}
	}
}

function myFunction() {
  document.getElementById("champSelector").classList.toggle("show");
	document.getElementById("myInput").value = "";
	filterFunction();
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("champSelector");
	a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
} 