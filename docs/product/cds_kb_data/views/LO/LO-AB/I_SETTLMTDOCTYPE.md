---
name: I_SETTLMTDOCTYPE
description: "Settlmtdoctype"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - component:LO-AB
  - lob:Logistics General
---
# I_SETTLMTDOCTYPE

**Settlmtdoctype**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocType` | ✓ | |  |  |  |  |
| `SAPObjectType` |  | |  |  |  |  |
| `SettlmtDocCat` |  | |  |  |  |  |
| `SettlmtCat` |  | |  |  |  |  |
| `SettlmtBusProcVar` |  | |  |  |  |  |
| `SettlmtBusProcCat` |  | |  |  |  |  |
| `SettlmtRptgDisplayVariant` |  | |  |  |  |  |
| `SettlmtMgmtPrcgApplCat` |  | |  |  |  |  |
| `SettlmtTxCodeTxTypeChkCat` |  | |  |  |  |  |
| `SettlmtDataXtrctnCat` |  | |  |  |  |  |
| `SettlmtHdrTxtDetnProced` |  | |  |  |  |  |
| `SettlmtItmTxtDetnProced` |  | |  |  |  |  |
| `JournalEntryType` |  | |  |  |  |  |
| `AltvJournalEntryType` |  | |  |  |  |  |
| `SettlmtDocTypeOfCollection` |  | |  |  |  |  |
| `SettlmtMgmtDocItemDistrCat` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_SettlmtCat` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |
| `_SettlmtRptgDisplayVariant` | | ✓ | | | | |
| `_SettlmtMgmtPrcgApplCat` | | ✓ | | | | |
| `_SettlmtTxCodeTxTypeChkCat` | | ✓ | | | | |
| `_SettlmtHdrTxtDetnProced` | | ✓ | | | | |
| `_SettlmtItmTxtDetnProced` | | ✓ | | | | |
| `_SettlmtDocTypeOfCollection` | | ✓ | | | | |
| `_SettlmtMgmtDocItemDistrCat` | | ✓ | | | | |
| `_SettlmtDataXtrctnCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SettlmtDocTypeText` | [0..*] |
| `_SettlmtDocCat` | `I_SettlmtDocCat` | [0..1] |
| `_SettlmtCat` | `I_SettlmtCat` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_SettlmtBusProcCat` | `I_SettlmtBusProcCat` | [0..1] |
| `_SettlmtRptgDisplayVariant` | `I_SettlmtRptgDisplayVariant` | [0..1] |
| `_SettlmtMgmtPrcgApplCat` | `I_SettlmtMgmtPrcgApplCat` | [0..1] |
| `_SettlmtTxCodeTxTypeChkCat` | `I_SettlmtTxCodeTxTypeChkCat` | [0..1] |
| `_SettlmtHdrTxtDetnProced` | `I_SetlMgmtHdrTxtDetnProced` | [0..1] |
| `_SettlmtItmTxtDetnProced` | `I_SetlMgmtItmTxtDetnProced` | [0..1] |
| `_SettlmtDocTypeOfCollection` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtMgmtDocItemDistrCat` | `I_SettlmtMgmtDocItemDistrCat` | [0..1] |

## Source Code

