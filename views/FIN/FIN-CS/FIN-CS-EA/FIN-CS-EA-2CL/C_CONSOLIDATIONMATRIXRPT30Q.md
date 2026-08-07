---
name: C_CONSOLIDATIONMATRIXRPT30Q
description: "The primary purpose of this CDS view is to facilitate detailed financial analysis and reporting for consolidation purposes. It allows users to generate reports that reflect the financial position and performance of a group of companies or business units, taking into account various consolidation parameters and hierarchies. This CDS view provides the data to answer the following business questions: What is the consolidated financial position of a group of companies? The view provides insights into the financial status of a group by aggregating data across different units, segments, and profit centers. How do different reporting rules affect the consolidated financial statements? By allowing the selection of different consolidation reporting rules, users can analyze how these rules impact the financial outcomes. What are the financial results for specific fiscal periods and years? Users can filter and analyze data for specific fiscal years and periods, enabling period-over-period comparisons. How do currency translations affect the consolidated financial results? The view includes measures in different currencies (transaction, local, and group currencies), allowing analysis of currency translation effects. What is the impact of intercompany transactions on consolidated financials? The view supports analysis of intercompany eliminations and adjustments, which are crucial for accurate consolidated reporting. How do different organizational units contribute to the overall financial performance? By analyzing data at the level of consolidation units, profit centers, and segments, users can assess the contributions of different parts of the organization. What are the details of specific consolidation postings and transactions? The view includes detailed fields such as document numbers, posting items, and transaction types, providing granular insights into consolidation entries. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT30Q')/$value
semantic_en: "The primary purpose of this CDS view is to facilitate detailed financial analysis and reporting for consolidation purposes. It allows users to generate reports that reflect the financial position and performance of a group of companies or business units, taking into account various consolidation parameters and hierarchies. This CDS view provides the data to answer the following business questions: What is the consolidated financial position of a group of companies? The view provides insights into the financial status of a group by aggregating data across different units, segments, and profit centers. How do different reporting rules affect the consolidated financial statements? By allowing the selection of different consolidation reporting rules, users can analyze how these rules impact the financial outcomes. What are the financial results for specific fiscal periods and years? Users can filter and analyze data for specific fiscal years and periods, enabling period-over-period comparisons. How do currency translations affect the consolidated financial results? The view includes measures in different currencies (transaction, local, and group currencies), allowing analysis of currency translation effects. What is the impact of intercompany transactions on consolidated financials? The view supports analysis of intercompany eliminations and adjustments, which are crucial for accurate consolidated reporting. How do different organizational units contribute to the overall financial performance? By analyzing data at the level of consolidation units, profit centers, and segments, users can assess the contributions of different parts of the organization. What are the details of specific consolidation postings and transactions? The view includes detailed fields such as document numbers, posting items, and transaction types, providing granular insights into consolidation entries. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "Local/Group Data Analysis Query with Reporting Rules"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - consumption-view
  - document
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
  - transaction
  - metadata-only
---
# C_CONSOLIDATIONMATRIXRPT30Q

**The primary purpose of this CDS view is to facilitate detailed financial analysis and reporting for consolidation purposes. It allows users to generate reports that reflect the financial position and performance of a group of companies or business units, taking into account various consolidation parameters and hierarchies. This CDS view provides the data to answer the following business questions: What is the consolidated financial position of a group of companies? The view provides insights into the financial status of a group by aggregating data across different units, segments, and profit centers. How do different reporting rules affect the consolidated financial statements? By allowing the selection of different consolidation reporting rules, users can analyze how these rules impact the financial outcomes. What are the financial results for specific fiscal periods and years? Users can filter and analyze data for specific fiscal years and periods, enabling period-over-period comparisons. How do currency translations affect the consolidated financial results? The view includes measures in different currencies (transaction, local, and group currencies), allowing analysis of currency translation effects. What is the impact of intercompany transactions on consolidated financials? The view supports analysis of intercompany eliminations and adjustments, which are crucial for accurate consolidated reporting. How do different organizational units contribute to the overall financial performance? By analyzing data at the level of consolidation units, profit centers, and segments, users can assess the contributions of different parts of the organization. What are the details of specific consolidation postings and transactions? The view includes detailed fields such as document numbers, posting items, and transaction types, providing granular insights into consolidation entries. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT30Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` |  | |  |  | `CHAR(3)` | Consolidation Version Element |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PeriodMode` |  | |  |  | `CHAR(10)` | Period Mode |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Profit Center for Elimination |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  |  | `CHAR(25)` | Segment for Elimination |
| `ConsolidationLedger` |  | |  |  | `CHAR(2)` | Ledger |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Amount in Local Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Group Currency |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(28)` |  |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `ConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
| `ConsolidationAcquisitionYear` |  | |  |  | `NUMC(4)` | Year of Acquisition |
| `ConsolidationAcquisitionPeriod` |  | |  |  | `NUMC(3)` | Period of Acquisition |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Unit |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `ConsolidationPostgItemAutoFlag` |  | |  |  | `CHAR(1)` | Indicator: Automatic posting lines |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CurrencyTranslationDate` |  | |  |  | `DATS(8)` | Value Date for Currency Translation |
| `RefConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `ReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Original Fiscal Year |
| `RefConsolidationPostingItem` |  | |  |  | `NUMC(6)` | Six-figure number of line item |
| `RefConsolidationDocumentType` |  | |  |  | `CHAR(1)` | Document Category |
| `RefBusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `UserID` |  | |  |  | `CHAR(12)` | User Name |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reverse Document Number |
| `ReversedDocument` |  | |  |  | `CHAR(10)` | Number of Reversed Document |
| `InvestmentActivityType` |  | |  |  | `CHAR(2)` | Consolidation of Investments Activity |
| `InvestmentActivity` |  | |  |  | `CHAR(10)` | Consolidation of Investments Activity Number |
| `ConsolidationDocReversalYear` |  | |  |  | `NUMC(4)` | Year of reversal document or reversed document |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Transaction |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Organizational Units |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `Project` |  | |  |  | `CHAR(24)` | Project Definition |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Country/Region of Customer or Supplier |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Industry Key |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `CnsldtnAdhocItem` |  | |  |  | `CHAR(30)` | Ad Hoc Item |
| `CnsldtnAdhocSet` |  | |  |  | `CHAR(30)` | Ad Hoc Set |
| `CnsldtnAdhocSetItem` |  | |  |  | `NUMC(8)` | Ad Hoc Set Item |
| `MatchingReasonCode` |  | |  |  | `CHAR(6)` | Reason Code |
| `OriginType` |  | |  |  | `CHAR(3)` | Origin Type |
| `OriginReference` |  | |  |  | `CHAR(30)` | Origin Reference |
| `CnsldtnGroupJrnlEntryBundle` |  | |  |  | `CHAR(13)` | Document Bundle Number |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` |  |
| `ConsolidationUnitHierarchy` |  | |  |  | `CHAR(40)` |  |
| `ConsolidationSegmentHierarchy` |  | |  |  | `CHAR(40)` |  |
| `ConsolidationPrftCtrHierarchy` |  | |  |  | `CHAR(40)` |  |
| `KeyDate` |  | |  |  | `DATS(8)` |  |
| `ConsolidationReportingRuleID` |  | |  |  | `CHAR(3)` |  |
| `ConsolidationReportingItemHier` |  | |  |  | `CHAR(10)` |  |
