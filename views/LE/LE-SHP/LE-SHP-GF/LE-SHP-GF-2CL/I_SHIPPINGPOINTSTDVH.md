---
name: I_SHIPPINGPOINTSTDVH
description: Shippingpointstdvh
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - value-help
  - standard-value-help
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SHIPPINGPOINTSTDVH

**Shippingpointstdvh**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ShippingPoint` | `ShippingPoint` |
| `ShippingPointName` | `_Text[1: Language=$session.system_language].ShippingPointName` |
| `_Text` | *Association* |

## Source Code

```abap
//GENERATED:003:GlBfhyJl7jU{rt6Qk9cfW0
@AbapCatalog.sqlViewName: 'ISP__VH2'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ShippingPoint'

@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: [ #VALUE_HELP_PROVIDER ]

@EndUserText.label: 'Shipping Point'

@Search.searchable: true
@Consumption.ranked: true

define view I_ShippingPointStdVH
  as select from I_ShippingPoint
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key ShippingPoint,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @UI.hidden: true
      _Text[1: Language=$session.system_language].ShippingPointName as ShippingPointName,

      _Text
}
  where 
    ConfigDeprecationCode <> 'E';
```
