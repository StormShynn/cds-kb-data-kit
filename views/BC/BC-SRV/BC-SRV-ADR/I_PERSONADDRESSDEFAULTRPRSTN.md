---
name: I_PERSONADDRESSDEFAULTRPRSTN
description: Personaddressdefaultrprstn
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
# I_PERSONADDRESSDEFAULTRPRSTN

**Personaddressdefaultrprstn**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AddressID` | `Person.AddressID` |
| key `AddressPersonID` | `Person.AddressPersonID` |
| `AddressRepresentationCode` | `Person.AddressRepresentationCode` |
| `AddressObjectType` | `Person.AddressObjectType` |
| `CorrespondenceLanguage` | `Person.CorrespondenceLanguage` |
| `GivenName` | `Person.GivenName` |
| `FamilyName` | `Person.FamilyName` |
| `PersonBirthName` | `Person.PersonBirthName` |
| `PersonMiddleName` | `Person.PersonMiddleName` |
| `SecondFamilyName` | `Person.SecondFamilyName` |
| `AcademicTitle` | `Person.AcademicTitle` |
| `AcademicTitle2` | `Person.AcademicTitle2` |
| `FamilyNamePrefix` | `Person.FamilyNamePrefix` |
| `FamilyNameSecondPrefix` | `Person.FamilyNameSecondPrefix` |
| `PersonNameSupplementCode` | `Person.PersonNameSupplementCode` |
| `PersonNickname` | `Person.PersonNickname` |
| `NameInitials` | `Person.NameInitials` |
| `PersonFullName` | `Person.PersonFullName` |
| `FormOfAddress` | `Person.FormOfAddress` |
| `AddressPersonSearchTerm1` | `Person.AddressPersonSearchTerm1` |
| `AddressPersonSearchTerm2` | `Person.AddressPersonSearchTerm2` |
| `PrfrdCommMediumType` | `Person.PrfrdCommMediumType` |
| `CityNumber` | `Person.CityNumber` |
| `CityName` | `Person.CityName` |
| `DistrictName` | `Person.DistrictName` |
| `VillageName` | `Person.VillageName` |
| `PostalCode` | `Person.PostalCode` |
| `CompanyPostalCode` | `Person.CompanyPostalCode` |
| `Street` | `Person.Street` |
| `StreetName` | `Person.StreetName` |
| `StreetAddrNonDeliverableReason` | `Person.StreetAddrNonDeliverableReason` |
| `StreetPrefixName1` | `Person.StreetPrefixName1` |
| `StreetPrefixName2` | `Person.StreetPrefixName2` |
| `StreetSuffixName1` | `Person.StreetSuffixName1` |
| `StreetSuffixName2` | `Person.StreetSuffixName2` |
| `HouseNumber` | `Person.HouseNumber` |
| `HouseNumberSupplementText` | `Person.HouseNumberSupplementText` |
| `Building` | `Person.Building` |
| `Floor` | `Person.Floor` |
| `RoomNumber` | `Person.RoomNumber` |
| `Country` | `Person.Country` |
| `Region` | `Person.Region` |
| `TaxJurisdiction` | `Person.TaxJurisdiction` |
| `TransportZone` | `Person.TransportZone` |
| `POBox` | `Person.POBox` |
| `POBoxAddrNonDeliverableReason` | `Person.POBoxAddrNonDeliverableReason` |
| `POBoxIsWithoutNumber` | `Person.POBoxIsWithoutNumber` |
| `POBoxPostalCode` | `Person.POBoxPostalCode` |
| `POBoxLobbyName` | `Person.POBoxLobbyName` |
| `POBoxDeviatingCityName` | `Person.POBoxDeviatingCityName` |
| `POBoxDeviatingCityCode` | `Person.POBoxDeviatingCityCode` |
| `POBoxDeviatingRegion` | `Person.POBoxDeviatingRegion` |
| `POBoxDeviatingCountry` | `Person.POBoxDeviatingCountry` |
| `CareOfName` | `Person.CareOfName` |
| `DeliveryServiceTypeCode` | `Person.DeliveryServiceTypeCode` |
| `DeliveryServiceNumber` | `Person.DeliveryServiceNumber` |
| `AddressTimeZone` | `Person.AddressTimeZone` |
| `SecondaryRegion` | `Person.SecondaryRegion` |
| `SecondaryRegionName` | `Person.SecondaryRegionName` |
| `TertiaryRegion` | `Person.TertiaryRegion` |
| `TertiaryRegionName` | `Person.TertiaryRegionName` |
| `RegionalStructureCheckStatus` | `Person.RegionalStructureCheckStatus` |
| `AddressGroup` | `Person.AddressGroup` |
| `_DfltPersonAddress` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DfltPersonAddress` | `I_PersonAddress` | [0..*] |

