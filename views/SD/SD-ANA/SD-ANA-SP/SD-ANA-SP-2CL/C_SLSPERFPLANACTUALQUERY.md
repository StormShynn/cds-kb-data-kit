---
name: C_SLSPERFPLANACTUALQUERY
description: This CDS view retrieves sales performance data, including plan and actual data. This CDS view provides the data to answer the following business questions: What's the planned sales value or sales quantity over a period? What's the actual sales value or sales quantity (based on incoming sales orders) over a period? What's the actual sales value or sales quantity (based on sales volume) over a period? Is the sales target reached as planned for a particular product? The system retrieves the actual data from sales documents if the plan data represents incoming sales orders, and from billing documents if the plan data represents sales volume. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SD-ANA-SP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSPERFPLANACTUALQUERY')/$value
semantic_en: This CDS view retrieves sales performance data, including plan and actual data. This CDS view provides the data to answer the following business questions: What's the planned sales value or sales quantity over a period? What's the actual sales value or sales quantity (based on incoming sales orders) over a period? What's the actual sales value or sales quantity (based on sales volume) over a period? Is the sales target reached as planned for a particular product? The system retrieves the actual data from sales documents if the plan data represents incoming sales orders, and from billing documents if the plan data represents sales volume. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Sales Performance Plan and Actual - Qry
  - Sales Performance Plan and Actual - Qry
  - Sales Performance Plan and Actual - Qry
  - Sales Performance Plan and Actual - Qry
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-ANA-SP-2CL
  - consumption-view
  - document
  - lob:sales & distribution
  - order
  - plan
  - product
  - sales-order
  - SD-ANA
  - SD-ANA-SP
  - SD-ANA-SP-2CL
  - metadata-only
---
# C_SLSPERFPLANACTUALQUERY

**This CDS view retrieves sales performance data, including plan and actual data. This CDS view provides the data to answer the following business questions: What's the planned sales value or sales quantity over a period? What's the actual sales value or sales quantity (based on incoming sales orders) over a period? What's the actual sales value or sales quantity (based on sales volume) over a period? Is the sales target reached as planned for a particular product? The system retrieves the actual data from sales documents if the plan data represents incoming sales orders, and from billing documents if the plan data represents sales volume. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSPERFPLANACTUALQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesPlanItemUUID` | `RAW(16)` | Sales Plan Item UUID |
| `SDDocument` | `CHAR(10)` | Sales and Distribution Document Number |
| `SDDocumentItem` | `NUMC(6)` | Sales and Distribution Document Item |
| `SalesDocumentType` | `CHAR(4)` | Sales Document Type |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `SalesPlanPurpose` | `CHAR(1)` | Purposes of Sales Planning |
| `SalesPlanPeriodName` | `CHAR(20)` | Sales Plan Period |
| `SalesPerformanceDate` | `DATS(8)` | Sales Performance Date |
| `SalesPerformanceYearMonth` | `NUMC(6)` | Month of Sales Performance |
| `SlsPerformanceYearQuarter` | `NUMC(5)` | Quarter of Sales Performance |
| `SalesPerformanceYear` | `NUMC(4)` | Year of Sales Performance |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `SalesDistrict` | `CHAR(6)` | Sales District |
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
| `Division` | `CHAR(2)` | Division |
| `Product` | `CHAR(40)` | Product |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` | `CHAR(3)` | Material Group 5 |
| `SalesEmployee` | `NUMC(8)` | Sales Employee |
| `Plant` | `CHAR(4)` | Plant |
| `ShippingType` | `CHAR(2)` | Shipping Type |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Country` | `CHAR(3)` | Country/Region Key |
| `BillToPartyCountry` | `CHAR(3)` | Destination Country/Region of Sales Order |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `BillToPartyRegion` | `CHAR(3)` | Region of Sales Order |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `SalesPlanAmountInDspCrcy` | `CURR(19)` | Sales Plan Amount in Display Currency |
| `SalesPerfActlAmtInDspCurrency` | `CURR(15)` | Sales Plan Actual Amount in Display Currency |
| `SalesPlanQuantity` | `QUAN(15)` | Planned Quantity |
| `SalesPlanUnit` | `UNIT(3)` | Unit of Measure Used in Sales Plans |
| `SalesPerfActualQtyInBaseUnit` | `QUAN(15)` | Sales Performance Actual Quantity In Base Unit |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `SalesPerformanceActualQuantity` | `QUAN(15)` | Sales Performance Actual Quantity |
| `SalesPerfActualQuantityUnit` | `UNIT(3)` | Sales Unit |
