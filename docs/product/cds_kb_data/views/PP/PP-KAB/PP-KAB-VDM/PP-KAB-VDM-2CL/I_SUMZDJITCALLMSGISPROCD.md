---
name: I_SUMZDJITCALLMSGISPROCD
description: "Sumzdjitcallmsgisprocd"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_SUMZDJITCALLMSGISPROCD

**Sumzdjitcallmsgisprocd**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SumzdJITCallMessageIsProcessed` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as pabdkz preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SumzdJITCallMsgIsProcdText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUMZDJITCALLMSG'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Summarized JIT Call Message Is Processed'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SumzdJITCallMessageIsProcessed'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'SumzdJITCallMessageIsProcessed'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@Search.searchable: true

define view I_SumzdJITCallMsgIsProcd  
  as select from dd07l as l
  association [0..*] to I_SumzdJITCallMsgIsProcdText as _Text on $projection.SumzdJITCallMessageIsProcessed = _Text.SumzdJITCallMessageIsProcessed
  {
      @ObjectModel.text.association: '_Text'
      @Semantics.booleanIndicator: true
      // cast to data element  
  key cast(substring(l.domvalue_l, 1, 1) as pabdkz preserving type) as SumzdJITCallMessageIsProcessed,
      @Search: {defaultSearchElement: true, ranking: #HIGH}
      @Consumption.hidden:true
      @Analytics.hidden:true
      l.domvalue_l as DomainValue,
      
      // Associations 
      _Text
  }
  where l.domname = 'PABDKZ' and
        l.as4local = 'A';
```
