---
name: I_CNSLDTNRPTGRULEVARVH
description: "This view provides value help for Consolidation Reporting Rule Variant (I_CnsldtnRptgRuleVar). It should be used for value help purposes only. If you intend to select the entire business data, use the view Consolidation Reporting Rule Variant (I_CnsldtnRptgRuleVar) instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARVH')/$value
semantic_en: "This view provides value help for Consolidation Reporting Rule Variant (I_CnsldtnRptgRuleVar). It should be used for value help purposes only. If you intend to select the entire business data, use the view Consolidation Reporting Rule Variant (I_CnsldtnRptgRuleVar) instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Consolidation Reporting Rule Variant — CDS view giao diện dựa trên Consolidation Reporting Rule Variant."
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
  - bo:purchaseorder
---
# I_CNSLDTNRPTGRULEVARVH

**This view provides value help for Consolidation Reporting Rule Variant (I_CnsldtnRptgRuleVar). It should be used for value help purposes only. If you intend to select the entire business data, use the view Consolidation Reporting Rule Variant (I_CnsldtnRptgRuleVar) instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportingRuleID` | ✓ | | `_RuleVar` | `ConsolidationReportingRuleID` | `CHAR(3)` | Reporting Rule Variant |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnRptgRuleVarT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARVH')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICCRRVARVH',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
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
                            #CDS_MODELING_ASSOCIATION_TARGET]
}
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL
}
@EndUserText.label: 'Consolidation Reporting Rule Variant'
define view I_CnsldtnRptgRuleVarVH
  as select distinct from I_CnsldtnRptgRuleVar       as _RuleVar
    inner join            I_CnsldtnRptgRuleVarAssgmt as _RuleVarAssgmt on _RuleVar.ConsolidationReportingRuleID = _RuleVarAssgmt.ConsolidationReportingRuleID
  association [0..*] to I_CnsldtnRptgRuleVarT as _Text on $projection.ConsolidationReportingRuleID = _Text.ConsolidationReportingRuleID
{
      @ObjectModel.text.association: '_Text'
  key _RuleVar.ConsolidationReportingRuleID,

      _Text
}
```
