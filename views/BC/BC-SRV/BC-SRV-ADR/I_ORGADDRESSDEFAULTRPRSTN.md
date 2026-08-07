---
name: I_ORGADDRESSDEFAULTRPRSTN
description: Orgaddressdefaultrprstn
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
| `AddressID` | ✓ | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressRepresentationCode` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `PrfrdCommMediumType` |  | |  |  |  |  |
| `AddresseeFullName` |  | |  |  |  |  |
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
