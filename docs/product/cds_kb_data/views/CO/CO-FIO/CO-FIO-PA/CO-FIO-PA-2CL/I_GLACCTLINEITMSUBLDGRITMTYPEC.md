---
name: I_GLACCTLINEITMSUBLDGRITMTYPEC
description: "This CDS view provides a comprehensive analytical cube for General Ledger (G/L) account line items, specifically focusing on sub-ledger item types. It aggregates financial data across various dimensions such as company code, fiscal year, profit center, and more, allowing for detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What are the G/L account line items based on specific sub-ledger item types? How do financial figures vary across different currencies, such as global currency and company code currency? What are the financial impacts of specific sub-ledger account line item types, such as input price variance or lot size variance? How do financial transactions distribute across different organizational dimensions like profit centers, sales organizations, and segments? What is the financial performance over different fiscal periods and years? How do sales orders and documents relate to financial postings in the G/L accounts? What are the financial implications of specific business transactions and account assignments? How do financial figures align with specific projects, orders, and contracts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTLINEITMSUBLDGRITMTYPEC')/$value
semantic_en: "This CDS view provides a comprehensive analytical cube for General Ledger (G/L) account line items, specifically focusing on sub-ledger item types. It aggregates financial data across various dimensions such as company code, fiscal year, profit center, and more, allowing for detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What are the G/L account line items based on specific sub-ledger item types? How do financial figures vary across different currencies, such as global currency and company code currency? What are the financial impacts of specific sub-ledger account line item types, such as input price variance or lot size variance? How do financial transactions distribute across different organizational dimensions like profit centers, sales organizations, and segments? What is the financial performance over different fiscal periods and years? How do sales orders and documents relate to financial postings in the G/L accounts? What are the financial implications of specific business transactions and account assignments? How do financial figures align with specific projects, orders, and contracts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "GL Account Line Item Calculated Based on SubLedger Item Type"
  - "GL Account Line Item Calculated Based on SubLedger Item Type"
  - "GL Account Line Item Calculated Based on SubLedger Item Type"
tags:
  - CO
  - account
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - contract
  - document
  - interface-view
  - lob:controlling
  - lob:finance
  - order
  - project
  - sales-order
  - transaction
  - metadata-only
---
# I_GLACCTLINEITMSUBLDGRITMTYPEC

**This CDS view provides a comprehensive analytical cube for General Ledger (G/L) account line items, specifically focusing on sub-ledger item types. It aggregates financial data across various dimensions such as company code, fiscal year, profit center, and more, allowing for detailed financial analysis and reporting. This CDS view provides the data to answer the following business questions: What are the G/L account line items based on specific sub-ledger item types? How do financial figures vary across different currencies, such as global currency and company code currency? What are the financial impacts of specific sub-ledger account line item types, such as input price variance or lot size variance? How do financial transactions distribute across different organizational dimensions like profit centers, sales organizations, and segments? What is the financial performance over different fiscal periods and years? How do sales orders and documents relate to financial postings in the G/L accounts? What are the financial implications of specific business transactions and account assignments? How do financial figures align with specific projects, orders, and contracts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTLINEITMSUBLDGRITMTYPEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Company Currency |
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `InptPriceVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Input Price Variance Amount in Global Currency |
| `InptQtyVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Global Currency |
| `RsceUsgeVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Global Currency |
| `LotSizeVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Global Currency |
| `InputRmngVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Global Currency |
| `OutpPriceVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Global Currency |
| `InptPriceVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Input Price Variance Amount in Company Code Currency |
| `InptQtyVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Company Code Currency |
| `RsceUsgeVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Company Code Currency |
| `LotSizeVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Company Code Currency |
| `InputRmngVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Company Code Currency |
| `OutpPrVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Company Code Currency |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
