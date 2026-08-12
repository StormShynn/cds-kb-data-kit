---
name: I_PRAARSTATUSTEXT
description: "PRA Accounts Receivable Status - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAARSTATUSTEXT')/$value
semantic_en: "PRA Accounts Receivable Status - Text"
semantic_vi: "PRA Accounts Receivable Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "accounts"
  - "receivable"
  - "status"
  - "text"
  - "accts"
  - "language"
  - "name"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAARSTATUSTEXT

**PRA Accounts Receivable Status - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAARSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AcctsRblStatus` | ✓ | |  | `cast (domvalue_l as oiuar_status )` | `CHAR(2)` | Accounts Receivable Status |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `AcctsRblStatusName` |  | |  | `cast (ddtext as oiu_vdm_ar_bal_status_name )` | `CHAR(60)` | AR Balance Status Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAARSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAARSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'PRA Accounts Receivable Status - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVARSTATUST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'AcctsRblStatus'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAARStatusText
  as select from dd07t
{
  key cast (domvalue_l as oiuar_status )                  as AcctsRblStatus,
      @Semantics.language
  key cast( ddlanguage as spras )                         as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_ar_bal_status_name )        as AcctsRblStatusName
}
where
      domname  = 'OIUAR_STATUS'
  and as4local = 'A';
```
