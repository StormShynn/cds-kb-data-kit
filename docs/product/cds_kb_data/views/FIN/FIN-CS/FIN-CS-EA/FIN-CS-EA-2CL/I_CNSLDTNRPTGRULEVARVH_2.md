---
name: I_CNSLDTNRPTGRULEVARVH_2
description: "Consolidation Reporting Rule Variant"
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARVH_2')/$value
semantic_en: "Consolidation Reporting Rule Variant"
semantic_vi: "Consolidation Reporting Rule Variant — CDS view giao diện dựa trên Consolidation Reporting Rule Variant."
keywords:
  - "consolidation"
  - "reporting"
  - "rule"
  - "variant"
  - "item"
  - "hier"
  - "text"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNRPTGRULEVARVH_2

**Consolidation Reporting Rule Variant**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARVH_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportingItemHier` | ✓ | | `_Source` | `ConsolidationReportingItemHier` | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingRuleID` | ✓ | | `_Source` | `ConsolidationReportingRuleID` | `CHAR(3)` | Reporting Rule Variant |
| `ConsolidationReportingRuleText` |  | | `_Source` | `ConsolidationReportingRuleText` | `CHAR(30)` | Description |
| `_CnsldtnReportingItemHierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnReportingItemHierarchy` | `I_CnsldtnRptgItmHierDirVH` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARVH_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARVH_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata: {
    allowExtensions:true,
    ignorePropagatedAnnotations:true
}
@VDM.viewType: #COMPOSITE
@ObjectModel: {
    usageType: {
      dataClass: #CUSTOMIZING,
      serviceQuality: #C,
      sizeCategory: #M
    },
    representativeKey: 'ConsolidationReportingRuleID',
    dataCategory:#VALUE_HELP,
    modelingPattern: #NONE,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #ANALYTICAL_DIMENSION]
}
@Search.searchable: true
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL
}
@EndUserText.label: 'Consolidation Reporting Rule Variant'
define view entity I_CnsldtnRptgRuleVarVH_2
  as select distinct from P_CnsldtnRptgRuleVar         as _Source

    inner join   I_CnsldtnRptgRuleVarAssgmt_2 as _RuleVarAssgmt on  _Source.ConsolidationReportingItemHier = _RuleVarAssgmt.ConsolidationReportingItemHier
                                                                and _Source.ConsolidationChartOfAccounts   = _RuleVarAssgmt.ConsolidationChartOfAccounts


  association [1] to I_CnsldtnRptgItmHierDirVH as _CnsldtnReportingItemHierarchy on $projection.ConsolidationReportingItemHier = _CnsldtnReportingItemHierarchy.ConsolidationReportingItemHier

{
      @ObjectModel.foreignKey.association: '_CnsldtnReportingItemHierarchy'
  key _Source.ConsolidationReportingItemHier,

      @ObjectModel.text.element: ['ConsolidationReportingRuleText']
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8, ranking: #HIGH
      }
  key _Source.ConsolidationReportingRuleID,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8, ranking: #LOW
      }

      _Source.ConsolidationReportingRuleText,

      _CnsldtnReportingItemHierarchy

}
```
