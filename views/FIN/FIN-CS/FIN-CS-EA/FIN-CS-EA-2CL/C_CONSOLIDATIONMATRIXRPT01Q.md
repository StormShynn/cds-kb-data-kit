---
name: C_CONSOLIDATIONMATRIXRPT01Q
description: This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT01Q')/$value
semantic_en: This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
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
# C_CONSOLIDATIONMATRIXRPT01Q

**This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONSOLIDATIONMATRIXRPT01Q')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `YTDAmtInCnsldtnGroupCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Group Currency |
| `YTDAmtInCnsldtnTransactionCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Transaction Currency |
| `YTDAmtInCnsldtnLocalCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Local Currency |
| `YTDQtyInCnsldtnBaseUnit` |  | |  |  | `QUAN(29)` | YTD Quantity |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
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
| `ConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
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
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Project` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
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
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `FinancialStatementItemHier` |  | |  |  | `CHAR(10)` |  |
| `KeyDate` |  | |  |  | `DATS(8)` |  |
