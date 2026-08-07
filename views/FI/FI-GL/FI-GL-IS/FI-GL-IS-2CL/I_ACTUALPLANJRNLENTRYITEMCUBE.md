---
name: I_ACTUALPLANJRNLENTRYITEMCUBE
description: This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The CDS view also provides access to plan data (FinancialPlanningEntryItem CDS view). The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting comparing actual with plan data? What postings have accumulated on a cost center during the year comparing actual with plan data? What is the balance of a G/L account as of today comparing actual with plan data?
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANJRNLENTRYITEMCUBE')/$value
semantic_en: This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The CDS view also provides access to plan data (FinancialPlanningEntryItem CDS view). The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting comparing actual with plan data? What postings have accumulated on a cost center during the year comparing actual with plan data? What is the balance of a G/L account as of today comparing actual with plan data?
keywords:
  - Actual Plan of Journal Entry Item - Cube
  - Actual Plan of Journal Entry Item - Cube
  - Actual Plan of Journal Entry Item - Cube
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - master-data
  - plan
  - metadata-only
---
# I_ACTUALPLANJRNLENTRYITEMCUBE

**This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The CDS view also provides access to plan data (FinancialPlanningEntryItem CDS view). The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting comparing actual with plan data? What postings have accumulated on a cost center during the year comparing actual with plan data? What is the balance of a G/L account as of today comparing actual with plan data?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANJRNLENTRYITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `LedgerName` |  | |  |  | `CHAR(30)` | Ledger Name |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Company Code Name |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `GLAccountName` |  | |  |  | `CHAR(30)` | G/L Account Name |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `FunctionalAreaName` |  | |  |  | `CHAR(30)` | Functional Area Name |
| `BusinessAreaName` |  | |  |  | `CHAR(30)` | Business Area Name |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `CostCtrActivityTypeName` |  | |  |  | `CHAR(60)` | Activity Type Name |
| `WBSElementDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Name |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusinessTransactionTypeName` |  | |  |  | `CHAR(30)` | Business Transaction Type Name |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` |  | |  |  | `CHAR(20)` | Document Type Name |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureProductionDate` |  | |  |  | `DATS(8)` | Joint Venture Production Date |
| `JointVentureAccountingActivity` |  | |  |  | `CHAR(2)` | Joint Venture Accounting Activity |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `RealEstateBuilding` |  | |  |  | `CHAR(8)` | Real Estate Building |
| `RealEstateProperty` |  | |  |  | `CHAR(8)` | Real Estate Property |
| `RERentalObject` |  | |  |  | `CHAR(8)` | RE Rental Object |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Service Charge Key |
| `RESettlementUnitID` |  | |  |  | `CHAR(5)` | RE Settlement Unit |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `BillToPartyName` |  | |  |  | `CHAR(80)` | Name of Bill-to Party |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerGroupName` |  | |  |  | `CHAR(30)` | Name of Customer Group |
| `CustomerSupplierCountryName` |  | |  |  | `CHAR(15)` | Country/Region Name of Customer/Supplier |
| `CustomerSupplierIndustryName` |  | |  |  | `CHAR(20)` | Customer Supplier Industry Name |
| `DistributionChannelName` |  | |  |  | `CHAR(20)` | Distribution Channel Name |
| `DivisionName` |  | |  |  | `CHAR(30)` | Name of Division |
| `MaterialName` |  | |  |  | `CHAR(40)` | Material Description |
| `MaterialGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `ProductName` |  | |  |  | `CHAR(40)` | Product Description |
| `ProductGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `SoldMaterialName` |  | |  |  | `CHAR(40)` | Sold Material Name |
| `SoldProductName` |  | |  |  | `CHAR(40)` | Sold Material Name |
| `SoldProductGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `PartnerBusinessAreaName` |  | |  |  | `CHAR(30)` | Partner Business Area Name |
| `PartnerCompanyName` |  | |  |  | `CHAR(30)` | Company Name |
| `PartnerCompanyCodeName` |  | |  |  | `CHAR(25)` | Partner Company Code Name |
| `PartnerCostCenterName` |  | |  |  | `CHAR(20)` | Partner Cost Center Name |
| `PartnerCostCtrActivityTypeName` |  | |  |  | `CHAR(60)` | Partner Activity Type Name |
| `PartnerFunctionalAreaName` |  | |  |  | `CHAR(30)` | Partner Functional Area Name |
| `PartnerProfitCenterName` |  | |  |  | `CHAR(50)` | Partner Profit Center Name |
| `PartnerProjectDescription` |  | |  |  | `CHAR(40)` | Partner Project Description (1st text line) |
| `PartnerSegmentName` |  | |  |  | `CHAR(50)` | Partner Segment Name |
| `PartnerWBSElementDescription` |  | |  |  | `CHAR(40)` | Partner WBS Element Description |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `SalesDistrictName` |  | |  |  | `CHAR(20)` | Name of the District |
| `SalesOrganizationName` |  | |  |  | `CHAR(20)` | Sales Organization Name |
| `ShipToPartyName` |  | |  |  | `CHAR(80)` | Name of Ship-to Party |
| `WorkCenterText` |  | |  |  | `CHAR(40)` | Work Center Text |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `ControllingObjectCurrency` |  | |  |  | `CUKY(5)` | CO Object Currency |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `AmountInObjectCurrency` |  | |  |  | `CURR(23)` | Amount in Object Currency |
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Company Currency |
| `FixedAmountInTransCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Transaction Currency |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ValuationFixedQuantity` |  | |  |  | `QUAN(23)` | Valuation Fixed Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `ReferenceQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Reference Quantity |
| `ReferenceQuantity` |  | |  |  | `QUAN(23)` | Reference quantity |
| `ActualAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Actual Amount in Transaction Currency |
| `ActualAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Actual Amount in Company Code Currency |
| `ActualAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Actual Amount in Global Currency |
| `ActualAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 1 |
| `ActualAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 2 |
| `ActualAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 3 |
| `ActualAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 4 |
| `ActualAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 5 |
| `ActualAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 6 |
| `ActualAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 7 |
| `ActualAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 8 |
| `ActualAmountInObjectCurrency` |  | |  |  | `CURR(23)` | Actual Amount in Object Currency |
| `ActualValuationQuantity` |  | |  |  | `QUAN(23)` | Actual Valuation Quantity |
| `ActualReferenceQuantity` |  | |  |  | `QUAN(23)` | Actual Reference Quantity |
| `ActualQuantityInBaseUnit` |  | |  |  | `QUAN(23)` | Actual Quantity in Base Unit |
| `PlanAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Plan Amount in Transaction Currency |
| `PlanAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Plan Amount in Company Code Currency |
| `PlanAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Plan Amount in Global Currency |
| `PlanAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 1 |
| `PlanAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 2 |
| `PlanAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 3 |
| `PlanAmountInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 4 |
| `PlanAmountInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 5 |
| `PlanAmountInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 6 |
| `PlanAmountInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 7 |
| `PlanAmountInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 8 |
| `PlanAmountInObjectCurrency` |  | |  |  | `CURR(23)` | Plan Amount in Object Currency |
| `PlanValuationQuantity` |  | |  |  | `QUAN(23)` | Plan Valuation Quantity |
| `PlanPriceInGlobalCurrency` |  | |  |  | `CURR(23)` | Price in Global Currency |
| `PlanPriceInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Price in Company Code Currency |
| `PlanPriceInTransactionCurrency` |  | |  |  | `CURR(23)` | Price in Transaction Currency |
| `PlanReferenceQuantity` |  | |  |  | `QUAN(23)` | Plan Reference Quantity |
| `ActlPlnDiffAmtInTransCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in transaction currency |
| `ActlPlnDiffAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in company code currency |
| `ActlPlnDiffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in global currency |
| `ActlPlnDiffAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 1 |
| `ActlPlnDiffAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 2 |
| `ActlPlnDiffAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 3 |
| `ActlPlnDiffAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 4 |
| `ActlPlnDiffAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 5 |
| `ActlPlnDiffAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 6 |
| `ActlPlnDiffAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 7 |
| `ActlPlnDiffAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 8 |
| `ActlPlnDiffAmtInObjectCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in object currency |
| `ActlPanDiffValuationQuantity` |  | |  |  | `QUAN(23)` | Actual Plan Difference Valuation Quantity |
| `ActlPlanDiffReferenceQuantity` |  | |  |  | `QUAN(23)` | Actual Plan Difference Reference Quantity |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `YearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
