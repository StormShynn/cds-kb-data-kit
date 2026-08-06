---
name: I_ADDRORGNAMEPOSTALADDRESS
description: Addrorgnamepostaladdress
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
# I_ADDRORGNAMEPOSTALADDRESS

**Addrorgnamepostaladdress**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AddressID` | `addrnumber` |
| key `AddressRepresentationCode` | `nation` |
| `AddressIsPersonAddress` | `pers_addr` |
| `CorrespondenceLanguage` | `langu` |
| `PrfrdCommMediumType` | `deflt_comm` |
| `CityNumber` | `city_code` |
| `CityName` | `city1` |
| `DistrictName` | `city2` |
| `VillageName` | `home_city` |
| `PostalCode` | `post_code1` |
| `CompanyPostalCode` | `post_code3` |
| `POBox` | `po_box` |
| `POBoxAddrNonDeliverableReason` | `dont_use_p` |
| `POBoxIsWithoutNumber` | `po_box_num` |
| `POBoxPostalCode` | `post_code2` |
| `POBoxLobbyName` | `po_box_lobby` |
| `POBoxDeviatingCityName` | `po_box_loc` |
| `POBoxDeviatingCityCode` | `city_code2` |
| `POBoxDeviatingRegion` | `po_box_reg` |
| `POBoxDeviatingCountry` | `po_box_cty` |
| `Street` | `streetcode` |
| `StreetName` | `street` |
| `StreetAddrNonDeliverableReason` | `dont_use_s` |
| `StreetPrefixName1` | `str_suppl1` |
| `StreetPrefixName2` | `str_suppl2` |
| `StreetSuffixName1` | `str_suppl3` |
| `StreetSuffixName2` | `location` |
| `HouseNumber` | `house_num1` |
| `HouseNumberSupplementText` | `house_num2` |
| `Building` | `building` |
| `Floor` | `floor` |
| `RoomNumber` | `roomnumber` |
| `Country` | `country` |
| `Region` | `region` |
| `CareOfName` | `name_co` |
| `FormOfAddress` | `title` |
| `AddresseeName1` | `name1` |
| `AddresseeName2` | `name2` |
| `AddresseeName3` | `name3` |
| `AddresseeName4` | `name4` |
| `TaxJurisdiction` | `taxjurcode` |
| `TransportZone` | `transpzone` |
| `DeliveryServiceTypeCode` | `deli_serv_type` |
| `DeliveryServiceNumber` | `deli_serv_number` |
| `AddressTimeZone` | `time_zone` |
| `SecondaryRegion` | `county_code` |
| `SecondaryRegionName` | `county` |
| `TertiaryRegion` | `township_code` |
| `TertiaryRegionName` | `township` |
| `AddressSearchTerm1` | `sort1` |
| `AddressSearchTerm2` | `sort2` |
| `RegionalStructureCheckStatus` | `chckstatus` |
| `AddressGroup` | `addr_group` |
| `DistrictNumber` | `cityp_code` |
| `Village` | `cityh_code` |
| `RegionalStructureGroup` | `regiogroup` |
| `AddressCreatedByUser` | `addresscreatedbyuser` |
| `AddressCreatedOnDateTime` | `addresscreatedondatetime` |
| `AddressChangedByUser` | `addresschangedbyuser` |
| `AddressChangedOnDateTime` | `addresschangedondatetime` |
| `_Region` | *Association* |
| `_Country` | *Association* |
| `_FormOfAddress` | *Association* |
| `_TransportationZone` | *Association* |
| `_AddressRepresentationCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Region` | `I_Region` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_FormOfAddress` | `I_FormOfAddress` | [0..1] |
| `_TransportationZone` | `I_TransportationZone` | [0..1] |
| `_AddressRepresentationCode` | `I_AddressRepresentation` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Postal Address and Organization Name'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'AddressID'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddrOrgNamePostalAddress
  as select from adrc
  association [0..1] to I_Region             as _Region             on  $projection.Region  = _Region.Region
                                                                    and $projection.Country = _Region.Country

  association [0..1] to I_Country            as _Country            on  $projection.Country = _Country.Country

  association [0..1] to I_FormOfAddress      as _FormOfAddress      on  $projection.FormOfAddress = _FormOfAddress.FormOfAddress

  association [0..1] to I_TransportationZone as _TransportationZone on  $projection.TransportZone = _TransportationZone.TransportZone
                                                                    and $projection.Country       = _TransportationZone.CountryCode
  
  association [0..1] to I_AddressRepresentation as _AddressRepresentationCode on $projection.AddressRepresentationCode = _AddressRepresentationCode.AddressRepresentationCode

