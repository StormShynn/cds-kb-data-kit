---
name: C_GVOAINCSTMNTFUNCOFEXPNQ
description: "The primary purpose of this CDS view is to facilitate the generation of an income statement that allows users to analyze financial data by various parameters such as fiscal year, fiscal period, consolidation version, and other financial dimensions. It supports the comparison of financial data across different periods and versions, enabling users to perform detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What is the financial performance of the organization for a specific fiscal year and period? The view allows users to filter and analyze financial data for specific fiscal years and periods, providing insights into the organization's financial performance. How do the financial results compare between different consolidation versions (actual, budget, constant currency)? By allowing selection of different consolidation versions, the view supports comparison between actual results, budgeted figures, and constant currency versions. What are the released and unreleased accounting values for a given period? The view provides measures for accounting values helping users understand the status of financial data processing. How do the group reporting values compare to accounting values? The view includes measures for group reporting values and their deltas compared to accounting values, enabling analysis of discrepancies or adjustments. What is the impact of currency translation on financial results? By including amounts in transaction, group, and local currencies, the view helps assess the impact of currency translation on financial results. How do financial results vary across different organizational dimensions such as profit centers, segments, and business areas? The view supports analysis across various organizational dimensions, allowing users to drill down into specific areas of interest. What are the trends in financial performance over different fiscal periods and quarters? The view includes parameters for fiscal year quarters and periods, enabling trend analysis over time. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GVOAINCSTMNTFUNCOFEXPNQ')/$value
semantic_en: "The primary purpose of this CDS view is to facilitate the generation of an income statement that allows users to analyze financial data by various parameters such as fiscal year, fiscal period, consolidation version, and other financial dimensions. It supports the comparison of financial data across different periods and versions, enabling users to perform detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What is the financial performance of the organization for a specific fiscal year and period? The view allows users to filter and analyze financial data for specific fiscal years and periods, providing insights into the organization's financial performance. How do the financial results compare between different consolidation versions (actual, budget, constant currency)? By allowing selection of different consolidation versions, the view supports comparison between actual results, budgeted figures, and constant currency versions. What are the released and unreleased accounting values for a given period? The view provides measures for accounting values helping users understand the status of financial data processing. How do the group reporting values compare to accounting values? The view includes measures for group reporting values and their deltas compared to accounting values, enabling analysis of discrepancies or adjustments. What is the impact of currency translation on financial results? By including amounts in transaction, group, and local currencies, the view helps assess the impact of currency translation on financial results. How do financial results vary across different organizational dimensions such as profit centers, segments, and business areas? The view supports analysis across various organizational dimensions, allowing users to drill down into specific areas of interest. What are the trends in financial performance over different fiscal periods and quarters? The view includes parameters for fiscal year quarters and periods, enabling trend analysis over time. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "GVoA Income Statement FOEXPN Query — CDS view tiêu dùng dựa trên GVoA Income Statement FOEXPN Query."
keywords:
  - "GVoA Income Statement FOEXPN Query"
  - "gvoa"
  - "income"
  - "statement"
  - "foexpn"
  - "query"
  - "amount"
  - "transaction"
  - "currency"
  - "group"
  - "local"
  - "cnsldtn"
  - "quantity"
  - "base"
  - "unit"
  - "accounting"
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
---
# C_GVOAINCSTMNTFUNCOFEXPNQ

