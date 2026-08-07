---
name: I_SETTLMTPROCESSTYPE
description: Settlmtprocesstype
app_component: LO-AB
software_component: SAPSCORE
release_state: released
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
# I_SETTLMTPROCESSTYPE

**Settlmtprocesstype**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtProcessType` | ✓ | |  |  |  |  |
| `SettlmtProcessCat` |  | |  |  |  |  |
| `SettlmtPartnerCat` |  | |  |  |  |  |
| `CrsCoSettlmtCat` |  | |  |  |  |  |
| `SettlmtBusProcVar` |  | |  |  |  |  |
| `LogisticsDataEntryCat` |  | |  |  |  |  |
| `SettlmtHasFullOrglData` |  | |  |  |  |  |
| `SettlmtTxCodeDetnCat` |  | |  |  |  |  |
| `SettlmtNoTxCodeErrHndlgCat` |  | |  |  |  |  |
| `CustHasAltvAcctAssgmtFields` |  | |  |  |  |  |
| `SettlmtDocType` |  | |  |  |  |  |
| `SettlmtApplStsGrp` |  | |  |  |  |  |
| `SettlmtCollectionCategory` |  | |  |  |  |  |
| `SettlmtProcTypeOfCollection` |  | |  |  |  |  |
| `SettlmtDocTypeOfCollection` |  | |  |  |  |  |
| `_SettlmtProcessCat` | | ✓ | | | | |
| `_SettlmtPartnerCat` | | ✓ | | | | |
| `_CrsCoSettlmtCat` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
| `_LogisticsDataEntryCat` | | ✓ | | | | |
| `_SettlmtTxCodeDetnCat` | | ✓ | | | | |
| `_SettlmtNoTxCodeErrHndlgCat` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |
| `_SettlmtStsApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_SettlmtCollectionCategory` | | ✓ | | | | |
| `_SettlmtProcTypeOfCollection` | | ✓ | | | | |
| `_SettlmtDocTypeOfCollection` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtProcessCat` | `I_SettlmtProcessCat` | [0..1] |
| `_SettlmtPartnerCat` | `I_SettlmtPartnerCat` | [0..1] |
| `_CrsCoSettlmtCat` | `I_CrsCoSettlmtCat` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_LogisticsDataEntryCat` | `I_LogisticsDataEntryCat` | [0..1] |
| `_SettlmtTxCodeDetnCat` | `I_SettlmtTxCodeDetnCat` | [0..1] |
| `_SettlmtNoTxCodeErrHndlgCat` | `I_SettlmtNoTxCodeErrHndlgCat` | [0..1] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtStsApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..*] |
| `_SettlmtCollectionCategory` | `I_SettlmtCollectionCategory` | [0..1] |
| `_SettlmtProcTypeOfCollection` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtDocTypeOfCollection` | `I_SettlmtDocType` | [0..1] |

## Source Code

