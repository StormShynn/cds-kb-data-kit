---
name: C_SLSQTANCONVERSIONRATEQ
description: This CDS view provides quotation conversion rates by various dimensions such as sales organization, customer, product, and sales office, among others. It provides the prerequisites for answering the following business questions: What is the proportion of quotations that have been converted into sales orders? What is the net value of converted quotations? What is the net value of a given quotation? Is a given quotation still within its validity period? By how much does actual quotation conversion rate deviate from the predicted rate? What are my top 10 quotations by conversion rate? What are my top 10 quotations by net value?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSQTANCONVERSIONRATEQ')/$value
semantic_en: This CDS view provides quotation conversion rates by various dimensions such as sales organization, customer, product, and sales office, among others. It provides the prerequisites for answering the following business questions: What is the proportion of quotations that have been converted into sales orders? What is the net value of converted quotations? What is the net value of a given quotation? Is a given quotation still within its validity period? By how much does actual quotation conversion rate deviate from the predicted rate? What are my top 10 quotations by conversion rate? What are my top 10 quotations by net value?
keywords:
  - Sales Quotation Conversion Rate - Query
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - lob:sales & distribution
  - order
  - product
  - quotation
  - sales-order
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_SLSQTANCONVERSIONRATEQ

**This CDS view provides quotation conversion rates by various dimensions such as sales organization, customer, product, and sales office, among others. It provides the prerequisites for answering the following business questions: What is the proportion of quotations that have been converted into sales orders? What is the net value of converted quotations? What is the net value of a given quotation? Is a given quotation still within its validity period? By how much does actual quotation conversion rate deviate from the predicted rate? What are my top 10 quotations by conversion rate? What are my top 10 quotations by net value?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSQTANCONVERSIONRATEQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` |  | |  |  | `CHAR(10)` | Sales Quotation |
| `SalesQuotationItem` |  | |  |  | `NUMC(6)` | Sales Quotation Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ResponsibleEmployee` |  | |  |  | `NUMC(8)` | Employee Responsible |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `SalesQuotationNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Sales Quotation Net Amount In Display Currency |
| `CnvrtdSalesQtanNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Converted Sales Quoation Net Amount in Display Currency |
| `SalesQuotationConversionRate` |  | |  |  | `DEC(7)` | Sales Quotation Conversion Rate |
| `SlsQtanPeriodElapsedPercent` |  | |  |  | `DEC(9)` | Sales Quotation Period Elapsed Percent |
| `SlsQtanPeriodDueDays` |  | |  |  | `INT4(10)` | Days Before Expiry of Quotation |
| `PrdtvSlsQtanCnvrsnAmtInDspCrcy` |  | |  |  | `CURR(19)` | Predicted Order Value in Display Currency (Deprecated) |
| `PrdtvSlsQtanCnvrsnRate` |  | |  |  | `DEC(7)` | Predicted Sales Quotation Conversion Rate (Deprecated) |
