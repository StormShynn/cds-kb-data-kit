---
name: C_REVENUEFROMINVOICEQRY
description: "This CDS view provides the sales volumes (the total invoiced sales achieved during a specified period) by various dimensions, such as sales organization, product, fiscal year, sold-to party, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of billing items for my sales organizations? How is the sales volume this year compared with the same period last year? How much sales volume has been canceled? What are the total net values of credit memos in this month? What is the profit margin for this year?"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REVENUEFROMINVOICEQRY')/$value
semantic_en: "This CDS view provides the sales volumes (the total invoiced sales achieved during a specified period) by various dimensions, such as sales organization, product, fiscal year, sold-to party, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of billing items for my sales organizations? How is the sales volume this year compared with the same period last year? How much sales volume has been canceled? What are the total net values of credit memos in this month? What is the profit margin for this year?"
semantic_vi: "Sales Volume Flexible Analysis - Query — CDS view tiêu dùng dựa trên I_BillingDocumentItemCube."
keywords:
  - "Analytics - Sales Volume Flexible Analysis"
  - "sales"
  - "volume"
  - "flexible"
  - "analysis"
  - "query"
  - "billing"
  - "document"
  - "item"
  - "category"
  - "type"
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
---
# C_REVENUEFROMINVOICEQRY

**This CDS view provides the sales volumes (the total invoiced sales achieved during a specified period) by various dimensions, such as sales organization, product, fiscal year, sold-to party, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of billing items for my sales organizations? How is the sales volume this year compared with the same period last year? How much sales volume has been canceled? What are the total net values of credit memos in this month? What is the profit margin for this year?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REVENUEFROMINVOICEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  | `CHAR(10)` | Billing Document |
| `BillingDocumentItem` | ✓ | |  |  | `NUMC(6)` | Billing Document Item |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `BillingDocumentCategory` |  | |  |  | `CHAR(1)` | Billing Category |
| `SalesDocumentItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `SalesDocumentItemType` |  | |  |  | `CHAR(1)` | Sales Document Item Type |
| `ReturnItemProcessingType` |  | |  |  | `CHAR(1)` | Processing Type of Return Item |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `NetAmountInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `SlsVolumeNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Net Value of Invoiced Sales |
| `SalesVolumeQuantity` |  | |  |  | `QUAN(15)` | Sales Volume Quantity |
| `CancldSlsVolumeNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Canceled Sales Volume Net Amount In Display Currency |
| `SlsProfitMargNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Profit Margin Amount in Display Currency |
| `CustCrdtMemoNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Net Value of Credit Memos |
| `CustCrdtMemoPrftMargNetAmtInDC` |  | |  |  | `CURR(19)` | Credit Memo Profit Margin Net Value in Display Currency |
| `NetSlsVolumeNetAmtInDC` |  | |  | `cast (1 as net_sls_vol_net_amt_idc)` | `CURR(19)` | Net Sales Volume in Display Currency |
| `NetSlsProfitMargNetAmtInDC` |  | |  | `cast (1 as net_prf_marg_net_amt_idc)` | `CURR(19)` | Net Profit Margin Net Value in Display Currency |
| `NetSalesCostAmountInDC` |  | |  | `cast (1 as netsalescostamountindc)` | `CURR(19)` | Net Sales Cost Amount in Display Currency |
| `CustCreditMemoQuantity` |  | |  |  | `QUAN(15)` | Quantity of Credit Memos |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `BillingDocumentDateYear` |  | |  |  | `NUMC(4)` | Year of Billing |
| `BillingDocDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter/Year of Billing |
| `BillingDocDateYearMonth` |  | |  |  | `NUMC(6)` | Month/Year of Billing |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `ResponsibleEmployee` |  | |  |  | `NUMC(8)` | Employee Responsible |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerRebateAgreement` |  | |  |  | `CHAR(10)` | Customer Rebate Agreement |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Country` |  | |  |  | `CHAR(3)` | Destination Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `RetailPromotion` |  | |  |  | `CHAR(10)` | Retail Promotion |
| `ItemIsRelevantForCredit` |  | |  |  | `CHAR(1)` | Item Relevant for Credit Check |
| `SalesDeal` |  | |  |  | `CHAR(10)` | Sales Deal |
| `SalesPromotion` |  | |  |  | `CHAR(10)` | Sales Promotion |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `ProductHierarchyNode` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `MaterialCommissionGroup` |  | |  |  | `CHAR(2)` | Commission Group |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `BillingDocumentItemText` |  | |  |  | `CHAR(40)` | Short Text for Billing Document Item |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Billing Date |
| `CancelledBillingDocument` |  | |  |  | `CHAR(10)` | Canceled Billing Document |
| `BillingDocumentIsCancelled` |  | |  |  | `CHAR(1)` | Billing Document Is Canceled |
| `BillingQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `BillingPlanItem` |  | |  |  | `NUMC(6)` | Item for Billing Plan/Invoice Plan/Payment Cards |
| `MainItemPricingRefMaterial` |  | |  |  | `CHAR(40)` | Pricing Reference Product of Main Item |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry Number |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CustomerAccountAssignmentGroup` |  | |  |  | `CHAR(2)` | Account Assignment Group for Customer |
| `AccountingExchangeRateIsSet` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Document Reference ID |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CustomerProject` |  | |  |  | `CHAR(40)` | Commercial Project ID |
| `DunningArea` |  | |  |  | `CHAR(2)` | Dunning Area |
| `DunningKey` |  | |  |  | `CHAR(1)` | Dunning Key |
| `DunningBlockingReason` |  | |  |  | `CHAR(1)` | Dunning Block |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElement` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) - Deprecated |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProfitabilitySegment` |  | |  |  | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `PriceListType` |  | |  |  | `CHAR(2)` | Price List Type |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerPriceGroup` |  | |  |  | `CHAR(2)` | Customer Price Group |
| `PricingReferenceMaterial` |  | |  |  | `CHAR(40)` | Pricing Reference Material |
| `VolumeRebateGroup` |  | |  |  | `CHAR(2)` | Volume rebate group |
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `SDPricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure in Pricing |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `VATRegistrationCountry` |  | |  |  | `CHAR(3)` | Country/Region of VAT Registration Number (VAT ID) |
| `VATRegistrationOrigin` |  | |  |  | `CHAR(1)` | Origin of VAT Registration Number (VAT ID) |
| `CustomerTaxClassification1` |  | |  |  | `CHAR(1)` | Tax Classification 1 for Customer |
| `CustomerTaxClassification2` |  | |  |  | `CHAR(1)` | Tax Classification 2 for Customer |
| `CustomerTaxClassification3` |  | |  |  | `CHAR(1)` | Tax Classification 3 for Customer |
| `CustomerTaxClassification4` |  | |  |  | `CHAR(1)` | Tax Classification 4 for Customer |
| `CustomerTaxClassification5` |  | |  |  | `CHAR(1)` | Tax Classification 5 for Customer |
| `CustomerTaxClassification6` |  | |  |  | `CHAR(1)` | Tax Classification 6 for Customer |
| `CustomerTaxClassification7` |  | |  |  | `CHAR(1)` | Tax Classification 7 for Customer |
| `CustomerTaxClassification8` |  | |  |  | `CHAR(1)` | Tax Classification 8 for Customer |
| `CustomerTaxClassification9` |  | |  |  | `CHAR(1)` | Tax Classification 9 for Customer |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category of Reference SD Document |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesSDDocumentCategory` |  | |  |  | `CHAR(4)` | Sales SD Document Category |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `PropagatePrftbltySgmt2BOM` |  | |  |  | `CHAR(1)` | Propagate Profitability Segment to BOM (Sales Kit) Sub-Items |
| `CostDeterminationIsRequired` |  | |  |  | `CHAR(1)` | Determine cost |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallBillingStatus` |  | |  |  | `CHAR(1)` | Overall Billing Status |
| `AccountingPostingStatus` |  | |  |  | `CHAR(1)` | Posting Status of Billing Document |
| `AccountingTransferStatus` |  | |  |  | `CHAR(1)` | Status for Transfer to Accounting |
| `BillingIssueType` |  | |  |  | `CHAR(1)` | Billing Document Issue Type |
| `InvoiceListStatus` |  | |  |  | `CHAR(1)` | Invoice list status of billing document |
| `OvrlItmGeneralIncompletionSts` |  | |  |  | `CHAR(1)` | Incompletion Status (All Items) |
| `OverallPricingIncompletionSts` |  | |  |  | `CHAR(1)` | Pricing Incompletion Status (All Items) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REVENUEFROMINVOICEQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REVENUEFROMINVOICEQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Volume Flexible Analysis - Query'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.preserveKey:true
@AbapCatalog: {
   sqlViewName: 'CSDREVNFRMINVCQ',
   compiler.compareFilter: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XL
   }
}
@Analytics.query: true
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@OData.publish: true

