---
name: I_CONDITIONCONTROL
description: "Conditioncontrol"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing-condition
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONCONTROL

**Conditioncontrol**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionControl` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ksteu )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ConditionControlText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNCONTROL'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Control'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionControl'
@ObjectModel.dataCategory: #VALUE_HELP
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@ObjectModel.sapObjectNodeType.name: 'PriceConditionControl'

define view I_ConditionControl
  as select from dd07l
  association [0..*] to I_ConditionControlText as _Text on $projection.ConditionControl = _Text.ConditionControl
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as ksteu ) as ConditionControl,
      _Text

}

where
      domname  = 'KSTEU'
  and as4local = 'A'
```
