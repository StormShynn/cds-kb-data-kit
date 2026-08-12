---
name: I_ACTUALPLANJRNLENTRYITEMCUBE
description: "This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The CDS view also provides access to plan data (FinancialPlanningEntryItem CDS view). The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting comparing actual with plan data? What postings have accumulated on a cost center during the year comparing actual with plan data? What is the balance of a G/L account as of today comparing actual with plan data?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANJRNLENTRYITEMCUBE')/$value
semantic_en: "This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The CDS view also provides access to plan data (FinancialPlanningEntryItem CDS view). The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting comparing actual with plan data? What postings have accumulated on a cost center during the year comparing actual with plan data? What is the balance of a G/L account as of today comparing actual with plan data?"
semantic_vi: "Actual Plan of Journal Entry Item - Cube — CDS view giao diện dựa trên I_ActualPlanJournalEntryItem."
keywords:
  - "Actual Plan of Journal Entry Item - Cube"
  - "actual"
  - "plan"
  - "journal"
  - "entry"
  - "item"
  - "cube"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
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
---
# I_ACTUALPLANJRNLENTRYITEMCUBE

**This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The CDS view also provides access to plan data (FinancialPlanningEntryItem CDS view). The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting comparing actual with plan data? What postings have accumulated on a cost center during the year comparing actual with plan data? What is the balance of a G/L account as of today comparing actual with plan data?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANJRNLENTRYITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `LedgerName` |  | |  | `_Ledger._Text[1: Language = $session.system_language].LedgerName` | `CHAR(30)` | Ledger Name |
| `CompanyCodeName` |  | |  | `cast( APJEI._CompanyCode.CompanyCodeName as fis_butxt preserving type )` | `CHAR(25)` | Company Code Name |
| `ControllingAreaName` |  | |  | `cast( APJEI._ControllingArea.ControllingAreaName as fis_bezei preserving type )` | `CHAR(25)` | Controlling Area Name |
| `GLAccountName` |  | |  | `cast( APJEI._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )` | `CHAR(30)` | G/L Account Name |
| `GLAccountLongName` |  | |  | `cast( APJEI._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat preserving type )` | `CHAR(50)` | G/L Account Long Name |
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
| `CostCenterName` |  | |  | `APJEI._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName` | `CHAR(20)` | Cost Center Name |
| `ProfitCenterName` |  | |  | `APJEI._ProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `FunctionalAreaName` |  | |  | `cast( APJEI._FunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_funcarea_name )` | `CHAR(30)` | Functional Area Name |
| `BusinessAreaName` |  | |  | `cast( APJEI._BusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_busarea_name preserving type )` | `CHAR(30)` | Business Area Name |
| `SegmentName` |  | |  | `APJEI._Segment._Text[1: Language = $session.system_language].SegmentName` | `CHAR(50)` | Segment Name |
| `CostCtrActivityTypeName` |  | |  | `cast( APJEI._CostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_lstar_text )` | `CHAR(60)` | Activity Type Name |
| `WBSElementDescription` |  | |  | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
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
| `BusinessTransactionTypeName` |  | |  | `APJEI._BusinessTransactionType._Text[1: Language = $session.system_language].BusinessTransactionTypeName` | `CHAR(30)` | Business Transaction Type Name |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` |  | |  | `APJEI._AccountingDocumentType._Text[1: Language = $session.system_language].AccountingDocumentTypeName` | `CHAR(20)` | Document Type Name |
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
| `BillToPartyName` |  | |  | `cast( APJEI._BillToParty.CustomerName as bill_to_name )` | `CHAR(80)` | Name of Bill-to Party |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerGroupName` |  | |  | `cast( APJEI._CustomerGroup._Text[1: Language = $session.system_language].CustomerGroupName as fis_customergroup_name )` | `CHAR(30)` | Name of Customer Group |
| `CustomerSupplierCountryName` |  | |  | `cast( APJEI._CustomerSupplierCountry._Text[1: Language = $session.system_language].CountryName as fis_customersupplier_country )` | `CHAR(15)` | Country/Region Name of Customer/Supplier |
| `CustomerSupplierIndustryName` |  | |  | `cast( APJEI._CustomerSupplierIndustryText[1: Language = $session.system_language].SupplierIndustryName as fis_customersupplier_industry preserving type )` | `CHAR(20)` | Customer Supplier Industry Name |
| `DistributionChannelName` |  | |  | `cast( APJEI._DistributionChannel._Text[1: Language = $session.system_language].DistributionChannelName as fis_distributionchannel_name preserving type )` | `CHAR(20)` | Distribution Channel Name |
| `DivisionName` |  | |  | `cast( APJEI._OrganizationDivision._Text[1: Language = $session.system_language].DivisionName as fis_division_name )` | `CHAR(30)` | Name of Division |
| `MaterialName` |  | |  | `APJEI._Material._Text[1: Language = $session.system_language].MaterialName` | `CHAR(40)` | Material Description |
| `MaterialGroupName` |  | |  | `APJEI._MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `ProductName` |  | |  | `APJEI._Product._Text[1: Language = $session.system_language].ProductName` | `CHAR(40)` | Product Description |
| `ProductGroupName` |  | |  | `APJEI._ProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName` | `CHAR(20)` | Product Group Description |
| `SoldMaterialName` |  | |  | `cast( APJEI._SoldMaterial._Text[1: Language = $session.system_language].MaterialName as fis_matnr_copa_name preserving type )` | `CHAR(40)` | Sold Material Name |
| `SoldProductName` |  | |  | `cast( APJEI._SoldProduct._Text[1: Language = $session.system_language].ProductName as fis_matnr_copa_name preserving type )` | `CHAR(40)` | Sold Material Name |
| `SoldProductGroupName` |  | |  | `APJEI._SoldProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName` | `CHAR(20)` | Product Group Description |
| `PartnerBusinessAreaName` |  | |  | `cast( APJEI._PartnerBusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_partner_busarea_name preserving type )` | `CHAR(30)` | Partner Business Area Name |
| `PartnerCompanyName` |  | |  | `cast( APJEI._PartnerCompany[1: Language = $session.system_language].CompanyName as fis_rcomp_name preserving type )` | `CHAR(30)` | Company Name |
| `PartnerCompanyCodeName` |  | |  | `cast( APJEI._PartnerCompanyCode.CompanyCodeName as fis_partner_company_code_name preserving type )` | `CHAR(25)` | Partner Company Code Name |
| `PartnerCostCenterName` |  | |  | `cast( APJEI._PartnerCostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_partner_kostl_name preserving type )` | `CHAR(20)` | Partner Cost Center Name |
| `PartnerCostCtrActivityTypeName` |  | |  | `cast( APJEI._PartnerCostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_partner_activity_type_name )` | `CHAR(60)` | Partner Activity Type Name |
| `PartnerFunctionalAreaName` |  | |  | `cast( APJEI._PartnerFunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_partner_funcarea_name )` | `CHAR(30)` | Partner Functional Area Name |
| `PartnerProfitCenterName` |  | |  | `cast( APJEI._PartnerProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName as fis_partner_prctr_name )` | `CHAR(50)` | Partner Profit Center Name |
| `PartnerProjectDescription` |  | |  | `cast( APJEI._PartnerProjectBasicData.ProjectDescription as fis_partner_project_descript preserving type )` | `CHAR(40)` | Partner Project Description (1st text line) |
| `PartnerSegmentName` |  | |  | `cast( APJEI._PartnerSegment._Text[1: Language = $session.system_language].SegmentName as fis_partner_segment_name preserving type )` | `CHAR(50)` | Partner Segment Name |
| `PartnerWBSElementDescription` |  | |  | `cast( APJEI._PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_descript preserving type )` | `CHAR(40)` | Partner WBS Element Description |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `SalesDistrictName` |  | |  | `APJEI._SalesDistrict._Text[1: Language = $session.system_language].SalesDistrictName` | `CHAR(20)` | Name of the District |
| `SalesOrganizationName` |  | |  | `cast( APJEI._SalesOrganization._Text[1: Language = $session.system_language].SalesOrganizationName as fis_sales_organization_name preserving type )` | `CHAR(20)` | Sales Organization Name |
| `ShipToPartyName` |  | |  | `cast( APJEI._ShipToParty.CustomerName as ship_to_name preserving type )` | `CHAR(80)` | Name of Ship-to Party |
| `WorkCenterText` |  | |  | `APJEI._WorkCenter._Text[1: Language = $session.system_language].WorkCenterText` | `CHAR(40)` | Work Center Text |
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
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANJRNLENTRYITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANJRNLENTRYITEMCUBE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@EndUserText.label: 'Actual Plan of Journal Entry Item - Cube'
//@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIACTPLNJEIC'
@VDM.viewType: #COMPOSITE

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@Consumption.dbHints: [ 'USE_HEX_PLAN','NO_HEX_INDEX_JOIN' ]
@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true
define view entity I_ActualPlanJrnlEntryItemCube

  as select from I_ActualPlanJournalEntryItem as APJEI

  association [1..1] to I_CalendarMonth              as _CalendarMonth     on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter            as _CalendarQuarter   on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [1..1] to I_YearMonth                  as _CalendarYearMonth on  $projection.YearMonth = _CalendarYearMonth.YearMonth
  association of exact one to exact one E_JournalEntryItem as _Extension_acdoca  on  APJEI.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                 and APJEI.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                 and APJEI.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                 and APJEI.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                 and APJEI.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  association [1..1] to E_FinancialPlanningEntryItem as _Extension_acdocp  on  APJEI.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                           and APJEI.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                           and APJEI.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem


