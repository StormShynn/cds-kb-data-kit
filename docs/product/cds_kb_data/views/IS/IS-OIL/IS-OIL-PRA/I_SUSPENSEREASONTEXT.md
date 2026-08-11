---
name: I_SUSPENSEREASONTEXT
description: "Suspense Reason - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUSPENSEREASONTEXT')/$value
semantic_en: "Suspense Reason - Text"
semantic_vi: "Suspense Reason - Text — CDS view giao diện dựa trên oiu_cm_susp_tx."
keywords:
  - "suspense"
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
# I_SUSPENSEREASONTEXT

**Suspense Reason - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUSPENSEREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuspenseReason` | ✓ | |  | `susp_cd` | `CHAR(3)` | Suspense Reason Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SuspenseReasonName` |  | |  | `susp_desc` | `CHAR(40)` | Suspense Reason Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUSPENSEREASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUSPENSEREASONTEXT')/$value)*

```abap
@EndUserText.label: 'Suspense Reason - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSUSPENSERSNT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'SuspenseReason'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_SuspenseReasonText
  as select from oiu_cm_susp_tx
{
  key susp_cd   as SuspenseReason,
      @Semantics.language
  key spras     as Language,
      @Semantics.text
      susp_desc as SuspenseReasonName
}
```
