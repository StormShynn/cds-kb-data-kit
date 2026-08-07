---
name: I_EQUIPMENTTP
description: Equipmenttp
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
  - equipment
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENTTP

**Equipmenttp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Equipment` | ✓ | |  |  |
| `ValidityEndDate` | ✓ | |  |  |
| `ValidityEndTime` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `EquipmentName` |  | |  |  |
| `EquipmentCategory` |  | |  |  |
| `TechnicalObjectType` |  | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `GrossWeight` |  | |  |  |
| `GrossWeightUnit` |  | |  |  |
| `SizeOrDimensionText` |  | |  |  |
| `InventoryNumber` |  | |  |  |
| `OperationStartDate` |  | |  |  |
| `AcquisitionValue` |  | |  |  |
| `Currency` |  | |  |  |
| `AcquisitionDate` |  | |  |  |
| `AssetManufacturerName` |  | |  |  |
| `ManufacturerPartTypeName` |  | |  |  |
| `ManufacturerCountry` |  | |  |  |
| `ConstructionYear` |  | |  |  |
| `ConstructionMonth` |  | |  |  |
| `EquipmentManufacturerPrtNmbr` |  | |  |  |
| `ManufacturerSerialNumber` |  | |  |  |
| `MaintenancePlant` |  | |  |  |
| `AssetLocation` |  | |  |  |
| `AssetRoom` |  | |  |  |
| `PlantSection` |  | |  |  |
| `WorkCenter` |  | |  |  |
| `WorkCenterInternalID` |  | |  |  |
| `WorkCenterPlant` |  | |  |  |
| `WorkCenterTypeCode` |  | |  |  |
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
| `AddressFaxNumber` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `MasterFixedAsset` |  | |  |  |
| `FixedAsset` |  | |  |  |
| `CostCenter` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `WBSElementExternalID` |  | |  |  |
| `SettlementOrder` |  | |  |  |
| `MaintenancePlanningPlant` |  | |  |  |
| `MaintenancePlannerGroup` |  | |  |  |
| `MainWorkCenter` |  | |  |  |
| `MainWorkCenterInternalID` |  | |  |  |
| `MainWorkCenterPlant` |  | |  |  |
| `CatalogProfile` |  | |  |  |
| `FunctionalLocation` |  | |  |  |
| `FunctionalLocationLabelName` |  | |  |  |
| `FunctionalLocationName` |  | |  |  |
| `EquipInstallationPositionNmbr` |  | |  |  |
| `SuperordinateEquipment` |  | |  |  |
| `TechnicalObjectSortCode` |  | |  |  |
| `ConstructionMaterial` |  | |  |  |
| `Material` |  | |  |  |
| `SerialNumber` |  | |  |  |
| `UniqueItemIdentifier` |  | |  |  |
| `UniqueItemIdentifierStrucType` |  | |  |  |
| `UniqueItemIdentifierRespPlant` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `NextEquipUsagePeriodSqncNmbr` |  | |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  |
| `MaintObjectInternalID` |  | |  |  |
| `EquipUsagePeriodSequenceNumber` |  | |  |  |
| `EquipmentIsAtCustomer` |  | |  |  |
| `EquipmentIsAvailable` |  | |  |  |
| `EquipmentIsInWarehouse` |  | |  |  |
| `EquipmentIsAssignedToDelivery` |  | |  |  |
| `EquipmentIsMarkedForDeletion` |  | |  |  |
| `EquipmentIsInstalled` |  | |  |  |
| `EquipIsAllocToSuperiorEquip` |  | |  |  |
| `EquipmentIsInactive` |  | |  |  |
| `EquipHasSubOrdinateEquipment` |  | |  |  |
| `_Partner` | | ✓ | | |
| `_LongText` | | ✓ | | |
| `_Classification` | | ✓ | | |
| `_Warranty` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Equipment - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER
}

@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel.sapObjectNodeType.name: 'Equipment'
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

define root view entity I_EquipmentTP
  provider contract transactional_interface
  as projection on R_EquipmentTP as Equipment
{
  key Equipment,

      @Semantics.businessDate.to: true
  key ValidityEndDate,

      ValidityEndTime,

      @Semantics.businessDate.from: true
      ValidityStartDate,

      EquipmentName,

      EquipmentCategory,

      TechnicalObjectType,

      AuthorizationGroup,

      @Semantics.quantity.unitOfMeasure: 'GrossWeightUnit'
      GrossWeight,

      //      @Semantics.unitOfMeasure: true
      GrossWeightUnit,

      SizeOrDimensionText,

      InventoryNumber,

      OperationStartDate,

      //Reference Data
      @Semantics.amount.currencyCode: 'Currency'
      AcquisitionValue,

      //      @Semantics.currencyCode:true
      Currency,

      AcquisitionDate,

      //Manufacturer Data
      AssetManufacturerName,

      ManufacturerPartTypeName,

      ManufacturerCountry,

      ConstructionYear,

      ConstructionMonth,

      EquipmentManufacturerPrtNmbr,

      ManufacturerSerialNumber,

      //Location Fields
      MaintenancePlant,

      AssetLocation,

      AssetRoom,

      PlantSection,

      WorkCenter,

      WorkCenterInternalID,

      WorkCenterPlant,

      @Consumption: { hidden: true }
      WorkCenterTypeCode,

      ABCIndicator,

      MaintObjectFreeDefinedAttrib,

      //Address
      @Consumption: { hidden: true }
      AddressID,

      FormOfAddress, // new field 2108

      BusinessPartnerName1,

      BusinessPartnerName2, // new field 2108

      CityName,

      HouseNumber,

      HouseNumberSupplementText, // new field 2108

      Building, // new field 2108

      Floor, // new field 2108

      RoomNumber, // new field 2108

      PostalCode,

      StreetName,

      Region,

      Country,

      PhoneNumber,

      AddressFaxNumber,

      //Organization Fields--Account Assignment
      CompanyCode,

      BusinessArea,

      MasterFixedAsset,

      FixedAsset,

      CostCenter,

      ControllingArea,

      WBSElementExternalID,

      SettlementOrder,

      //Responsibilities
      MaintenancePlanningPlant,

      MaintenancePlannerGroup,

      MainWorkCenter,

      MainWorkCenterInternalID,

      MainWorkCenterPlant,

      CatalogProfile,

      //Structure Fields
      FunctionalLocation,

      FunctionalLocationLabelName,

      FunctionalLocationName,

      EquipInstallationPositionNmbr,

      SuperordinateEquipment,

      TechnicalObjectSortCode,

      ConstructionMaterial,

      //Serial Data
      Material,

      SerialNumber,

      UniqueItemIdentifier,

      UniqueItemIdentifierStrucType, // new UII field 2111

      UniqueItemIdentifierRespPlant, // new UII field 2111

      //Sales Data
      SalesOrganization,

      DistributionChannel,

      OrganizationDivision,

      SalesGroup,

      SalesOffice,

      //User Fields
      CreationDate,

      CreatedByUser,

      LastChangedByUser,

      /* Additional fields */
      /* If record is latest record (today's), then the timestamp comes from equipment.
         This is because timestamp on equipment catches changes done to EQUI AND EQUZ. Example: AcquisitionValue changed
         If record is an old record (i.e. its validity end date is not in the future), then that time segments timestamp is used.
         This will also prevent any later changes of EQUI to be detected by ODP extractor. However this was discussed to be intended. */
      LastChangeDateTime,

      NextEquipUsagePeriodSqncNmbr,

      MaintObjectLocAcctAssgmtNmbr,

      MaintObjectInternalID,

      EquipUsagePeriodSequenceNumber,

      //Status Fields
      EquipmentIsAtCustomer,

      EquipmentIsAvailable,

      EquipmentIsInWarehouse,

      EquipmentIsAssignedToDelivery,

      EquipmentIsMarkedForDeletion,

      EquipmentIsInstalled,

      EquipIsAllocToSuperiorEquip,

      EquipmentIsInactive,
      
      @Semantics.booleanIndicator : true
      @EndUserText.label: 'EquipmentHasSubOrdinateEquipment'
      EquipHasSubOrdinateEquipment,

       _Partner        : redirected to composition child I_EquipmentPartnerTP,

      _LongText       : redirected to composition child I_EquipmentLongTextTP,

     _Classification : redirected to composition child I_EquipmentClfnClassTP,

      _Warranty       : redirected to composition child I_EquipmentWrntyAssgmtTP
}
```
