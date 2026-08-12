---
name: I_PRATAXLAREJECTIONREASONT
description: "PRA Tax LA Rejection Reason - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAREJECTIONREASONT')/$value
semantic_en: "PRA Tax LA Rejection Reason - Text"
semantic_vi: "PRA Tax LA Rejection Reason - Text — CDS view giao diện dựa trên PRA Tax LA Rejection Reason - Text."
keywords:
  - "pra"
  - "tax"
  - "rejection"
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
# I_PRATAXLAREJECTIONREASONT

**PRA Tax LA Rejection Reason - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAREJECTIONREASONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RejectionReason` | ✓ | |  | `rej_cd` | `CHAR(2)` | Tax 2.0 LA - Reject Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `RejectionReasonName` |  | |  | `cast (rej_cd_desc as oiu_vdm_rej_reason_name)` | `CHAR(50)` | ONRR Rejection Reason Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAREJECTIONREASONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAREJECTIONREASONT')/$value)*

```abap
@EndUserText.label: 'PRA Tax LA Rejection Reason - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXLAREJRSNT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'RejectionReason'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING

define view I_PRATaxLARejectionReasonT
  as select from /pra/c_t9_rejt
{
  key rej_cd                                                                                   as RejectionReason,
      @Semantics.language
  key spras                                                                                    as Language,
      @Semantics.text
      cast (rej_cd_desc as oiu_vdm_rej_reason_name)                                            as RejectionReasonName
}
```
