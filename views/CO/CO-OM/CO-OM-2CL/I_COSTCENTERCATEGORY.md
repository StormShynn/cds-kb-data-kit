---
name: I_COSTCENTERCATEGORY
description: Cost CenterCATEGORY
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - cost-center
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERCATEGORY

**Cost CenterCATEGORY**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostCenterCategory` | `kosar` |
| `IsBlkdForPrimaryCostsPosting` | `bkzkp` |
| `IsBlkdForSecondaryCostsPosting` | `bkzks` |
| `IsBlockedForRevenuePosting` | `bkzer` |
| `IsBlockedForCommitmentPosting` | `bkzob` |
| `IsBlockedForPlanPrimaryCosts` | `pkzkp` |
| `IsBlockedForPlanSecondaryCosts` | `cast(pkzks as fis_pkzks)` |
| `IsBlockedForPlanRevenues` | `cast(pkzer as fis_pkzer)` |
| `CostCenterAllocationMethod` | `cast(vmeth as fis_vmeth)` |
| `ConsumptionQtyIsRecorded` | `mgefl` |
| `FunctionalArea` | `func_area` |
| `_Text` | *Association* |
| `_FunctionalArea` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostCenterCategoryText` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Center Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCTRCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CostCenterCategory'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering: {type: #GENERIC, numberOfKeyFields: 1, status: #ACTIVE}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'CostCenterCategory'

define view I_CostCenterCategory
  as select from tka05
  association [0..*] to I_CostCenterCategoryText as _Text           on $projection.CostCenterCategory = _Text.CostCenterCategory
  association [0..1] to I_FunctionalArea         as _FunctionalArea on $projection.FunctionalArea = _FunctionalArea.FunctionalArea
{
      @ObjectModel.text.association: '_Text'
  key kosar                    as CostCenterCategory,
      bkzkp                    as IsBlkdForPrimaryCostsPosting,
      bkzks                    as IsBlkdForSecondaryCostsPosting,
      bkzer                    as IsBlockedForRevenuePosting,
      bkzob                    as IsBlockedForCommitmentPosting,
      pkzkp                    as IsBlockedForPlanPrimaryCosts,
      cast(pkzks as fis_pkzks) as IsBlockedForPlanSecondaryCosts,
      cast(pkzer as fis_pkzer) as IsBlockedForPlanRevenues,
      cast(vmeth as fis_vmeth) as CostCenterAllocationMethod,
      mgefl                    as ConsumptionQtyIsRecorded,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      func_area                as FunctionalArea,

      _Text,
      _FunctionalArea

};
```
