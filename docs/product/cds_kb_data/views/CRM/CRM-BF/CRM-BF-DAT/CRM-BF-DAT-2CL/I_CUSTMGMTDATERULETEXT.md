---
name: I_CUSTMGMTDATERULETEXT
description: "Customer Management Date Rule - Text"
app_component: CRM-BF-DAT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTMGMTDATERULETEXT')/$value
semantic_en: "Customer Management Date Rule - Text"
semantic_vi: "Customer Management Date Rule - Text — CDS view giao diện dựa trên timerulet."
keywords:
  - "customer"
  - "management"
  - "date"
  - "rule"
  - "text"
  - "cust"
  - "mgmt"
  - "name"
  - "language"
tags:
  - CRM
  - bo:businesspartner
  - component:CRM-BF-DAT-2CL
  - CRM-BF
  - CRM-BF-DAT
  - CRM-BF-DAT-2CL
  - customer
  - interface-view
---
# I_CUSTMGMTDATERULETEXT

**Customer Management Date Rule - Text**

| Property | Value |
|---|---|
| App Component | `CRM-BF-DAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTMGMTDATERULETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtDateRuleName` | ✓ | |  | `rule_name` | `CHAR(12)` | Date Rule |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CustMgmtDateRuleText` |  | |  | `text` | `CHAR(50)` | Date Rule Description |
| `_CustMgmtDateRule` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustMgmtDateRule` | `I_CustMgmtDateRule` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTMGMTDATERULETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTMGMTDATERULETEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Customer Management Date Rule - Text'
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CustMgmtDateRuleName'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

define view entity I_CustMgmtDateRuleText
  as select from timerulet
  association [1..1] to I_CustMgmtDateRule as _CustMgmtDateRule on $projection.CustMgmtDateRuleName = _CustMgmtDateRule.CustMgmtDateRuleName
  association [1..1] to I_Language                  as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CustMgmtDateRule'
      @ObjectModel.text.element: ['CustMgmtDateRuleText']
  key rule_name as CustMgmtDateRuleName,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      text                                      as CustMgmtDateRuleText,

      _CustMgmtDateRule,
      _Language
}
```
