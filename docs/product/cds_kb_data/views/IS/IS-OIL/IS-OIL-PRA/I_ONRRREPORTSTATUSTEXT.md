---
name: I_ONRRREPORTSTATUSTEXT
description: "ONRR Report Status - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPORTSTATUSTEXT')/$value
semantic_en: "ONRR Report Status - Text"
semantic_vi: "ONRR Report Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "onrr"
  - "report"
  - "status"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ONRRREPORTSTATUSTEXT

**ONRR Report Status - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPORTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRReportStatus` | ✓ | |  | `cast (domvalue_l as /pra/fp_status )` | `CHAR(1)` | ONRR-2014 - Status |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ONRRReportStatusName` |  | |  | `cast (ddtext as oiu_vdm_onrr_rep_status)` | `CHAR(60)` | ONRR Report Status Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPORTSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPORTSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'ONRR Report Status - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRREPSTATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ONRRReportStatus'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_ONRRReportStatusText
  as select from dd07t
{
  key cast (domvalue_l as /pra/fp_status )                                         as ONRRReportStatus,
      @Semantics.language
  key cast( ddlanguage as spras )                                                  as Language,
      @Semantics.text
      cast (ddtext as  oiu_vdm_onrr_rep_status)                                    as ONRRReportStatusName
}
where
      domname  = '/PRA/FP_STATUS'
  and as4local = 'A';
```
