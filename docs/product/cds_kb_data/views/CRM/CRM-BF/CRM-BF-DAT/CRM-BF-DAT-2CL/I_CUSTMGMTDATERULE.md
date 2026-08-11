---
name: I_CUSTMGMTDATERULE
description: "Date Rule in Service"
app_component: CRM-BF-DAT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTMGMTDATERULE')/$value
semantic_en: "Date Rule in Service"
semantic_vi: "Date Rule in Service — CDS view cơ bản (transactional data) dựa trên timeruna."
keywords:
  - "date"
  - "rule"
  - "service"
  - "cust"
  - "mgmt"
  - "name"
tags:
  - CRM
  - component:CRM-BF-DAT-2CL
  - CRM-BF
  - CRM-BF-DAT
  - CRM-BF-DAT-2CL
  - interface-view
---
# I_CUSTMGMTDATERULE

**Date Rule in Service**

| Property | Value |
|---|---|
| App Component | `CRM-BF-DAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTMGMTDATERULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtDateRuleName` | ✓ | |  | `rule_name` | `CHAR(12)` | Date Rule |
| `CustMgmtDateRuleUUID` |  | |  | `rule_id` | `RAW(16)` | Date Rule Version ID |
| `_CustMgmtDateRuleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustMgmtDateRuleText` | `I_CustMgmtDateRuleText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTMGMTDATERULE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTMGMTDATERULE')/$value)*

```abap
@EndUserText.label: 'Date Rule in Service'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ICMDATERULE',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XL
   },
   representativeKey: 'CustMgmtDateRuleName',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #SQL_DATA_SOURCE,
                           #VALUE_HELP_PROVIDER]
}
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.dataCategory: #VALUE_HELP
@Metadata.ignorePropagatedAnnotations: true

define view I_CustMgmtDateRule
  as select from timeruna
    join         timeruleh on timeruna.rule_id = timeruleh.rule_id
  association [1..*] to I_CustMgmtDateRuleText as _CustMgmtDateRuleText on $projection.CustMgmtDateRuleName = _CustMgmtDateRuleText.CustMgmtDateRuleName
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_CustMgmtDateRuleText'
  key timeruna.rule_name as CustMgmtDateRuleName,

      @Consumption.hidden: true
      timeruna.rule_id   as CustMgmtDateRuleUUID,

      _CustMgmtDateRuleText

}
```