define view C_RevenueFromInvoiceQry
  with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from I_BillingDocumentItemCube(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency)
{
      //Key
  key BillingDocument,
  key BillingDocumentItem,

      //Category
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentCategory,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillingDocumentType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillingDocumentCategory,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDocumentItemCategory,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDocumentItemType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ReturnItemProcessingType,

      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency) as DisplayCurrency,
      @Semantics.unitOfMeasure: true
      BaseUnit,

      //KPI:Sales Volume
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetAmountInDisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SlsVolumeNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesVolumeQuantity,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CancldSlsVolumeNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SlsProfitMargNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustCrdtMemoNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustCrdtMemoPrftMargNetAmtInDC,

      @EndUserText.label: 'Net Sales Volume'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: '$projection.SlsVolumeNetAmtInDspCrcy - $projection.CustCrdtMemoNetAmtInDspCrcy'
      cast (1 as net_sls_vol_net_amt_idc)                as NetSlsVolumeNetAmtInDC,

      @EndUserText.label: 'Net Profit Margin'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: '$projection.SlsProfitMargNetAmtInDspCrcy - $projection.CustCrdtMemoPrftMargNetAmtInDC'
      cast (1 as net_prf_marg_net_amt_idc)               as NetSlsProfitMargNetAmtInDC,

      @EndUserText.label: 'Net Sales Cost'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: '$projection.NetSlsVolumeNetAmtInDC - $projection.NetSlsProfitMargNetAmtInDC'
      cast (1 as netsalescostamountindc)                 as NetSalesCostAmountInDC,

      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CustCreditMemoQuantity,

      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.calendar.year
      CreationDateYear,
      @Semantics.calendar.yearQuarter
      CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      CreationDateYearMonth,
      @Semantics.calendar.year
      BillingDocumentDateYear,
      @Semantics.calendar.yearQuarter
      BillingDocDateYearQuarter,
      @AnalyticsDetails.query.axis: #COLUMNS
      @Semantics.calendar.yearMonth
      BillingDocDateYearMonth,

      //Organization
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true}
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true}
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true}
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true}
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PartnerCompany,

      //Partner
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true}
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShipToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PayerParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesEmployee,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ResponsibleEmployee,


      //Sales
      PurchaseOrderByCustomer,
      CustomerRebateAgreement,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup1,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup2,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup3,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup4,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup5,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditControlArea,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentReason,
      RetailPromotion,
      ItemIsRelevantForCredit,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDeal,
      SalesPromotion,

      //Product
      @AnalyticsDetails.query.display: #KEY_TEXT
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      Material,
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true}
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
      Batch,
      ProductHierarchyNode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProductGroup'
      MaterialGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProductGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      MaterialCommissionGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup1,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup2,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup3,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup4,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup5,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      StorageLocation,

      //Billing
      BillingDocumentItemText,
      BillingDocumentDate,
      CancelledBillingDocument,
      BillingDocumentIsCancelled,
      BillingQuantityUnit,
      BillingPlan,
      BillingPlanItem,

      @AnalyticsDetails.query.display: #KEY_TEXT
      MainItemPricingRefMaterial,

      //Accounting
      AccountingDocument,
      FiscalYear,
      FiscalPeriod,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerAccountAssignmentGroup,
      AccountingExchangeRateIsSet,
      DocumentReferenceID,
      AssignmentReference,
      FixedValueDate,
      AdditionalValueDays,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PaymentMethod,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerProject,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DunningArea,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DunningKey,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DunningBlockingReason,

      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessArea,
      CostCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProfitCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID'
      WBSElement,
      WBSElementInternalID,
      WBSElementExternalID,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor:    'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2,
      OrderID,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ControllingArea,

      //Pricing
      @AnalyticsDetails.query.display: #KEY_TEXT
      PriceListType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerPriceGroup,
      PricingReferenceMaterial,
      VolumeRebateGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerPaymentTerms,
      @AnalyticsDetails.query.display: #KEY_TEXT
      IncotermsVersion,
      @AnalyticsDetails.query.display: #KEY_TEXT
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      SDPricingProcedure,
      PricingDate,
      //ExchangeRateType,
      //ExchangeRateDate,

      //Taxes
      TaxDepartureCountry,
      VATRegistration,
      VATRegistrationCountry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      VATRegistrationOrigin,
      CustomerTaxClassification1,
      CustomerTaxClassification2,
      CustomerTaxClassification3,
      CustomerTaxClassification4,
      CustomerTaxClassification5,
      CustomerTaxClassification6,
      CustomerTaxClassification7,
      CustomerTaxClassification8,
      CustomerTaxClassification9,

      //Shipping
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingCondition,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingPoint,

      //Reference
      ReferenceSDDocument,
      ReferenceSDDocumentItem,
      ReferenceSDDocumentCategory,
      SalesDocument,
      SalesDocumentItem,
      SalesSDDocumentCategory,
      HigherLevelItem,

      //Bom
      PropagatePrftbltySgmt2BOM,
      CostDeterminationIsRequired,

      //Status
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDProcessStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallBillingStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AccountingPostingStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AccountingTransferStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillingIssueType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      InvoiceListStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OvrlItmGeneralIncompletionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallPricingIncompletionSts

}
where
  (
       SDDocumentCategory = 'M'
    or SDDocumentCategory = 'O'
    or SDDocumentCategory = 'P'
    or SDDocumentCategory = '5'
    or SDDocumentCategory = '6'
  )
```
