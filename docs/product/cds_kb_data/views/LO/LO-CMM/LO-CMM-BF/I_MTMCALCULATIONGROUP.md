---
name: I_MTMCALCULATIONGROUP
description: "Mark To Market Calculation Group"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUP')/$value
semantic_en: "Mark To Market Calculation Group"
semantic_vi: "MtM Calculation Group — CDS view giao diện dựa trên cmm_vlogp_c_grp."
keywords:
  - "mtm"
  - "calculation"
  - "group"
  - "condition"
  - "application"
  - "pricing"
  - "procedure"
  - "type"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_MTMCALCULATIONGROUP

**Mark To Market Calculation Group**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MTMCalculationGroup` | ✓ | |  | `calc_group` | `CHAR(1)` | MtM Calculation Group |
| `ConditionApplication` |  | |  | `kappl` | `CHAR(2)` | Application |
| `PricingProcedure` |  | |  | `kalsm` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `ConditionType` |  | |  | `kschl` | `CHAR(4)` | Leading Condition within a calculation group |
| `_MtmCalculationGroupT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MtmCalculationGroupT` | `I_MtmCalculationGroupT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTMCALCG'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'MTMCalculationGroup'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'MtM Calculation Group'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]

define view I_MtmCalculationGroup
  as select from cmm_vlogp_c_grp
  association [0..*] to I_MtmCalculationGroupT as _MtmCalculationGroupT on $projection.MTMCalculationGroup = _MtmCalculationGroupT.MTMCalculationGroup
{
      @ObjectModel.text.association: '_MtmCalculationGroupT'
  key calc_group     as MTMCalculationGroup,
      kappl          as ConditionApplication,
      kalsm          as PricingProcedure,
      kschl          as ConditionType,
      _MtmCalculationGroupT
}
```
