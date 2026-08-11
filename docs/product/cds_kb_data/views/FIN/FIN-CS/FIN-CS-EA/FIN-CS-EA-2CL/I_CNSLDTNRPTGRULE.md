---
name: I_CNSLDTNRPTGRULE
description: "This CDS view extracts reporting rule data based on table FINCS_RI_RT to SAP BW/4HANA and SAP Datasphere. Reporting rules can be created using the Define Reporting Rules app. To help you decide which CDS view to use for your purpose, SAP has introduced the annotation ObjectModel.supportedCapabilities, which indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULE')/$value
semantic_en: "This CDS view extracts reporting rule data based on table FINCS_RI_RT to SAP BW/4HANA and SAP Datasphere. Reporting rules can be created using the Define Reporting Rules app. To help you decide which CDS view to use for your purpose, SAP has introduced the annotation ObjectModel.supportedCapabilities, which indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_CNSLDTNRPTGRULE — CDS view cơ bản dựa trên fincs_ri_rt."
keywords:
  - "cnsldtnrptgrule"
  - "cnsldtn"
  - "rptg"
  - "rule"
  - "sequence"
  - "number"
  - "consolidation"
  - "reporting"
  - "chart"
  - "accounts"
  - "item"
  - "hier"
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
# I_CNSLDTNRPTGRULE

**This CDS view extracts reporting rule data based on table FINCS_RI_RT to SAP BW/4HANA and SAP Datasphere. Reporting rules can be created using the Define Reporting Rules app. To help you decide which CDS view to use for your purpose, SAP has introduced the annotation ObjectModel.supportedCapabilities, which indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnRptgRuleUUID` | ✓ | |  | `uuid` | `CHAR(32)` | Financial Consolidation UUID |
| `SequenceNumber` | ✓ | |  | `posnr` | `NUMC(6)` | Reporting Rule Position Number |
| `ConsolidationReportingRuleID` |  | |  | `rptid` | `CHAR(3)` | Reporting Rule Variant |
| `ConsolidationChartOfAccounts` |  | |  | `itclg` | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` |  | |  | `rihry` | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingItem` |  | |  | `ritem` | `CHAR(10)` | Reporting Item |
| `FinancialStatementItem` |  | |  | `item` | `CHAR(10)` | Financial Statement Item |
| `SubItemCategory` |  | |  | `sityp` | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  | `sitem` | `CHAR(10)` | Subitem |
| `ConsolidationDocumentType` |  | |  | `docty` | `CHAR(2)` | Document Type |
| `ConsolidationUnit` |  | |  | `bunit` | `CHAR(18)` | Consolidation Unit |
| `ConsolidationReverseSign` |  | |  | `revsign` | `CHAR(2)` | Reverse Sign Indicator |
| `ConsolidationVersion` |  | |  | `rvers` | `CHAR(3)` | Consolidation Version |
| `FromFiscalYearPeriod` |  | |  | `cast(fromyearper as fis_jahrper_conv preserving type )` | `NUMC(7)` | Fiscal Year Period |
| `ToFiscalYearPeriod` |  | |  | `cast(toyearper as fis_jahrper_conv preserving type )` | `NUMC(7)` | Fiscal Year Period |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULE')/$value)*

```abap
@Analytics: {
  technicalName: 'ICCRRULE',
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: false,
      mapping: [{
                  table: 'FINCS_RI_RT',
                  role: #MAIN,
                  viewElement: ['CnsldtnRptgRuleUUID', 'SequenceNumber'],
                  tableElement: ['UUID', 'POSNR']
                }]
    }
  }
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY
}

@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities: [#SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
  sapObjectNodeType.name: 'ConsolidationReportingRule'
}
@VDM: {
  viewType: #BASIC
}
@EndUserText: {
  label: 'Consolidation Reporting Rule'
}

define view entity I_CnsldtnRptgRule
  as select from fincs_ri_rt
{
  key uuid                                                   as CnsldtnRptgRuleUUID,

  key posnr                                                  as SequenceNumber,

      rptid                                                  as ConsolidationReportingRuleID,

      itclg                                                  as ConsolidationChartOfAccounts,

      rihry                                                  as ConsolidationReportingItemHier,

      ritem                                                  as ConsolidationReportingItem,

      item                                                   as FinancialStatementItem,

      sityp                                                  as SubItemCategory,

      sitem                                                  as SubItem,

      docty                                                  as ConsolidationDocumentType,

      bunit                                                  as ConsolidationUnit,

      revsign                                                as ConsolidationReverseSign,

      rvers                                                  as ConsolidationVersion,

      cast(fromyearper as fis_jahrper_conv preserving type ) as FromFiscalYearPeriod,

      cast(toyearper as fis_jahrper_conv preserving type )   as ToFiscalYearPeriod
}
```
