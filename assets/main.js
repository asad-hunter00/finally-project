const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTg4OGM2NThjYTVmOTRkZjdlODg0Y2Q3ODY4MTc2MiIsIm5iZiI6MTc3ODE1MzU0NC45NDgsInN1YiI6IjY5ZmM3ODQ4M2JlMWQzMzlmZGE2NDhiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3gJtgI96y3tkN9a7PiKLesNb8Wl-XRDibPEAesn-N4";
const IMG = "https://media.themoviedb.org/t/p/";
const H = { accept: "application/json", Authorization: TOKEN };
const BASE = "https://api.themoviedb.org/3";

let curPage = 1;
let curSection = 'general';

// ── THREAD DATA ──
const SECTIONS = {
  general: {
    label: "General",
    totalPages: 380,
    threads: [
      { id:1, av:"E", col:"#0090e7", author:"Elghettany", title:'Request to add Actor "Ahmed Abdel Majeed" to the database', time:"about 3 hours ago", status:"open", replies:1,
        body:`Hello TMDB Support Team,\n\nI hope this message finds you well.\n\nI would like to request the addition of the Egyptian actor Ahmed Abdel Majeed to the TMDB database. He is a professional actor who has participated in various drama and cinematic works.\n\nActor Definition & Bio:\nAhmed Abdel Majeed is an Egyptian actor who has built a notable career in the Arab entertainment industry, delivering diverse roles across television series and film productions.\n\nTo verify his profile and filmography, please find the official documentation and reference links below:\n\nElCinema Profile: https://elcinema.com/person/2109887/\nRotana Link: https://rotana.net/en/actor-details/6476/ahmed-abdel-majeed\nIMDb link: https://www.imdb.com/name/nm14374479/\n\nThank you for your time and efforts in keeping the database accurate and comprehensive.\n\nBest regards,`,
        postedBy:"Elghettany", postedTime:"May 31, 2026 at 5:32 PM",
        users:[{av:"E",col:"#0090e7"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 31, 2026 at 6:05 PM",
          body:"do you mean this person https://www.themoviedb.org/person/4842540-ahmed-abdel-majeed\n\nEDIT: This is a user contributed database, if there is missing information then feel free to add it yourself."}]
      },
      { id:2, av:"N", col:"#c0392b", author:"Noonat0o0", title:'The Movie In This Corner (and Other Corners) of the World was removed from TMDB', time:"about 20 hours ago", status:"closed", replies:4,
        body:'I noticed that the film "In This Corner of the World" seems to have been removed from TMDB. Can someone explain why this happened?',
        postedBy:"Noonat0o0", postedTime:"May 31, 2026 at 8:12 AM",
        users:[{av:"N",col:"#c0392b"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"May 31, 2026 at 9:30 AM",body:"The movie was merged with a duplicate entry. They should all be accessible at the updated link."}]
      },
      { id:3, av:"T", col:"#7f8c8d", author:"tulgaralan", title:"Eligibility Question", time:"2 days ago", status:"open", replies:67,
        body:"I have a question about eligibility for adding content to TMDB. What are the requirements for a film to be listed in the database?",
        postedBy:"tulgaralan", postedTime:"May 29, 2026 at 2:14 PM",
        users:[{av:"T",col:"#7f8c8d"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 29, 2026 at 3:00 PM",body:"Generally, a film needs to have been publicly released or have a confirmed release date. Self-produced home videos are not eligible."}]
      },
      { id:4, av:"J", col:"#e84393", author:"Jpenunuri1", title:"I just want to delete my poster, dude", time:"2 days ago", status:"closed", replies:2,
        body:"Hi, I accidentally uploaded the wrong poster image. How can I delete it? I've been trying for hours.",
        postedBy:"Jpenunuri1", postedTime:"May 29, 2026 at 11:00 AM",
        users:[{av:"J",col:"#e84393"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 29, 2026 at 11:45 AM",body:"You can remove images by going to the image section of the movie/show and clicking the delete option."}]
      },
      { id:5, av:"F", col:"#27ae60", author:"Banana", title:"How to register a person profile picture", time:"2 days ago", status:"open", replies:5,
        body:"Hello, I would like to know how to add a profile picture for a person entry in TMDB.",
        postedBy:"Banana", postedTime:"May 29, 2026 at 9:30 AM",
        users:[{av:"F",col:"#27ae60"},{av:"S",col:"#7f8c8d"}],
        replies_data:[{by:"Samara",col:"#7f8c8d",badge:"mod",time:"May 29, 2026 at 10:15 AM",body:"You need to reach at least level 3 contributor to upload profile pictures."}]
      },
      { id:6, av:"M", col:"#e67e22", author:"ticao2 вя pt-BR", title:"How to add a photo to a person's profile?", time:"3 days ago", status:"open", replies:3,
        body:"I want to add a photo to an actor's profile page, but I can't find where to do it. Is this feature restricted?",
        postedBy:"ticao2 вя pt-BR", postedTime:"May 28, 2026 at 3:00 PM",
        users:[{av:"M",col:"#e67e22"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 28, 2026 at 4:00 PM",body:'Navigate to the person page, click "Edit" then go to the "Images" tab and upload from there.'}]
      },
      { id:7, av:"S", col:"#7f8c8d", author:"Samara", title:"Information about my first film are locked", time:"3 days ago", status:"closed", replies:1,
        body:"I submitted my first short film to TMDB two weeks ago and it was approved. But now all the edit fields are locked. Why?",
        postedBy:"Samara", postedTime:"May 28, 2026 at 1:00 PM",
        users:[{av:"S",col:"#7f8c8d"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"May 28, 2026 at 2:30 PM",body:"New entries go through a lock period. After 3 days without issues they unlock for further editing."}]
      },
      { id:8, av:"O", col:"#7f8c8d", author:"owenbaoo", title:"猫和老鼠的剧集怎么被删除了，刚维护好不久", time:"4 days ago", status:"open", replies:10,
        body:"Tom and Jerry episodes were recently edited and maintained, but now they seem to be deleted. What happened?",
        postedBy:"owenbaoo", postedTime:"May 27, 2026 at 10:00 AM",
        users:[{av:"O",col:"#7f8c8d"},{av:"M",col:"#e67e22"}],
        replies_data:[{by:"Moderator",col:"#7f8c8d",badge:"mod",time:"May 27, 2026 at 11:30 AM",body:"Some episodes were merged into the correct season structure. They should all still be accessible under the main series page."}]
      },
      { id:9, av:"C", col:"#8e44ad", author:"Samara", title:"Person Removed", time:"4 days ago", status:"closed", replies:3,
        body:"A person entry I was tracking has been removed. Can someone explain the removal policy for person pages?",
        postedBy:"Samara", postedTime:"May 27, 2026 at 8:00 AM",
        users:[{av:"C",col:"#8e44ad"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"May 27, 2026 at 9:00 AM",body:"Person pages are removed if they have no credits or if the person does not meet the minimum notability requirements."}]
      },
      { id:10, av:"C", col:"#01b4e4", author:"capable-low3050", title:"Film Classification Inquiry", time:"4 days ago", status:"open", replies:0,
        body:"I have a question about how films are classified on TMDB. What criteria is used for genre tagging?",
        postedBy:"capable-low3050", postedTime:"May 27, 2026 at 7:00 AM",
        users:[{av:"C",col:"#01b4e4"}],
        replies_data:[]
      },
      { id:11, av:"T", col:"#e67e22", author:"ticao2 вя pt-BR", title:"How to add missing crew credits when a page doesn't include a link to do so?", time:"5 days ago", status:"open", replies:5,
        body:"I'm trying to add crew credits to a movie page but there's no obvious link or button to do so. How can I add them?",
        postedBy:"ticao2 вя pt-BR", postedTime:"May 26, 2026 at 5:00 PM",
        users:[{av:"T",col:"#e67e22"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 26, 2026 at 6:00 PM",body:"Go to the movie page and click Edit, then navigate to the Crew tab to add missing credits."}]
      },
      { id:12, av:"Q", col:"#7f8c8d", author:"quarry", title:"posters", time:"5 days ago", status:"open", replies:0,
        body:"How do I upload alternate posters for a film? I have higher quality versions available.",
        postedBy:"quarry", postedTime:"May 26, 2026 at 3:00 PM",
        users:[{av:"Q",col:"#7f8c8d"}],
        replies_data:[]
      },
      { id:13, av:"S", col:"#e84393", author:"softpillow", title:"No character names", time:"5 days ago", status:"open", replies:5,
        body:"Many cast entries on TMDB are missing character names. Is there a bulk way to add these or does each one need to be done individually?",
        postedBy:"softpillow", postedTime:"May 26, 2026 at 1:00 PM",
        users:[{av:"S",col:"#e84393"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"May 26, 2026 at 2:00 PM",body:"Each character name needs to be added individually through the movie's cast editing interface."}]
      },
      { id:14, av:"M", col:"#e67e22", author:"softpillow", title:"YouTube Channels to be made Official", time:"6 days ago", status:"open", replies:1007,
        body:"There are many YouTube channels that should be marked as official sources for networks and studios on TMDB. What is the process for getting these verified?",
        postedBy:"softpillow", postedTime:"May 25, 2026 at 11:00 AM",
        users:[{av:"M",col:"#e67e22"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 25, 2026 at 12:00 PM",body:"Please submit requests through the official content management system with verification links."}]
      },
      { id:15, av:"L", col:"#01b4e4", author:"superboy97", title:"Retrieving exhibition formats and technologies (IMAX, Dolby Atmos, 4DX)?", time:"7 days ago", status:"closed", replies:1,
        body:"Is there a way to retrieve information about exhibition formats (IMAX, Dolby Atmos, 4DX) through the TMDB API?",
        postedBy:"superboy97", postedTime:"May 24, 2026 at 9:00 AM",
        users:[{av:"L",col:"#01b4e4"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"May 24, 2026 at 10:00 AM",body:"TMDB does not currently store exhibition format data. This is outside the scope of our database."}]
      }
    ]
  },
  website: {
    label: "Website Support",
    totalPages: 215,
    threads: [
      { id:101, av:"B", col:"#e84393", author:"B24", title:"Problemas en la traduccion", time:"about 16 hours ago", status:"open", replies:1,
        body:"Hello,\n\nI am trying to create a new movie entry, but I am encountering a language validation issue that seems inconsistent.\n\nWhen I enter the overview in English, the system says it detected English but expected Spanish.\n\nWhen I enter the overview in Spanish, the system says it detected Spanish but expected English.\n\nThe language detection appears to be working correctly, but the expected language changes depending on the version I submit, which makes it impossible to complete the form.\n\nThe movie title is \"Hombre de la Atlántida\".\n\nCould you please help me understand what is causing this validation loop?\n\nThank you.",
        postedBy:"B24", postedTime:"May 31, 2026 at 9:38 PM",
        users:[{av:"B",col:"#e84393"},{av:"s",col:"#e84393"},{av:"S",col:"#7f8c8d"}],
        replies_data:[{by:"superboy97",col:"#01b4e4",badge:"mod",time:"May 31, 2026 at 11:41 PM",body:"You need to set your profile language to the language in which you want to enter the overview."}]
      },
      { id:102, av:"K", col:"#27ae60", author:"kdrfan99", title:"Profile page not loading correctly", time:"1 day ago", status:"closed", replies:3,
        body:"My profile page keeps showing a blank section where my watchlist should be. I've tried clearing cache but it doesn't help.",
        postedBy:"kdrfan99", postedTime:"May 30, 2026 at 4:00 PM",
        users:[{av:"K",col:"#27ae60"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"May 30, 2026 at 5:00 PM",body:"This was a temporary server-side issue that has been resolved. Please try again and let us know if it persists."}]
      },
      { id:103, av:"R", col:"#e67e22", author:"RolandoM", title:"Cannot add movie to custom list", time:"2 days ago", status:"open", replies:2,
        body:"When I try to add a movie to my custom list, I get an error saying 'Operation failed'. This started happening after the recent update.",
        postedBy:"RolandoM", postedTime:"May 29, 2026 at 7:00 PM",
        users:[{av:"R",col:"#e67e22"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 29, 2026 at 8:00 PM",body:"Could you share the browser console errors? This will help identify the issue faster."}]
      },
      { id:104, av:"P", col:"#8e44ad", author:"PirateFlag", title:"Dark mode toggle missing after update", time:"3 days ago", status:"open", replies:0,
        body:"After the website update last week, the dark mode toggle in settings has disappeared. Is this a known issue?",
        postedBy:"PirateFlag", postedTime:"May 28, 2026 at 2:00 PM",
        users:[{av:"P",col:"#8e44ad"}],
        replies_data:[]
      },
      { id:105, av:"W", col:"#c0392b", author:"watcher2024", title:"Notification emails not arriving", time:"4 days ago", status:"closed", replies:5,
        body:"I've subscribed to notifications for several shows but I haven't received any emails in the past two weeks. My email is correct in the settings.",
        postedBy:"watcher2024", postedTime:"May 27, 2026 at 9:00 AM",
        users:[{av:"W",col:"#c0392b"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"May 27, 2026 at 10:30 AM",body:"We've identified an issue with our email delivery service. It's been resolved - notifications should resume within 24 hours."}]
      },
      { id:106, av:"Z", col:"#7f8c8d", author:"zephyr_films", title:"Image upload limit question", time:"5 days ago", status:"open", replies:4,
        body:"What is the daily image upload limit for regular contributors? I want to add a large batch of posters.",
        postedBy:"zephyr_films", postedTime:"May 26, 2026 at 3:00 PM",
        users:[{av:"Z",col:"#7f8c8d"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 26, 2026 at 4:00 PM",body:"The daily upload limit is 20 images for regular contributors and 50 for approved contributors."}]
      },
      { id:107, av:"H", col:"#01b4e4", author:"HannahB", title:"Two-factor authentication not working", time:"6 days ago", status:"closed", replies:3,
        body:"I enabled 2FA but now I can't log in. The codes from my authenticator app aren't being accepted.",
        postedBy:"HannahB", postedTime:"May 25, 2026 at 11:00 AM",
        users:[{av:"H",col:"#01b4e4"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"May 25, 2026 at 12:00 PM",body:"Please contact support@themoviedb.org directly with your account email so we can help you regain access securely."}]
      },
      { id:108, av:"G", col:"#27ae60", author:"GraceM", title:"Search results not showing recent additions", time:"7 days ago", status:"open", replies:6,
        body:"Movies I added last week don't appear in search results. Is there a delay for indexing new content?",
        postedBy:"GraceM", postedTime:"May 24, 2026 at 6:00 PM",
        users:[{av:"G",col:"#27ae60"},{av:"s",col:"#e84393"}],
        replies_data:[{by:"softpillow",col:"#e84393",badge:"",time:"May 24, 2026 at 7:00 PM",body:"Yes, new entries can take up to 24 hours to appear in search results due to indexing delays."}]
      }
    ]
  },
  api: {
    label: "API Support",
    totalPages: 142,
    threads: [
      { id:201, av:"A", col:"#8e44ad", author:"awedience", title:"Issue with TMDB API Endpoints", time:"about 4 hours ago", status:"open", replies:1,
        body:"Dear TMDB Team,\n\nI hope you are doing well.\n\nI am currently experiencing issues with several TMDB API endpoints. The following APIs are not working properly:\n\n- Latest Movie API\n- Movie Details API\n- TV Series Details API\n\nThe requests are either failing, returning incorrect responses, or not providing expected data.\n\nI have already checked:\n\n- API key validity\n- Request URLs and parameters\n- Authentication setup\n- Rate limits\n\nCould you please investigate this issue or let me know if there are any recent changes or outages affecting these endpoints?\n\nThank you for your support. I look forward to your response.\n\nBest regards,\n[Awedience]",
        postedBy:"awedience", postedTime:"May 20, 2026 at 4:13 PM",
        users:[{av:"A",col:"#8e44ad"},{av:"T",col:"#01b4e4"}],
        replies_data:[{by:"Travis Bell",col:"#01b4e4",badge:"staff",time:"May 20, 2026 at 5:57 PM",body:"Hi @awedience,\n\nI would imagine it's the issue being discussed in this post: https://www.themoviedb.org/talk/6a0cf9a5dd8f54b8836a3750"}]
      },
      { id:202, av:"D", col:"#e67e22", author:"devmaster99", title:"Rate limit confusion - 429 errors", time:"1 day ago", status:"open", replies:8,
        body:"I'm getting 429 errors even though I'm only making about 20 requests per second. Isn't the limit 50 requests per second?",
        postedBy:"devmaster99", postedTime:"May 30, 2026 at 10:00 AM",
        users:[{av:"D",col:"#e67e22"},{av:"T",col:"#01b4e4"}],
        replies_data:[{by:"Travis Bell",col:"#01b4e4",badge:"staff",time:"May 30, 2026 at 11:00 AM",body:"The rate limit is per account, not per IP. If you have multiple servers using the same API key, the limits add up."}]
      },
      { id:203, av:"X", col:"#27ae60", author:"xDevBuilder", title:"Missing 'original_title' in collection endpoint", time:"2 days ago", status:"open", replies:3,
        body:"The /collection/{id} endpoint doesn't return original_title for the parts. Is this intentional or a bug?",
        postedBy:"xDevBuilder", postedTime:"May 29, 2026 at 8:00 AM",
        users:[{av:"X",col:"#27ae60"},{av:"T",col:"#01b4e4"}],
        replies_data:[{by:"Travis Bell",col:"#01b4e4",badge:"staff",time:"May 29, 2026 at 9:00 AM",body:"That's expected behavior. For original titles you'll need to make individual movie requests."}]
      },
      { id:204, av:"V", col:"#c0392b", author:"VictoriaD", title:"Webhook notifications for content updates?", time:"3 days ago", status:"closed", replies:2,
        body:"Does TMDB offer webhooks or push notifications when specific titles are updated? I need to sync a local database.",
        postedBy:"VictoriaD", postedTime:"May 28, 2026 at 3:00 PM",
        users:[{av:"V",col:"#c0392b"},{av:"T",col:"#01b4e4"}],
        replies_data:[{by:"Travis Bell",col:"#01b4e4",badge:"staff",time:"May 28, 2026 at 4:00 PM",body:"We don't currently support webhooks. For syncing, you can use our daily export files or poll the changes endpoint."}]
      },
      { id:205, av:"L", col:"#7f8c8d", author:"lunarcode", title:"Authentication v4 vs v3 best practices", time:"5 days ago", status:"open", replies:12,
        body:"What's the recommended authentication method for a new project in 2026? Should I use v3 API key or v4 bearer token?",
        postedBy:"lunarcode", postedTime:"May 26, 2026 at 2:00 PM",
        users:[{av:"L",col:"#7f8c8d"},{av:"T",col:"#01b4e4"}],
        replies_data:[{by:"Travis Bell",col:"#01b4e4",badge:"staff",time:"May 26, 2026 at 3:00 PM",body:"We recommend v4 bearer tokens for new projects as they offer better security and more granular permissions."}]
      }
    ]
  },
  content: {
    label: "Content Issues",
    totalPages: 18639,
    threads: [
      { id:301, av:"h", col:"#7f8c8d", author:"h0000000000", title:"Reported Problem for 村松秀", time:"about 3 hours ago", status:"open", replies:0,
        body:"There is an issue with the person page for 村松秀 (Shu Muramatsu). The profile information appears to be incorrect or missing.",
        postedBy:"h0000000000", postedTime:"June 1, 2026 at 9:00 AM",
        linkedType:"person", linkedId:null, linkedTitle:"Shu Muramatsu", linkedPoster:null,
        users:[{av:"h",col:"#7f8c8d"}], replies_data:[]
      },
      { id:302, av:"h", col:"#7f8c8d", author:"h0000000000", title:"Reported Problem for 松浦大樹", time:"about 3 hours ago", status:"open", replies:0,
        body:"There is incorrect information on the person page for 松浦大樹. Please review and correct the credits.",
        postedBy:"h0000000000", postedTime:"June 1, 2026 at 9:05 AM",
        linkedType:"person", linkedId:null, linkedTitle:"松浦大樹", linkedPoster:null,
        users:[{av:"h",col:"#7f8c8d"}], replies_data:[]
      },
      { id:303, av:"h", col:"#7f8c8d", author:"h0000000000", title:"Reported Problem for 鈴木裕", time:"about 3 hours ago", status:"open", replies:0,
        body:"The page for 鈴木裕 has missing or incorrect information. Please investigate.",
        postedBy:"h0000000000", postedTime:"June 1, 2026 at 9:10 AM",
        linkedType:"person", linkedId:null, linkedTitle:"鈴木裕", linkedPoster:null,
        users:[{av:"h",col:"#7f8c8d"}], replies_data:[]
      },
      { id:304, av:"G", col:"#e67e22", author:"Gigabit", title:"Reported Problem for Ready or Not: Here I Come", time:"about 3 hours ago", status:"open", replies:2,
        body:"The movie page for 'Ready or Not: Here I Come' has incorrect release date information. The film was released in 2025, not 2024 as currently listed.",
        postedBy:"Gigabit", postedTime:"June 1, 2026 at 9:15 AM",
        linkedType:"movie", linkedId:985939, linkedTitle:"Ready or Not: Here I Come", linkedPoster:null,
        users:[{av:"G",col:"#e67e22"},{av:"A",col:"#032541"}],
        replies_data:[{by:"Admin",col:"#032541",badge:"staff",time:"June 1, 2026 at 10:00 AM",body:"Thank you for the report. We've reviewed and corrected the release date. The change should be visible shortly."}]
      },
      { id:305, av:"R", col:"#e67e22", author:"Roses", title:"Reported Problem for Nilungadan", time:"about 3 hours ago", status:"open", replies:0,
        body:"The entry for 'Nilungadan' appears to have duplicate information and incorrect cast credits.",
        postedBy:"Roses", postedTime:"June 1, 2026 at 9:20 AM",
        linkedType:"movie", linkedId:null, linkedTitle:"Nilungadan", linkedPoster:null,
        users:[{av:"R",col:"#e67e22"}], replies_data:[]
      },
      { id:306, av:"B", col:"#7f8c8d", author:"Brad Nakken", title:"Reported Problem for Celebrity Big Brother for Charity Live", time:"about 3 hours ago", status:"open", replies:0,
        body:"Missing episodes and incorrect season structure for Celebrity Big Brother for Charity Live.",
        postedBy:"Brad Nakken", postedTime:"June 1, 2026 at 9:25 AM",
        linkedType:"tv", linkedId:246402, linkedTitle:"Celebrity Big Brother for Charity Live", linkedPoster:null,
        users:[{av:"B",col:"#7f8c8d"}], replies_data:[]
      },
      { id:307, av:"g", col:"#27ae60", author:"gerardzlia", title:"Reported Problem for His First Visit to Warsaw", time:"about 4 hours ago", status:"open", replies:0,
        body:"The movie 'His First Visit to Warsaw' has incorrect director information listed.",
        postedBy:"gerardzlia", postedTime:"June 1, 2026 at 8:30 AM",
        linkedType:"movie", linkedId:null, linkedTitle:"His First Visit to Warsaw", linkedPoster:null,
        users:[{av:"g",col:"#27ae60"}], replies_data:[]
      },
      { id:308, av:"L", col:"#e84393", author:"lu..", title:"Reported Problem for Palace: Season 1 - Episode 40", time:"about 4 hours ago", status:"open", replies:0,
        body:"Episode 40 of Palace Season 1 has incorrect air date and missing overview.",
        postedBy:"lu..", postedTime:"June 1, 2026 at 8:35 AM",
        linkedType:"tv", linkedId:241997, linkedTitle:"Palace", linkedPoster:null,
        users:[{av:"L",col:"#e84393"}], replies_data:[]
      },
      { id:309, av:"L", col:"#e84393", author:"lu..", title:"Reported Problem for Palace: Season 1 - Episode 39", time:"about 4 hours ago", status:"open", replies:0,
        body:"Episode 39 of Palace Season 1 has missing information.",
        postedBy:"lu..", postedTime:"June 1, 2026 at 8:36 AM",
        linkedType:"tv", linkedId:241997, linkedTitle:"Palace", linkedPoster:null,
        users:[{av:"L",col:"#e84393"}], replies_data:[]
      },
      { id:310, av:"L", col:"#e84393", author:"lu..", title:"Reported Problem for Palace: Season 1 - Episode 38", time:"about 4 hours ago", status:"open", replies:0,
        body:"Episode 38 of Palace Season 1 has missing information.",
        postedBy:"lu..", postedTime:"June 1, 2026 at 8:37 AM",
        linkedType:"tv", linkedId:241997, linkedTitle:"Palace", linkedPoster:null,
        users:[{av:"L",col:"#e84393"}], replies_data:[]
      },
      { id:311, av:"L", col:"#e84393", author:"lu..", title:"Reported Problem for Palace: Season 1 - Episode 37", time:"about 4 hours ago", status:"open", replies:0,
        body:"Episode 37 of Palace Season 1 has missing information.",
        postedBy:"lu..", postedTime:"June 1, 2026 at 8:38 AM",
        linkedType:"tv", linkedId:241997, linkedTitle:"Palace", linkedPoster:null,
        users:[{av:"L",col:"#e84393"}], replies_data:[]
      },
      { id:312, av:"L", col:"#e84393", author:"lu..", title:"Reported Problem for Palace: Season 1 - Episode 36", time:"about 4 hours ago", status:"open", replies:0,
        body:"Episode 36 of Palace Season 1 has missing information.",
        postedBy:"lu..", postedTime:"June 1, 2026 at 8:39 AM",
        linkedType:"tv", linkedId:241997, linkedTitle:"Palace", linkedPoster:null,
        users:[{av:"L",col:"#e84393"}], replies_data:[]
      }
    ]
  }
};

// Poster cache for content issues
const posterCache = {};

// ── LOAD SECTION ──
async function loadSection(section) {
  curSection = section;
  curPage = 1;
  if (section === 'content') {
    await preloadContentPosters();
  }
  renderSection();
}

async function preloadContentPosters() {
  const threads = SECTIONS.content.threads;
  for (const t of threads) {
    if (t.linkedId && !posterCache[`${t.linkedType}_${t.linkedId}`]) {
      try {
        const url = t.linkedType === 'person'
          ? `${BASE}/person/${t.linkedId}?language=en-US`
          : `${BASE}/${t.linkedType}/${t.linkedId}?language=en-US`;
        const r = await fetch(url, { headers: H });
        const d = await r.json();
        posterCache[`${t.linkedType}_${t.linkedId}`] = d.poster_path || d.profile_path || null;
      } catch(e) { /* ignore */ }
    }
  }
}

function renderSection() {
  const sec = SECTIONS[curSection];
  const threads = sec.threads;
  const labels = { general:"General", website:"Website Support", api:"API Support", content:"Content Issues" };
  const label = labels[curSection];

  let rows = '';
  if (curSection === 'content') {
    rows = threads.map(t => contentRow(t)).join('');
  } else {
    rows = threads.map(t => threadRow(t)).join('');
  }

  document.getElementById('pageContent').innerHTML = `
    <p class="page-bc">Support → ${label}</p>
    <h1 class="page-title">The Movie Database Support</h1>
    <table class="forum-table">
      <tbody>${rows}</tbody>
    </table>
    ${pagination(curPage, sec.totalPages)}`;
}

function threadRow(t) {
  return `<tr onclick="openThread('${curSection}',${t.id})">
    <td class="td-avatar"><div class="row-avatar" style="background:${t.col}">${t.av}</div></td>
    <td class="td-body">
      <div class="row-title">${t.title}</div>
      <div class="row-meta"><a href="#">${t.author}</a> replied ${t.time}</div>
    </td>
    <td class="td-right">
      <span class="${t.status==='open'?'status-open':'status-closed'}">${t.status==='open'?'Open':'Closed'}</span>
      <span class="comments-count">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        ${t.replies}
      </span>
    </td>
  </tr>`;
}

function contentRow(t) {
  const poster = t.linkedId ? posterCache[`${t.linkedType}_${t.linkedId}`] : null;
  const thumbHtml = poster
    ? `<img class="ci-thumb" src="${IMG}w92${poster}" onerror="this.style.background='#eee';this.src=''" alt="">`
    : `<div style="width:28px;height:40px;background:#eee;border-radius:3px;display:inline-block;vertical-align:middle"></div>`;

  return `<tr onclick="openThread('content',${t.id})">
    <td class="td-avatar"><div class="row-avatar" style="background:${t.col}">${t.av}</div></td>
    <td class="td-body">
      <div class="row-title">${t.title}</div>
      <div class="row-meta">${t.author} posted ${t.time}</div>
      ${t.linkedTitle ? `<div class="ci-ref">
        <svg class="ci-ref-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        ${thumbHtml}
        <span class="ci-ref-title">${t.linkedTitle}</span>
      </div>` : ''}
    </td>
    <td class="td-right">
      <span class="status-open">Open</span>
      <span class="comments-count">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        ${t.replies}
      </span>
    </td>
  </tr>`;
}

// ── OPEN THREAD ──
function openThread(section, id) {
  const t = SECTIONS[section].threads.find(x => x.id === id);
  if (!t) return;

  const labels = { general:"General", website:"Website Support", api:"API Support", content:"Content Issues" };
  document.getElementById('mBc').textContent = `Support → ${labels[section]}`;
  document.getElementById('mTitle').textContent = t.title;
  document.getElementById('mDate').textContent = `posted by ${t.postedBy || t.author} on ${t.postedTime}`;

  // Sidebar users
  const sb = document.getElementById('mSidebar');
  if (t.users && t.users.length > 0) {
    sb.className = 'modal-sidebar has-users';
    sb.innerHTML = `<span class="modal-sidebar-label">Users in this discussion</span>` +
      t.users.map(u => `<div class="modal-user-av" style="background:${u.col}" title="${u.av}">${u.av}</div>`).join('');
  } else {
    sb.className = 'modal-sidebar';
    sb.innerHTML = '';
  }

  const fmt = s => s
    .replace(/(https?:\/\/\S+)/g, u => `<a href="${u}" target="_blank">${u}</a>`)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n/g, '<br>');

  const badgeHtml = b => b === 'mod' ? '<span class="post-badge badge-mod">MOD</span>'
    : b === 'staff' ? '<span class="post-badge badge-staff">STAFF</span>' : '';

  let html = `
    <div class="post">
      <div class="post-hd">
        <div class="post-av" style="background:${t.col}">${t.av}</div>
        <div>
          <div class="post-name">${t.postedBy || t.author}</div>
          <div class="post-time">${t.postedTime}</div>
        </div>
      </div>
      <div class="post-body">${fmt(t.body)}</div>
    </div>`;

  if (t.replies_data && t.replies_data.length > 0) {
    html += `<div class="replies-label">${t.replies_data.length} repl${t.replies_data.length===1?'y':'ies'} • <a href="#">Jump to last post</a></div>`;
    t.replies_data.forEach(r => {
      html += `<div class="reply">
        <div class="post-hd">
          <div class="post-av" style="background:${r.col}">${r.by[0]}</div>
          <div>
            <div class="post-name">Reply by ${r.by}${badgeHtml(r.badge)}</div>
            <div class="post-time">on ${r.time}</div>
          </div>
        </div>
        <div class="reply-quote">@${t.postedBy || t.author} said:</div>
        <div class="post-body">${fmt(r.body)}</div>
      </div>`;
    });
  }

  document.getElementById('mBody').innerHTML = html;
  document.getElementById('overlay').classList.add('open');
}

// ── PAGINATION ──
function pagination(p, total) {
  let html = '<div class="pagination">';
  html += `<button class="page-btn" onclick="goPage(${p-1})" ${p<=1?'disabled':''}>‹</button>`;
  html += `<button class="page-btn ${p===1?'active':''}" onclick="goPage(1)">1</button>`;
  if (p > 3) html += '<span class="page-dots">…</span>';
  for (let i = Math.max(2, p-1); i <= Math.min(total-1, p+1); i++) {
    html += `<button class="page-btn ${p===i?'active':''}" onclick="goPage(${i})">${i}</button>`;
  }
  if (p < total-2) html += '<span class="page-dots">…</span>';
  if (total > 1) html += `<button class="page-btn ${p===total?'active':''}" onclick="goPage(${total})">${total}</button>`;
  html += `<button class="page-btn" onclick="goPage(${p+1})" ${p>=total?'disabled':''}>›</button>`;
  html += '</div>';
  return html;
}

function goPage(p) {
  const total = SECTIONS[curSection].totalPages;
  curPage = Math.max(1, Math.min(total, p));
  renderSection();
  window.scrollTo(0,0);
}

// ── SEARCH ──
function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) return;
  fetchSearch(q, 'multi');
}

async function fetchSearch(q, type, year, minRating, lang) {
  setNav('');
  let url = `${BASE}/search/${type}?query=${encodeURIComponent(q)}&language=en-US&include_adult=false`;
  // year only works for movie and tv, not person or multi
  if (year && (type === 'movie' || type === 'tv')) url += `&year=${year}`;
  // language filter: for movie/tv use with_original_language, for multi use language
  if (lang && type !== 'person' && type !== 'multi') url += `&with_original_language=${lang}`;
  document.getElementById('pageContent').innerHTML = `
    <p class="page-bc">Search → <strong>${q}</strong></p>
    <h1 class="page-title">Search Results</h1>
    <div class="loading"><div class="spinner"></div></div>`;
  try {
    const r = await fetch(url, { headers: H });
    const d = await r.json();
    let results = (d.results || []);
    if (minRating) results = results.filter(m => (m.vote_average||0) >= parseFloat(minRating));
    if (!results.length) {
      document.getElementById('pageContent').innerHTML = `
        <p class="page-bc">Search → <strong>${q}</strong></p>
        <h1 class="page-title">Search Results</h1>
        <div class="loading">No results found.</div>`;
      return;
    }
    document.getElementById('pageContent').innerHTML = `
      <p class="page-bc">Search → <strong>${q}</strong></p>
      <h1 class="page-title">Search Results</h1>
      <table class="forum-table"><tbody>${results.slice(0,15).map(m => {
        const mt = m.media_type || type;
        const title = m.title || m.name || '';
        const year2 = (m.release_date||m.first_air_date||'').substring(0,4);
        const av = title[0] || '?';
        return `<tr onclick="${mt==='person'?`openPerson(${m.id})`:`openMovie(${m.id},'${mt}')`}">
          <td class="td-avatar"><div class="row-avatar" style="background:#01b4e4">${av}</div></td>
          <td class="td-body">
            <div class="row-title">${title}</div>
            <div class="row-meta">${year2} · ${mt==='person'?'Person':mt==='tv'?'TV Show':'Movie'}</div>
          </td>
          <td class="td-right"><span style="font-size:13px;color:#f5a623;font-weight:700">${m.vote_average?'★ '+m.vote_average.toFixed(1):'—'}</span></td>
        </tr>`;
      }).join('')}</tbody></table>`;
  } catch(e) {
    document.getElementById('pageContent').innerHTML += '<div class="loading" style="color:red">Failed to load.</div>';
  }
}

// ── ADV SEARCH ──
function openAdv() { document.getElementById('advOverlay').classList.add('open') }
function closeAdv() { document.getElementById('advOverlay').classList.remove('open') }
function runAdv() {
  const q = document.getElementById('advQ').value.trim();
  if (!q) return;
  const type = document.getElementById('advType').value;
  const year = document.getElementById('advYear').value;
  const minRating = document.getElementById('advMin').value;
  const lang = document.getElementById('advLang').value;
  closeAdv();
  fetchSearch(q, type, year, minRating, lang);
}

// ── MOVIE MODAL ──
async function openMovie(id, type='movie') {
  document.getElementById('mTitle').textContent = 'Loading…';
  document.getElementById('mDate').textContent = '';
  document.getElementById('mSidebar').innerHTML = '';
  document.getElementById('mSidebar').className = 'modal-sidebar';
  document.getElementById('mBody').innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  document.getElementById('overlay').classList.add('open');
  try {
    const [dr, cr] = await Promise.all([
      fetch(`${BASE}/${type}/${id}?language=en-US`, { headers: H }),
      fetch(`${BASE}/${type}/${id}/credits`, { headers: H })
    ]);
    const det = await dr.json(), cred = await cr.json();
    const title = det.title || det.name;
    document.getElementById('mBc').textContent = type === 'tv' ? 'TV Show' : 'Movie';
    document.getElementById('mTitle').textContent = title;
    document.getElementById('mDate').textContent = det.release_date || det.first_air_date || '';
    const cast = (cred.cast || []).slice(0,10);
    document.getElementById('mBody').innerHTML = `
      <div class="det-hd">
        <img class="det-poster" src="${det.poster_path ? IMG+'w154'+det.poster_path : ''}" onerror="this.style.background='#eee'" alt="">
        <div class="det-info">
          <h2>${title}</h2>
          <div class="det-rating">★ ${(det.vote_average||0).toFixed(1)} <span style="font-weight:400;font-size:12px;color:#aaa">/ 10 (${(det.vote_count||0).toLocaleString()} votes)</span></div>
          <div class="det-genres">${(det.genres||[]).map(g=>`<span class="det-genre">${g.name}</span>`).join('')}</div>
          <div class="det-overview">${det.overview||'No overview available.'}</div>
          ${det.runtime ? `<div class="det-meta" style="margin-top:8px">Runtime: ${det.runtime} min</div>` : ''}
        </div>
      </div>
      ${cast.length ? `<div class="replies-label" style="margin-top:4px">Cast</div>
      <div class="cast-row">${cast.map(c=>`
        <div class="cast-item" onclick="openPerson(${c.id})">
          <img src="${c.profile_path ? IMG+'w92'+c.profile_path : ''}" onerror="this.style.background='#eee'" alt="">
          <div class="cn">${c.name}</div>
          <div class="cc">${c.character||''}</div>
        </div>`).join('')}</div>` : ''}`;
  } catch(e) { document.getElementById('mBody').innerHTML = '<div style="color:red;padding:20px">Failed to load.</div>'; }
}

// ── PERSON MODAL ──
async function openPerson(id) {
  document.getElementById('mTitle').textContent = 'Loading…';
  document.getElementById('mDate').textContent = '';
  document.getElementById('mSidebar').innerHTML = '';
  document.getElementById('mSidebar').className = 'modal-sidebar';
  document.getElementById('mBody').innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  document.getElementById('overlay').classList.add('open');
  try {
    const [pr, cr] = await Promise.all([
      fetch(`${BASE}/person/${id}?language=en-US`, { headers: H }),
      fetch(`${BASE}/person/${id}/movie_credits`, { headers: H })
    ]);
    const p = await pr.json(), c = await cr.json();
    document.getElementById('mBc').textContent = 'Person';
    document.getElementById('mTitle').textContent = p.name;
    document.getElementById('mDate').textContent = p.birthday ? `Born: ${p.birthday}${p.place_of_birth?' · '+p.place_of_birth:''}` : '';
    const movies = (c.cast||[]).sort((a,b)=>(b.vote_count||0)-(a.vote_count||0)).slice(0,6);
    document.getElementById('mBody').innerHTML = `
      <div class="det-hd">
        <img class="det-poster" src="${p.profile_path ? IMG+'w154'+p.profile_path : ''}" onerror="this.style.background='#eee'" alt="">
        <div class="det-info">
          <h2>${p.name}</h2>
          ${p.birthday ? `<div class="det-meta">Born: ${p.birthday}</div>` : ''}
          <div class="det-overview" style="margin-top:8px">${p.biography ? p.biography.substring(0,300)+'…' : 'No biography available.'}</div>
          <a href="https://www.themoviedb.org/person/${p.id}" target="_blank" style="display:inline-block;margin-top:10px;font-size:13px;color:#01b4e4">View on TMDB →</a>
        </div>
      </div>
      ${movies.length ? `<div class="replies-label" style="margin-top:4px">Known for</div>
      <table class="forum-table">${movies.map(m=>`
        <tr onclick="openMovie(${m.id})">
          <td class="td-avatar"><div class="row-avatar" style="background:#01b4e4">${(m.title||'?')[0]}</div></td>
          <td class="td-body">
            <div class="row-title">${m.title}</div>
            <div class="row-meta">${(m.release_date||'').substring(0,4)} · ${m.character||''}</div>
          </td>
          <td class="td-right"><span style="font-size:13px;color:#f5a623;font-weight:700">★ ${(m.vote_average||0).toFixed(1)}</span></td>
        </tr>`).join('')}</table>` : ''}`;
  } catch(e) { document.getElementById('mBody').innerHTML = '<div style="color:red;padding:20px">Failed to load.</div>'; }
}

// ── HELPERS ──
function closeOverlay() { document.getElementById('overlay').classList.remove('open') }
function openKbd() { document.getElementById('kbdOverlay').classList.add('open') }
function closeKbd() { document.getElementById('kbdOverlay').classList.remove('open') }

function setNav(id) {
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  const navMap = { general:'nav-general', website:'nav-website', api:'nav-api', content:'nav-content' };
  const navId = navMap[id];
  if (navId) { const el = document.getElementById(navId); if (el) el.classList.add('active'); }
}

document.addEventListener('keydown', e => {
  if (!document.getElementById('kbdEnabled').checked) return;
  if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if (e.key === 's') { document.getElementById('searchInput').focus(); e.preventDefault(); }
  if (e.key === '?') openKbd();
  if (e.key === 'Escape') { closeOverlay(); closeKbd(); closeAdv(); }
  if (e.key === 'ArrowRight') { const t = SECTIONS[curSection].totalPages; if (curPage < t) goPage(curPage+1); }
  if (e.key === 'ArrowLeft') { if (curPage > 1) goPage(curPage-1); }
});

loadSection('general');
