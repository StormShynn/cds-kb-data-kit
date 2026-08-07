---
name: I_ADDRESSDEFAULTREPRESENTATION
description: "Addressdefaultrepresentation"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSDEFAULTREPRESENTATION

**Addressdefaultrepresentation**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` |  | |  |  | `CHAR(10)` | Person Number |
| `AddressRepresentationCode` |  | |  |  | `CHAR(1)` | Version ID for International Addresses |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `CorrespondenceLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `PrfrdCommMediumType` |  | |  |  | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `AddresseeFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `PersonGivenName` |  | |  |  | `CHAR(40)` | First Name |
| `PersonFamilyName` |  | |  |  | `CHAR(40)` | Last Name |
| `OrganizationName1` |  | |  |  | `CHAR(40)` | Name 1 |
| `OrganizationName2` |  | |  |  | `CHAR(40)` | Name 2 |
| `OrganizationName3` |  | |  |  | `CHAR(40)` | Name 3 |
| `OrganizationName4` |  | |  |  | `CHAR(40)` | Name 4 |
| `AddressSearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 |
| `AddressSearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 |
| `CityNumber` |  | |  |  | `CHAR(12)` | City code for city/street file |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `DistrictName` |  | |  |  | `CHAR(40)` | District |
| `VillageName` |  | |  |  | `CHAR(40)` | City (different from postal city) |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `CompanyPostalCode` |  | |  |  | `CHAR(10)` | Company Postal Code (for Large Customers) |
| `Street` |  | |  |  | `CHAR(12)` | Street Number for City/Street File |
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
| `POBox` |  | |  |  | `CHAR(10)` | PO Box |
| `POBoxAddrNonDeliverableReason` |  | |  |  | `CHAR(4)` | PO Box Address Undeliverable Flag |
| `POBoxIsWithoutNumber` |  | |  |  | `CHAR(1)` | Flag: PO Box Without Number |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
| `POBoxLobbyName` |  | |  |  | `CHAR(40)` | PO Box Lobby |
| `POBoxDeviatingCityName` |  | |  |  | `CHAR(40)` | PO Box city |
| `POBoxDeviatingCityCode` |  | |  |  | `CHAR(12)` | City PO box code (City file) |
| `POBoxDeviatingRegion` |  | |  |  | `CHAR(3)` | Region for PO Box (Country/Region, State, Province, ...) |
| `POBoxDeviatingCountry` |  | |  |  | `CHAR(3)` | PO Box of Country/Region |
| `CareOfName` |  | |  |  | `CHAR(40)` | c/o name |
| `DeliveryServiceTypeCode` |  | |  |  | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceNumber` |  | |  |  | `CHAR(10)` | Number of Delivery Service |
| `AddressTimeZone` |  | |  |  | `CHAR(6)` | Address Time Zone |
| `SecondaryRegion` |  | |  |  | `CHAR(8)` | County code for county |
| `SecondaryRegionName` |  | |  |  | `CHAR(40)` | County |
| `TertiaryRegion` |  | |  |  | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | |  |  | `CHAR(40)` | Township |
| `RegionalStructureCheckStatus` |  | |  |  | `CHAR(1)` | City File Test Status |
| `AddressGroup` |  | |  |  | `CHAR(4)` | Address Group (Key) (Business Address Services) |
| `_AddrAdditionalRepresentation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AddrAdditionalRepresentation` | `I_Address_2` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_AddrAdditionalRepresentation', '_OrganizationAddress', '_PersonAddress', '_EmailAddress', '_CurrentDfltEmailAddress', '_PhoneNumber', '_CurrentDfltLandlinePhoneNmbr', '_CurrentDfltMobilePhoneNumber', '_FaxNumber', '_CurrentDfltFaxNumber', '_UniformResourceIdentifier', '_MainWebsiteURL']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'I_AddressDefaultRprstn'
@EndUserText.label: 'Dflt Addr Rprstn of an Org or a Person'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #MIXED
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_AddressDefaultRepresentation
  as select from I_Address_2 as Address
  association [0..*] to I_Address_2 as _AddrAdditionalRepresentation on  $projection.AddressID                                   = _AddrAdditionalRepresentation.AddressID
                                                                     and $projection.AddressPersonID                             = _AddrAdditionalRepresentation.AddressPersonID
                                                                     and _AddrAdditionalRepresentation.AddressRepresentationCode is not initial
{
  key Address.AddressID,
      @ObjectModel.foreignKey.association: '_AddressPersonName'
      Address.AddressPersonID,
      @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
      Address.AddressRepresentationCode,
      Address.AddressObjectType,
      Address.CorrespondenceLanguage,
      Address.PrfrdCommMediumType,
      Address.AddresseeFullName,
      Address.PersonGivenName,
      Address.PersonFamilyName,
      Address.OrganizationName1,
      Address.OrganizationName2,
      Address.OrganizationName3,
      Address.OrganizationName4,
      Address.AddressSearchTerm1,
      Address.AddressSearchTerm2,
      Address.CityNumber,
      Address.CityName,
      Address.DistrictName,
      Address.VillageName,
      Address.PostalCode,
      Address.CompanyPostalCode,
      Address.Street,
      Address.StreetName,
      @EndUserText.label: 'Street Address Non-Deliverable Reason'
      Address.StreetAddrNonDeliverableReason,
      Address.StreetPrefixName1,
      Address.StreetPrefixName2,
      Address.StreetSuffixName1,
      Address.StreetSuffixName2,
      Address.HouseNumber,
      Address.HouseNumberSupplementText,
      Address.Building,
      Address.Floor,
      Address.RoomNumber,
      Address.Country,
      Address.Region,
      Address.FormOfAddress,
      Address.TaxJurisdiction,
      Address.TransportZone,
      Address.POBox,
      @EndUserText.label: 'PO Box Address Non-Deliverable Reason'
      Address.POBoxAddrNonDeliverableReason,
      Address.POBoxIsWithoutNumber,
      Address.POBoxPostalCode,
      Address.POBoxLobbyName,
      Address.POBoxDeviatingCityName,
      Address.POBoxDeviatingCityCode,
      Address.POBoxDeviatingRegion,
      Address.POBoxDeviatingCountry,
      Address.CareOfName,
      Address.DeliveryServiceTypeCode,
      Address.DeliveryServiceNumber,
      Address.AddressTimeZone,
      Address.SecondaryRegion,
      Address.SecondaryRegionName,
      Address.TertiaryRegion,
      Address.TertiaryRegionName,
      Address.RegionalStructureCheckStatus,
      Address.AddressGroup,

      /* Associations */
      Address._AddressGroup,
      Address._AddressObjectType,
      Address._AddressPersonName,
      Address._AddressRepresentationCode,
      Address._CorrespondenceLanguage,
      Address._Country,
      Address._CurrentDfltEmailAddress,
      Address._CurrentDfltFaxNumber,
      Address._CurrentDfltLandlinePhoneNmbr,
      Address._CurrentDfltMobilePhoneNumber,
      Address._DeliveryServiceTypeCode,
      Address._EmailAddress,
      Address._FaxNumber,
      Address._FormOfAddress,
      Address._MainWebsiteURL,
      Address._OrganizationAddress,
      Address._PersonAddress,
      Address._PhoneNumber,
      Address._POBoxAddrNonDeliverableReason,
      Address._POBoxDeviatingCityCode,
      Address._POBoxDeviatingCountry,
      Address._POBoxDeviatingRegion,
      Address._PostalCity,
      Address._PrfrdCommMediumType,
      Address._Region,
      Address._RegionalStructureCheckStatus,
      Address._SecondaryRegion,
      Address._Street,
      Address._StreetAddrNonDeliverableRsn,
      Address._TertiaryRegion,
      Address._TimeZone,
      Address._TransportationZone,
      Address._UniformResourceIdentifier,
      _AddrAdditionalRepresentation
}
where
  AddressRepresentationCode is initial
```
