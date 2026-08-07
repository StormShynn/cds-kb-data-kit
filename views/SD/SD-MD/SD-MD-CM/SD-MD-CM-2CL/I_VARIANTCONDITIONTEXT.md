---
name: I_VARIANTCONDITIONTEXT
description: Variantconditiontext
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
  - text-view
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_VARIANTCONDITIONTEXT

**Variantconditiontext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `VariantCondition` | ✓ | |  | `varcond` |  |  |
| `VariantConditionName` |  | |  | `vctext` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVARIANTCNDNTEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Variant Condition - Text'
@VDM.viewType: #BASIC
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'VariantCondition'
@Metadata.ignorePropagatedAnnotations:true
define view I_VariantConditionText
  as select from tvarct
{
      @Semantics.language: true
  key spras   as Language,
  key varcond as VariantCondition,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      vctext  as VariantConditionName
}
```
