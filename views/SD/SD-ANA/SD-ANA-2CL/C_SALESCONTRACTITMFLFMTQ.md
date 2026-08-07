---
name: C_SALESCONTRACTITMFLFMTQ
description: This CDS view provides sales contract fulfillment rates by various dimensions such as sales organization, customer, product, and employee responsible. It provides the prerequisites for answering the following business questions: To what extent are my contracts being fulfilled? Which contracts will expire soon? What are my top 10 contracts by target value?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESCONTRACTITMFLFMTQ')/$value
semantic_en: This CDS view provides sales contract fulfillment rates by various dimensions such as sales organization, customer, product, and employee responsible. It provides the prerequisites for answering the following business questions: To what extent are my contracts being fulfilled? Which contracts will expire soon? What are my top 10 contracts by target value?
keywords:
  - Sales Contract Fulfillment Rate - Query
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - contract
  - customer
  - lob:sales & distribution
  - product
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_SALESCONTRACTITMFLFMTQ

**This CDS view provides sales contract fulfillment rates by various dimensions such as sales organization, customer, product, and employee responsible. It provides the prerequisites for answering the following business questions: To what extent are my contracts being fulfilled? Which contracts will expire soon? What are my top 10 contracts by target value?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESCONTRACTITMFLFMTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContract` |  | |  |  | `CHAR(10)` | Sales Contract |
| `SalesContractItem` |  | |  |  | `NUMC(6)` | Sales Contract Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ResponsibleEmployee` |  | |  |  | `NUMC(8)` | Employee Responsible |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SDDocumentRejectionStatus` |  | |  |  | `CHAR(1)` | Rejection Status (Item) |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `SlsContrPeriodElapsedPercent` |  | |  |  | `DEC(9)` | Sales Contract Period Elapsed Percent |
| `SalesContractTargetAmountInDC` |  | |  |  | `CURR(19)` | Target Value of Sales Contracts in Display Currency |
| `SalesContractTargetValue` |  | |  |  | `CURR(19)` | Target Value of Sales Contracts in Display Currency |
| `SalesContractReleasedAmtInDC` |  | |  |  | `CURR(19)` | Released Value in Sales Contracts in Display Currency |
| `ReleasedNetAmount` |  | |  |  | `CURR(19)` | Released Value in Sales Contracts in Display Currency |
| `SalesContractFulfillmentRate` |  | |  |  | `INT1(3)` |  |
