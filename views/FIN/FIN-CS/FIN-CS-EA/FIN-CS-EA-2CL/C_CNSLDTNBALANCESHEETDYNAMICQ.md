---
name: C_CNSLDTNBALANCESHEETDYNAMICQ
description: "Balance Sheet with Temporary Node - Qry"
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNBALANCESHEETDYNAMICQ')/$value
semantic_en: "Balance Sheet with Temporary Node - Qry"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-CS-EA-2CL
  - consumption-view
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
  - metadata-only
---
# C_CNSLDTNBALANCESHEETDYNAMICQ

**Balance Sheet with Temporary Node - Qry**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNBALANCESHEETDYNAMICQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AmountInTransactionCurrency` |  | |  |  | `DECF(34)` |  |
| `AmountInGroupCurrency` |  | |  |  | `DECF(34)` |  |
| `AmountInLocalCurrency` |  | |  |  | `DECF(34)` |  |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `IntmdAmountInGroupCurrency` |  | |  |  | `DECF(34)` |  |
| `IntmdAmountInLocalCurrency` |  | |  |  | `DECF(34)` |  |
| `IntmdAmountInTransactionCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInTransCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInLocalCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInGroupCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdQtyInBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `ClsgFiscalYearAmount` |  | |  |  | `DEC(23)` |  |
| `PrevFiscalYearAmount` |  | |  |  | `DEC(23)` |  |
| `DeltaClsgPrevFiscalYearAmount` |  | |  |  | `DEC(24)` |  |
| `DeltaClsgPrevFiscalYearRatio` |  | |  |  | `DECF(34)` |  |
| `ClsgFiscalYearPeriodAmount` |  | |  |  | `DEC(1)` |  |
| `PrevFiscalYearClsgPeriodAmount` |  | |  |  | `DEC(1)` |  |
| `PrevFiscalYearPeriodAmount` |  | |  |  | `DEC(1)` |  |
| `DeltaClsgPrevFsclPeriodAmount` |  | |  |  | `DEC(2)` |  |
| `DeltaClsgPrevFsclPeriodRatio` |  | |  |  | `DECF(34)` |  |
| `ClsgFiscalQuarterAmount` |  | |  |  | `DEC(23)` |  |
| `PrevFiscalQuarterAmount` |  | |  |  | `DEC(23)` |  |
| `DeltaClsgPrevFiscalQtrAmount` |  | |  |  | `DEC(24)` |  |
| `DeltaClsgPrevFiscalQtrRatio` |  | |  |  | `DECF(34)` |  |
| `FiscalYearQtrPrevYearAmount` |  | |  |  | `DEC(23)` |  |
| `DeltaClsgFsclYrQtrPrevYrAmt` |  | |  |  | `DEC(24)` |  |
| `DeltaClsgFsclYrQtrPrevYrRatio` |  | |  |  | `DECF(34)` |  |
| `CnsldtnReportingCurrency` |  | |  |  | `CUKY(5)` |  |
| `CnsldtnSourceAmount` |  | |  |  | `CURR(23)` | Source Amount |
| `CnsldtnUnitLevelAmount` |  | |  |  | `CURR(25)` |  |
| `CnsldtnRepDataIntAccAmount` |  | |  |  | `CURR(23)` | Reported Data Internal Accounting |
| `CnsldtnRepDataExtAccAmount` |  | |  |  | `CURR(23)` | Reported Data External Accounting Amount |
| `CnsldtnAdjustmentsAmount` |  | |  |  | `CURR(23)` | Adjustments Amount |
| `CnsldtnGroupLevelAmount` |  | |  |  | `CURR(24)` |  |
| `CnsldtnEliminationsAmount` |  | |  |  | `CURR(23)` | Eliminations Amount |
| `CnsldtnConsolidationsAmount` |  | |  |  | `CURR(23)` | Consolidations Amount |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `HiddenCnsldtnUnitDimension` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `HiddenCnsldtnUnitForElimDimn` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Consolidation Unit |
| `InvestorConsolidationUnit` |  | |  |  | `CHAR(18)` | Investor Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `HiddenCnsldtnPrftCtrDimension` |  | |  |  | `CHAR(10)` | Profit Center |
| `HiddenCnsldtnCtrlgAreaDimn` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `HidnCnsldtnPrftCtrForElimDimn` |  | |  |  | `CHAR(25)` | Consolidation Profit Center for Elimination |
| `HiddenCnsldtnCtrlArForElimDimn` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Profit Center for Elimination |
| `HiddenCnsldtnSegmentDimension` |  | |  |  | `CHAR(10)` | Segment |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `HiddenCnsldtnSgmtForElimDimn` |  | |  |  | `CHAR(25)` | Consolidation Segment for Elimination |
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
| `PeriodMode` |  | |  |  | `CHAR(10)` | Period Mode |
| `CnsldtnGroupJrnlEntryItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `CnsldtnGroupJrnlEntry` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `CnsldtnIntSignAmtInTransCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignAmtInGroupCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignAmtInLocalCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignQtyInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
