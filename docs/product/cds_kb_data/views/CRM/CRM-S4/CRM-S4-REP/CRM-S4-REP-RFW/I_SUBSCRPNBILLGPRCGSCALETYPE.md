---
name: I_SUBSCRPNBILLGPRCGSCALETYPE
description: "Subscrpn Billng Pricng Scale Type"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGPRCGSCALETYPE')/$value
semantic_en: "Subscrpn Billng Pricng Scale Type"
semantic_vi: "Subscrpn Billng Pricng Scale Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "subscrpn"
  - "billng"
  - "pricng"
  - "scale"
  - "type"
  - "billg"
  - "pricing"
  - "domain"
  - "value"
tags:
  - CRM
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
---
# I_SUBSCRPNBILLGPRCGSCALETYPE

**Subscrpn Billng Pricng Scale Type**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGPRCGSCALETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscrpnBillgPricingScaleType` | ✓ | |  | `cast(domvalue_l as crms4_sb_pricing_scale_type)` | `CHAR(1)` | Scale Type for Pricing |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_SubscrpnBillgPrcgScTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscrpnBillgPrcgScTypeText` | `I_SubscrpnBillgPrcgScTypeText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGPRCGSCALETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGPRCGSCALETYPE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Subscrpn Billng Pricng Scale Type'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'SubscrpnBillgPricingScaleType'
@ObjectModel.dataCategory: #VALUE_HELP
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@Search.searchable: true
@Consumption.ranked: true
define view entity I_SubscrpnBillgPrcgScaleType 
 as select from dd07l
 association [1..*] to I_SubscrpnBillgPrcgScTypeText as _SubscrpnBillgPrcgScTypeText 
 on  $projection.SubscrpnBillgPricingScaleType = _SubscrpnBillgPrcgScTypeText.SubscrpnBillgPricingScaleType
{
  
  @ObjectModel.text.association: '_SubscrpnBillgPrcgScTypeText'
  key cast(domvalue_l as crms4_sb_pricing_scale_type) as SubscrpnBillgPricingScaleType,
  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
      dd07l.domvalue_l                              as DomainValue,
  _SubscrpnBillgPrcgScTypeText
}
where
      domname  = 'CRMS4_SB_PRICING_SCALE_TYPE'
  and as4local = 'A';
```
