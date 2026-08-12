---
name: I_ONRROVERADJMTREASON
description: "ONRR Override Adjustment Reason"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRROVERADJMTREASON')/$value
semantic_en: "ONRR Override Adjustment Reason"
semantic_vi: "ONRR Override Adjustment Reason — CDS view giao diện dựa trên dd07l."
keywords:
  - "onrr"
  - "override"
  - "adjustment"
  - "reason"
  - "adjmt"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ONRROVERADJMTREASON

**ONRR Override Adjustment Reason**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRROVERADJMTREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRROverrideAdjmtReason` | ✓ | |  | `cast (domvalue_l as /pra/fp_ovr_adjustment_code )` | `NUMC(2)` | ONRR-2014 - Override Adjustment Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ONRROverAdjmtReasonText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRROVERADJMTREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRROVERADJMTREASON')/$value)*

```abap
@EndUserText.label: 'ONRR Override Adjustment Reason'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOVRADJREAS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ONRROverrideAdjmtReason'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRAdjustmentReasonCode'

define view I_ONRROverAdjmtReason
  as select from dd07l
  association [0..*] to I_ONRROverAdjmtReasonText as _Text on $projection.ONRROverrideAdjmtReason = _Text.ONRROverrideAdjmtReason
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/fp_ovr_adjustment_code )                         as ONRROverrideAdjmtReason,
  _Text

}
where
      domname  = '/PRA/FP_ADJUSTMENT_CODE'
  and as4local = 'A';
```
