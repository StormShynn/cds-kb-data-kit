---
name: C_GVOAINCSTMNTFUNCOFEXPNQ
description: "The primary purpose of this CDS view is to facilitate the generation of an income statement that allows users to analyze financial data by various parameters such as fiscal year, fiscal period, consolidation version, and other financial dimensions. It supports the comparison of financial data across different periods and versions, enabling users to perform detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What is the financial performance of the organization for a specific fiscal year and period? The view allows users to filter and analyze financial data for specific fiscal years and periods, providing insights into the organization's financial performance. How do the financial results compare between different consolidation versions (actual, budget, constant currency)? By allowing selection of different consolidation versions, the view supports comparison between actual results, budgeted figures, and constant currency versions. What are the released and unreleased accounting values for a given period? The view provides measures for accounting values helping users understand the status of financial data processing. How do the group reporting values compare to accounting values? The view includes measures for group reporting values and their deltas compared to accounting values, enabling analysis of discrepancies or adjustments. What is the impact of currency translation on financial results? By including amounts in transaction, group, and local currencies, the view helps assess the impact of currency translation on financial results. How do financial results vary across different organizational dimensions such as profit centers, segments, and business areas? The view supports analysis across various organizational dimensions, allowing users to drill down into specific areas of interest. What are the trends in financial performance over different fiscal periods and quarters? The view includes parameters for fiscal year quarters and periods, enabling trend analysis over time. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GVOAINCSTMNTFUNCOFEXPNQ')/$value
semantic_en: "The primary purpose of this CDS view is to facilitate the generation of an income statement that allows users to analyze financial data by various parameters such as fiscal year, fiscal period, consolidation version, and other financial dimensions. It supports the comparison of financial data across different periods and versions, enabling users to perform detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What is the financial performance of the organization for a specific fiscal year and period? The view allows users to filter and analyze financial data for specific fiscal years and periods, providing insights into the organization's financial performance. How do the financial results compare between different consolidation versions (actual, budget, constant currency)? By allowing selection of different consolidation versions, the view supports comparison between actual results, budgeted figures, and constant currency versions. What are the released and unreleased accounting values for a given period? The view provides measures for accounting values helping users understand the status of financial data processing. How do the group reporting values compare to accounting values? The view includes measures for group reporting values and their deltas compared to accounting values, enabling analysis of discrepancies or adjustments. What is the impact of currency translation on financial results? By including amounts in transaction, group, and local currencies, the view helps assess the impact of currency translation on financial results. How do financial results vary across different organizational dimensions such as profit centers, segments, and business areas? The view supports analysis across various organizational dimensions, allowing users to drill down into specific areas of interest. What are the trends in financial performance over different fiscal periods and quarters? The view includes parameters for fiscal year quarters and periods, enabling trend analysis over time. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "GVoA Income Statement FOEXPN Query"
tags:
  - FIN
  - account
  - bo:companycode
  - budget
  - component:FIN-CS-EA-2CL
  - consumption-view
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
  - transaction
  - metadata-only
---
# C_GVOAINCSTMNTFUNCOFEXPNQ

