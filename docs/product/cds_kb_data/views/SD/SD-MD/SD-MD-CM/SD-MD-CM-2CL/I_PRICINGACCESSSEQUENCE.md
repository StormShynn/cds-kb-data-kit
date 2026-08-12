---
name: I_PRICINGACCESSSEQUENCE
description: "Pricingaccesssequence"
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
  - pricing
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRICINGACCESSSEQUENCE

**Pricingaccesssequence**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionUsage` | ✓ | |  | `kvewe` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `AccessSequence` | ✓ | |  | `kozgf` |  |  |
| `_PricingAccess` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingAccess` | `I_PricingAccess` | [0..*] |
| `_Text` | `I_PricingAccessSequenceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNACCESS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@EndUserText.label: 'Access Sequence for Pricing'
define view I_PricingAccessSequence
  as select from t682
  association [0..*] to I_PricingAccess             as _PricingAccess on  $projection.ConditionUsage       = _PricingAccess.ConditionUsage
                                                                      and $projection.ConditionApplication = _PricingAccess.ConditionApplication
                                                                      and $projection.AccessSequence       = _PricingAccess.AccessSequence
  association [0..*] to I_PricingAccessSequenceText as _Text          on  $projection.ConditionUsage       = _Text.ConditionUsage
                                                                      and $projection.ConditionApplication = _Text.ConditionApplication
                                                                      and $projection.AccessSequence       = _Text.AccessSequence


{
  key kvewe as ConditionUsage,
  key kappl as ConditionApplication,
  @ObjectModel.text.association: '_Text'
  key kozgf as AccessSequence,
      _PricingAccess,
      _Text
}
where
  kvewe = 'A'
```
