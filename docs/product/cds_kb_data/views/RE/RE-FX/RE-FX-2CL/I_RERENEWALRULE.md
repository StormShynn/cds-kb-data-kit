---
name: I_RERENEWALRULE
description: "Rerenewalrule"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RERENEWALRULE

**Rerenewalrule**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RERenewalRule` | ✓ | |  | `rnrule` |  |  |
| `REAutomaticRenewalType` |  | |  | `rnauttype` |  |  |
| `REIsExclForNewAssgmt` |  | |  | `cuexcludeassign` |  |  |
| `_Text` | | ✓ | | | | |
| `_REAutomaticRenewalType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RERenewalRuleText` | [0..*] |
| `_REAutomaticRenewalType` | `I_REAutomaticRenewalType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRERNWLRULE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Renewal Rules'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Analytics.dataExtraction.enabled:true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: ['RERenewalRule']
@ObjectModel.semanticKey: 'RERenewalRule'
@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

 
define view I_RERenewalRule
  as select from tivtmrnrule
  association [0..*] to I_RERenewalRuleText      as _Text                   on $projection.RERenewalRule = _Text.RERenewalRule
  association [0..1] to I_REAutomaticRenewalType as _REAutomaticRenewalType on $projection.REAutomaticRenewalType = _REAutomaticRenewalType.REAutomaticRenewalType
{
        @ObjectModel.text.association: '_Text'
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #HIGH
  key   rnrule          as RERenewalRule,
        @ObjectModel.foreignKey.association: '_REAutomaticRenewalType'
        rnauttype       as REAutomaticRenewalType,
        cuexcludeassign as REIsExclForNewAssgmt,


        _Text,
        _REAutomaticRenewalType

}
```
