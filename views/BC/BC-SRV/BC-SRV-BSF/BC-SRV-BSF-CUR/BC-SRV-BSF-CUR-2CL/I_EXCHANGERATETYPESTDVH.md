---
name: I_EXCHANGERATETYPESTDVH
description: "Exchange RateTYPESTDVH"
app_component: BC-SRV-BSF-CUR-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BSF
  - interface-view
  - value-help
  - standard-value-help
  - exchange-rate
  - component:BC-SRV-BSF-CUR-2CL
  - lob:Basis Components
---
# I_EXCHANGERATETYPESTDVH

**Exchange RateTYPESTDVH**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BSF-CUR-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExchangeRateType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
//@AbapCatalog.entityBuffer.definitionAllowed: true // not supported. Basic view I_ExchangeRateType already buffered as V1 CDS view

@VDM.viewType: #BASIC

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'ExchangeRateType',
                usageType.sizeCategory: #M,
                usageType.dataClass: #MASTER,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true  

@Search.searchable: true
@Consumption.ranked: true

define view entity I_ExchangeRateTypeStdVH as select from I_ExchangeRateType {

  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key ExchangeRateType,

  _Text
  
}
```
