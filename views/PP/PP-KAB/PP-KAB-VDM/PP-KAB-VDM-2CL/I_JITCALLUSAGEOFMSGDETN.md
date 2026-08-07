---
name: I_JITCALLUSAGEOFMSGDETN
description: Jitcallusageofmsgdetn
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
# I_JITCALLUSAGEOFMSGDETN

**Jitcallusageofmsgdetn**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallUsageOfMsgDetn` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as pabmsd)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_JITCallUsageOfMsgDetnTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJITUSGMSGDET'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'JIT Call Usage of Message Determination'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'JITCallUsageOfMsgDetn'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'JITCallUsageOfMsgDetn'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_JITCallUsageOfMsgDetn
  as select from dd07l

  association [0..*] to I_JITCallUsageOfMsgDetnTxt as _Text on $projection.JITCallUsageOfMsgDetn = _Text.JITCallUsageOfMsgDetn

{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as pabmsd)  as JITCallUsageOfMsgDetn,
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      _Text
}
where
      domname  = 'PABMSD'
  and as4local = 'A'
```
