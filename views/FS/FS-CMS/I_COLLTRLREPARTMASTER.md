---
name: I_COLLTRLREPARTMASTER
description: Part Details for Collateral Real Estate
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTMASTER')/$value
semantic_en: Part Details for Collateral Real Estate
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLREPARTMASTER

**Part Details for Collateral Real Estate**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTMASTER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CollateralRealEstatePartUUID` | `RAW(16)` | GUID for Object part |
| `CollateralRealEstateUUID` | `RAW(16)` | GUID for Real Estate Object |
| `CollateralRealEstatePartID` | `NUMC(10)` | Part ID for the Object |
| `ColltrlREBuildingPartType` | `CHAR(6)` | Building Part Type |
| `ColltrlRealEstatePartCondition` | `CHAR(6)` | Object condition |
| `ColltrlREMainUsageType` | `CHAR(6)` | Usage Type |
| `ColltrlREAdditionalUsageType1` | `CHAR(6)` | Additional Usage 1 |
| `ColltrlREAdditionalUsageType2` | `CHAR(6)` | Additional Usage 2 |
| `ColltrlREBuildingMethodRoof` | `CHAR(6)` | Building method - Roof |
| `ColltrlREBuildingMethodBody` | `CHAR(6)` | Building method - Body |
| `ColltrlREBuildingMethodCellar` | `CHAR(6)` | Building method - Cellar |
| `ColltrlRealEstateUtilization` | `CHAR(6)` | Utilization of the Object |
| `ColltrlREPartDescription` | `CHAR(30)` | Description of Building Part |
| `ColltrlRECommlUsagePercent` | `DEC(10)` | Commercial Usage as a Percentage of Total Usage |
| `ColltrlREIsOtherUsagePossible` | `CHAR(1)` | Indicates if Usages in addition to Main Usage are Possible |
| `ColltrlREReferencePartUUID` | `RAW(16)` | Reference Object Part GUID |
| `ColltrlREIsSubAssetCreated` | `CHAR(1)` | Indicates whether a Sub-asset is created for Building Part |
| `ColltrlREUsableAreaSize` | `QUAN(13)` | Usable Area |
| `ColltrlREUsblAreaUoM` | `UNIT(3)` | Unit of Measure for Usable Area |
| `ColltrlRERentedUsableAreaSize` | `QUAN(13)` | Rented Usable Area |
| `ColltrlRERntdUsblAreaUoM` | `UNIT(3)` | Unit of Measure for Usable Rented Area |
| `ColltrlRealEstateUsableVolume` | `QUAN(13)` | Usable Volume of Real Estate Building Parts |
| `ColltrlREUsblVolumeUoM` | `UNIT(3)` | Unit of Measure for Usable Volume of Real Estate |
| `ColltrlRERentedUsableVolume` | `QUAN(13)` | Usable Volume of the Rented Portions of Real Estate |
| `ColltrlRERntdUsblVolumeUoM` | `UNIT(3)` | Unit of measure for usable volume of Rented Parts |
| `ColltrlREResidentialAreaSize` | `QUAN(13)` | Residential Area |
| `ColltrlRERsdntlAreaUoM` | `UNIT(3)` | Unit of Measure for Residential Area |
| `ColltrlRESecondaryAreaSize` | `QUAN(13)` | Secondary Area |
| `ColltrlRESecdryAreaUoM` | `UNIT(3)` | Unit of Measure for Secondary Area |
| `ColltrlREOtherAreaSize` | `QUAN(13)` | Other Area |
| `ColltrlREOthAreaUnitOfMeasure` | `UNIT(3)` | Unit of Measure for Other Area |
| `ColltrlRENumberOfBuildingPart` | `INT4(10)` | Number of building part units |
| `ColltrlRENmbrOfBldngPartRented` | `INT4(10)` | Number of building part units rented |
| `ColltrlREConstructionStartDate` | `DATS(8)` | Start Date of Construction |
| `ColltrlREPermissionAppliedDate` | `DATS(8)` | Building Permssion applied date |
| `ColltrlREPrmssnObtainedDate` | `DATS(8)` | Building Permssion obtained date |
| `ColltrlRealEstateOccupancyDate` | `DATS(8)` | Occupancy Date |
| `ColltrlRECompletionDate` | `DATS(8)` | Completion Date |
| `ColltrlREFinalInspectionDate` | `DATS(8)` | Date of Final Inspection |
| `ColltrlRERsdntlPlndRentAmount` | `CURR(17)` | Planned Rent Amount |
| `ColltrlRERsdntlActlRentAmount` | `CURR(17)` | Actual Rent Amount |
| `ColltrlRERsdntlPlndRentCrcy` | `CUKY(5)` | Planned Rent Currency |
| `ColltrlRERsdntlActlRentCrcy` | `CUKY(5)` | Actual Rent Currency |
| `ColltrlREResidentialBasePeriod` | `CHAR(1)` | Base period for the rent |
| `ColltrlRERsdntlBaseMeasure` | `CHAR(1)` | Base Measure |
| `ColltrlRERsdntlVacancyPercent` | `DEC(10)` | Ratio of Real Estate not rented to Total Real Estate Value |
| `ColltrlREResidentialRentType` | `CHAR(1)` | Indicator for Net or Gross Rent |
| `ColltrlRERsdntlComparRentAmt` | `CURR(17)` | Comparative Rent  (Residential) |
| `ColltrlRERsdntlComparRentCrcy` | `CUKY(5)` | Comparative Rent Currency - Residential |
| `ColltrlRealEstateLandAreaSize` | `QUAN(13)` | Land Area of the Real Estate |
| `ColltrlRELandAreaUnitOfMeasure` | `UNIT(3)` | Unit of Measure of Land Area |
| `ColltrlRERentedLandAreaSize` | `QUAN(13)` | Land Area of the Real Estate which is Rented |
| `ColltrlRERntdLandAreaUoM` | `UNIT(3)` | Land area unit of measure(rented) |
| `ColltrlRealEstateNumberOfUnits` | `INT4(10)` | No of units in real estate object |
| `ColltrlRENumberOfFloors` | `INT4(10)` | Number of Floors |
| `ColltrlRENumberOfGarages` | `INT4(10)` | No of Garages in Real Estate Object |
| `ColltrlRENumberOfGaragesRented` | `INT4(10)` | No of Garages Rented in Real Estate Object |
| `ColltrlRENumberOfParking` | `INT4(10)` | Number of Parking Units |
| `ColltrlRENumberOfParkingRented` | `INT4(10)` | Number of Parking Units Rented |
| `ColltrlRENmbrOfUndrGrndParking` | `INT4(10)` | Number of Underground Parking Units |
| `ColltrlRENrOfUndrGrndPrkngRntd` | `INT4(10)` | Number of Rented Underground Parking Units |
| `ColltrlRENumberOfCurrentUnits` | `INT4(10)` | No of current units in real estate object |
| `ColltrlRENmbrOfCurUnitsRented` | `INT4(10)` | No of Current Units Rented in Real Estate Object |
| `ColltrlRENumberOfOldUnits` | `INT4(10)` | No of old units in real estate object |
| `ColltrlRENmbrOfOldUnitsRented` | `INT4(10)` | No of Old Units Rented in Real Estate Object |
| `ColltrlRENumberOfNewUnits` | `INT4(10)` | No of new units in real estate object |
| `ColltrlRENmbrOfNewUnitsRented` | `INT4(10)` | No of New units Rented in Real Estate Object |
| `ColltrlRENrOfAccessStructures` | `INT4(10)` | No of Access Structures |
| `ColltrlRENumberOfSaleLevel` | `INT4(10)` | No of Sale levels in commercial building |
| `ColltrlRealEstateNumberOfRooms` | `INT4(10)` | No of rooms in the hotel/clinic |
| `ColltrlRealEstateNumberOfBeds` | `INT4(10)` | No of beds in the clinic/nursing home |
| `ColltrlRECommlEnvrmtDesc` | `CHAR(30)` | Description of the commercial environment |
| `ColltrlREAccStrucDescription` | `CHAR(30)` | Description of the Access Structures |
| `ColltrlREBldngSctnDescription` | `CHAR(6)` | Building Section |
| `ColltrlRealEstatePriceCategory` | `CHAR(6)` | Price Category |
| `ColltrlREDailyAvgPriceAmount` | `CURR(17)` | Average Price per Day |
| `ColltrlREDailyAvgPriceCurrency` | `CUKY(5)` | Average Price Currency |
| `ColltrlREOccupancyPercent` | `DEC(10)` | Occupancy specified in Percentage Terms |
| `ColltrlRETurnoverAmount` | `CURR(17)` | Total Amount of Turnover |
| `ColltrlRETurnoverCurrency` | `CUKY(5)` | Currency |
| `ColltrlRERentalAgreementType` | `CHAR(6)` | Rental Agreement Type |
| `ColltrlRECnstrctnLastRptDate` | `DATS(8)` | Date of Last Constuction Report |
| `ColltrlREBldngProgressAmount` | `CURR(17)` | Amount Disbursed for Construction based on Building Progress |
| `ColltrlREBldngProgressCurrency` | `CUKY(5)` | Building Progress Amount Curreny |
| `ColltrlREBldngCompltnPercent` | `DEC(10)` | Degree of Completion of Construction |
| `ColltrlRealEstateInsuranceType` | `CHAR(6)` | Insurance Type |
| `ColltrlREInsuranceAmount` | `CURR(17)` | Insurance Amount |
| `ColltrlREInsuranceCurrency` | `CUKY(5)` | Insurance Currency |
| `ColltrlREInsuranceValidToDate` | `DATS(8)` | Date until which the Insurance Stands Valid |
| `ColltrlRERsdntlRatnCostAmount` | `CURR(17)` | Residential Rationing Cost |
| `ColltrlRERsdntlRatnCostPercent` | `DEC(10)` | Percentage of Residential Rationing Cost |
| `ColltrlREExtLayoutCostAmount` | `CURR(17)` | External Layout Cost |
| `ColltrlREExtLayoutCostPercent` | `DEC(10)` | External Layout Cost as Percentage of Total Cost |
| `ColltrlRERsdntlRatnCostCrcy` | `CUKY(5)` | Rationing cost currency |
| `ColltrlREExtLayoutCostCurrency` | `CUKY(5)` | External Layout cost currency |
| `ColltrlRECommlRationCostAmount` | `CURR(17)` | Commercial Rationing Cost |
| `ColltrlRECommlRatnCostCurrency` | `CUKY(5)` | Rationing cost currency |
| `ColltrlRECommlRatnCostPercent` | `DEC(10)` | Percentage of Commercial Rationing Cost |
| `ColltrlREGrossColdRentAmount` | `CURR(17)` | Gross Cold Rent |
| `ColltrlREGrossColdRentCurrency` | `CUKY(5)` | Gross Cold Rent Currency |
| `ColltrlRENetColdRentAmount` | `CURR(17)` | Net Cold Rent |
| `ColltrlRENetColdRentCurrency` | `CUKY(5)` | Net Cold Rent Currency |
| `CollateralRealEstateEnteredBy` | `CHAR(12)` | Real Estate Add-On User |
| `ColltrlRealEstateEnteredDate` | `DATS(8)` | Created On |
| `ColltrlRealEstateEnteredTime` | `TIMS(6)` | Created At |
| `ColltrlRealEstateEnteredSource` | `CHAR(32)` | Sorce of Initial entry |
| `ColltrlRealEstateLastChangedBy` | `CHAR(12)` | Last Changed By |
| `ColltrlRELastChangedDate` | `DATS(8)` | Last Changed On |
| `ColltrlRELastChangedTime` | `TIMS(6)` | Last Changed At |
| `ColltrlRELastChangedSource` | `CHAR(32)` | Processing Source |
| `ColRECommlNmbrOfYrsLastValn` | `INT1(3)` | No of  years since Last Valuation of Commercial Real Estate |
| `ColltrlRECommlValnInterestRate` | `DEC(10)` | Interest rate (Com) |
| `ColltrlRERsdntlLastValnNrOfYrs` | `INT1(3)` | No. of Years since Real Estate was last Valued |
| `ColltrlRERsdntlValnIntrstRate` | `DEC(10)` | Interest rate used in Valuation of Residential Real Estate |
| `ColltrlRECommlPlndRentAmount` | `CURR(17)` | Planned Rent Amount |
| `ColltrlRECommlActualRentAmount` | `CURR(17)` | Actual Rent Amount |
| `ColltrlRECommlPlndRentCurrency` | `CUKY(5)` | Planned Rent Currency |
| `ColltrlRECommlActlRentCurrency` | `CUKY(5)` | Actual Rent Currency |
| `ColltrlRECommercialBasePeriod` | `CHAR(1)` | Base period for the rent |
| `ColltrlRECommercialBaseMeasure` | `CHAR(1)` | Base Measure |
| `ColltrlRECommercialRentType` | `CHAR(1)` | Indicator for Rent Type |
| `ColltrlRECommlComparRentAmount` | `CURR(17)` | Comparative Rent  (Commercial) |
| `ColltrlRECommlComparRentCrcy` | `CUKY(5)` | Comparative Rent Currency (Commercial) |
| `ColltrlRELandPlannedRentAmount` | `CURR(17)` | Planned Rent Amount |
| `ColltrlRELandActualRentAmount` | `CURR(17)` | Actual Rent Amount |
| `ColltrlRELandPlndRentCurrency` | `CUKY(5)` | Planned Rent Currency |
| `ColltrlRELandActlRentCurrency` | `CUKY(5)` | Actual Rent Currency |
| `ColltrlRELandRentBasePeriod` | `CHAR(1)` | Base period for the rent |
| `ColltrlRELandRentBaseMeasure` | `CHAR(1)` | Base Measure |
| `ColltrlREDepreciationPercent` | `DEC(10)` | Depriciation |
| `ColltrlRELandCostAmount` | `CURR(17)` | Land Cost Amount |
| `ColltrlRELandCostCurrency` | `CUKY(5)` | Land Cost Currency |
| `ColltrlREDevelopmentCostAmount` | `CURR(17)` | Development Cost Amount |
| `ColltrlREDevCostCurrency` | `CUKY(5)` | Dev Cost Currency |
| `ColltrlRELandCostBaseMeasure` | `CHAR(1)` | Base measure of Land |
| `ColltrlREDevCostBaseMeasure` | `CHAR(1)` | Base measure of Land |
| `ColltrlREAddlLandCostAmount` | `CURR(17)` | Additional Land Cost Amount |
| `ColltrlREAddlLandCostCurrency` | `CUKY(5)` | Additional Land Cost Currency |
| `ColltrlREAddlLandCostBaseMsr` | `CHAR(1)` | Base measure of Land |
| `ColltrlRECnstrctnCostAmount` | `CURR(17)` | Construction Cost |
| `ColltrlRECnstrctnCostCurrency` | `CUKY(5)` | Construction cost currency |
| `ColltrlRECnstrctnCostBaseMsr` | `CHAR(1)` | Base Measure |
| `ColltrlREYrlyGrssProfitAmt` | `CURR(17)` | Yearly Gross Profit |
| `ColltrlREYrlyGrssProfitCrcy` | `CUKY(5)` | Yearly Gross Profit Currency |
