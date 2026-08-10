---
name: I_CNSLDTNRPTGRULE
description: "This CDS view extracts reporting rule data based on table FINCS_RI_RT to SAP BW/4HANA and SAP Datasphere. Reporting rules can be created using the Define Reporting Rules app. To help you decide which CDS view to use for your purpose, SAP has introduced the annotation ObjectModel.supportedCapabilities, which indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULE')/$value
semantic_en: "This CDS view extracts reporting rule data based on table FINCS_RI_RT to SAP BW/4HANA and SAP Datasphere. Reporting rules can be created using the Define Reporting Rules app. To help you decide which CDS view to use for your purpose, SAP has introduced the annotation ObjectModel.supportedCapabilities, which indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNRPTGRULE

**This CDS view extracts reporting rule data based on table FINCS_RI_RT to SAP BW/4HANA and SAP Datasphere. Reporting rules can be created using the Define Reporting Rules app. To help you decide which CDS view to use for your purpose, SAP has introduced the annotation ObjectModel.supportedCapabilities, which indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnRptgRuleUUID` |  | |  |  | `CHAR(32)` | Financial Consolidation UUID |
| `SequenceNumber` |  | |  |  | `NUMC(6)` | Reporting Rule Position Number |
| `ConsolidationReportingRuleID` |  | |  |  | `CHAR(3)` | Reporting Rule Variant |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` |  | |  |  | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationReverseSign` |  | |  |  | `CHAR(2)` | Reverse Sign Indicator |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `FromFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ToFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
