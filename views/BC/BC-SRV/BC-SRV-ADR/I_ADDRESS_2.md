---
name: I_ADDRESS_2
description: Address 2
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

| Field | Data Source |
|---|---|
| key `AddressID` | `Address.AddressID` |
| key `AddressPersonID` | `Address.AddressPersonID` |
| key `AddressRepresentationCode` | `Address.AddressRepresentationCode` |
| `AddressObjectType` | `Address.AddressObjectType` |
| `CorrespondenceLanguage` | `Address.CorrespondenceLanguage` |
| `PrfrdCommMediumType` | `Address.PrfrdCommMediumType` |
| `AddresseeFullName` | `Address.AddresseeFullName` |
| `PersonGivenName` | `Address.PersonGivenName` |
| `PersonFamilyName` | `Address.PersonFamilyName` |
| `OrganizationName1` | `Address.OrganizationName1` |
| `OrganizationName2` | `Address.OrganizationName2` |
| `OrganizationName3` | `Address.OrganizationName3` |
| `OrganizationName4` | `Address.OrganizationName4` |
| `AddressSearchTerm1` | `Address.AddressSearchTerm1` |
| `AddressSearchTerm2` | `Address.AddressSearchTerm2` |
| `CityNumber` | `Address.CityNumber` |
| `CityName` | `Address.CityName` |
| `DistrictName` | `Address.DistrictName` |
| `VillageName` | `Address.VillageName` |
| `PostalCode` | `Address.PostalCode` |
| `CompanyPostalCode` | `Address.CompanyPostalCode` |
| `Street` | `Address.Street` |
| `StreetName` | `Address.StreetName` |
| `StreetAddrNonDeliverableReason` | `Address.StreetAddrNonDeliverableReason` |
| `StreetPrefixName1` | `Address.StreetPrefixName1` |
| `StreetPrefixName2` | `Address.StreetPrefixName2` |
| `StreetSuffixName1` | `Address.StreetSuffixName1` |
| `StreetSuffixName2` | `Address.StreetSuffixName2` |
| `HouseNumber` | `Address.HouseNumber` |
| `HouseNumberSupplementText` | `Address.HouseNumberSupplementText` |
| `Building` | `Address.Building` |
| `Floor` | `Address.Floor` |
| `RoomNumber` | `Address.RoomNumber` |
| `Country` | `Address.Country` |
| `Region` | `Address.Region` |
| `FormOfAddress` | `Address.FormOfAddress` |
| `TaxJurisdiction` | `Address.TaxJurisdiction` |
| `TransportZone` | `Address.TransportZone` |
| `POBox` | `Address.POBox` |
| `POBoxAddrNonDeliverableReason` | `Address.POBoxAddrNonDeliverableReason` |
| `POBoxIsWithoutNumber` | `Address.POBoxIsWithoutNumber` |
| `POBoxPostalCode` | `Address.POBoxPostalCode` |
| `POBoxLobbyName` | `Address.POBoxLobbyName` |
| `POBoxDeviatingCityName` | `Address.POBoxDeviatingCityName` |
| `POBoxDeviatingCityCode` | `Address.POBoxDeviatingCityCode` |
| `POBoxDeviatingRegion` | `Address.POBoxDeviatingRegion` |
| `POBoxDeviatingCountry` | `Address.POBoxDeviatingCountry` |
| `CareOfName` | `Address.CareOfName` |
| `DeliveryServiceTypeCode` | `Address.DeliveryServiceTypeCode` |
| `DeliveryServiceNumber` | `Address.DeliveryServiceNumber` |
| `AddressTimeZone` | `Address.AddressTimeZone` |
| `SecondaryRegion` | `Address.SecondaryRegion` |
| `SecondaryRegionName` | `Address.SecondaryRegionName` |
| `TertiaryRegion` | `Address.TertiaryRegion` |
| `TertiaryRegionName` | `Address.TertiaryRegionName` |
| `RegionalStructureCheckStatus` | `Address.RegionalStructureCheckStatus` |
| `AddressGroup` | `Address.AddressGroup` |
| `DistrictNumber` | `Address.DistrictNumber` |
| `Village` | `Address.Village` |
| `RegionalStructureGroup` | `Address.RegionalStructureGroup` |
| `AddressCreatedByUser` | `Address.AddressCreatedByUser` |
| `AddressCreatedOnDateTime` | `Address.AddressCreatedOnDateTime` |
| `AddressChangedByUser` | `Address.AddressChangedByUser` |
| `AddressChangedOnDateTime` | `Address.AddressChangedOnDateTime` |
| `_OrganizationAddress` | *Association* |
| `_PersonAddress` | *Association* |
| `_EmailAddress` | *Association* |
| `_CurrentDfltEmailAddress` | *Association* |
| `_PhoneNumber` | *Association* |
| `_CurrentDfltLandlinePhoneNmbr` | *Association* |
| `_CurrentDfltMobilePhoneNumber` | *Association* |
| `_FaxNumber` | *Association* |
| `_CurrentDfltFaxNumber` | *Association* |
| `_UniformResourceIdentifier` | *Association* |
| `_MainWebsiteURL` | *Association* |
| `_AddressRemark` | *Association* |

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
