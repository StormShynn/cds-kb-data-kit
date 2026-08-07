---
name: I_SHIPPINGCONDITION
description: "Shippingcondition"
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
  - pricing-condition
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SHIPPINGCONDITION

**Shippingcondition**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingCondition` | ✓ | |  | `vsbed` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ShippingConditionText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'ShippingCondition'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'ShippingCondition'
@EndUserText.label: 'Shipping Condition'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILESHIPGCNDN'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'ShippingCondition'

define view I_ShippingCondition
  as select from tvsb
  association [0..*] to I_ShippingConditionText as _Text on $projection.ShippingCondition = _Text.ShippingCondition
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key vsbed as ShippingCondition,
      _Text
};
```
