---
name: I_CONDITIONAMOUNTLIMITEXCEEDED
description: "Conditionamountlimitexceeded"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CONDITIONAMOUNTLIMITEXCEEDED

**Conditionamountlimitexceeded**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionAmountLimitExceeded` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kmxwr )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CndnAmountLimitExceededText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNAMTLMTEXCD'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Amount Limit Exceeded'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionAmountLimitExceeded'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'PriceCndnAmountLimitExceeded'
define view I_ConditionAmountLimitExceeded
  as select from dd07l
  association [0..*] to I_CndnAmountLimitExceededText as _Text on $projection.ConditionAmountLimitExceeded = _Text.ConditionAmountLimitExceeded
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as kmxwr ) as ConditionAmountLimitExceeded,
      _Text

}

where
      domname  = 'KMXWR'
  and as4local = 'A'
```
