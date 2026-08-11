---
name: I_GRANTEEMGMTBILLINGRULETEXT
description: "Grantee Management Billing Rule - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULETEXT')/$value
semantic_en: "Grantee Management Billing Rule - Text"
semantic_vi: "Grantee Management Billing Rule - Text — CDS view giao diện dựa trên gmbrtexts."
keywords:
  - "grantee"
  - "management"
  - "billing"
  - "rule"
  - "text"
  - "mgmt"
  - "language"
  - "desc"
tags:
  - PSM
  - billing
  - bo:billingdocument
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTEEMGMTBILLINGRULETEXT

**Grantee Management Billing Rule - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GranteeMgmtBillingRule` | ✓ | |  | `billing_rule` | `NUMC(4)` | Rule Used as a Basis for Billing |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `GranteeMgmtBillingRuleDesc` |  | |  | `billing_rule_txt` | `CHAR(30)` | Billing Rule Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBILLINGRULETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMBILLINRULET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Grantee Management Billing Rule - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'GranteeMgmtBillingRule',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ]     
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
define view I_GranteeMgmtBillingRuleText
  as select from gmbrtexts
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key billing_rule     as GranteeMgmtBillingRule,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language         as Language,
      @Semantics.text: true
      billing_rule_txt as GranteeMgmtBillingRuleDesc,
      _Language
}
```