{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key APJEI.SourceLedger,                  //key
      @ObjectModel.foreignKey.association: '_Ledger'
  key APJEI.Ledger,                        //key
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key APJEI.CompanyCode,                   //key
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key APJEI.FiscalYear,                    //key
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key APJEI.AccountingDocument,            //key
  key APJEI.FinancialPlanningReqTransSqnc, //key
  key APJEI.FinancialPlanningDataPacket,   //key
      // field ActualPlanJournalEntryItem required for representative key definition LedgerGLLineItem|FinancialPlanningEntryItem
  key APJEI.ActualPlanJournalEntryItem, //key

      APJEI.LedgerGLLineItem, //key
      //@Aggregation.default: #NONE
      APJEI.FinancialPlanningEntryItem, //key
      @ObjectModel.foreignKey.association: '_ControllingArea'
      APJEI.ControllingArea,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      APJEI.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      APJEI.ChartOfAccounts,

      _Ledger._Text[1: Language = $session.system_language].LedgerName                                                                                                                                                                           as LedgerName,
      cast( APJEI._CompanyCode.CompanyCodeName as fis_butxt preserving type )                                                                                                                                                                    as CompanyCodeName,
      cast( APJEI._ControllingArea.ControllingAreaName as fis_bezei preserving type )                                                                                                                                                            as ControllingAreaName,
      cast( APJEI._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )                                                                                                                    as GLAccountName,
      cast( APJEI._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat preserving type )                                                                                                as GLAccountLongName,

      APJEI.ActualPlanCode,

      ////////////////////////////////////////////////////////////////////////////////////
      // G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_BusinessArea'
      APJEI.BusinessArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      APJEI.ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      APJEI.CostCenter,
      @Analytics.internalName: #GLOBAL
      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'ProjectExternalID'
      APJEI.Project,
      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      APJEI.ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      APJEI.ProjectExternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      APJEI.PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      APJEI.PartnerProjectExternalID,
      @Analytics.internalName: #GLOBAL
      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'WBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'WBSElementExternalID'
      APJEI.WBSElement,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      APJEI.WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      APJEI.WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      APJEI.PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      APJEI.PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      APJEI.FunctionalArea,
      @ObjectModel.foreignKey.association: '_Segment'
      APJEI.Segment,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      APJEI.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      APJEI.CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_Order'
      APJEI.OrderID,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      APJEI.WorkPackage,
      @ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
      APJEI.WorkItem,

      APJEI._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName                                                                    as CostCenterName,
      APJEI._ProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName                                                                as ProfitCenterName,
      cast( APJEI._FunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_funcarea_name )                                                                                                                        as FunctionalAreaName,
      cast( APJEI._BusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_busarea_name preserving type )                                                                                                             as BusinessAreaName,
      APJEI._Segment._Text[1: Language = $session.system_language].SegmentName                                                                                                                                                                   as SegmentName,
      cast( APJEI._CostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_lstar_text )                        as CostCtrActivityTypeName,
      APJEI._WBSElementBasicData.WBSDescription                                                                                                                                                                                                  as WBSElementDescription,
      APJEI._ProjectBasicData.ProjectDescription                                                                                                                                                                                                 as ProjectDescription,

      APJEI.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      APJEI.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      APJEI.PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      APJEI.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      APJEI.PartnerCostCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerProjectExternalID'
      APJEI.PartnerProject,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerWBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerWBSElementExternalID'
      APJEI.PartnerWBSElement,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      APJEI.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      APJEI.PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      APJEI.PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      APJEI.PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      APJEI.PartnerOrder_2,
      APJEI.PartnerSalesDocument,
      APJEI.PartnerProjectNetwork,
      APJEI.PartnerProjectNetworkActivity,
      APJEI.PartnerBusinessProcess,
      APJEI.PartnerCostObject,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      APJEI.PartnerCompany,
      //  @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      APJEI.OriginCostCenter,
      //  @ObjectModel.foreignKey.association: '_OriginCostCenter'
      APJEI.OriginProfitCenter,
      //  @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      APJEI.OriginCostCtrActivityType,

      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_00 Universal Journal Entry: Transaction
      ////////////////////////////////////////////////////////////////////////////////////

      APJEI.ReferenceDocumentType,
      APJEI.ReferenceDocumentContext,
      APJEI.ReferenceDocument,

      /////////////////////////////////////////////////////////////////////////////
      // Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      APJEI.PostingDate,
      APJEI.DocumentDate,
      @Semantics.fiscal.period: true
      APJEI.FiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      APJEI.FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      APJEI.FiscalYearVariant,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      APJEI.PlanningCategory,
      APJEI.ServicesRenderedDate,
      @Analytics.internalName: #GLOBAL
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      APJEI.ControllingDebitCreditCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      APJEI.AccountAssignmentType,
      APJEI.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_BillableControl'
      APJEI.BillableControl,
      //_Employment[1:EndDate  >= $parameters.P_KeyDate and
      //              StartDate <= $parameters.P_KeyDate]._Employee.EmployeeFullName as EmployeeFullName,

      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      APJEI.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      APJEI.BusinessTransactionType,
      APJEI._BusinessTransactionType._Text[1: Language = $session.system_language].BusinessTransactionTypeName                                                                                                                                   as BusinessTransactionTypeName,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      APJEI.FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      APJEI.AccountingDocumentType,
      APJEI._AccountingDocumentType._Text[1: Language = $session.system_language].AccountingDocumentTypeName                                                                                                                                     as AccountingDocumentTypeName,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      APJEI.FinancialAccountType,
      APJEI.AssignmentReference,

      APJEI.ControllingObjectClass,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_GEN  Fields for several subledgers
      ///////////////////////////////////////////////////////////////////////////
      APJEI.DocumentItemText,

      @ObjectModel.foreignKey.association: '_Plant'
      APJEI.Plant,
      @ObjectModel.foreignKey.association: '_Material'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      APJEI.Material,
      @ObjectModel.foreignKey.association: '_Product'
      APJEI.Product,
      @ObjectModel.foreignKey.association: '_Customer'
      APJEI.Customer,
      @ObjectModel.foreignKey.association: '_Supplier'
      APJEI.Supplier,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocument'
      APJEI.SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocumentItem'
      APJEI.SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      APJEI.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      APJEI.SalesDocumentItem,
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_ServiceDocumentType'
      APJEI.ServiceDocumentType,
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_ServiceDocument'
      APJEI.ServiceDocument,
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      APJEI.ServiceDocumentItem,
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_ServiceContractType'
      APJEI.ServiceContractType,
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_ServiceContract'
      APJEI.ServiceContract,
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_ServiceContractItem'
      APJEI.ServiceContractItem,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      APJEI.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      APJEI.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      APJEI.DistributionChannel,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'OrganizationDivision'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'OrganizationDivision'
      @ObjectModel.foreignKey.association: '_Division'
      APJEI.Division,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      APJEI.OrganizationDivision,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProduct'
      APJEI.SoldMaterial,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      APJEI.SoldProduct,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProductGroup'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroup'
      APJEI.MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      APJEI.ProductGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SoldProductGroup_2'
      APJEI.SoldProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      APJEI.CustomerGroup,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      APJEI.CustomerSupplierCountry,
      APJEI.CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      APJEI.SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      APJEI.BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      APJEI.ShipToParty,

      APJEI.CustomerSupplierCorporateGroup,
      APJEI.IsStatisticalOrder,
      APJEI.IsStatisticalCostCenter,
      APJEI.IsStatisticalSalesDocument,
      APJEI.WBSIsStatisticalWBSElement,
      APJEI.WorkCenterInternalID,
      APJEI.OrderOperation,
      APJEI.OrderItem,
      APJEI.SourceReferenceDocumentType,
      APJEI.SourceLogicalSystem,
      APJEI.SourceReferenceDocumentCntxt,
      APJEI.SourceReferenceDocument,
      APJEI.SourceReferenceDocumentItem,
      APJEI.SourceReferenceDocSubitem,
      APJEI.IsCommitment,

      //////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
      /////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
      APJEI.CashLedgerCompanyCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      APJEI.CashLedgerAccount,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      APJEI.FinancialManagementArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundsCenter'
      APJEI.FundsCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundedProgram'
      APJEI.FundedProgram,
      @ObjectModel.foreignKey.association: '_Fund'
      APJEI.Fund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      APJEI.GrantID,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      APJEI.BudgetPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerFund'
      APJEI.PartnerFund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      APJEI.PartnerGrant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
      APJEI.PartnerBudgetPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      APJEI.PubSecBudgetAccount,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      APJEI.PubSecBudgetAccountCoCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
      APJEI.PubSecBudgetCnsmpnDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
      APJEI.PubSecBudgetCnsmpnFsclPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
      APJEI.PubSecBudgetCnsmpnFsclYear,
      @Analytics.internalName: #LOCAL
      APJEI.PubSecBudgetIsRelevant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
      APJEI.PubSecBudgetCnsmpnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
      APJEI.PubSecBudgetCnsmpnAmtType,
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_SponsoredProgram'
      APJEI.SponsoredProgram,
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_SponsoredClass'
      APJEI.SponsoredClass,
      @Analytics.internalName: #LOCAL
      APJEI.GteeMBudgetValidityNumber,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetProcess'
      APJEI.BudgetProcess,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetingType'
      APJEI.BudgetingType,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      APJEI.SubLedgerAcctLineItemType,
      APJEI.AssetDepreciationArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      APJEI.MasterFixedAsset,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FixedAsset'
      APJEI.FixedAsset,
      APJEI.AssetAcctTransClassfctn,
      APJEI.AssetClass,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
      ///////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      APJEI.JointVenture,
      @Analytics.internalName: #LOCAL
      APJEI.JointVentureEquityGroup,
      @Analytics.internalName: #LOCAL
      APJEI.JointVentureCostRecoveryCode,
      @Analytics.internalName: #LOCAL
      APJEI.JointVentureProductionDate,
      @Analytics.internalName: #LOCAL
      APJEI.JointVentureAccountingActivity,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOCP_SI_RE   ACDOCP: Fields for Real Estate
      ///////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      APJEI.REBusinessEntity,
      @Analytics.internalName: #LOCAL
      APJEI.RealEstateBuilding,
      @Analytics.internalName: #LOCAL
      APJEI.RealEstateProperty,
      @Analytics.internalName: #LOCAL
      APJEI.RERentalObject,
      @Analytics.internalName: #LOCAL
      APJEI.RealEstateContract,
      @Analytics.internalName: #LOCAL
      APJEI.REServiceChargeKey,
      @Analytics.internalName: #LOCAL
      APJEI.RESettlementUnitID,
      @Analytics.internalName: #LOCAL
      APJEI.SettlementReferenceDate,


      cast( APJEI._BillToParty.CustomerName as bill_to_name )                                                                                                                                                                                    as BillToPartyName,
      APJEI._Customer.CustomerName                                                                                                                                                                                                               as CustomerName,
      cast( APJEI._CustomerGroup._Text[1: Language = $session.system_language].CustomerGroupName as fis_customergroup_name )                                                                                                                     as CustomerGroupName,
      cast( APJEI._CustomerSupplierCountry._Text[1: Language = $session.system_language].CountryName as fis_customersupplier_country )                                                                                                           as CustomerSupplierCountryName,
      cast( APJEI._CustomerSupplierIndustryText[1: Language = $session.system_language].SupplierIndustryName as fis_customersupplier_industry preserving type )                                                                                  as CustomerSupplierIndustryName,
      cast( APJEI._DistributionChannel._Text[1: Language = $session.system_language].DistributionChannelName  as fis_distributionchannel_name preserving type )                                                                                  as DistributionChannelName,
      //  @API.element.releaseState: #DEPRECATED
      //  @API.element.successor:    'OrganizationDivisionName'
      //  @VDM.lifecycle.status:    #DEPRECATED
      //  @VDM.lifecycle.successor: 'OrganizationDivisionName'
      cast( APJEI._OrganizationDivision._Text[1: Language = $session.system_language].DivisionName as fis_division_name )                                                                                                                        as DivisionName,
      //  cast( _OrganizationDivision._Text[1: Language = $session.system_language].DivisionName as fis_orgdivision_name )                                                                                                                     as OrganizationDivisionName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ProductName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProductName'
      APJEI._Material._Text[1: Language = $session.system_language].MaterialName                                                                                                                                                                 as MaterialName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProductGroupName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroupName'
      APJEI._MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName                                                                                                                                                       as MaterialGroupName, //do not use any longer, use _ProductGroupName
      APJEI._Product._Text[1: Language = $session.system_language].ProductName                                                                                                                                                                   as ProductName,
      APJEI._ProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName                                                                                                                                           as ProductGroupName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'SoldProductName'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductName'
      cast( APJEI._SoldMaterial._Text[1: Language = $session.system_language].MaterialName as fis_matnr_copa_name preserving type )                                                                                                              as SoldMaterialName, //do not use any longer, use _SoldProductName
      cast( APJEI._SoldProduct._Text[1: Language = $session.system_language].ProductName as fis_matnr_copa_name preserving type )                                                                                                                as SoldProductName,
      APJEI._SoldProductGroup_2._ProductGroupText[1: Language = $session.system_language].ProductGroupName                                                                                                                                       as SoldProductGroupName,
      cast( APJEI._PartnerBusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_partner_busarea_name preserving type )                                                                                              as PartnerBusinessAreaName,
      cast( APJEI._PartnerCompany[1: Language = $session.system_language].CompanyName as fis_rcomp_name preserving type )                                                                                                                        as PartnerCompanyName,
      cast( APJEI._PartnerCompanyCode.CompanyCodeName as fis_partner_company_code_name preserving type )                                                                                                                                         as PartnerCompanyCodeName,
      cast( APJEI._PartnerCostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_partner_kostl_name preserving type )           as PartnerCostCenterName,
      cast( APJEI._PartnerCostCtrActivityType[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCtrActivityTypeName as fis_partner_activity_type_name ) as PartnerCostCtrActivityTypeName,
      cast( APJEI._PartnerFunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_partner_funcarea_name )                                                                                                         as PartnerFunctionalAreaName,
      cast( APJEI._PartnerProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName as fis_partner_prctr_name )                       as PartnerProfitCenterName,
      cast( APJEI._PartnerProjectBasicData.ProjectDescription as fis_partner_project_descript preserving type )                                                                                                                                  as PartnerProjectDescription,
      cast( APJEI._PartnerSegment._Text[1: Language = $session.system_language].SegmentName as fis_partner_segment_name preserving type )                                                                                                        as PartnerSegmentName,
      cast( APJEI._PartnerWBSElementBasicData.WBSDescription as fis_partner_wbs_descript preserving type )                                                                                                                                       as PartnerWBSElementDescription,
      APJEI._Plant.PlantName                                                                                                                                                                                                                     as PlantName,
      APJEI._SalesDistrict._Text[1: Language = $session.system_language].SalesDistrictName                                                                                                                                                       as SalesDistrictName,
      cast( APJEI._SalesOrganization._Text[1: Language = $session.system_language].SalesOrganizationName as fis_sales_organization_name preserving type )                                                                                        as SalesOrganizationName,
      cast( APJEI._ShipToParty.CustomerName as ship_to_name preserving type )                                                                                                                                                                    as ShipToPartyName,
      APJEI._WorkCenter._Text[1: Language = $session.system_language].WorkCenterText                                                                                                                                                             as WorkCenterText,


      /////////////////////////////////////////////////////////////////////////////////////
      // Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      APJEI.TransactionCurrency,
      APJEI.CompanyCodeCurrency,
      APJEI.GlobalCurrency,
      APJEI.FunctionalCurrency,
      APJEI.FreeDefinedCurrency1,
      APJEI.FreeDefinedCurrency2,
      APJEI.FreeDefinedCurrency3,
      APJEI.FreeDefinedCurrency4,
      APJEI.FreeDefinedCurrency5,
      APJEI.FreeDefinedCurrency6,
      APJEI.FreeDefinedCurrency7,
      APJEI.FreeDefinedCurrency8,
      APJEI.ControllingObjectCurrency,
      APJEI.CostSourceUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.AmountInTransactionCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.AmountInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.AmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      APJEI.AmountInFunctionalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.AmountInFreeDefinedCurrency1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      APJEI.AmountInFreeDefinedCurrency2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      APJEI.AmountInFreeDefinedCurrency3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      APJEI.AmountInFreeDefinedCurrency4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      APJEI.AmountInFreeDefinedCurrency5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      APJEI.AmountInFreeDefinedCurrency6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      APJEI.AmountInFreeDefinedCurrency7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      APJEI.AmountInFreeDefinedCurrency8,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      APJEI.AmountInObjectCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.FixedAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.FixedAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.FixedAmountInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ValuationFixedQuantity,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BaseUnit'
      APJEI.BaseUnit,
      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.Quantity,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ReferenceQuantityUnit'
      APJEI.ReferenceQuantityUnit,
      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      APJEI.ReferenceQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.ActualAmountInTransactionCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.ActualAmountInCompanyCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.ActualAmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.ActualAmountInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      APJEI.ActualAmountInFreeDfndCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      APJEI.ActualAmountInFreeDfndCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      APJEI.ActualAmountInFreeDfndCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      APJEI.ActualAmountInFreeDfndCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      APJEI.ActualAmountInFreeDfndCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      APJEI.ActualAmountInFreeDfndCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      APJEI.ActualAmountInFreeDfndCrcy8,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      APJEI.ActualAmountInObjectCurrency,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ActualValuationQuantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      APJEI.ActualReferenceQuantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.ActualQuantityInBaseUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.PlanAmountInTransactionCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.PlanAmountInCompanyCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.PlanAmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.PlanAmountInFreeDefinedCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      APJEI.PlanAmountInFreeDefinedCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      APJEI.PlanAmountInFreeDefinedCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      APJEI.PlanAmountInFreeDefinedCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      APJEI.PlanAmountInFreeDefinedCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      APJEI.PlanAmountInFreeDefinedCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      APJEI.PlanAmountInFreeDefinedCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      APJEI.PlanAmountInFreeDefinedCrcy8,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      APJEI.PlanAmountInObjectCurrency,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.PlanValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.PlanPriceInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.PlanPriceInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.PlanPriceInTransactionCurrency,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      APJEI.PlanReferenceQuantity,

      /////////////////////////////////////////////////////////////////////////////////////
      // Actual Plan Difference Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.ActlPlnDiffAmtInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.ActlPlnDiffAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.ActlPlnDiffAmtInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy8,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      APJEI.ActlPlnDiffAmtInObjectCrcy,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ActlPanDiffValuationQuantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      APJEI.ActlPlanDiffReferenceQuantity,

      APJEI._CalendarDate.CalendarYear                                                                                                                                                                                                           as CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      APJEI._CalendarDate.CalendarQuarter                                                                                                                                                                                                        as CalendarQuarter,
      APJEI._CalendarDate.YearQuarter                                                                                                                                                                                                            as YearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      APJEI._CalendarDate.CalendarMonth                                                                                                                                                                                                          as CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      APJEI._CalendarDate.YearMonth                                                                                                                                                                                                              as YearMonth,
      APJEI._CalendarDate.CalendarWeek                                                                                                                                                                                                           as CalendarWeek,
      APJEI._CalendarDate.YearWeek                                                                                                                                                                                                               as YearWeek,
      APJEI._FiscalCalendarDate.FiscalQuarter                                                                                                                                                                                                    as FiscalQuarter,
      APJEI._FiscalCalendarDate.FiscalWeek                                                                                                                                                                                                       as FiscalWeek,
      APJEI._FiscalCalendarDate.FiscalYearQuarter                                                                                                                                                                                                as FiscalYearQuarter,
      APJEI._FiscalCalendarDate.FiscalYearWeek                                                                                                                                                                                                   as FiscalYearWeek,

      APJEI._JournalEntry,
      APJEI._SourceLedger,
      APJEI._ControllingArea,
      APJEI._Ledger,
      APJEI._CompanyCode,
      APJEI._GLAccountInCompanyCode,
      APJEI._GLAccountInChartOfAccounts,
      APJEI._ChartOfAccounts,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_LedgerFiscalYearForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
      APJEI._LedgerFiscalYear,
      APJEI._LedgerFiscalYearForVariant,
      APJEI._FiscalYear,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_FiscalPeriodForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      APJEI._FiscalPeriod,
      APJEI._FiscalPeriodForVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_FiscalYearPeriodForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalYearPeriodForVariant'
      APJEI._FiscalYearPeriod,
      APJEI._FiscalYearPeriodForVariant,
      APJEI._CalendarDate,
      APJEI._FiscalCalendarDate,
      APJEI._BusinessArea,
      APJEI._ProfitCenter,
      APJEI._CurrentProfitCenter,
      APJEI._CostCenter,
      APJEI._CurrentCostCenter,
      APJEI._AccountAssignmentType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectExternalID'
      APJEI._Project,
      APJEI._ProjectBasicData,
      APJEI._ProjectExternalID,
      APJEI._PartnerProjectBasicData,
      APJEI._PartnerProjectExternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_WBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementExternalID'
      APJEI._WBSElement,
      APJEI._WBSElementBasicData,
      APJEI._WBSElementExternalID,
      APJEI._PartnerWBSElementBasicData,
      APJEI._PartnerWBSElementExternalID,
      APJEI._FunctionalArea,
      APJEI._Segment,
      APJEI._CostCtrActivityType,
      APJEI._CostAnalysisResource,
      APJEI._InternalOrder,
      APJEI._Order,
      APJEI._WorkPackageWorkItem,
      APJEI._WorkPackage,
      APJEI._PartnerCompanyCode,
      APJEI._PartnerBusinessArea,
      APJEI._PartnerProfitCenter,
      APJEI._PartnerCostCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjectExternalID'
      APJEI._PartnerProject,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerWBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerWBSElementExternalID'
      APJEI._PartnerWBSElement,
      APJEI._PartnerFunctionalArea,
      APJEI._PartnerSegment,
      APJEI._PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerOrder_2'
      APJEI._PartnerOrder,
      APJEI._PartnerOrder_2,
      APJEI._PartnerCompany,
      APJEI._OriginProfitCenter,
      APJEI._OriginCostCenter,
      APJEI._OriginCostCtrActivityType,
      APJEI._FiscalYearVariant,
      APJEI._ControllingDebitCreditCode,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PersonWorkAgreement_1'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PersonWorkAgreement_1'
      APJEI._Employment,
      APJEI._PersonWorkAgreement_1,
      APJEI._BusinessTransactionCategory,
      APJEI._BusinessTransactionType,
      APJEI._FinancialTransactionType,
      APJEI._AccountingDocumentType,
      APJEI._FinancialAccountType,
      APJEI._Plant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_Product'
      APJEI._Material,
      APJEI._Product,
      APJEI._Customer,
      APJEI._CustomerCompany,
      APJEI._Supplier,
      APJEI._SupplierCompany,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocument'
      APJEI._SalesOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocumentItem'
      APJEI._SalesOrderItem,
      APJEI._SalesDocument,
      APJEI._SalesDocumentItem,
      APJEI._ServiceDocumentType,
      APJEI._ServiceDocument,
      APJEI._ServiceDocumentItem,
      APJEI._ServiceContract,
      APJEI._ServiceContractItem,
      APJEI._ServiceContractType,
      APJEI._BillingDocumentType,
      APJEI._SalesOrganization,
      APJEI._DistributionChannel,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_OrganizationDivision'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_OrganizationDivision'
      APJEI._Division,
      APJEI._OrganizationDivision,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProduct'
      APJEI._SoldMaterial,
      APJEI._SoldProduct,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProductGroup_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      APJEI._MaterialGroup,
      //@API.element.releaseState: #DEPRECATED
      //@API.element.successor:    '_ProductGroup_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProductGroup_2'
      APJEI._ProductGroup,
      APJEI._ProductGroup_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProductGroup_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      APJEI._SoldProductGroup,
      APJEI._SoldProductGroup_2,
      APJEI._CustomerGroup,
      APJEI._TransactionCurrency,
      APJEI._CompanyCodeCurrency,
      APJEI._GlobalCurrency,
      APJEI._FunctionalCurrency,
      APJEI._FreeDefinedCurrency1,
      APJEI._FreeDefinedCurrency2,
      APJEI._FreeDefinedCurrency3,
      APJEI._FreeDefinedCurrency4,
      APJEI._FreeDefinedCurrency5,
      APJEI._FreeDefinedCurrency6,
      APJEI._FreeDefinedCurrency7,
      APJEI._FreeDefinedCurrency8,
      APJEI._ControllingObjectCurrency,
      APJEI._BaseUnit,
      APJEI._CostSourceUnit,
      APJEI._ReferenceQuantityUnit,
      APJEI._CustomerSupplierCountry,
      APJEI._CustomerSupplierIndustryText,
      APJEI._SalesDistrict,
      APJEI._BillToParty,
      APJEI._ShipToParty,
      APJEI._WorkCenter,
      APJEI._PlanningCategory,
      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,
      APJEI._BillableControl,
      APJEI._FinancialManagementArea,
      APJEI._Fund,
      APJEI._Grant,
      APJEI._BudgetPeriod,

      APJEI._CashLedgerCompanyCode,
      APJEI._CashLedgerAccount,
      APJEI._FundsCenter,
      APJEI._FundedProgram,
      APJEI._PartnerFund,
      APJEI._PartnerGrant,
      APJEI._PartnerBudgetPeriod,
      APJEI._PubSecBudgetAccountCoCode,
      APJEI._PubSecBudgetAccount,
      APJEI._PubSecBudgetCnsmpnDate,
      APJEI._PubSecBudgetCnsmpnFsclPeriod,
      APJEI._PubSecBudgetCnsmpnFsclYear,
      APJEI._PubSecBudgetCnsmpnType,
      APJEI._PubSecBudgetCnsmpnAmtType,

      APJEI._BudgetProcess,
      APJEI._BudgetingType,

      APJEI._MasterFixedAsset,
      APJEI._FixedAsset,
      APJEI._SubLedgerAccLineItemType,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      APJEI.GLAccountAuthorizationGroup,
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      APJEI.SupplierBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      APJEI.CustomerBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      APJEI.AcctgDocTypeAuthorizationGroup,
      APJEI.ValuationArea,
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      APJEI.OrderType,
      @API.element.releaseState: #DEPRECATED
      //@API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor: ''
      APJEI.SalesOrderType


}
```