**The primary purpose of this CDS view is to facilitate the generation of an income statement that allows users to analyze financial data by various parameters such as fiscal year, fiscal period, consolidation version, and other financial dimensions. It supports the comparison of financial data across different periods and versions, enabling users to perform detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What is the financial performance of the organization for a specific fiscal year and period? The view allows users to filter and analyze financial data for specific fiscal years and periods, providing insights into the organization's financial performance. How do the financial results compare between different consolidation versions (actual, budget, constant currency)? By allowing selection of different consolidation versions, the view supports comparison between actual results, budgeted figures, and constant currency versions. What are the released and unreleased accounting values for a given period? The view provides measures for accounting values helping users understand the status of financial data processing. How do the group reporting values compare to accounting values? The view includes measures for group reporting values and their deltas compared to accounting values, enabling analysis of discrepancies or adjustments. What is the impact of currency translation on financial results? By including amounts in transaction, group, and local currencies, the view helps assess the impact of currency translation on financial results. How do financial results vary across different organizational dimensions such as profit centers, segments, and business areas? The view supports analysis across various organizational dimensions, allowing users to drill down into specific areas of interest. What are the trends in financial performance over different fiscal periods and quarters? The view includes parameters for fiscal year quarters and periods, enabling trend analysis over time. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GVOAINCSTMNTFUNCOFEXPNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Value in Transaction Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Value in Group Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Value in Local Currency |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `GVoAAccountingValue` |  | |  |  | `DEC(1)` | Accounting |
| `GVoAReleasedValue` |  | |  |  | `DEC(1)` | Released Value |
| `GVoAAdjustedValue` |  | |  |  | `DEC(1)` | Group Reporting Adjusted Value |
| `GVoARetranslatedValue` |  | |  |  | `DEC(1)` | Group Reporting Retranslated Value |
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
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Consolidation Unit |
| `InvestorConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
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
| `CnsldtnGroupJrnlEntry` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `CnsldtnGroupJrnlEntryItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `GVoAAccountingUnreleasedValue` |  | |  |  | `DEC(1)` | Accounting Unreleased |
| `GVoAAccountingReleasedValue` |  | |  |  | `DEC(1)` | Accounting Released |
| `GVoAAcctgDeltaReleasedValue` |  | |  |  | `DEC(1)` | Delta Group Reporting Accounting Value |
| `GVoAClsgFYAcctgVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFiscalYearAcctgVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYClsgPeriodAcctgVal` |  | |  |  | `DEC(1)` |  |
| `GVoAPrevFYPeriodAcctgVal` |  | |  |  | `DEC(1)` |  |
| `GVoAClsgFsclQtrAcctgVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFiscalQuarterAcctgVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYearAcctgVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdReldVal` |  | |  |  | `DEC(1)` |  |
| `GVoAPrevFYPerdReldVal` |  | |  |  | `DEC(1)` |  |
| `GVoAClsgFsclQtrReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFsclQtrReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYRtrnsltdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYRtrnsltdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYClsPerdRtrnsltVal` |  | |  |  | `DEC(1)` |  |
| `GVoAPrevFYPerdRtrnsltdVal` |  | |  |  | `DEC(1)` |  |
| `GVoAClsgFsclQtrRtrnsltdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFsclQtrRtrnsltdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrRtrnsltdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYAdjdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYAdjdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdAdjdVal` |  | |  |  | `DEC(1)` |  |
| `GVoAPrevFYPerdAdjdVal` |  | |  |  | `DEC(1)` |  |
| `GVoAClsgFsclQtrAdjdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFsclQtrAdjdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrAdjdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgPrevFYToDteRtrnsltdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateAdjdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYToDateRtrnsltVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYToDateReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYToDateAdjdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYToDateAcctgReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYToDateAcctgUnreldVal` |  | |  |  | `DEC(23)` |  |
| `CnsldtnReportingCurrency` |  | |  |  | `CUKY(5)` |  |
| `GVoAClsgFYToDateAcctgVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateAcctgVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsPrevFYToDteAcctgReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateUnreldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFsclQtrAcctgReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYAcctgDeltaReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYAcctgReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYAcctgReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFYAcctgUnreldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYAcctgUnreldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevClsgFYAcctDeltaReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFsclQtrAcctgUnreldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFsclQtrAcctgUnreldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFsclQtrDeltaReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdAcctgReldVal` |  | |  |  | `DEC(1)` |  |
| `GVoAPrevFYClsgPerdUnreldVal` |  | |  |  | `DEC(1)` |  |
| `GVoAPrevFYPerdAcctgUnreldVal` |  | |  |  | `DEC(1)` |  |
| `GVoAPrevFYClsgPerdDeltaReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFsclQtrAcctgReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevFYPerdAcctgReldVal` |  | |  |  | `DEC(1)` |  |
| `GVoAPrevFYPerdAcctDeltaReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrRtrnsltVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrAdjdVal` |  | |  |  | `DEC(23)` |  |
| `GVoAPrevYrFYPerdAcctgReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrAcctgRelVal` |  | |  |  | `DEC(23)` |  |
| `GVoAQtrPrevYrDeltaAcctgReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrUnreldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAClsgFsclQtrDeltaReldVal` |  | |  |  | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrUnreldVal` |  | |  |  | `DEC(23)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `DeltaClsgPrevFiscalYearAmount` |  | |  |  | `DEC(24)` |  |
| `DeltaClsgPrevFiscalYearRatio` |  | |  |  | `DECF(34)` |  |
| `DeltaClsgFsclYrQtrPrevYrAmt` |  | |  |  | `DEC(24)` |  |
| `DeltaClsgFsclYrQtrPrevYrRatio` |  | |  |  | `DECF(34)` |  |
| `DeltaClsgPrevFsclYTDAmount` |  | |  |  | `DEC(24)` |  |
| `DeltaClsgPrevFsclYTDRatio` |  | |  |  | `DECF(34)` |  |
| `ClsgFiscalYearPeriodAmount` |  | |  |  | `DEC(1)` |  |
| `FiscalYrPeriodPrevYrAmt` |  | |  |  | `INT1(3)` |  |
| `DeltaActFsclYrPerdPrevYrAmt` |  | |  |  | `DEC(4)` |  |
| `DeltaActFsclYrPerdPrevYrRatio` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignAmtInTransCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignAmtInGroupCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignAmtInLocalCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnIntSignQtyInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `CnsldtnSignAdjdAmtInTransCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInLocalCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInGroupCrcy` |  | |  |  | `DECF(34)` |  |
| `CnsldtnSignAdjdQtyInBaseUnit` |  | |  |  | `QUAN(31)` |  |
