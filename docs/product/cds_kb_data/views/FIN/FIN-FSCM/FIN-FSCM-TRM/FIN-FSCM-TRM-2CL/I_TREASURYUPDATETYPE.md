---
name: I_TREASURYUPDATETYPE
description: "Treasuryupdatetype"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYUPDATETYPE

**Treasuryupdatetype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryUpdateType` | ✓ | |  | `dis_flowtype` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TreasuryUpdateTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @ObjectModel.representativeKey: 'TreasuryUpdateType'
@Analytics.technicalName: 'ITRUPDTP'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'TreasuryUpdateType'
@VDM.viewType: #BASIC
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Treasury Update Type'
@Search.searchable: true
@Consumption.ranked: true
define view entity I_TreasuryUpdateType
  as select from trdc_dflowtype as TreasuryUpdateType

  association [0..*] to I_TreasuryUpdateTypeText as _Text on $projection.TreasuryUpdateType = _Text.TreasuryUpdateType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key TreasuryUpdateType.dis_flowtype as TreasuryUpdateType,

      _Text
}
```
