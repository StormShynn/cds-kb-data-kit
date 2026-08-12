---
name: I_PURGOBJITEMTXTOBJOUTPRLVNCE
description: "Purgobjitemtxtobjoutprlvnce"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - item-level
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGOBJITEMTXTOBJOUTPRLVNCE

**Purgobjitemtxtobjoutprlvnce**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgOutputOperationCode` | ✓ | |  | `druvo` |  |  |
| `PurchasingObjectCategory` | ✓ | |  | `bstyp` |  |  |
| `PurchasingDocumentType` | ✓ | |  | `bsart` |  |  |
| `PurchasingDocumentItemCategory` | ✓ | |  | `pstyp` |  |  |
| `TextObjectCategory` | ✓ | |  | `tdobject` |  |  |
| `TextObjectType` | ✓ | |  | `tdid` |  |  |
| `PurgTextPrintSequenceValue` |  | |  | `drflg` |  |  |
| `PurgTextPrintPriorityValue` |  | |  | `drpri` |  |  |
| `TextObjectKey` |  | |  | `txnam` |  |  |
| `PurgTextTitleIsPrinted` |  | |  | `titdr` |  |  |
| `_PurgOutputOperationCode` | | ✓ | | | | |
| `_PurchasingObjectCategory` | | ✓ | | | | |
| `_PurchasingDocumentType` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |
| `_TextObjectCategory` | | ✓ | | | | |
| `_TextObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgOutputOperationCode` | `I_PurgOutputOperationCode` | [0..1] |
| `_PurchasingObjectCategory` | `I_PurchasingObjectCategory` | [0..1] |
| `_PurchasingDocumentType` | `I_PurchasingDocumentType` | [0..1] |
| `_PurgDocumentItemCategory` | `I_PurgDocumentItemCategory` | [0..1] |
| `_TextObjectCategory` | `I_TextObjectCategory` | [0..1] |
| `_TextObjectType` | `I_TextObjectType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURITEMTEXTOP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Output Relevance of Purchasing Itm Notes'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_PurgObjItemTxtObjOutpRlvnce
  as select from t166p
  association [0..1] to I_PurgOutputOperationCode  as _PurgOutputOperationCode  on  $projection.PurgOutputOperationCode = _PurgOutputOperationCode.PurgOutputOperationCode
  association [0..1] to I_PurchasingObjectCategory as _PurchasingObjectCategory on  $projection.PurchasingObjectCategory = _PurchasingObjectCategory.PurchasingDocumentCategory
  association [0..1] to I_PurchasingDocumentType   as _PurchasingDocumentType   on  $projection.PurchasingObjectCategory = _PurchasingDocumentType.PurchasingDocumentCategory
                                                                                and $projection.PurchasingDocumentType   = _PurchasingDocumentType.PurchasingDocumentType
  association [0..1] to I_PurgDocumentItemCategory as _PurgDocumentItemCategory on  $projection.PurchasingDocumentItemCategory = _PurgDocumentItemCategory.PurchasingDocumentItemCategory
  association [0..1] to I_TextObjectCategory       as _TextObjectCategory       on  $projection.TextObjectCategory = _TextObjectCategory.TextObjectCategory
  association [0..1] to I_TextObjectType           as _TextObjectType           on  $projection.TextObjectType     = _TextObjectType.TextObjectType
                                                                                and $projection.TextObjectCategory = _TextObjectType.TextObjectCategory
{
      @ObjectModel.foreignKey.association: '_PurgOutputOperationCode'
  key druvo    as PurgOutputOperationCode,
      @ObjectModel.foreignKey.association: '_PurchasingObjectCategory'
  key bstyp    as PurchasingObjectCategory,
      @ObjectModel.foreignKey.association: '_PurchasingDocumentType'
  key bsart    as PurchasingDocumentType,
      @ObjectModel.foreignKey.association: '_PurgDocumentItemCategory'
  key pstyp    as PurchasingDocumentItemCategory,
      @ObjectModel.foreignKey.association: '_TextObjectCategory'
  key tdobject as TextObjectCategory,
      @ObjectModel.foreignKey.association: '_TextObjectType'
  key tdid     as TextObjectType,
      drflg    as PurgTextPrintSequenceValue,
      drpri    as PurgTextPrintPriorityValue,
      txnam    as TextObjectKey,
      titdr    as PurgTextTitleIsPrinted,
      _PurgOutputOperationCode,
      _PurchasingObjectCategory,
      _PurchasingDocumentType,
      _PurgDocumentItemCategory,
      _TextObjectCategory,
      _TextObjectType
}
```
