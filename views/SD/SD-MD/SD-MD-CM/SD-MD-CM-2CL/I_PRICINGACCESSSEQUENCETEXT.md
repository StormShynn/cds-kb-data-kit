---
name: I_PRICINGACCESSSEQUENCETEXT
description: Pricingaccesssequencetext
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
  - pricing
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRICINGACCESSSEQUENCETEXT

**Pricingaccesssequencetext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `ConditionUsage` | `kvewe` |
| key `ConditionApplication` | `kappl` |
| key `AccessSequence` | `kozgf` |
| `AccessSequenceText` | `vtxtm` |
| `_PricingAccessSequence` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingAccessSequence` | `I_PricingAccessSequence` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNACCESST'
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
@EndUserText.label: 'Access Sequence for Pricing - Text'
define view I_PricingAccessSequenceText
  as select from t682t
  association [1..1] to I_PricingAccessSequence as _PricingAccessSequence on  $projection.ConditionUsage       = _PricingAccessSequence.ConditionUsage
                                                                          and $projection.ConditionApplication = _PricingAccessSequence.ConditionApplication
                                                                          and $projection.AccessSequence       = _PricingAccessSequence.AccessSequence
{
      @Semantics.language: true
  key spras as Language,
  key kvewe as ConditionUsage,
  key kappl as ConditionApplication,
  key kozgf as AccessSequence,
      @Semantics.text: true
      vtxtm as AccessSequenceText,
      _PricingAccessSequence
}
where
  kvewe = 'A'
```
