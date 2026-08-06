---
name: I_WORKASSGMTADDRESSDEX
description: Work Assignment Address Details
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTADDRESSDEX')/$value
semantic_en: Work Assignment Address Details
tags:
  - CA
  - bo:salesorganization
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKASSGMTADDRESSDEX

**Work Assignment Address Details**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTADDRESSDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WorkAssignmentBusinessPartner` | `CHAR(10)` | Business Partner Number |
| `AddressNumber` | `CHAR(10)` | Address Number |
| `WorkAssignment` | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentExternalID` | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` | `CHAR(100)` | External Person ID |
| `StartDate` | `DATS(8)` | Start Date |
| `EndDate` | `DATS(8)` | End Date |
| `Country` | `CHAR(3)` | Country/Region Key |
| `PostalCode` | `CHAR(10)` | City Postal Code |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SecondaryRegion` | `CHAR(8)` | County code for county |
| `SecondaryRegionName` | `CHAR(40)` | County |
| `TertiaryRegion` | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` | `CHAR(40)` | Township |
| `CityName` | `CHAR(40)` | City |
| `DistrictName` | `CHAR(40)` | District |
| `StreetPrefixName1` | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` | `CHAR(40)` | Street 3 |
| `StreetName` | `CHAR(60)` | Street |
| `StreetSuffixName1` | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` | `CHAR(40)` | Street 5 |
| `HouseNumber` | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` | `CHAR(10)` | House number supplement |
| `Floor` | `CHAR(10)` | Floor in Building |
| `RoomNumber` | `CHAR(10)` | Room or Apartment Number |
| `CareOfName` | `CHAR(40)` | c/o name |
| `POBoxPostalCode` | `CHAR(10)` | PO Box Postal Code |
| `IsBlocked` | `CHAR(1)` | Blocked Indicator |
| `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` | `CHAR(1)` | BP: Data Controller Set Flag |
| `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
