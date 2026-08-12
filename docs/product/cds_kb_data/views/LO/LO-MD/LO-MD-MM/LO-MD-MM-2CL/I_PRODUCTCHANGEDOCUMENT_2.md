---
name: I_PRODUCTCHANGEDOCUMENT_2
description: "Productchangedocument 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - document
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTCHANGEDOCUMENT_2

**Productchangedocument 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `ChangeDocObjectClass` | ✓ | |  |  |  |  |
| `ChangeDocument` | ✓ | |  |  |  |  |
| `DatabaseTable` | ✓ | |  |  |  |  |
| `ChangeDocTableKey` | ✓ | |  |  |  |  |
| `ChangeDocDatabaseTableField` | ✓ | |  |  |  |  |
| `ChangeDocItemChangeType` | ✓ | |  |  |  |  |
| `ChangeDocObject` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `FirstName` |  | |  |  |  |  |
| `LastName` |  | |  |  |  |  |
| `Department` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `ChangeTransactionCode` |  | |  |  |  |  |
| `DatabaseTableText` |  | |  |  |  |  |
| `ChangeDocFieldNameDesc` |  | |  |  |  |  |
| `ChangeDocPreviousUnit` |  | |  |  |  |  |
| `ChangeDocNewUnit` |  | |  |  |  |  |
| `ChangeDocPreviousCurrency` |  | |  |  |  |  |
| `ChangeDocNewCurrency` |  | |  |  |  |  |
| `ChangeDocPreviousFieldValue` |  | |  |  |  |  |
| `ChangeDocNewFieldValue` |  | |  |  |  |  |
| `ChangeDocChangeTypeText` |  | |  |  |  |  |
| `ChangeDocTextIsChanged` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ProductSalesOrg` |  | |  |  |  |  |
| `ProductDistributionChnl` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `WarehouseNumber` |  | |  |  |  |  |
| `MaintenanceStatus` |  | |  |  |  |  |
| `MaintenanceStatus1` |  | |  |  |  |  |
| `MaintenanceStatus2` |  | |  |  |  |  |
| `MaintenanceStatus3` |  | |  |  |  |  |
| `MaintenanceStatus4` |  | |  |  |  |  |
| `MaintenanceStatus5` |  | |  |  |  |  |
| `MaintenanceStatus6` |  | |  |  |  |  |
| `MaintenanceStatus7` |  | |  |  |  |  |
| `MaintenanceStatus8` |  | |  |  |  |  |
| `MaintenanceStatus9` |  | |  |  |  |  |
| `MaintenanceStatus10` |  | |  |  |  |  |
| `MaintenanceStatus11` |  | |  |  |  |  |
| `MaintenanceStatus12` |  | |  |  |  |  |
| `MaintenanceStatus13` |  | |  |  |  |  |
| `MaintenanceStatus14` |  | |  |  |  |  |
| `MaintenanceStatus15` |  | |  |  |  |  |
| `_CreatedByUserContactCard` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Change Document'
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET
                                       ]
@AccessControl.privilegedAssociations: [ '_CreatedByUserContactCard' ]
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #COMPOSITE

define view entity I_ProductChangeDocument_2
  as select from P_ProductChangeDocument
{
  key Product,
  key ChangeDocObjectClass,
  key ChangeDocument,
  key DatabaseTable,
  key ChangeDocTableKey,
  key ChangeDocDatabaseTableField,
  key ChangeDocItemChangeType,
      ChangeDocObject,
      CreatedByUser,
      FirstName,
      LastName,
      Department,
      CreationDate,
      CreationTime,
      ChangeTransactionCode,
      DatabaseTableText,
      ChangeDocFieldNameDesc,
      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocPreviousFieldValue,
      ChangeDocNewFieldValue,
      ChangeDocChangeTypeText,
      ChangeDocTextIsChanged,
      Plant,
      ProductSalesOrg,
      ProductDistributionChnl,
      ValuationArea,
      WarehouseNumber,
      MaintenanceStatus,
      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus1,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus2,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus3,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus4,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus5,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus6,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus7,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus8,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus9,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus10,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus11,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus12,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus13,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus14,

      @UI.hidden: true
      @Consumption.hidden: true
      MaintenanceStatus15,

      _CreatedByUserContactCard,
      _Product
}
```
