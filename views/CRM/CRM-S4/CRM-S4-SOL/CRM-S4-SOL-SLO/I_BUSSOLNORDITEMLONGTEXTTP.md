---
name: I_BUSSOLNORDITEMLONGTEXTTP
description: Bussolnorditemlongtexttp
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - text
  - item-level
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITEMLONGTEXTTP

**Bussolnorditemlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| key `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| key `TextObjectType` | `TextObjectType` |
| key `Language` | `Language` |
| `SrvcDocLogTextIdentifier` | `SrvcDocLogTextIdentifier` |
| `TextObjectCategory` | `TextObjectCategory` |
| `SrvcDocLongTextMimeType` | `SrvcDocLongTextMimeType` |
| `BusSolnOrdItmLongText` | `BusSolnOrdItmLongText` |
| `_BusinessSolutionOrderItemTP` | *Association* |
| `_BusinessSolutionOrderTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:    #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  dataCategory: #TEXT,
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Item Long Text - TP'

define view entity I_BusSolnOrdItemLongTextTP
  as projection on R_BusSolnOrdItemLongTextTP
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key TextObjectType,
      @Semantics.language:true
  key Language,
  
      SrvcDocLogTextIdentifier,
      TextObjectCategory,
      SrvcDocLongTextMimeType,

      @Semantics.text: true
      @EndUserText.label: 'Solution Order Item Long Text'
      BusSolnOrdItmLongText,

      /* Associations */
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP
}
```
