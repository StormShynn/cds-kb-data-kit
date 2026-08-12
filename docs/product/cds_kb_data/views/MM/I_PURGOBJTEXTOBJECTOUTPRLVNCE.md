---
name: I_PURGOBJTEXTOBJECTOUTPRLVNCE
description: "Purgobjtextobjectoutprlvnce"
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
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGOBJTEXTOBJECTOUTPRLVNCE

**Purgobjtextobjectoutprlvnce**

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
| `TextObjectCategory` | ✓ | |  | `tdobject` |  |  |
| `TextObjectType` | ✓ | |  | `tdid` |  |  |
| `PurgTextPrintSequenceValue` |  | |  | `drflg` |  |  |
| `TextObjectKey` |  | |  | `txnam` |  |  |
| `PurgTextTitleIsPrinted` |  | |  | `titdr` |  |  |
| `_PurgOutputOperationCode` | | ✓ | | | | |
| `_PurchasingObjectCategory` | | ✓ | | | | |
| `_PurchasingDocumentType` | | ✓ | | | | |
| `_TextObjectCategory` | | ✓ | | | | |
| `_TextObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgOutputOperationCode` | `I_PurgOutputOperationCode` | [0..1] |
| `_PurchasingObjectCategory` | `I_PurchasingObjectCategory` | [0..1] |
| `_PurchasingDocumentType` | `I_PurchasingDocumentType` | [0..1] |
| `_TextObjectCategory` | `I_TextObjectCategory` | [0..1] |
| `_TextObjectType` | `I_TextObjectType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURTXTOBJOUTP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Output Relevance of Purchasing Notes'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_PurgObjTextObjectOutpRlvnce
  as select from t166k
  association [0..1] to I_PurgOutputOperationCode  as _PurgOutputOperationCode  on  $projection.PurgOutputOperationCode = _PurgOutputOperationCode.PurgOutputOperationCode
  association [0..1] to I_PurchasingObjectCategory as _PurchasingObjectCategory on  $projection.PurchasingObjectCategory = _PurchasingObjectCategory.PurchasingDocumentCategory
  association [0..1] to I_PurchasingDocumentType   as _PurchasingDocumentType   on  $projection.PurchasingObjectCategory = _PurchasingDocumentType.PurchasingDocumentCategory
                                                                                and $projection.PurchasingDocumentType   = _PurchasingDocumentType.PurchasingDocumentType
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
      @ObjectModel.foreignKey.association: '_TextObjectCategory'
  key tdobject as TextObjectCategory,
      @ObjectModel.foreignKey.association: '_TextObjectType'
  key tdid     as TextObjectType,
      drflg    as PurgTextPrintSequenceValue,
      txnam    as TextObjectKey,
      titdr    as PurgTextTitleIsPrinted,
      _PurgOutputOperationCode,
      _PurchasingObjectCategory,
      _PurchasingDocumentType,
      _TextObjectCategory,
      _TextObjectType
}
```
