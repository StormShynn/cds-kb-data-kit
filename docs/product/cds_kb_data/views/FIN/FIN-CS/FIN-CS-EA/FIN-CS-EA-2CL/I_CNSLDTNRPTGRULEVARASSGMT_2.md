---
name: I_CNSLDTNRPTGRULEVARASSGMT_2
description: "Consolidation Reporting Rule Assignment"
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT_2')/$value
semantic_en: "Consolidation Reporting Rule Assignment"
semantic_vi: "Consolidation Reporting Rule Assignment — CDS view giao diện dựa trên P_CnsldtnRptgRuleAssgmt."
keywords:
  - "consolidation"
  - "reporting"
  - "rule"
  - "assignment"
  - "chart"
  - "accounts"
  - "item"
  - "hier"
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
# I_CNSLDTNRPTGRULEVARASSGMT_2

**Consolidation Reporting Rule Assignment**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` | ✓ | |  |  | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingRuleID` | ✓ | |  |  | `CHAR(3)` | Reporting Rule Variant |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT_2')/$value)*

```abap
@AccessControl.authorizationCheck:#NOT_REQUIRED

@EndUserText.label: 'Consolidation Reporting Rule Assignment'
@VDM.viewType: #COMPOSITE

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #C,
        sizeCategory: #M
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
define view entity I_CnsldtnRptgRuleVarAssgmt_2
  as select from P_CnsldtnRptgRuleAssgmt

{

  key   ConsolidationChartOfAccounts,


  key   ConsolidationReportingItemHier,


  key   ConsolidationReportingRuleID


}
```
