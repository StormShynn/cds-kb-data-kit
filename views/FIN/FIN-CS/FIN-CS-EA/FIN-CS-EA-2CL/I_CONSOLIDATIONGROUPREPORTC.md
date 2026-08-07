---
name: I_CONSOLIDATIONGROUPREPORTC
description: This CDS view provides access to all details of the data in group reporting that has the consolidation logic applied. You can create group reports for consolidation groups, such as consolidated balance sheets and consolidated P&amp;L statements, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and consolidation ledger in which the reporting logic is applied? What is the fiscal year, period, and organizational unit information of the consolidated data? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items in the transaction currency, local currency, and group currency?
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONGROUPREPORTC')/$value
semantic_en: This CDS view provides access to all details of the data in group reporting that has the consolidation logic applied. You can create group reports for consolidation groups, such as consolidated balance sheets and consolidated P&amp;L statements, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and consolidation ledger in which the reporting logic is applied? What is the fiscal year, period, and organizational unit information of the consolidated data? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items in the transaction currency, local currency, and group currency?
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
# I_CONSOLIDATIONGROUPREPORTC

**This CDS view provides access to all details of the data in group reporting that has the consolidation logic applied. You can create group reports for consolidation groups, such as consolidated balance sheets and consolidated P&amp;L statements, with the data provided by this CDS view. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension, consolidation chart of accounts, and consolidation ledger in which the reporting logic is applied? What is the fiscal year, period, and organizational unit information of the consolidated data? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items in the transaction currency, local currency, and group currency?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONGROUPREPORTC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` |  | |  |  | `CHAR(2)` | Ledger |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `ConsolidationAcquisitionYear` |  | |  |  | `NUMC(4)` | Year of Acquisition |
| `ConsolidationAcquisitionPeriod` |  | |  |  | `NUMC(3)` | Period of Acquisition |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Unit |
| `YTDAmtInCnsldtnTransactionCrcy` |  | |  |  | `CURR(23)` | Cumulative Value in Transaction Currency |
| `YTDAmtInCnsldtnLocalCrcy` |  | |  |  | `CURR(23)` | Cumulative Value in Local Currency |
| `YTDAmtInCnsldtnGroupCrcy` |  | |  |  | `CURR(23)` | Cumulative Value in Group Currency |
| `YTDQtyInCnsldtnBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
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
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `Project` |  | |  |  | `CHAR(24)` | Project Definition |
| `ConsolidationRecordNumber` |  | |  |  | `CHAR(18)` | Record number of the line item record |
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
