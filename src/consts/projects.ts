import { Project } from "@/types/project";
import VitolTankTerminalVasilikoVTTVCyprus from "../../public/images/projects/VitolTankTerminalVasilikoVTTVCyprus.jpg"
import IncreasingCapacityofHeavyCrudeOilPipeline from "../../public/images/projects/IncreasingCapacityofHeavyCrudeOilPipeline.jpg"
import HomsAdraGasoilpipelinewithtwotankterminals from "../../public/images/projects/HomsAdraGasoilpipelinewithtwotankterminals.jpeg"
import FiscalMeteringStationforAGPPhaseII from "../../public/images/projects/FiscalMeteringStationforAGPPhaseII.jpg"
import ArabGasPipelinePhaseIIPart1 from "../../public/images/projects/ArabGasPipelinePhaseIIPart1.jpg"
import IntermediatePumpingStationinTalkalakh from "../../public/images/projects/IntermediatePumpingStationinTalkalakh.jpg"
import AlRaqaTankFarm from "../../public/images/projects/AlRaqaTankFarm.jpg"
import LPGSphericalTanksinSyria from "../../public/images/projects/LPGSphericalTanksinSyria.jpg"
import PRMSatBaniasPowerPlant from "../../public/images/projects/PRMSatBaniasPowerPlant.jpg"
import AreekaTankFarm from "../../public/images/projects/AreekaTankFarm.png"
import EzraTankFarm from "../../public/images/projects/EzraTankFarm.jpg"
import FiscalMeteringStationforSLGP from "../../public/images/projects/FiscalMeteringStationforSLGP.jpeg"
export const projects: Project[] = [
  { id:"1",
    title: "Vitol Tank Terminal Vasiliko",
    image: VitolTankTerminalVasilikoVTTVCyprus,
    shortDesc: "Fuel terminal in Cyprus with 200,000 m³ capacity and multiple tank types.",
    duration: "2012 - 2014",
    location: "Lebanon",
    longDesc: "EP project for Vitol VTTV terminal in Cyprus, designed for storage of gasoline and gas oil in dome aluminum and cone roof tanks, equipped with firewater and irrigation systems.",
    points: [
      "200,000 m³ total capacity",
      "3 gas oil tanks (26,000 m³), 1 (21,500 m³)",
      "4 gasoline tanks with floating roofs (21,800 m³ each)",
      "Cone roof storage, irrigation, and fire water tanks"
    ]
  },
  {id:"2",
    title: "Crude Oil Pipeline Capacity",
    image: IncreasingCapacityofHeavyCrudeOilPipeline,
    shortDesc: "Upgraded heavy crude pipeline with loop lines and control systems.",
    duration: "2009 - 2011",
    location: "Lebanon",
    longDesc: "Capacity enhancement for heavy crude oil pipeline via new 22”x 88 km loops, intermediate station upgrades, and installation of fiber optic and SCADA systems.",
    points: [
      "22” x 88 km heavy crude pipeline loops",
      "Intermediate pumping stations upgraded",
      "Fiber Optic Cable with Telecommunication System",
      "Cathodic Protection System",
      "SCADA Control System"
    ]
  },
   {id:"3",

    title: "Homs Adra Gas Pipeline",
    image: HomsAdraGasoilpipelinewithtwotankterminals,
    shortDesc: "Gas oil pipeline with two tank terminals and advanced pumping stations.",
    duration: "2011 - 2015",
    location: "Lebanon",
    longDesc: "Comprehensive EPCC project for 18” x 180 km gas oil pipeline including Adra and Dmeir tank farms, with high-capacity storage, advanced pumping systems, and utility infrastructure.",
    points: [
      "18” x 180 km pipeline",
      "Multistage vertical and horizontal pumps",
      "Adra Tank Farm: 8 tanks (10,000 m³ each), 80,000 Ton capacity",
      "Dmeir Tank Farm: 7 tanks (10,000 m³ each), 70,000 Ton capacity",
      "Control, Firefighting and Utility systems included"
    ]
  },
    {id:"4",

    title: "Fiscal Station for AGP",
    image: FiscalMeteringStationforAGPPhaseII,
    shortDesc: "Fiscal Metering Station at Turkish border for 9 MSCM/day gas.",
    duration: "2009 - 2012",
    location: "Lebanon",
    longDesc: "Final part of Arab Gas Pipeline Phase II project. Included FMS and pig launching stations for 9 MSCM/day capacity at the Syrian-Turkish border.",
    points: [
      "Fiscal Metering Station for 9 MSCM/day",
      "Located at end of Arab Gas 36” pipeline",
      "Pig Launching / Receiving Stations"
    ]
  },
  {id:"5",
    title: "Arab Gas Pipeline Phase II",
    image: ArabGasPipelinePhaseIIPart1,
    shortDesc: "36” x 60 km gas pipeline from Aleppo to Turkish border.",
    duration: "2009 - 2011",
    location: "Lebanon",
    longDesc: "Gas transportation project with pig stations, block valves, and boring under infrastructure for reliable natural gas delivery.",
    points: [
      "36” x 60 km Gas pipeline",
      "Pig Launching / Receiving Stations",
      "Block Valves Stations",
      "200m casing boring under roads and infrastructure",
      "Fiscal Metering Station for 9 MSCM/day"
    ]
  },
  {id:"6",
    title: "Talkalakh Pumping Station",
    image: IntermediatePumpingStationinTalkalakh,
    shortDesc: "Intermediate pumping station with fuel storage and control systems.",
    duration: "2008 - 2011",
    location: "Lebanon",
    longDesc: "Pumping station for 24” petroleum pipeline, featuring buffer and kerosene tanks, booster pumps, and essential utilities.",
    points: [
      "24\" pipeline station, 35,000 m² area",
      "2 gasoline floating roof tanks (15,000 m³ each)",
      "1 kerosene fixed cone roof tank (10,000 m³)",
      "Multistage booster pumps",
      "MV Electrical, Firefighting and Utility systems"
    ]
  },
  {id:"7",
    title: "Al-Raqa Tank Farm",
    image: AlRaqaTankFarm,
    shortDesc: "Large tank farm with rail and truck loading stations.",
    duration: "2007 - 2009",
    location: "Lebanon",
    longDesc: "65,000 m² tank farm with 245,000 Ton capacity, equipped for loading/unloading of petroleum products via rail and truck systems.",
    points: [
      "5 gas oil fixed roof tanks (40,000 m³ each)",
      "3 gasoline floating roof tanks (15,000 m³ each)",
      "Rail truck unloading & Truck Loading Station",
      "Control, Firefighting and Utility systems"
    ]
  },
  {id:"8",
    title: "LPG Spherical Tanks Syria",
    image: LPGSphericalTanksinSyria,
    shortDesc: "LPG spherical tanks with horizontal pumps in Adra and multiple cities.",
    duration: "2006 - 2008",
    location: "Lebanon",
    longDesc: "Seven spherical tanks for LPG storage, equipped with horizontal pumps and firefighting systems, located across Syria.",
    points: [
      "3 spherical tanks (3,000 m³) in Adra",
      "4 spherical tanks (1,000 m³) in Raka, Daraa, Hamah, Edleb",
      "Multistage horizontal pumps",
      "Firefighting system"
    ]
  },
  {id:"9",
    title: "PRMS Banias Power Plant",
    image: PRMSatBaniasPowerPlant,
    shortDesc: "Pressure Reduction & Metering Station at end of 24” gas line.",
    duration: "2001 - 2004",
    location: "Lebanon",
    longDesc: "PRMS facility at Banias Power Plant, with pig stations and valve blocks for natural gas processing and pressure reduction.",
    points: [
      "End of 24” Gas Pipeline",
      "Pig Launching/Receiving Stations",
      "Block Valves Stations",
      "PRMS capacity: 5 MSCM/day"
    ]
  },
    {id:"10",

    title: "Areeka Tank Farm Project",
    image: AreekaTankFarm,
    shortDesc: "Mid-size fuel tank farm with truck loading system.",
    duration: "2005 - 2007",
    location: "Lebanon",
    longDesc: "35,000 m² tank farm in Areeka for gas oil and gasoline, equipped with control, firefighting and truck loading systems.",
    points: [
      "3 gas oil fixed roof tanks (30,000 m³ each)",
      "2 gasoline floating roof tanks (10,000 m³ each)",
      "Truck Loading Station",
      "Control and Utility systems"
    ]
  },
  {id:"11",
    title: "Ezra Tank Farm Project",
    image: EzraTankFarm,
    shortDesc: "Large dual-site tank farm with 280,000 Ton capacity.",
    duration: "2005 - 2007",
    location: "Lebanon",
    longDesc: "Pipeline and tank farm project including a main pumping station and two large storage sites totaling 280,000 Ton capacity.",
    points: [
      "Main pumping station",
      "Two tank farms",
      "Total storage capacity: 280,000 Ton",
      "Control, firefighting, and utility systems"
    ]
  },
   {id:"12",

    title: "Fiscal Station for SLGP",
    image: FiscalMeteringStationforSLGP,
    shortDesc: "Fiscal metering for SLGP with advanced instrumentation.",
    duration: "2003 - 2006",
    location: "Lebanon",
    longDesc: "Fiscal metering station for SLGP, integrated with SCADA and high-accuracy metering systems for gas measurement and flow regulation.",
    points: [
      "Advanced instrumentation and flow meters",
      "Integrated SCADA monitoring",
      "High-accuracy fiscal metering",
      "Control building and safety systems"
    ]
  }
];