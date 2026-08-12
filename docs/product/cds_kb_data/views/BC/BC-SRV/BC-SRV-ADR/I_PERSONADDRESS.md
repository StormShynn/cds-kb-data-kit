---
name: I_PERSONADDRESS
description: "Personaddress"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PERSONADDRESS

**Personaddress**

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
| `AddressObjectType` |  | |  | `cast('2' as ad_adrtype)` | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `CorrespondenceLanguage` |  | | `_PersonName` | `CorrespondenceLanguage` | `LANG(1)` | Language Key |
| `GivenName` |  | | `_PersonName` | `GivenName` | `CHAR(40)` | First Name |
| `FamilyName` |  | | `_PersonName` | `FamilyName` | `CHAR(40)` | Last Name |
| `PersonBirthName` |  | | `_PersonName` | `PersonBirthName` | `CHAR(40)` | Name of person at birth |
| `PersonMiddleName` |  | | `_PersonName` | `PersonMiddleName` | `CHAR(40)` | Middle name or second forename of a person |
| `SecondFamilyName` |  | | `_PersonName` | `SecondFamilyName` | `CHAR(40)` | Other Last Name of a Person |
| `AcademicTitle` |  | | `_PersonName` | `AcademicTitle` | `CHAR(4)` | Academic Title: Key |
| `AcademicTitle2` |  | | `_PersonName` | `AcademicTitle2` | `CHAR(4)` | Second academic title (key) |
| `FamilyNamePrefix` |  | | `_PersonName` | `FamilyNamePrefix` | `CHAR(4)` | Name Prefix (Key) |
| `FamilyNameSecondPrefix` |  | | `_PersonName` | `FamilyNameSecondPrefix` | `CHAR(4)` | 2nd name prefix (key) |
| `PersonNameSupplementCode` |  | | `_PersonName` | `PersonNameSupplementCode` | `CHAR(4)` | Name supplement, e.g. noble title (key) |
| `PersonNickname` |  | | `_PersonName` | `PersonNickname` | `CHAR(40)` | Nickname or name used |
| `NameInitials` |  | | `_PersonName` | `NameInitials` | `CHAR(10)` | "Middle Initial" or personal initials |
| `PersonFullName` |  | | `_PersonName` | `PersonFullName` | `CHAR(80)` | Full Name of Person |
| `FormOfAddress` |  | | `_PersonName` | `FormOfAddress` | `CHAR(4)` | Form-of-Address Key |
| `AddressPersonSearchTerm1` |  | | `_PersonName` | `AddressPersonSearchTerm1` | `CHAR(20)` | Search Term 1 |
| `AddressPersonSearchTerm2` |  | | `_PersonName` | `AddressPersonSearchTerm2` | `CHAR(20)` | Search Term 2 |
| `PersonFullNameFormattingCode` |  | | `_PersonName` | `PersonFullNameFormattingCode` | `CHAR(2)` | Name format |
| `PersonFullNameFormattingCntry` |  | | `_PersonName` | `PersonFullNameFormattingCntry` | `CHAR(3)` | Country/Region for Name Format Rule |
| `converted` |  | | `_PersonName` | `converted` | `CHAR(1)` | Generation Status of 'Full Name of Person' Field |
| `PrfrdCommMediumType` |  | | `_OrgNamePostalAddress` | `PrfrdCommMediumType` | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `CityNumber` |  | | `_OrgNamePostalAddress` | `CityNumber` | `CHAR(12)` | City code for city/street file |
| `CityName` |  | | `_OrgNamePostalAddress` | `CityName` | `CHAR(40)` | City |
| `DistrictName` |  | | `_OrgNamePostalAddress` | `DistrictName` | `CHAR(40)` | District |
| `VillageName` |  | | `_OrgNamePostalAddress` | `VillageName` | `CHAR(40)` | City (different from postal city) |
| `PostalCode` |  | | `_OrgNamePostalAddress` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `CompanyPostalCode` |  | | `_OrgNamePostalAddress` | `CompanyPostalCode` | `CHAR(10)` | Company Postal Code (for Large Customers) |
| `Street` |  | | `_OrgNamePostalAddress` | `Street` | `CHAR(12)` | Street Number for City/Street File |
| `StreetName` |  | | `_OrgNamePostalAddress` | `StreetName` | `CHAR(60)` | Street |
| `StreetAddrNonDeliverableReason` |  | | `_OrgNamePostalAddress` | `StreetAddrNonDeliverableReason` | `CHAR(4)` | Street Address Undeliverable Flag |
| `StreetPrefixName1` |  | | `_OrgNamePostalAddress` | `StreetPrefixName1` | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` |  | | `_OrgNamePostalAddress` | `StreetPrefixName2` | `CHAR(40)` | Street 3 |
| `StreetSuffixName1` |  | | `_OrgNamePostalAddress` | `StreetSuffixName1` | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` |  | | `_OrgNamePostalAddress` | `StreetSuffixName2` | `CHAR(40)` | Street 5 |
| `HouseNumber` |  | | `_OrgNamePostalAddress` | `HouseNumber` | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | | `_OrgNamePostalAddress` | `HouseNumberSupplementText` | `CHAR(10)` | House number supplement |
| `Building` |  | | `_OrgNamePostalAddress` | `Building` | `CHAR(20)` | Building (Number or Code) |
| `Floor` |  | | `_OrgNamePostalAddress` | `Floor` | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | | `_OrgNamePostalAddress` | `RoomNumber` | `CHAR(10)` | Room or Apartment Number |
| `Country` |  | | `_OrgNamePostalAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `Region` |  | | `_OrgNamePostalAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `TaxJurisdiction` |  | | `_OrgNamePostalAddress` | `TaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `TransportZone` |  | | `_OrgNamePostalAddress` | `TransportZone` | `CHAR(10)` | Transportation zone to or from which the goods are delivered |
| `POBox` |  | | `_OrgNamePostalAddress` | `POBox` | `CHAR(10)` | PO Box |
| `POBoxAddrNonDeliverableReason` |  | | `_OrgNamePostalAddress` | `POBoxAddrNonDeliverableReason` | `CHAR(4)` | PO Box Address Undeliverable Flag |
| `POBoxIsWithoutNumber` |  | | `_OrgNamePostalAddress` | `POBoxIsWithoutNumber` | `CHAR(1)` | Flag: PO Box Without Number |
| `POBoxPostalCode` |  | | `_OrgNamePostalAddress` | `POBoxPostalCode` | `CHAR(10)` | PO Box Postal Code |
| `POBoxLobbyName` |  | | `_OrgNamePostalAddress` | `POBoxLobbyName` | `CHAR(40)` | PO Box Lobby |
| `POBoxDeviatingCityName` |  | | `_OrgNamePostalAddress` | `POBoxDeviatingCityName` | `CHAR(40)` | PO Box city |
| `POBoxDeviatingCityCode` |  | | `_OrgNamePostalAddress` | `POBoxDeviatingCityCode` | `CHAR(12)` | City PO box code (City file) |
| `POBoxDeviatingRegion` |  | | `_OrgNamePostalAddress` | `POBoxDeviatingRegion` | `CHAR(3)` | Region for PO Box (Country/Region, State, Province, ...) |
| `POBoxDeviatingCountry` |  | | `_OrgNamePostalAddress` | `POBoxDeviatingCountry` | `CHAR(3)` | PO Box of Country/Region |
| `CareOfName` |  | | `_OrgNamePostalAddress` | `CareOfName` | `CHAR(40)` | c/o name |
| `DeliveryServiceTypeCode` |  | | `_OrgNamePostalAddress` | `DeliveryServiceTypeCode` | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceNumber` |  | | `_OrgNamePostalAddress` | `DeliveryServiceNumber` | `CHAR(10)` | Number of Delivery Service |
| `AddressTimeZone` |  | | `_OrgNamePostalAddress` | `AddressTimeZone` | `CHAR(6)` | Address Time Zone |
| `SecondaryRegion` |  | | `_OrgNamePostalAddress` | `SecondaryRegion` | `CHAR(8)` | County code for county |
| `SecondaryRegionName` |  | | `_OrgNamePostalAddress` | `SecondaryRegionName` | `CHAR(40)` | County |
| `TertiaryRegion` |  | | `_OrgNamePostalAddress` | `TertiaryRegion` | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | | `_OrgNamePostalAddress` | `TertiaryRegionName` | `CHAR(40)` | Township |
| `RegionalStructureCheckStatus` |  | | `_OrgNamePostalAddress` | `RegionalStructureCheckStatus` | `CHAR(1)` | City File Test Status |
| `AddressGroup` |  | | `_OrgNamePostalAddress` | `AddressGroup` | `CHAR(4)` | Address Group (Key) (Business Address Services) |
| `DistrictNumber` |  | | `_OrgNamePostalAddress` | `DistrictNumber` | `CHAR(8)` | District code for City and Street file |
| `Village` |  | | `_OrgNamePostalAddress` | `Village` | `CHAR(12)` | Different city for city/street file |
| `RegionalStructureGroup` |  | | `_OrgNamePostalAddress` | `RegionalStructureGroup` | `CHAR(8)` | Regional structure grouping |
| `AddressCreatedByUser` |  | | `_OrgNamePostalAddress` | `AddressCreatedByUser` | `CHAR(12)` | Created By User |
| `AddressCreatedOnDateTime` |  | | `_OrgNamePostalAddress` | `AddressCreatedOnDateTime` | `UTCL(27)` | Creation Date Time |
| `AddressChangedByUser` |  | | `_OrgNamePostalAddress` | `AddressChangedByUser` | `CHAR(12)` | Last Changed By User |
| `AddressChangedOnDateTime` |  | | `_OrgNamePostalAddress` | `AddressChangedOnDateTime` | `UTCL(27)` | Last Change Date Time |
| `_EmailAddress` | | ✓ | | | | |
| `_CurrentDfltEmailAddress` | | ✓ | | | | |
| `_PhoneNumber` | | ✓ | | | | |
| `_CurrentDfltLandlinePhoneNmbr` | | ✓ | | | | |
| `_CurrentDfltMobilePhoneNumber` | | ✓ | | | | |
| `_FaxNumber` | | ✓ | | | | |
| `_CurrentDfltFaxNumber` | | ✓ | | | | |
| `_UniformResourceIdentifier` | | ✓ | | | | |
| `_MainWebsiteURL` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_FormOfAddress` | | ✓ | | | | |
| `_POBoxAddrNonDeliverableReason` | | ✓ | | | | |
| `_StreetAddrNonDeliverableRsn` | | ✓ | | | | |
| `_TransportationZone` | | ✓ | | | | |
| `_POBoxDeviatingRegion` | | ✓ | | | | |
| `_POBoxDeviatingCountry` | | ✓ | | | | |
| `_PrfrdCommMediumType` | | ✓ | | | | |
| `_DeliveryServiceTypeCode` | | ✓ | | | | |
| `_CorrespondenceLanguage` | | ✓ | | | | |
| `_AddressObjectType` | | ✓ | | | | |
| `_AddressRepresentationCode` | | ✓ | | | | |
| `_SecondaryRegion` | | ✓ | | | | |
| `_TertiaryRegion` | | ✓ | | | | |
| `_PostalCity` | | ✓ | | | | |
| `_POBoxDeviatingCityCode` | | ✓ | | | | |
| `_TimeZone` | | ✓ | | | | |
| `_NameSupplement` | | ✓ | | | | |
| `_FamilyNamePrefix` | | ✓ | | | | |
| `_FamilyNameSecondPrefix` | | ✓ | | | | |
| `_RegionalStructureCheckStatus` | | ✓ | | | | |
| `_AcademicTitle` | | ✓ | | | | |
| `_AcademicTitle2` | | ✓ | | | | |
| `_Street` | | ✓ | | | | |
| `_AddressGroup` | | ✓ | | | | |
| `_AddressPersonName` | | ✓ | | | | |
| `_AddressRemark` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrgNamePostalAddress` | `I_AddrOrgNamePostalAddress` | [0..1] |
| `_PersonName` | `I_AddressPersonName` | [0..1] |
| `_EmailAddress` | `I_AddressEmailAddress_2` | [0..*] |
| `_CurrentDfltEmailAddress` | `I_AddrCurDefaultEmailAddress` | [0..1] |
| `_PhoneNumber` | `I_AddressPhoneNumber_2` | [0..*] |
| `_CurrentDfltLandlinePhoneNmbr` | `I_AddrCurDfltLandlinePhoneNmbr` | [0..1] |
| `_CurrentDfltMobilePhoneNumber` | `I_AddrCurDfltMobilePhoneNumber` | [0..1] |
| `_FaxNumber` | `I_AddressFaxNumber_2` | [0..*] |
| `_CurrentDfltFaxNumber` | `I_AddrCurDefaultFaxNumber` | [0..1] |
| `_UniformResourceIdentifier` | `I_AddressURI` | [0..*] |
| `_MainWebsiteURL` | `I_AddressMainWebsiteURL` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_FormOfAddress` | `I_FormOfAddress` | [0..1] |
| `_POBoxAddrNonDeliverableReason` | `I_AddressNonDeliverableReason` | [0..1] |
| `_StreetAddrNonDeliverableRsn` | `I_AddressNonDeliverableReason` | [0..1] |
| `_TransportationZone` | `I_TransportationZone` | [0..1] |
| `_POBoxDeviatingRegion` | `I_Region` | [0..1] |
| `_POBoxDeviatingCountry` | `I_Country` | [0..1] |
| `_PrfrdCommMediumType` | `I_AddressCommunicationMethod` | [0..1] |
| `_DeliveryServiceTypeCode` | `I_AddressDeliveryServiceType` | [0..1] |
| `_CorrespondenceLanguage` | `I_Language` | [0..1] |
| `_AddressObjectType` | `I_AddressObjectType` | [0..1] |
| `_AddressRepresentationCode` | `I_AddressRepresentation` | [0..1] |
| `_SecondaryRegion` | `I_SecondaryRegion` | [0..1] |
| `_TertiaryRegion` | `I_TertiaryRegion` | [0..1] |
| `_PostalCity` | `I_PostalCity` | [0..1] |
| `_POBoxDeviatingCityCode` | `I_PostalCity` | [0..1] |
| `_TimeZone` | `I_TimeZone` | [0..1] |
| `_NameSupplement` | `I_NameSupplement` | [0..1] |
| `_FamilyNamePrefix` | `I_FamilyNamePrefix` | [0..1] |
| `_FamilyNameSecondPrefix` | `I_FamilyNamePrefix` | [0..1] |
| `_RegionalStructureCheckStatus` | `I_RegionalStructureCheckStatus` | [0..1] |
| `_AcademicTitle` | `I_AcademicTitle` | [0..1] |
| `_AcademicTitle2` | `I_AcademicTitle` | [0..1] |
| `_Street` | `I_Street` | [0..1] |
| `_AddressGroup` | `I_AddressGroup` | [0..1] |
| `_AddressPersonName` | `I_AddressPersonName` | [0..1] |
| `_AddressRemark` | `I_AddressRemark_2` | [0..*] |

## Source Code

```abap
@Analytics : {
          dataCategory: #DIMENSION,
          dataExtraction: {
           enabled: true }
           } 
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_EmailAddress', '_CurrentDfltEmailAddress', '_PhoneNumber', '_CurrentDfltLandlinePhoneNmbr', '_CurrentDfltMobilePhoneNumber', '_FaxNumber', '_CurrentDfltFaxNumber', '_UniformResourceIdentifier', '_MainWebsiteURL']
@EndUserText.label: 'Address of a Person'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PersonAddress'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_PersonAddress
  as select from I_AddressWorkplaceDetails

  association [0..1] to I_AddrOrgNamePostalAddress     as _OrgNamePostalAddress          on  _OrgNamePostalAddress.AddressID                 = $projection.AddressID
                                                                                         and _OrgNamePostalAddress.AddressRepresentationCode = $projection.AddressRepresentationCode
                                                                                         and _OrgNamePostalAddress.AddressIsPersonAddress    = 'X'

  association [0..1] to I_AddressPersonName            as _PersonName                    on  _PersonName.AddressPersonID           = $projection.AddressPersonID
                                                                                         and _PersonName.AddressRepresentationCode = $projection.AddressRepresentationCode

  association [0..*] to I_AddressEmailAddress_2        as _EmailAddress                  on  _EmailAddress.AddressID       = $projection.AddressID
                                                                                         and _EmailAddress.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDefaultEmailAddress   as _CurrentDfltEmailAddress       on  _CurrentDfltEmailAddress.AddressID       = $projection.AddressID
                                                                                         and _CurrentDfltEmailAddress.AddressPersonID = $projection.AddressPersonID

  association [0..*] to I_AddressPhoneNumber_2         as _PhoneNumber                   on  _PhoneNumber.AddressID       = $projection.AddressID
                                                                                         and _PhoneNumber.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDfltLandlinePhoneNmbr as _CurrentDfltLandlinePhoneNmbr  on  _CurrentDfltLandlinePhoneNmbr.AddressID       = $projection.AddressID
                                                                                         and _CurrentDfltLandlinePhoneNmbr.AddressPersonID = $projection.AddressPersonID


  association [0..1] to I_AddrCurDfltMobilePhoneNumber as _CurrentDfltMobilePhoneNumber  on  _CurrentDfltMobilePhoneNumber.AddressID       = $projection.AddressID
                                                                                         and _CurrentDfltMobilePhoneNumber.AddressPersonID = $projection.AddressPersonID


  association [0..*] to I_AddressFaxNumber_2           as _FaxNumber                     on  _FaxNumber.AddressID       = $projection.AddressID
                                                                                         and _FaxNumber.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDefaultFaxNumber      as _CurrentDfltFaxNumber          on  _CurrentDfltFaxNumber.AddressID       = $projection.AddressID
                                                                                         and _CurrentDfltFaxNumber.AddressPersonID = $projection.AddressPersonID

  association [0..*] to I_AddressURI                   as _UniformResourceIdentifier     on  _UniformResourceIdentifier.AddressID       = $projection.AddressID
                                                                                         and _UniformResourceIdentifier.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddressMainWebsiteURL        as _MainWebsiteURL                on  _MainWebsiteURL.AddressID       = $projection.AddressID
                                                                                         and _MainWebsiteURL.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_Region                       as _Region                        on  $projection.region  = _Region.Region
                                                                                         and $projection.country = _Region.Country

  association [0..1] to I_Country                      as _Country                       on  $projection.country = _Country.Country

  association [0..1] to I_FormOfAddress                as _FormOfAddress                 on  $projection.formofaddress = _FormOfAddress.FormOfAddress

  association [0..1] to I_AddressNonDeliverableReason  as _POBoxAddrNonDeliverableReason on  $projection.poboxaddrnondeliverablereason = _POBoxAddrNonDeliverableReason.AddressNonDeliverableReason

  association [0..1] to I_AddressNonDeliverableReason  as _StreetAddrNonDeliverableRsn   on  $projection.streetaddrnondeliverablereason = _StreetAddrNonDeliverableRsn.AddressNonDeliverableReason

  association [0..1] to I_TransportationZone           as _TransportationZone            on  $projection.transportzone = _TransportationZone.TransportZone
                                                                                         and $projection.country       = _TransportationZone.CountryCode

  association [0..1] to I_Region                       as _POBoxDeviatingRegion          on  $projection.poboxdeviatingregion  = _POBoxDeviatingRegion.Region
                                                                                         and $projection.poboxdeviatingcountry = _POBoxDeviatingRegion.Country

  association [0..1] to I_Country                      as _POBoxDeviatingCountry         on  $projection.poboxdeviatingcountry = _POBoxDeviatingCountry.Country

  association [0..1] to I_AddressCommunicationMethod   as _PrfrdCommMediumType           on  $projection.prfrdcommmediumtype = _PrfrdCommMediumType.CommunicationMediumType

  association [0..1] to I_AddressDeliveryServiceType   as _DeliveryServiceTypeCode       on  $projection.deliveryservicetypecode = _DeliveryServiceTypeCode.DeliveryServiceTypeCode

  association [0..1] to I_Language                     as _CorrespondenceLanguage        on  $projection.correspondencelanguage = _CorrespondenceLanguage.Language

  association [0..1] to I_AddressObjectType            as _AddressObjectType             on  $projection.AddressObjectType = _AddressObjectType.AddressObjectType

  association [0..1] to I_AddressRepresentation        as _AddressRepresentationCode     on  $projection.AddressRepresentationCode = _AddressRepresentationCode.AddressRepresentationCode

  association [0..1] to I_SecondaryRegion              as _SecondaryRegion               on  $projection.secondaryregion = _SecondaryRegion.SecondaryRegion
                                                                                         and $projection.country         = _SecondaryRegion.Country
                                                                                         and $projection.region          = _SecondaryRegion.Region

  association [0..1] to I_TertiaryRegion               as _TertiaryRegion                on  $projection.tertiaryregion  = _TertiaryRegion.TertiaryRegion
                                                                                         and $projection.secondaryregion = _TertiaryRegion.SecondaryRegion
                                                                                         and $projection.country         = _TertiaryRegion.Country
                                                                                         and $projection.region          = _TertiaryRegion.Region

  association [0..1] to I_PostalCity                   as _PostalCity                    on  $projection.citynumber = _PostalCity.CityNumber
                                                                                         and $projection.country    = _PostalCity.Country
  
  association [0..1] to I_PostalCity                   as _POBoxDeviatingCityCode        on  $projection.poboxdeviatingcitycode = _POBoxDeviatingCityCode.CityNumber
                                                                                         and $projection.country    = _POBoxDeviatingCityCode.Country

  association [0..1] to I_TimeZone                     as _TimeZone                      on  $projection.addresstimezone = _TimeZone.TimeZoneID


  association [0..1] to I_NameSupplement               as _NameSupplement                on  $projection.personnamesupplementcode = _NameSupplement.PersonNameSupplementCode

  association [0..1] to I_FamilyNamePrefix             as _FamilyNamePrefix              on  $projection.familynameprefix = _FamilyNamePrefix.FamilyNamePrefix

  association [0..1] to I_FamilyNamePrefix             as _FamilyNameSecondPrefix        on  $projection.familynamesecondprefix = _FamilyNameSecondPrefix.FamilyNamePrefix

  association [0..1] to I_RegionalStructureCheckStatus as _RegionalStructureCheckStatus  on  $projection.regionalstructurecheckstatus = _RegionalStructureCheckStatus.RegionalStructureCheckStatus

  association [0..1] to I_AcademicTitle                as _AcademicTitle                 on  $projection.academictitle = _AcademicTitle.AcademicTitle

  association [0..1] to I_AcademicTitle                as _AcademicTitle2                on  $projection.academictitle2 = _AcademicTitle2.AcademicTitle

  association [0..1] to I_Street                       as _Street                        on  $projection.country = _Street.Country
                                                                                         and $projection.street  = _Street.Street
                                                                                         
  association [0..1] to I_AddressGroup                 as _AddressGroup                  on  $projection.addressgroup = _AddressGroup.AddressGroup    
  
  association [0..1] to I_AddressPersonName            as _AddressPersonName             on  $projection.AddressPersonID = _AddressPersonName.AddressPersonID
                                                                                         and $projection.AddressRepresentationCode = _AddressPersonName.AddressRepresentationCode      
                                                                                         
   association [0..*]  to I_AddressRemark_2            as _AddressRemark                 on  $projection.AddressID                 = _AddressRemark.AddressID    
                                                                                         and $projection.AddressRepresentationCode = _AddressRemark.AddressRepresentationCode                                                                                                                                                                                                                                      
{
  key I_AddressWorkplaceDetails.AddressID                 as AddressID,
  @ObjectModel.foreignKey.association: '_AddressPersonName'
  key I_AddressWorkplaceDetails.AddressPersonID           as AddressPersonID,
      @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressRepresentationCode'
  key I_AddressWorkplaceDetails.AddressRepresentationCode as AddressRepresentationCode,

      @ObjectModel.foreignKey.association: '_AddressObjectType'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressObjectType'
      cast('2' as ad_adrtype)                             as AddressObjectType,
      @ObjectModel.foreignKey.association: '_CorrespondenceLanguage'
      _PersonName.CorrespondenceLanguage,
      _PersonName.GivenName,
      _PersonName.FamilyName,
      _PersonName.PersonBirthName,
      _PersonName.PersonMiddleName,
      _PersonName.SecondFamilyName,
      @ObjectModel.foreignKey.association: '_AcademicTitle'
      @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
      _PersonName.AcademicTitle,
      @ObjectModel.foreignKey.association: '_AcademicTitle2'
      @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
      _PersonName.AcademicTitle2,
      @ObjectModel.foreignKey.association: '_FamilyNamePrefix'
      @ObjectModel.sapObjectNodeTypeReference: 'FamilyNamePrefix'
      _PersonName.FamilyNamePrefix,
      @ObjectModel.foreignKey.association: '_FamilyNameSecondPrefix'
      @ObjectModel.sapObjectNodeTypeReference: 'FamilyNameSecondPrefix'
      _PersonName.FamilyNameSecondPrefix,
      @ObjectModel.foreignKey.association: '_NameSupplement'
      @ObjectModel.sapObjectNodeTypeReference: 'NameSupplement'
      _PersonName.PersonNameSupplementCode,
      _PersonName.PersonNickname,
      _PersonName.NameInitials,
      _PersonName.PersonFullName,
      
      @ObjectModel.foreignKey.association: '_FormOfAddress'
      @ObjectModel.sapObjectNodeTypeReference: 'FormOfAddress'
      _PersonName.FormOfAddress,
      _PersonName.AddressPersonSearchTerm1,
      _PersonName.AddressPersonSearchTerm2,
      _PersonName.PersonFullNameFormattingCode,
      _PersonName.PersonFullNameFormattingCntry,
      _PersonName.converted,
      @ObjectModel.foreignKey.association: '_PrfrdCommMediumType'
      @ObjectModel.sapObjectNodeTypeReference: 'CommunicationMediumType'
      _OrgNamePostalAddress.PrfrdCommMediumType,
      @ObjectModel.foreignKey.association: '_PostalCity'
      @ObjectModel.sapObjectNodeTypeReference: 'PostalCity'
      _OrgNamePostalAddress.CityNumber,
      _OrgNamePostalAddress.CityName,
      _OrgNamePostalAddress.DistrictName,
      _OrgNamePostalAddress.VillageName,
      _OrgNamePostalAddress.PostalCode,
      _OrgNamePostalAddress.CompanyPostalCode,
      @ObjectModel.foreignKey.association: '_Street'
      @ObjectModel.sapObjectNodeTypeReference: 'Street'
      _OrgNamePostalAddress.Street,
      _OrgNamePostalAddress.StreetName,
      @ObjectModel.foreignKey.association: '_StreetAddrNonDeliverableRsn'
      @ObjectModel.sapObjectNodeTypeReference: 'StreetAddrNonDeliverableRsn'
      @EndUserText.label: 'AddressNonDeliverableReason'
      _OrgNamePostalAddress.StreetAddrNonDeliverableReason,
      _OrgNamePostalAddress.StreetPrefixName1,
      _OrgNamePostalAddress.StreetPrefixName2,
      _OrgNamePostalAddress.StreetSuffixName1,
      _OrgNamePostalAddress.StreetSuffixName2,
      _OrgNamePostalAddress.HouseNumber,
      _OrgNamePostalAddress.HouseNumberSupplementText,
      _OrgNamePostalAddress.Building,
      _OrgNamePostalAddress.Floor,
      _OrgNamePostalAddress.RoomNumber,
      @ObjectModel.foreignKey.association: '_Country'
      @ObjectModel.sapObjectNodeTypeReference: 'Country'
      _OrgNamePostalAddress.Country,
      @ObjectModel.foreignKey.association: '_Region'
      @ObjectModel.sapObjectNodeTypeReference: 'Region'
      _OrgNamePostalAddress.Region,
      _OrgNamePostalAddress.TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_TransportationZone'
      @ObjectModel.sapObjectNodeTypeReference: 'TransportationZone'
      _OrgNamePostalAddress.TransportZone,
      _OrgNamePostalAddress.POBox,
      @ObjectModel.foreignKey.association: '_POBoxAddrNonDeliverableReason'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressNonDeliverableReason'
      @EndUserText.label: 'AddressNonDeliverableReason'
      _OrgNamePostalAddress.POBoxAddrNonDeliverableReason,
      _OrgNamePostalAddress.POBoxIsWithoutNumber,
      _OrgNamePostalAddress.POBoxPostalCode,
      _OrgNamePostalAddress.POBoxLobbyName,
      _OrgNamePostalAddress.POBoxDeviatingCityName,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingCityCode'
      @ObjectModel.sapObjectNodeTypeReference: 'CityNumber'
      _OrgNamePostalAddress.POBoxDeviatingCityCode,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'Region'
      _OrgNamePostalAddress.POBoxDeviatingRegion,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingCountry'
      @ObjectModel.sapObjectNodeTypeReference: 'Country'
      _OrgNamePostalAddress.POBoxDeviatingCountry,
      _OrgNamePostalAddress.CareOfName,
      @ObjectModel.foreignKey.association: '_DeliveryServiceTypeCode'
      @ObjectModel.sapObjectNodeTypeReference: 'DeliveryServiceTypeCode'
      _OrgNamePostalAddress.DeliveryServiceTypeCode,
      _OrgNamePostalAddress.DeliveryServiceNumber,
      @ObjectModel.foreignKey.association: '_TimeZone'
      @ObjectModel.sapObjectNodeTypeReference: 'TimeZone'
      _OrgNamePostalAddress.AddressTimeZone,
      @ObjectModel.foreignKey.association: '_SecondaryRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'SecondaryRegion'
      _OrgNamePostalAddress.SecondaryRegion,
      _OrgNamePostalAddress.SecondaryRegionName,
      @ObjectModel.foreignKey.association: '_TertiaryRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'TertiaryRegion'
      _OrgNamePostalAddress.TertiaryRegion,
      _OrgNamePostalAddress.TertiaryRegionName,
      @ObjectModel.foreignKey.association: '_RegionalStructureCheckStatus'
      @ObjectModel.sapObjectNodeTypeReference: 'RegionalStructureCheckStatus'
      _OrgNamePostalAddress.RegionalStructureCheckStatus,
      @ObjectModel.foreignKey.association: '_AddressGroup'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressGroup'
      _OrgNamePostalAddress.AddressGroup,
      _OrgNamePostalAddress.DistrictNumber,
      _OrgNamePostalAddress.Village,
      _OrgNamePostalAddress.RegionalStructureGroup,
       @Semantics.user.createdBy: true
      _OrgNamePostalAddress.AddressCreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      @Analytics.hidden: true
      _OrgNamePostalAddress.AddressCreatedOnDateTime,
      @Semantics.user.lastChangedBy: true
      _OrgNamePostalAddress.AddressChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      @Analytics.hidden: true
      _OrgNamePostalAddress.AddressChangedOnDateTime,

      _EmailAddress,
      _PhoneNumber,
      _FaxNumber,
      _UniformResourceIdentifier,

      _CurrentDfltEmailAddress,
      _CurrentDfltLandlinePhoneNmbr,
      _CurrentDfltMobilePhoneNumber,
      _CurrentDfltFaxNumber,
      _MainWebsiteURL,

      _Region,
      _Country,
      _FormOfAddress,
      _POBoxAddrNonDeliverableReason,
      _StreetAddrNonDeliverableRsn,
      _TransportationZone,
      _POBoxDeviatingCountry,
      _POBoxDeviatingRegion,
      _PrfrdCommMediumType,
      _DeliveryServiceTypeCode,
      _CorrespondenceLanguage,
      _AddressObjectType,
      _AddressRepresentationCode,
      _SecondaryRegion,
      _TertiaryRegion,
      _PostalCity,
      _TimeZone,
      _NameSupplement,
      _FamilyNamePrefix,
      _FamilyNameSecondPrefix,
      _RegionalStructureCheckStatus,
      _AcademicTitle,
      _AcademicTitle2,
      _Street,
      _AddressGroup,
      _AddressPersonName,
      _POBoxDeviatingCityCode,
      _AddressRemark
}
where
  PersonAddressObjectType = 'P'
```
