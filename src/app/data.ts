import {Checkbox, Email, MailFolder, MailFolderType, NavGroup, Summary, UserInfo} from './interfaces';
/**
 * Created by anate on 13/08/2017.
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Navigation',
    navItems: [
      {
        label: 'Dashboard',
        link: '#',
        icon: 'dashboard-icon',
        unhandledItemsCount: 0,
      },
      {
        label: 'Statistics',
        link: '#',
        icon: 'statistics-icon',
        unhandledItemsCount: 0,
      },
      {
        label: 'Analytics',
        link: '#',
        icon: 'analytics-icon',
        unhandledItemsCount: 0,
      },
      {
        label: 'Messages',
        link: '#',
        icon: 'envelope-icon',
        unhandledItemsCount: 35,
      },
      {
        label: 'Tasks',
        link: '#',
        icon: 'tasks-icon',
        unhandledItemsCount: 0,
      },
      {
        label: 'Events',
        link: '#',
        icon: 'calendar-icon',
        unhandledItemsCount: 0,
      },
      {
        label: 'Accounts',
        link: '#',
        icon: 'accounts-icon',
        unhandledItemsCount: 0
      }
    ]
  },
  {
    label: 'Components',
    navItems: [
      {
        label: 'UI Kits',
        link: '#',
        icon: 'kits-icon'
      },
      {
        label: 'Forms',
        link: '#',
        icon: 'forms-icon'
      },
      {
        label: 'Tables',
        link: '#',
        icon: 'tables-icon'
      },
      {
        label: 'Charts',
        link: '#',
        icon: 'charts-icon'
      },
      {
        label: 'Maps',
        link: '#',
        icon: 'maps-icon'
      }
    ]
  }
];

export const CURR_USER: UserInfo = {
  image: '/assets/img/luke.png',
  position: 'Web Designer',
  fullName: 'Luke Skywalker',
  notificationCount: 5,
  friendRequestsCount: 2
};


export const INBOX_USER: UserInfo = {
  image: '/assets/img/inbox-user.png',
  fullName: 'Jason Danim',
  email: 'jasondanim@indus.com'
};

export const SUMMARIES: Summary[] = [
  {
    icon: 'users-icon',
    type: 'Members',
    amount: '200',
    color: '#ef4e85'
  },
  {
    icon: 'graph-icon',
    type: 'Sales',
    amount: '5000',
    color: '#35adf9'
  },
  {
    icon: 'profit-icon',
    type: 'Profits',
    amount: '$1000',
    color: '#9bcf38'
  }
];

// const EMAILS: Email[] = [
//   {
//     from: 'Aarman Malik',
//     favorite: true,
//     subject: 'Send me reports?',
//     time: new Date(new Date().setHours(11, 48)),
//     read: true
//   },
//   {
//     from: 'Info Tech',
//     favorite: false,
//     subject: 'Please send us remaining info',
//     time: new Date('05/19'),
//     read: false
//   },
//   {
//     from: 'Jeni Astor',
//     favorite: false,
//     subject: 'Lorem ipsum dolor sit amet',
//     time: new Date('05/17'),
//     read: true
//   },
//   {
//     from: 'Facebook',
//     favorite: false,
//     subject: 'Dolor sit amet, consectetuer adipiscing',
//     time: new Date('05/16'),
//     read: true
//   },
//   {
//     from: 'Behance',
//     favorite: true,
//     subject: 'Donald Markus and his story',
//     time: new Date('04/09'),
//     read: true
//   },
//   {
//     from: 'Astro Box',
//     favorite: false,
//     subject: 'Your report is ready',
//     time: new Date('04/28'),
//     read: true
//   },
//   {
//     from: 'Techno Lab',
//     favorite: false,
//     subject: 'Donec at magna orci',
//     time: new Date('04/27'),
//     read: true
//   },
//   {
//     from: 'Twitter',
//     favorite: false,
//     subject: 'Proin elementrum nulla at eleifend pellentesque',
//     time: new Date('03/22'),
//     read: true
//   },
//   {
//     from: 'Shawn Vayn',
//     favorite: true,
//     subject: 'Vivamus lacinia pellentesque dui eget sagottis',
//     time: new Date('03/19'),
//     read: true
//   }
// ];

export const EMAILS: Email[] = JSON.parse(`[{"from":"Helen Dexter","read":false,"favorite":false,"subject":"Mirtazapine","time":"2017-05-29T03:03:42Z"},
{"from":"Gertrud Lopez","read":true,"favorite":false,"subject":"cetirizine hydrochloride","time":"2017-06-21T04:40:22Z"},
{"from":"Carley Betser","read":true,"favorite":true,"subject":"Homosalate, Octisalate, Avobenzene, Octocrylene","time":"2017-07-11T06:54:22Z"},
{"from":"Gabbey Hillyatt","read":true,"favorite":true,"subject":"TITANIUM DIOXIDE","time":"2017-03-03T18:31:19Z"},
{"from":"Ursala Bann","read":false,"favorite":false,"subject":"Histaminum Hydrochloricum","time":"2017-01-20T09:26:37Z"},
{"from":"Shelbi Billam","read":true,"favorite":false,"subject":"Phenytoin Sodium","time":"2016-09-16T11:04:42Z"},
{"from":"Eduino Deely","read":false,"favorite":false,"subject":"OXYGEN","time":"2016-11-13T18:08:00Z"},
{"from":"Danielle Heibel","read":false,"favorite":false,"subject":"Doxycycline Hyclate","time":"2017-04-06T15:17:09Z"},
{"from":"Shay Appleyard","read":true,"favorite":true,"subject":"AVOBENZONE, OCTOCRYLENE, OXYBENZONE","time":"2016-10-21T08:03:20Z"},
{"from":"Yetty Gimblett","read":true,"favorite":true,"subject":"Witch Hazel","time":"2017-07-08T02:03:58Z"},
{"from":"Hew Crossby","read":true,"favorite":false,"subject":"VENLAFAXINE HYDROCHLORIDE","time":"2016-12-06T02:15:02Z"},
{"from":"Malena Gedling","read":true,"favorite":true,"subject":"vancomycin hydrochloride","time":"2017-06-27T18:32:05Z"},
{"from":"Valina Ryal","read":false,"favorite":false,"subject":"One Seed Juniper","time":"2017-02-25T10:33:15Z"},
{"from":"Odelia Bapty","read":true,"favorite":true,"subject":"Naproxen","time":"2017-08-01T07:32:38Z"},
{"from":"Sherwood Sherrard","read":true,"favorite":false,"subject":"imipramine pamoate","time":"2017-02-24T16:02:43Z"},
{"from":"Aurea Dalrymple","read":true,"favorite":true,"subject":"Titanium Dioxide, Zinc Oxide","time":"2017-02-25T03:33:42Z"},
{"from":"Marion Heinke","read":true,"favorite":false,"subject":"Fentanyl Citrate","time":"2017-07-17T10:18:17Z"},
{"from":"Valida Tegeller","read":true,"favorite":false,"subject":"Zinc Gluconate","time":"2016-12-28T02:10:06Z"},
{"from":"Boigie Tuminelli","read":true,"favorite":false,"subject":"Triclosan","time":"2017-07-23T02:01:27Z"},
{"from":"Alexa Mattheeuw","read":true,"favorite":false,"subject":"docusate sodium, sennosides","time":"2017-02-18T10:05:48Z"},
{"from":"Lalo Lumbers","read":false,"favorite":false,"subject":"Zafirlukast","time":"2016-10-02T02:48:45Z"},
{"from":"Dougie Brauner","read":false,"favorite":true,"subject":"IRBESARTAN","time":"2017-07-24T08:05:02Z"},
{"from":"Biron De Gregorio","read":false,"favorite":true,"subject":"laronidase","time":"2017-05-24T12:05:36Z"},
{"from":"Alyssa Gaffey","read":false,"favorite":true,"subject":"desloratadine and pseudoephedrine sulfate","time":"2017-06-21T20:45:06Z"},
{"from":"Sonny Staples","read":false,"favorite":false,"subject":"SODIUM CHLORIDE, SODIUM GLUCONATE, SODIUM ACETATE, POTASSIUM CHLORIDE, AND MAGNESIUM CHLORIDE","time":"2016-12-11T01:17:44Z"},
{"from":"Gian Strathearn","read":false,"favorite":false,"subject":"Triclosan","time":"2016-12-10T06:17:53Z"},
{"from":"Jessalin Arnell","read":false,"favorite":false,"subject":"Carbidopa and levodopa","time":"2017-03-11T23:37:28Z"},
{"from":"Hanan Partridge","read":true,"favorite":false,"subject":"Isosorbide mononitrate","time":"2017-03-29T08:48:29Z"},
{"from":"Darrin Timpany","read":true,"favorite":true,"subject":"DIMETHICONE","time":"2017-02-09T19:34:08Z"},
{"from":"Giavani Izon","read":true,"favorite":false,"subject":"Standardized Bermuda Grass Pollen","time":"2016-10-19T11:22:36Z"},
{"from":"Kennan Croney","read":false,"favorite":true,"subject":"Corn and Callus Liquid Remover","time":"2017-07-06T12:05:54Z"},
{"from":"Beniamino Paolazzi","read":true,"favorite":false,"subject":"GUAIFENESIN","time":"2016-10-16T16:02:33Z"},
{"from":"Jose Martinet","read":true,"favorite":true,"subject":"Lisinopril","time":"2017-01-18T12:04:39Z"},
{"from":"Gena Wrenn","read":false,"favorite":false,"subject":"Ammonium Carb 30c, Borax 30c, Calcarea Phosphorica 30c, Chamomilla 30c, Cimicifuga 30c, Gelsemium 30c, Helonius 30c, Kali Carb 30c, Nux Vomica 30c Pulsatilla 30c, Senecio 30c, Xanthum 30c","time":"2017-03-15T17:31:48Z"},
{"from":"Amerigo Millwater","read":true,"favorite":false,"subject":"Witch hazel","time":"2017-05-01T09:05:06Z"},
{"from":"Mireielle Goodrum","read":true,"favorite":true,"subject":"ACETAMINOPHEN","time":"2017-02-02T15:08:01Z"},
{"from":"Melisenda Sangar","read":false,"favorite":true,"subject":"BENZALKONIUM CHLORIDE","time":"2016-12-26T19:49:07Z"},
{"from":"Des D'Ruel","read":false,"favorite":true,"subject":"ZINC OXIDE","time":"2016-08-31T02:14:55Z"},
{"from":"Melonie Emney","read":true,"favorite":true,"subject":"spironolactone","time":"2017-08-10T06:53:07Z"},
{"from":"Reggy Scraney","read":true,"favorite":false,"subject":"Levobunolol Hydrochloride","time":"2017-03-14T21:11:46Z"},
{"from":"Saunders MacNelly","read":false,"favorite":true,"subject":"loxapine","time":"2017-02-03T13:54:16Z"},
{"from":"Cthrine Flowith","read":false,"favorite":true,"subject":"Ibuprofen","time":"2017-04-16T16:35:54Z"},
{"from":"Danna Bubbings","read":true,"favorite":false,"subject":"AMANITA MUSCARIA WHOLE","time":"2016-08-31T02:41:12Z"},
{"from":"Susann Leborgne","read":false,"favorite":false,"subject":"Methyldopate Hydrochloride","time":"2016-08-26T01:22:44Z"},
{"from":"Michaelina Sauter","read":true,"favorite":true,"subject":"Ketoconazole","time":"2016-11-03T05:39:27Z"},
{"from":"Velvet Erni","read":false,"favorite":false,"subject":"Chondrus crispus, Fucus vesiculosus, Thyroidinum (Suis), Cadmium iodatum, Cadmium sulphuratum, Iodium, Uranium nitricum, Radium bromatium,","time":"2017-08-15T03:17:31Z"},
{"from":"Manuel Lippini","read":true,"favorite":false,"subject":"Lisinopril","time":"2017-06-10T09:20:35Z"},
{"from":"Krisha Assiter","read":false,"favorite":true,"subject":"PHYTOLACCA AMERICANA ROOT","time":"2017-04-12T20:12:18Z"},
{"from":"Brina Ryam","read":true,"favorite":false,"subject":"Lycopus virginicus, Valeriana officinalis, Aurum metallicum, Cactus grandiflorus, Cuprum aceticum,","time":"2017-04-08T05:41:30Z"},
{"from":"Catlaina Jecock","read":false,"favorite":false,"subject":"concord grape","time":"2017-02-19T14:15:32Z"},
{"from":"Anneliese McBay","read":true,"favorite":false,"subject":"Diphenhydramine HCl","time":"2016-10-02T10:11:06Z"},
{"from":"Chastity Nicholson","read":true,"favorite":false,"subject":"Lamotrigine","time":"2017-07-31T07:41:40Z"},
{"from":"Isaak Onele","read":true,"favorite":true,"subject":"Tinidazole","time":"2017-05-16T20:09:56Z"},
{"from":"Barnard Cyples","read":true,"favorite":true,"subject":"OXYCODONE HYDROCHLORIDE","time":"2016-11-25T04:26:38Z"},
{"from":"Else Dibsdale","read":true,"favorite":true,"subject":"Morphine Sulfate","time":"2017-06-18T06:35:59Z"},
{"from":"Lavinia Rannells","read":true,"favorite":true,"subject":"Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate","time":"2017-05-27T11:48:36Z"},
{"from":"Mead Bonavia","read":false,"favorite":true,"subject":"diazepam","time":"2017-04-04T01:55:51Z"},
{"from":"Bruno Hawes","read":false,"favorite":true,"subject":"Metaxalone","time":"2017-05-31T03:59:55Z"},
{"from":"Gussi Racine","read":false,"favorite":false,"subject":"Helium","time":"2016-10-17T21:44:35Z"},
{"from":"Roslyn Maffia","read":false,"favorite":true,"subject":"ONDANSETRON HYDROCHLORIDE","time":"2017-08-03T16:53:07Z"},
{"from":"Brynna Masser","read":false,"favorite":false,"subject":"Acetaminophen, Dextromethorphan hydrobromide, Chlorpheniramine maleate, and Phenylephrine hydrochloride","time":"2017-06-06T23:56:37Z"},
{"from":"Reagen Everill","read":true,"favorite":true,"subject":"Triclosan","time":"2017-01-06T23:22:25Z"},
{"from":"Cris Davenhill","read":false,"favorite":false,"subject":"Olive Olea europaea","time":"2017-04-27T23:26:56Z"},
{"from":"Demetre Cutler","read":true,"favorite":true,"subject":"MENTHOL","time":"2017-07-27T22:21:51Z"},
{"from":"Allie Van Salzberger","read":true,"favorite":true,"subject":"Aluminum Zirconium Tetrachlorohydrex GLY","time":"2016-09-10T05:59:47Z"},
{"from":"Leshia Duester","read":true,"favorite":false,"subject":"Miconazole Nitrate","time":"2017-01-17T08:17:47Z"},
{"from":"Egor Atyea","read":false,"favorite":true,"subject":"NEOMYCIN SULFATE","time":"2017-01-25T13:17:05Z"},
{"from":"Johnnie Bocking","read":false,"favorite":false,"subject":"dextromethorphan polistirex","time":"2016-12-14T18:56:57Z"},
{"from":"Devonne Miettinen","read":true,"favorite":false,"subject":"OCTINOXATE, TITANIUM DIOXIDE","time":"2017-03-26T18:42:03Z"},
{"from":"Emylee Djurisic","read":true,"favorite":false,"subject":"Stemphylium spp","time":"2017-08-12T18:13:57Z"},
{"from":"Claus Messenbird","read":true,"favorite":false,"subject":"panitumumab","time":"2017-08-23T14:26:58Z"},
{"from":"Chrysler Patriskson","read":true,"favorite":false,"subject":"Titanium Dioxide and Zinc Oxide","time":"2017-01-05T05:14:11Z"},
{"from":"Dorelia Chastenet","read":false,"favorite":false,"subject":"Metformin Hydrochloride","time":"2017-03-12T21:32:11Z"},
{"from":"Daniel Knight","read":true,"favorite":true,"subject":"Aralia quinquefolia, Epiphegus virginiana, Jacaranda caroba, Lacticum acidum, Hydrocotyle asiatica, Hydrocyanicum acidum,","time":"2017-07-04T21:58:45Z"},
{"from":"Evelin Blacksland","read":true,"favorite":false,"subject":"Olanzapine","time":"2016-11-11T18:36:04Z"},
{"from":"Del Oxteby","read":false,"favorite":true,"subject":"SODIUM FLUORIDE","time":"2016-09-04T23:29:33Z"},
{"from":"Marissa Poschel","read":true,"favorite":false,"subject":"Sweetgum","time":"2016-10-11T01:27:13Z"},
{"from":"Krissie Dauby","read":true,"favorite":true,"subject":"pantoprazole sodium","time":"2017-04-25T01:10:08Z"},
{"from":"Randy Zammett","read":false,"favorite":true,"subject":"Propranolol","time":"2017-06-24T21:17:42Z"},
{"from":"Renee Capaldo","read":true,"favorite":true,"subject":"Oxygen","time":"2016-10-06T10:15:24Z"},
{"from":"Judas Ponnsett","read":false,"favorite":true,"subject":"SULFACETAMIDE SODIUM, SULFUR","time":"2016-10-27T01:25:48Z"},
{"from":"Ingrid Burnett","read":true,"favorite":true,"subject":"Enoxaparin sodium","time":"2017-02-01T15:33:57Z"},
{"from":"Augie Sympson","read":false,"favorite":false,"subject":"CAMPHOR, EUCALYPTUS OIL, MENTHOL","time":"2017-07-05T00:27:20Z"},
{"from":"Dion Footer","read":false,"favorite":false,"subject":"Tramadol Hydrochloride","time":"2017-07-09T08:22:15Z"},
{"from":"Odette Tuohy","read":true,"favorite":false,"subject":"Acetaminophen, Aspirin, and Caffeine","time":"2017-07-18T23:04:05Z"},
{"from":"Denys Elecum","read":true,"favorite":false,"subject":"DEXTROMETHORPHAN HYDROBROMIDE, PHENYLEPHRINE HYDROCHLORIDE, and TRIPROLIDINE HYDROCHLORIDE","time":"2016-09-04T12:00:18Z"},
{"from":"Eudora Gearty","read":true,"favorite":false,"subject":"Titanium Dioxide and Octinoxate","time":"2017-05-11T18:57:26Z"},
{"from":"Jim Defty","read":false,"favorite":false,"subject":"Hypericum perforatum, Ledum palustre, Latrodectus mactans,","time":"2017-08-15T12:12:38Z"},
{"from":"Ingra Fardo","read":true,"favorite":false,"subject":"Phenylephrine HCl","time":"2016-11-21T13:34:13Z"},
{"from":"Noel Cossentine","read":false,"favorite":true,"subject":"Alcohol","time":"2017-06-15T17:07:12Z"},
{"from":"Imojean Bandey","read":true,"favorite":false,"subject":"DOCUSATE SODIUM","time":"2017-01-23T04:21:04Z"},
{"from":"Teador Hearnden","read":true,"favorite":true,"subject":"Metformin Hydrochloride","time":"2016-09-01T20:05:50Z"},
{"from":"Nev O'Hare","read":false,"favorite":true,"subject":"Triamcinolone Acetonide","time":"2016-09-20T00:24:22Z"},
{"from":"Leandra Gownge","read":true,"favorite":false,"subject":"CHLOROXYLENOL","time":"2017-01-04T16:45:08Z"},
{"from":"Dora Trodler","read":true,"favorite":false,"subject":"chlorhexidine gluconate and isopropyl alcohol","time":"2016-08-29T00:55:24Z"},
{"from":"Carlina Petrovsky","read":true,"favorite":true,"subject":"OCTINOXATE, TITANIUM DIOXIDE, OXYBENZONE","time":"2017-02-06T04:10:58Z"},
{"from":"Basile Ible","read":false,"favorite":false,"subject":"Aluminum Chlorohydrate","time":"2016-09-22T19:24:01Z"},
{"from":"Solomon Alloway","read":true,"favorite":true,"subject":"Dexbrompheniramine Maleate, Phenylephrine Hydrochloride","time":"2016-11-30T21:00:38Z"},
{"from":"Jerri Quantrill","read":false,"favorite":true,"subject":"acetaminophen","time":"2017-01-18T01:37:43Z"},
{"from":"Venita Madill","read":false,"favorite":false,"subject":"Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone","time":"2017-04-26T22:46:33Z"},
{"from":"Curtis Wildbore","read":false,"favorite":false,"subject":"Bicalutamide","time":"2016-12-10T14:48:54Z"},
{"from":"Bogart Coling","read":true,"favorite":true,"subject":"ARIPIPRAZOLE","time":"2016-09-21T02:15:43Z"},
{"from":"Kamila MacGlory","read":false,"favorite":true,"subject":"Potassium Chloride","time":"2016-12-16T03:05:51Z"},
{"from":"Else Izzett","read":true,"favorite":true,"subject":"Sodium Fluoride","time":"2017-04-08T02:05:04Z"},
{"from":"Bengt Got","read":false,"favorite":false,"subject":"Mercurius vivus 8","time":"2016-11-07T15:09:45Z"},
{"from":"Arley Vasyutin","read":true,"favorite":false,"subject":"octreotide acetate","time":"2016-11-01T11:30:47Z"},
{"from":"Colly Custard","read":true,"favorite":false,"subject":"Acetaminophen","time":"2017-07-09T16:19:29Z"},
{"from":"Lindie Delouch","read":false,"favorite":true,"subject":"propranolol hydrochloride","time":"2017-06-23T05:35:58Z"},
{"from":"Gale Attenbarrow","read":true,"favorite":true,"subject":"diphenoxylate hydrochloride and atropine sulfate","time":"2017-07-09T23:35:43Z"},
{"from":"Raynard Burgoyne","read":true,"favorite":true,"subject":"cephalexin","time":"2017-04-26T18:41:30Z"},
{"from":"Linoel McGrudder","read":true,"favorite":true,"subject":"Treatment Set TS329161","time":"2016-09-23T19:32:55Z"},
{"from":"Caroline Drinkall","read":false,"favorite":false,"subject":"DOCUSATE SODIUM","time":"2017-07-14T04:11:39Z"},
{"from":"Andria McGawn","read":true,"favorite":true,"subject":"TIZANIDINE HYDROCHLORIDE","time":"2016-10-29T13:12:24Z"},
{"from":"Imogene Oake","read":false,"favorite":false,"subject":"Russian Thistle","time":"2017-04-21T02:39:26Z"},
{"from":"Skye Swinburne","read":false,"favorite":true,"subject":"Octinoxate and Titanium dioxide","time":"2017-06-25T07:14:38Z"},
{"from":"Aube Favell","read":true,"favorite":true,"subject":"ALCOHOL","time":"2016-12-16T12:19:20Z"},
{"from":"Belia Jerson","read":true,"favorite":true,"subject":"benzocaine","time":"2016-10-19T21:46:25Z"},
{"from":"Alasdair Lanphere","read":true,"favorite":true,"subject":"BLEOMYCIN SULFATE","time":"2017-08-07T23:34:37Z"},
{"from":"Dayle Di Biaggi","read":true,"favorite":false,"subject":"Atorvastatin Calcium","time":"2017-04-05T12:46:36Z"},
{"from":"Ashton Yeardley","read":true,"favorite":false,"subject":"CYCLOSERINE","time":"2017-06-27T18:11:35Z"},
{"from":"Eziechiele O'Lunny","read":false,"favorite":false,"subject":"temazepam","time":"2016-12-17T19:37:06Z"},
{"from":"Mada Ranstead","read":false,"favorite":true,"subject":"Ibuprofen","time":"2017-05-24T19:44:54Z"},
{"from":"Konstanze Ashley","read":false,"favorite":false,"subject":"Benzalkonium Chloride","time":"2016-09-08T14:21:22Z"},
{"from":"Amby Janc","read":false,"favorite":false,"subject":"Benzocaine","time":"2017-05-11T19:09:34Z"},
{"from":"Viviana Wooder","read":true,"favorite":true,"subject":"Clindamycin Hydrochloride","time":"2017-08-13T02:55:53Z"},
{"from":"Baxie Coda","read":true,"favorite":false,"subject":"Calcarea Phosphorica, Carbo Vegetabilis, Chamomilla, Colocynthis, Lycopodium, Moschus, Natrum Muriaticum, Silicea, Thuja","time":"2016-10-23T20:45:24Z"},
{"from":"Caritta Cantor","read":false,"favorite":false,"subject":"Famciclovir","time":"2017-03-24T17:36:04Z"},
{"from":"Haydon Cockley","read":true,"favorite":true,"subject":"DEXTROMETHORPHAN HYDROBROMIDE and DOXYLAMINE SUCCINATE","time":"2016-11-20T10:07:28Z"},
{"from":"Mellicent Ramberg","read":false,"favorite":false,"subject":"Phenytoin","time":"2017-01-19T02:31:26Z"},
{"from":"Flemming Caldicott","read":true,"favorite":false,"subject":"Mirtazapine","time":"2017-01-09T12:38:26Z"},
{"from":"Onfre Perrinchief","read":true,"favorite":true,"subject":"Titanium Dioxide and Octinoxate","time":"2016-10-23T07:11:17Z"},
{"from":"Salomon Voysey","read":true,"favorite":false,"subject":"Benzocaine","time":"2017-06-05T12:12:12Z"},
{"from":"Gracie Harber","read":true,"favorite":false,"subject":"Levothyroxine Sodium","time":"2016-10-07T01:45:40Z"},
{"from":"Karel Giannassi","read":false,"favorite":true,"subject":"ALCOHOL","time":"2016-10-21T05:00:00Z"},
{"from":"Claiborn Clausen","read":true,"favorite":false,"subject":"Aspirin","time":"2017-08-22T08:09:39Z"},
{"from":"Frannie Scanlin","read":true,"favorite":false,"subject":"Levonorgestrel","time":"2017-04-19T19:32:52Z"},
{"from":"Lane Emsden","read":false,"favorite":false,"subject":"Nateglinide","time":"2017-08-03T12:14:55Z"},
{"from":"Rhys Matussov","read":false,"favorite":true,"subject":"Benazepril Hydrochloride and Hydrochlorothiazide","time":"2016-12-29T11:42:20Z"},
{"from":"Milli Donativo","read":false,"favorite":true,"subject":"Quetiapine fumarate","time":"2017-05-13T03:59:40Z"},
{"from":"Livia Casolla","read":true,"favorite":true,"subject":"American Cockroach","time":"2016-11-13T10:53:56Z"},
{"from":"Zabrina Learman","read":true,"favorite":true,"subject":"DONEPEZIL HYDROCHLORIDE","time":"2017-01-24T08:12:31Z"},
{"from":"Lynnell Stiffell","read":true,"favorite":true,"subject":"Ribavirin","time":"2017-03-02T02:50:53Z"},
{"from":"Catharina Dakers","read":true,"favorite":false,"subject":"captopril","time":"2017-07-06T04:07:06Z"},
{"from":"Bobbie Weavill","read":true,"favorite":true,"subject":"HORSE EPITHELIA","time":"2016-11-01T04:42:35Z"},
{"from":"Karlik Cromett","read":false,"favorite":true,"subject":"Cimetidine","time":"2017-06-12T10:54:13Z"},
{"from":"Rheta Haylor","read":false,"favorite":true,"subject":"Tolnaftate","time":"2017-02-08T16:00:56Z"},
{"from":"Reinold Gudgion","read":true,"favorite":true,"subject":"CALENDULA OFFICINALIS FLOWER, SAMBUCUS NIGRA FLOWER, THUJA OCCIDENTALIS","time":"2017-01-12T02:09:32Z"},
{"from":"Demetra Climie","read":true,"favorite":true,"subject":"Lentil","time":"2016-10-14T12:26:34Z"},
{"from":"Cleveland Everton","read":false,"favorite":true,"subject":"Lithium Carbonate","time":"2016-10-25T02:38:42Z"},
{"from":"Marline Sands-Allan","read":true,"favorite":false,"subject":"cefixime","time":"2016-12-02T05:22:18Z"},
{"from":"Lanie Mateuszczyk","read":true,"favorite":true,"subject":"Diphenhydramine","time":"2016-12-01T11:00:28Z"},
{"from":"Garry Franseco","read":true,"favorite":true,"subject":"Cocoa butter, Phenylephrine HCl, Shark liver oil","time":"2017-06-29T23:17:16Z"},
{"from":"Brigham Gives","read":true,"favorite":false,"subject":"clobetasol propionate","time":"2017-02-10T15:14:16Z"}]`);


export const MAIL_FOLDERS: MailFolder[] = [
  {
    icon: 'inbox-icon',
    label: 'Inbox',
    badgeColor: '#ebc717',
    emails: EMAILS,
    unreadCount: 9,
    type: MailFolderType.MailBox,
  },
  {
    icon: 'envelope2-icon',
    label: 'Sent Mail',
    badgeColor: 'blue',
    emails: [],
    unreadCount: 0,
    type: MailFolderType.MailBox,
    blocked: true
  },
  {
    icon: 'star-icon',
    label: 'Important',
    badgeColor: '#57cf59',
    emails: [
      {
        from: 'Test User',
        subject: 'Mail in important mailbox',
        time: new Date(),
        favorite: true,
        read: false
      }
    ],
    unreadCount: 2,
    type: MailFolderType.MailBox,
    blocked: true
  },
  {
    icon: 'drafts-icon',
    label: 'Drafts',
    badgeColor: 'yellow',
    emails: [],
    unreadCount: 0,
    type: MailFolderType.MailBox,
    blocked: true
  },
  {
    icon: 'trash-icon',
    label: 'Trash',
    badgeColor: 'black',
    emails: [],
    unreadCount: 0,
    type: MailFolderType.MailBox
  },
  {
    label: 'Labels',
    emails: [],
    type: MailFolderType.Folder,
    badgeColor: 'purple',
    children: [
      {
        label: 'Work',
        type: MailFolderType.Folder,
        emails: [{
          read: false,
          favorite: true,
          time: new Date(),
          subject: 'Welcome to UI!',
          from: 'UI Dev Team'
        }],
      },
      {
        label: 'Personal',
        emails: [],
        type: MailFolderType.Folder
      }
    ]
  },
  {
    label: 'Chats',
    emails: [],
    type: MailFolderType.Folder
  },
  {
    label: 'Spam',
    emails: [],
    type: MailFolderType.Folder
  },
  {
    label: 'Deleted',
    emails: [],
    type: MailFolderType.Folder
  }
];

export const starCbk: Checkbox = {
  checkedImg: 'star-cbk-checked.png',
  uncheckedImg: 'star-cbk-unchecked.png',
  width: '14px',
  height: '13px'
};

export const starCbkSelected: Checkbox = {
  checkedImg: 'star-cbk-checked.png',
  uncheckedImg: 'star-cbk-unchecked-selected.png',
  width: '14px',
  height: '13px'
};
