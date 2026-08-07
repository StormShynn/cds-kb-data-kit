---
name: I_TREASURYPAYTREQGROUPING
description: Treasurypaytreqgrouping
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
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
# I_TREASURYPAYTREQGROUPING

**Treasurypaytreqgrouping**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryPaymentRequestGrouping` | ✓ | |  | `cast( dd07l.domvalue_l as tb_sprgrd )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TreasuryPaytReqGroupingText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ITRSYPAYREQGRP' 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Treasury Payment Request Grouping'
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'TreasuryPaymentRequestGrouping'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'TrsyPaytReqGroupingDefinition'

define view entity I_TreasuryPaytReqGrouping 
  as select from dd07l
  association [0..*] to I_TreasuryPaytReqGroupingText as _Text on $projection.TreasuryPaymentRequestGrouping = _Text.TreasuryPaymentRequestGrouping
{
  @ObjectModel.text.association: '_Text'
//  @Search.defaultSearchElement: true
//  @Search.ranking: #HIGH
//  @Search.fuzzinessThreshold: 0.8
  key cast( dd07l.domvalue_l as tb_sprgrd ) as TreasuryPaymentRequestGrouping,
  
  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  dd07l.domvalue_l                          as DomainValue,
  
  _Text
}
where
      dd07l.domname  = 'T_SPRGRD'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
