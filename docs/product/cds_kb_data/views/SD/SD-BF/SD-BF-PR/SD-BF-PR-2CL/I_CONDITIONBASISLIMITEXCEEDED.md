---
name: I_CONDITIONBASISLIMITEXCEEDED
description: "Conditionbasislimitexceeded"
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
# I_CONDITIONBASISLIMITEXCEEDED

**Conditionbasislimitexceeded**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionBasisLimitExceeded` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kmxaw )` |  |  |
| `_ConditionAmountLimitExceeded` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionAmountLimitExceeded` | `I_ConditionAmountLimitExceeded` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNBSLMTEXCDED'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Basis Limit Exceeded'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionBasisLimitExceeded'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'PriceCndnBasisLimitExceeded'
define view I_ConditionBasisLimitExceeded
  as select from dd07l
  association [0..1] to I_ConditionAmountLimitExceeded as _ConditionAmountLimitExceeded on $projection.ConditionBasisLimitExceeded = _ConditionAmountLimitExceeded.ConditionAmountLimitExceeded

{
  key cast ( substring( domvalue_l, 1, 1 ) as kmxaw ) as ConditionBasisLimitExceeded,

      _ConditionAmountLimitExceeded

}

where
      domname  = 'KMXWR'
  and as4local = 'A'
```