```abap
@AbapCatalog: { 
  dataMaintenance: #DISPLAY_ONLY
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_Text'],
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  representativeKey: 'SettlmtProcessType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION],
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
@Analytics.technicalName: 'IWLFSMTPROCTYPE'
@EndUserText.label: 'Settlement Process Type'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtProcessType
  as select from R_SettlmtProcessType
  
  composition [0..*] of I_SettlmtProcessTypeText     as _Text
  /* Control Settings */
  association [0..1] to I_SettlmtProcessCat          as _SettlmtProcessCat           on $projection.SettlmtProcessCat = _SettlmtProcessCat.SettlmtProcessCat
  association [0..1] to I_SettlmtPartnerCat          as _SettlmtPartnerCat           on $projection.SettlmtPartnerCat = _SettlmtPartnerCat.SettlmtPartnerCat
  association [0..1] to I_CrsCoSettlmtCat            as _CrsCoSettlmtCat             on $projection.CrsCoSettlmtCat = _CrsCoSettlmtCat.CrsCoSettlmtCat
  association [0..1] to I_SettlmtBusProcVar          as _SettlmtBusProcVar           on $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar
  association [0..1] to I_LogisticsDataEntryCat      as _LogisticsDataEntryCat       on $projection.LogisticsDataEntryCat = _LogisticsDataEntryCat.LogisticsDataEntryCat
  association [0..1] to I_SettlmtTxCodeDetnCat       as _SettlmtTxCodeDetnCat        on $projection.SettlmtTxCodeDetnCat = _SettlmtTxCodeDetnCat.SettlmtTxCodeDetnCat
  association [0..1] to I_SettlmtNoTxCodeErrHndlgCat as _SettlmtNoTxCodeErrHndlgCat  on $projection.SettlmtNoTxCodeErrHndlgCat = _SettlmtNoTxCodeErrHndlgCat.SettlmtNoTxCodeErrHndlgCat

  /* Assigned Settlement Document Types */
  association [0..1] to I_SettlmtDocType             as _SettlmtDocType              on $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  /* Application Status */
  association [0..1] to I_SettlmtApplStsGrp          as _SettlmtStsApplStsGrp        on $projection.SettlmtApplStsGrp = _SettlmtStsApplStsGrp.SettlmtApplStsGrp
  association [0..*] to I_SettlmtApplStsGrpStsAssgmt as _SettlmtApplStsGrpStsAssgmt  on $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
  /* Collection Processing */
  association [0..1] to I_SettlmtCollectionCategory  as _SettlmtCollectionCategory   on $projection.SettlmtCollectionCategory = _SettlmtCollectionCategory.SettlmtCollectionCategory
  association [0..1] to I_SettlmtProcessType         as _SettlmtProcTypeOfCollection on $projection.SettlmtProcTypeOfCollection = _SettlmtProcTypeOfCollection.SettlmtProcessType
  association [0..1] to I_SettlmtDocType             as _SettlmtDocTypeOfCollection  on $projection.SettlmtDocTypeOfCollection = _SettlmtDocTypeOfCollection.SettlmtDocType

{
      @ObjectModel.text.association: '_Text'
  key SettlmtProcessType,

      /* Control Settings */
      @ObjectModel.foreignKey.association: '_SettlmtProcessCat'
      SettlmtProcessCat,
      @ObjectModel.foreignKey.association: '_SettlmtPartnerCat'
      SettlmtPartnerCat,
      @ObjectModel.foreignKey.association: '_CrsCoSettlmtCat'
      CrsCoSettlmtCat,
      @ObjectModel.foreignKey.association: '_SettlmtBusProcVar'
      SettlmtBusProcVar,
      @ObjectModel.foreignKey.association: '_LogisticsDataEntryCat'
      LogisticsDataEntryCat,
      SettlmtHasFullOrglData,
      @ObjectModel.foreignKey.association: '_SettlmtTxCodeDetnCat'
      SettlmtTxCodeDetnCat,
      @ObjectModel.foreignKey.association: '_SettlmtNoTxCodeErrHndlgCat'
      SettlmtNoTxCodeErrHndlgCat,
      CustHasAltvAcctAssgmtFields,

      /* Assigned Settlement Document Types */
      @ObjectModel.foreignKey.association: '_SettlmtDocType'
      SettlmtDocType,

      /* Application Status */
      @ObjectModel.foreignKey.association: '_SettlmtStsApplStsGrp'
      SettlmtApplStsGrp,

      /* Collection Processing */
      @ObjectModel.foreignKey.association: '_SettlmtCollectionCategory'
      SettlmtCollectionCategory,
      @ObjectModel.foreignKey.association: '_SettlmtProcTypeOfCollection'
      SettlmtProcTypeOfCollection,
      @ObjectModel.foreignKey.association: '_SettlmtDocTypeOfCollection'
      SettlmtDocTypeOfCollection,

      /* Associations */
      _Text,
      _SettlmtProcessCat,
      _SettlmtBusProcVar,
      _LogisticsDataEntryCat,
      _SettlmtTxCodeDetnCat,
      _SettlmtNoTxCodeErrHndlgCat,
      _SettlmtDocType,
      _SettlmtStsApplStsGrp,
      _SettlmtApplStsGrpStsAssgmt,
      _SettlmtPartnerCat,
      _CrsCoSettlmtCat,
      _SettlmtCollectionCategory,
      _SettlmtProcTypeOfCollection,
      _SettlmtDocTypeOfCollection
}
```
