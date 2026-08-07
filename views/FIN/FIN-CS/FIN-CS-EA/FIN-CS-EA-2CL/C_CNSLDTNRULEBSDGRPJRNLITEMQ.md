---
name: C_CNSLDTNRULEBSDGRPJRNLITEMQ
description: This CDS view can be used as analytical provider (primary data source) for an analytical query. You can use it to select different reporting item hierarchies and generate rule-based consolidation reports, for example, cash flow statements or changes in equity. Since this is a C1-released query, you can use it in the Custom Analytical Queries app and in SAP Analysis for Microsoft Office. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNRULEBSDGRPJRNLITEMQ')/$value
semantic_en: This CDS view can be used as analytical provider (primary data source) for an analytical query. You can use it to select different reporting item hierarchies and generate rule-based consolidation reports, for example, cash flow statements or changes in equity. Since this is a C1-released query, you can use it in the Custom Analytical Queries app and in SAP Analysis for Microsoft Office. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Rule-Based Group Data Analysis
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
# C_CNSLDTNRULEBSDGRPJRNLITEMQ

**This CDS view can be used as analytical provider (primary data source) for an analytical query. You can use it to select different reporting item hierarchies and generate rule-based consolidation reports, for example, cash flow statements or changes in equity. Since this is a C1-released query, you can use it in the Custom Analytical Queries app and in SAP Analysis for Microsoft Office. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNRULEBSDGRPJRNLITEMQ')/$value) |

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
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Profit Center for Elimination |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  |  | `CHAR(25)` | Segment for Elimination |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Value in Transaction Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Value in Local Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Value in Group Currency |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `CnsldtnGroupJrnlEntry` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `CnsldtnGroupJrnlEntryItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
| `ConsolidationAcquisitionYear` |  | |  |  | `NUMC(4)` | Year of Acquisition |
| `ConsolidationAcquisitionPeriod` |  | |  |  | `NUMC(3)` | Period of Acquisition |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Consolidation Unit |
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
| `ConsolidationUnitHierarchy` |  | |  |  | `CHAR(40)` | Consolidation Unit Hierarchy |
| `ConsolidationSegmentHierarchy` |  | |  |  | `CHAR(40)` | Segment Hierarchy |
| `ConsolidationPrftCtrHierarchy` |  | |  |  | `CHAR(40)` | Profit Center Hierarchy |
| `KeyDate` |  | |  |  | `DATS(8)` | Key Date |
| `ConsolidationReportingRuleID` |  | |  |  | `CHAR(3)` | Reporting Rule Variant |
| `ConsolidationReportingItemHier` |  | |  |  | `CHAR(10)` | Reporting Item Hierarchy |