```abap
@VDM: { 
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_Text' , '_SettlmtHdrTxtDetnProced' , '_SettlmtItmTxtDetnProced' ], 
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   representativeKey: 'SettlmtDocType',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #ANALYTICAL_DIMENSION],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@Analytics.technicalName: 'IWLFSMTDOCTYPE'
@EndUserText.label: 'Settlement Document Type'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDocType
  as select from R_SettlmtDocType

  association [0..*] to I_SettlmtDocTypeText         as _Text                       on $projection.SettlmtDocType = _Text.SettlmtDocType
  /* General Control */
  association [0..1] to I_SettlmtDocCat              as _SettlmtDocCat              on $projection.SettlmtDocCat = _SettlmtDocCat.SettlmtDocCat
  association [0..1] to I_SettlmtCat                 as _SettlmtCat                 on $projection.SettlmtCat = _SettlmtCat.SettlmtCat
  association [0..1] to I_SettlmtBusProcVar          as _SettlmtBusProcVar          on $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar
  association [0..1] to I_SettlmtBusProcCat          as _SettlmtBusProcCat          on $projection.SettlmtBusProcCat = _SettlmtBusProcCat.SettlmtBusProcCat
  association [0..1] to I_SettlmtRptgDisplayVariant  as _SettlmtRptgDisplayVariant  on $projection.SettlmtRptgDisplayVariant = _SettlmtRptgDisplayVariant.SettlmtRptgDisplayVariant
  association [0..1] to I_SettlmtMgmtPrcgApplCat     as _SettlmtMgmtPrcgApplCat     on $projection.SettlmtMgmtPrcgApplCat = _SettlmtMgmtPrcgApplCat.SettlmtMgmtPrcgApplCat
  association [0..1] to I_SettlmtTxCodeTxTypeChkCat  as _SettlmtTxCodeTxTypeChkCat  on $projection.SettlmtTxCodeTxTypeChkCat = _SettlmtTxCodeTxTypeChkCat.SettlmtTxCodeTxTypeChkCat

  /* Text Determination Procedure */
  association [0..1] to I_SetlMgmtHdrTxtDetnProced   as _SettlmtHdrTxtDetnProced    on $projection.SettlmtHdrTxtDetnProced = _SettlmtHdrTxtDetnProced.SettlmtHdrTxtDetnProced
  association [0..1] to I_SetlMgmtItmTxtDetnProced   as _SettlmtItmTxtDetnProced    on $projection.SettlmtItmTxtDetnProced = _SettlmtItmTxtDetnProced.SettlmtItmTxtDetnProced


  /* Collection Processing */
  association [0..1] to I_SettlmtDocType             as _SettlmtDocTypeOfCollection on $projection.SettlmtDocTypeOfCollection = _SettlmtDocTypeOfCollection.SettlmtDocType
  /* Special Processes */
  association [0..1] to I_SettlmtMgmtDocItemDistrCat as _SettlmtMgmtDocItemDistrCat on $projection.SettlmtMgmtDocItemDistrCat = _SettlmtMgmtDocItemDistrCat.SettlmtMgmtDocItemDistrCat
{
      @ObjectModel.text.association: '_Text'
  key SettlmtDocType,

      /* General Control */
      SAPObjectType,
      @ObjectModel.foreignKey.association: '_SettlmtDocCat'
      SettlmtDocCat,
      @ObjectModel.foreignKey.association: '_SettlmtCat'
      SettlmtCat,
      @ObjectModel.foreignKey.association: '_SettlmtBusProcVar'
      SettlmtBusProcVar,
      @ObjectModel.foreignKey.association: '_SettlmtBusProcCat'
      SettlmtBusProcCat,
      @ObjectModel.foreignKey.association: '_SettlmtRptgDisplayVariant'
      SettlmtRptgDisplayVariant,
      @ObjectModel.foreignKey.association: '_SettlmtMgmtPrcgApplCat'
      SettlmtMgmtPrcgApplCat,
      @ObjectModel.foreignKey.association: '_SettlmtTxCodeTxTypeChkCat'
      SettlmtTxCodeTxTypeChkCat,
      @ObjectModel.foreignKey.association: '_SettlmtDataXtrctnCat'
      SettlmtDataXtrctnCat,

      /* Text Determination Procedure */
      @ObjectModel.foreignKey.association: '_SettlmtHdrTxtDetnProced'
      SettlmtHdrTxtDetnProced,
      @ObjectModel.foreignKey.association: '_SettlmtItmTxtDetnProced'
      SettlmtItmTxtDetnProced,

      /* Accounting */
      JournalEntryType,
      AltvJournalEntryType,

      /* Collection Processing */
      @ObjectModel.foreignKey.association: '_SettlmtDocTypeOfCollection'
      SettlmtDocTypeOfCollection,

      /* Special Processes */
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocItemDistrCat'
      SettlmtMgmtDocItemDistrCat,

      /* Associations */
      _Text,
      _SettlmtDocCat,
      _SettlmtCat,
      _SettlmtBusProcVar,
      _SettlmtBusProcCat,
      _SettlmtRptgDisplayVariant,
      _SettlmtMgmtPrcgApplCat,
      _SettlmtTxCodeTxTypeChkCat,
      _SettlmtDataXtrctnCat,
      _SettlmtHdrTxtDetnProced,
      _SettlmtItmTxtDetnProced,
      _SettlmtDocTypeOfCollection,
      _SettlmtMgmtDocItemDistrCat
}
```
