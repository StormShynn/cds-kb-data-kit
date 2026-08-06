---
name: I_MATRIXCONSOLIDATIONREPORTC
description: This CDS view provides access to the consolidated data for both statutory and management consolidation reporting. You can create group reports for consolidation groups, such as consolidated balance sheets and consolidated P&amp;L statements based on organizational units such as profit centers, segments, and companies, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and consolidation ledger in which the reporting logic is applied? What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items in the transaction currency, local currency, and group currency? What are the interunit elimination-related amounts, for example, for eliminations between profit centers, segments, and companies?
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCONSOLIDATIONREPORTC')/$value
semantic_en: This CDS view provides access to the consolidated data for both statutory and management consolidation reporting. You can create group reports for consolidation groups, such as consolidated balance sheets and consolidated P&amp;L statements based on organizational units such as profit centers, segments, and companies, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and consolidation ledger in which the reporting logic is applied? What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items in the transaction currency, local currency, and group currency? What are the interunit elimination-related amounts, for example, for eliminations between profit centers, segments, and companies?
keywords:
  - Group Data Analysis - Cube
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - document
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_MATRIXCONSOLIDATIONREPORTC

**This CDS view provides access to the consolidated data for both statutory and management consolidation reporting. You can create group reports for consolidation groups, such as consolidated balance sheets and consolidated P&amp;L statements based on organizational units such as profit centers, segments, and companies, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and consolidation ledger in which the reporting logic is applied? What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items in the transaction currency, local currency, and group currency? What are the interunit elimination-related amounts, for example, for eliminations between profit centers, segments, and companies?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCONSOLIDATIONREPORTC')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConsolidationLedger` | `CHAR(2)` | Ledger |
| `ConsolidationDimension` | `CHAR(2)` | Dimension |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `ConsolidationDocumentNumber` | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` | `CHAR(1)` | Record Type |
| `ConsolidationVersion` | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` | `CHAR(3)` | Consolidation Version Element |
| `TransactionCurrency` | `CUKY(5)` | Currency Key |
| `LocalCurrency` | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` | `CUKY(5)` | Group Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `FiscalPeriod` | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `PeriodMode` | `CHAR(10)` | Period Mode |
| `ConsolidationDocumentType` | `CHAR(2)` | Document Type |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Indicator |
| `Company` | `CHAR(6)` | Company |
| `ConsolidationUnit` | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnitForElim` | `CHAR(25)` | Consolidation Unit for Elimination |
| `ConsolidationChartOfAccounts` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` | `CHAR(10)` | Financial Statement Item |
| `PartnerConsolidationUnit` | `CHAR(18)` | Partner Unit |
| `ConsolidationGroup` | `CHAR(18)` | Consolidation Group |
| `CompanyCode` | `CHAR(4)` | Original company code |
| `SubItemCategory` | `CHAR(3)` | Subitem Category |
| `SubItem` | `CHAR(10)` | Subitem |
| `PostingLevel` | `CHAR(2)` | Posting Level |
| `ConsolidationApportionment` | `NUMC(1)` | Apportionment |
| `CurrencyConversionsDiffType` | `NUMC(1)` | Currency Translation |
| `ConsolidationAcquisitionYear` | `NUMC(4)` | Year of Acquisition |
| `ConsolidationAcquisitionPeriod` | `NUMC(3)` | Period of Acquisition |
| `InvesteeConsolidationUnit` | `CHAR(18)` | Investee Unit |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInLocalCurrency` | `CURR(23)` | Amount in Local Currency |
| `AmountInGroupCurrency` | `CURR(23)` | Amount in Group Currency |
| `QuantityInBaseUnit` | `QUAN(23)` | Quantity |
| `CnsldtnQuantityInBaseUnit` | `QUAN(29)` | Quantity |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `ConsolidationPostgItemAutoFlag` | `CHAR(1)` | Indicator: Automatic posting lines |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `CurrencyTranslationDate` | `DATS(8)` | Value Date for Currency Translation |
| `RefConsolidationDocumentNumber` | `CHAR(10)` | Document Number of an Accounting Document |
| `ReferenceFiscalYear` | `NUMC(4)` | Original Fiscal Year |
| `RefConsolidationPostingItem` | `NUMC(6)` | Six-figure number of line item |
| `RefConsolidationDocumentType` | `CHAR(1)` | Document Category |
| `RefBusinessTransactionType` | `CHAR(4)` | Business Transaction |
| `CreationDate` | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` | `TIMS(6)` | Time of Entry |
| `UserID` | `CHAR(12)` | User Name |
| `ReverseDocument` | `CHAR(10)` | Reverse Document Number |
| `ReversedDocument` | `CHAR(10)` | Number of Reversed Document |
| `InvestmentActivityType` | `CHAR(2)` | Consolidation of Investments Activity |
| `InvestmentActivity` | `CHAR(10)` | Consolidation of Investments Activity Number |
| `ConsolidationDocReversalYear` | `NUMC(4)` | Year of reversal document or reversed document |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Transaction |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Organizational Units |
| `LogicalSystem` | `CHAR(10)` | Logical System |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | `CHAR(10)` | Account Number |
| `AssignmentReference` | `CHAR(18)` | Assignment Number |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ConsolidationPrftCtrForElim` | `CHAR(25)` | Profit Center for Elimination |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` | `CHAR(25)` | Segment for Elimination |
| `PartnerCostCenter` | `CHAR(10)` | Sender Cost Center |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `OrderID` | `CHAR(12)` | Order Number |
| `Customer` | `CHAR(10)` | Customer Number |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `Material` | `CHAR(40)` | Material Number |
| `Plant` | `CHAR(4)` | Plant |
| `FinancialTransactionType` | `CHAR(3)` | Transaction Type |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `Project` | `CHAR(24)` | Project Definition |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` | `CHAR(3)` | Country/Region of Customer or Supplier |
| `CustomerSupplierIndustry` | `CHAR(4)` | Industry Key |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` | `CHAR(10)` | Group Key |
| `CnsldtnAdhocItem` | `CHAR(30)` | Ad Hoc Item |
| `CnsldtnAdhocSet` | `CHAR(30)` | Ad Hoc Set |
| `CnsldtnAdhocSetItem` | `NUMC(8)` | Ad Hoc Set Item |
| `MatchingReasonCode` | `CHAR(6)` | Reason Code |
| `OriginType` | `CHAR(3)` | Origin Type |
| `OriginReference` | `CHAR(30)` | Origin Reference |
| `CnsldtnGroupJrnlEntryBundle` | `CHAR(13)` | Document Bundle Number |
| `ConsolidationUnitHierarchy` | `CHAR(40)` |  |
| `ConsolidationSegmentHierarchy` | `CHAR(40)` |  |
| `ConsolidationPrftCtrHierarchy` | `CHAR(40)` |  |
| `KeyDate` | `DATS(8)` |  |
| `CnsldtnIntSignAmtInTransCrcy` | `CURR(23)` | Amount in Transaction Currency |
| `CnsldtnIntSignAmtInLocalCrcy` | `CURR(23)` | Amount in Local Currency |
| `CnsldtnIntSignAmtInGroupCrcy` | `CURR(23)` | Amount in Group Currency |
| `CnsldtnIntSignQtyInBaseUnit` | `QUAN(29)` | Quantity |