{
  key addrnumber               as AddressID,
  @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
  key nation                   as AddressRepresentationCode,

      pers_addr                as AddressIsPersonAddress,
      langu                    as CorrespondenceLanguage,
      deflt_comm               as PrfrdCommMediumType,
      city_code                as CityNumber,
      city1                    as CityName,
      city2                    as DistrictName,
      home_city                as VillageName,
      post_code1               as PostalCode,
      post_code3               as CompanyPostalCode,
      po_box                   as POBox,
      @EndUserText.label: 'PO Box Address Non-Deliverable Reason'
      dont_use_p               as POBoxAddrNonDeliverableReason,
      po_box_num               as POBoxIsWithoutNumber,
      post_code2               as POBoxPostalCode,
      po_box_lobby             as POBoxLobbyName,
      po_box_loc               as POBoxDeviatingCityName,
      city_code2               as POBoxDeviatingCityCode,
      po_box_reg               as POBoxDeviatingRegion,
      po_box_cty               as POBoxDeviatingCountry,
      streetcode               as Street,
      street                   as StreetName,
      @EndUserText.label: 'Street Address Non-Deliverable Reason'
      dont_use_s               as StreetAddrNonDeliverableReason,
      str_suppl1               as StreetPrefixName1,
      str_suppl2               as StreetPrefixName2,
      str_suppl3               as StreetSuffixName1,
      location                 as StreetSuffixName2,
      house_num1               as HouseNumber,
      house_num2               as HouseNumberSupplementText,
      building                 as Building,
      floor                    as Floor,
      roomnumber               as RoomNumber,
      @ObjectModel.foreignKey.association: '_Country'
      country                  as Country,
      @ObjectModel.foreignKey.association: '_Region'
      region                   as Region,
      name_co                  as CareOfName,
      @ObjectModel.foreignKey.association: '_FormOfAddress'
      title                    as FormOfAddress,
      name1                    as AddresseeName1,
      name2                    as AddresseeName2,
      name3                    as AddresseeName3,
      name4                    as AddresseeName4,
      taxjurcode               as TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_TransportationZone'
      transpzone               as TransportZone,
      deli_serv_type           as DeliveryServiceTypeCode,
      deli_serv_number         as DeliveryServiceNumber,
      time_zone                as AddressTimeZone,
      county_code              as SecondaryRegion,
      county                   as SecondaryRegionName,
      township_code            as TertiaryRegion,
      township                 as TertiaryRegionName,
      sort1                    as AddressSearchTerm1,
      sort2                    as AddressSearchTerm2,
      chckstatus               as RegionalStructureCheckStatus,
      addr_group               as AddressGroup,
      cityp_code               as DistrictNumber,
      cityh_code               as Village,
      regiogroup               as RegionalStructureGroup,
      @Semantics.user.createdBy: true
      addresscreatedbyuser     as AddressCreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      addresscreatedondatetime as AddressCreatedOnDateTime,
      @Semantics.user.lastChangedBy: true
      addresschangedbyuser     as AddressChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      addresschangedondatetime as AddressChangedOnDateTime,
      _Region,
      _Country,
      _FormOfAddress,
      _TransportationZone,
      _AddressRepresentationCode
}
where
  date_from = '00010101'
```
