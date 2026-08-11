---
name: I_SUBSCRPNBILLGCNDNCALCTYPETXT
description: "Subscrpn Billng Conditn Calc Type - Text"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGCNDNCALCTYPETXT')/$value
semantic_en: "Subscrpn Billng Conditn Calc Type - Text"
semantic_vi: "Subscrpn Billng Conditn Calc Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "subscrpn"
  - "billng"
  - "conditn"
  - "calc"
  - "type"
  - "text"
  - "billg"
  - "cndn"
  - "language"
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
# I_SUBSCRPNBILLGCNDNCALCTYPETXT

**Subscrpn Billng Conditn Calc Type - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGCNDNCALCTYPETXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscrpnBillgCndnCalcType` | ✓ | |  | `cast(domvalue_l as crms4_sb_cond_calc_type)` | `CHAR(1)` | Calculation Type for Condition |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SubscrpnBillgCndnCalcTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_SubscrpnBillgCndnCalcType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubscrpnBillgCndnCalcType` | `I_SubscrpnBillgCndnCalcType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGCNDNCALCTYPETXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNBILLGCNDNCALCTYPETXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Subscrpn Billng Conditn Calc Type - Text'
@Analytics.technicalName:'ISubsBillgCondCalTypTxt'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SubscrpnBillgCndnCalcType'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
define view entity I_SubscrpnBillgCndnCalcTypeTxt 
as select from dd07t
association [1..1] to I_SubscrpnBillgCndnCalcType as _SubscrpnBillgCndnCalcType on $projection.SubscrpnBillgCndnCalcType = _SubscrpnBillgCndnCalcType.SubscrpnBillgCndnCalcType
association [1..1] to I_Language                  as _Language                on $projection.Language = _Language.Language
{
  @ObjectModel.foreignKey.association: '_SubscrpnBillgCndnCalcType'
  key cast(domvalue_l as crms4_sb_cond_calc_type) as SubscrpnBillgCndnCalcType,
  
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key ddlanguage                                  as Language,
//   @Analytics.hidden: true
   @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  @Semantics.text: true  
  ddtext                                          as SubscrpnBillgCndnCalcTypeText,
  
  _SubscrpnBillgCndnCalcType,
  _Language
}where
      domname  = 'CRMS4_SB_COND_CALC_TYPE'
  and as4local = 'A';
```
