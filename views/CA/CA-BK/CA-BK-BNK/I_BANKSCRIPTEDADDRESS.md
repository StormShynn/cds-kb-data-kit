---
name: I_BANKSCRIPTEDADDRESS
description: Bank Scripted Address
app_component: CA-BK-BNK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSCRIPTEDADDRESS')/$value
semantic_en: Bank Scripted Address
tags:
  - CA
  - CA-BK
  - CA-BK-BNK
  - component:CA-BK-BNK
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_BANKSCRIPTEDADDRESS

**Bank Scripted Address**

| Property | Value |
|---|---|
| App Component | `CA-BK-BNK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSCRIPTEDADDRESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` |  | |  |  | `CHAR(15)` | Bank Keys |
| `AddressRepresentationCode` |  | |  |  | `CHAR(1)` | Version ID for International Addresses |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` |  | |  |  | `CHAR(10)` | Person Number |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `CorrespondenceLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `PrfrdCommMediumType` |  | |  |  | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `AddresseeFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `LongBankName` |  | |  |  | `CHAR(80)` | Bank Name |
| `LongBankBranch` |  | |  |  | `CHAR(80)` | Bank Branch |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `DistrictName` |  | |  |  | `CHAR(40)` | District |
| `VillageName` |  | |  |  | `CHAR(40)` | City (different from postal city) |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `CompanyPostalCode` |  | |  |  | `CHAR(10)` | Company Postal Code (for Large Customers) |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `StreetAddrNonDeliverableReason` |  | |  |  | `CHAR(4)` | Street Address Undeliverable Flag |
| `StreetPrefixName1` |  | |  |  | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` |  | |  |  | `CHAR(40)` | Street 3 |
| `StreetSuffixName1` |  | |  |  | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` |  | |  |  | `CHAR(40)` | Street 5 |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | |  |  | `CHAR(10)` | House number supplement |
| `Building` |  | |  |  | `CHAR(20)` | Building (Number or Code) |
| `Floor` |  | |  |  | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | |  |  | `CHAR(10)` | Room or Apartment Number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `FormOfAddress` |  | |  |  | `CHAR(4)` | Form-of-Address Key |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `TransportZone` |  | |  |  | `CHAR(10)` | Transportation zone to or from which the goods are delivered |
| `AddressSearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 |
| `AddressSearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 |
| `POBox` |  | |  |  | `CHAR(10)` | PO Box |
| `POBoxAddrNonDeliverableReason` |  | |  |  | `CHAR(4)` | PO Box Address Undeliverable Flag |
| `POBoxIsWithoutNumber` |  | |  |  | `CHAR(1)` | Flag: PO Box Without Number |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
| `POBoxLobbyName` |  | |  |  | `CHAR(40)` | PO Box Lobby |
| `POBoxDeviatingCityName` |  | |  |  | `CHAR(40)` | PO Box city |
| `POBoxDeviatingRegion` |  | |  |  | `CHAR(3)` | Region for PO Box (Country/Region, State, Province, ...) |
| `POBoxDeviatingCountry` |  | |  |  | `CHAR(3)` | PO Box of Country/Region |
| `CareOfName` |  | |  |  | `CHAR(40)` | c/o name |
| `DeliveryServiceTypeCode` |  | |  |  | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceNumber` |  | |  |  | `CHAR(10)` | Number of Delivery Service |
| `AddressTimeZone` |  | |  |  | `CHAR(6)` | Address Time Zone |
| `SecondaryRegionName` |  | |  |  | `CHAR(40)` | County |
| `TertiaryRegionName` |  | |  |  | `CHAR(40)` | Township |
