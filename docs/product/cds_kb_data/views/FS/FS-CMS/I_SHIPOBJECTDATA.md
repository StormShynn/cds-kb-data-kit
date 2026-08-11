---
name: I_SHIPOBJECTDATA
description: "Ship Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTDATA')/$value
semantic_en: "Ship Object Details"
semantic_vi: "Ship Object Details — CDS view giao diện dựa trên cms_shp."
keywords:
  - "ship"
  - "object"
  - "details"
  - "asset"
  - "type"
  - "name"
  - "chartered"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_SHIPOBJECTDATA

**Ship Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShipObjectUUID` | ✓ | |  | `shp_guid` | `RAW(16)` | Globally Unique Identifier |
| `ObjectAssetUUID` |  | |  | `ast_guid` | `RAW(16)` | GUID for Table CMS_AST |
| `ShipObjectType` |  | |  | `shp_type` | `CHAR(6)` | Ship Type |
| `ShipObjectName` |  | |  | `name` | `CHAR(40)` | Ship name |
| `ShipObjectCharteredName` |  | |  | `charter_name` | `CHAR(40)` | Charter Name used to Lease the Ship |
| `ShipObjectIntlMaritimeOrgNmbr` |  | |  | `call_sign` | `CHAR(20)` | IMO Number |
| `ShipObjectClass` |  | |  | `shp_class` | `CHAR(2)` | Specifies whether the Ship is Sea Ship or Inland Ship |
| `ShipObjectRegistrationNumber` |  | |  | `reg_number` | `CHAR(20)` | Registration Number |
| `ShipObjectRegistrationDate` |  | |  | `reg_date` | `DATS(8)` | Registration date |
| `ShipObjectRegistrationPlace` |  | |  | `reg_place` | `CHAR(40)` | Registration place |
| `ShipObjectRegistrationCountry` |  | |  | `reg_country` | `CHAR(3)` | Registration Country/Region |
| `ShipObjectExternalRefNumber` |  | |  | `extn_ref_id` | `CHAR(40)` | External reference ID for the Ship |
| `ShipObjectFleetName` |  | |  | `fleet_name` | `CHAR(40)` | Fleet Name |
| `ShipObjectID` |  | |  | `ship_id` | `CHAR(40)` | Ship ID |
| `ShipObjIntlSftyMgmtValdFrmDte` |  | |  | `ism_valid_from` | `DATS(8)` | Date from which ISM Certificate Stands Valid |
| `ShipObjIntlSftyMgmtValdToDte` |  | |  | `ism_valid_to` | `DATS(8)` | Date until which ISM Certificate Stands Valid |
| `ShipObjectRatingDate` |  | |  | `rating_date` | `DATS(8)` | Rating date |
| `ShipObjectRatingClass` |  | |  | `rating_cls` | `CHAR(20)` | Rating Class |
| `ShipObjectClassification` |  | |  | `classification` | `CHAR(40)` | Classification of a Ship |
| `ShipObjCompanyClassification` |  | |  | `classifi_company` | `CHAR(6)` | Classification Company |
| `ShipObjectDescription` |  | |  | `comments` | `CHAR(40)` | Description |
| `ShipObjectPurchaseAmount` |  | |  | `purch_price` | `CURR(17)` | Purchase Price |
| `ShipObjectPurchaseCurrency` |  | |  | `purch_curr` | `CUKY(5)` | Currency for purchase price |
| `ShipObjectPurchaseDate` |  | |  | `purch_price_date` | `DATS(8)` | Purchase date |
| `ShipObjectConstructionCountry` |  | |  | `cons_country` | `CHAR(3)` | Country/Region where the Ship was Built |
| `ShipObjectConstructionAmount` |  | |  | `cons_price` | `CURR(17)` | Cost incurred in Building the Ship |
| `ShipObjectConstructionCurrency` |  | |  | `cons_curr` | `CUKY(5)` | Currency for construction price |
| `ShipObjectDeliveryDate` |  | |  | `delivery_date` | `DATS(8)` | Date of Delivery of the ship |
| `ShipObjectBuiltShipyard` |  | |  | `dock` | `CHAR(40)` | Shipyard  where the Ship was Built |
| `ShipObjectLength` |  | |  | `length` | `QUAN(13)` | Ship length |
| `ShipObjectLengthUnitMeasure` |  | |  | `length_uom` | `UNIT(3)` | Unit of measure for the ship length |
| `ShipObjectBreadthQty` |  | |  | `breadth` | `QUAN(13)` | Ship Beam |
| `ShipObjectBreadthUnitMeasure` |  | |  | `breadth_uom` | `UNIT(3)` | Unit of measure for the breadth |
| `ShipObjectDepthQty` |  | |  | `depth` | `QUAN(13)` | Ship Draught |
| `ShipObjectDepthUnitMeasure` |  | |  | `depth_uom` | `UNIT(3)` | Unit of measure for the depth |
| `ShipObjectVolume` |  | |  | `volume` | `QUAN(13)` | Volume of Ship |
| `ShipObjectVolumeUnitMeasure` |  | |  | `volume_uom` | `UNIT(3)` | Unit of Measure for the Ship Volume |
| `ShipObjDeadWgtCarryingCapacity` |  | |  | `dwt` | `QUAN(13)` | Weight of the Ship excluding the weight of Cargo |
| `ShipObjDeadWgtCarryCapUnitMsr` |  | |  | `dwt_uom` | `UNIT(3)` | Unit of measure for the dead weight tonnage |
| `ShipObjectGrossTonnageQuantity` |  | |  | `grosst` | `QUAN(13)` | Volume of the Interiors of a Ship |
| `ShipObjectGrossTonnageUnitMsr` |  | |  | `grosst_uom` | `UNIT(3)` | Unit of measure for the gross tonnage |
| `ShipObjectTrackLength` |  | |  | `track_length` | `QUAN(13)` | Length of the Track in a Ship |
| `ShipObjectTrackLengthUnitMsr` |  | |  | `track_length_uom` | `UNIT(3)` | Unit of Measure for the Track Length in a Ship |
| `ShipObjNrOfRefrigeratedCtns` |  | |  | `num_ref_cont` | `DEC(10)` | Number of refrigerated containers |
| `ShipObjNrOfCapacityContainers` |  | |  | `num_cont_cap` | `DEC(10)` | Container Capacity |
| `ShipObjectNumberOfCabinRooms` |  | |  | `num_cabin_room` | `DEC(10)` | Number of Cabin Rooms |
| `ShipObjectNumberOfParking` |  | |  | `num_veh_park` | `DEC(10)` | Number of Parking Units in the Vehicle Parking Bay |
| `ShipObjectNumberOfPassenger` |  | |  | `num_of_pax` | `DEC(10)` | Passenger Capacity of the Ship |
| `ShipObjOversizeCtnIsAllowed` |  | |  | `isovr_container` | `CHAR(1)` | Indicator for Oversize Container Transportable in the Ship |
| `ShipObjectHullType` |  | |  | `hull_typ` | `CHAR(6)` | Hull Type |
| `ShipObjectMachineMfrName` |  | |  | `manufr_machine` | `CHAR(40)` | Manufacturer of the Machine |
| `ShipObjectMachineModelName` |  | |  | `machine_typ` | `CHAR(40)` | Name of the Engine Model |
| `ShipObjectNumberOfMainMachines` |  | |  | `num_machines` | `DEC(10)` | Number of Main Machines Fitted in the Ship |
| `ShipObjectCraneEquipment` |  | |  | `crane_equip` | `CHAR(40)` | Crane Equipment fitted in the Ship |
| `ShipObjectEnginePowerQty` |  | |  | `power` | `QUAN(13)` | Engine power |
| `ShipObjectEnginePowerUnitMsr` |  | |  | `power_uom` | `UNIT(3)` | Unit of measure for the horse power |
| `ShipObjectSpeedQty` |  | |  | `speed` | `QUAN(13)` | Speed |
| `ShipObjectSpeedUnitMeasure` |  | |  | `speed_uom` | `UNIT(3)` | Unit of measure for the speed |
| `ShipObjectFuelConsumptionQty` |  | |  | `fuel_consum` | `QUAN(13)` | Fuel Consumption |
| `ShipObjFuelConsumptionUnitMsr` |  | |  | `fuel_consum_uom` | `UNIT(3)` | Unit of measure for the fuel consumption |
| `ShipObjectInsurancePremiumAmt` |  | |  | `insur_premium` | `CURR(17)` | Insurance Premium |
| `ShipObjectInsurancePremiumCrcy` |  | |  | `insur_pre_curr` | `CUKY(5)` | Currency for insurance premium |
| `ShipObjectInsuranceType` |  | |  | `insur_type` | `CHAR(6)` | Insurance Type |
| `ShipObjAnnualDepreciationPct` |  | |  | `annual_dep` | `DEC(10)` | Annual depreciation in percentage |
| `ShipObjectInsuranceExpiryDate` |  | |  | `insur_valid_till` | `DATS(8)` | Date of Expiry of the Insurance Policy |
| `ShipObjectInsurancePolicyAmt` |  | |  | `policy_amount` | `CURR(17)` | Insurance Policy Amount |
| `ShipObjectInsurancePolicyCrcy` |  | |  | `policy_curr` | `CUKY(5)` | Insurance Policy Amount Currency |
| `ShipObjRqdInsuranceCoverAmt` |  | |  | `reqd_insur_cover` | `CURR(17)` | Required Amount of Insurance Cover |
| `ShipObjRqdInsuranceCoverCrcy` |  | |  | `reqd_insur_curr` | `CUKY(5)` | Required Insurance Cover Currency |
| `ShipObjectInsurer` |  | |  | `insurer` | `CHAR(6)` | Insurer |
| `ShipObjectInsuranceContactFirm` |  | |  | `contact_firm` | `CHAR(40)` | Contact Firm |
| `ShipObjInsuranceContactPerson` |  | |  | `contact_person` | `CHAR(40)` | Contact Person |
| `CollateralAdminOrgUnit` |  | |  | `admin_org_unit` | `CHAR(12)` | Administration Organizational Unit |
| `ShipObjectEnteredDateTime` |  | |  | `created_at` | `DEC(15)` | Creation Timestamp |
| `ShipObjectLastChangedDateTime` |  | |  | `changed_at` | `DEC(15)` | Change Timestamp |
| `_ObjectAssetData` | | ✓ | | | | |
| `_ObjectAssetPartner` | | ✓ | | | | |
| `_ObjectAssetDocument` | | ✓ | | | | |
| `_ObjectValuationLinkData` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_ObjectInsuranceLinkData` | | ✓ | | | | |
| `_LiquidationData` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_ShipObjectType` | | ✓ | | | | |
| `_ShipObjectClass` | | ✓ | | | | |
| `_CollateralAdminOrgUnitAttrib` | | ✓ | | | | |
| `_ShipObjCompanyClassification` | | ✓ | | | | |
| `_ShipObjectHullType` | | ✓ | | | | |
| `_ShipObjectInsuranceType` | | ✓ | | | | |
| `_ShipObjectInsurer` | | ✓ | | | | |
| `_ShipObjectPurchaseCurrency` | | ✓ | | | | |
| `_ShipObjectConstructionCrcy` | | ✓ | | | | |
| `_ShipObjInsurancePremiumCrcy` | | ✓ | | | | |
| `_ShipObjRqdInsuranceCoverCrcy` | | ✓ | | | | |
| `_ShipObjectInsurancePolicyCrcy` | | ✓ | | | | |
| `_ShipObjectRegistrationCountry` | | ✓ | | | | |
| `_ShipObjectConstructionCountry` | | ✓ | | | | |
| `_ShipObjectLengthUnitMeasure` | | ✓ | | | | |
| `_ShipObjectBreadthUnitMeasure` | | ✓ | | | | |
| `_ShipObjectDepthUnitMeasure` | | ✓ | | | | |
| `_ShipObjectVolumeUnitMeasure` | | ✓ | | | | |
| `_ShipObjDeadWgtCarryCapUnitMsr` | | ✓ | | | | |
| `_ShipObjectGrossTonnageUnitMsr` | | ✓ | | | | |
| `_ShipObjectTrackLengthUnitMsr` | | ✓ | | | | |
| `_ShipObjectEnginePowerUnitMsr` | | ✓ | | | | |
| `_ShipObjectSpeedUnitMeasure` | | ✓ | | | | |
| `_ShipObjFuelConsumptionUnitMsr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..1] |
| `_ObjectAssetPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_ObjectAssetDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_ObjectValuationLinkData` | `I_ObjectValuationLinkData` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_ObjectInsuranceLinkData` | `I_ObjectInsuranceLinkData` | [0..*] |
| `_LiquidationData` | `I_LiquidationData` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..1] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_ShipObjectType` | `I_ShipObjectType` | [0..1] |
| `_ShipObjectClass` | `I_ShipObjectClass` | [0..1] |
| `_CollateralAdminOrgUnitAttrib` | `I_CollateralAdminOrgUnitAttrib` | [0..1] |
| `_ShipObjCompanyClassification` | `I_CollateralAttributeIndType` | [0..1] |
| `_ShipObjectHullType` | `I_CollateralAttributeIndType` | [0..1] |
| `_ShipObjectInsuranceType` | `I_CollateralAttributeIndType` | [0..1] |
| `_ShipObjectInsurer` | `I_CollateralAttributeIndType` | [0..1] |
| `_ShipObjectPurchaseCurrency` | `I_Currency` | [0..1] |
| `_ShipObjectConstructionCrcy` | `I_Currency` | [0..1] |
| `_ShipObjInsurancePremiumCrcy` | `I_Currency` | [0..1] |
| `_ShipObjRqdInsuranceCoverCrcy` | `I_Currency` | [0..1] |
| `_ShipObjectInsurancePolicyCrcy` | `I_Currency` | [0..1] |
| `_ShipObjectRegistrationCountry` | `I_Country` | [0..1] |
| `_ShipObjectConstructionCountry` | `I_Country` | [0..1] |
| `_ShipObjectLengthUnitMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjectBreadthUnitMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjectDepthUnitMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjectVolumeUnitMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjDeadWgtCarryCapUnitMsr` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjectGrossTonnageUnitMsr` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjectTrackLengthUnitMsr` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjectEnginePowerUnitMsr` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjectSpeedUnitMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ShipObjFuelConsumptionUnitMsr` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ISHIPOBJDATA',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ShipObjectUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
      enabled: true,
        delta.changeDataCapture: {
        mapping: [ {
           table : 'CMS_SHP',
           role : #MAIN,
           viewElement : ['ShipObjectUUID'],
           tableElement : ['SHP_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Ship Object Details'
define view I_ShipObjectData
  as select from cms_shp
  association [0..1] to I_ObjectAssetData              as _ObjectAssetData               on  $projection.ObjectAssetUUID = _ObjectAssetData.ObjectAssetUUID
  association [0..*] to I_ObjectAssetPartner           as _ObjectAssetPartner            on  $projection.ObjectAssetUUID = _ObjectAssetPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument          as _ObjectAssetDocument           on  $projection.ObjectAssetUUID = _ObjectAssetDocument.ObjectAssetUUID
  association [0..*] to I_ObjectValuationLinkData      as _ObjectValuationLinkData       on  $projection.ShipObjectUUID = _ObjectValuationLinkData.ObjectValuationLinkUUID
  association [0..*] to I_AssetAgreementLinkData       as _AssetAgreementLinkData        on  $projection.ObjectAssetUUID = _AssetAgreementLinkData.ObjectAssetUUID
  association [0..*] to I_ObjectInsuranceLinkData      as _ObjectInsuranceLinkData       on  $projection.ShipObjectUUID = _ObjectInsuranceLinkData.ObjectReferenceUUID
  association [0..*] to I_LiquidationData              as _LiquidationData               on  $projection.ShipObjectUUID = _LiquidationData.ObjectReferenceUUID
  association [0..1] to I_CollateralObjectCalcData     as _CollateralObjectCalcData      on  $projection.ObjectAssetUUID                    = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                         and _CollateralObjectCalcData.CollateralObjectType = 'AST'
  association [0..*] to I_AgreementAssetCalcData       as _AgreementAssetCalcData        on  $projection.ObjectAssetUUID = _AgreementAssetCalcData.ObjectAssetUUID
  association [0..1] to I_ShipObjectType               as _ShipObjectType                on  $projection.ShipObjectType = _ShipObjectType.ShipObjectType
  association [0..1] to I_ShipObjectClass              as _ShipObjectClass               on  $projection.ShipObjectClass = _ShipObjectClass.ShipObjectClass
  association [0..1] to I_CollateralAdminOrgUnitAttrib as _CollateralAdminOrgUnitAttrib  on  $projection.CollateralAdminOrgUnit = _CollateralAdminOrgUnitAttrib.CollateralAdminOrgUnit
  association [0..1] to I_CollateralAttributeIndType   as _ShipObjCompanyClassification  on  $projection.ShipObjCompanyClassification                = _ShipObjCompanyClassification.CollateralAttributeIndType
                                                                                         and _ShipObjCompanyClassification.CollateralAttributeIndCat = 'SHP002'
  association [0..1] to I_CollateralAttributeIndType   as _ShipObjectHullType            on  $projection.ShipObjectHullType                = _ShipObjectHullType.CollateralAttributeIndType
                                                                                         and _ShipObjectHullType.CollateralAttributeIndCat = 'SHP001'
  association [0..1] to I_CollateralAttributeIndType   as _ShipObjectInsuranceType       on  $projection.ShipObjectInsuranceType                = _ShipObjectInsuranceType.CollateralAttributeIndType
                                                                                         and _ShipObjectInsuranceType.CollateralAttributeIndCat = 'SHP003'
  association [0..1] to I_CollateralAttributeIndType   as _ShipObjectInsurer             on  $projection.ShipObjectInsurer                = _ShipObjectInsurer.CollateralAttributeIndType
                                                                                         and _ShipObjectInsurer.CollateralAttributeIndCat = 'SHP004'
  association [0..1] to I_Currency                     as _ShipObjectPurchaseCurrency    on  $projection.ShipObjectPurchaseCurrency = _ShipObjectPurchaseCurrency.Currency
  association [0..1] to I_Currency                     as _ShipObjectConstructionCrcy    on  $projection.ShipObjectConstructionCurrency = _ShipObjectConstructionCrcy.Currency
  association [0..1] to I_Currency                     as _ShipObjInsurancePremiumCrcy   on  $projection.ShipObjectInsurancePremiumCrcy = _ShipObjInsurancePremiumCrcy.Currency
  association [0..1] to I_Currency                     as _ShipObjRqdInsuranceCoverCrcy  on  $projection.ShipObjRqdInsuranceCoverCrcy = _ShipObjRqdInsuranceCoverCrcy.Currency
  association [0..1] to I_Currency                     as _ShipObjectInsurancePolicyCrcy on  $projection.ShipObjectInsurancePolicyCrcy = _ShipObjectInsurancePolicyCrcy.Currency
  association [0..1] to I_Country                      as _ShipObjectRegistrationCountry on  $projection.ShipObjectRegistrationCountry = _ShipObjectRegistrationCountry.Country
  association [0..1] to I_Country                      as _ShipObjectConstructionCountry on  $projection.ShipObjectConstructionCountry = _ShipObjectConstructionCountry.Country
  association [0..1] to I_UnitOfMeasure                as _ShipObjectLengthUnitMeasure   on  $projection.ShipObjectLengthUnitMeasure = _ShipObjectLengthUnitMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjectBreadthUnitMeasure  on  $projection.ShipObjectBreadthUnitMeasure = _ShipObjectBreadthUnitMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjectDepthUnitMeasure    on  $projection.ShipObjectDepthUnitMeasure = _ShipObjectDepthUnitMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjectVolumeUnitMeasure   on  $projection.ShipObjectVolumeUnitMeasure = _ShipObjectVolumeUnitMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjDeadWgtCarryCapUnitMsr on  $projection.ShipObjDeadWgtCarryCapUnitMsr = _ShipObjDeadWgtCarryCapUnitMsr.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjectGrossTonnageUnitMsr on  $projection.ShipObjectGrossTonnageUnitMsr = _ShipObjectGrossTonnageUnitMsr.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjectTrackLengthUnitMsr  on  $projection.ShipObjectTrackLengthUnitMsr = _ShipObjectTrackLengthUnitMsr.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjectEnginePowerUnitMsr  on  $projection.ShipObjectEnginePowerUnitMsr = _ShipObjectEnginePowerUnitMsr.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjectSpeedUnitMeasure    on  $projection.ShipObjectSpeedUnitMeasure = _ShipObjectSpeedUnitMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ShipObjFuelConsumptionUnitMsr on  $projection.ShipObjFuelConsumptionUnitMsr = _ShipObjFuelConsumptionUnitMsr.UnitOfMeasure

{
  key shp_guid         as ShipObjectUUID,
      ast_guid         as ObjectAssetUUID,
      @ObjectModel.foreignKey.association: '_ShipObjectType'
      shp_type         as ShipObjectType,
      name             as ShipObjectName,
      charter_name     as ShipObjectCharteredName,
      call_sign        as ShipObjectIntlMaritimeOrgNmbr,
      @ObjectModel.foreignKey.association: '_ShipObjectClass'
      shp_class        as ShipObjectClass,
      reg_number       as ShipObjectRegistrationNumber,
      reg_date         as ShipObjectRegistrationDate,
      reg_place        as ShipObjectRegistrationPlace,
      @ObjectModel.foreignKey.association: '_ShipObjectRegistrationCountry'
      reg_country      as ShipObjectRegistrationCountry,
      extn_ref_id      as ShipObjectExternalRefNumber,
      fleet_name       as ShipObjectFleetName,
      ship_id          as ShipObjectID,
      ism_valid_from   as ShipObjIntlSftyMgmtValdFrmDte,
      ism_valid_to     as ShipObjIntlSftyMgmtValdToDte,
      rating_date      as ShipObjectRatingDate,
      rating_cls       as ShipObjectRatingClass,
      classification   as ShipObjectClassification,
      @ObjectModel.foreignKey.association: '_ShipObjCompanyClassification'
      classifi_company as ShipObjCompanyClassification,
      comments         as ShipObjectDescription,
      @Semantics.amount.currencyCode: 'ShipObjectPurchaseCurrency'
      purch_price      as ShipObjectPurchaseAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ShipObjectPurchaseCurrency'
      purch_curr       as ShipObjectPurchaseCurrency,
      purch_price_date as ShipObjectPurchaseDate,
      @ObjectModel.foreignKey.association: '_ShipObjectConstructionCountry'
      cons_country     as ShipObjectConstructionCountry,
      @Semantics.amount.currencyCode: 'ShipObjectConstructionCurrency'
      cons_price       as ShipObjectConstructionAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ShipObjectConstructionCrcy'
      cons_curr        as ShipObjectConstructionCurrency,
      delivery_date    as ShipObjectDeliveryDate,
      dock             as ShipObjectBuiltShipyard,
      @Semantics.quantity.unitOfMeasure: 'ShipObjectLengthUnitMeasure'
      length           as ShipObjectLength,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjectLengthUnitMeasure'
      length_uom       as ShipObjectLengthUnitMeasure,
      @Semantics.quantity.unitOfMeasure: 'ShipObjectBreadthUnitMeasure'
      breadth          as ShipObjectBreadthQty,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjectBreadthUnitMeasure'
      breadth_uom      as ShipObjectBreadthUnitMeasure,
      @Semantics.quantity.unitOfMeasure: 'ShipObjectDepthUnitMeasure'
      depth            as ShipObjectDepthQty,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjectDepthUnitMeasure'
      depth_uom        as ShipObjectDepthUnitMeasure,
      @Semantics.quantity.unitOfMeasure: 'ShipObjectVolumeUnitMeasure'
      volume           as ShipObjectVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjectVolumeUnitMeasure'
      volume_uom       as ShipObjectVolumeUnitMeasure,
      @Semantics.quantity.unitOfMeasure: 'ShipObjDeadWgtCarryCapUnitMsr'
      dwt              as ShipObjDeadWgtCarryingCapacity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjDeadWgtCarryCapUnitMsr'
      dwt_uom          as ShipObjDeadWgtCarryCapUnitMsr,
      @Semantics.quantity.unitOfMeasure: 'ShipObjectGrossTonnageUnitMsr'
      grosst           as ShipObjectGrossTonnageQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjectGrossTonnageUnitMsr'
      grosst_uom       as ShipObjectGrossTonnageUnitMsr,
      @Semantics.quantity.unitOfMeasure: 'ShipObjectTrackLengthUnitMsr'
      track_length     as ShipObjectTrackLength,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjectTrackLengthUnitMsr'
      track_length_uom as ShipObjectTrackLengthUnitMsr,
      num_ref_cont     as ShipObjNrOfRefrigeratedCtns,
      num_cont_cap     as ShipObjNrOfCapacityContainers,
      num_cabin_room   as ShipObjectNumberOfCabinRooms,
      num_veh_park     as ShipObjectNumberOfParking,
      num_of_pax       as ShipObjectNumberOfPassenger,
      @Semantics.booleanIndicator: true
      isovr_container  as ShipObjOversizeCtnIsAllowed,
      @ObjectModel.foreignKey.association: '_ShipObjectHullType'
      hull_typ         as ShipObjectHullType,
      manufr_machine   as ShipObjectMachineMfrName,
      machine_typ      as ShipObjectMachineModelName,
      num_machines     as ShipObjectNumberOfMainMachines,
      crane_equip      as ShipObjectCraneEquipment,
      @Semantics.quantity.unitOfMeasure: 'ShipObjectEnginePowerUnitMsr'
      power            as ShipObjectEnginePowerQty,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjectEnginePowerUnitMsr'
      power_uom        as ShipObjectEnginePowerUnitMsr,
      @Semantics.quantity.unitOfMeasure: 'ShipObjectSpeedUnitMeasure'
      speed            as ShipObjectSpeedQty,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjectSpeedUnitMeasure'
      speed_uom        as ShipObjectSpeedUnitMeasure,
      @Semantics.quantity.unitOfMeasure: 'ShipObjFuelConsumptionUnitMsr'
      fuel_consum      as ShipObjectFuelConsumptionQty,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ShipObjFuelConsumptionUnitMsr'
      fuel_consum_uom  as ShipObjFuelConsumptionUnitMsr,
      @Semantics.amount.currencyCode: 'ShipObjectInsurancePremiumCrcy'
      insur_premium    as ShipObjectInsurancePremiumAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ShipObjInsurancePremiumCrcy'
      insur_pre_curr   as ShipObjectInsurancePremiumCrcy,
      @ObjectModel.foreignKey.association: '_ShipObjectInsuranceType'
      insur_type       as ShipObjectInsuranceType,
      annual_dep       as ShipObjAnnualDepreciationPct,
      insur_valid_till as ShipObjectInsuranceExpiryDate,
      @Semantics.amount.currencyCode: 'ShipObjectInsurancePolicyCrcy'
      policy_amount    as ShipObjectInsurancePolicyAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ShipObjectInsurancePolicyCrcy'
      policy_curr      as ShipObjectInsurancePolicyCrcy,
      @Semantics.amount.currencyCode: 'ShipObjRqdInsuranceCoverCrcy'
      reqd_insur_cover as ShipObjRqdInsuranceCoverAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ShipObjRqdInsuranceCoverCrcy'
      reqd_insur_curr  as ShipObjRqdInsuranceCoverCrcy,
      @ObjectModel.foreignKey.association: '_ShipObjectInsurer'
      insurer          as ShipObjectInsurer,
      contact_firm     as ShipObjectInsuranceContactFirm,
      contact_person   as ShipObjInsuranceContactPerson,
      admin_org_unit   as CollateralAdminOrgUnit,
      created_at       as ShipObjectEnteredDateTime,
      changed_at       as ShipObjectLastChangedDateTime,

      _ObjectAssetData,
      _ObjectAssetPartner,
      _ObjectAssetDocument,
      _ObjectValuationLinkData,
      _AssetAgreementLinkData,
      _ObjectInsuranceLinkData,
      _LiquidationData,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _ShipObjectType,
      _ShipObjectClass,
      _CollateralAdminOrgUnitAttrib,
      _ShipObjCompanyClassification,
      _ShipObjectInsuranceType,
      _ShipObjectHullType,
      _ShipObjectInsurer,
      _ShipObjectPurchaseCurrency,
      _ShipObjectConstructionCrcy,
      _ShipObjInsurancePremiumCrcy,
      _ShipObjRqdInsuranceCoverCrcy,
      _ShipObjectInsurancePolicyCrcy,
      _ShipObjectRegistrationCountry,
      _ShipObjectConstructionCountry,
      _ShipObjectLengthUnitMeasure,
      _ShipObjectBreadthUnitMeasure,
      _ShipObjectDepthUnitMeasure,
      _ShipObjectVolumeUnitMeasure,
      _ShipObjDeadWgtCarryCapUnitMsr,
      _ShipObjectGrossTonnageUnitMsr,
      _ShipObjectTrackLengthUnitMsr,
      _ShipObjectEnginePowerUnitMsr,
      _ShipObjectSpeedUnitMeasure,
      _ShipObjFuelConsumptionUnitMsr
}
```
