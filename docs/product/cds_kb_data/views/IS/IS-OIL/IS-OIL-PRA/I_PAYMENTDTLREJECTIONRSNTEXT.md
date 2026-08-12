---
name: I_PAYMENTDTLREJECTIONRSNTEXT
description: "Payment Detail Rejection Reason - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTDTLREJECTIONRSNTEXT')/$value
semantic_en: "Payment Detail Rejection Reason - Text"
semantic_vi: "Payment Detail Rejection Reason - Text — CDS view giao diện dựa trên Payment Detail Rejection Reason - Text."
keywords:
  - "payment"
  - "detail"
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
  - payment
---
# I_PAYMENTDTLREJECTIONRSNTEXT

**Payment Detail Rejection Reason - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTDTLREJECTIONRSNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentDetailRejectionRsn` | ✓ | |  | `dtl_rej_cd` | `CHAR(3)` | Payment Processing - Detail Level Reject Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PaymentDetailRejectionRsnName` |  | |  | `cast( dtl_rej_cd_desc as oiu_vdm_detail_reject_name )` | `CHAR(30)` | Detail Reject Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTDTLREJECTIONRSNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTDTLREJECTIONRSNTEXT')/$value)*

```abap
@EndUserText.label: 'Payment Detail Rejection Reason - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPAYDTLREJRSNT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'PaymentDetailRejectionRsn'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

define view I_PaymentDtlRejectionRsnText
  as select from /pra/c_pp_drejt
{
  key dtl_rej_cd                                              as PaymentDetailRejectionRsn,
      @Semantics.language
  key spras                                                   as Language,
      @Semantics.text
      cast( dtl_rej_cd_desc as oiu_vdm_detail_reject_name )   as PaymentDetailRejectionRsnName
}
```