## Source Code

```abap
@Analytics : {
          dataCategory: #DIMENSION,
          dataExtraction: {
           enabled: true }
           } 
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_EmailAddress', '_CurrentDfltEmailAddress', '_PhoneNumber', '_CurrentDfltLandlinePhoneNmbr', '_CurrentDfltMobilePhoneNumber', '_FaxNumber', '_CurrentDfltFaxNumber', '_UniformResourceIdentifier', '_MainWebsiteURL']
@EndUserText.label: 'Dflt Represention of a Person Address'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_PersonAddressDefaultRprstn 
       as select from I_PersonAddress as Person
       association [0..*] to I_PersonAddress as _DfltPersonAddress on $projection.AddressID = _DfltPersonAddress.AddressID
                                                                   and $projection.AddressPersonID = _DfltPersonAddress.AddressPersonID
                                                                   and _DfltPersonAddress.AddressRepresentationCode is not initial
{
  key Person.AddressID,
  @ObjectModel.foreignKey.association: '_AddressPersonName'
  key Person.AddressPersonID,
  @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
  @ObjectModel.sapObjectNodeTypeReference: 'AddressRepresentationCode'
  Person.AddressRepresentationCode,
  @ObjectModel.foreignKey.association: '_AddressObjectType'
  @ObjectModel.sapObjectNodeTypeReference: 'AddressObjectType'
  Person.AddressObjectType,
  Person.CorrespondenceLanguage,
  Person.GivenName,
  Person.FamilyName,
  Person.PersonBirthName,
  Person.PersonMiddleName,
  Person.SecondFamilyName,
  @ObjectModel.foreignKey.association: '_AcademicTitle'
  @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
  Person.AcademicTitle,
  @ObjectModel.foreignKey.association: '_AcademicTitle2'
  @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
  Person.AcademicTitle2,
  @ObjectModel.foreignKey.association: '_FamilyNamePrefix'
  @ObjectModel.sapObjectNodeTypeReference: 'FamilyNamePrefix'
  Person.FamilyNamePrefix,
  @ObjectModel.foreignKey.association: '_FamilyNameSecondPrefix'
  @ObjectModel.sapObjectNodeTypeReference: 'FamilyNameSecondPrefix'
  Person.FamilyNameSecondPrefix,
  @ObjectModel.foreignKey.association: '_NameSupplement'
  @ObjectModel.sapObjectNodeTypeReference: 'NameSupplement'
  Person.PersonNameSupplementCode,
  Person.PersonNickname,
  Person.NameInitials,
  Person.PersonFullName,
  @ObjectModel.foreignKey.association: '_FormOfAddress'
  @ObjectModel.sapObjectNodeTypeReference: 'FormOfAddress'
  Person.FormOfAddress,
  Person.AddressPersonSearchTerm1,
  Person.AddressPersonSearchTerm2,
  @ObjectModel.foreignKey.association: '_PrfrdCommMediumType'
  @ObjectModel.sapObjectNodeTypeReference: 'CommunicationMediumType'
  Person.PrfrdCommMediumType,
  @ObjectModel.foreignKey.association: '_PostalCity'
  @ObjectModel.sapObjectNodeTypeReference: 'PostalCity'
  Person.CityNumber,
  Person.CityName,
  Person.DistrictName,
  Person.VillageName,
  Person.PostalCode,
  Person.CompanyPostalCode,
  @ObjectModel.foreignKey.association: '_Street'
  @ObjectModel.sapObjectNodeTypeReference: 'Street'
  Person.Street,
  Person.StreetName,
  @ObjectModel.foreignKey.association: '_StreetAddrNonDeliverableRsn'
  @ObjectModel.sapObjectNodeTypeReference: 'StreetAddrNonDeliverableRsn'
  @EndUserText.label: 'AddressNonDeliverableReason'
  Person.StreetAddrNonDeliverableReason,
  Person.StreetPrefixName1,
  Person.StreetPrefixName2,
  Person.StreetSuffixName1,
  Person.StreetSuffixName2,
  Person.HouseNumber,
  Person.HouseNumberSupplementText,
  Person.Building,
  Person.Floor,
  Person.RoomNumber,
  @ObjectModel.foreignKey.association: '_Country'
  @ObjectModel.sapObjectNodeTypeReference: 'Country'
  Person.Country,
  @ObjectModel.foreignKey.association: '_Region'
  @ObjectModel.sapObjectNodeTypeReference: 'Region'
  Person.Region,
  Person.TaxJurisdiction,
  @ObjectModel.foreignKey.association: '_TransportationZone'
  @ObjectModel.sapObjectNodeTypeReference: 'TransportationZone'
  Person.TransportZone,
  Person.POBox,
  @ObjectModel.foreignKey.association: '_POBoxAddrNonDeliverableReason'
  @ObjectModel.sapObjectNodeTypeReference: 'AddressNonDeliverableReason'
  @EndUserText.label: 'AddressNonDeliverableReason'
  Person.POBoxAddrNonDeliverableReason,
  Person.POBoxIsWithoutNumber,
  Person.POBoxPostalCode,
  Person.POBoxLobbyName,
  Person.POBoxDeviatingCityName,
  @ObjectModel.foreignKey.association: '_POBoxDeviatingCityCode'
  @ObjectModel.sapObjectNodeTypeReference: 'CityNumber'
  Person.POBoxDeviatingCityCode,
  @ObjectModel.foreignKey.association: '_POBoxDeviatingRegion'
  @ObjectModel.sapObjectNodeTypeReference: 'Region'
  Person.POBoxDeviatingRegion,
  @ObjectModel.foreignKey.association: '_POBoxDeviatingCountry'
  @ObjectModel.sapObjectNodeTypeReference: 'Country'
  Person.POBoxDeviatingCountry,
  Person.CareOfName,
  @ObjectModel.foreignKey.association: '_DeliveryServiceTypeCode'
  @ObjectModel.sapObjectNodeTypeReference: 'DeliveryServiceTypeCode'
  Person.DeliveryServiceTypeCode,
  Person.DeliveryServiceNumber,
  @ObjectModel.foreignKey.association: '_TimeZone'
  @ObjectModel.sapObjectNodeTypeReference: 'TimeZone'
  Person.AddressTimeZone,
  @ObjectModel.foreignKey.association: '_SecondaryRegion'
  @ObjectModel.sapObjectNodeTypeReference: 'SecondaryRegion'
  Person.SecondaryRegion,
  Person.SecondaryRegionName,
  @ObjectModel.foreignKey.association: '_TertiaryRegion'
  @ObjectModel.sapObjectNodeTypeReference: 'TertiaryRegion'
  Person.TertiaryRegion,
  Person.TertiaryRegionName,
  @ObjectModel.foreignKey.association: '_RegionalStructureCheckStatus'
  @ObjectModel.sapObjectNodeTypeReference: 'RegionalStructureCheckStatus'
  Person.RegionalStructureCheckStatus,
  @ObjectModel.foreignKey.association: '_AddressGroup'
  @ObjectModel.sapObjectNodeTypeReference: 'AddressGroup'
  Person.AddressGroup,
  Person._AcademicTitle,
  Person._AcademicTitle2,
  Person._AddressGroup,
  Person._AddressObjectType,
  Person._AddressPersonName,
  Person._AddressRepresentationCode,
  Person._CorrespondenceLanguage,
  Person._Country,
  Person._CurrentDfltEmailAddress,
  Person._CurrentDfltFaxNumber,
  Person._CurrentDfltLandlinePhoneNmbr,
  Person._CurrentDfltMobilePhoneNumber,
  Person._DeliveryServiceTypeCode,
  Person._EmailAddress,
  Person._FamilyNamePrefix,
  Person._FamilyNameSecondPrefix,
  Person._FaxNumber,
  Person._FormOfAddress,
  Person._MainWebsiteURL,
  Person._NameSupplement,
  Person._PhoneNumber,
  Person._POBoxAddrNonDeliverableReason,
  Person._POBoxDeviatingCityCode,
  Person._POBoxDeviatingCountry,
  Person._POBoxDeviatingRegion,
  Person._PostalCity,
  Person._PrfrdCommMediumType,
  Person._Region,
  Person._RegionalStructureCheckStatus,
  Person._SecondaryRegion,
  Person._Street,
  Person._StreetAddrNonDeliverableRsn,
  Person._TertiaryRegion,
  Person._TimeZone,
  Person._TransportationZone,
  Person._UniformResourceIdentifier,
  _DfltPersonAddress
}
where 
AddressRepresentationCode is initial
```
