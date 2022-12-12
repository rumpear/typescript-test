const newsItem = {
  id: 296,
  hash: 'dc898d1af1f76c07f48d69025af6630bb138ca3a26669e243a8c994ef2b7d667',
  title: "Eidevall praises Arsenal 'maturity' in comeback win",
  link: 'https://www.bbc.co.uk/sport/football/63849447',
  isoDate: '2022-12-11T20:47:45.000Z',
  content:
    "{{url}}/8430e0cac1c1535ce13e730dcc73970945cd4d39a2b66b5328c0ba62e3baff0d.jpg\nBoss Jonas Eidevall says Arsenal \"are in a great position\" in the Women's Super League after coming from behind to brush aside Aston Villa.\nKirsty Hanson's 20-yard strike gave the hosts a shock early lead but Rachel Corsie's own goal drew Arsenal level.\nVivianne Miedema, Katie McCabe and Jordan Nobbs struck to take Arsenal above Manchester United into second.\n\"It's important we are professional and get the job done - the team maturity pleased me,\" Eidevall told Sky Sports.\n\"It was very good to keep our patience and composure even if we conceded a goal at the beginning,\" he added.\n\"It's five or six minutes into the game, we don't need to respond in any drastic way in that moment. \n\"It's about having belief in our gameplan and not changing or letting the emotions take over at that point. It was good to see we continued to create a lot of scoring opportunities. \n\"We have had three games in a row where we have only, by our high standards, scored one goal in each game. That's why I think it was important from a self-confidence perspective to put a few more of the opportunities away today.\"\nVictory briefly took Arsenal level on points with leaders Chelsea but the Blues re-established a three-point cushion by beating Reading 3-2 later on Sunday.\nEidevall's side still hold a game in hand over their London rivals - and the two sides meet in their first game of 2023 when Arsenal host Chelsea on 15 January.\nThis win was an eighth successive away triumph in the WSL for Arsenal, who always looked in control after cancelling out the early deficit, even if sixth-placed Villa did provide spirited opposition throughout.\n\"All in all, I think we're in a great position in the league and now we need to focus on the Champions League,\" added Eidevall, whose side face Lyon and Zurich in their final two group games before Christmas.\nAt the final whistle at Villa Park, both Arsenal and Chelsea had identical records of eight wins and just one defeat from nine WSL matches this term.\nThat suggests this season's title race will be just as tight as last year when Chelsea pipped the Gunners by just a point. Perhaps it will be even tighter this time, with the two Manchester clubs not far behind.\nLast season, Arsenal were left to rue a surprise defeat at relegated Birmingham City that was construed by many to have cost them the title - and they looked in danger of suffering more 'second city' misery after Hanson's sixth-minute opener.\nThe on-loan Manchester United forward took Kenza Dali's pass in her stride before firing a fine finish across Manuela Zinsberger into the far corner from the left-hand edge of the penalty area.\nArsenal continued to look nervy at the back as Laura Blindkilde Brown's mis-hit cross struck Zinsberger's crossbar, but the Gunners retained their own threat going forward.\nHannah Hampton saved well from Miedema before Hanson's opener, while Caitlin Foord blazed off target when well placed and McCabe's 25-yard free-kick whistled inches over.\nThere was a slice of fortune about Arsenal's 26th-minute equaliser as Hampton's attempt to palm out McCabe's cross struck Corsie and ricocheted in, despite Danielle Turner's effort to clear it off the line.\nArsenal led four minutes later as the luckless Hampton punched a corner straight to Miedema, who volleyed home through a crowd of bodies.\nAfter finishes of ninth and 10th in their first two WSL seasons, Carla Ward's Villa are progressing despite a raft of injuries and had won four of their past five games in league and cup.\nAfter the break, Alisha Lehmann and Dali both tested Zinsberger, but Arsenal possessed the greater quality in the attacking third, evidenced by incisive moves for their third and fourth goals.\nLia Walti sent Steph Catley away and her cross was parried for Hampton for McCabe to slot home before Foord's low ball was expertly swept home by substitute Nobbs with six minutes left.\nBoth teams now have more than a month off before their next game and Villa boss Ward is grateful for the break.\n\"Now is the right time - I think everybody needs it mentally and physically,\" she said.\n\"I think this next three or four weeks is a chance to not only get players back but also to bring three or four more faces into the building. That always lifts spirits.\"\nFormation  4-3-3\nFormation  4-2-3-1\nMatch ends, Aston Villa Women 1, Arsenal Women 4.\nSecond Half ends, Aston Villa Women 1, Arsenal Women 4.\nAttempt blocked. Laura Blindkilde (Aston Villa Women) right footed shot from the centre of the box is blocked.\nSubstitution, Arsenal Women. Mana Iwabuchi replaces Caitlin Foord.\nSubstitution, Aston Villa Women. Isobel Goodwin replaces Alisha Lehmann.\nGoal!  Aston Villa Women 1, Arsenal Women 4. Jordan Nobbs (Arsenal Women) right footed shot from the centre of the box to the bottom left corner. Assisted by Caitlin Foord.\nCorner,  Arsenal Women. Conceded by Kirsty Hanson.\nStephanie-Elise Catley (Arsenal Women) wins a free kick in the defensive half.\nFoul by Alisha Lehmann (Aston Villa Women).\nAttempt missed. Katie McCabe (Arsenal Women) left footed shot from the left side of the box is too high. Assisted by Frida Maanum.\nAttempt saved. Kirsty Hanson (Aston Villa Women) right footed shot from the centre of the box is saved in the bottom right corner.\nAttempt missed. Stina Blackstenius (Arsenal Women) right footed shot from the centre of the box is too high.\nAttempt saved. Alisha Lehmann (Aston Villa Women) right footed shot from the right side of the box is saved in the centre of the goal. Assisted by Rachel Daly.\nFoul by Katie McCabe (Arsenal Women).\nSarah Mayling (Aston Villa Women) wins a free kick in the defensive half.\nSubstitution, Arsenal Women. Jordan Nobbs replaces Vivianne Miedema.\nSubstitution, Arsenal Women. Laura Wienroither replaces Noëlle Maritz.\nAttempt missed. Stina Blackstenius (Arsenal Women) header from the centre of the box misses to the left. Assisted by Leah Williamson with a cross.\nAttempt blocked. Caitlin Foord (Arsenal Women) right footed shot from the left side of the box is blocked.\nAttempt blocked. Stina Blackstenius (Arsenal Women) header from the centre of the box is blocked. Assisted by Frida Maanum.",
  contentSnippet:
    "Arsenal keep their Women's Super League title bid on track by coming from behind to run out comfortable winners at Aston Villa.",
  logo: '8430e0cac1c1535ce13e730dcc73970945cd4d39a2b66b5328c0ba62e3baff0d.jpg',
  creator: null,
  enclosure: null,
  customFields: null,
  createdAt: '2022-12-12T11:23:47.000Z',
  updatedAt: '2022-12-12T11:23:47.000Z',
  feedId: 1,
};

export interface INews {
  content: string;
  contentSnippet: string;
  createdAt: string;
  creator: string | null;
  feedId: number;
  hash: string;
  id: number;
  isoDate: string;
  link: string;
  title: string;
  updatedAt: string;
  logo: string;
  enclosure: string | null;
  customFields: string | null;
}

const BASE_URL = process.env.REACT_APP_BASE_URL;
const NEWS_URL = '/static/rss/news/football';
const PHOTO_URL = BASE_URL + NEWS_URL;
const NEWS_IMG_REGEX = /{{url}}\/[^\s]+/g;

export const imgParser = (newsItem: INews) => {
  const newsItemHtml = newsItem?.content.replaceAll(
    NEWS_IMG_REGEX,
    (match: string) => {
      const imgSrc = match.replace('{{url}}', PHOTO_URL);
      return `<img src="${imgSrc}" alt="${newsItem.title}" />`;
    },
  );
  return newsItemHtml;
};
