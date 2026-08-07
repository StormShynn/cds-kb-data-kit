---
name: C_UPCGSRVCCONTRITEMQUERY
description: Upcoming Service Contract Item - Query
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_UPCGSRVCCONTRITEMQUERY')/$value
semantic_en: Upcoming Service Contract Item - Query
tags:
  - CRM
  - component:CRM-S4-ANA-CDS-2CL
  - consumption-view
  - contract
  - CRM-S4
  - CRM-S4-ANA
  - CRM-S4-ANA-CDS
  - CRM-S4-ANA-CDS-2CL
  - metadata-only
---
# C_UPCGSRVCCONTRITEMQUERY

**Upcoming Service Contract Item - Query**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_UPCGSRVCCONTRITEMQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` |  | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceContractDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceContractItemProduct` |  | |  |  | `CHAR(40)` | Product |
| `ServiceContractItemStartDate` |  | |  |  | `DATS(8)` |  |
| `ServiceContractItemEndDate` |  | |  |  | `DATS(8)` |  |
| `SrvcContrStartMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `SrvcContrStartQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `SrvcContrStartYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `SrvcContrEndMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `SrvcContrEndQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `SrvcContrEndYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ServiceDocItemCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceContractItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceContractItemCanclnParty` |  | |  |  | `CHAR(4)` | Cancelling Party |
| `ServiceContractItmCanclnReason` |  | |  |  | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `RespEmployeeBusinessPartnerId` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `ServiceContractItemNetAmount` |  | |  |  | `CURR(15)` |  |
| `NmbrOfServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `ExprdSrvcContrItemNetAmount` |  | |  |  | `CURR(15)` |  |
| `ExprgSrvcContrItemNetAmount` |  | |  |  | `CURR(15)` |  |
| `NrOfExprgServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `CancldSrvcContrItemNetAmount` |  | |  |  | `CURR(15)` |  |
| `NrOfCancldServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `SrvcContrItemLostNetAmount` |  | |  |  | `CURR(15)` |  |
