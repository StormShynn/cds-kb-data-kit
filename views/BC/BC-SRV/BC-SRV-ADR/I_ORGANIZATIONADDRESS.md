---
name: I_ORGANIZATIONADDRESS
description: Organizationaddress
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
# I_ORGANIZATIONADDRESS

**Organizationaddress**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressID` | ✓ | |  |  |  |  |
| `AddressPersonID` | ✓ | |  | `cast('' as ad_persnum )` |  |  |
| `AddressRepresentationCode` | ✓ | |  |  |  |  |
| `AddressObjectType` |  | |  | `cast('1' as ad_adrtype)` |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `PrfrdCommMediumType` |  | |  |  |  |  |
| `AddresseeFullName` |  | |  | `cast(concat_with_space(AddresseeName1, AddresseeName2, 1) as ad_namtext )` |  |  |
| `CityNumber` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `DistrictName` |  | |  |  |  |  |
| `VillageName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `CompanyPostalCode` |  | |  |  |  |  |
| `Street` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `StreetAddrNonDeliverableReason` |  | |  |  |  |  |
| `StreetPrefixName1` |  | |  |  |  |  |
| `StreetPrefixName2` |  | |  |  |  |  |
| `StreetSuffixName1` |  | |  |  |  |  |
| `StreetSuffixName2` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `HouseNumberSupplementText` |  | |  |  |  |  |
| `Building` |  | |  |  |  |  |
| `Floor` |  | |  |  |  |  |
| `RoomNumber` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `AddresseeName1` |  | |  |  |  |  |
| `AddresseeName2` |  | |  |  |  |  |
| `AddresseeName3` |  | |  |  |  |  |
| `AddresseeName4` |  | |  |  |  |  |
| `AddressSearchTerm1` |  | |  |  |  |  |
| `AddressSearchTerm2` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TransportZone` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
| `POBoxAddrNonDeliverableReason` |  | |  |  |  |  |
| `POBoxIsWithoutNumber` |  | |  |  |  |  |
| `POBoxPostalCode` |  | |  |  |  |  |
| `POBoxLobbyName` |  | |  |  |  |  |
| `POBoxDeviatingCityName` |  | |  |  |  |  |
| `POBoxDeviatingCityCode` |  | |  |  |  |  |
| `POBoxDeviatingRegion` |  | |  |  |  |  |
| `POBoxDeviatingCountry` |  | |  |  |  |  |
| `CareOfName` |  | |  |  |  |  |
| `DeliveryServiceTypeCode` |  | |  |  |  |  |
| `DeliveryServiceNumber` |  | |  |  |  |  |
| `AddressTimeZone` |  | |  |  |  |  |
| `SecondaryRegion` |  | |  |  |  |  |
| `SecondaryRegionName` |  | |  |  |  |  |
| `TertiaryRegion` |  | |  |  |  |  |
| `TertiaryRegionName` |  | |  |  |  |  |
| `RegionalStructureCheckStatus` |  | |  |  |  |  |
| `AddressGroup` |  | |  |  |  |  |
| `DistrictNumber` |  | |  |  |  |  |
| `Village` |  | |  |  |  |  |
| `RegionalStructureGroup` |  | |  |  |  |  |
| `AddressCreatedByUser` |  | |  |  |  |  |
| `AddressCreatedOnDateTime` |  | |  |  |  |  |
| `AddressChangedByUser` |  | |  |  |  |  |
| `AddressChangedOnDateTime` |  | |  |  |  |  |
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
| `_AddressRepresentationCode` | | ✓ | | | | |
| `_AddressObjectType` | | ✓ | | | | |
| `_TimeZone` | | ✓ | | | | |
| `_SecondaryRegion` | | ✓ | | | | |
| `_TertiaryRegion` | | ✓ | | | | |
| `_PostalCity` | | ✓ | | | | |
| `_POBoxDeviatingCityCode` | | ✓ | | | | |
| `_RegionalStructureCheckStatus` | | ✓ | | | | |
| `_Street` | | ✓ | | | | |
| `_AddressGroup` | | ✓ | | | | |
| `_AddressPersonName` | | ✓ | | | | |
| `_Addressremark` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
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
| `_AddressRepresentationCode` | `I_AddressRepresentation` | [0..1] |
| `_AddressObjectType` | `I_AddressObjectType` | [0..1] |
| `_TimeZone` | `I_TimeZone` | [0..1] |
| `_SecondaryRegion` | `I_SecondaryRegion` | [0..1] |
| `_TertiaryRegion` | `I_TertiaryRegion` | [0..1] |
| `_PostalCity` | `I_PostalCity` | [0..1] |
| `_POBoxDeviatingCityCode` | `I_PostalCity` | [0..1] |
| `_RegionalStructureCheckStatus` | `I_RegionalStructureCheckStatus` | [0..1] |
| `_Street` | `I_Street` | [0..1] |
| `_AddressGroup` | `I_AddressGroup` | [0..1] |
| `_AddressPersonName` | `I_AddressPersonName` | [0..1] |
| `_Addressremark` | `I_AddressRemark_2` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics : {
          dataCategory: #DIMENSION,
          dataExtraction: {
           enabled: true }
           }
@AccessControl.privilegedAssociations: ['_EmailAddress', '_CurrentDfltEmailAddress', '_PhoneNumber', '_CurrentDfltLandlinePhoneNmbr', '_CurrentDfltMobilePhoneNumber', '_FaxNumber', '_CurrentDfltFaxNumber', '_UniformResourceIdentifier', '_MainWebsiteURL']
@EndUserText.label: 'Address of an Organization'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'OrganizationAddress'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_OrganizationAddress
  as select from I_AddrOrgNamePostalAddress
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

  association [0..1] to I_Region                       as _Region                        on  $projection.Region  = _Region.Region
                                                                                         and $projection.Country = _Region.Country

  association [0..1] to I_Country                      as _Country                       on  $projection.Country = _Country.Country

  association [0..1] to I_FormOfAddress                as _FormOfAddress                 on  $projection.FormOfAddress = _FormOfAddress.FormOfAddress

  association [0..1] to I_AddressNonDeliverableReason  as _POBoxAddrNonDeliverableReason on  $projection.POBoxAddrNonDeliverableReason = _POBoxAddrNonDeliverableReason.AddressNonDeliverableReason

  association [0..1] to I_AddressNonDeliverableReason  as _StreetAddrNonDeliverableRsn   on  $projection.StreetAddrNonDeliverableReason = _StreetAddrNonDeliverableRsn.AddressNonDeliverableReason

  association [0..1] to I_TransportationZone           as _TransportationZone            on  $projection.TransportZone = _TransportationZone.TransportZone
                                                                                         and $projection.Country       = _TransportationZone.CountryCode

  association [0..1] to I_Region                       as _POBoxDeviatingRegion          on  $projection.POBoxDeviatingRegion  = _POBoxDeviatingRegion.Region
                                                                                         and $projection.POBoxDeviatingCountry = _POBoxDeviatingRegion.Country

  association [0..1] to I_Country                      as _POBoxDeviatingCountry         on  $projection.POBoxDeviatingCountry = _POBoxDeviatingCountry.Country

  association [0..1] to I_AddressCommunicationMethod   as _PrfrdCommMediumType           on  $projection.PrfrdCommMediumType = _PrfrdCommMediumType.CommunicationMediumType

  association [0..1] to I_AddressDeliveryServiceType   as _DeliveryServiceTypeCode       on  $projection.DeliveryServiceTypeCode = _DeliveryServiceTypeCode.DeliveryServiceTypeCode

  association [0..1] to I_Language                     as _CorrespondenceLanguage        on  $projection.CorrespondenceLanguage = _CorrespondenceLanguage.Language

  association [0..1] to I_AddressRepresentation        as _AddressRepresentationCode     on  $projection.AddressRepresentationCode = _AddressRepresentationCode.AddressRepresentationCode

  association [0..1] to I_AddressObjectType            as _AddressObjectType             on  $projection.AddressObjectType = _AddressObjectType.AddressObjectType

  association [0..1] to I_TimeZone                     as _TimeZone                      on  $projection.AddressTimeZone = _TimeZone.TimeZoneID

  association [0..1] to I_SecondaryRegion              as _SecondaryRegion               on  $projection.SecondaryRegion = _SecondaryRegion.SecondaryRegion
                                                                                         and $projection.Country         = _SecondaryRegion.Country
                                                                                         and $projection.Region          = _SecondaryRegion.Region

  association [0..1] to I_TertiaryRegion               as _TertiaryRegion                on  $projection.TertiaryRegion  = _TertiaryRegion.TertiaryRegion
                                                                                         and $projection.SecondaryRegion = _TertiaryRegion.SecondaryRegion
                                                                                         and $projection.Country         = _TertiaryRegion.Country
                                                                                         and $projection.Region          = _TertiaryRegion.Region

  association [0..1] to I_PostalCity                   as _PostalCity                    on  $projection.CityNumber = _PostalCity.CityNumber
                                                                                         and $projection.Country    = _PostalCity.Country
  
  association [0..1] to I_PostalCity                   as _POBoxDeviatingCityCode        on  $projection.POBoxDeviatingCityCode = _POBoxDeviatingCityCode.CityNumber
                                                                                         and $projection.Country    = _POBoxDeviatingCityCode.Country

  association [0..1] to I_RegionalStructureCheckStatus as _RegionalStructureCheckStatus  on  $projection.RegionalStructureCheckStatus = _RegionalStructureCheckStatus.RegionalStructureCheckStatus

  association [0..1] to I_Street                       as _Street                        on  $projection.Country = _Street.Country
                                                                                         and $projection.Street  = _Street.Street
 
  association [0..1] to I_AddressGroup                 as _AddressGroup                  on  $projection.AddressGroup = _AddressGroup.AddressGroup   
  
   association [0..1] to I_AddressPersonName            as _AddressPersonName             on  $projection.AddressPersonID = _AddressPersonName.AddressPersonID
                                                                                         and $projection.AddressRepresentationCode = _AddressPersonName.AddressRepresentationCode 
                                                                                         
                                                                                         
   association [0..*] to I_AddressRemark_2             as _Addressremark                  on    $projection.AddressID               = _Addressremark.AddressID
                                                                                          and $projection.AddressRepresentationCode = _Addressremark.AddressRepresentationCode                                                                                  
                                                                                                                                                                             
{
  key AddressID                                                             as AddressID,
  @ObjectModel.foreignKey.association: '_AddressPersonName'
  key cast('' as ad_persnum )                                               as AddressPersonID,
      @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressRepresentationCode'
  key AddressRepresentationCode                                             as AddressRepresentationCode,
      @ObjectModel.foreignKey.association: '_AddressObjectType'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressObjectType'
      cast('1' as ad_adrtype)                                               as AddressObjectType,
      @ObjectModel.foreignKey.association: '_CorrespondenceLanguage'
      CorrespondenceLanguage,
      @ObjectModel.foreignKey.association: '_PrfrdCommMediumType'
      @ObjectModel.sapObjectNodeTypeReference: 'CommunicationMediumType'
      PrfrdCommMediumType,
      cast(concat_with_space(AddresseeName1, AddresseeName2, 1) as ad_namtext ) as AddresseeFullName,
      @ObjectModel.foreignKey.association: '_PostalCity'
      @ObjectModel.sapObjectNodeTypeReference: 'CityNumber'
      CityNumber,
      CityName,
      DistrictName,
      VillageName,
      PostalCode,
      CompanyPostalCode,
      @ObjectModel.foreignKey.association: '_Street'
      @ObjectModel.sapObjectNodeTypeReference: 'Street'
      Street,
      StreetName,
      @ObjectModel.foreignKey.association: '_StreetAddrNonDeliverableRsn'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressNonDeliverableReason'
      @EndUserText.label: 'Street Address Non-Deliverable Reason'
      StreetAddrNonDeliverableReason,
      StreetPrefixName1,
      StreetPrefixName2,
      StreetSuffixName1,
      StreetSuffixName2,
      HouseNumber,
      HouseNumberSupplementText,
      Building,
      Floor,
      RoomNumber,
      @ObjectModel.foreignKey.association: '_Country'
      @ObjectModel.sapObjectNodeTypeReference: 'Country'
      Country,
      @ObjectModel.foreignKey.association: '_Region'
      @ObjectModel.sapObjectNodeTypeReference: 'Region'
      Region,
      @ObjectModel.foreignKey.association: '_FormOfAddress'
      @ObjectModel.sapObjectNodeTypeReference: 'FormOfAddress'
      FormOfAddress,
      AddresseeName1,
      AddresseeName2,
      AddresseeName3,
      AddresseeName4,
      AddressSearchTerm1,
      AddressSearchTerm2,
      TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_TransportationZone'
      @ObjectModel.sapObjectNodeTypeReference: 'TransportationZone'
      TransportZone,
      POBox,
      @ObjectModel.foreignKey.association: '_POBoxAddrNonDeliverableReason'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressNonDeliverableReason'
      @EndUserText.label: 'PO Box Address Non-Deliverable Reason'
      POBoxAddrNonDeliverableReason,
      POBoxIsWithoutNumber,
      POBoxPostalCode,
      POBoxLobbyName,
      POBoxDeviatingCityName,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingCityCode'
      @ObjectModel.sapObjectNodeTypeReference: 'CityNumber'
      POBoxDeviatingCityCode,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'Region'
      POBoxDeviatingRegion,
      @ObjectModel.foreignKey.association: '_POBoxDeviatingCountry'
      @ObjectModel.sapObjectNodeTypeReference: 'Country'
      POBoxDeviatingCountry,
      CareOfName,
      @ObjectModel.foreignKey.association: '_DeliveryServiceTypeCode'
      @ObjectModel.sapObjectNodeTypeReference: 'DeliveryServiceTypeCode'
      DeliveryServiceTypeCode,
      DeliveryServiceNumber,
      @ObjectModel.foreignKey.association: '_TimeZone'
      @ObjectModel.sapObjectNodeTypeReference: 'TimeZone'
      AddressTimeZone,
      @ObjectModel.foreignKey.association: '_SecondaryRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'SecondaryRegion'
      SecondaryRegion,
      SecondaryRegionName,
      @ObjectModel.foreignKey.association: '_TertiaryRegion'
      @ObjectModel.sapObjectNodeTypeReference: 'TertiaryRegion'
      TertiaryRegion,
      TertiaryRegionName,
      @ObjectModel.foreignKey.association: '_RegionalStructureCheckStatus'
      @ObjectModel.sapObjectNodeTypeReference: 'RegionalStructureCheckStatus'
      RegionalStructureCheckStatus,
      @ObjectModel.foreignKey.association: '_AddressGroup'
      @ObjectModel.sapObjectNodeTypeReference: 'AddressGroup'
      AddressGroup,
      DistrictNumber,
      Village,
      RegionalStructureGroup,
      @Semantics.user.createdBy: true
      AddressCreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      @Analytics.hidden: true
      AddressCreatedOnDateTime,
      @Semantics.user.lastChangedBy: true
      AddressChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      @Analytics.hidden: true
      AddressChangedOnDateTime,

      _EmailAddress,
      _PhoneNumber,
      _FaxNumber,
      _UniformResourceIdentifier,

      _CurrentDfltEmailAddress,
      _CurrentDfltMobilePhoneNumber,
      _CurrentDfltLandlinePhoneNmbr,
      _CurrentDfltFaxNumber,
      _MainWebsiteURL,

      _Region,
      _Country,
      _FormOfAddress,
      _StreetAddrNonDeliverableRsn,
      _POBoxAddrNonDeliverableReason,
      _TransportationZone,
      _POBoxDeviatingRegion,
      _POBoxDeviatingCountry,
      _PrfrdCommMediumType,
      _DeliveryServiceTypeCode,
      _CorrespondenceLanguage,
      _AddressObjectType,
      _AddressRepresentationCode,
      _TimeZone,
      _SecondaryRegion,
      _TertiaryRegion,
      _PostalCity,
      _RegionalStructureCheckStatus,
      _Street,
      _AddressGroup,
      _AddressPersonName,
      _POBoxDeviatingCityCode, 
      _Addressremark
}
where
  AddressIsPersonAddress is initial
```
