---
name: C_SALESANALYTICSQRY_1
description: This CDS view provides the data to answer the following business questions: What is my sales volume in comparison with previous months? Where can I increase my sales volume in the current period, for example, with open orders, open billing requests and open deliveries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESANALYTICSQRY_1')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What is my sales volume in comparison with previous months? Where can I increase my sales volume in the current period, for example, with open orders, open billing requests and open deliveries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Sales Volume and Open Sales - Query
  - Sales Volume and Open Sales - Query
  - Sales Volume and Open Sales - Query
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-ANA-2CL
  - consumption-view
  - lob:sales & distribution
  - order
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_SALESANALYTICSQRY_1

**This CDS view provides the data to answer the following business questions: What is my sales volume in comparison with previous months? Where can I increase my sales volume in the current period, for example, with open orders, open billing requests and open deliveries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESANALYTICSQRY_1')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `ScheduleLine` | `NUMC(4)` | Schedule Line Number |
| `BillingPlan` | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `BillingPlanItem` | `NUMC(6)` | Item for billing plan/invoice plan/payment cards |
| `DeliveryDocument` | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` | `NUMC(6)` | Delivery Item |
| `BillingDocument` | `CHAR(10)` | Billing Document |
| `BillingDocumentItem` | `NUMC(6)` | Billing Item |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` | `CHAR(3)` | Customer Group 5 |
| `SDDocumentCategory` | `CHAR(4)` | SD Document Category |
| `SDDocumentObject` | `CHAR(1)` | SD Document Object |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `Material` | `CHAR(40)` | Material Number |
| `Product` | `CHAR(40)` | Product |
| `ProductHierarchyNode` | `CHAR(18)` | Product Hierarchy |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` | `CHAR(3)` | Material Group 5 |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `BillingDocumentDate` | `DATS(8)` | Date of Billing |
| `BillingDocumentDateYear` | `NUMC(4)` | Year of Billing |
| `BillingDocDateCalendarQuarter` | `NUMC(1)` | Calendar Quarter of Billing |
| `BillingDocDateCalendarMonth` | `NUMC(2)` | Calendar Month of Billing |
| `BillingDocDateYearQuarter` | `NUMC(5)` | Quarter/Year of Billing |
| `BillingDocDateYearMonth` | `NUMC(6)` | Month/Year of Billing |
| `DeliveryDate` | `DATS(8)` | Schedule Line Date |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `OpnSOForOrdReltdInvcsNetAmtDC` | `CURR(19)` | Open Sales Orders for Ord.Reltd Billing Net Amount IDC |
| `OpnSlsOrdsForOrdReltdInvcsQty` | `QUAN(15)` | Open Sales Orders for Order-Related Billing Quantity |
| `OpnRetsOrdReltdInvcsNetAmtInDC` | `CURR(19)` | Open Returns For Order Rel Invoices Net Amnt in Displ Curr |
| `OpnRetsForOrdReltdInvcsQty` | `QUAN(15)` | Open Return For Order Related Invoices Quantity |
| `OpnSlsOrdsForDelivAmtInDspCrcy` | `CURR(19)` | Open Sales Orders for Deliveries Net Amt in Displ. Crcy |
| `OpnSlsOrdrsForDelivQuantity` | `QUAN(15)` | Open Confirmed Sales Orders for Deliveries Quantity in BU |
| `OpnSlsOrdsForInvcPlansNetAmtDC` | `CURR(19)` | Open Sls Orders for Billing Plans Net Amt in Displ. Crcy |
| `OpnOutbDelivsForInvcNetAmtInDC` | `CURR(19)` | Net Amount of Open Deliveries for Invoices(Display Currency) |
| `OpnOutbDelivsForInvcQty` | `QUAN(13)` | Quantity of Open Deliveries for Invoices |
| `ShpdNotInvcdDelivsNetAmtInDC` | `CURR(19)` | Value of Deliveries Shipped But Not Invoiced (Display Curr.) |
| `ShpdNotInvcdDelivsQuantity` | `QUAN(15)` | Quantity of Deliveries Shipped But Not Invoiced (SKU) |
| `CustCrdtMemoNetAmtInDspCrcy` | `CURR(19)` | Net Value of Credit Memos |
| `CustCreditMemoQuantity` | `QUAN(15)` | Quantity of Credit Memos |
| `SlsVolumeNetAmtInDspCrcy` | `CURR(19)` | Net Value of Invoiced Sales |
| `SalesVolumeQuantity` | `QUAN(15)` | Sales Volume Quantity |
| `SlsProfitMargNetAmtInDspCrcy` | `CURR(19)` | Profit Margin Amount in Display Currency |
| `CustCrdtMemoPrftMargNetAmtInDC` | `CURR(19)` | Credit Memo Profit Margin Net Value in Display Currency |
| `SalesProfitMargin` | `DEC(13)` | Profit Margin Ratio |
| `OpenSalesOrdersNetAmountInDC` | `CURR(19)` | Open Sales Orders Net Amount In Display Currency |
| `OpenSlsOrdsForInvcsNetAmtInDC` | `CURR(19)` | Open Sales Orders for Invoices Net Amount in Display Crcy |
| `NetSlsVolumeNetAmtInDC` | `CURR(19)` | Net Sales Volume in Display Currency |
| `NetSlsProfitMargNetAmtInDC` | `CURR(19)` | Net Profit Margin Net Value in Display Currency |
| `NetSalesCostAmountInDC` | `CURR(19)` | Net Sales Cost Amount in Display Currency |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
