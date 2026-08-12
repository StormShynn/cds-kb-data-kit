---
name: I_PRIORPERIODADJUSTMENTREASON
description: "Prior Period Adjustment Reason"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORPERIODADJUSTMENTREASON')/$value
semantic_en: "Prior Period Adjustment Reason"
semantic_vi: "Prior Period Adjustment Reason — CDS view giao diện dựa trên oiu_cm_pparsn."
keywords:
  - "prior"
  - "period"
  - "adjustment"
  - "reason"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRIORPERIODADJUSTMENTREASON

**Prior Period Adjustment Reason**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORPERIODADJUSTMENTREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PriorPeriodAdjustmentReason` | ✓ | |  | `ppa_rsn_cd` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PriorPeriodAdjustmentReasonT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORPERIODADJUSTMENTREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORPERIODADJUSTMENTREASON')/$value)*

```abap
@EndUserText.label: 'Prior Period Adjustment Reason'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRIORPERDRSN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PriorPeriodAdjustmentReason'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAPriorPeriodAdjustmentReason'

define view I_PriorPeriodAdjustmentReason
  as select from oiu_cm_pparsn
  association [0..*] to I_PriorPeriodAdjustmentReasonT as _Text on $projection.PriorPeriodAdjustmentReason = _Text.PriorPeriodAdjustmentReason
{
      @ObjectModel.text.association: '_Text'
  key ppa_rsn_cd   as PriorPeriodAdjustmentReason,
      _Text
}
```
