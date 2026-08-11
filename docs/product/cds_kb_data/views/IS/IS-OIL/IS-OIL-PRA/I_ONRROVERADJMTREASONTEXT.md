---
name: I_ONRROVERADJMTREASONTEXT
description: "ONRR Override Adjustment Reason - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRROVERADJMTREASONTEXT')/$value
semantic_en: "ONRR Override Adjustment Reason - Text"
semantic_vi: "ONRR Override Adjustment Reason - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "onrr"
  - "override"
  - "adjustment"
  - "reason"
  - "text"
  - "adjmt"
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
# I_ONRROVERADJMTREASONTEXT

**ONRR Override Adjustment Reason - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRROVERADJMTREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRROverrideAdjmtReason` | ✓ | |  | `cast (domvalue_l as /pra/fp_ovr_adjustment_code )` | `NUMC(2)` | ONRR-2014 - Override Adjustment Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ONRROverrideAdjmtReasonName` |  | |  | `cast (ddtext as oiu_vdm_onrr_ovrr_adj_reason )` | `CHAR(60)` | ONRR Override Adjustment Reason Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRROVERADJMTREASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRROVERADJMTREASONTEXT')/$value)*

```abap
@EndUserText.label: 'ONRR Override Adjustment Reason - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOVRADJREAST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ONRROverrideAdjmtReason'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_ONRROverAdjmtReasonText
  as select from dd07t
{
  key cast (domvalue_l as /pra/fp_ovr_adjustment_code )                            as ONRROverrideAdjmtReason,
      @Semantics.language
  key cast( ddlanguage as spras )                                                  as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_onrr_ovrr_adj_reason )                               as ONRROverrideAdjmtReasonName
}
where
      domname  = '/PRA/FP_ADJUSTMENT_CODE'
  and as4local = 'A';
```
