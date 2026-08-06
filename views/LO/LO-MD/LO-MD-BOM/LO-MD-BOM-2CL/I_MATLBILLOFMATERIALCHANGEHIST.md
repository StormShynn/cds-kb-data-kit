---
name: I_MATLBILLOFMATERIALCHANGEHIST
description: MATLBill of MaterialCHANGEHIST
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| key `ChangeDocObject` | `ChangeDocObject` |
| key `ChangeDocument` | `ChangeDocument` |
| key `ChangeDocumentDatabaseTable` | `ChangeDocumentDatabaseTable` |
| key `ChangeDocumentTableKey` | `ChangeDocumentTableKey` |
| key `ChangeDocDatabaseTableField` | `ChangeDocDatabaseTableField` |
| key `ChangeDocItemChangeType` | `ChangeDocItemChangeType` |
| `BillOfMaterialCategory` | `BillOfMaterialCategory` |
| `BillOfMaterial` | `BillOfMaterial` |
| `BillOfMaterialVariant` | `BillOfMaterialVariant` |
| `BOMHeaderInternalChangeCount` | `BOMHeaderInternalChangeCount` |
| `BillOfMaterialItemNodeNumber` | `BillOfMaterialItemNodeNumber` |
| `BOMItemInternalChangeCount` | `BOMItemInternalChangeCount` |
| `BOMInstceInternalChangeNumber` | `BOMInstceInternalChangeNumber` |
| `BOMSubItemNumberValue` | `BOMSubItemNumberValue` |
| `Material` | `Material` |
| `Plant` | `Plant` |
| `BillOfMaterialVariantUsage` | `BillOfMaterialVariantUsage` |
| `ABAPDataElementDescription` | `ABAPDataElementDescription` |
| `ChangeDocNewFieldValue` | `ChangeDocNewFieldValue` |
| `ChangeDocPreviousFieldValue` | `ChangeDocPreviousFieldValue` |
| `ChangeDocPreviousUnit` | `ChangeDocPreviousUnit` |
| `ChangeDocNewUnit` | `ChangeDocNewUnit` |
| `ChangeDocPreviousCurrency` | `ChangeDocPreviousCurrency` |
| `ChangeDocNewCurrency` | `ChangeDocNewCurrency` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `CreationDateTime` | `CreationDateTime` |

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
