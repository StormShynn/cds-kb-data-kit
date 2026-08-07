---
name: I_FUNCTIONALLOCATIONTP
description: Functionallocationtp
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - transactional-processing
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_FUNCTIONALLOCATIONTP

**Functionallocationtp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FunctionalLocation` | ✓ | |  |  |
| `FunctionalLocationLabelName` |  | |  |  |
| `FunctionalLocationName` |  | |  |  |
| `FuncLocationStructure` |  | |  |  |
| `FunctionalLocationCategory` |  | |  |  |
| `SuperiorFunctionalLocation` |  | |  |  |
| `SuperiorFuncnlLocLabelName` |  | |  |  |
| `TechnicalObjectType` |  | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `GrossWeight` |  | |  |  |
| `GrossWeightUnit` |  | |  |  |
| `OperationStartDate` |  | |  |  |
| `InventoryNumber` |  | |  |  |
| `AcquisitionValue` |  | |  |  |
| `Currency` |  | |  |  |
| `AcquisitionDate` |  | |  |  |
| `AssetManufacturerName` |  | |  |  |
| `ManufacturerPartNmbr` |  | |  |  |
| `ManufacturerCountry` |  | |  |  |
| `ManufacturerPartTypeName` |  | |  |  |
| `ConstructionMonth` |  | |  |  |
| `ConstructionYear` |  | |  |  |
| `ManufacturerSerialNumber` |  | |  |  |
| `MaintenancePlant` |  | |  |  |
| `AssetLocation` |  | |  |  |
| `AssetRoom` |  | |  |  |
| `PlantSection` |  | |  |  |
| `WorkCenter` |  | |  |  |
| `WorkCenterInternalID` |  | |  |  |
| `WorkCenterPlant` |  | |  |  |
| `ABCIndicator` |  | |  |  |
| `MaintObjectFreeDefinedAttrib` |  | |  |  |
| `AddressID` |  | |  |  |
| `FormOfAddress` |  | |  |  |
| `BusinessPartnerName1` |  | |  |  |
| `BusinessPartnerName2` |  | |  |  |
| `CityName` |  | |  |  |
| `HouseNumber` |  | |  |  |
| `HouseNumberSupplementText` |  | |  |  |
| `Building` |  | |  |  |
| `Floor` |  | |  |  |
| `RoomNumber` |  | |  |  |
| `PostalCode` |  | |  |  |
| `StreetName` |  | |  |  |
| `Region` |  | |  |  |
| `Country` |  | |  |  |
| `PhoneNumber` |  | |  |  |
| `FaxNumber` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `MasterFixedAsset` |  | |  |  |
| `FixedAsset` |  | |  |  |
| `CostCenter` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `WBSElementExternalID` |  | |  |  |
| `SettlementOrder` |  | |  |  |
| `ConstructionMaterial` |  | |  |  |
| `MaintenancePlannerGroup` |  | |  |  |
| `MaintenancePlanningPlant` |  | |  |  |
| `MainWorkCenterPlant` |  | |  |  |
| `MainWorkCenter` |  | |  |  |
| `MainWorkCenterInternalID` |  | |  |  |
| `CatalogProfile` |  | |  |  |
| `EquipmentInstallationIsAllowed` |  | |  |  |
| `OnePieceOfEquipmentIsAllowed` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `FunctionalLocationHasEquipment` |  | |  |  |
| `FuncnlLocHasSubOrdinateFuncLoc` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `FuncnlLocIsMarkedForDeletion` |  | |  |  |
| `FuncnlLocIsDeleted` |  | |  |  |
| `FunctionalLocationIsActive` |  | |  |  |
| `FuncnlLocIsDeactivated` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `_Partner` | | ✓ | | |
| `_LongText` | | ✓ | | |
| `_Classification` | | ✓ | | |
| `_Warranty` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Functional Location - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
 @ObjectModel.sapObjectNodeType.name: 'FunctionalLocation'
define root view entity I_FunctionalLocationTP provider contract transactional_interface
  as projection on R_FunctionalLocationTP as FuncLocTP {
  
  key FunctionalLocation,

      FunctionalLocationLabelName,

      FunctionalLocationName,

      FuncLocationStructure,

      FunctionalLocationCategory,

      SuperiorFunctionalLocation,

      SuperiorFuncnlLocLabelName,

      TechnicalObjectType,

      AuthorizationGroup,

      @Semantics.quantity.unitOfMeasure: 'GrossWeightUnit'
      GrossWeight,

      
      GrossWeightUnit,

      OperationStartDate,

      InventoryNumber,

      @Semantics.amount.currencyCode: 'Currency'
      AcquisitionValue,

      
      Currency,

      AcquisitionDate,

      AssetManufacturerName,

      ManufacturerPartNmbr,

      ManufacturerCountry,

      ManufacturerPartTypeName,

      ConstructionMonth,

      ConstructionYear,

      ManufacturerSerialNumber,

      MaintenancePlant,

      AssetLocation,

      AssetRoom,

      PlantSection,

      WorkCenter,

      WorkCenterInternalID,

      WorkCenterPlant,

      ABCIndicator,

      MaintObjectFreeDefinedAttrib,

      @Consumption: { hidden: true }
      AddressID,

      FormOfAddress, // new field 2108

      BusinessPartnerName1,

      BusinessPartnerName2, //new field 2108

      CityName,

      HouseNumber,

      HouseNumberSupplementText, //new field 2108

      Building, // new field 2108

      Floor, // new field 2108

      RoomNumber, //new field 2108

      PostalCode,

      StreetName,

      Region,

      Country,

      PhoneNumber,

      FaxNumber,

      CompanyCode,

      BusinessArea,

      MasterFixedAsset,

      FixedAsset,

      CostCenter,

      ControllingArea,

      WBSElementExternalID,

      SettlementOrder,

      ConstructionMaterial,

      MaintenancePlannerGroup,

      MaintenancePlanningPlant,

      MainWorkCenterPlant,

      MainWorkCenter,

      MainWorkCenterInternalID,

      CatalogProfile,

      EquipmentInstallationIsAllowed,

      OnePieceOfEquipmentIsAllowed,

      SalesOrganization,

      DistributionChannel,

      SalesOffice,

      OrganizationDivision,

      SalesGroup,

      @Semantics.booleanIndicator: true
      FunctionalLocationHasEquipment,
      
      @Semantics.booleanIndicator: true
      FuncnlLocHasSubOrdinateFuncLoc,

      LastChangeDateTime,

      FuncnlLocIsMarkedForDeletion,

      FuncnlLocIsDeleted,

      FunctionalLocationIsActive,

      FuncnlLocIsDeactivated,

      //ADMIN DATA
      CreatedByUser, //new admin field 2111

      CreationDate, //new admin field 2111

      LastChangedByUser, //new admin field 2111


      _Partner        : redirected to composition child I_FunctionalLocationPartnerTP,

      _LongText       : redirected to composition child I_FunctionalLocationLongTextTP,

     _Classification : redirected to composition child I_FuncnlLocClfnClassTP,

      _Warranty       : redirected to composition child I_FuncnlLocWarrantyAssgmtTP
  
  
}
```
