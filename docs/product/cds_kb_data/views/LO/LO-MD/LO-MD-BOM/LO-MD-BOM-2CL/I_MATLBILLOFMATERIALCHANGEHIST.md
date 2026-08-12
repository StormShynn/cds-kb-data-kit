---
name: I_MATLBILLOFMATERIALCHANGEHIST
description: "MATLBill of MaterialCHANGEHIST"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
