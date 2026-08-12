---
name: I_ONRRREPTRANSTYPETEXT
description: "ONRR Reported Transaction Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPETEXT')/$value
semantic_en: "ONRR Reported Transaction Type - Text"
semantic_vi: "ONRR Reported Transaction Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "onrr"
  - "reported"
  - "transaction"
  - "type"
  - "text"
  - "trans"
  - "language"
  - "name"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
---
# I_ONRRREPTRANSTYPETEXT

**ONRR Reported Transaction Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRReportedTransType` | ✓ | |  | `cast (domvalue_l as /pra/fp_transaction_code )` | `CHAR(2)` | ONRR-2014 - Transaction Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ONRRReportedTransTypeName` |  | |  | `cast (ddtext as oiu_vdm_onrr_rep_trans_type )` | `CHAR(60)` | ONRR Reported Transaction Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPETEXT')/$value)*

```abap
@EndUserText.label: 'ONRR Reported Transaction Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRREPTRATYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ONRRReportedTransType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_ONRRRepTransTypeText
  as select from dd07t
{
  key cast (domvalue_l as /pra/fp_transaction_code )                               as ONRRReportedTransType,
      @Semantics.language
  key cast( ddlanguage as spras )                                                  as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_onrr_rep_trans_type )                                as ONRRReportedTransTypeName
}
where
      domname  = '/PRA/FP_TRANSACTION_CODE'
  and as4local = 'A';
```
