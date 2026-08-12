---
name: I_JITCALLSUMMARIZATIONSTRATEGY
description: "Jitcallsummarizationstrategy"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_JITCALLSUMMARIZATIONSTRATEGY

**Jitcallsummarizationstrategy**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallSummarizationStrategy` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as pabzus)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_JITCallSummarizationStrgyTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJITSUMSTRAT'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'JIT Call Summarization Strategy'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'JITCallSummarizationStrategy'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'JITCallSummarizationStrategy'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_JITCallSummarizationStrategy
  as select from dd07l

  association [0..*] to I_JITCallSummarizationStrgyTxt as _Text on $projection.JITCallSummarizationStrategy = _Text.JITCallSummarizationStrategy

{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as pabzus)  as JITCallSummarizationStrategy,
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      _Text
}
where
      domname  = 'PABZUS'
  and as4local = 'A'
```
