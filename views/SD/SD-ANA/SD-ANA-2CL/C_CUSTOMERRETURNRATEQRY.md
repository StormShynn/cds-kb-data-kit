---
name: C_CUSTOMERRETURNRATEQRY
description: This CDS view provides customer return rates by various dimensions such as sales organization, customer group, sold-to-party, product, and time period, among others. The customer return rates are either value-based or quantity-based. The CDS view provides the prerequisites for answering the following business questions: What items have been returned? What are the top return reasons? How many items have been returned? What is the returned value? Are there customers with a very high return rate? Are there products with a very high return rate? How do customer return rates change over time?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTOMERRETURNRATEQRY')/$value
semantic_en: This CDS view provides customer return rates by various dimensions such as sales organization, customer group, sold-to-party, product, and time period, among others. The customer return rates are either value-based or quantity-based. The CDS view provides the prerequisites for answering the following business questions: What items have been returned? What are the top return reasons? How many items have been returned? What is the returned value? Are there customers with a very high return rate? Are there products with a very high return rate? How do customer return rates change over time?
keywords:
  - Customer Return Rate - Query
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - lob:sales & distribution
  - product
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_CUSTOMERRETURNRATEQRY

**This CDS view provides customer return rates by various dimensions such as sales organization, customer group, sold-to-party, product, and time period, among others. The customer return rates are either value-based or quantity-based. The CDS view provides the prerequisites for answering the following business questions: What items have been returned? What are the top return reasons? How many items have been returned? What is the returned value? Are there customers with a very high return rate? Are there products with a very high return rate? How do customer return rates change over time?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTOMERRETURNRATEQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `CustomerReturn` | `CHAR(10)` | Customer Return |
| `CustomerReturnItem` | `NUMC(6)` | Customer Return Item |
| `SDDocumentCategory` | `CHAR(4)` | SD Document Category |
| `SalesDocumentType` | `CHAR(4)` | Sales Document Type |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationDateYearMonth` | `NUMC(6)` | Year/Month of Creation |
| `CreationDateYearQuarter` | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYear` | `NUMC(4)` | Year of Creation |
| `ReferenceSDDocument` | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` | `CHAR(4)` | Category of Reference Document |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `PayerParty` | `CHAR(10)` | Payer |
| `AdditionalCustomerGroup1` | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` | `CHAR(3)` | Customer Group 5 |
| `Product` | `CHAR(40)` | Product |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `MaterialByCustomer` | `CHAR(35)` | Material Number Used by Customer |
| `AdditionalMaterialGroup1` | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` | `CHAR(3)` | Material Group 5 |
| `ProductHierarchyNode` | `CHAR(18)` | Product Hierarchy |
| `Plant` | `CHAR(4)` | Plant (Own or External) |
| `ReturnReason` | `CHAR(3)` | Return Reason |
| `BillingCompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `ReferenceSlsDocItmBaseUnit` | `UNIT(3)` | Base Unit of Reference Document Item |
| `ReferenceSlsDocItmNetAmtInDC` | `CURR(19)` | Net Value of Reference Items in Display Currency |
| `ReferenceSlsDocItmQuantity` | `QUAN(15)` | Quantity of Reference Items |
| `IncomingSalesOrdersNetAmtInDC` | `CURR(19)` | Incoming Sales Orders Net Value In Display Currency |
| `IncomingSalesOrdersQuantity` | `QUAN(15)` | Incoming Sales Orders Quantity |
| `IncomingCustReturnsNetAmtInDC` | `CURR(19)` | Net Amount of Customer Return Items in Display Currency |
| `IncomingCustReturnsQuantity` | `QUAN(15)` | Customer Return Item Quantity |
| `CustomerReturnAmountReturnRate` | `DEC(7)` | Return Rate (Value-Based) |
| `CustomerReturnQtyReturnRate` | `DEC(7)` | Return Rate (Quantity-Based) |
| `NumberOfIncomingCustRetItems` | `INT4(10)` | Number of Items in Customer Returns |
