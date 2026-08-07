---
name: C_CONSOLIDATIONGROUPRPT20Q
description: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT20Q')/$value
semantic_en: "To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - consumption-view
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
  - metadata-only
---
# C_CONSOLIDATIONGROUPRPT20Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPRPT20Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `YearToDateAmountInGrpCrcy` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyInPrevYr` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `PrevPerdYTDAmtInGroupCurrency` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `PerdcAmountInGroupCurrency` |  | |  |  | `INT1(3)` |  |
| `PrevYrPerdYTDAmtInGrpCurrency` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `PreviousYearPerdcAmtInGrpCrcy` |  | |  |  | `INT1(3)` |  |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationLedger` |  | |  |  | `CHAR(2)` | Ledger |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PreviousFiscalYear` |  | |  |  | `NUMC(4)` |  |
| `PreviousPeriodBackShift1` |  | |  |  | `NUMC(3)` |  |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` |  |
| `FinancialStatementItemHier` |  | |  |  | `CHAR(10)` |  |
