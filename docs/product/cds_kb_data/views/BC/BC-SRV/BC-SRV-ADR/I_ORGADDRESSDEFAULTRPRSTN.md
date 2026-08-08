---
name: I_ORGADDRESSDEFAULTRPRSTN
description: "Orgaddressdefaultrprstn"
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
# I_ORGADDRESSDEFAULTRPRSTN

**Orgaddressdefaultrprstn**

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
| `AddresseeName1` |  | |  |  | `CHAR(40)` | Name 1 |
| `AddresseeName2` |  | |  |  | `CHAR(40)` | Name 2 |
| `AddresseeName3` |  | |  |  | `CHAR(40)` | Name 3 |
| `AddresseeName4` |  | |  |  | `CHAR(40)` | Name 4 |
| `AddressSearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 |
| `AddressSearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 |
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
| `_AddrAdditionalRepresentation` | `I_OrganizationAddress` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics.dataCategory: #DIMENSION
@AccessControl.privilegedAssociations: ['_AddrAdditionalRepresentation', '_EmailAddress', '_CurrentDfltEmailAddress', '_PhoneNumber', '_CurrentDfltLandlinePhoneNmbr', '_CurrentDfltMobilePhoneNumber', '_FaxNumber', '_CurrentDfltFaxNumber', '_UniformResourceIdentifier', '_MainWebsiteURL']
@EndUserText.label: 'Default Representation of an Org Address'
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
define view entity I_OrgAddressDefaultRprstn
  as select from I_OrganizationAddress as OrganizationAddress
  association [0..*] to I_OrganizationAddress as _AddrAdditionalRepresentation on  $projection.AddressID                                   = _AddrAdditionalRepresentation.AddressID
                                                                               and $projection.AddressPersonID                             = _AddrAdditionalRepresentation.AddressPersonID
                                                                               and _AddrAdditionalRepresentation.AddressRepresentationCode is not initial
{
  key OrganizationAddress.AddressID,
      @ObjectModel.foreignKey.association: '_AddressPersonName'
      OrganizationAddress.AddressPersonID,
      @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressRepresentationCode'
      OrganizationAddress.AddressRepresentationCode,
      @ObjectModel.foreignKey.association: '_AddressObjectType'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressObjectType'
      OrganizationAddress.AddressObjectType,
      @ObjectModel.foreignKey.association: '_CorrespondenceLanguage'
      OrganizationAddress.CorrespondenceLanguage,
      @ObjectModel.foreignKey.association: '_PrfrdCommMediumType'
      @ObjectModel.sapObjectNodeTypeReference: 'CommunicationMediumType'
      OrganizationAddress.PrfrdCommMediumType,
      OrganizationAddress.AddresseeFullName,
      @ObjectModel.foreignKey.association: '_PostalCity'
      @ObjectModel.sapObjectNodeTypeReference: 'CityNumber'
      OrganizationAddress.CityNumber,
      OrganizationAddress.CityName,
      OrganizationAddress.DistrictName,
      OrganizationAddress.VillageName,
      OrganizationAddress.PostalCode,
      OrganizationAddress.CompanyPostalCode,
      @ObjectModel.foreignKey.association: '_Street'
      @ObjectModel.sapObjectNodeTypeReference: 'Street'
      OrganizationAddress.Street,
      OrganizationAddress.StreetName,
      @ObjectModel.foreignKey.association: '_StreetAddrNonDeliverableRsn'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressNonDeliverableReason'
      @EndUserText.label: 'Street Address Non-Deliverable Reason'
      OrganizationAddress.StreetAddrNonDeliverableReason,
      OrganizationAddress.StreetPrefixName1,
      OrganizationAddress.StreetPrefixName2,
      OrganizationAddress.StreetSuffixName1,
      OrganizationAddress.StreetSuffixName2,
      OrganizationAddress.HouseNumber,
      OrganizationAddress.HouseNumberSupplementText,
      OrganizationAddress.Building,
      OrganizationAddress.Floor,
      OrganizationAddress.RoomNumber,
      @ObjectModel.foreignKey.association: '_Country'
      @ObjectModel.sapObjectNodeTypeReference: 'Country'
      OrganizationAddress.Country,
      @ObjectModel.foreignKey.association: '_Region'
      @ObjectModel.sapObjectNodeTypeReference: 'Region'
      OrganizationAddress.Region,
      @ObjectModel.foreignKey.association: '_FormOfAddress'
      @ObjectModel.sapObjectNodeTypeReference: 'FormOfAddress'
      OrganizationAddress.FormOfAddress,
      OrganizationAddress.AddresseeName1,
      OrganizationAddress.AddresseeName2,
      OrganizationAddress.AddresseeName3,
      OrganizationAddress.AddresseeName4,
      OrganizationAddress.AddressSearchTerm1,
      OrganizationAddress.AddressSearchTerm2,
      OrganizationAddress.TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_TransportationZone'
      @ObjectModel.sapObjectNodeTypeReference: 'TransportationZone'
      OrganizationAddress.TransportZone,
      OrganizationAddress.POBox,
      @ObjectModel.foreignKey.association: '_POBoxAddrNonDeliverableReason'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressNonDeliverableReason'
      @EndUserText.label: 'PO Box Address Non-Deliverable Reason'
      OrganizationAddress.POBoxAddrNonDeliverableReason,
      OrganizationAddress.POBoxIsWithoutNumber,
      OrganizationAddress.POBoxPostalCode,
      OrganizationAddress.POBoxLobbyName,
      OrganizationAddress.POBoxDeviatingCityName,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingCityCode'
      @ObjectModel.sapObjectNodeTypeReference: 'CityNumber'
      OrganizationAddress.POBoxDeviatingCityCode,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'Region'
      OrganizationAddress.POBoxDeviatingRegion,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingCountry'
      @ObjectModel.sapObjectNodeTypeReference: 'Country'
      OrganizationAddress.POBoxDeviatingCountry,
      OrganizationAddress.CareOfName,
      @ObjectModel.foreignKey.association: '_DeliveryServiceTypeCode'
      @ObjectModel.sapObjectNodeTypeReference: 'DeliveryServiceTypeCode'
      OrganizationAddress.DeliveryServiceTypeCode,
      OrganizationAddress.DeliveryServiceNumber,
      @ObjectModel.foreignKey.association: '_TimeZone'
      @ObjectModel.sapObjectNodeTypeReference: 'TimeZone'
      OrganizationAddress.AddressTimeZone,
      @ObjectModel.foreignKey.association: '_SecondaryRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'SecondaryRegion'
      OrganizationAddress.SecondaryRegion,
      OrganizationAddress.SecondaryRegionName,
      @ObjectModel.foreignKey.association: '_TertiaryRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'TertiaryRegion'
      OrganizationAddress.TertiaryRegion,
      OrganizationAddress.TertiaryRegionName,
      @ObjectModel.foreignKey.association: '_RegionalStructureCheckStatus'
      @ObjectModel.sapObjectNodeTypeReference: 'RegionalStructureCheckStatus'
      OrganizationAddress.RegionalStructureCheckStatus,
      @ObjectModel.foreignKey.association: '_AddressGroup'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressGroup'
      OrganizationAddress.AddressGroup,

      /* Associations */
      OrganizationAddress._AddressGroup,
      OrganizationAddress._AddressObjectType,
      OrganizationAddress._AddressPersonName,
      OrganizationAddress._AddressRepresentationCode,
      OrganizationAddress._CorrespondenceLanguage,
      OrganizationAddress._Country,
      OrganizationAddress._CurrentDfltEmailAddress,
      OrganizationAddress._CurrentDfltFaxNumber,
      OrganizationAddress._CurrentDfltLandlinePhoneNmbr,
      OrganizationAddress._CurrentDfltMobilePhoneNumber,
      OrganizationAddress._DeliveryServiceTypeCode,
      OrganizationAddress._EmailAddress,
      OrganizationAddress._FaxNumber,
      OrganizationAddress._FormOfAddress,
      OrganizationAddress._MainWebsiteURL,
      OrganizationAddress._PhoneNumber,
      OrganizationAddress._POBoxAddrNonDeliverableReason,
      OrganizationAddress._POBoxDeviatingCityCode,
      OrganizationAddress._POBoxDeviatingCountry,
      OrganizationAddress._POBoxDeviatingRegion,
      OrganizationAddress._PostalCity,
      OrganizationAddress._PrfrdCommMediumType,
      OrganizationAddress._Region,
      OrganizationAddress._RegionalStructureCheckStatus,
      OrganizationAddress._SecondaryRegion,
      OrganizationAddress._Street,
      OrganizationAddress._StreetAddrNonDeliverableRsn,
      OrganizationAddress._TertiaryRegion,
      OrganizationAddress._TimeZone,
      OrganizationAddress._TransportationZone,
      OrganizationAddress._UniformResourceIdentifier,
      _AddrAdditionalRepresentation
}
where
  OrganizationAddress.AddressRepresentationCode is initial
```
