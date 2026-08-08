---
name: C_SALESORDERQUERY
description: "This CDS view provides the prerequisites for answering questions about sales orders at header level. Example business questions include: What's the sold-to party of the sales order? What's the overall processing status of the sales order? How many sales orders are in the system and how many are still open? What is the overall open value of my sales orders?"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about sales orders at header level. Example business questions include: What's the sold-to party of the sales order? What's the overall processing status of the sales order? How many sales orders are in the system and how many are still open? What is the overall open value of my sales orders?"
semantic_vi: "Sales Order - Query — CDS view tiêu dùng dựa trên I_SalesOrderCube."
keywords:
  - "Sales Order - Query"
  - "sales"
  - "order"
  - "query"
  - "type"
  - "display"
  - "currency"
  - "number"
  - "incoming"
  - "orders"
tags:
  - SD
  - bo:plant
  - component:SD-ANA-2CL
  - consumption-view
  - lob:sales & distribution
  - order
  - sales-order
  - SD-ANA
  - SD-ANA-2CL
  - bo:salesorder
---
# C_SALESORDERQUERY

**This CDS view provides the prerequisites for answering questions about sales orders at header level. Example business questions include: What's the sold-to party of the sales order? What's the overall processing status of the sales order? How many sales orders are in the system and how many are still open? What is the overall open value of my sales orders?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NumberOfIncomingSalesOrders` |  | |  |  | `INT8(19)` | Number of Incoming Sales Orders |
| `IncomingSalesOrdersNetAmtInDC` |  | |  | `cast( currency_conversion( amount => IncomingSalesOrdersNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => CreationDate, exchange_rate_type => :P_ExchangeRateType ) as incg_sls_ords_net_amt_in_dc )` | `CURR(19)` | Incoming Sales Orders Net Value In Display Currency |
| `NumberOfOpenSalesOrders` |  | |  |  | `INT8(19)` | Number of Open Sales Orders |
| `OpnSOForOrdReltdInvcsNetAmtDC` |  | |  |  | `CURR(19)` | Open Sales Orders for Ord.Reltd Billing Net Amount IDC |
| `OpnSlsOrdsForDelivAmtInDspCrcy` |  | |  |  | `CURR(19)` | Open Sales Orders for Deliveries Net Amt in Displ. Crcy |
| `OpnSlsOrdsForInvcPlansNetAmtDC` |  | |  |  | `CURR(19)` | Open Sls Orders for Billing Plans Net Amt in Displ. Crcy |
| `OpenSalesOrdersNetAmountInDC` |  | |  | `cast(1 as opn_ord_amt_idc)` | `CURR(19)` | Open Sales Orders Net Amount In Display Currency |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `SalesOrderDateYear` |  | |  |  | `NUMC(4)` | Year of Order |
| `SalesOrderDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter of Order |
| `SalesOrderDateYearMonth` |  | |  |  | `NUMC(6)` | Month of Order |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `SoldToPartyClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `CustomerRebateAgreement` |  | |  |  | `CHAR(10)` | Customer Rebate Agreement |
| `SalesOrderDate` |  | |  |  | `DATS(8)` | Document Date (Date Received/Sent) |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderType` |  | |  |  | `CHAR(4)` | Customer Purchase Order Type |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Reference Date |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  | `CHAR(4)` | Purchase order number supplement |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ProductCatalog` |  | |  |  | `CHAR(10)` | Product Catalog Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `RetailPromotion` |  | |  |  | `CHAR(10)` | Retail Promotion |
| `SalesOrderCondition` |  | |  |  | `CHAR(10)` | Sales Order Condition |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Delivery Block (Document Header) |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingCompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `HeaderBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block in SD Document |
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `CustomerProject` |  | |  |  | `CHAR(40)` | Commercial Project ID |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CustomerAccountAssignmentGroup` |  | |  |  | `CHAR(2)` | Customer Account Assignment Group |
| `CostCenterBusinessArea` |  | |  |  | `CHAR(4)` | Business Area from Cost Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | Category of Reference Document |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallPurchaseConfStatus` |  | |  |  | `CHAR(1)` | Purchase Order Confirmation Status (All Items) |
| `OverallSDDocumentRejectionSts` |  | |  |  | `CHAR(1)` | Rejection Status (All Items) |
| `TotalBlockStatus` |  | |  |  | `CHAR(1)` | Overall Block Status (Header) |
| `OverallDelivConfStatus` |  | |  |  | `CHAR(1)` | Delivery Confirmation Status (All Items) |
| `OverallTotalDeliveryStatus` |  | |  |  | `CHAR(1)` | Overall Delivery Status (All Items) |
| `OverallDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status (All Items) |
| `OverallDeliveryBlockStatus` |  | |  |  | `CHAR(1)` | Overall Delivery Block Status (All Items) |
| `OverallOrdReltdBillgStatus` |  | |  |  | `CHAR(1)` | Order-Related Billing Status (All Items) |
| `OverallBillingBlockStatus` |  | |  |  | `CHAR(1)` | Billing Block Status (All Items) |
| `OverallTotalSDDocRefStatus` |  | |  |  | `CHAR(1)` | Overall Reference Status (All Items) |
| `OverallSDDocReferenceStatus` |  | |  |  | `CHAR(1)` | Reference Status (All Items) |
| `TotalCreditCheckStatus` |  | |  |  | `CHAR(1)` | Overall Status of Credit Checks |
| `MaxDocValueCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Maximum Document Value |
| `PaymentTermCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Terms of Payment |
| `FinDocCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Financial Document |
| `ExprtInsurCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Export Credit Insurance |
| `PaytAuthsnCreditCheckSts` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Payment Card Authorization |
| `CentralCreditCheckStatus` |  | |  |  | `CHAR(1)` | Central Credit Check Status |
| `CentralCreditChkTechErrSts` |  | |  |  | `CHAR(1)` | Status of Technical Error SAP Credit Management |
| `HdrGeneralIncompletionStatus` |  | |  |  | `CHAR(1)` | Incompletion Status (Header) |
| `OverallPricingIncompletionSts` |  | |  |  | `CHAR(1)` | Pricing Incompletion Status (All Items) |
| `HeaderDelivIncompletionStatus` |  | |  |  | `CHAR(1)` | Delivery Incompletion Status (Header) |
| `HeaderBillgIncompletionStatus` |  | |  |  | `CHAR(1)` | Billing Incompletion Status (Header) |
| `OvrlItmGeneralIncompletionSts` |  | |  |  | `CHAR(1)` | Incompletion Status (All Items) |
| `OvrlItmBillingIncompletionSts` |  | |  |  | `CHAR(1)` | Billing Incompletion Status (All Items) |
| `OvrlItmDelivIncompletionSts` |  | |  |  | `CHAR(1)` | Delivery Incompletion Status (All Items) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Order - Query'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog: {
   sqlViewName: 'CSDSLSORDHDRQRY',
   compiler.compareFilter: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XL
   }
}
@Analytics.query:true
@ObjectModel.supportedCapabilities: 
   [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@OData.publish: true

define view C_SalesOrderQuery 
with parameters
  @Consumption.defaultValue: 'M'
  P_ExchangeRateType : kurst,
  P_DisplayCurrency  : vdm_v_display_currency
as select from I_SalesOrderCube(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency) 
{
      //Key
  key SalesOrder,

      //Category
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrderType,
      
      //@Semantics.currencyCode: true
      //TransactionCurrency,
      @Semantics.currencyCode: true
      DisplayCurrency,
      
      //KPI: Sales Order
      @DefaultAggregation: #SUM
      NumberOfIncomingSalesOrders,
      
      @DefaultAggregation: #FORMULA
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
            amount => IncomingSalesOrdersNetAmount,
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => CreationDate,
            exchange_rate_type => :P_ExchangeRateType
          ) as  incg_sls_ords_net_amt_in_dc )      as  IncomingSalesOrdersNetAmtInDC,     
      
      // KPI: Open Sales Orders
      @DefaultAggregation: #SUM
      NumberOfOpenSalesOrders,
   
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      OpnSOForOrdReltdInvcsNetAmtDC,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'   
      OpnSlsOrdsForDelivAmtInDspCrcy, 
     
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency' 
      OpnSlsOrdsForInvcPlansNetAmtDC,   
   
      // Open Sales Orders incl. Order/Billing Plan related                
      // Open Sales Orders = 'Open Orders delivery related' + 'Open Sales with order related invoicing' + 'Open Sales with billing plan related invoicing' 
      @EndUserText.label: 'Overall Open Orders'
      @DefaultAggregation: #FORMULA
      @Semantics.amount.currencyCode: 'DisplayCurrency' 
      @AnalyticsDetails.query.formula: '$projection.OpnSlsOrdsForDelivAmtInDspCrcy + $projection.OpnSOForOrdReltdInvcsNetAmtDC + $projection.OpnSlsOrdsForInvcPlansNetAmtDC'
      cast(1 as opn_ord_amt_idc) as OpenSalesOrdersNetAmountInDC,
              
      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt: true
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.calendar.year
      CreationDateYear,
      @Semantics.calendar.yearQuarter
      CreationDateYearQuarter,
      @AnalyticsDetails.query.axis: #COLUMNS
      @Semantics.calendar.yearMonth
      CreationDateYearMonth,
      @Semantics.calendar.year
      SalesOrderDateYear,
      @Semantics.calendar.yearQuarter
      SalesOrderDateYearQuarter,
      @Semantics.calendar.yearMonth
      SalesOrderDateYearMonth,

      //Orgnization
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Analytics.internalName: #LOCAL
      PartnerCompany, 
      
      //Partner
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToPartyClassification,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShipToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PayerParty,
      
      //Sales
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerGroup,
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
      CustomerRebateAgreement,
      SalesOrderDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentReason,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderType,
      CustomerPurchaseOrderDate,
      CustomerPurchaseOrderSuplmnt,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      ProductCatalog,
      ServicesRenderedDate,

      //Pricing
      RetailPromotion,
      SalesOrderCondition,

      //Shipping
      RequestedDeliveryDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingCondition,
      @AnalyticsDetails.query.display: #KEY_TEXT
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @AnalyticsDetails.query.display: #KEY_TEXT
      IncotermsVersion,     
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryBlockReason,

      //Billing
      BillingDocumentDate,
      BillingCompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HeaderBillingBlockReason,

      //Payment
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerProject,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessArea,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerAccountAssignmentGroup,
      CostCenterBusinessArea,
      CostCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ControllingArea,
      OrderID,

      //Reference
      ReferenceSDDocument,
      ReferenceSDDocumentCategory,
      @Analytics.internalName: #LOCAL
      BusinessSolutionOrder, --AT15May2020: Added for CE2008

      //Status
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDProcessStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallPurchaseConfStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDDocumentRejectionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      TotalBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallDelivConfStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallTotalDeliveryStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallDeliveryStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallDeliveryBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallOrdReltdBillgStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallBillingBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallTotalSDDocRefStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDDocReferenceStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      TotalCreditCheckStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      MaxDocValueCreditCheckStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PaymentTermCreditCheckStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      FinDocCreditCheckStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ExprtInsurCreditCheckStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PaytAuthsnCreditCheckSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CentralCreditCheckStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CentralCreditChkTechErrSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HdrGeneralIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallPricingIncompletionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HeaderDelivIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HeaderBillgIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OvrlItmGeneralIncompletionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OvrlItmBillingIncompletionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OvrlItmDelivIncompletionSts 
}
```
