---
name: I_PRIORPERIODADJUSTMENTREASONT
description: "Prior Period Adjustment Reason - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORPERIODADJUSTMENTREASONT')/$value
semantic_en: "Prior Period Adjustment Reason - Text"
semantic_vi: "Prior Period Adjustment Reason - Text — CDS view giao diện dựa trên oiu_cm_pparsn_tx."
keywords:
  - "prior"
  - "period"
  - "adjustment"
  - "reason"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRIORPERIODADJUSTMENTREASONT

**Prior Period Adjustment Reason - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORPERIODADJUSTMENTREASONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PriorPeriodAdjustmentReason` | ✓ | |  | `ppa_rsn_cd` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PriorPeriodAdjustmentRsnName` |  | |  | `ppa_rsn_de` | `CHAR(50)` | Prior Period Adjustment Reason Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORPERIODADJUSTMENTREASONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIORPERIODADJUSTMENTREASONT')/$value)*

```abap
@EndUserText.label: 'Prior Period Adjustment Reason - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRIORPERDRSNT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'PriorPeriodAdjustmentReason'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PriorPeriodAdjustmentReasonT
  as select from oiu_cm_pparsn_tx
{
  key ppa_rsn_cd   as PriorPeriodAdjustmentReason,
      @Semantics.language
  key spras        as Language,
      @Semantics.text
      ppa_rsn_de   as PriorPeriodAdjustmentRsnName
}
```
