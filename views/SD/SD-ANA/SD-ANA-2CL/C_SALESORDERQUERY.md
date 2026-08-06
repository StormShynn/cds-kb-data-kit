---
name: C_SALESORDERQUERY
description: This CDS view provides the prerequisites for answering questions about sales orders at header level. Example business questions include: What's the sold-to party of the sales order? What's the overall processing status of the sales order? How many sales orders are in the system and how many are still open? What is the overall open value of my sales orders?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERQUERY')/$value
semantic_en: This CDS view provides the prerequisites for answering questions about sales orders at header level. Example business questions include: What's the sold-to party of the sales order? What's the overall processing status of the sales order? How many sales orders are in the system and how many are still open? What is the overall open value of my sales orders?
keywords:
  - Sales Order - Query
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
  - metadata-only
---
# C_SALESORDERQUERY

**This CDS view provides the prerequisites for answering questions about sales orders at header level. Example business questions include: What's the sold-to party of the sales order? What's the overall processing status of the sales order? How many sales orders are in the system and how many are still open? What is the overall open value of my sales orders?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderType` | `CHAR(4)` | Sales Document Type |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `NumberOfIncomingSalesOrders` | `INT8(19)` | Number of Incoming Sales Orders |
| `IncomingSalesOrdersNetAmtInDC` | `CURR(19)` | Incoming Sales Orders Net Value In Display Currency |
| `NumberOfOpenSalesOrders` | `INT8(19)` | Number of Open Sales Orders |
| `OpnSOForOrdReltdInvcsNetAmtDC` | `CURR(19)` | Open Sales Orders for Ord.Reltd Billing Net Amount IDC |
| `OpnSlsOrdsForDelivAmtInDspCrcy` | `CURR(19)` | Open Sales Orders for Deliveries Net Amt in Displ. Crcy |
| `OpnSlsOrdsForInvcPlansNetAmtDC` | `CURR(19)` | Open Sls Orders for Billing Plans Net Amt in Displ. Crcy |
| `OpenSalesOrdersNetAmountInDC` | `CURR(19)` | Open Sales Orders Net Amount In Display Currency |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Time at Which Record Was Created |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `CreationDateYear` | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` | `NUMC(6)` | Year/Month of Creation |
| `SalesOrderDateYear` | `NUMC(4)` | Year of Order |
| `SalesOrderDateYearQuarter` | `NUMC(5)` | Quarter of Order |
| `SalesOrderDateYearMonth` | `NUMC(6)` | Month of Order |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `SoldToPartyClassification` | `CHAR(2)` | Customer Classification |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `PayerParty` | `CHAR(10)` | Payer |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` | `CHAR(3)` | Customer Group 5 |
| `CustomerRebateAgreement` | `CHAR(10)` | Customer Rebate Agreement |
| `SalesOrderDate` | `DATS(8)` | Document Date (Date Received/Sent) |
| `SDDocumentReason` | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `PurchaseOrderByCustomer` | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderType` | `CHAR(4)` | Customer Purchase Order Type |
| `CustomerPurchaseOrderDate` | `DATS(8)` | Customer Reference Date |
| `CustomerPurchaseOrderSuplmnt` | `CHAR(4)` | Purchase order number supplement |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `ProductCatalog` | `CHAR(10)` | Product Catalog Number |
| `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `RetailPromotion` | `CHAR(10)` | Retail Promotion |
| `SalesOrderCondition` | `CHAR(10)` | Sales Order Condition |
| `RequestedDeliveryDate` | `DATS(8)` | Requested Delivery Date |
| `ShippingType` | `CHAR(2)` | Shipping Type |
| `ShippingCondition` | `CHAR(2)` | Shipping Conditions |
| `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` | `CHAR(70)` | Incoterms Location 2 |
| `IncotermsVersion` | `CHAR(4)` | Incoterms Version |
| `DeliveryBlockReason` | `CHAR(2)` | Delivery Block (Document Header) |
| `BillingDocumentDate` | `DATS(8)` | Billing Date |
| `BillingCompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `HeaderBillingBlockReason` | `CHAR(2)` | Billing Block in SD Document |
| `CustomerPaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` | `CHAR(1)` | Payment Method |
| `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `CustomerProject` | `CHAR(40)` | Commercial Project ID |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Posting Period |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `CustomerAccountAssignmentGroup` | `CHAR(2)` | Customer Account Assignment Group |
| `CostCenterBusinessArea` | `CHAR(4)` | Business Area from Cost Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `OrderID` | `CHAR(12)` | Order Number |
| `ReferenceSDDocument` | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentCategory` | `CHAR(4)` | Category of Reference Document |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `OverallSDProcessStatus` | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallPurchaseConfStatus` | `CHAR(1)` | Purchase Order Confirmation Status (All Items) |
| `OverallSDDocumentRejectionSts` | `CHAR(1)` | Rejection Status (All Items) |
| `TotalBlockStatus` | `CHAR(1)` | Overall Block Status (Header) |
| `OverallDelivConfStatus` | `CHAR(1)` | Delivery Confirmation Status (All Items) |
| `OverallTotalDeliveryStatus` | `CHAR(1)` | Overall Delivery Status (All Items) |
| `OverallDeliveryStatus` | `CHAR(1)` | Delivery Status (All Items) |
| `OverallDeliveryBlockStatus` | `CHAR(1)` | Overall Delivery Block Status (All Items) |
| `OverallOrdReltdBillgStatus` | `CHAR(1)` | Order-Related Billing Status (All Items) |
| `OverallBillingBlockStatus` | `CHAR(1)` | Billing Block Status (All Items) |
| `OverallTotalSDDocRefStatus` | `CHAR(1)` | Overall Reference Status (All Items) |
| `OverallSDDocReferenceStatus` | `CHAR(1)` | Reference Status (All Items) |
| `TotalCreditCheckStatus` | `CHAR(1)` | Overall Status of Credit Checks |
| `MaxDocValueCreditCheckStatus` | `CHAR(1)` | Status of Credit Check Against Maximum Document Value |
| `PaymentTermCreditCheckStatus` | `CHAR(1)` | Status of Credit Check Against Terms of Payment |
| `FinDocCreditCheckStatus` | `CHAR(1)` | Status of Credit Check Against Financial Document |
| `ExprtInsurCreditCheckStatus` | `CHAR(1)` | Status of Credit Check Against Export Credit Insurance |
| `PaytAuthsnCreditCheckSts` | `CHAR(1)` | Status of Credit Check Against Payment Card Authorization |
| `CentralCreditCheckStatus` | `CHAR(1)` | Central Credit Check Status |
| `CentralCreditChkTechErrSts` | `CHAR(1)` | Status of Technical Error SAP Credit Management |
| `HdrGeneralIncompletionStatus` | `CHAR(1)` | Incompletion Status (Header) |
| `OverallPricingIncompletionSts` | `CHAR(1)` | Pricing Incompletion Status (All Items) |
| `HeaderDelivIncompletionStatus` | `CHAR(1)` | Delivery Incompletion Status (Header) |
| `HeaderBillgIncompletionStatus` | `CHAR(1)` | Billing Incompletion Status (Header) |
| `OvrlItmGeneralIncompletionSts` | `CHAR(1)` | Incompletion Status (All Items) |
| `OvrlItmBillingIncompletionSts` | `CHAR(1)` | Billing Incompletion Status (All Items) |
| `OvrlItmDelivIncompletionSts` | `CHAR(1)` | Delivery Incompletion Status (All Items) |
