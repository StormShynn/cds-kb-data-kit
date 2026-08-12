---
name: I_MATLBILLOFMATERIALCHANGEHIST
description: "MATLBill of MaterialCHANGEHIST"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - material
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_MATLBILLOFMATERIALCHANGEHIST

**MATLBill of MaterialCHANGEHIST**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeDocObject` | ✓ | |  |  |  |  |
| `ChangeDocument` | ✓ | |  |  |  |  |
| `ChangeDocumentDatabaseTable` | ✓ | |  |  |  |  |
| `ChangeDocumentTableKey` | ✓ | |  |  |  |  |
| `ChangeDocDatabaseTableField` | ✓ | |  |  |  |  |
| `ChangeDocItemChangeType` | ✓ | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BOMHeaderInternalChangeCount` |  | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` |  | |  |  |  |  |
| `BOMItemInternalChangeCount` |  | |  |  |  |  |
| `BOMInstceInternalChangeNumber` |  | |  |  |  |  |
| `BOMSubItemNumberValue` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `BillOfMaterialVariantUsage` |  | |  |  |  |  |
| `ABAPDataElementDescription` |  | |  |  |  |  |
| `ChangeDocNewFieldValue` |  | |  |  |  |  |
| `ChangeDocPreviousFieldValue` |  | |  |  |  |  |
| `ChangeDocPreviousUnit` |  | |  |  |  |  |
| `ChangeDocNewUnit` |  | |  |  |  |  |
| `ChangeDocPreviousCurrency` |  | |  |  |  |  |
| `ChangeDocNewCurrency` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'BOM Change document retrieval'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@AccessControl.personalData.blocking: #NOT_REQUIRED

define view entity I_MatlBillOfMaterialChangeHist
  as select from P_MatlBillOfMaterialChangeHist
{
  key ChangeDocObject,
  key ChangeDocument,
  key ChangeDocumentDatabaseTable,
  key ChangeDocumentTableKey,
  key ChangeDocDatabaseTableField,
  key ChangeDocItemChangeType,
      BillOfMaterialCategory,
      BillOfMaterial,
      BillOfMaterialVariant,
      BOMHeaderInternalChangeCount,
      BillOfMaterialItemNodeNumber,
      BOMItemInternalChangeCount,
      BOMInstceInternalChangeNumber,
      BOMSubItemNumberValue,
      Material,
      Plant,
      BillOfMaterialVariantUsage,
      ABAPDataElementDescription,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      CreatedByUser,
      CreationDate,
      CreationTime,
      CreationDateTime
}
```
