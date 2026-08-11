---
name: I_BUSPARTSCRIPTEDPERSONADDRESS
description: "International version of a business partner address"
app_component: AP-MD-BP-RAP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTSCRIPTEDPERSONADDRESS')/$value
semantic_en: "International version of a business partner address"
semantic_vi: "International version of a business partner address — CDS view giao diện dựa trên but020."
keywords:
  - "international"
  - "version"
  - "business"
  - "partner"
  - "address"
  - "number"
  - "representation"
  - "code"
  - "validity"
  - "start"
  - "date"
  - "time"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - AP-MD-BP-RAP
  - bo:salesorder
  - component:AP-MD-BP-RAP
  - interface-view
---
# I_BUSPARTSCRIPTEDPERSONADDRESS

**International version of a business partner address**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTSCRIPTEDPERSONADDRESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `AddressNumber` | ✓ | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `AddressRepresentationCode` | ✓ | |  |  | `CHAR(1)` | Version ID for International Addresses |
| `ValidityStartDateTime` |  | |  | `addr_valid_from` | `DEC(15)` | Validity Start of a Business Partner Address |
| `ValidityEndDateTime` |  | |  | `addr_valid_to` | `DEC(15)` | Validity End of a Business Partner Address |
| `BusinessPartnerAddressUUID` |  | |  | `bintohex( BusinessPartnerAddress.address_guid )` | `CHAR(32)` |  |
| `CareOfName` |  | |  |  | `CHAR(40)` | c/o name |
| `AdditionalStreetSuffixName` |  | |  |  | `CHAR(40)` | Street 5 |
| `CorrespondenceLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `PrfrdCommMediumType` |  | |  |  | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `POBox` |  | |  |  | `CHAR(10)` | PO Box |
| `POBoxIsWithoutNumber` |  | |  |  | `CHAR(1)` | Flag: PO Box Without Number |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
| `POBoxLobbyName` |  | |  |  | `CHAR(40)` | PO Box Lobby |
| `POBoxDeviatingCityName` |  | |  |  | `CHAR(40)` | PO Box city |
| `POBoxDeviatingRegion` |  | |  |  | `CHAR(3)` | Region for PO Box (Country/Region, State, Province, ...) |
| `POBoxDeviatingCountry` |  | |  |  | `CHAR(3)` | PO Box of Country/Region |
| `DeliveryServiceTypeCode` |  | |  |  | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceNumber` |  | |  |  | `CHAR(10)` | Number of Delivery Service |
| `AddressTimeZone` |  | |  |  | `CHAR(6)` | Address Time Zone |
| `CityFileTestStatus` |  | |  |  | `CHAR(1)` | City File Test Status |
| `AddressNonDeliverableReason` |  | |  |  | `CHAR(4)` | Street Address Undeliverable Flag |
| `PostBoxNonDeliverableReason` |  | |  |  | `CHAR(4)` | PO Box Address Undeliverable Flag |
| `FullName` |  | |  |  | `CHAR(80)` | Full name of a party (Bus. Partner, Org. Unit, Doc. address) |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `District` |  | |  |  | `CHAR(40)` | District |
| `DistrictName` |  | |  | `District` | `CHAR(40)` | District |
| `HomeCityName` |  | |  |  | `CHAR(40)` | City (different from postal city) |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `CompanyPostalCode` |  | |  |  | `CHAR(10)` | Company Postal Code (for Large Customers) |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `StreetPrefixName` |  | |  |  | `CHAR(40)` | Street 2 |
| `AdditionalStreetPrefixName` |  | |  |  | `CHAR(40)` | Street 3 |
| `StreetSuffixName` |  | |  |  | `CHAR(40)` | Street 4 |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | |  |  | `CHAR(10)` | House number supplement |
| `Building` |  | |  |  | `CHAR(20)` | Building (Number or Code) |
| `Floor` |  | |  |  | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | |  |  | `CHAR(10)` | Room or Apartment Number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `County` |  | |  |  | `CHAR(40)` | County |
| `BPCountyText` |  | |  | `County` | `CHAR(40)` | County |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `TransportZone` |  | |  |  | `CHAR(10)` | Transportation zone to or from which the goods are delivered |
| `Person` |  | |  |  | `CHAR(10)` | Person Number |
| `FormOfAddress` |  | |  |  | `CHAR(4)` | Form-of-Address Key |
| `SearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 |
| `SearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name |
| `BusinessPartnerBirthName` |  | |  |  | `CHAR(40)` | Name of person at birth |
| `MiddleName` |  | |  |  | `CHAR(40)` | Middle name or second forename of a person |
| `AdditionalLastName` |  | |  |  | `CHAR(40)` | Other Last Name of a Person |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `AcademicTitle` |  | |  |  | `CHAR(4)` | Academic Title: Key |
| `AcademicTitle2` |  | |  |  | `CHAR(4)` | Second academic title (key) |
| `LastNamePrefix` |  | |  |  | `CHAR(4)` | Name Prefix (Key) |
| `LastNameSecondPrefix` |  | |  |  | `CHAR(4)` | 2nd name prefix (key) |
| `BusinessPartnerSupplementName` |  | |  |  | `CHAR(4)` | Name supplement, e.g. noble title (key) |
| `BusinessPartnerNicknameLabel` |  | |  |  | `CHAR(40)` | Nickname or name used |
| `Initials` |  | |  |  | `CHAR(10)` | "Middle Initial" or personal initials |
| `NameFormat` |  | |  |  | `CHAR(2)` | Name format |
| `NameCountry` |  | |  |  | `CHAR(3)` | Country/Region for Name Format Rule |
| `BPFirstNameSearchHelp` |  | |  |  | `CHAR(25)` | First Name in Uppercase for Search Help |
| `BPLastNameSearchHelp` |  | |  |  | `CHAR(25)` | Last Name in Uppercase for Search Help |
| `_ScriptedAddress` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPProtectedAddress` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ScriptedAddress` | `I_ScriptedOrganizationAddress` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BPProtectedAddress` | `I_BPProtectedAddress` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTSCRIPTEDPERSONADDRESS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTSCRIPTEDPERSONADDRESS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPSCRPTPRSADDR'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_ScriptedAddress' ]
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'International version of a business partner address'
define view I_BusPartScriptedPersonAddress
  as select from but020                  as BusinessPartnerAddress
    inner join   I_ScriptedPersonAddress as ScriptedAddress on BusinessPartnerAddress.addrnumber = ScriptedAddress.AddressNumber
  association [1..1] to I_ScriptedOrganizationAddress as _ScriptedAddress    on  BusinessPartnerAddress.addrnumber     = _ScriptedAddress.AddressNumber
                                                                             and $projection.AddressRepresentationCode = _ScriptedAddress.AddressRepresentationCode
  association [1..1] to I_BusinessPartner             as _BusinessPartner    on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BPProtectedAddress          as _BPProtectedAddress on  $projection.BusinessPartner = _BPProtectedAddress.BusinessPartner
                                                                             and $projection.AddressNumber   = _BPProtectedAddress.AddressID  
{
  key BusinessPartnerAddress.partner                  as BusinessPartner,
  key BusinessPartnerAddress.addrnumber               as AddressNumber,
  key ScriptedAddress.AddressRepresentationCode       as AddressRepresentationCode,
      BusinessPartnerAddress.addr_valid_from          as ValidityStartDateTime,
      BusinessPartnerAddress.addr_valid_to            as ValidityEndDateTime,
      bintohex( BusinessPartnerAddress.address_guid ) as BusinessPartnerAddressUUID,

      //ScriptedAddress.AddressNumber,
      ScriptedAddress.CareOfName,
      ScriptedAddress.AdditionalStreetSuffixName,
      ScriptedAddress.CorrespondenceLanguage,
      ScriptedAddress.PrfrdCommMediumType,
      ScriptedAddress.POBox,
      ScriptedAddress.POBoxIsWithoutNumber,
      ScriptedAddress.POBoxPostalCode,
      ScriptedAddress.POBoxLobbyName,
      ScriptedAddress.POBoxDeviatingCityName,
      ScriptedAddress.POBoxDeviatingRegion,
      ScriptedAddress.POBoxDeviatingCountry,
      ScriptedAddress.DeliveryServiceTypeCode,
      ScriptedAddress.DeliveryServiceNumber,
      ScriptedAddress.AddressTimeZone,
      ScriptedAddress.CityFileTestStatus,
      ScriptedAddress.AddressNonDeliverableReason,
      ScriptedAddress.PostBoxNonDeliverableReason,
      ScriptedAddress.FullName,
      ScriptedAddress.CityName,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'DistrictName'
      ScriptedAddress.District,
      ScriptedAddress.District as DistrictName,
      ScriptedAddress.HomeCityName,
      ScriptedAddress.PostalCode,
      ScriptedAddress.CompanyPostalCode,
      ScriptedAddress.StreetName,
      ScriptedAddress.StreetPrefixName,
      ScriptedAddress.AdditionalStreetPrefixName,
      ScriptedAddress.StreetSuffixName,
      ScriptedAddress.HouseNumber,
      ScriptedAddress.HouseNumberSupplementText,
      ScriptedAddress.Building,
      ScriptedAddress.Floor,
      ScriptedAddress.RoomNumber,
      ScriptedAddress.Country,
      ScriptedAddress.Region,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'BPCountyText'
      ScriptedAddress.County,
      ScriptedAddress.County as BPCountyText,
      ScriptedAddress.TaxJurisdiction,
      ScriptedAddress.TransportZone,
      ScriptedAddress.Person,
      ScriptedAddress.FormOfAddress,
      ScriptedAddress.SearchTerm1,
      ScriptedAddress.SearchTerm2,
      ScriptedAddress.FirstName,
      ScriptedAddress.LastName,
      ScriptedAddress.BusinessPartnerBirthName,
      ScriptedAddress.MiddleName,
      ScriptedAddress.AdditionalLastName,
      ScriptedAddress.PersonFullName,
      ScriptedAddress.AcademicTitle,
      ScriptedAddress.AcademicTitle2,
      ScriptedAddress.LastNamePrefix,
      ScriptedAddress.LastNameSecondPrefix,
      ScriptedAddress.BusinessPartnerSupplementName,
      ScriptedAddress.BusinessPartnerNicknameLabel,
      ScriptedAddress.Initials,
      ScriptedAddress.NameFormat,
      ScriptedAddress.NameCountry,
      ScriptedAddress.BPFirstNameSearchHelp,
      ScriptedAddress.BPLastNameSearchHelp,

      _BusinessPartner,
      _ScriptedAddress,
      _BPProtectedAddress
}
```
