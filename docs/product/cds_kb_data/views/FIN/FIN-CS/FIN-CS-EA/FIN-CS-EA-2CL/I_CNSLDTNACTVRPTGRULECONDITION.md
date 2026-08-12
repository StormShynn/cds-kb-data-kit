---
name: I_CNSLDTNACTVRPTGRULECONDITION
description: "Consolidation Reporting Rule Condition"
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNACTVRPTGRULECONDITION')/$value
semantic_en: "Consolidation Reporting Rule Condition"
semantic_vi: "Consolidation Reporting Rule Condition — CDS view cơ bản dựa trên fincs_rr_rt_cond."
keywords:
  - "consolidation"
  - "reporting"
  - "rule"
  - "condition"
  - "chart"
  - "accounts"
  - "item"
  - "hier"
  - "cnsldtn"
  - "rptg"
  - "activation"
  - "mode"
  - "static"
  - "date"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - bo:companycode
---
# I_CNSLDTNACTVRPTGRULECONDITION

**Consolidation Reporting Rule Condition**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNACTVRPTGRULECONDITION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | | `_Source` | `itclg` | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` | ✓ | | `_Source` | `rihry` | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingRuleID` | ✓ | | `_Source` | `rptid` | `CHAR(3)` | Reporting Rule |
| `CnsldtnRptgRuleActivationMode` | ✓ | | `_Source` | `rule_activation_mode` | `CHAR(1)` | Reporting Rule Activation Mode |
| `CnsldtnRptgRuleStaticModeDate` | ✓ | | `_Source` | `rule_static_mode_date` | `DATS(8)` | Reporting Rule Static Mode Date |
| `ConsolidationReportingItem` | ✓ | | `_Source` | `repitem` | `CHAR(10)` | Reporting Item |
| `FinancialSelection` | ✓ | | `_Source` | `usel_id` | `CHAR(32)` | Selection |
| `ConsolidationCharacteristic` | ✓ | | `_Source` | `characteristic` | `CHAR(30)` | Characteristic |
| `CnsldtnActiveRptgRuleSequence` | ✓ | | `_Source` | `posnr` | `NUMC(9)` | Active Reporting Rule Sequence |
| `CnsldtnFSItemAttributeVersion` |  | | `_Source` | `iatvs` | `CHAR(3)` | FS Item Attributes Version |
| `CnsldtnUnitAttributeVersion` |  | | `_Source` | `cuavs` | `CHAR(3)` | Consolidation Unit Attributes |
| `FiscalYearVariant` |  | | `_Source` | `periv` | `CHAR(2)` | Fiscal Year Variant |
| `CnsldtnCharacteristicValue` |  | | `_Source` | `characteristic_value` | `CHAR(100)` | Characteristic Value |
| `SignIsInverted` |  | | `_Source` | `revsign` | `CHAR(1)` | Sign is Inverted |
| `CnsldtnCharcGlobalFieldName` |  | | `_Source` | `charc_global_field_name` | `CHAR(30)` | Characteristic Global Field Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNACTVRPTGRULECONDITION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNACTVRPTGRULECONDITION')/$value)*

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSACTVRPTGRULECONDITION'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
}
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory: #L
  },
  modelingPattern: #NONE,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnActiveRptgRuleCondition'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Reporting Rule Condition'
define view entity I_CnsldtnActvRptgRuleCondition
  as select from fincs_rr_rt_cond as _Source
{

  key _Source.itclg                   as ConsolidationChartOfAccounts,

  key _Source.rihry                   as ConsolidationReportingItemHier,

  key _Source.rptid                   as ConsolidationReportingRuleID,

  key _Source.rule_activation_mode    as CnsldtnRptgRuleActivationMode,

      @Semantics.businessDate.at: true
  key _Source.rule_static_mode_date   as CnsldtnRptgRuleStaticModeDate,

  key _Source.repitem                 as ConsolidationReportingItem,

  key _Source.usel_id                 as FinancialSelection,

  key _Source.characteristic          as ConsolidationCharacteristic,

  key _Source.posnr                   as CnsldtnActiveRptgRuleSequence,

      _Source.iatvs                   as CnsldtnFSItemAttributeVersion,

      _Source.cuavs                   as CnsldtnUnitAttributeVersion,

      _Source.periv                   as FiscalYearVariant,

      _Source.characteristic_value    as CnsldtnCharacteristicValue,

      _Source.revsign                 as SignIsInverted,

      _Source.charc_global_field_name as CnsldtnCharcGlobalFieldName

}
```
