---
name: I_SETTLMTMGMTSEMANTICCODE
description: Settlmtmgmtsemanticcode
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
# I_SETTLMTMGMTSEMANTICCODE

**Settlmtmgmtsemanticcode**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtSemanticCode` | ✓ | |  | `semantic_type` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SettlmtMgmtSemanticCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Settlement Management Semantic Codes'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'SettlmtMgmtSemanticCode',
  sapObjectNodeType.name: 'SettlementMgmtSemanticCode',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  }
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@Metadata.ignorePropagatedAnnotations:true
define view entity I_SettlmtMgmtSemanticCode
  as select from wlf_d_sem_type as SettlmtMgmtSemanticCode
  association [0..*] to I_SettlmtMgmtSemanticCodeText as _Text on $projection.SettlmtMgmtSemanticCode = _Text.SettlmtMgmtSemanticCode
{
      @ObjectModel.text.association: '_Text'
  key semantic_type as SettlmtMgmtSemanticCode,
      //Associations
      _Text

}
```
