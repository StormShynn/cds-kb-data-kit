---
name: I_JOURNALENTRYITEMBASIC
description: "This CDS view is designed to provide a comprehensive and detailed representation of journal entry items in a financial system. It aggregates and associates various financial and controlling data elements, such as ledger, company code, cost center, profit center, and more, to facilitate analytical and reporting capabilities. The view is structured to support analytical processing and is intended to be used as a data source for reporting and analysis in financial contexts.. This CDS view provides the data to answer the following business questions: What are the details of journal entries for a specific fiscal year and period? How can I analyze financial transactions by ledger, company code, or controlling area? What are the amounts in different currencies (transaction, company code, global) for journal entries? How can I view journal entries by cost center, profit center, or business area? What are the associated projects, WBS elements, and internal orders for specific journal entries? How can I analyze journal entries by customer, sales organization, or distribution channel? What are the partner-related financial details, such as partner company code or partner cost center, for journal entries? How can I access text descriptions for various financial dimensions like GL accounts, cost centers, and profit centers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBASIC')/$value
semantic_en: "This CDS view is designed to provide a comprehensive and detailed representation of journal entry items in a financial system. It aggregates and associates various financial and controlling data elements, such as ledger, company code, cost center, profit center, and more, to facilitate analytical and reporting capabilities. The view is structured to support analytical processing and is intended to be used as a data source for reporting and analysis in financial contexts.. This CDS view provides the data to answer the following business questions: What are the details of journal entries for a specific fiscal year and period? How can I analyze financial transactions by ledger, company code, or controlling area? What are the amounts in different currencies (transaction, company code, global) for journal entries? How can I view journal entries by cost center, profit center, or business area? What are the associated projects, WBS elements, and internal orders for specific journal entries? How can I analyze journal entries by customer, sales organization, or distribution channel? What are the partner-related financial details, such as partner company code or partner cost center, for journal entries? How can I access text descriptions for various financial dimensions like GL accounts, cost centers, and profit centers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - customer
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - order
  - project
  - transaction
  - metadata-only
---
# I_JOURNALENTRYITEMBASIC

**This CDS view is designed to provide a comprehensive and detailed representation of journal entry items in a financial system. It aggregates and associates various financial and controlling data elements, such as ledger, company code, cost center, profit center, and more, to facilitate analytical and reporting capabilities. The view is structured to support analytical processing and is intended to be used as a data source for reporting and analysis in financial contexts.. This CDS view provides the data to answer the following business questions: What are the details of journal entries for a specific fiscal year and period? How can I analyze financial transactions by ledger, company code, or controlling area? What are the amounts in different currencies (transaction, company code, global) for journal entries? How can I view journal entries by cost center, profit center, or business area? What are the associated projects, WBS elements, and internal orders for specific journal entries? How can I analyze journal entries by customer, sales organization, or distribution channel? What are the partner-related financial details, such as partner company code or partner cost center, for journal entries? How can I access text descriptions for various financial dimensions like GL accounts, cost centers, and profit centers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerName` |  | |  |  | `CHAR(30)` | Ledger Name |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  |  | `CHAR(30)` | G/L Account Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Company Code Name |
| `CompanyCodePartnerCompany` |  | |  |  | `CHAR(6)` | Company |
| `CompanyCodeCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  |  | `CHAR(30)` | Functional Area Name |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessAreaName` |  | |  |  | `CHAR(30)` | Business Area Name |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerCostCenterName` |  | |  |  | `CHAR(20)` | Partner Cost Center Name |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProfitCenterName` |  | |  |  | `CHAR(50)` | Partner Profit Center Name |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFunctionalAreaName` |  | |  |  | `CHAR(30)` | Partner Functional Area Name |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessAreaName` |  | |  |  | `CHAR(30)` | Partner Business Area Name |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerCompanyName` |  | |  |  | `CHAR(30)` | Company Name |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerSegmentName` |  | |  |  | `CHAR(50)` | Partner Segment Name |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Name |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerCompanyCodeName` |  | |  |  | `CHAR(25)` | Partner Company Code Name |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostCtrActivityTypeName` |  | |  |  | `CHAR(60)` | Activity Type Name |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCtrActivityTypeName` |  | |  |  | `CHAR(60)` | Partner Activity Type Name |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectDescription` |  | |  |  | `CHAR(40)` | Partner Project Description (1st text line) |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementDescription` |  | |  |  | `CHAR(40)` | Partner WBS Element Description |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOrganizationName` |  | |  |  | `CHAR(20)` | Sales Organization Name |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `DistributionChannelName` |  | |  |  | `CHAR(20)` | Distribution Channel Name |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `DivisionName` |  | |  |  | `CHAR(30)` | Name of Division |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldMaterialName` |  | |  |  | `CHAR(40)` | Sold Material Name |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `MaterialGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerGroupName` |  | |  |  | `CHAR(30)` | Name of Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `CustomerSupplierIndustryName` |  | |  |  | `CHAR(20)` | Description of the Industry Key |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesDistrictName` |  | |  |  | `CHAR(20)` | Name of the District |
