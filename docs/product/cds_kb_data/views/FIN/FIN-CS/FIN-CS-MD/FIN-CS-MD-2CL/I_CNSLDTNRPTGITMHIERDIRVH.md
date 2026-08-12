---
name: I_CNSLDTNRPTGITMHIERDIRVH
description: "Reporting Item Hierarchy Directory"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIRVH')/$value
semantic_en: "Reporting Item Hierarchy Directory"
semantic_vi: "I_CNSLDTNRPTGITMHIERDIRVH — CDS view tổng hợp dựa trên I_CNSLDTNRPTGITMHIERDIRVH."
keywords:
  - "cnsldtnrptgitmhierdirvh"
  - "consolidation"
  - "reporting"
  - "item"
  - "hier"
  - "chart"
  - "accounts"
  - "additional"
  - "master"
  - "data"
  - "hierarchy"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNRPTGITMHIERDIRVH

**Reporting Item Hierarchy Directory**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportingItemHier` | ✓ | | `_Hierarchy` | `ConsolidationReportingItemHier` | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationChartOfAccounts` |  | | `_Hierarchy` | `ConsolidationChartOfAccounts` | `CHAR(2)` | Consolidation Chart of Accounts |
| `AdditionalMasterDataHierarchy` |  | | `_Hierarchy` | `AdditionalMasterDataHierarchy` | `CHAR(40)` | Consolidation Hierarchy ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnRptgItmHierDirT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIRVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIRVH')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'ICCRIHIERDIRVH',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl: {
  authorizationCheck: #CHECK
}
@Metadata: {
  allowExtensions:true,
  ignorePropagatedAnnotations:true
}
@ClientHandling: {
  algorithm: #SESSION_VARIABLE
}
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'ConsolidationReportingItemHier',
  dataCategory:#VALUE_HELP,
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET]
}
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM: {
  viewType: #COMPOSITE
}
@EndUserText: {
  label: 'Reporting Item Hierarchy Directory'
}
define view I_CnsldtnRptgItmHierDirVH
  as select distinct from I_CnsldtnRptgItmHierDir      as _Hierarchy

    inner join            I_CnsldtnRptgRuleVarAssgmt_2 as _RuleVarAssgmt on  _Hierarchy.ConsolidationReportingItemHier = _RuleVarAssgmt.ConsolidationReportingItemHier
                                                                         and _Hierarchy.ConsolidationChartOfAccounts   = _RuleVarAssgmt.ConsolidationChartOfAccounts

  association [0..*] to I_CnsldtnRptgItmHierDirT as _Text on  $projection.ConsolidationReportingItemHier = _Text.ConsolidationReportingItemHier
                                                          and $projection.ConsolidationChartOfAccounts   = _Text.ConsolidationChartOfAccounts
                                                          and $projection.AdditionalMasterDataHierarchy  = _Text.AdditionalMasterDataHierarchy

{
      @ObjectModel.text.association: '_Text'
  key _Hierarchy.ConsolidationReportingItemHier,

      _Hierarchy.ConsolidationChartOfAccounts,

      _Hierarchy.AdditionalMasterDataHierarchy,

      _Text
}
```
