---
name: I_SUBSCRPNBILLGCNDNCALCTYPE
description: "Subscription Billing Condition Calc Type"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGCNDNCALCTYPE')/$value
semantic_en: "Subscription Billing Condition Calc Type"
semantic_vi: "Subscription Billing Condition Calc Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "subscription"
  - "billing"
  - "condition"
  - "calc"
  - "type"
  - "subscrpn"
  - "billg"
  - "cndn"
  - "domain"
  - "value"
tags:
  - CRM
  - billing
  - bo:billingdocument
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
---
# I_SUBSCRPNBILLGCNDNCALCTYPE

**Subscription Billing Condition Calc Type**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGCNDNCALCTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscrpnBillgCndnCalcType` | ✓ | |  | `cast(domvalue_l as crms4_sb_cond_calc_type)` | `CHAR(1)` | Calculation Type for Condition |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_SubscrpnBillgCndnCalcTypeTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscrpnBillgCndnCalcTypeTxt` | `I_SubscrpnBillgCndnCalcTypeTxt` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGCNDNCALCTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGCNDNCALCTYPE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Subscription Billing Condition Calc Type'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
//                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'SubscrpnBillgCndnCalcType'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked: true
define view entity I_SubscrpnBillgCndnCalcType as select from dd07l
association [1..*] to I_SubscrpnBillgCndnCalcTypeTxt as _SubscrpnBillgCndnCalcTypeTxt on $projection.SubscrpnBillgCndnCalcType = _SubscrpnBillgCndnCalcTypeTxt.SubscrpnBillgCndnCalcType
{
  @ObjectModel.text.association: '_SubscrpnBillgCndnCalcTypeTxt'
  key cast(domvalue_l as crms4_sb_cond_calc_type) as SubscrpnBillgCndnCalcType,
  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
      dd07l.domvalue_l                              as DomainValue,
  _SubscrpnBillgCndnCalcTypeTxt
}
where
      domname  = 'CRMS4_SB_COND_CALC_TYPE'
  and as4local = 'A';
```
