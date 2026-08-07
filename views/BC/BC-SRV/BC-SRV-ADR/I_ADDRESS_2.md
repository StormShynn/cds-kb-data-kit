---
name: I_ADDRESS_2
description: "Address 2"
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
# I_ADDRESS_2

**Address 2**

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
| `AddressPersonID` | ✓ | |  |  | `CHAR(10)` | Person Number |
| `AddressRepresentationCode` | ✓ | |  |  | `CHAR(1)` | Version ID for International Addresses |
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
| `DistrictNumber` |  | |  |  | `CHAR(8)` | District code for City and Street file |
| `Village` |  | |  |  | `CHAR(12)` | Different city for city/street file |
| `RegionalStructureGroup` |  | |  |  | `CHAR(8)` | Regional structure grouping |
| `AddressCreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `AddressCreatedOnDateTime` |  | |  |  | `UTCL(27)` | Creation Date Time |
| `AddressChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `AddressChangedOnDateTime` |  | |  |  | `UTCL(27)` | Last Change Date Time |
| `_OrganizationAddress` | | ✓ | | | | |
| `_PersonAddress` | | ✓ | | | | |
| `_EmailAddress` | | ✓ | | | | |
| `_CurrentDfltEmailAddress` | | ✓ | | | | |
| `_PhoneNumber` | | ✓ | | | | |
| `_CurrentDfltLandlinePhoneNmbr` | | ✓ | | | | |
| `_CurrentDfltMobilePhoneNumber` | | ✓ | | | | |
| `_FaxNumber` | | ✓ | | | | |
| `_CurrentDfltFaxNumber` | | ✓ | | | | |
| `_UniformResourceIdentifier` | | ✓ | | | | |
| `_MainWebsiteURL` | | ✓ | | | | |
| `_AddressRemark` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrganizationAddress` | `I_OrganizationAddress` | [0..1] |
| `_PersonAddress` | `I_PersonAddress` | [0..1] |
| `_EmailAddress` | `I_AddressEmailAddress_2` | [0..*] |
| `_CurrentDfltEmailAddress` | `I_AddrCurDefaultEmailAddress` | [0..1] |
| `_PhoneNumber` | `I_AddressPhoneNumber_2` | [0..*] |
| `_CurrentDfltLandlinePhoneNmbr` | `I_AddrCurDfltLandlinePhoneNmbr` | [0..1] |
| `_CurrentDfltMobilePhoneNumber` | `I_AddrCurDfltMobilePhoneNumber` | [0..1] |
| `_FaxNumber` | `I_AddressFaxNumber_2` | [0..*] |
| `_CurrentDfltFaxNumber` | `I_AddrCurDefaultFaxNumber` | [0..1] |
| `_UniformResourceIdentifier` | `I_AddressURI` | [0..*] |
| `_MainWebsiteURL` | `I_AddressMainWebsiteURL` | [0..1] |
| `_AddressRemark` | `I_AddressRemark_2` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics : {
          dataCategory: #DIMENSION,
          dataExtraction: {
           enabled: true }
           }
@AccessControl.privilegedAssociations: ['_OrganizationAddress', '_PersonAddress', '_EmailAddress', '_CurrentDfltEmailAddress', '_PhoneNumber', '_CurrentDfltLandlinePhoneNmbr', '_CurrentDfltMobilePhoneNumber', '_FaxNumber', '_CurrentDfltFaxNumber', '_UniformResourceIdentifier', '_MainWebsiteURL']
@EndUserText.label: 'Address of an Organization or a Person'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.sapObjectNodeType.name: 'Address'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_Address_2
  as select from P_Address_2 as Address
  association [0..1] to I_OrganizationAddress          as _OrganizationAddress          on  _OrganizationAddress.AddressID                 = $projection.AddressID
                                                                                        and _OrganizationAddress.AddressRepresentationCode = $projection.AddressRepresentationCode
                                                                                        and _OrganizationAddress.AddressPersonID           = $projection.AddressPersonID
                                                                                        and $projection.AddressObjectType                  = '1'

  association [0..1] to I_PersonAddress                as _PersonAddress                on  _PersonAddress.AddressID                 = $projection.AddressID
                                                                                        and _PersonAddress.AddressPersonID           = $projection.AddressPersonID
                                                                                        and _PersonAddress.AddressRepresentationCode = $projection.AddressRepresentationCode
                                                                                        and $projection.AddressObjectType            = '2'

  association [0..*] to I_AddressEmailAddress_2        as _EmailAddress                 on  _EmailAddress.AddressID       = $projection.AddressID
                                                                                        and _EmailAddress.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDefaultEmailAddress   as _CurrentDfltEmailAddress      on  _CurrentDfltEmailAddress.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltEmailAddress.AddressPersonID = $projection.AddressPersonID

  association [0..*] to I_AddressPhoneNumber_2         as _PhoneNumber                  on  _PhoneNumber.AddressID       = $projection.AddressID
                                                                                        and _PhoneNumber.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDfltLandlinePhoneNmbr as _CurrentDfltLandlinePhoneNmbr on  _CurrentDfltLandlinePhoneNmbr.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltLandlinePhoneNmbr.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDfltMobilePhoneNumber as _CurrentDfltMobilePhoneNumber on  _CurrentDfltMobilePhoneNumber.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltMobilePhoneNumber.AddressPersonID = $projection.AddressPersonID

  association [0..*] to I_AddressFaxNumber_2           as _FaxNumber                    on  _FaxNumber.AddressID       = $projection.AddressID
                                                                                        and _FaxNumber.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDefaultFaxNumber      as _CurrentDfltFaxNumber         on  _CurrentDfltFaxNumber.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltFaxNumber.AddressPersonID = $projection.AddressPersonID

  association [0..*] to I_AddressURI                   as _UniformResourceIdentifier    on  _UniformResourceIdentifier.AddressID       = $projection.AddressID
                                                                                        and _UniformResourceIdentifier.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddressMainWebsiteURL        as _MainWebsiteURL               on  _MainWebsiteURL.AddressID       = $projection.AddressID
                                                                                        and _MainWebsiteURL.AddressPersonID = $projection.AddressPersonID
                                                                                        
  association [0..*] to I_AddressRemark_2              as _AddressRemark                on   _AddressRemark.AddressID                  = $projection.AddressID
                                                                                        and  _AddressRemark.AddressRepresentationCode  =  $projection.AddressRepresentationCode                                                                                  
{
  key Address.AddressID,
  @ObjectModel.foreignKey.association: '_AddressPersonName'
  key Address.AddressPersonID,
  @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
  key Address.AddressRepresentationCode,

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
      Address.DistrictNumber,
      Address.Village,
      Address.RegionalStructureGroup,
      @Semantics.user.createdBy: true
      Address.AddressCreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      @Analytics.hidden: true
      Address.AddressCreatedOnDateTime,
      @Semantics.user.lastChangedBy: true
      Address.AddressChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      @Analytics.hidden: true
      Address.AddressChangedOnDateTime,

      _OrganizationAddress,
      _PersonAddress,

      _EmailAddress,
      _PhoneNumber,
      _FaxNumber,
      _UniformResourceIdentifier,

      _CurrentDfltEmailAddress,
      _CurrentDfltMobilePhoneNumber,
      _CurrentDfltLandlinePhoneNmbr,
      _CurrentDfltFaxNumber,
      _MainWebsiteURL,
      _AddressRemark,

      Address._Region,
      Address._Country,
      Address._FormOfAddress,
      Address._StreetAddrNonDeliverableRsn,
      Address._POBoxAddrNonDeliverableReason,
      Address._TransportationZone,
      Address._POBoxDeviatingRegion,
      Address._POBoxDeviatingCountry,
      Address._PrfrdCommMediumType,
      Address._DeliveryServiceTypeCode,
      Address._CorrespondenceLanguage,
      Address._AddressObjectType,
      Address._AddressRepresentationCode,
      Address._SecondaryRegion,
      Address._TertiaryRegion,
      Address._PostalCity,
      Address._TimeZone,
      Address._RegionalStructureCheckStatus,
      Address._Street,
      Address._AddressGroup,
      Address._AddressPersonName,
      Address._POBoxDeviatingCityCode
    
}
```
