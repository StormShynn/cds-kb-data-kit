---
name: I_CNSLDTNRPTGRULEVARASSGMT
description: "This CDS view assigns the reporting rule variant to consolidation chart of accounts and reporting item hierarchy."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT')/$value
semantic_en: "This CDS view assigns the reporting rule variant to consolidation chart of accounts and reporting item hierarchy."
semantic_vi: "Consolidation Reporting Rule Variant Assignment — CDS view giao diện dựa trên fincs_rrvar_asg."
keywords:
  - "consolidation"
  - "reporting"
  - "rule"
  - "variant"
  - "assignment"
  - "chart"
  - "accounts"
  - "item"
  - "hier"
tags:
  - FIN
  - account
  - bo:purchaseorder
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - bo:companycode
---
# I_CNSLDTNRPTGRULEVARASSGMT

**This CDS view assigns the reporting rule variant to consolidation chart of accounts and reporting item hierarchy.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `itclg` | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` | ✓ | |  | `rihry` | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingRuleID` | ✓ | |  | `rptid` | `CHAR(3)` | Reporting Rule Variant |
| `_ConsChartOfAccounts` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Rrvar` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConsChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_Hierarchy` | `I_CnsldtnRptgItmHierDir` | [0..1] |
| `_Rrvar` | `I_CnsldtnRptgRuleVar` | [0..1] |
| `_Text` | `I_CnsldtnRptgRuleVarT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICCRRVARASSGMT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Consolidation Reporting Rule Variant Assignment'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ConsolidationReportingRuleID'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #B,
        sizeCategory: #M
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
define view I_CnsldtnRptgRuleVarAssgmt
  as select from fincs_rrvar_asg
    inner join   I_CnsldtnGlobalSetting as _cxb3 on  _cxb3.SequenceNumber                 = '1'
                                                 and _cxb3.CnsldtnAddlRptgRuleDimnAreActv = ''
  association [0..1] to I_CnsldtnChartOfAccounts as _ConsChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _ConsChartOfAccounts.ConsolidationChartOfAccounts
  association [0..1] to I_CnsldtnRptgItmHierDir  as _Hierarchy           on  $projection.ConsolidationChartOfAccounts   = _Hierarchy.ConsolidationChartOfAccounts
                                                                         and $projection.ConsolidationReportingItemHier = _Hierarchy.ConsolidationReportingItemHier
  association [0..1] to I_CnsldtnRptgRuleVar     as _Rrvar               on  $projection.ConsolidationReportingRuleID = _Rrvar.ConsolidationReportingRuleID
  association [0..*] to I_CnsldtnRptgRuleVarT    as _Text                on  $projection.ConsolidationReportingRuleID = _Text.ConsolidationReportingRuleID
{
      @ObjectModel.foreignKey.association: '_ConsChartOfAccounts'
  key itclg as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key rihry as ConsolidationReportingItemHier,

      //      @ObjectModel.foreignKey.association: '_Rrvar'
      @ObjectModel.text.association: '_Text'
  key rptid as ConsolidationReportingRuleID,

      _ConsChartOfAccounts,
      _Hierarchy,
      _Rrvar,
      _Text

}
```
