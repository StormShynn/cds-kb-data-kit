---
name: I_BR_SDEXTTXCALCMATLUSAGEVH
description: BR Sdexttxcalcmatlusagevh
app_component: FI-LOC-TXS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-TXS
  - interface-view
  - value-help
  - component:FI-LOC-TXS
  - lob:Finance
---
# I_BR_SDEXTTXCALCMATLUSAGEVH

**BR Sdexttxcalcmatlusagevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TXS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExtTxCalcInternalCodeValue` | ✓ | |  |  |  |  |
| `ExtTxCalcInternalCodeText` |  | |  | `cast ( max( ExtTxCalcInternalCodeText ) as txs_intcode_desc )` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel:{
  usageType:{
    sizeCategory: #XL,
    serviceQuality: #C,
    dataClass: #MASTER
  },
  dataCategory: #VALUE_HELP,
  resultSet.sizeCategory: #XS,
  representativeKey: 'ExtTxCalcInternalCodeValue',
  supportedCapabilities: [#VALUE_HELP_PROVIDER],
  modelingPattern: #VALUE_HELP_PROVIDER
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@Consumption.ranked:true
@EndUserText.label: 'Customer Usage'
@Analytics.technicalName: 'IBRCBTAMATERIALUSAGE'
define view entity I_BR_SDExtTxCalcMatlUsageVH
  as select from I_BR_ExtTxCalcInternalCode
{
      @ObjectModel.text.element: ['ExtTxCalcInternalCodeText']
      @UI.textArrangement: #TEXT_ONLY
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
  key ExtTxCalcInternalCodeValue,
      @Semantics.text: true
      @Search.defaultSearchElement: false
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.7
      cast ( max( ExtTxCalcInternalCodeText ) as txs_intcode_desc ) as ExtTxCalcInternalCodeText
}
where
      ExtTxCalcComponent         = 'SD'
  and Country                    = 'BR'
  and ExtTxCalcInternalCodeGroup = 'API_MATERIAL_USAGE'

group by
  ExtTxCalcInternalCodeValue
```
