---
name: C_SALESVOLUMEANALYTICSQRY
description: "This CDS view provides the prerequisites for answering the following business questions, for example: What is my sales volume compared to previous months? How many credit memos or cancellations do I have for a specific sold-to party? What is my profit margin for specific sales organizations or products?"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESVOLUMEANALYTICSQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions, for example: What is my sales volume compared to previous months? How many credit memos or cancellations do I have for a specific sold-to party? What is my profit margin for specific sales organizations or products?"
semantic_vi: "Sales Volume - Query — CDS view tiêu dùng dựa trên I_BillingDocumentItemCube."
keywords:
  - "Sales Volume - Query"
  - "sales"
  - "volume"
  - "query"
  - "billing"
  - "document"
  - "item"
  - "category"
  - "type"
tags:
  - SD
  - bo:billingdocument
  - component:SD-ANA-2CL
  - consumption-view
  - lob:sales & distribution
  - product
  - SD-ANA
  - SD-ANA-2CL
---
# C_SALESVOLUMEANALYTICSQRY

**This CDS view provides the prerequisites for answering the following business questions, for example: What is my sales volume compared to previous months? How many credit memos or cancellations do I have for a specific sold-to party? What is my profit margin for specific sales organizations or products?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESVOLUMEANALYTICSQRY')/$value) |

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
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NetAmountInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `SlsVolumeNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Net Value of Invoiced Sales |
| `CancldSlsVolumeNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Canceled Sales Volume Net Amount In Display Currency |
| `SlsProfitMargNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Profit Margin Amount in Display Currency |
| `SalesProfitMargin` |  | |  | `cast(1 as prf_marg_ratio)` | `DEC(13)` | Profit Margin Ratio |
| `CustCrdtMemoNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Net Value of Credit Memos |
| `CustCrdtMemoPrftMargNetAmtInDC` |  | |  |  | `CURR(19)` | Credit Memo Profit Margin Net Value in Display Currency |
| `NetSlsVolumeNetAmtInDC` |  | |  | `cast(1 as net_sls_vol_net_amt_idc )` | `CURR(19)` | Net Sales Volume in Display Currency |
| `NetSlsProfitMargNetAmtInDC` |  | |  | `cast(1 as net_prf_marg_net_amt_idc )` | `CURR(19)` | Net Profit Margin Net Value in Display Currency |
| `NetSalesCostAmountInDC` |  | |  | `cast(1 as netsalescostamountindc )` | `CURR(19)` | Net Sales Cost Amount in Display Currency |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreatedByUserName` |  | |  |  | `CHAR(80)` | User Description |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `BillingDocumentDateYear` |  | |  |  | `NUMC(4)` | Year of Billing |
| `BillingDocDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter/Year of Billing |
| `BillingDocDateYearMonth` |  | |  |  | `NUMC(6)` | Month/Year of Billing |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SoldToPartyClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `ResponsibleEmployee` |  | |  |  | `NUMC(8)` | Employee Responsible |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Country` |  | |  |  | `CHAR(3)` | Destination Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CityCode` |  | |  |  | `CHAR(4)` | City Code |
| `County` |  | |  |  | `CHAR(3)` | County Code |
| `County_2` |  | |  |  | `CHAR(3)` | County Code |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `CustomerRebateAgreement` |  | |  |  | `CHAR(10)` | Customer Rebate Agreement |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `RetailPromotion` |  | |  |  | `CHAR(10)` | Retail Promotion |
| `VolumeRebateGroup` |  | |  |  | `CHAR(2)` | Volume rebate group |
| `ItemIsRelevantForCredit` |  | |  |  | `CHAR(1)` | Item Relevant for Credit Check |
| `SalesDeal` |  | |  |  | `CHAR(10)` | Sales Deal |
| `SalesDealDescription` |  | |  |  | `CHAR(40)` | Sales Deal Description |
| `SalesPromotion` |  | |  |  | `CHAR(10)` | Sales Promotion |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `OriginallyRequestedMaterial` |  | |  |  | `CHAR(40)` | Material Entered |
| `InternationalArticleNumber` |  | |  |  | `CHAR(18)` | International Article Number (EAN/UPC) |
| `PricingReferenceMaterial` |  | |  |  | `CHAR(40)` | Pricing Reference Material |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `ProductHierarchyNode` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `MaterialCommissionGroup` |  | |  |  | `CHAR(2)` | Commission Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingDocumentIsCancelled` |  | |  |  | `CHAR(1)` | Billing Document Is Canceled |
| `CancelledBillingDocument` |  | |  |  | `CHAR(10)` | Canceled Billing Document |
| `ForeignTrade` |  | |  |  | `CHAR(10)` | Number of foreign trade data in MM and SD documents |
| `IsExportDelivery` |  | |  |  | `CHAR(1)` | Export Delivery Indicator |
| `BillingDocCombinationCriteria` |  | |  |  | `CHAR(40)` | Combination criteria in the billing document |
| `ManualInvoiceMaintIsRelevant` |  | |  |  | `CHAR(1)` | Manual Invoice Maintenance |
| `BillingDocumentItemText` |  | |  |  | `CHAR(40)` | Short Text for Billing Document Item |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `BillingQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `BillingToBaseQuantityDnmntr` |  | |  |  | `DEC(5)` | Denominator (divisor) for conversion of sales Qty into SKU |
| `BillingToBaseQuantityNmrtr` |  | |  |  | `DEC(5)` | Numerator (factor) for conversion of sales quantity into SKU |
| `BillToPartyCountry` |  | |  |  | `CHAR(3)` | Destination Country/Region of Sales Order |
| `BillToPartyRegion` |  | |  |  | `CHAR(3)` | Region of Sales Order |
| `BillingPlanRule` |  | |  |  | `CHAR(1)` | Rule in billing plan/invoice plan |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `BillingPlanItem` |  | |  |  | `NUMC(6)` | Item for Billing Plan/Invoice Plan/Payment Cards |
| `CustomerPriceGroup` |  | |  |  | `CHAR(2)` | Customer Price Group |
| `PriceListType` |  | |  |  | `CHAR(2)` | Price List Type |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `VATRegistrationOrigin` |  | |  |  | `CHAR(1)` | Origin of VAT Registration Number (VAT ID) |
| `VATRegistrationCountry` |  | |  |  | `CHAR(3)` | Country/Region of VAT Registration Number (VAT ID) |
| `CustomerTaxClassification1` |  | |  |  | `CHAR(1)` | Tax Classification 1 for Customer |
| `CustomerTaxClassification2` |  | |  |  | `CHAR(1)` | Tax Classification 2 for Customer |
| `CustomerTaxClassification3` |  | |  |  | `CHAR(1)` | Tax Classification 3 for Customer |
| `CustomerTaxClassification4` |  | |  |  | `CHAR(1)` | Tax Classification 4 for Customer |
| `CustomerTaxClassification5` |  | |  |  | `CHAR(1)` | Tax Classification 5 for Customer |
| `CustomerTaxClassification6` |  | |  |  | `CHAR(1)` | Tax Classification 6 for Customer |
| `CustomerTaxClassification7` |  | |  |  | `CHAR(1)` | Tax Classification 7 for Customer |
| `CustomerTaxClassification8` |  | |  |  | `CHAR(1)` | Tax Classification 8 for Customer |
| `CustomerTaxClassification9` |  | |  |  | `CHAR(1)` | Tax Classification 9 for Customer |
| `SDPricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure in Pricing |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `EngagementProjectName` |  | | `_CustomerProject` | `EngagementProjectName` | `CHAR(40)` | Customer Project Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry Number |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `CustomerAccountAssignmentGroup` |  | |  |  | `CHAR(2)` | Account Assignment Group for Customer |
| `AccountingExchangeRateIsSet` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type (Document) |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Document Reference ID |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `DunningArea` |  | |  |  | `CHAR(2)` | Dunning Area |
| `DunningBlockingReason` |  | |  |  | `CHAR(1)` | Dunning Block |
| `DunningKey` |  | |  |  | `CHAR(1)` | Dunning Key |
| `InternalFinancialDocument` |  | |  |  | `CHAR(10)` | Financial doc. processing: Internal financial doc. number |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElement` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) - Deprecated |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitabilitySegment` |  | |  |  | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OriginSDDocument` |  | |  |  | `CHAR(10)` | Originating Document |
| `OriginSDDocumentItem` |  | |  |  | `NUMC(6)` | Originating SD Document Item |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Translation Date |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category of Reference SD Document |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesSDDocumentCategory` |  | |  |  | `CHAR(4)` | Sales SD Document Category |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `BillingDocumentItemInPartSgmt` |  | |  |  | `NUMC(6)` | Item Number in the Partner Segment |
| `MainItemPricingRefMaterial` |  | |  |  | `CHAR(40)` | Pricing Reference Product of Main Item |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESVOLUMEANALYTICSQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESVOLUMEANALYTICSQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL 
@EndUserText.label: 'Sales Volume - Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CSDSALESVLMQ'
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true 
@Metadata.allowExtensions: true  --AT: 10.12.2019 CE2005
@Metadata.ignorePropagatedAnnotations: true --AT^2: 6.5.2019
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_QUERY ]

/////////////////////////////////////////////////////////////////////////
// IMPORTANT NOTE  (AT 16.5.2018)                                      //   
//                                                                     //                                               
// This model exposes abstracted business driven KPIs.                 //
//                                                                     //
// To achieve an acceptable performance, please consider to use        // 
// this model in a business suitable manner:                           //    
// - use only the minimal viable set of dimensions and KPIs            //
// - consider using filters, like salesOrganization, MaterialGroup,    //
//   Plant, that allow on a good focus on the relevant data            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////


define view C_SalesVolumeAnalyticsQry
  with parameters
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_ExchangeRateType',
        element:'ExchangeRateType'
      }
    }]      
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from I_BillingDocumentItemCube(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency)
{

      //Key
  key BillingDocument,
  @EndUserText.label:'Billing Item'
  key BillingDocumentItem,

      // Category
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
      @UI.hidden: true
      DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetAmountInDisplayCurrency, --AT28.1.2022 APL adoption  -- AT dec 2017: CurCon now as AE Formula
//      @DefaultAggregation: #FORMULA
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
//      cast (currency_conversion(
//       amount => ItemNetAmountOfBillingDoc,
//       source_currency => TransactionCurrency,
//       target_currency => :P_DisplayCurrency,
//       exchange_rate_date => BillingDocumentDate,
//       exchange_rate_type => :P_ExchangeRateType
//      ) as net_amount_in_dsp_crcy) as  NetAmountInDisplayCurrency,



      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SlsVolumeNetAmtInDspCrcy, --AT28.1.2022 APL adoption  -- AT dec 2017: CurCon now as AE Formula
//      @DefaultAggregation: #FORMULA
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
//      cast (currency_conversion(
//       amount => SalesVolumeNetAmount,
//       source_currency => TransactionCurrency,
//       target_currency => :P_DisplayCurrency,
//       exchange_rate_date => BillingDocumentDate,
//       exchange_rate_type => :P_ExchangeRateType
//      ) as mc_umnetwr) as  SlsVolumeNetAmtInDspCrcy,

      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CancldSlsVolumeNetAmtInDspCrcy, --AT28.1.2022 APL adoption -- AT dec 2017: CurCon now as AE Formula
//      @DefaultAggregation: #FORMULA
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
//      cast (currency_conversion(
//       amount => CancldSlsVolumeNetAmt,
//       source_currency => TransactionCurrency,
//       target_currency => :P_DisplayCurrency,
//       exchange_rate_date => BillingDocumentDate,
//       exchange_rate_type => :P_ExchangeRateType
//      ) as cancld_sls_vol_net_amt_idc) as  CancldSlsVolumeNetAmtInDspCrcy,

      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SlsProfitMargNetAmtInDspCrcy, --AT28.1.2022 APL adoption -- AT dec 2017: CurCon now as AE Formula
//      @DefaultAggregation: #FORMULA
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
//      cast (currency_conversion(
//       amount => SalesProfitMarginNetAmount,
//       source_currency => TransactionCurrency,
//       target_currency => :P_DisplayCurrency,
//       exchange_rate_date => BillingDocumentDate,
//       exchange_rate_type => :P_ExchangeRateType
//      ) as prf_marg_net_amt_idc) as  SlsProfitMargNetAmtInDspCrcy,      

      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula: 'NDIV0($projection.SlsProfitMargNetAmtInDspCrcy / $projection.SlsVolumeNetAmtInDspCrcy)'
      cast(1 as prf_marg_ratio) as SalesProfitMargin,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustCrdtMemoNetAmtInDspCrcy,  --AT28.1.2022 APL adoption -- AT dec 2017: CurCon now as AE Formula
//      @DefaultAggregation: #FORMULA
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
//      cast (currency_conversion(
//       amount => CustomerCreditMemoNetAmount,
//       source_currency => TransactionCurrency,
//       target_currency => :P_DisplayCurrency,
//       exchange_rate_date => BillingDocumentDate,
//       exchange_rate_type => :P_ExchangeRateType
//      ) as mc_gunetwr) as  CustCrdtMemoNetAmtInDspCrcy,      
      
      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustCrdtMemoPrftMargNetAmtInDC,  --AT28.1.2022 APL adoption-- AT feb 2018: CurCon now as AE Formula
//      @DefaultAggregation: #FORMULA
//      @Semantics.amount.currencyCode: 'DisplayCurrency'
//      cast ( currency_conversion(
//        amount => CustCrdtMemoPrftMargNetAmt,
//        source_currency => TransactionCurrency,
//        target_currency => :P_DisplayCurrency,
//        exchange_rate_date => BillingDocumentDate,
//        exchange_rate_type => :P_ExchangeRateType
//      ) as cm_prf_marg_net_amt_idc ) as CustCrdtMemoPrftMargNetAmtInDC,  --AT 1.2.2018 added for CE1805
          
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: '$projection.SlsVolumeNetAmtInDspCrcy - $projection.CustCrdtMemoNetAmtInDspCrcy'
      cast(1 as net_sls_vol_net_amt_idc ) as NetSlsVolumeNetAmtInDC ,
      
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: '$projection.SlsProfitMargNetAmtInDspCrcy - $projection.CustCrdtMemoPrftMargNetAmtInDC'
      cast(1 as net_prf_marg_net_amt_idc ) as NetSlsProfitMargNetAmtInDC , --AT 1.2.2018 added for CE1805
      
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: '$projection.NetSlsVolumeNetAmtInDC - $projection.NetSlsProfitMargNetAmtInDC'
      cast(1 as netsalescostamountindc ) as NetSalesCostAmountInDC , --AT 7.5.2018 added for CE1808
      
      // Admin
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      CreatedByUser,
      CreatedByUserName,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @AnalyticsDetails.query.display: #KEY_TEXT
      LogicalSystem,
      @Semantics.calendar.year
      CreationDateYear,
      @Semantics.calendar.yearQuarter
      CreationDateYearQuarter,
      @AnalyticsDetails.query.axis: #COLUMNS
      @Semantics.calendar.yearMonth
      CreationDateYearMonth,

      @Semantics.calendar.year
      BillingDocumentDateYear,
      @Semantics.calendar.yearQuarter
      BillingDocDateYearQuarter,
      @Semantics.calendar.yearMonth
      BillingDocDateYearMonth,

      // Sales
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Customer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToPartyClassification,
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
      @AnalyticsDetails.query.display: #KEY_TEXT
      PartnerCompany,
      PurchaseOrderByCustomer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CityCode,
      @VDM.lifecycle: { status: #DEPRECATED, successor: 'County_2' }  --AT28.7.2021 CE2111       
      County,
      County_2,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditControlArea,
      CustomerRebateAgreement,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
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
      SDDocumentReason,
      RetailPromotion,
      VolumeRebateGroup,
      ItemIsRelevantForCredit,
      SalesDeal,
      SalesDealDescription,
      SalesPromotion,

      // Organization
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,

      // Product
      @AnalyticsDetails.query.display: #KEY_TEXT
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      Material,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
      @AnalyticsDetails.query.display: #KEY_TEXT  --AT8.8.2019 added to add description to value help (& align to v.h. from e.g. material)
      OriginallyRequestedMaterial,
      InternationalArticleNumber,
      PricingReferenceMaterial,
      Batch,
      ProductHierarchyNode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProductGroup'
      MaterialGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProductGroup,
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
      MaterialCommissionGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      StorageLocation,

      // Billing
      BillingDocumentDate,
      BillingDocumentIsCancelled,
      CancelledBillingDocument,
      ForeignTrade,
      IsExportDelivery,
      BillingDocCombinationCriteria,
      ManualInvoiceMaintIsRelevant,
      BillingDocumentItemText,
      ServicesRenderedDate,
      BillingQuantityUnit,
      BaseUnit,
      ItemWeightUnit,
      ItemVolumeUnit,
      BillingToBaseQuantityDnmntr,
      BillingToBaseQuantityNmrtr,
      BillToPartyCountry,
      BillToPartyRegion,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillingPlanRule,
      BillingPlan,
      BillingPlanItem,

      // Pricing
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerPriceGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PriceListType,
      TaxDepartureCountry,
      VATRegistration,
      @AnalyticsDetails.query.display: #KEY_TEXT
      VATRegistrationOrigin,
      VATRegistrationCountry,
      CustomerTaxClassification1,
      CustomerTaxClassification2,
      CustomerTaxClassification3,
      CustomerTaxClassification4,
      CustomerTaxClassification5,
      CustomerTaxClassification6,
      CustomerTaxClassification7,
      CustomerTaxClassification8,
      CustomerTaxClassification9,
      SDPricingProcedure,
      PricingDate,

      // Shipping
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingCondition,
      @AnalyticsDetails.query.display: #KEY_TEXT
      IncotermsClassification,
      IncotermsTransferLocation,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingPoint,

      // Payment
      ContractAccount,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerPaymentTerms,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PaymentMethod,
      PaymentReference,
      FixedValueDate,
      AdditionalValueDays,
      _CustomerProject.EngagementProjectName,

      // Accounting
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      FiscalYear,
      AccountingDocument,
      FiscalPeriod,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerAccountAssignmentGroup,
      AccountingExchangeRateIsSet, 
      ExchangeRateType,
      DocumentReferenceID,
      AssignmentReference,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DunningArea,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DunningBlockingReason,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DunningKey,
      InternalFinancialDocument,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessArea,
      ProfitCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'WBSElementInternalID'
      WBSElement,
      @Analytics.internalName: #LOCAL
      WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      WBSElementExternalID,       --AT 28.10.2021 CE2202 intro of WBSElementExternalID 
      @AnalyticsDetails.query.display: #KEY_TEXT
      ControllingArea,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor:    'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2,
      OrderID,
      CostCenter,
      OriginSDDocument,
      OriginSDDocumentItem,
      ExchangeRateDate,
      
      // Reference
      ReferenceSDDocument,
      ReferenceSDDocumentItem,
      ReferenceSDDocumentCategory,
      SalesDocument,
      SalesDocumentItem,
      SalesSDDocumentCategory,
      HigherLevelItem,
      BillingDocumentItemInPartSgmt,
      
      //Bom
      MainItemPricingRefMaterial,
      PropagatePrftbltySgmt2BOM,
      CostDeterminationIsRequired,

      // Status
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
      SDDocumentCategory         != '3'   --"Invoice List  
  and SDDocumentCategory         != '4'   --"CreditMemo List
```
