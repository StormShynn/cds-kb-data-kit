---
name: I_SHIPOBJECTDATA
description: "Ship Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTDATA')/$value
semantic_en: "Ship Object Details"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_SHIPOBJECTDATA

**Ship Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShipObjectUUID` |  | |  |  | `RAW(16)` | Globally Unique Identifier |
| `ObjectAssetUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_AST |
| `ShipObjectType` |  | |  |  | `CHAR(6)` | Ship Type |
| `ShipObjectName` |  | |  |  | `CHAR(40)` | Ship name |
| `ShipObjectCharteredName` |  | |  |  | `CHAR(40)` | Charter Name used to Lease the Ship |
| `ShipObjectIntlMaritimeOrgNmbr` |  | |  |  | `CHAR(20)` | IMO Number |
| `ShipObjectClass` |  | |  |  | `CHAR(2)` | Specifies whether the Ship is Sea Ship or Inland Ship |
| `ShipObjectRegistrationNumber` |  | |  |  | `CHAR(20)` | Registration Number |
| `ShipObjectRegistrationDate` |  | |  |  | `DATS(8)` | Registration date |
| `ShipObjectRegistrationPlace` |  | |  |  | `CHAR(40)` | Registration place |
| `ShipObjectRegistrationCountry` |  | |  |  | `CHAR(3)` | Registration Country/Region |
| `ShipObjectExternalRefNumber` |  | |  |  | `CHAR(40)` | External reference ID for the Ship |
| `ShipObjectFleetName` |  | |  |  | `CHAR(40)` | Fleet Name |
| `ShipObjectID` |  | |  |  | `CHAR(40)` | Ship ID |
| `ShipObjIntlSftyMgmtValdFrmDte` |  | |  |  | `DATS(8)` | Date from which ISM Certificate Stands Valid |
| `ShipObjIntlSftyMgmtValdToDte` |  | |  |  | `DATS(8)` | Date until which ISM Certificate Stands Valid |
| `ShipObjectRatingDate` |  | |  |  | `DATS(8)` | Rating date |
| `ShipObjectRatingClass` |  | |  |  | `CHAR(20)` | Rating Class |
| `ShipObjectClassification` |  | |  |  | `CHAR(40)` | Classification of a Ship |
| `ShipObjCompanyClassification` |  | |  |  | `CHAR(6)` | Classification Company |
| `ShipObjectDescription` |  | |  |  | `CHAR(40)` | Description |
| `ShipObjectPurchaseAmount` |  | |  |  | `CURR(17)` | Purchase Price |
| `ShipObjectPurchaseCurrency` |  | |  |  | `CUKY(5)` | Currency for purchase price |
| `ShipObjectPurchaseDate` |  | |  |  | `DATS(8)` | Purchase date |
| `ShipObjectConstructionCountry` |  | |  |  | `CHAR(3)` | Country/Region where the Ship was Built |
| `ShipObjectConstructionAmount` |  | |  |  | `CURR(17)` | Cost incurred in Building the Ship |
| `ShipObjectConstructionCurrency` |  | |  |  | `CUKY(5)` | Currency for construction price |
| `ShipObjectDeliveryDate` |  | |  |  | `DATS(8)` | Date of Delivery of the ship |
| `ShipObjectBuiltShipyard` |  | |  |  | `CHAR(40)` | Shipyard  where the Ship was Built |
| `ShipObjectLength` |  | |  |  | `QUAN(13)` | Ship length |
| `ShipObjectLengthUnitMeasure` |  | |  |  | `UNIT(3)` | Unit of measure for the ship length |
| `ShipObjectBreadthQty` |  | |  |  | `QUAN(13)` | Ship Beam |
| `ShipObjectBreadthUnitMeasure` |  | |  |  | `UNIT(3)` | Unit of measure for the breadth |
| `ShipObjectDepthQty` |  | |  |  | `QUAN(13)` | Ship Draught |
| `ShipObjectDepthUnitMeasure` |  | |  |  | `UNIT(3)` | Unit of measure for the depth |
| `ShipObjectVolume` |  | |  |  | `QUAN(13)` | Volume of Ship |
| `ShipObjectVolumeUnitMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure for the Ship Volume |
| `ShipObjDeadWgtCarryingCapacity` |  | |  |  | `QUAN(13)` | Weight of the Ship excluding the weight of Cargo |
| `ShipObjDeadWgtCarryCapUnitMsr` |  | |  |  | `UNIT(3)` | Unit of measure for the dead weight tonnage |
| `ShipObjectGrossTonnageQuantity` |  | |  |  | `QUAN(13)` | Volume of the Interiors of a Ship |
| `ShipObjectGrossTonnageUnitMsr` |  | |  |  | `UNIT(3)` | Unit of measure for the gross tonnage |
| `ShipObjectTrackLength` |  | |  |  | `QUAN(13)` | Length of the Track in a Ship |
| `ShipObjectTrackLengthUnitMsr` |  | |  |  | `UNIT(3)` | Unit of Measure for the Track Length in a Ship |
| `ShipObjNrOfRefrigeratedCtns` |  | |  |  | `DEC(10)` | Number of refrigerated containers |
| `ShipObjNrOfCapacityContainers` |  | |  |  | `DEC(10)` | Container Capacity |
| `ShipObjectNumberOfCabinRooms` |  | |  |  | `DEC(10)` | Number of Cabin Rooms |
| `ShipObjectNumberOfParking` |  | |  |  | `DEC(10)` | Number of Parking Units in the Vehicle Parking Bay |
| `ShipObjectNumberOfPassenger` |  | |  |  | `DEC(10)` | Passenger Capacity of the Ship |
| `ShipObjOversizeCtnIsAllowed` |  | |  |  | `CHAR(1)` | Indicator for Oversize Container Transportable in the Ship |
| `ShipObjectHullType` |  | |  |  | `CHAR(6)` | Hull Type |
| `ShipObjectMachineMfrName` |  | |  |  | `CHAR(40)` | Manufacturer of the Machine |
| `ShipObjectMachineModelName` |  | |  |  | `CHAR(40)` | Name of the Engine Model |
| `ShipObjectNumberOfMainMachines` |  | |  |  | `DEC(10)` | Number of Main Machines Fitted in the Ship |
| `ShipObjectCraneEquipment` |  | |  |  | `CHAR(40)` | Crane Equipment fitted in the Ship |
| `ShipObjectEnginePowerQty` |  | |  |  | `QUAN(13)` | Engine power |
| `ShipObjectEnginePowerUnitMsr` |  | |  |  | `UNIT(3)` | Unit of measure for the horse power |
| `ShipObjectSpeedQty` |  | |  |  | `QUAN(13)` | Speed |
| `ShipObjectSpeedUnitMeasure` |  | |  |  | `UNIT(3)` | Unit of measure for the speed |
| `ShipObjectFuelConsumptionQty` |  | |  |  | `QUAN(13)` | Fuel Consumption |
| `ShipObjFuelConsumptionUnitMsr` |  | |  |  | `UNIT(3)` | Unit of measure for the fuel consumption |
| `ShipObjectInsurancePremiumAmt` |  | |  |  | `CURR(17)` | Insurance Premium |
| `ShipObjectInsurancePremiumCrcy` |  | |  |  | `CUKY(5)` | Currency for insurance premium |
| `ShipObjectInsuranceType` |  | |  |  | `CHAR(6)` | Insurance Type |
| `ShipObjAnnualDepreciationPct` |  | |  |  | `DEC(10)` | Annual depreciation in percentage |
| `ShipObjectInsuranceExpiryDate` |  | |  |  | `DATS(8)` | Date of Expiry of the Insurance Policy |
| `ShipObjectInsurancePolicyAmt` |  | |  |  | `CURR(17)` | Insurance Policy Amount |
| `ShipObjectInsurancePolicyCrcy` |  | |  |  | `CUKY(5)` | Insurance Policy Amount Currency |
| `ShipObjRqdInsuranceCoverAmt` |  | |  |  | `CURR(17)` | Required Amount of Insurance Cover |
| `ShipObjRqdInsuranceCoverCrcy` |  | |  |  | `CUKY(5)` | Required Insurance Cover Currency |
| `ShipObjectInsurer` |  | |  |  | `CHAR(6)` | Insurer |
| `ShipObjectInsuranceContactFirm` |  | |  |  | `CHAR(40)` | Contact Firm |
| `ShipObjInsuranceContactPerson` |  | |  |  | `CHAR(40)` | Contact Person |
| `CollateralAdminOrgUnit` |  | |  |  | `CHAR(12)` | Administration Organizational Unit |
| `ShipObjectEnteredDateTime` |  | |  |  | `DEC(15)` | Creation Timestamp |
| `ShipObjectLastChangedDateTime` |  | |  |  | `DEC(15)` | Change Timestamp |
