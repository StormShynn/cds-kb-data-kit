---
name: C_CNSLDTNINCSTMNTFUNCOFEXPNQ
description: This query corresponds to the data provider for the Function of Expense tab of the Group Financial Statements Review Booklet app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNINCSTMNTFUNCOFEXPNQ')/$value
semantic_en: This query corresponds to the data provider for the Function of Expense tab of the Group Financial Statements Review Booklet app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Income Statement - Function of Expense
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
# C_CNSLDTNINCSTMNTFUNCOFEXPNQ

**This query corresponds to the data provider for the Function of Expense tab of the Group Financial Statements Review Booklet app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNINCSTMNTFUNCOFEXPNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Value in Transaction Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Value in Group Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Value in Local Currency |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `CnsldtnSignAdjdAmtInTransCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInLocalCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInGroupCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdQtyInBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `ClsgFiscalYearAmount` |  | |  |  | `INT1(3)` |  |
| `PrevFiscalYearAmount` |  | |  |  | `INT1(3)` |  |
| `DeltaClsgPrevFiscalYearAmount` |  | |  |  | `INT4(10)` |  |
| `DeltaClsgPrevFiscalYearRatio` |  | |  |  | `DECF(34)` |  |
| `ClsgFiscalYearPeriodAmount` |  | |  |  | `INT1(3)` |  |
| `PrevFiscalYearPeriodAmount` |  | |  |  | `INT1(3)` |  |
| `DeltaClsgPrevFsclPeriodAmount` |  | |  |  | `INT4(10)` |  |
| `DeltaClsgPrevFsclPeriodRatio` |  | |  |  | `DECF(34)` |  |
| `ClsgFiscalQuarterAmount` |  | |  |  | `INT1(3)` |  |
| `PrevFiscalQuarterAmount` |  | |  |  | `INT1(3)` |  |
| `DeltaClsgPrevFiscalQtrAmount` |  | |  |  | `INT4(10)` |  |
| `DeltaClsgPrevFiscalQtrRatio` |  | |  |  | `DECF(34)` |  |
| `FiscalYearQtrPrevYearAmount` |  | |  |  | `INT1(3)` |  |
| `DeltaClsgFsclYrQtrPrevYrAmt` |  | |  |  | `INT4(10)` |  |
| `DeltaClsgFsclYrQtrPrevYrRatio` |  | |  |  | `DECF(34)` |  |
| `CnsldtnReportingCurrency` |  | |  |  | `CUKY(5)` |  |
| `ClsgFiscalYearToDateAmount` |  | |  |  | `INT1(3)` |  |
| `ClsgPrevFiscalYearToDateAmount` |  | |  |  | `INT1(3)` |  |
| `DeltaClsgPrevFsclYTDAmount` |  | |  |  | `INT4(10)` |  |
| `DeltaClsgPrevFsclYTDRatio` |  | |  |  | `DECF(34)` |  |
| `FiscalYrPeriodPrevYrAmt` |  | |  |  | `INT1(3)` |  |
| `DeltaActFsclYrPerdPrevYrAmt` |  | |  |  | `INT4(10)` |  |
| `DeltaActFsclYrPerdPrevYrRatio` |  | |  |  | `DECF(34)` |  |
| `ClsgFiscalPeriodAmount` |  | |  |  | `INT1(3)` |  |
| `BudgetFiscalPeriodAmount` |  | |  |  | `INT1(3)` |  |
| `DeltaActBdgtFsclPeriodAmount` |  | |  |  | `INT4(10)` |  |
| `DeltaActBdgtFsclPeriodRatio` |  | |  |  | `DECF(34)` |  |
| `ActualFiscalYearToDateAmount` |  | |  |  | `INT1(3)` |  |
| `BudgetFiscalYearToDateAmount` |  | |  |  | `INT1(3)` |  |
| `DeltaActBdgtFsclYearToDateAmt` |  | |  |  | `INT4(10)` |  |
| `DeltaActBdgtFsclYTDRatio` |  | |  |  | `DECF(34)` |  |
| `ActCnstntCrcyFsclPerdAmt` |  | |  |  | `INT1(3)` |  |
| `DeltaActCnstntFsclYrPerdAmt` |  | |  |  | `INT4(10)` |  |
| `DeltaBdgtActCnstntFYPerdAmt` |  | |  |  | `INT4(10)` |  |
| `CnsldtnSourceAmount` |  | |  |  | `INT1(3)` |  |
| `CnsldtnUnitLevelAmount` |  | |  |  | `INT4(10)` |  |
| `CnsldtnRepDataIntAccAmount` |  | |  |  | `INT1(3)` |  |
| `CnsldtnRepDataExtAccAmount` |  | |  |  | `INT1(3)` |  |
| `CnsldtnAdjustmentsAmount` |  | |  |  | `INT1(3)` |  |
| `CnsldtnGroupLevelAmount` |  | |  |  | `INT4(10)` |  |
| `CnsldtnEliminationsAmount` |  | |  |  | `INT1(3)` |  |
| `CnsldtnConsolidationsAmount` |  | |  |  | `INT1(3)` |  |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Consolidation Unit |
| `InvestorConsolidationUnit` |  | |  |  | `CHAR(18)` | Investor Consolidation Unit |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `GHGCategory` |  | |  |  | `CHAR(10)` | Greenhouse Gas Category |
| `GHGScope` |  | |  |  | `CHAR(1)` | Greenhouse Gas Scope |
| `GHGScope2CalculationMethod` |  | |  |  | `CHAR(2)` | Greenhouse Gas Scope 2 Calculation Method |
| `GHGScope2ContractualInstrument` |  | |  |  | `CHAR(5)` | Greenhouse Gas Scope 2 Contractual Instrument |
| `GHGDataQualityCharacteristic` |  | |  |  | `CHAR(4)` | Greenhouse Gas Data Quality Characteristic |
| `GHGEnergyClassification` |  | |  |  | `CHAR(4)` | Greenhouse Gas Energy Classification |
| `GHGEnergyMix` |  | |  |  | `CHAR(9)` | Greenhouse Gas Energy Mix |
| `GHGEnergySourcingType` |  | |  |  | `CHAR(10)` | Greenhouse Gas Energy Sourcing Type |
| `SustainabilityModeOfTransport` |  | |  |  | `CHAR(3)` | Sustainability Mode of Transport |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `CnsldtnCashLedgerChartOfAccts` |  | |  |  | `CHAR(4)` | Cash Origin Chart of Accounts |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Profit Center for Elimination |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  |  | `CHAR(25)` | Segment for Elimination |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` |  | |  |  | `CHAR(3)` | Consolidation Version Element |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Entry Date Time in Short Form (YYYYMMDDhhmmss) |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CnsldtnGroupJrnlEntry` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `CnsldtnGroupJrnlEntryItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `ConsolidationQuestion` |  | |  |  | `CHAR(32)` | Question |
| `ConsolidationPredefinedAnswer` |  | |  |  | `CHAR(32)` | Predefined Answer |
| `ConsolidationFreeTextAnswer` |  | |  |  | `CHAR(32)` | Reported Answer |
| `CnsldtnIntSignAmtInTransCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignAmtInGroupCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignAmtInLocalCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignQtyInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
