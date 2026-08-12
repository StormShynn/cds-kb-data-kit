---
name: I_CNSLDTNRPTGRULEIDINDEX
description: "This CDS view provides parameter values for Fiscal Year, Fiscal Period, and Consolidation Version. For these parameter values, all valid consolidation reporting rule IDs are returned. The view also provides the consolidation reporting rule version that maps the consolidation version and the validity start and end date for the given consolidation reporting rule ID."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEIDINDEX')/$value
semantic_en: "This CDS view provides parameter values for Fiscal Year, Fiscal Period, and Consolidation Version. For these parameter values, all valid consolidation reporting rule IDs are returned. The view also provides the consolidation reporting rule version that maps the consolidation version and the validity start and end date for the given consolidation reporting rule ID."
semantic_vi: "Consolidation Reporting Rule Variant Index — CDS view giao diện dựa trên P_CNSLDTNRPTGRULEIDINDEX1."
keywords:
  - "consolidation"
  - "reporting"
  - "rule"
  - "variant"
  - "index"
  - "vers"
  - "current"
  - "date"
  - "validity"
  - "start"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - bo:purchaseorder
---
# I_CNSLDTNRPTGRULEIDINDEX

**This CDS view provides parameter values for Fiscal Year, Fiscal Period, and Consolidation Version. For these parameter values, all valid consolidation reporting rule IDs are returned. The view also provides the consolidation reporting rule version that maps the consolidation version and the validity start and end date for the given consolidation reporting rule ID.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEIDINDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportingRuleVers` | ✓ | |  |  | `CHAR(3)` | Reporting Rule Version |
| `CurrentDate` | ✓ | |  |  | `CHAR(7)` |  |
| `ConsolidationReportingRuleID` |  | |  |  | `CHAR(3)` | Reporting Rule Variant |
| `ValidityStartDate` |  | |  |  | `NUMC(7)` | Valid-From Fiscal Period and Year |
| `ValidityEndDate` |  | |  |  | `NUMC(7)` | Valid-To Fiscal Period and Year |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEIDINDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEIDINDEX')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICCRRIDINDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel: {
    usageType: {
      dataClass: #CUSTOMIZING,
      serviceQuality: #D,
      sizeCategory: #S
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE ] 
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Consolidation Reporting Rule Variant Index'
define view I_CnsldtnRptgRuleIdIndex 
with parameters
P_FiscalYear: gjahr,
P_FiscalPeriod: poper,
P_ConsolidationVersion: fincs_rvers
as select from P_CNSLDTNRPTGRULEIDINDEX1(
        p_fiscalyear: $parameters.P_FiscalYear, 
        p_fiscalperiod: $parameters.P_FiscalPeriod,
        P_ConsolidationVersion: $parameters.P_ConsolidationVersion )

{ 
 key ConsolidationReportingRuleVers,
//  cast(lpad( ValidityStartDate ,4,'0') as ryear)  as ValidityStartYear,
//  cast(lpad( ValidityEndDate ,4,'0') as ryear)  as ValidityEndYear,
 key CurrentDate,
  
  ConsolidationReportingRuleID,
  ValidityStartDate,
  ValidityEndDate
}
where CurrentDate >= ValidityStartDate
and CurrentDate <= ValidityEndDate
```
