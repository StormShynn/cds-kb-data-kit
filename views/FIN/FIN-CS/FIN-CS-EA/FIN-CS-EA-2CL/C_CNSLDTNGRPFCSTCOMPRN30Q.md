---
name: C_CNSLDTNGRPFCSTCOMPRN30Q
description: To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPFCSTCOMPRN30Q')/$value
semantic_en: To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# C_CNSLDTNGRPFCSTCOMPRN30Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPFCSTCOMPRN30Q')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConsolidationReportingItem` | `CHAR(10)` | Reporting Item |
| `ConsolidationDimension` | `CHAR(2)` | Dimension |
| `ConsolidationUnit` | `CHAR(18)` | Consolidation Unit |
| `SubItemCategory` | `CHAR(3)` | Subitem Category |
| `SubItem` | `CHAR(10)` | Subitem |
| `PartnerConsolidationUnit` | `CHAR(18)` | Partner Unit |
| `PostingLevel` | `CHAR(2)` | Posting Level |
| `CurrencyConversionsDiffType` | `NUMC(1)` | Currency Translation |
| `ConsolidationDocumentType` | `CHAR(2)` | Document Type |
| `ActualYTDAmountInGroupCrcy1` | `CURR(23)` | Cumulative Value in Group Currency |
| `ActualYTDAmountInGroupCrcy2` | `CURR(23)` | Cumulative Value in Group Currency |
| `ActualAmountInGroupCrcy` | `INT1(3)` |  |
| `BudgetYTDAmountInGrpCurrency1` | `CURR(23)` | Cumulative Value in Group Currency |
| `BudgetYTDAmountInGrpCurrency2` | `CURR(23)` | Cumulative Value in Group Currency |
| `BudgetAmountInGroupCurrency` | `INT1(3)` |  |
| `OverAllVarianceAmountInGrpCrcy` | `INT1(3)` |  |
| `AmtInCnsldtnYrFcstGrpCrcy` | `CURR(23)` | Cumulative Value in Group Currency |
| `AmtInCnsldtnYrBdgtGrpCrcy` | `CURR(23)` | Cumulative Value in Group Currency |
| `AnnualBasedVarcAmtInGrpCrcy` | `INT1(3)` |  |
| `AnnualVarianceRate` | `INT1(3)` |  |
| `GroupCurrency` | `CUKY(5)` | Group Currency |
| `ConsolidationGroup` | `CHAR(18)` | Consolidation Group |
| `FiscalYear` | `NUMC(4)` |  |
| `FiscalPeriod` | `NUMC(3)` |  |
| `ConsolidationVersion` | `CHAR(3)` |  |
| `ConsolidationChartOfAccounts` | `CHAR(2)` |  |
| `ConsolidationReportingItemHier` | `CHAR(10)` |  |
| `PreviousPeriodBackShift1` | `NUMC(3)` |  |
| `ConsolidationReportingRuleID` | `CHAR(3)` |  |
