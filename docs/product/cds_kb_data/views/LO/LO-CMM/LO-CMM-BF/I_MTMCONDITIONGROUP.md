---
name: I_MTMCONDITIONGROUP
description: "Mark To Market Condition Group"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCONDITIONGROUP')/$value
semantic_en: "Mark To Market Condition Group"
semantic_vi: "MtM Condition Group — CDS view giao diện dựa trên cmm_mtm_cgroupt."
keywords:
  - "mtm"
  - "condition"
  - "group"
  - "contract"
  - "value"
  - "market"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_MTMCONDITIONGROUP

**Mark To Market Condition Group**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCONDITIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MTMConditionGroup` | ✓ | |  | `cgroup` | `CHAR(1)` | MtM Condition Group |
| `IsContractValue` |  | |  | `contract` | `CHAR(1)` | Assign to Contractual Value Column |
| `IsMarketValue` |  | |  | `market` | `CHAR(1)` | Assign to Market Value Column |
| `_MtmConditionGroupT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MtmConditionGroupT` | `I_MtmConditionGroupT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCONDITIONGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCONDITIONGROUP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTMCG'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'MTMConditionGroup'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'MtM Condition Group'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]

define view I_MtmConditionGroup
  as select from cmm_mtm_cgroupt
  association [0..*] to I_MtmConditionGroupT as _MtmConditionGroupT on $projection.MTMConditionGroup = _MtmConditionGroupT.MTMConditionGroup
{
      @ObjectModel.text.association: '_MtmConditionGroupT'
  key cgroup          as MTMConditionGroup,
      contract        as IsContractValue,
      market          as IsMarketValue,
      _MtmConditionGroupT
}
```
