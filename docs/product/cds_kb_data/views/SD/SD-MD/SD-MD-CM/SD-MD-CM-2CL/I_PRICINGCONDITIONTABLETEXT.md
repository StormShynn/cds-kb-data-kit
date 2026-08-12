---
name: I_PRICINGCONDITIONTABLETEXT
description: "Pricing ConditionTABLETEXT"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_PRICINGCONDITIONTABLETEXT

**Pricing ConditionTABLETEXT**

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
| `ConditionUsage` | ✓ | |  | `kvewe` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `ConditionTable` | ✓ | |  | `cast ( t681.kotabnr as char03 )` |  |  |
| `ConditionTableText` |  | |  | `gstxt` |  |  |
| `_PricingConditionTable` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingConditionTable` | `I_PricingConditionTable` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNTABLET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@EndUserText.label: 'Condition Table for Pricing - Text'
define view I_PricingConditionTableText
  as select from            t681
    left outer to many join tmc1t on t681.kotab = tmc1t.gstru
  association [1..1] to I_PricingConditionTable as _PricingConditionTable on  $projection.ConditionUsage       = _PricingConditionTable.ConditionUsage
                                                                          and $projection.ConditionApplication = _PricingConditionTable.ConditionApplication
                                                                          and $projection.ConditionTable       = _PricingConditionTable.ConditionTable
{
      @Semantics.language: true
  key tmc1t.spras                     as Language,
  key t681.kvewe                      as ConditionUsage,
  key t681.kappl                      as ConditionApplication,
  key cast ( t681.kotabnr as char03 ) as ConditionTable,
      @Semantics.text: true
      tmc1t.gstxt                     as ConditionTableText,
      _PricingConditionTable
}
where
  kvewe = 'A'
```
