---
name: I_VARIANTCONDITION
description: "Variantcondition"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_VARIANTCONDITION

**Variantcondition**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VariantCondition` | ✓ | |  | `varcond` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_VariantConditionText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVARIANTCNDN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Variant Condition'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'VariantCondition'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'PricingVariantCondition'
define view I_VariantCondition
  as select from tvarc
  association [0..*] to I_VariantConditionText as _Text on $projection.VariantCondition = _Text.VariantCondition

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key varcond as VariantCondition,
      _Text
}
```
