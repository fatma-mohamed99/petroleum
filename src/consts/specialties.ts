import { SpecialtyCard } from "@/types/SpecialtyCard ";

import FiscalOilMetering from "../../public/images/specialties/FiscalOilMetering.jpg"
import GasPressureReduction from "../../public/images/specialties/GasPressureReduction.jpg"
import OilGasPipelines from "../../public/images/specialties/Oil&GasPipelines.jpg"
import TankFarms from "../../public/images/specialties/TankFarms.jpg"
import Gathering from "../../public/images/hero-img/New folder/slider2.jpg"





  
  export const specialties: SpecialtyCard[] = [
    {
      title: "Crude Oil Gathering",
      shortDescription: "Collects crude oil from wells and transports it efficiently.",
      longDescription: "Crude Oil Gathering Stations are facilities used to collect crude oil from different production wells. These stations include test stations, filtration and separation units, heating stages, compressors, pumps, and water pumping systems. Control systems and MV/LV electrical equipment manage operations and ensure safety and reliability.",
      imageSrc: Gathering
    },
    {
      title: "Gas Pressure Reduction",
      shortDescription: "Reduces and meters natural gas before safe distribution.",
      longDescription: "Gas Pressure Reduction & Metering Stations are critical for reducing the high pressure of natural gas before distribution. They include heating units, filtration and separation stages, pressure regulators, skid/nonskid metering runs, fuel and instrument gas skids, and advanced flow metering and control systems.",
      imageSrc: GasPressureReduction
    },
    {
      title: "Fiscal Oil Metering",
      shortDescription: "Measures oil and gas for legal and trade purposes.",
      longDescription: "Fiscal Oil & Gas Metering Stations are designed for accurate custody transfer of hydrocarbons. They use filtration and separation systems, metering skids (skid-mounted or fixed), instrument gas systems, and high-precision flow meters with automated control for reliable financial transactions and compliance.",
      imageSrc: FiscalOilMetering
    },
    {
      title: "Tank Farms Facility",
      shortDescription: "Stores petroleum products with full automation and safety.",
      longDescription: "Tank Farms are storage facilities,for crude oil, refined products, and chemicals. They include above-ground tanks with different roof types (fixed/dome/floating), spherical tanks for gas, loading/unloading stations, truck automation systems, SCADA control, and integrated fire fighting systems for maximum safety.",
      imageSrc:TankFarms
    },
    {
      title: "Oil & Gas Pipelines",
      shortDescription: "Transports oil and gas over long distances safely and efficiently.",
      longDescription: "Oil & Gas Pipelines are essential infrastructure for transporting hydrocarbons from production sites to refineries or storage. They incorporate advanced monitoring, leak detection, pumping/compression stations, and control systems to ensure safe and efficient delivery of energy products.",
      imageSrc: OilGasPipelines
    }
  ];
  