---
name: I_CNSLDTNRPTGRULEVAR
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVAR')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Consolidation Reporting Rule Variant — CDS view giao diện dựa trên fincs_rrlid."
keywords:
  - "consolidation"
  - "reporting"
  - "rule"
  - "variant"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNRPTGRULEVAR

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportingRuleID` | ✓ | |  | `rptid` | `CHAR(3)` | Reporting Rule Variant |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnRptgRuleVarT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVAR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVAR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICCRRVAR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Reporting Rule Variant'
@ObjectModel: {
    representativeKey: 'ConsolidationReportingRuleID',
    usageType: {
      dataClass: #CUSTOMIZING,
      serviceQuality: #B,
      sizeCategory: #M
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations:true
define view I_CnsldtnRptgRuleVar
  as select from fincs_rrlid
    inner join   I_CnsldtnGlobalSetting as _cxb3 on  _cxb3.SequenceNumber                 = '1'
                                                 and _cxb3.CnsldtnAddlRptgRuleDimnAreActv = ''
  association [0..*] to I_CnsldtnRptgRuleVarT as _Text on $projection.ConsolidationReportingRuleID = _Text.ConsolidationReportingRuleID

{
  key rptid as ConsolidationReportingRuleID,
      //  rptid as CnsldtnRptgRuleID, //@DeleteAfterwards

      _Text
}
```