**The primary purpose of this CDS view is to facilitate the generation of an income statement that allows users to analyze financial data by various parameters such as fiscal year, fiscal period, consolidation version, and other financial dimensions. It supports the comparison of financial data across different periods and versions, enabling users to perform detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What is the financial performance of the organization for a specific fiscal year and period? The view allows users to filter and analyze financial data for specific fiscal years and periods, providing insights into the organization's financial performance. How do the financial results compare between different consolidation versions (actual, budget, constant currency)? By allowing selection of different consolidation versions, the view supports comparison between actual results, budgeted figures, and constant currency versions. What are the released and unreleased accounting values for a given period? The view provides measures for accounting values helping users understand the status of financial data processing. How do the group reporting values compare to accounting values? The view includes measures for group reporting values and their deltas compared to accounting values, enabling analysis of discrepancies or adjustments. What is the impact of currency translation on financial results? By including amounts in transaction, group, and local currencies, the view helps assess the impact of currency translation on financial results. How do financial results vary across different organizational dimensions such as profit centers, segments, and business areas? The view supports analysis across various organizational dimensions, allowing users to drill down into specific areas of interest. What are the trends in financial performance over different fiscal periods and quarters? The view includes parameters for fiscal year quarters and periods, enabling trend analysis over time. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GVOAINCSTMNTFUNCOFEXPNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Value in Transaction Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Value in Group Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Value in Local Currency |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `GVoAAccountingValue` |  | |  | `cast( case when GLRecordType = 'C' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_acctg_value )` | `DEC(1)` | Accounting |
| `GVoAReleasedValue` |  | |  | `cast( case when GLRecordType = 'U' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_reld_value )` | `DEC(1)` | Released Value |
| `GVoAAdjustedValue` |  | |  | `cast( case when GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_adjd_value )` | `DEC(1)` | Group Reporting Adjusted Value |
| `GVoARetranslatedValue` |  | |  | `cast( case when GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_rtrlted_value )` | `DEC(1)` | Group Reporting Retranslated Value |
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
| `GVoAAccountingUnreleasedValue` |  | |  | `cast( case when GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_acctg_unreld_value )` | `DEC(1)` | Accounting Unreleased |
| `GVoAAccountingReleasedValue` |  | |  | `cast( case when GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_acctg_reld_value )` | `DEC(1)` | Accounting Released |
| `GVoAAcctgDeltaReleasedValue` |  | |  | `cast( ($projection.GVoAReleasedValue - $projection.GVoAAccountingReleasedValue ) as fincs_gvoa_delta_gracctg_value )` | `DEC(1)` | Delta Group Reporting Accounting Value |
| `GVoAClsgFYAcctgVal` |  | |  | `cast ( case when GLRecordType = 'C' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFiscalYearAcctgVal` |  | |  | `cast( case when ( GLRecordType = 'C' and FiscalYear = $parameters.P_PreviousFiscalYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYClsgPeriodAcctgVal` |  | |  | `case when ( GLRecordType = 'C' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end` | `DEC(1)` |  |
| `GVoAPrevFYPeriodAcctgVal` |  | |  | `case when ( GLRecordType = 'C' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then abap.dec'1'end` | `DEC(1)` |  |
| `GVoAClsgFsclQtrAcctgVal` |  | |  | `cast( case when ( GLRecordType = 'C' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFiscalQuarterAcctgVal` |  | |  | `cast( case when ( GLRecordType = 'C' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYearAcctgVal` |  | |  | `cast( case when ( GLRecordType = 'C' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYReldVal` |  | |  | `cast ( case when GLRecordType = 'U' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYReldVal` |  | |  | `cast( case when ( GLRecordType = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdReldVal` |  | |  | `case when ( GLRecordType = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end` | `DEC(1)` |  |
| `GVoAPrevFYPerdReldVal` |  | |  | `case when ( GLRecordType = 'U' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then abap.dec'1'end` | `DEC(1)` |  |
| `GVoAClsgFsclQtrReldVal` |  | |  | `cast( case when ( GLRecordType = 'U' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFsclQtrReldVal` |  | |  | `cast( case when ( GLRecordType = 'U' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrReldVal` |  | |  | `cast( case when ( GLRecordType = 'U' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYRtrnsltdVal` |  | |  | `cast ( case when GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYRtrnsltdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYClsPerdRtrnsltVal` |  | |  | `case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end` | `DEC(1)` |  |
| `GVoAPrevFYPerdRtrnsltdVal` |  | |  | `case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then abap.dec'1'end` | `DEC(1)` |  |
| `GVoAClsgFsclQtrRtrnsltdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFsclQtrRtrnsltdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrRtrnsltdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYAdjdVal` |  | |  | `cast ( case when GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYAdjdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdAdjdVal` |  | |  | `case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end` | `DEC(1)` |  |
| `GVoAPrevFYPerdAdjdVal` |  | |  | `case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then abap.dec'1'end` | `DEC(1)` |  |
| `GVoAClsgFsclQtrAdjdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFsclQtrAdjdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrAdjdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDteRtrnsltdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateReldVal` |  | |  | `cast( case when ( GLRecordType = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateAdjdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYToDateRtrnsltVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYToDateReldVal` |  | |  | `cast( case when ( GLRecordType = 'U' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYToDateAdjdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYToDateAcctgReldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYToDateAcctgUnreldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `cuky` |  | |  | `virtual CnsldtnReportingCurrency : abap.cuky` |  |  |
| `GVoAClsgFYToDateAcctgVal` |  | |  | `cast( case when ( GLRecordType = 'C' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateAcctgVal` |  | |  | `cast( case when ( GLRecordType = 'C' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsPrevFYToDteAcctgReldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgPrevFYToDateUnreldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFsclQtrAcctgReldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYAcctgDeltaReldVal` |  | |  | `cast ( ($projection.GVoAClsgFYReldVal - $projection.GVoAClsgFYAcctgReldVal ) as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYAcctgReldVal` |  | |  | `cast ( case when GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYAcctgReldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFYAcctgUnreldVal` |  | |  | `cast ( case when GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYAcctgUnreldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevClsgFYAcctDeltaReldVal` |  | |  | `cast ( ($projection.GVoAPrevFYReldVal - $projection.GVoAPrevFYAcctgReldVal ) as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFsclQtrAcctgUnreldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFsclQtrAcctgUnreldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFsclQtrDeltaReldVal` |  | |  | `cast ( ($projection.GVoAPrevFsclQtrReldVal - $projection.GVoAPrevFsclQtrAcctgReldVal ) as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYClsgPerdAcctgReldVal` |  | |  | `case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end` | `DEC(1)` |  |
| `GVoAPrevFYClsgPerdUnreldVal` |  | |  | `case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end` | `DEC(1)` |  |
| `GVoAPrevFYPerdAcctgUnreldVal` |  | |  | `case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then abap.dec'1'end` | `DEC(1)` |  |
| `GVoAPrevFYClsgPerdDeltaReldVal` |  | |  | `cast ( ($projection.GVoAPrevFYClsgPerdReldVal - $projection.GVoAPrevFYClsgPerdAcctgReldVal ) as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFsclQtrAcctgReldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevFYPerdAcctgReldVal` |  | |  | `case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then abap.dec'1'end` | `DEC(1)` |  |
| `GVoAPrevFYPerdAcctDeltaReldVal` |  | |  | `cast ( ($projection.GVoAPrevFYPerdReldVal - $projection.GVoAPrevFYPerdAcctgReldVal ) as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrRtrnsltVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrReldVal` |  | |  | `cast( case when ( GLRecordType = 'U' and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrAdjdVal` |  | |  | `cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAPrevYrFYPerdAcctgReldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrAcctgRelVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAQtrPrevYrDeltaAcctgReldVal` |  | |  | `cast ( ($projection.GVoAFsclYrQtrPrevYrReldVal - $projection.GVoAFsclYrQtrPrevYrAcctgRelVal ) as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrQtrPrevYrUnreldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAClsgFsclQtrDeltaReldVal` |  | |  | `cast ( ($projection.GVoAClsgFsclQtrReldVal - $projection.GVoAClsgFsclQtrAcctgReldVal ) as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `GVoAFsclYrPerdPrevYrUnreldVal` |  | |  | `cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `DeltaClsgPrevFiscalYearAmount` |  | |  | `$projection.GVoAClsgFYAcctgVal - $projection.GVoAPrevFiscalYearAcctgVal` | `DEC(24)` |  |
| `DeltaClsgPrevFiscalYearRatio` |  | |  | `ratio_of( portion=>$projection.DeltaClsgPrevFiscalYearAmount, total=>$projection.GVoAPrevFiscalYearAcctgVal) * 100` | `DECF(34)` |  |
| `DeltaClsgFsclYrQtrPrevYrAmt` |  | |  | `$projection.GVoAClsgFsclQtrAcctgVal - $projection.GVoAFsclYrQtrPrevYearAcctgVal` | `DEC(24)` |  |
| `DeltaClsgFsclYrQtrPrevYrRatio` |  | |  | `ratio_of( portion=>$projection.DeltaClsgFsclYrQtrPrevYrAmt, total=>$projection.GVoAFsclYrQtrPrevYearAcctgVal) * 100` | `DECF(34)` |  |
| `DeltaClsgPrevFsclYTDAmount` |  | |  | `$projection.GVoAClsgFYToDateAcctgVal - $projection.GVoAClsgPrevFYToDateAcctgVal` | `DEC(24)` |  |
| `DeltaClsgPrevFsclYTDRatio` |  | |  | `ratio_of( portion=>$projection.DeltaClsgPrevFsclYTDAmount, total=>$projection.GVoAClsgPrevFYToDateAcctgVal) * 100` | `DECF(34)` |  |
| `ClsgFiscalYearPeriodAmount` |  | |  | `case when ( FiscalYear = $parameters.P_FiscalYear and FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then abap.dec'1' end` | `DEC(1)` |  |
| `FiscalYrPeriodPrevYrAmt` |  | |  | `case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end` | `INT1(3)` |  |
| `DeltaActFsclYrPerdPrevYrAmt` |  | |  | `$projection.ClsgFiscalYearPeriodAmount - $projection.FiscalYrPeriodPrevYrAmt` | `DEC(4)` |  |
| `DeltaActFsclYrPerdPrevYrRatio` |  | |  | `ratio_of( portion=>$projection.DeltaActFsclYrPerdPrevYrAmt, total=>$projection.FiscalYrPeriodPrevYrAmt) * 100` | `DECF(34)` |  |
| `CnsldtnIntSignAmtInTransCrcy` |  | |  | `curr_to_decfloat_amount(AmountInTransactionCurrency)` | `DECF(34)` |  |
| `CnsldtnIntSignAmtInGroupCrcy` |  | |  | `curr_to_decfloat_amount(AmountInGroupCurrency)` | `DECF(34)` |  |
| `CnsldtnIntSignAmtInLocalCrcy` |  | |  | `curr_to_decfloat_amount(AmountInLocalCurrency)` | `DECF(34)` |  |
| `CnsldtnIntSignQtyInBaseUnit` |  | |  | `CnsldtnQuantityInBaseUnit` | `QUAN(29)` | Quantity |
| `CnsldtnSignAdjdAmtInTransCrcy` |  | |  | `$projection.CnsldtnIntSignAmtInTransCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)` | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInLocalCrcy` |  | |  | `$projection.CnsldtnIntSignAmtInGroupCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)` | `DECF(34)` |  |
| `CnsldtnSignAdjdAmtInGroupCrcy` |  | |  | `$projection.CnsldtnIntSignAmtInLocalCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)` | `DECF(34)` |  |
| `CnsldtnSignAdjdQtyInBaseUnit` |  | |  | `$projection.CnsldtnIntSignQtyInBaseUnit * hry_node_sign_value( dimension => $projection.financialstatementitem)` | `QUAN(31)` |  |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GVOAINCSTMNTFUNCOFEXPNQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GVOAINCSTMNTFUNCOFEXPNQ')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@Analytics: {
    technicalName: 'CCNSGVAISFOEXQ',
    variableCheck.implementedBy: 'className:cl_fincs_query_variable_check',
    document.defaultAssociationToStorage: '_DocumentStore'
}
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ObjectModel: {
    usageType: {
        dataClass: #MIXED,
        sizeCategory: #XL,
        serviceQuality: #D
    },
    supportedCapabilities:[#ANALYTICAL_QUERY]
}
@ObjectModel.modelingPattern: #NONE
@VDM: {
    viewType: #CONSUMPTION
}
@EndUserText.label: 'GVoA Income Statement FOEXPN Query'
define transient view entity C_GVoAIncStmntFuncOfExpnQ
  provider contract analytical_query
  with parameters
    @AnalyticsDetails.query.variableSequence : 5
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationVersion', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'ConsolidationVersion' }
    @Consumption.valueHelpDefinition: [{ entity: {
        name: 'I_CnsldtnVersion',
        element: 'ConsolidationVersion' }}]
    P_ConsolidationVersion       : fincs_rvers,
    @AnalyticsDetails.query.variableSequence :8
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationVersion', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
          lookupEntity: 'I_CnsldtnBudgetVersionDrvtn',
          resultElement: 'ConsolidationComparisonVersion' }
    @Consumption.valueHelpDefinition: [{ entity: {
          name: 'I_CnsldtnVersion',
          element: 'ConsolidationVersion' }}]
    P_ConsolidationBudgetVersion : fincs_rbudget_vers,
    @AnalyticsDetails.query.variableSequence : 9
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationVersion', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
        lookupEntity: 'I_CnsldtnCnstntCrcyVersDrvtn',
        resultElement: 'ConsolidationComparisonVersion' }
    @Consumption.valueHelpDefinition: [{ entity: {
        name: 'I_CnsldtnVersion',
        element: 'ConsolidationVersion' }}]
    P_CnsldtnCnstntCrcyVersion   : fincs_ractcc_vers,
    @AnalyticsDetails.query.variableSequence : 15
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalYear', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'FiscalYear' }
    @Semantics.fiscal.year: true
    P_FiscalYear                 : ryear,
    @AnalyticsDetails.query.variableSequence : 20
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalPeriod', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'FiscalPeriod' }
    @Semantics.fiscal.period: true
    P_FiscalPeriod               : poper,
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalYearVariant', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'FiscalYearVariant' }
    @Consumption.hidden: true
    P_FiscalYearVariant          : fis_periv,
    @AnalyticsDetails.query.variableSequence : 30
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'FiscalPeriodEndDate', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
        lookupEntity: 'I_FiscalCalendarDate',
        resultElement: 'FiscalPeriodEndDate',
        binding: [
            { targetElement: 'FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
            { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetElement: 'FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Semantics.businessDate.at: true
    P_KeyDate                    : vdm_v_key_date,
    @AnalyticsDetails.query.variableSequence : 100
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationReportingItemHier', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.valueHelpDefinition: [{
        entity: { name: 'I_CnsldtnRptgItmHierDirVH', element: 'ConsolidationReportingItemHier' }
    }]
    @Consumption.derivation: {
        lookupEntity: 'I_CnsldtnRptgRuleVarAssgmt_2',
        resultElement: 'ConsolidationReportingItemHier',
        binding: [
            { targetElement: 'ConsolidationChartOfAccounts', type: #ELEMENT, value: 'ConsolidationChartOfAccounts' },
            { targetElement: 'ConsolidationReportingItemHier', type: #CONSTANT, value: 'X4' }]
    }
    P_ConsolidationRptgItemHier  : fincs_rihry,
    @AnalyticsDetails.query.variableSequence : 100
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationReportingRuleID', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.valueHelpDefinition: [{
    entity: { name: 'I_CnsldtnRptgRuleVarVH_2', element: 'ConsolidationReportingRuleID' },
    additionalBinding: [{
    localParameter: 'P_ConsolidationRptgItemHier',
    element: 'ConsolidationReportingItemHier' }]
    }]
    @Consumption.derivation: {
        lookupEntity: 'I_CnsldtnRptgRuleIdIndex',
        resultElement: 'ConsolidationReportingRuleID',
        binding: [
            { targetParameter: 'P_FiscalYear', type: #PARAMETER, value: 'P_FiscalYear' },
            { targetParameter: 'P_FiscalPeriod', type: #PARAMETER, value: 'P_FiscalPeriod' },
            { targetParameter: 'P_ConsolidationVersion', type: #PARAMETER, value: 'P_ConsolidationVersion' }]
    }
    P_ConsolidationRptgRuleID    : fincs_rptid,
    @AnalyticsDetails.query.variableSequence : 70
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationUnitHierarchy', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.defaultValue: 'CS17/DEFAULT_HIERARCHY'
    @Consumption.valueHelpDefinition:
        [{ entity: { name: 'I_CnsldtnUnitHierDirVH',
                    element: 'ConsolidationUnitHierarchy' }
    }]
    P_ConsolidationUnitHierarchy : fincs_hryid_consunit,
    @AnalyticsDetails.query.variableSequence : 80
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'AdditionalMasterDataHierarchy', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnProfitCenterHierDirVH', element: 'AdditionalMasterDataHierarchy' } }]
    P_ConsolidationPrftCtrHier   : fincs_hryid_profitcenter,
    @AnalyticsDetails.query.variableSequence : 90
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'ConsolidationSegmentHierarchy', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnSegmentHierDirVH',  element: 'ConsolidationSegmentHierarchy' } }]
    P_ConsolidationSegmentHier   : fincs_hryid_segment,


    //********************************************************************************
    // Closing Year vs. Previous Year
    //********************************************************************************
    @Consumption.hidden: true
    @Consumption.derivation: {
       lookupEntity:  'F_FiscalYearShift',
       resultElement: 'ShiftedFiscalYear',
       binding: [
            { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
            { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' },
            { targetParameter: 'P_FsclTimePeriodOffsetDuration', type : #CONSTANT, value: '-1' },
            { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type : #CONSTANT, value: 'Y' }
            ]
    }
    @Semantics.fiscal.year: true
    P_PreviousFiscalYear         : fis_gjahr,
    //*************************************************************
    // Closing Quarter vs. Previous Quarter
    //**************************************************************
    @Consumption.derivation: {
         lookupEntity: 'F_FsclYearQtrByFsclPeriod',
         resultElement: 'FiscalYearQuarter',
         binding: [
             { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
             { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
             { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' } ]
     }
    @Consumption.hidden: true
    @Semantics.fiscal.yearQuarter: true
    P_FiscalYearQuarter          : fins_fyearquarter,
    @Consumption.derivation: {
        lookupEntity: 'F_FiscalYearQuarterShift',
        resultElement: 'ShiftedFiscalYearQuarter',
        binding: [
            { targetParameter: 'P_FiscalYearQuarter', type : #PARAMETER, value: 'P_FiscalYearQuarter' },
            { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' },
            { targetParameter: 'P_FsclTimePeriodOffsetDuration', type : #CONSTANT, value: '-1' },
            { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type : #CONSTANT, value: 'Q' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearQuarter: true
    P_PreviousFiscalYearQuarter  : fins_fyearquarter,
    @Consumption.derivation: {
        lookupEntity: 'I_FiscalCalendarDate',
        resultElement: 'FiscalYearQuarter',
        binding: [
            { targetElement: 'FiscalYear', type : #PARAMETER, value: 'P_PreviousFiscalYear' },
            { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetElement: 'FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearQuarter: true
    P_FiscalYearQuarterPrevYear  : fins_fyearquarter,
    //********************************************************************************
    // Closing Period vs. Previous Period
    //*********************************************************************************
    @Consumption.derivation: {
        lookupEntity: 'F_FsclYearPeriodByFsclPeriod',
        resultElement: 'FiscalYearPeriod',
        binding: [
            { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
            { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriod           : fis_jahrper_conv,
    @Consumption.derivation: {
         lookupEntity: 'F_FiscalYearPeriodShift',
         resultElement: 'ShiftedFiscalYearPeriod',
         binding: [
             { targetParameter: 'P_FiscalYearPeriod', type : #PARAMETER, value: 'P_FiscalYearPeriod' },
             { targetParameter: 'P_FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' },
             { targetParameter: 'P_FsclTimePeriodOffsetDuration', type : #CONSTANT, value: '-1' },
             { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type : #CONSTANT, value: 'P' } ]
     }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_PreviousFiscalYearPeriod   : fis_jahrper_conv,
    @Consumption.derivation: {
        lookupEntity: 'I_FiscalYearPeriod',
        resultElement: 'FiscalYearPeriod',
        binding: [
            { targetElement: 'FiscalYear', type : #PARAMETER, value: 'P_PreviousFiscalYear' },
            { targetElement: 'FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
            { targetElement: 'FiscalYearVariant', type : #ELEMENT, value: 'FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriodPrevYear   : fis_jahrper_conv,
    @AnalyticsDetails.variable: { usageType: #PARAMETER, referenceElement: 'GroupCurrency', mandatory: true, selectionType: #SINGLE, multipleSelections: false }
    @Consumption.derivation: {
         lookupEntity: 'I_CnsldtnVersion',
         resultElement: 'GroupCurrency',
             binding: [ { targetElement: 'ConsolidationVersion', type : #PARAMETER, value: 'P_ConsolidationVersion' } ]
     }
    @Consumption.hidden: true
    @UI.hidden: true
    P_GroupCurrency              : fincs_ui_gcurr
  as projection on I_GVoARuleBsdGrpJrnlItemC(
                   P_ConsolidationUnitHierarchy : $parameters.P_ConsolidationUnitHierarchy,
                   P_ConsolidationPrftCtrHier   : $parameters.P_ConsolidationPrftCtrHier,
                   P_ConsolidationSegmentHier   : $parameters.P_ConsolidationSegmentHier,
                   P_KeyDate                    : $parameters.P_KeyDate,
                   P_ConsolidationRptgItemHier  : $parameters.P_ConsolidationRptgItemHier,
                   P_ConsolidationRptgRuleID    : $parameters.P_ConsolidationRptgRuleID
                   ) as MatrixCnsldtnFndnEnhcdCube
{

          //*******************************************************************
          // Measures
          //*******************************************************************
          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'TransactionCurrency'
          @AnalyticsDetails.query.hidden: true
          AmountInTransactionCurrency,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'GroupCurrency'
          AmountInGroupCurrency,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'LocalCurrency'
          @AnalyticsDetails.query.hidden: true
          AmountInLocalCurrency,

          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Aggregation.default: #SUM
          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          CnsldtnQuantityInBaseUnit,

          //*******************************************************************
          // Measure Structure Members
          //*******************************************************************

          @AnalyticsDetails.query.onCharacteristicStructure: true   // Column1
          @Consumption.dynamicLabel: { label: 'Closing Period &1 Accounting', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          cast( case when GLRecordType = 'C' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_acctg_value )                                                                                                       as GVoAAccountingValue,


          @AnalyticsDetails.query.onCharacteristicStructure: true  // Column4.1
          @Consumption.dynamicLabel: { label: 'Closing Period &1 GR Released', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          // condition "CnsldtnPullRequestState = 'R'" is trivial and therefore omitted because of "GLRecordType = 'U'"
          cast( case when GLRecordType = 'U' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_reld_value )                                                                                                        as GVoAReleasedValue,


          @AnalyticsDetails.query.onCharacteristicStructure: true  // Column4.3
          @Consumption.dynamicLabel: { label: 'Closing Period &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          // condition "CnsldtnPullRequestState = 'R'" is trivial and therefore omitted because of "GLRecordType = 'U'"
          cast( case when GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod   then 1 end as fincs_gvoa_adjd_value )        as GVoAAdjustedValue,

          @AnalyticsDetails.query.onCharacteristicStructure: true  // Column4.2
          @Consumption.dynamicLabel: { label: 'Closing Period &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          cast( case when GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod  then 1 end as fincs_gvoa_rtrlted_value )                                                                             as GVoARetranslatedValue,


          //***************************************************************
          // Dimensions
          //***************************************************************
          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
          @AnalyticsDetails.query.variableSequence : 30
          @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'ConsolidationChartOfAccounts' }
          ConsolidationChartOfAccounts,

          @Consumption.filter: {
            selectionType: #SINGLE,
            multipleSelections: true,
            mandatory: false
          }
          @AnalyticsDetails.query: {
              variableSequence :  70,
              axis:               #ROWS
              }
          @UI.textArrangement: #TEXT_ONLY
          //          @Consumption.semanticObject: 'ConsolidationFinanceSItem'
          FinancialStatementItem,

          @Consumption.filter: {
            hierarchyBinding : [
                        { type : #ELEMENT, value : 'ConsolidationChartOfAccounts'},
                        { type : #PARAMETER, value : 'P_ConsolidationRptgItemHier'}],
            selectionType: #HIERARCHY_NODE,
            multipleSelections: true,
            mandatory:          false
          }
          @AnalyticsDetails.query: {
              variableSequence :  70,
              axis:               #ROWS,
              displayHierarchy:   #FILTER_ONLY,
              hierarchyInitialLevel: 3,
              hierarchySettings.childNodePosition: #ABOVE
          }
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationReportingItem,

          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true, hidden: true}
          @Consumption.derivation: {
                lookupEntity: 'I_CnsldtnVersion',
                resultElement: 'FiscalYearVariant',
                binding: [{ targetElement: 'ConsolidationVersion', type : #PARAMETER, value: 'P_ConsolidationVersion' }]
          }
          @Semantics.fiscal.yearVariant: true
          FiscalYearVariant,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.year: true
          FiscalYear,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.period: true
          FiscalPeriod,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.yearPeriod: true
          FiscalYearPeriod,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.yearQuarter: true
          FiscalYearQuarter,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          @Semantics.fiscal.quarter: true
          FiscalQuarter,

          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
          @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter', resultElement: 'ConsolidationGroup' }
          @AnalyticsDetails.query.variableSequence : 60
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationGroup,

          @Consumption.filter: {
            selectionType: #HIERARCHY_NODE,
            multipleSelections: true,
            hierarchyBinding: [{ type: #PARAMETER, value: 'P_ConsolidationUnitHierarchy' }],
            mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 71,
            axis: #FREE,
            displayHierarchy: #FILTER_ONLY,
            hierarchyInitialLevel: 3
          }
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationUnit,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerConsolidationUnit,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          InvesteeConsolidationUnit,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          InvestorConsolidationUnit,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          Company,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerCompany,

          @Consumption.filter: {
            selectionType: #SINGLE,
            multipleSelections: true,
            mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 81,
            axis: #FREE,
            totals: #SHOW
          }
          @UI.textArrangement: #TEXT_ONLY
          ProfitCenter,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerProfitCenter,

          @Consumption.filter: {
            selectionType: #SINGLE,
            multipleSelections: true,
            mandatory: false }
          @AnalyticsDetails.query: {
            variableSequence : 91,
            axis: #FREE,
            totals: #SHOW
          }
          @UI.textArrangement: #TEXT_ONLY
          Segment,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerSegment,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          CostCenter,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerCostCenter,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          FunctionalArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerFunctionalArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          BusinessArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement:#TEXT_ONLY
          GLRecordType,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PartnerBusinessArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ControllingArea,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationVersion,

          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          PostingLevel,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          ConsolidationDocumentType,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          SubItemCategory,

          @AnalyticsDetails.query: {axis: #FREE, totals: #SHOW }
          @UI.textArrangement: #TEXT_LAST
          SubItem,

          @UI.hidden: true
          @AnalyticsDetails.query.hidden: true
          ConsolidationDimension,
          //***************************************************************
          // Units and Currencies
          //***************************************************************
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          TransactionCurrency,
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          LocalCurrency,
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          GroupCurrency,
          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement: #TEXT_ONLY
          BaseUnit,

          //Industry-specific fields  Financial services: Banking Fields
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          FinancialServicesProductGroup,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          FinancialServicesBranch,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          FinancialDataSource,

          // industry-specific fields  Financial services: Green House Fields
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGCategory,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGScope,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGScope2CalculationMethod,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGScope2ContractualInstrument,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGDataQualityCharacteristic,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGEnergyClassification,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGEnergyMix,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GHGEnergySourcingType,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          SustainabilityModeOfTransport,

          // industry-specific fields  Financial services: Public Sector Fields
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          FinancialManagementArea,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          Fund,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          GrantID,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          CnsldtnCashLedgerChartOfAccts,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #HIDE
          CashLedgerAccount,

          CnsldtnGroupJrnlEntry,

          CnsldtnGroupJrnlEntryItem,

          _DocumentStore,

          @AnalyticsDetails.query.onCharacteristicStructure: true     // Column3
          @Consumption.dynamicLabel: { label: 'Closing Period &1 Accounting Unreleased', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          cast( case when GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_acctg_unreld_value )                                                              as GVoAAccountingUnreleasedValue,

          @AnalyticsDetails.query.onCharacteristicStructure: true   // Column2
          @Consumption.dynamicLabel: { label: 'Closing Period &1 Accounting Released', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          cast( case when GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod then 1 end as fincs_gvoa_acctg_reld_value )                                                                as GVoAAccountingReleasedValue,

          @AnalyticsDetails.query.onCharacteristicStructure: true   // Column5
          @Consumption.dynamicLabel: { label: 'Closing Period &1 Delta GR Acctg.Reld', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          cast( ($projection.GVoAReleasedValue - $projection.GVoAAccountingReleasedValue ) as fincs_gvoa_delta_gracctg_value )                                                                                                                                                    as GVoAAcctgDeltaReleasedValue,


          //*******************************************************************
          // YTD related Characteristic Structure Members
          //*******************************************************************

          /*********** Accounting *****************/
          /****Closing Year vs. Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Year &1 Accounting', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Current Year Accounting'
          cast ( case when GLRecordType = 'C' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )                                                                                                                                                         as GVoAClsgFYAcctgVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1 Accounting', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Previous Year Accounting'
          cast( case when ( GLRecordType = 'C' and FiscalYear = $parameters.P_PreviousFiscalYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                                                              as GVoAPrevFiscalYearAcctgVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period Previous Year Accounting' }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing Period Previous Year Accounting'
          case when ( GLRecordType = 'C' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end                                                                                                                   as GVoAPrevFYClsgPeriodAcctgVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Period &1 Accounting', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous Period Accounting'
          case when ( GLRecordType = 'C' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod )  then abap.dec'1'end                                                                                                                                                     as GVoAPrevFYPeriodAcctgVal,

          /****Closing Quarter vs. Previous Quarter******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Quarter &1 Accounting', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Closing Quarter Accounting'
          cast( case when ( GLRecordType = 'C' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 )  )                                                                                                                                       as GVoAClsgFsclQtrAcctgVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Quarter &1 Accounting', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Previous Quarter Accounting'
          cast( case when ( GLRecordType = 'C' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )                                                                                                                                as GVoAPrevFiscalQuarterAcctgVal,

          /****Current Quarter vs Same Quarter PY******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: 'Current Quarter Previous Year &1 Acc.', binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Current Quarter Previous Year Accounting'
          cast( case when ( GLRecordType = 'C' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                                                as GVoAFsclYrQtrPrevYearAcctgVal,

          /****** Group Reporting Released *********/
          /****Closing Year vs. Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Year &1 GR Released', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Current Year GR Released'
          cast ( case when GLRecordType = 'U' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )                                                                                                                                                         as GVoAClsgFYReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1 GR Released', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Previous Year GR Released'
          cast( case when ( GLRecordType = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )                                                                                                as GVoAPrevFYReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period Previous Year GR Released' }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing Period Previous Year GR Released'
          case when ( GLRecordType = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod   ) then abap.dec'1' end                                                                                                                 as GVoAPrevFYClsgPerdReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Period &1 GR Released', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous Period GR Released'
          case when ( GLRecordType = 'U' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod )  then abap.dec'1'end                                                                                                                                                     as GVoAPrevFYPerdReldVal,

          /****Closing Quarter vs. Previous Quarter******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Quarter &1 GR Released', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Closing Quarter GR Released'
          cast( case when ( GLRecordType = 'U' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 )  )                                                                                                                                       as GVoAClsgFsclQtrReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Quarter &1 GR Released', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Previous Quarter GR Released'
          cast( case when ( GLRecordType = 'U' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )                                                                                                                                as GVoAPrevFsclQtrReldVal,

          /****Current Quarter vs Same Quarter PY******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: 'Current Qtr Previous Year &1 GR Released', binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Current Qtr Previous Year GR Released'
          cast( case when ( GLRecordType = 'U' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                                                as GVoAFsclYrQtrPrevYrReldVal,

          /***** Group Reporting Retranslated ******/
          /****Closing Year vs. Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Year &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Current Year GR Retranslated'
          cast ( case when GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )                                                                                                                                  as GVoAClsgFYRtrnsltdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Previous Year GR Retranslated'
          cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )                                                                         as GVoAPrevFYRtrnsltdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period Prev.Yr.GR Retranslated' }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing Period Prev.Yr.GR Retranslated'
          case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end                                                                                            as GVoAPrevFYClsPerdRtrnsltVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Period &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous Period GR Retranslated'
          case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod )  then abap.dec'1'end                                                                                                                              as GVoAPrevFYPerdRtrnsltdVal,

          /****Closing Quarter vs. Previous Quarter******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Quarter &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Closing Quarter GR Retranslated'
          cast( case when ( GLRecordType <> 'C'  and PostingLevel = '' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 )  )                                                                                                               as GVoAClsgFsclQtrRtrnsltdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Quarter &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Previous Quarter GR Retranslated'
          cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )                                                                                                         as GVoAPrevFsclQtrRtrnsltdVal,

          /****Current Quarter vs Same Quarter PY******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: 'Current Qtr Prev.Yr. &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Current Qtr Prev.Yr. GR Retranslated'
          cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                         as GVoAFsclYrQtrPrevYrRtrnsltdVal,

          /****** Group Reporting Adjusted ********/
          /****Closing Year vs. Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Year &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Current Year GR Adjusted'
          cast ( case when GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )                                                           as GVoAClsgFYAdjdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Previous Year GR Adjusted'
          cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )  as GVoAPrevFYAdjdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period Previous Year GR Adjusted' }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing Period Previous Year GR Adjusted'
          case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end                     as GVoAPrevFYClsgPerdAdjdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Period &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous Period GR Adjusted'
          case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod )  then abap.dec'1'end                                                       as GVoAPrevFYPerdAdjdVal,

          /****Closing Quarter vs. Previous Quarter******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Quarter &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Closing Quarter GR Adjusted'
          cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 )  )                                         as GVoAClsgFsclQtrAdjdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Quarter &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Previous Quarter GR Adjusted'
          cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )                                  as GVoAPrevFsclQtrAdjdVal,

          /****Current Quarter vs Same Quarter PY******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: 'Current Quarter Prevs.Yr. &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Current Quarter Prevs.Yr. GR Adjusted'
          cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                  as GVoAFsclYrQtrPrevYrAdjdVal,

          /****Closing YTD vs. Previous YTD******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous YTD &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous YTD GR Retranslated'
          cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )                                                                        as GVoAClsgPrevFYToDteRtrnsltdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous YTD &1 GR Released', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous YTD GR Released'
          cast( case when ( GLRecordType = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )                                                                                               as GVoAClsgPrevFYToDateReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous YTD &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous YTD GR Adjusted'
          cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) ) as GVoAClsgPrevFYToDateAdjdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing YTD &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing YTD GR Retranslated'
          cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod )  then 1 end as abap.dec( 23, 2 ) )                                                                               as GVoAClsgFYToDateRtrnsltVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing YTD &1 GR Released', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing YTD GR Released'
          cast( case when ( GLRecordType = 'U' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod )  then 1 end as abap.dec( 23, 2 ) )                                                                                                      as GVoAClsgFYToDateReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing YTD &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing YTD GR Adjusted'
          cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )         as GVoAClsgFYToDateAdjdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing YTD &1 Accounting Released', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing YTD Accounting Released'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod )  then 1 end as abap.dec( 23, 2 ) )                                                                    as GVoAClsgFYToDateAcctgReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing YTD &1 Acc.Unreleased', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing YTD Accounting Unreleased'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod )  then 1 end as abap.dec( 23, 2 ) )                                                                    as GVoAClsgFYToDateAcctgUnreldVal,

          @EndUserText.label: 'Currency'
  virtual CnsldtnReportingCurrency : abap.cuky,
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing YTD &1 Accounting', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing YTD Accounting'
          cast( case when ( GLRecordType = 'C' and FiscalYear = $parameters.P_FiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod )  then 1 end as abap.dec( 23, 2 ) )                                                                                                      as GVoAClsgFYToDateAcctgVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous YTD &1 Accounting', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous YTD Accounting'
          cast( case when ( GLRecordType = 'C' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )                                                                                               as GVoAClsgPrevFYToDateAcctgVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous YTD &1 Accounting Released', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous YTD Accounting Released'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )                                                             as GVoAClsPrevFYToDteAcctgReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous YTD &1 Acc.Unreleased', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous YTD Accounting Unreleased'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod <= $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )                                                             as GVoAClsgPrevFYToDateUnreldVal,

          /****Closing Quarter vs. Previous Quarter******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Quarter &1 Accounting Released', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Closing Quarter Accounting Released'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 )  )                                                                                                     as GVoAClsgFsclQtrAcctgReldVal,

          /****Closing Year vs. Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Year &1 Delta GR Acctg.Reld', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Current Year Delta GR Acctg.Reld'
          cast ( ($projection.GVoAClsgFYReldVal - $projection.GVoAClsgFYAcctgReldVal ) as abap.dec( 23, 2 ) )                                                                                                                                                                     as GVoAClsgFYAcctgDeltaReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Year &1 Accounting Released', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Current Year Accounting Released'
          cast ( case when GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )                                                                                                                       as GVoAClsgFYAcctgReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1 Accounting Released', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Previous Year Accounting Released'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then 1 end as abap.dec( 23, 2 ) )                                                              as GVoAPrevFYAcctgReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Current Year &1 Accounting Unreleased', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Current Year Accounting Unreleased'
          cast ( case when GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_FiscalYear then 1 end as abap.dec( 23, 2 ) )                                                                                                                       as GVoAClsgFYAcctgUnreldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1 Accounting Unreleased', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Previous Year Accounting Unreleased'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                            as GVoAPrevFYAcctgUnreldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1 Delta GR Acctg.Reld', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @EndUserText.label: 'Previous Year Delta GR Acctg.Reld'
          cast ( ($projection.GVoAPrevFYReldVal - $projection.GVoAPrevFYAcctgReldVal ) as abap.dec( 23, 2 ) )                                                                                                                                                                     as GVoAPrevClsgFYAcctDeltaReldVal,

          /****Closing Quarter vs. Previous Quarter******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Quarter &1 Accounting Unreleased', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Closing Quarter Accounting Unreleased'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearQuarter = $parameters.P_FiscalYearQuarter ) then 1 end as abap.dec( 23, 2 )  )                                                                                                     as GVoAClsgFsclQtrAcctgUnreldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Quarter &1 Acc. Unreleased', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Previous Quarter Accounting Unreleased'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )                                                                                              as GVoAPrevFsclQtrAcctgUnreldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Quarter &1 Delta GR Acctg.Reld', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Previous Quarter Delta GR Acctg.Reld'
          cast ( ($projection.GVoAPrevFsclQtrReldVal - $projection.GVoAPrevFsclQtrAcctgReldVal ) as abap.dec( 23, 2 ) )                                                                                                                                                           as GVoAPrevFsclQtrDeltaReldVal,


          /****Closing Period vs. Previous Period******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period Prev.Yr.Acctg.Released' }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing Period Prev.Yr.Acctg.Released'
          case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end                                                                                 as GVoAPrevFYClsgPerdAcctgReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period Previous Yr.Acc.Unrelease' }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing Period Prev.Yr.Acctg.Unreleased'
          case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod = $parameters.P_FiscalPeriod ) then abap.dec'1' end                                                                                 as GVoAPrevFYClsgPerdUnreldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Period &1 Accounting Unreleased', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous Period Accounting Unreleased'
          case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod )  then abap.dec'1'end                                                                                                                   as GVoAPrevFYPerdAcctgUnreldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period Previous Year Delta GR Acctg.Reld' }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Closing Perd.Prevs.Yr.Delta GR Acctg.Reld'
          cast ( ($projection.GVoAPrevFYClsgPerdReldVal - $projection.GVoAPrevFYClsgPerdAcctgReldVal ) as abap.dec( 23, 2 ) )                                                                                                                                                     as GVoAPrevFYClsgPerdDeltaReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Quarter &1 Accounting Released', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Previous Quarter Accounting Released'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearQuarter = $parameters.P_PreviousFiscalYearQuarter ) then 1 end as abap.dec( 23, 2 ) )                                                                                              as GVoAPrevFsclQtrAcctgReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Period &1 Accounting Released', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous Period Accounting Released'
          case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod )  then abap.dec'1'end                                                                                                                   as GVoAPrevFYPerdAcctgReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Period &1 Delta GR Acctg.Reld', binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Previous Period Delta GR Acctg.Reld'
          cast ( ($projection.GVoAPrevFYPerdReldVal - $projection.GVoAPrevFYPerdAcctgReldVal ) as abap.dec( 23, 2 ) )                                                                                                                                                             as GVoAPrevFYPerdAcctDeltaReldVal,

          /****Closing PERIOD vs. Same Period Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'PY Period &1 GR Retranslated', binding: [{ index: 1, parameter: 'P_FiscalYearPeriodPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'PY Period GR Retranslated'
          cast( case when ( GLRecordType <> 'C' and PostingLevel = '' and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                           as GVoAFsclYrPerdPrevYrRtrnsltVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'PY Period &1 GR Released', binding: [{ index: 1, parameter: 'P_FiscalYearPeriodPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'PY Period GR Released'
          cast( case when ( GLRecordType = 'U' and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                                                  as GVoAFsclYrPerdPrevYrReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'PY Period &1 GR Adjusted', binding: [{ index: 1, parameter: 'P_FiscalYearPeriodPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'PY Period GR Adjusted'
          cast( case when ( GLRecordType <> 'C' and ( PostingLevel = '' or PostingLevel = '00' or PostingLevel ='01' or PostingLevel ='0C' ) and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                    as GVoAFsclYrPerdPrevYrAdjdVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'PY Period &1 Accounting Released', binding: [{ index: 1, parameter: 'P_FiscalYearPeriodPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'PY Period Accounting Released'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                as GVoAPrevYrFYPerdAcctgReldVal,

          /****Current Quarter vs Same Quarter PY******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: 'Current Q.Previous Year &1 Acc. Released', binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Current Q.Previous Year Acctg.Released'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'R' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                              as GVoAFsclYrQtrPrevYrAcctgRelVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: 'Current Quarter Prevs.Yr. &1 Delta GR Acctg.Reld', binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Current Qtr.Prevs.Yr.Delta GR Acctg.Reld'
          cast ( ($projection.GVoAFsclYrQtrPrevYrReldVal - $projection.GVoAFsclYrQtrPrevYrAcctgRelVal ) as abap.dec( 23, 2 ) )                                                                                                                                                    as GVoAQtrPrevYrDeltaAcctgReldVal,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: 'Current Q. Previous Yr &1 Acc.Unreleased', binding: [{ index: 1, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Current Q.Previous Yr.Acctg.Unreleased'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearQuarter = $parameters.P_FiscalYearQuarterPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                              as GVoAFsclYrQtrPrevYrUnreldVal,

          /****Closing Quarter vs. Previous Quarter******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Quarter &1 Delta GR Acctg.Reld', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @EndUserText.label: 'Closing Quarter Delta GR Acctg.Reld'
          cast ( ($projection.GVoAClsgFsclQtrReldVal - $projection.GVoAClsgFsclQtrAcctgReldVal ) as abap.dec( 23, 2 ) )                                                                                                                                                           as GVoAClsgFsclQtrDeltaReldVal,


          /****Closing PERIOD vs. Same Period Previous Year******/
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'PY Period &1 Acc.Unreleased', binding: [{ index: 1, parameter: 'P_FiscalYearPeriodPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'PY Period Accounting Unreleased'
          cast( case when ( GLRecordType = 'C' and CnsldtnPullRequestState = 'U' and FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear ) then 1 end as abap.dec( 23, 2 ) )                                                                                                as GVoAFsclYrPerdPrevYrUnreldVal,

          @AnalyticsDetails.query: {axis: #FREE}
          @UI.textArrangement:#TEXT_ONLY
          CompanyCode,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'CY &1 △PY &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          $projection.GVoAClsgFYAcctgVal - $projection.GVoAPrevFiscalYearAcctgVal                                                                                                                                                                                                 as DeltaClsgPrevFiscalYearAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%CY &1 △PY &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.decimals:2
          ratio_of( portion=>$projection.DeltaClsgPrevFiscalYearAmount, total=>$projection.GVoAPrevFiscalYearAcctgVal) * 100                                                                                                                                                      as DeltaClsgPrevFiscalYearRatio,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'CQ &1 △CQPY &2', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}, { index: 2, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.GVoAClsgFsclQtrAcctgVal - $projection.GVoAFsclYrQtrPrevYearAcctgVal                                                                                                                                                                                         as DeltaClsgFsclYrQtrPrevYrAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%CQ &1 △CQPY &2', binding: [{ index: 1, parameter: 'P_FiscalYearQuarter'}, { index: 2, parameter: 'P_FiscalYearQuarterPrevYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'QuarterComp', groupLabel: 'Quarter Comparison' }]
          @AnalyticsDetails.query.decimals:2
          @AnalyticsDetails.query.hidden: true
          ratio_of( portion=>$projection.DeltaClsgFsclYrQtrPrevYrAmt, total=>$projection.GVoAFsclYrQtrPrevYearAcctgVal) * 100                                                                                                                                                     as DeltaClsgFsclYrQtrPrevYrRatio,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'YTD &1 △ &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.GVoAClsgFYToDateAcctgVal - $projection.GVoAClsgPrevFYToDateAcctgVal                                                                                                                                                                                         as DeltaClsgPrevFsclYTDAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%YTD &1 △ &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.decimals:2
          @AnalyticsDetails.query.hidden: true
          ratio_of( portion=>$projection.DeltaClsgPrevFsclYTDAmount, total=>$projection.GVoAClsgPrevFYToDateAcctgVal) * 100                                                                                                                                                       as DeltaClsgPrevFsclYTDRatio,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Closing Period &1', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYear = $parameters.P_FiscalYear and FiscalYearPeriod = $parameters.P_FiscalYearPeriod and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then abap.dec'1' end                                                                            as ClsgFiscalYearPeriodAmount,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'PY Period &1', binding: [{ index: 1, parameter: 'P_FiscalYearPeriodPrevYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear
                and ConsolidationVersion = $parameters.P_ConsolidationVersion ) then 1 end                                                                                                                                                                                        as FiscalYrPeriodPrevYrAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: 'CP &1 △CPPY &2', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYearPeriodPrevYear'}]}
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.hidden: true
          $projection.ClsgFiscalYearPeriodAmount - $projection.FiscalYrPeriodPrevYrAmt                                                                                                                                                                                            as DeltaActFsclYrPerdPrevYrAmt,

          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling.formula: #THIS
          @Consumption.dynamicLabel: { label: '%CP &1 △CPPY &2', binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, { index: 2, parameter: 'P_FiscalYearPeriodPrevYear'}]}
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YearComp', groupLabel: 'Year Comparison' }]
          @AnalyticsDetails.query.decimals:2
          @AnalyticsDetails.query.hidden: true
          ratio_of( portion=>$projection.DeltaActFsclYrPerdPrevYrAmt, total=>$projection.FiscalYrPeriodPrevYrAmt) * 100                                                                                                                                                           as DeltaActFsclYrPerdPrevYrRatio,


          //*******************************************************************
          // Measures
          //*******************************************************************
          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'TransactionCurrency'
          @Consumption.hidden: true
          curr_to_decfloat_amount(AmountInTransactionCurrency)                                                                                                                                                                                                                    as CnsldtnIntSignAmtInTransCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'GroupCurrency'
          @Consumption.hidden: true
          curr_to_decfloat_amount(AmountInGroupCurrency)                                                                                                                                                                                                                          as CnsldtnIntSignAmtInGroupCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'LocalCurrency'
          @Consumption.hidden: true
          curr_to_decfloat_amount(AmountInLocalCurrency)                                                                                                                                                                                                                          as CnsldtnIntSignAmtInLocalCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          @Consumption.hidden: true
          CnsldtnQuantityInBaseUnit                                                                                                                                                                                                                                               as CnsldtnIntSignQtyInBaseUnit,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'TransactionCurrency'
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Sign-Adjusted Amount in Trans. Currency'
          $projection.CnsldtnIntSignAmtInTransCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)                                                                                                                                                        as CnsldtnSignAdjdAmtInTransCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'LocalCurrency'
          @AnalyticsDetails.query.hidden: true
          @EndUserText.label: 'Sign-Adjusted Amount in Local Currency'
          $projection.CnsldtnIntSignAmtInGroupCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)                                                                                                                                                        as CnsldtnSignAdjdAmtInLocalCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.amount.currencyCode: 'GroupCurrency'
          @EndUserText.label: 'Sign-Adjusted Amount in Group Currency'
          @AnalyticsDetails.query.hidden: true
          $projection.CnsldtnIntSignAmtInLocalCrcy * hry_node_sign_value( dimension => $projection.financialstatementitem)                                                                                                                                                        as CnsldtnSignAdjdAmtInGroupCrcy,

          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #FORMULA
          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          @EndUserText.label: 'Sign-Adjusted Quantity'
          @AnalyticsDetails.query.hidden: true
          $projection.CnsldtnIntSignQtyInBaseUnit * hry_node_sign_value( dimension => $projection.financialstatementitem)                                                                                                                                                         as CnsldtnSignAdjdQtyInBaseUnit



}

where
       ConsolidationDimension =  'Y1'
  and  GLRecordType           <> 'R'
  and(
       ConsolidationVersion   = $parameters.P_ConsolidationVersion
    or ConsolidationVersion   = $parameters.P_ConsolidationBudgetVersion
    or ConsolidationVersion   = $parameters.P_CnsldtnCnstntCrcyVersion
  )
  and  PeriodMode             =  'PER'
  and(
       FiscalYear             = $parameters.P_FiscalYear
    or FiscalYear             = $parameters.P_PreviousFiscalYear
  )
```
