---
name: I_SUBSCRPNBILLGPRCGSCTYPETEXT
description: "Subscrpn Billng Pricng Scale Type - Text"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGPRCGSCTYPETEXT')/$value
semantic_en: "Subscrpn Billng Pricng Scale Type - Text"
semantic_vi: "Subscrpn Billng Pricng Scale Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "subscrpn"
  - "billng"
  - "pricng"
  - "scale"
  - "type"
  - "text"
  - "billg"
  - "pricing"
  - "language"
  - "domain"
  - "value"
  - "prcg"
tags:
  - CRM
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
---
# I_SUBSCRPNBILLGPRCGSCTYPETEXT

**Subscrpn Billng Pricng Scale Type - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGPRCGSCTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscrpnBillgPricingScaleType` | ✓ | |  | `cast(domvalue_l as crms4_rate_element_type)` | `CHAR(1)` | Rate Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SubscrpnBillgPrcgScaleTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_SubscrpnBillgPrcgScaleType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscrpnBillgPrcgScaleType` | `I_SubscrpnBillgPrcgScaleType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGPRCGSCTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGPRCGSCTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Subscrpn Billng Pricng Scale Type - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName:'ISubsBillgPrcScTypTxt'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'SubscrpnBillgPricingScaleType'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true

define view entity I_SubscrpnBillgPrcgScTypeText
  as select from dd07t
  association [1..1] to I_SubscrpnBillgPrcgScaleType as _SubscrpnBillgPrcgScaleType on $projection.SubscrpnBillgPricingScaleType = _SubscrpnBillgPrcgScaleType.SubscrpnBillgPricingScaleType
  association [1..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SubscrpnBillgPrcgScaleType'
  key cast(domvalue_l as crms4_rate_element_type) as SubscrpnBillgPricingScaleType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                  as Language,
      //      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                            as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                      as SubscrpnBillgPrcgScaleTypeText,

      _SubscrpnBillgPrcgScaleType,
      _Language
}
where
      domname  = 'CRMS4_SB_PRICING_SCALE_TYPE'
  and as4local = 'A';
```
