---
name: I_EQUIPMATLSERIALNUMBERTP
description: EQUIPMATLSerial NumberTP
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
  - serial-number
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMATLSERIALNUMBERTP

**EQUIPMATLSerial NumberTP**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Material` | `Material` |
| key `SerialNumber` | `SerialNumber` |
| `Equipment` | `Equipment` |
| `EquipmentCategory` | `EquipmentCategory` |
| `UniqueItemIdentifier` | `UniqueItemIdentifier` |
| `UniqueItemIdentifierStrucType` | `UniqueItemIdentifierStrucType` |
| `UniqueItemIdentifierRespPlant` | `UniqueItemIdentifierRespPlant` |
| `TechObjIsEquipOrFuncnlLoc` | `TechObjIsEquipOrFuncnlLoc` |
| `MaintObjectInternalID` | `MaintObjectInternalID` |
| `HasEquipmentData` | `HasEquipmentData` |
| `TechnicalObject` | `TechnicalObject` |
| `EquipmentHasStockInformation` | `EquipmentHasStockInformation` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangedByUser` | `LastChangedByUser` |
| `CreationDate` | `CreationDate` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `MatlSrlNmbrMasterBatch` | `MatlSrlNmbrMasterBatch` |
| `EquipMaterialLastSerialNumber` | `EquipMaterialLastSerialNumber` |
| `MatlSrlNmbrLastGdsMvtDte` | `MatlSrlNmbrLastGdsMvtDte` |
| `MaterialSerialNumberStockBatch` | `MaterialSerialNumberStockBatch` |
| `InventoryStockType` | `InventoryStockType` |
| `Plant` | `Plant` |
| `StorageLocation` | `StorageLocation` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `Customer` | `Customer` |
| `Supplier` | `Supplier` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `WBSElement` | `WBSElement` |
| `StockOwner` | `StockOwner` |
| `CompanyCode` | `CompanyCode` |
| `CompanyCodeName` | `CompanyCodeName` |
| `EquipmentName` | `EquipmentName` |
| `TechnicalObjectDescription` | `TechnicalObjectDescription` |
| `MatlSrlNmbrIsAvailable` | `MatlSrlNmbrIsAvailable` |
| `MatlSrlNmbrIsDeleted` | `MatlSrlNmbrIsDeleted` |
| `MatlSrlNmbrIsMrkdForDeltn` | `MatlSrlNmbrIsMrkdForDeltn` |
| `MatlSrlNmbrIsInactive` | `MatlSrlNmbrIsInactive` |
| `MatlSrlNmbrIsInstalled` | `MatlSrlNmbrIsInstalled` |
| `MatlSrlNmbrIsAllcToParent` | `MatlSrlNmbrIsAllcToParent` |
| `MatlSrlNmbrIsInWarehouse` | `MatlSrlNmbrIsInWarehouse` |
| `MatlSrlNmbrIsAssgdToDeliv` | `MatlSrlNmbrIsAssgdToDeliv` |
| `MatlSrlNmbrIsAtCustomer` | `MatlSrlNmbrIsAtCustomer` |
| `MatlSrlNmbrIsUndrCnstrctn` | `MatlSrlNmbrIsUndrCnstrctn` |
| `MatlSrlNmbrIsOnHold` | `MatlSrlNmbrIsOnHold` |
| `MatlSrlNmbrIsLocked` | `MatlSrlNmbrIsLocked` |
| `MatlSrlNmbrIsIDUndefined` | `MatlSrlNmbrIsIDUndefined` |
| `MatlSrlNmbrIsAssgdToJITCall` | `MatlSrlNmbrIsAssgdToJITCall` |
| `MatlSrlNmbrDocIsCreated` | `MatlSrlNmbrDocIsCreated` |
| `MatlSrlNmbrHndlgUntIsAssgd` | `MatlSrlNmbrHndlgUntIsAssgd` |
| `MatlSrlNmbrInvtryIsActv` | `MatlSrlNmbrInvtryIsActv` |
| `MatlSrlNmbrUUIDIsGnrtd` | `MatlSrlNmbrUUIDIsGnrtd` |
| `MatlSrlNmbrUUIDIsAttached` | `MatlSrlNmbrUUIDIsAttached` |
| `MatlSrlNmbrUUIDIsSent` | `MatlSrlNmbrUUIDIsSent` |
| `MatlSrlNmbrUUIDIsConfd` | `MatlSrlNmbrUUIDIsConfd` |
| `_Customer` | *Association* |
| `_EquipmentCategory` | *Association* |
| `_EquipmentText` | *Association* |
| `_InventoryStockType` | *Association* |
| `_Material` | *Association* |
| `_Partner` | *Association* |
| `_Warranty` | *Association* |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_WBSElement` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Material Serial Number - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
 @ObjectModel.sapObjectNodeType.name: 'Equipment'
 @ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
define root view entity I_EquipMatlSerialNumberTP provider contract transactional_interface
  as projection on R_EquipMatlSerialNumberTP as EquipMatlSrlNmbrTP {
  key Material,
  key SerialNumber,
  Equipment,
  EquipmentCategory,
  UniqueItemIdentifier,
  UniqueItemIdentifierStrucType,
  UniqueItemIdentifierRespPlant,
  TechObjIsEquipOrFuncnlLoc,
  MaintObjectInternalID,
  HasEquipmentData,
  TechnicalObject,
  EquipmentHasStockInformation,
  CreatedByUser,
  LastChangedByUser,
  CreationDate,
  LastChangeDate,
  LastChangeDateTime,
  MatlSrlNmbrMasterBatch,
  EquipMaterialLastSerialNumber,
  MatlSrlNmbrLastGdsMvtDte,
  MaterialSerialNumberStockBatch,
  InventoryStockType,
  Plant,
  StorageLocation,
  InventorySpecialStockType,
  Customer,
  Supplier,
  SalesOrder,
  SalesOrderItem,
  WBSElementInternalID,
  WBSElement,
  StockOwner,
  CompanyCode,
  CompanyCodeName,
  EquipmentName,
  TechnicalObjectDescription,
  MatlSrlNmbrIsAvailable,
  MatlSrlNmbrIsDeleted,
  MatlSrlNmbrIsMrkdForDeltn,
  MatlSrlNmbrIsInactive,
  MatlSrlNmbrIsInstalled,
  MatlSrlNmbrIsAllcToParent,
  MatlSrlNmbrIsInWarehouse,
  MatlSrlNmbrIsAssgdToDeliv,
  MatlSrlNmbrIsAtCustomer,
  MatlSrlNmbrIsUndrCnstrctn,
  MatlSrlNmbrIsOnHold,
  MatlSrlNmbrIsLocked,
  MatlSrlNmbrIsIDUndefined,
  MatlSrlNmbrIsAssgdToJITCall,
  MatlSrlNmbrDocIsCreated,
  MatlSrlNmbrHndlgUntIsAssgd,
  MatlSrlNmbrInvtryIsActv,
  MatlSrlNmbrUUIDIsGnrtd,
  MatlSrlNmbrUUIDIsAttached,
  MatlSrlNmbrUUIDIsSent,
  MatlSrlNmbrUUIDIsConfd,

  //These fields have been exposed for Partner DCL to be available in the root DCL
  //Because of VDM ATC(VDMCDSSEC)
//@Consumption.hidden: true
//PartnerFunctionType,
//@Semantics.booleanIndicator: true
//@Consumption.hidden: true
//CntctPersnIsBusPrpsCompleted,
//@Consumption.hidden: true
//CntctPersnCustomerAccountGroup,
//@Consumption.hidden: true
//CntctPersnCustomerAuthznGroup,
//@Consumption.hidden: true
//CntctPersnSupplierAccountGroup,
//@Consumption.hidden: true
//CntctPersnSupplierAuthznGroup,
//@Semantics.booleanIndicator: true
//@Consumption.hidden: true
//CustomerIsBusPrpsCmpltd,
//@Consumption.hidden: true
//CustomerAccountGroup,
//@Consumption.hidden: true
//CustomerAuthznGrp,
//@Consumption.hidden: true
//@Semantics.booleanIndicator: true
//EmployeeIsBusPrpsCmpltd,
//@Consumption.hidden: true
//EmployeeAuthznGroup,
//@Semantics.booleanIndicator: true
//@Consumption.hidden: true
//SupplierIsBusPrpsCmpltd,
//@Consumption.hidden: true
//SupplierAccountGroup,
//@Consumption.hidden: true
//SupplierAuthznGrp,

  /* Associations */
  _Customer,
  _EquipmentCategory,
  _EquipmentText,
  _InventoryStockType,
  _Material,
  _Partner       : redirected to composition child I_EquipMatlSrlNmbrPrtnTP,
  _Warranty       : redirected to composition child I_EquipMatlSrlNmbrWarrantyTP,
  _Plant,
  _StorageLocation,
  _WBSElement

  }
```
