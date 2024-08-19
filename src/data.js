const staticData = [
    {
      "distance": "16 ft",
      "game": "Apr 22, 2024 p",
      "opp": "LAL",
      "player": "Jamal Murray",
      "team": "DEN"
    },
    {
      "distance": "21",
      "game": "Mar 17, 2024",
      "opp": "DEN",
      "player": "Kyrie Irving",
      "team": "DAL"
    },
    {
      "distance": "31",
      "game": "Mar 17, 2024",
      "opp": "DET",
      "player": "Bam Adebayo",
      "team": "MIA"
    },
    {
      "distance": "59",
      "game": "Feb 27, 2024",
      "opp": "DAL",
      "player": "Max Strus",
      "team": "CLE"
    },
    {
      "distance": "18",
      "game": "Jan 17, 2024",
      "opp": "ORL",
      "player": "Dejounte Murray",
      "team": "ATL"
    },
    {
      "distance": "32",
      "game": "Jan 14, 2024",
      "opp": "SAC",
      "player": "Damian Lillard",
      "team": "MIL"
    },
    {
      "distance": "39",
      "game": "Jan 4, 2024",
      "opp": "GSW",
      "player": "Nikola Joki\u0107",
      "team": "DEN"
    },
    {
      "distance": "5",
      "game": "Dec 19, 2023",
      "opp": "NOP",
      "player": "Ja Morant",
      "team": "MEM"
    },
    {
      "distance": "20",
      "game": "Dec 16, 2023",
      "opp": "CHI",
      "player": "Jimmy Butler",
      "team": "MIA"
    },
    {
      "distance": "At Rim",
      "game": "May 27, 2023 p",
      "opp": "MIA",
      "player": "Derrick White",
      "team": "BOS"
    },
    {
      "distance": "27",
      "game": "Mar 17, 2023",
      "opp": "LAL",
      "player": "Maxi Kleber",
      "team": "DAL"
    },
    {
      "distance": "At Rim",
      "game": "Mar 7, 2023",
      "opp": "DET",
      "player": "Daniel Gafford",
      "team": "WAS"
    },
    {
      "distance": "12",
      "game": "Feb 26, 2023",
      "opp": "BRK",
      "player": "Trae Young",
      "team": "ATL"
    },
    {
      "distance": "At Rim",
      "game": "Feb 23, 2023",
      "opp": "DET",
      "player": "Wendell Carter Jr.",
      "team": "ORL"
    },
    {
      "distance": "28",
      "game": "Jan 4, 2023",
      "opp": "GSW",
      "player": "Saddiq Bey",
      "team": "DET"
    },
    {
      "distance": "At Rim",
      "game": "Jan 2, 2023",
      "opp": "ATL",
      "player": "Kevon Looney",
      "team": "GSW"
    },
    {
      "distance": "25",
      "game": "Dec 31, 2022",
      "opp": "UTA",
      "player": "Tyler Herro",
      "team": "MIA"
    },
    {
      "distance": "At Rim",
      "game": "Dec 21, 2022",
      "opp": "ATL",
      "player": "Ayo Dosunmu",
      "team": "CHI"
    },
    {
      "distance": "14",
      "game": "Dec 19, 2022",
      "opp": "POR",
      "player": "Shai Gilgeous-Alexander",
      "team": "OKC"
    },
    {
      "distance": "27",
      "game": "Dec 16, 2022",
      "opp": "TOR",
      "player": "Kyrie Irving",
      "team": "BRK"
    },
    {
      "distance": "6",
      "game": "Dec 11, 2022",
      "opp": "CHI",
      "player": "AJ Griffin",
      "team": "ATL"
    },
    {
      "distance": "25",
      "game": "Nov 28, 2022",
      "opp": "LAL",
      "player": "Andrew Nembhard",
      "team": "IND"
    },
    {
      "distance": "1",
      "game": "Nov 19, 2022",
      "opp": "TOR",
      "player": "AJ Griffin",
      "team": "ATL"
    },
    {
      "distance": "23",
      "game": "Nov 7, 2022",
      "opp": "MIA",
      "player": "Josh Hart",
      "team": "POR"
    },
    {
      "distance": "31",
      "game": "Nov 5, 2022",
      "opp": "ORL",
      "player": "De'Aaron Fox",
      "team": "SAC"
    },
    {
      "distance": "13",
      "game": "Nov 4, 2022",
      "opp": "PHO",
      "player": "Jerami Grant",
      "team": "POR"
    },
    {
      "distance": "At Rim",
      "game": "Apr 17, 2022 p",
      "opp": "BRK",
      "player": "Jayson Tatum",
      "team": "BOS"
    },
    {
      "distance": "26",
      "game": "Mar 16, 2022",
      "opp": "BRK",
      "player": "Spencer Dinwiddie",
      "team": "DAL"
    },
    {
      "distance": "31",
      "game": "Mar 4, 2022",
      "opp": "NYK",
      "player": "Cameron Johnson",
      "team": "PHO"
    },
    {
      "distance": "14",
      "game": "Feb 27, 2022",
      "opp": "CHO",
      "player": "Kelly Olynyk",
      "team": "DET"
    },
    {
      "distance": "27",
      "game": "Feb 16, 2022",
      "opp": "GSW",
      "player": "Monte Morris",
      "team": "DEN"
    },
    {
      "distance": "20",
      "game": "Jan 21, 2022",
      "opp": "HOU",
      "player": "Stephen Curry",
      "team": "GSW"
    },
    {
      "distance": "25",
      "game": "Jan 6, 2022",
      "opp": "BOS",
      "player": "RJ Barrett",
      "team": "NYK"
    },
    {
      "distance": "24",
      "game": "Jan 1, 2022",
      "opp": "WAS",
      "player": "DeMar DeRozan",
      "team": "CHI"
    },
    {
      "distance": "27",
      "game": "Dec 31, 2021",
      "opp": "IND",
      "player": "DeMar DeRozan",
      "team": "CHI"
    },
    {
      "distance": "23",
      "game": "Dec 29, 2021",
      "opp": "DAL",
      "player": "Chimezie Metu",
      "team": "SAC"
    },
    {
      "distance": "27",
      "game": "Dec 18, 2021",
      "opp": "LAC",
      "player": "Shai Gilgeous-Alexander",
      "team": "OKC"
    },
    {
      "distance": "61",
      "game": "Dec 15, 2021",
      "opp": "OKC",
      "player": "Devonte' Graham",
      "team": "NOP"
    },
    {
      "distance": "26",
      "game": "Nov 6, 2021",
      "opp": "BOS",
      "player": "Luka Don\u010di\u0107",
      "team": "DAL"
    },
    {
      "distance": "27",
      "game": "Oct 27, 2021",
      "opp": "PHO",
      "player": "Harrison Barnes",
      "team": "SAC"
    },
    {
      "distance": "At Rim",
      "game": "May 2, 2021",
      "opp": "SAS",
      "player": "Ben Simmons",
      "team": "PHI"
    },
    {
      "distance": "13",
      "game": "Apr 18, 2021",
      "opp": "BRK",
      "player": "Bam Adebayo",
      "team": "MIA"
    },
    {
      "distance": "25",
      "game": "Apr 14, 2021",
      "opp": "MEM",
      "player": "Luka Don\u010di\u0107",
      "team": "DAL"
    },
    {
      "distance": "26",
      "game": "Apr 5, 2021",
      "opp": "WAS",
      "player": "Gary Trent Jr.",
      "team": "TOR"
    },
    {
      "distance": "26",
      "game": "Mar 27, 2021",
      "opp": "CLE",
      "player": "Harrison Barnes",
      "team": "SAC"
    },
    {
      "distance": "25",
      "game": "Mar 11, 2021",
      "opp": "TOR",
      "player": "Tony Snell",
      "team": "ATL"
    },
    {
      "distance": "23",
      "game": "Feb 24, 2021",
      "opp": "SAS",
      "player": "Luguentz Dort",
      "team": "OKC"
    },
    {
      "distance": "20",
      "game": "Feb 20, 2021",
      "opp": "GSW",
      "player": "Terry Rozier",
      "team": "CHO"
    },
    {
      "distance": "26",
      "game": "Jan 30, 2021",
      "opp": "CHI",
      "player": "Damian Lillard",
      "team": "POR"
    },
    {
      "distance": "25",
      "game": "Jan 20, 2021",
      "opp": "MIN",
      "player": "Cole Anthony",
      "team": "ORL"
    },
    {
      "distance": "At Rim",
      "game": "Dec 23, 2020",
      "opp": "DEN",
      "player": "Buddy Hield",
      "team": "SAC"
    },
    {
      "distance": "26",
      "game": "Sep 20, 2020 p",
      "opp": "DEN",
      "player": "Anthony Davis",
      "team": "LAL"
    },
    {
      "distance": "23",
      "game": "Sep 3, 2020 p",
      "opp": "BOS",
      "player": "OG Anunoby",
      "team": "TOR"
    },
    {
      "distance": "",
      "game": "Sep 2, 2020 p",
      "opp": "MIL",
      "player": "Jimmy Butler",
      "team": "MIA"
    },
    {
      "distance": "27",
      "game": "Aug 23, 2020 p",
      "opp": "LAC",
      "player": "Luka Don\u010di\u0107",
      "team": "DAL"
    },
    {
      "distance": "18",
      "game": "Aug 4, 2020",
      "opp": "LAC",
      "player": "Devin Booker",
      "team": "PHO"
    },
    {
      "distance": "28",
      "game": "Feb 9, 2020",
      "opp": "HOU",
      "player": "Bojan Bogdanovi\u0107",
      "team": "UTA"
    },
    {
      "distance": "32",
      "game": "Dec 9, 2019",
      "opp": "HOU",
      "player": "Nemanja Bjelica",
      "team": "SAC"
    },
    {
      "distance": "26",
      "game": "Nov 15, 2019",
      "opp": "DET",
      "player": "Malik Monk",
      "team": "CHO"
    },
    {
      "distance": "23",
      "game": "Nov 8, 2019",
      "opp": "MIL",
      "player": "Bojan Bogdanovi\u0107",
      "team": "UTA"
    },
    {
      "distance": "27",
      "game": "Oct 27, 2019",
      "opp": "BRK",
      "player": "Jae Crowder",
      "team": "MEM"
    },
    {
      "distance": "15",
      "game": "May 12, 2019 p",
      "opp": "PHI",
      "player": "Kawhi Leonard",
      "team": "TOR"
    },
    {
      "distance": "36",
      "game": "Apr 23, 2019 p",
      "opp": "OKC",
      "player": "Damian Lillard",
      "team": "POR"
    },
    {
      "distance": "24",
      "game": "Apr 9, 2019",
      "opp": "LAL",
      "player": "Maurice Harkless",
      "team": "POR"
    },
    {
      "distance": "11",
      "game": "Mar 31, 2019",
      "opp": "MIL",
      "player": "Trae Young",
      "team": "ATL"
    },
    {
      "distance": "48",
      "game": "Mar 24, 2019",
      "opp": "TOR",
      "player": "Jeremy Lamb",
      "team": "CHO"
    },
    {
      "distance": "28",
      "game": "Mar 17, 2019",
      "opp": "BRK",
      "player": "Lou Williams",
      "team": "LAC"
    },
    {
      "distance": "12",
      "game": "Mar 14, 2019",
      "opp": "DAL",
      "player": "Nikola Joki\u0107",
      "team": "DEN"
    },
    {
      "distance": "25",
      "game": "Feb 27, 2019",
      "opp": "GSW",
      "player": "Dwyane Wade",
      "team": "MIA"
    },
    {
      "distance": "19",
      "game": "Feb 7, 2019",
      "opp": "BOS",
      "player": "Rajon Rondo",
      "team": "LAL"
    },
    {
      "distance": "14",
      "game": "Jan 30, 2019",
      "opp": "MEM",
      "player": "Karl-Anthony Towns",
      "team": "MIN"
    },
    {
      "distance": "21",
      "game": "Jan 29, 2019",
      "opp": "PHO",
      "player": "Rudy Gay",
      "team": "SAS"
    },
    {
      "distance": "27",
      "game": "Jan 19, 2019",
      "opp": "DET",
      "player": "Buddy Hield",
      "team": "SAC"
    },
    {
      "distance": "2",
      "game": "Jan 17, 2019",
      "opp": "PHO",
      "player": "Pascal Siakam",
      "team": "TOR"
    },
    {
      "distance": "12",
      "game": "Dec 30, 2018",
      "opp": "DET",
      "player": "Evan Fournier",
      "team": "ORL"
    },
    {
      "distance": "26",
      "game": "Dec 27, 2018",
      "opp": "LAL",
      "player": "Bogdan Bogdanovi\u0107",
      "team": "SAC"
    },
    {
      "distance": "At Rim",
      "game": "Dec 18, 2018",
      "opp": "IND",
      "player": "Larry Nance Jr.",
      "team": "CLE"
    },
    {
      "distance": "5",
      "game": "Nov 14, 2018",
      "opp": "TOR",
      "player": "Reggie Bullock",
      "team": "DET"
    },
    {
      "distance": "24",
      "game": "Nov 5, 2018",
      "opp": "CLE",
      "player": "Evan Fournier",
      "team": "ORL"
    },
    {
      "distance": "9",
      "game": "May 5, 2018 p",
      "opp": "TOR",
      "player": "LeBron James",
      "team": "CLE"
    },
    {
      "distance": "24",
      "game": "Apr 25, 2018 p",
      "opp": "IND",
      "player": "LeBron James",
      "team": "CLE"
    },
    {
      "distance": "23",
      "game": "Mar 30, 2018",
      "opp": "PHO",
      "player": "Gerald Green",
      "team": "HOU"
    },
    {
      "distance": "25",
      "game": "Feb 22, 2018",
      "opp": "SAC",
      "player": "Russell Westbrook",
      "team": "OKC"
    },
    {
      "distance": "17",
      "game": "Feb 7, 2018",
      "opp": "MIN",
      "player": "LeBron James",
      "team": "CLE"
    },
    {
      "distance": "19",
      "game": "Feb 4, 2018",
      "opp": "POR",
      "player": "Al Horford",
      "team": "BOS"
    },
    {
      "distance": "24",
      "game": "Feb 1, 2018",
      "opp": "OKC",
      "player": "Gary Harris",
      "team": "DEN"
    },
    {
      "distance": "29",
      "game": "Nov 22, 2017",
      "opp": "MEM",
      "player": "Harrison Barnes",
      "team": "DAL"
    },
    {
      "distance": "24",
      "game": "Oct 26, 2017",
      "opp": "POR",
      "player": "Blake Griffin",
      "team": "LAC"
    },
    {
      "distance": "23",
      "game": "Oct 25, 2017",
      "opp": "PHI",
      "player": "Eric Gordon",
      "team": "HOU"
    },
    {
      "distance": "29",
      "game": "Oct 22, 2017",
      "opp": "OKC",
      "player": "Andrew Wiggins",
      "team": "MIN"
    },
    {
      "distance": "4",
      "game": "Apr 15, 2017 p",
      "opp": "LAC",
      "player": "Joe Johnson",
      "team": "UTA"
    },
    {
      "distance": "2",
      "game": "Apr 10, 2017",
      "opp": "SAS",
      "player": "Noah Vonleh",
      "team": "POR"
    },
    {
      "distance": "36",
      "game": "Apr 9, 2017",
      "opp": "DEN",
      "player": "Russell Westbrook",
      "team": "OKC"
    },
    {
      "distance": "25",
      "game": "Apr 9, 2017",
      "opp": "MIN",
      "player": "D'Angelo Russell",
      "team": "LAL"
    },
    {
      "distance": "At Rim",
      "game": "Mar 28, 2017",
      "opp": "DET",
      "player": "Hassan Whiteside",
      "team": "MIA"
    },
    {
      "distance": "16",
      "game": "Mar 21, 2017",
      "opp": "DET",
      "player": "Brook Lopez",
      "team": "BRK"
    },
    {
      "distance": "19",
      "game": "Mar 11, 2017",
      "opp": "DAL",
      "player": "Devin Booker",
      "team": "PHO"
    },
    {
      "distance": "25",
      "game": "Mar 5, 2017",
      "opp": "BOS",
      "player": "Tyler Ulis",
      "team": "PHO"
    },
    {
      "distance": "1",
      "game": "Mar 5, 2017",
      "opp": "SAC",
      "player": "Rudy Gobert",
      "team": "UTA"
    },
    {
      "distance": "20",
      "game": "Feb 3, 2017",
      "opp": "SAC",
      "player": "Devin Booker",
      "team": "PHO"
    },
];
  
  export default staticData;
  