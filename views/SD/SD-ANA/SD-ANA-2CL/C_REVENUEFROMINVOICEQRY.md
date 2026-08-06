---
name: C_REVENUEFROMINVOICEQRY
description: This CDS view provides the sales volumes (the total invoiced sales achieved during a specified period) by various dimensions, such as sales organization, product, fiscal year, sold-to party, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of billing items for my sales organizations? How is the sales volume this year compared with the same period last year? How much sales volume has been canceled? What are the total net values of credit memos in this month? What is the profit margin for this year?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REVENUEFROMINVOICEQRY')/$value
semantic_en: This CDS view provides the sales volumes (the total invoiced sales achieved during a specified period) by various dimensions, such as sales organization, product, fiscal year, sold-to party, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of billing items for my sales organizations? How is the sales volume this year compared with the same period last year? How much sales volume has been canceled? What are the total net values of credit memos in this month? What is the profit margin for this year?
keywords:
  - Analytics - Sales Volume Flexible Analysis
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-ANA-2CL
  - consumption-view
  - invoice
  - lob:sales & distribution
  - product
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_REVENUEFROMINVOICEQRY

**This CDS view provides the sales volumes (the total invoiced sales achieved during a specified period) by various dimensions, such as sales organization, product, fiscal year, sold-to party, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of billing items for my sales organizations? How is the sales volume this year compared with the same period last year? How much sales volume has been canceled? What are the total net values of credit memos in this month? What is the profit margin for this year?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REVENUEFROMINVOICEQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BillingDocument` | `CHAR(10)` | Billing Document |
| `BillingDocumentItem` | `NUMC(6)` | Billing Document Item |
| `SDDocumentCategory` | `CHAR(4)` | SD Document Category |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `BillingDocumentCategory` | `CHAR(1)` | Billing Category |
| `SalesDocumentItemCategory` | `CHAR(4)` | Sales Document Item Category |
| `SalesDocumentItemType` | `CHAR(1)` | Sales Document Item Type |
| `ReturnItemProcessingType` | `CHAR(1)` | Processing Type of Return Item |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `NetAmountInDisplayCurrency` | `CURR(19)` | Net Value in Display Currency |
| `SlsVolumeNetAmtInDspCrcy` | `CURR(19)` | Net Value of Invoiced Sales |
| `SalesVolumeQuantity` | `QUAN(15)` | Sales Volume Quantity |
| `CancldSlsVolumeNetAmtInDspCrcy` | `CURR(19)` | Canceled Sales Volume Net Amount In Display Currency |
| `SlsProfitMargNetAmtInDspCrcy` | `CURR(19)` | Profit Margin Amount in Display Currency |
| `CustCrdtMemoNetAmtInDspCrcy` | `CURR(19)` | Net Value of Credit Memos |
| `CustCrdtMemoPrftMargNetAmtInDC` | `CURR(19)` | Credit Memo Profit Margin Net Value in Display Currency |
| `NetSlsVolumeNetAmtInDC` | `CURR(19)` | Net Sales Volume in Display Currency |
| `NetSlsProfitMargNetAmtInDC` | `CURR(19)` | Net Profit Margin Net Value in Display Currency |
| `NetSalesCostAmountInDC` | `CURR(19)` | Net Sales Cost Amount in Display Currency |
| `CustCreditMemoQuantity` | `QUAN(15)` | Quantity of Credit Memos |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Time at Which Record Was Created |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `CreationDateYear` | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` | `NUMC(6)` | Year/Month of Creation |
| `BillingDocumentDateYear` | `NUMC(4)` | Year of Billing |
| `BillingDocDateYearQuarter` | `NUMC(5)` | Quarter/Year of Billing |
| `BillingDocDateYearMonth` | `NUMC(6)` | Month/Year of Billing |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `Division` | `CHAR(2)` | Division |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `PayerParty` | `CHAR(10)` | Payer |
| `SalesEmployee` | `NUMC(8)` | Sales Employee |
| `ResponsibleEmployee` | `NUMC(8)` | Employee Responsible |
| `PurchaseOrderByCustomer` | `CHAR(35)` | Customer Reference |
| `CustomerRebateAgreement` | `CHAR(10)` | Customer Rebate Agreement |
| `AdditionalCustomerGroup1` | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` | `CHAR(3)` | Customer Group 5 |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `Country` | `CHAR(3)` | Destination Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CreditControlArea` | `CHAR(4)` | Credit Control Area |
| `SDDocumentReason` | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `RetailPromotion` | `CHAR(10)` | Retail Promotion |
| `ItemIsRelevantForCredit` | `CHAR(1)` | Item Relevant for Credit Check |
| `SalesDeal` | `CHAR(10)` | Sales Deal |
| `SalesPromotion` | `CHAR(10)` | Sales Promotion |
| `Material` | `CHAR(40)` | Material Number |
| `Product` | `CHAR(40)` | Product |
| `Batch` | `CHAR(10)` | Batch Number |
| `ProductHierarchyNode` | `CHAR(18)` | Product Hierarchy |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `MaterialCommissionGroup` | `CHAR(2)` | Commission Group |
| `AdditionalMaterialGroup1` | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` | `CHAR(3)` | Material Group 5 |
| `Plant` | `CHAR(4)` | Plant |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `BillingDocumentItemText` | `CHAR(40)` | Short Text for Billing Document Item |
| `BillingDocumentDate` | `DATS(8)` | Billing Date |
| `CancelledBillingDocument` | `CHAR(10)` | Canceled Billing Document |
| `BillingDocumentIsCancelled` | `CHAR(1)` | Billing Document Is Canceled |
| `BillingQuantityUnit` | `UNIT(3)` | Sales Unit |
| `BillingPlan` | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `BillingPlanItem` | `NUMC(6)` | Item for Billing Plan/Invoice Plan/Payment Cards |
| `MainItemPricingRefMaterial` | `CHAR(40)` | Pricing Reference Product of Main Item |
| `AccountingDocument` | `CHAR(10)` | Journal Entry Number |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Posting Period |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CustomerAccountAssignmentGroup` | `CHAR(2)` | Account Assignment Group for Customer |
| `AccountingExchangeRateIsSet` | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `DocumentReferenceID` | `CHAR(16)` | Document Reference ID |
| `AssignmentReference` | `CHAR(18)` | Assignment Number |
| `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `PaymentMethod` | `CHAR(1)` | Payment Method |
| `CustomerProject` | `CHAR(40)` | Commercial Project ID |
| `DunningArea` | `CHAR(2)` | Dunning Area |
| `DunningKey` | `CHAR(1)` | Dunning Key |
| `DunningBlockingReason` | `CHAR(1)` | Dunning Block |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `WBSElement` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) - Deprecated |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProfitabilitySegment` | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` | `CHAR(10)` | Profitability Segment |
| `OrderID` | `CHAR(12)` | Order Number |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `PriceListType` | `CHAR(2)` | Price List Type |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerPriceGroup` | `CHAR(2)` | Customer Price Group |
| `PricingReferenceMaterial` | `CHAR(40)` | Pricing Reference Material |
| `VolumeRebateGroup` | `CHAR(2)` | Volume rebate group |
| `CustomerPaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `IncotermsVersion` | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` | `CHAR(70)` | Incoterms Location 2 |
| `SDPricingProcedure` | `CHAR(6)` | Pricing Procedure in Pricing |
| `PricingDate` | `DATS(8)` | Date for Pricing and Exchange Rate |
| `TaxDepartureCountry` | `CHAR(3)` | Tax Departure Country/Region |
| `VATRegistration` | `CHAR(20)` | VAT Registration Number |
| `VATRegistrationCountry` | `CHAR(3)` | Country/Region of VAT Registration Number (VAT ID) |
| `VATRegistrationOrigin` | `CHAR(1)` | Origin of VAT Registration Number (VAT ID) |
| `CustomerTaxClassification1` | `CHAR(1)` | Tax Classification 1 for Customer |
| `CustomerTaxClassification2` | `CHAR(1)` | Tax Classification 2 for Customer |
| `CustomerTaxClassification3` | `CHAR(1)` | Tax Classification 3 for Customer |
| `CustomerTaxClassification4` | `CHAR(1)` | Tax Classification 4 for Customer |
| `CustomerTaxClassification5` | `CHAR(1)` | Tax Classification 5 for Customer |
| `CustomerTaxClassification6` | `CHAR(1)` | Tax Classification 6 for Customer |
| `CustomerTaxClassification7` | `CHAR(1)` | Tax Classification 7 for Customer |
| `CustomerTaxClassification8` | `CHAR(1)` | Tax Classification 8 for Customer |
| `CustomerTaxClassification9` | `CHAR(1)` | Tax Classification 9 for Customer |
| `ShippingCondition` | `CHAR(2)` | Shipping Conditions |
| `ShippingPoint` | `CHAR(4)` | Shipping Point / Receiving Point |
| `ReferenceSDDocument` | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` | `CHAR(4)` | SD Document Category of Reference SD Document |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `SalesSDDocumentCategory` | `CHAR(4)` | Sales SD Document Category |
| `HigherLevelItem` | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `PropagatePrftbltySgmt2BOM` | `CHAR(1)` | Propagate Profitability Segment to BOM (Sales Kit) Sub-Items |
| `CostDeterminationIsRequired` | `CHAR(1)` | Determine cost |
| `OverallSDProcessStatus` | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallBillingStatus` | `CHAR(1)` | Overall Billing Status |
| `AccountingPostingStatus` | `CHAR(1)` | Posting Status of Billing Document |
| `AccountingTransferStatus` | `CHAR(1)` | Status for Transfer to Accounting |
| `BillingIssueType` | `CHAR(1)` | Billing Document Issue Type |
| `InvoiceListStatus` | `CHAR(1)` | Invoice list status of billing document |
| `OvrlItmGeneralIncompletionSts` | `CHAR(1)` | Incompletion Status (All Items) |
| `OverallPricingIncompletionSts` | `CHAR(1)` | Pricing Incompletion Status (All Items) |
