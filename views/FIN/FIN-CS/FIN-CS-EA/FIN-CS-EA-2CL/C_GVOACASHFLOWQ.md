---
name: C_GVOACASHFLOWQ
description: GVoA Cash Flow Statement Query
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GVOACASHFLOWQ')/$value
semantic_en: GVoA Cash Flow Statement Query
keywords:
  - GVoA Cash Flow Statement Query
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
# C_GVOACASHFLOWQ

**GVoA Cash Flow Statement Query**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GVOACASHFLOWQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AmountInTransactionCurrency` | `DEC(23)` | Amount in Transaction Currency |
| `AmountInGroupCurrency` | `DEC(23)` | Amount in Group Currency |
| `AmountInLocalCurrency` | `DEC(23)` | Amount in Local Currency |
| `CnsldtnQuantityInBaseUnit` | `QUAN(29)` | Quantity |
| `CnsldtnSignAdjdAmtInTransCrcy` | `DEC(26)` |  |
| `CnsldtnSignAdjdAmtInLocalCrcy` | `DEC(26)` |  |
| `CnsldtnSignAdjdAmtInGroupCrcy` | `DEC(26)` |  |
| `CnsldtnSignAdjdQtyInBaseUnit` | `QUAN(31)` |  |
| `GVoAAccountingValue` | `DEC(1)` | Accounting |
| `GVoAReleasedValue` | `DEC(1)` | Released Value |
| `GVoAAdjustedValue` | `DEC(1)` | Group Reporting Adjusted Value |
| `GVoARetranslatedValue` | `DEC(1)` | Group Reporting Retranslated Value |
| `ConsolidationChartOfAccounts` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `ConsolidationGroup` | `CHAR(18)` | Consolidation Group |
| `FinancialStatementItem` | `CHAR(10)` | Consolidation Financial Statement Item |
| `ConsolidationReportingItem` | `CHAR(10)` | Reporting Item |
| `ConsolidationUnit` | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` | `CHAR(18)` | Partner Consolidation Unit |
| `InvesteeConsolidationUnit` | `CHAR(18)` | Investee Consolidation Unit |
| `InvestorConsolidationUnit` | `CHAR(18)` | Investee Consolidation Unit |
| `Company` | `CHAR(6)` | Company |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `PartnerCostCenter` | `CHAR(10)` | Sender Cost Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `PartnerBusinessArea` | `CHAR(4)` | Trading Partner's Business Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ConsolidationVersion` | `CHAR(3)` | Consolidation Version |
| `PostingLevel` | `CHAR(2)` | Posting Level |
| `ConsolidationDocumentType` | `CHAR(2)` | Document Type |
| `SubItemCategory` | `CHAR(3)` | Subitem Category |
| `SubItem` | `CHAR(10)` | Subitem |
| `ConsolidationDimension` | `CHAR(2)` | Dimension |
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
| `CnsldtnGroupJrnlEntry` | `CHAR(10)` | Group Journal Entry |
| `CnsldtnGroupJrnlEntryItem` | `CHAR(6)` | Group Journal Entry Item |
| `GVoAAcctgDeltaReleasedValue` | `DEC(1)` | Delta Group Reporting Accounting Value |
| `GVoAAccountingUnreleasedValue` | `DEC(1)` | Accounting Unreleased |
| `GVoAAccountingReleasedValue` | `DEC(1)` | Accounting Released |
| `GVoAClsgFYAcctgVal` | `DEC(23)` |  |
| `GVoAPrevFiscalYearAcctgVal` | `DEC(23)` |  |
| `GVoAPrevFYClsgPeriodAcctgVal` | `DEC(1)` |  |
| `GVoAPrevFYPeriodAcctgVal` | `DEC(1)` |  |
| `GVoAClsgFsclQtrAcctgVal` | `DEC(23)` |  |
| `GVoAPrevFiscalQuarterAcctgVal` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYearAcctgVal` | `DEC(23)` |  |
| `GVoAClsgFYReldVal` | `DEC(23)` |  |
| `GVoAPrevFYReldVal` | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdReldVal` | `DEC(1)` |  |
| `GVoAPrevFYPerdReldVal` | `DEC(1)` |  |
| `GVoAClsgFsclQtrReldVal` | `DEC(23)` |  |
| `GVoAPrevFsclQtrReldVal` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrReldVal` | `DEC(23)` |  |
| `GVoAClsgFYRtrnsltdVal` | `DEC(23)` |  |
| `GVoAPrevFYRtrnsltdVal` | `DEC(23)` |  |
| `GVoAPrevFYClsPerdRtrnsltVal` | `DEC(1)` |  |
| `GVoAPrevFYPerdRtrnsltdVal` | `DEC(1)` |  |
| `GVoAClsgFsclQtrRtrnsltdVal` | `DEC(23)` |  |
| `GVoAPrevFsclQtrRtrnsltdVal` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrRtrnsltdVal` | `DEC(23)` |  |
| `GVoAClsgFYAdjdVal` | `DEC(23)` |  |
| `GVoAPrevFYAdjdVal` | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdAdjdVal` | `DEC(1)` |  |
| `GVoAPrevFYPerdAdjdVal` | `DEC(1)` |  |
| `GVoAClsgFsclQtrAdjdVal` | `DEC(23)` |  |
| `GVoAPrevFsclQtrAdjdVal` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrAdjdVal` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDteRtrnsltdVal` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateReldVal` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateAdjdVal` | `DEC(23)` |  |
| `GVoAClsgFYToDateRtrnsltVal` | `DEC(23)` |  |
| `GVoAClsgFYToDateReldVal` | `DEC(23)` |  |
| `GVoAClsgFYToDateAdjdVal` | `DEC(23)` |  |
| `GVoAClsgFYToDateAcctgReldVal` | `DEC(23)` |  |
| `GVoAClsgFYToDateAcctgUnreldVal` | `DEC(23)` |  |
| `CnsldtnReportingCurrency` | `CUKY(5)` |  |
| `GVoAClsgFYToDateAcctgVal` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateAcctgVal` | `DEC(23)` |  |
| `GVoAClsPrevFYToDteAcctgReldVal` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateUnreldVal` | `DEC(23)` |  |
| `GVoAClsgFsclQtrAcctgReldVal` | `DEC(23)` |  |
| `GVoAPrevFsclQtrAcctgReldVal` | `DEC(23)` |  |
| `GVoAPrevFsclQtrAcctgUnreldVal` | `DEC(23)` |  |
| `GVoAPrevFsclQtrDeltaReldVal` | `DEC(23)` |  |
| `GVoAClsgFsclQtrDeltaReldVal` | `DEC(23)` |  |
| `GVoAClsgFsclQtrAcctgUnreldVal` | `DEC(23)` |  |
| `GVoAClsgFYAcctgDeltaReldVal` | `DEC(23)` |  |
| `GVoAClsgFYAcctgUnreldVal` | `DEC(23)` |  |
| `GVoAPrevFYAcctgUnreldVal` | `DEC(23)` |  |
| `GVoAClsgFYAcctgReldVal` | `DEC(23)` |  |
| `GVoAPrevFYAcctgReldVal` | `DEC(23)` |  |
| `GVoAPrevClsgFYAcctDeltaReldVal` | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdAcctgReldVal` | `DEC(1)` |  |
| `GVoAPrevFYPerdAcctgReldVal` | `DEC(1)` |  |
| `GVoAPrevFYPerdAcctgUnreldVal` | `DEC(1)` |  |
| `GVoAPrevFYPerdAcctDeltaReldVal` | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdUnreldVal` | `DEC(1)` |  |
| `GVoAPrevFYClsgPerdDeltaReldVal` | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrRtrnsltVal` | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrReldVal` | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrAdjdVal` | `DEC(23)` |  |
| `GVoAPrevYrFYPerdAcctgReldVal` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrAcctgRelVal` | `DEC(23)` |  |
| `GVoAQtrPrevYrDeltaAcctgReldVal` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrUnreldVal` | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrUnreldVal` | `DEC(23)` |  |
| `CompanyCode` | `CHAR(4)` | Original company code |
| `DeltaClsgPrevFiscalYearAmount` | `DEC(24)` |  |
| `DeltaClsgPrevFiscalYearRatio` | `DECF(34)` |  |
| `ClsgFiscalYearPeriodAmount` | `DEC(1)` |  |
| `GVoAFsclYrPerdPrevYrAcctgVal` | `DEC(23)` |  |
| `DeltaActFsclYrPerdPrevYrAmt` | `DEC(24)` |  |
| `DeltaActFsclYrPerdPrevYrRatio` | `DECF(34)` |  |
| `DeltaClsgPrevFiscalQtrAmount` | `DEC(24)` |  |
| `DeltaClsgFsclYrQtrPrevYrRatio` | `DECF(34)` |  |
| `DeltaClsgPrevFsclYTDAmount` | `DEC(24)` |  |
| `DeltaClsgPrevFiscalQtrRatio` | `DECF(34)` |  |
| `DeltaClsgFsclYrQtrPrevYrAmt` | `DEC(24)` |  |
