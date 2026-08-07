---
name: I_RECONTRACTNOTICEREASONTEXT
description: "Recontractnoticereasontext"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - text-view
  - contract
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTNOTICEREASONTEXT

**Recontractnoticereasontext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractNoticeReason` | ✓ | |  | `ntreason` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `REContractNoticeReasonName` |  | |  | `xntreason` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRECNNTRET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Contract Notice Reason - Text'

@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'REContractNoticeReason'
@ObjectModel.semanticKey: ['REContractNoticeReason']
@Search.searchable: true

@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_REContractNoticeReasonText as select from tivcnntret
association [1..1] to I_Language              as _Language              on $projection.Language = _Language.Language{
//    @Search.defaultSearchElement: true
    key ntreason         as REContractNoticeReason,
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key spras       as Language,
    @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
    xntreason    as REContractNoticeReasonName,

    _Language
}
```
