---
name: C_CONSOLIDATIONGROUPOVRVIEW10Q
description: To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW10Q')/$value
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
# C_CONSOLIDATIONGROUPOVRVIEW10Q

**To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONGROUPOVRVIEW10Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `YTDAmtInGroupCurrencyForPerd01` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd02` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd03` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd04` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd05` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd06` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd07` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd08` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd09` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd10` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd11` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGroupCurrencyForPerd12` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyForYrShft1` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyForYrShft2` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDAmtInGrpCrcyForYrShft3` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `FiscalYear` |  | |  |  | `NUMC(4)` |  |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` |  |
| `NextFiscalYear` |  | |  |  | `NUMC(4)` |  |
| `FiscalYearShift2` |  | |  |  | `NUMC(4)` |  |
| `FiscalYearShift3` |  | |  |  | `NUMC(4)` |  |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` |  |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` |  |
| `FinancialStatementItemHier` |  | |  |  | `CHAR(10)` |  |
