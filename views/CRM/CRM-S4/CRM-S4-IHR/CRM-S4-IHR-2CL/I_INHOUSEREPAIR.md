---
name: I_INHOUSEREPAIR
description: In-House Service
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIR')/$value
semantic_en: In-House Service
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
  - metadata-only
---
# I_INHOUSEREPAIR

**In-House Service**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIR')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CustMgmtObjectType` | `CHAR(10)` | Business Trans. Cat. |
| `InHouseRepair` | `CHAR(10)` | In-House Repair ID |
| `InHouseRepairUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `InHouseRepairCharUUID` | `CHAR(32)` | Object GUID in Character Format |
| `InhRepairType` | `CHAR(4)` | Business Transaction Type |
| `PostingDate` | `DATS(8)` | Created On |
| `CreationDateTime` | `DEC(15)` | Created At |
| `CreatedByUser` | `CHAR(12)` | User that Created the Transaction |
| `LastChangeDateTime` | `DEC(15)` | Changed At |
| `LastChangedByUser` | `CHAR(12)` | Transaction Last Changed By |
| `InhRepairStatus` | `CHAR(4)` | In-House Repair Status |
| `InhRepairHasError` | `CHAR(1)` | Error Status |
| `InhRepairIsOpen` | `CHAR(1)` | Status "Open" |
| `SoldToParty` | `CHAR(10)` | Sold-To Party |
| `ContactPerson` | `CHAR(10)` | Contact Person |
| `ShipToParty` | `CHAR(10)` | Ship-To Party |
| `ResponsibleEmployee` | `CHAR(10)` | Employee Responsible |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `SalesOrganizationOrgUnitID` | `CHAR(14)` | Sales Organization |
| `SalesOfficeOrgUnitID` | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` | `CHAR(14)` | Sales Group |
| `ResponsibleSalesOrganization` | `CHAR(14)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `ReferenceCustomerReturn` | `CHAR(10)` | Sales and Distribution Document Number |
| `RefRetsMgmtProcess` | `CHAR(10)` | Process Identification Number |
