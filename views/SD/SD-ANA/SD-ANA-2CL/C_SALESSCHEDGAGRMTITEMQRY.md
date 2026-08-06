---
name: C_SALESSCHEDGAGRMTITEMQRY
description: This CDS view provides prerequisites for analyzing to what extent sales scheduling agreements are being processed. It answers the following business questions about sales scheduling agreements with delivery schedules: What is the cumulative delivered quantity? What is the cumulative issued quantity? What is the cumulative quantity received by customer?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESSCHEDGAGRMTITEMQRY')/$value
semantic_en: This CDS view provides prerequisites for analyzing to what extent sales scheduling agreements are being processed. It answers the following business questions about sales scheduling agreements with delivery schedules: What is the cumulative delivered quantity? What is the cumulative issued quantity? What is the cumulative quantity received by customer?
keywords:
  - Sales Scheduling Agreement Item - Query
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - delivery
  - lob:sales & distribution
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_SALESSCHEDGAGRMTITEMQRY

**This CDS view provides prerequisites for analyzing to what extent sales scheduling agreements are being processed. It answers the following business questions about sales scheduling agreements with delivery schedules: What is the cumulative delivered quantity? What is the cumulative issued quantity? What is the cumulative quantity received by customer?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESSCHEDGAGRMTITEMQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesSchedulingAgreement` | `CHAR(10)` | Sales Scheduling Agreement |
| `SalesSchedulingAgreementItem` | `NUMC(6)` | Sales Scheduling Agreement Item |
| `SchedulingAgreementReleaseType` | `CHAR(1)` | Release type |
| `SalesSchedgAgrmtType` | `CHAR(4)` | Sales Scheduling Agreement Type |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Time at Which Record Was Created |
| `CreationDateYear` | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` | `NUMC(6)` | Year/Month of Creation |
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
| `MaterialByCustomer` | `CHAR(35)` | Material Number Used by Customer |
| `Division` | `CHAR(2)` | Division |
| `Plant` | `CHAR(4)` | Plant (Own or External) |
| `Product` | `CHAR(40)` | Product |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` | `CHAR(3)` | Material Group 5 |
| `BillingCompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `CustomerFiscalYear` | `NUMC(4)` | Customer Fiscal Year |
| `OrderQuantityUnit` | `UNIT(3)` | Sales Unit |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `CumulativeDeliveredQuantity` | `QUAN(15)` | Cumulative qty for delivery/MAIS in base unit of measure |
| `CumulativeIssuedQuantity` | `QUAN(15)` | GI Posted Cumulative Delivered Quantity |
| `CumulativeReceiptQuantity` | `QUAN(15)` | Cumulative Quantity Received by Customer |
