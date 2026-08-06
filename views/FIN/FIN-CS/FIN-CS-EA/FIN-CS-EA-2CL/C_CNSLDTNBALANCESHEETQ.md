---
name: C_CNSLDTNBALANCESHEETQ
description: Balance Sheet - Query
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNBALANCESHEETQ')/$value
semantic_en: Balance Sheet - Query
keywords:
  - Balance Sheet - Query
tags:
  - FIN
  - component:FIN-CS-EA-2CL
  - consumption-view
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
  - metadata-only
---
# C_CNSLDTNBALANCESHEETQ

**Balance Sheet - Query**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNBALANCESHEETQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AmountInTransactionCurrency` | `DECF(34)` |  |
| `AmountInGroupCurrency` | `DECF(34)` |  |
| `AmountInLocalCurrency` | `DECF(34)` |  |
| `CnsldtnQuantityInBaseUnit` | `QUAN(29)` | Quantity |
| `IntmdAmountInGroupCurrency` | `DECF(34)` |  |
| `IntmdAmountInLocalCurrency` | `DECF(34)` |  |
| `IntmdAmountInTransactionCrcy` | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInTransCrcy` | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInLocalCrcy` | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInGroupCrcy` | `DECF(34)` |  |
| `CnsldtnSignAdjdQtyInBaseUnit` | `QUAN(31)` |  |
| `ClsgFiscalYearAmount` | `INT1(3)` |  |
| `PrevFiscalYearAmount` | `INT1(3)` |  |
| `DeltaClsgPrevFiscalYearAmount` | `INT4(10)` |  |
| `DeltaClsgPrevFiscalYearRatio` | `DECF(34)` |  |
| `ClsgFiscalYearPeriodAmount` | `INT1(3)` |  |
| `PrevFiscalYearClsgPeriodAmount` | `INT1(3)` |  |
| `PrevFiscalYearPeriodAmount` | `INT1(3)` |  |
| `DeltaClsgPrevFsclPeriodAmount` | `INT4(10)` |  |
| `DeltaClsgPrevFsclPeriodRatio` | `DECF(34)` |  |
| `ClsgFiscalQuarterAmount` | `INT1(3)` |  |
| `PrevFiscalQuarterAmount` | `INT1(3)` |  |
| `DeltaClsgPrevFiscalQtrAmount` | `INT4(10)` |  |
| `DeltaClsgPrevFiscalQtrRatio` | `DECF(34)` |  |
| `FiscalYearQtrPrevYearAmount` | `INT1(3)` |  |
| `DeltaClsgFsclYrQtrPrevYrAmt` | `INT4(10)` |  |
| `DeltaClsgFsclYrQtrPrevYrRatio` | `DECF(34)` |  |
| `CnsldtnReportingCurrency` | `CUKY(5)` |  |
| `CnsldtnSourceAmount` | `INT1(3)` |  |
| `CnsldtnUnitLevelAmount` | `INT4(10)` |  |
| `CnsldtnRepDataIntAccAmount` | `INT1(3)` |  |
| `CnsldtnRepDataExtAccAmount` | `INT1(3)` |  |
| `CnsldtnAdjustmentsAmount` | `INT1(3)` |  |
| `CnsldtnGroupLevelAmount` | `INT4(10)` |  |
| `CnsldtnEliminationsAmount` | `INT1(3)` |  |
| `CnsldtnConsolidationsAmount` | `INT1(3)` |  |
| `ConsolidationChartOfAccounts` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` | `CHAR(10)` | Consolidation Financial Statement Item |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `ConsolidationGroup` | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` | `CHAR(18)` | Partner Consolidation Unit |
| `ConsolidationUnitForElim` | `CHAR(25)` | Consolidation Unit for Elimination |
| `InvesteeConsolidationUnit` | `CHAR(18)` | Investee Consolidation Unit |
| `InvestorConsolidationUnit` | `CHAR(18)` | Investor Consolidation Unit |
| `Company` | `CHAR(6)` | Company |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `ConsolidationPrftCtrForElim` | `CHAR(25)` | Profit Center for Elimination |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` | `CHAR(25)` | Segment for Elimination |
| `GLAccount` | `CHAR(10)` | Account Number |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `PartnerCostCenter` | `CHAR(10)` | Sender Cost Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `PartnerBusinessArea` | `CHAR(4)` | Trading Partner's Business Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ConsolidationVersion` | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` | `CHAR(3)` | Consolidation Version Element |
| `PostingLevel` | `CHAR(2)` | Posting Level |
| `ConsolidationDocumentType` | `CHAR(2)` | Document Type |
| `SubItemCategory` | `CHAR(3)` | Subitem Category |
| `SubItem` | `CHAR(10)` | Subitem |
| `ConsolidationDimension` | `CHAR(2)` | Dimension |
| `CreationDateTime` | `DEC(15)` | UTC Entry Date Time in Short Form (YYYYMMDDhhmmss) |
| `TransactionCurrency` | `CUKY(5)` | Currency Key |
| `LocalCurrency` | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` | `CUKY(5)` | Group Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `FinancialServicesProductGroup` | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` | `CHAR(10)` | Financial Data Source |
| `GHGCategory` | `CHAR(10)` | Greenhouse Gas Category |
| `GHGScope` | `CHAR(1)` | Greenhouse Gas Scope |
| `GHGScope2CalculationMethod` | `CHAR(2)` | Greenhouse Gas Scope 2 Calculation Method |
| `GHGScope2ContractualInstrument` | `CHAR(5)` | Greenhouse Gas Scope 2 Contractual Instrument |
| `GHGDataQualityCharacteristic` | `CHAR(4)` | Greenhouse Gas Data Quality Characteristic |
| `GHGEnergyClassification` | `CHAR(4)` | Greenhouse Gas Energy Classification |
| `GHGEnergyMix` | `CHAR(9)` | Greenhouse Gas Energy Mix |
| `GHGEnergySourcingType` | `CHAR(10)` | Greenhouse Gas Energy Sourcing Type |
| `SustainabilityModeOfTransport` | `CHAR(3)` | Sustainability Mode of Transport |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `Fund` | `CHAR(10)` | Fund |
| `GrantID` | `CHAR(20)` | Grant |
| `CnsldtnCashLedgerChartOfAccts` | `CHAR(4)` | Cash Origin Chart of Accounts |
| `CashLedgerAccount` | `CHAR(10)` | Cash Origin Account |
| `PeriodMode` | `CHAR(10)` | Period Mode |
| `CnsldtnGroupJrnlEntryItem` | `CHAR(6)` | Group Journal Entry Item |
| `CnsldtnGroupJrnlEntry` | `CHAR(10)` | Group Journal Entry |
| `CnsldtnIntSignAmtInTransCrcy` | `DECF(34)` |  |
| `CnsldtnIntSignAmtInGroupCrcy` | `DECF(34)` |  |
| `CnsldtnIntSignAmtInLocalCrcy` | `DECF(34)` |  |
| `CnsldtnIntSignQtyInBaseUnit` | `QUAN(29)` | Quantity |
| `ConsolidationQuestion` | `CHAR(32)` | Question |
| `ConsolidationPredefinedAnswer` | `CHAR(32)` | Predefined Answer |
| `ConsolidationFreeTextAnswer` | `CHAR(32)` | Reported Answer |
