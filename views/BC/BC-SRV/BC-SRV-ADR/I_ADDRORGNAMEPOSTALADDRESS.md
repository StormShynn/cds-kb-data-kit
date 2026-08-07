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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressID` | ✓ | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `AddressRepresentationCode` | ✓ | |  | `nation` | `CHAR(1)` | Version ID for International Addresses |
| `AddressIsPersonAddress` |  | |  | `pers_addr` | `CHAR(1)` | Flag: This is a personal address |
| `CorrespondenceLanguage` |  | |  | `langu` | `LANG(1)` | Language Key |
| `PrfrdCommMediumType` |  | |  | `deflt_comm` | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `CityNumber` |  | |  | `city_code` | `CHAR(12)` | City code for city/street file |
| `CityName` |  | |  | `city1` | `CHAR(40)` | City |
| `DistrictName` |  | |  | `city2` | `CHAR(40)` | District |
| `VillageName` |  | |  | `home_city` | `CHAR(40)` | City (different from postal city) |
| `PostalCode` |  | |  | `post_code1` | `CHAR(10)` | City Postal Code |
| `CompanyPostalCode` |  | |  | `post_code3` | `CHAR(10)` | Company Postal Code (for Large Customers) |
| `POBox` |  | |  | `po_box` | `CHAR(10)` | PO Box |
| `POBoxAddrNonDeliverableReason` |  | |  | `dont_use_p` | `CHAR(4)` | PO Box Address Undeliverable Flag |
| `POBoxIsWithoutNumber` |  | |  | `po_box_num` | `CHAR(1)` | Flag: PO Box Without Number |
| `POBoxPostalCode` |  | |  | `post_code2` | `CHAR(10)` | PO Box Postal Code |
| `POBoxLobbyName` |  | |  | `po_box_lobby` | `CHAR(40)` | PO Box Lobby |
| `POBoxDeviatingCityName` |  | |  | `po_box_loc` | `CHAR(40)` | PO Box city |
| `POBoxDeviatingCityCode` |  | |  | `city_code2` | `CHAR(12)` | City PO box code (City file) |
| `POBoxDeviatingRegion` |  | |  | `po_box_reg` | `CHAR(3)` | Region for PO Box (Country/Region, State, Province, ...) |
| `POBoxDeviatingCountry` |  | |  | `po_box_cty` | `CHAR(3)` | PO Box of Country/Region |
| `Street` |  | |  | `streetcode` | `CHAR(12)` | Street Number for City/Street File |
| `StreetName` |  | |  | `street` | `CHAR(60)` | Street |
| `StreetAddrNonDeliverableReason` |  | |  | `dont_use_s` | `CHAR(4)` | Street Address Undeliverable Flag |
| `StreetPrefixName1` |  | |  | `str_suppl1` | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` |  | |  | `str_suppl2` | `CHAR(40)` | Street 3 |
| `StreetSuffixName1` |  | |  | `str_suppl3` | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` |  | |  | `location` | `CHAR(40)` | Street 5 |
| `HouseNumber` |  | |  | `house_num1` | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | |  | `house_num2` | `CHAR(10)` | House number supplement |
| `Building` |  | |  | `building` | `CHAR(20)` | Building (Number or Code) |
| `Floor` |  | |  | `floor` | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | |  | `roomnumber` | `CHAR(10)` | Room or Apartment Number |
| `Country` |  | |  | `country` | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  | `region` | `CHAR(3)` | Region (State, Province, County) |
| `CareOfName` |  | |  | `name_co` | `CHAR(40)` | c/o name |
| `FormOfAddress` |  | |  | `title` | `CHAR(4)` | Form-of-Address Key |
| `AddresseeName1` |  | |  | `name1` | `CHAR(40)` | Name 1 |
| `AddresseeName2` |  | |  | `name2` | `CHAR(40)` | Name 2 |
| `AddresseeName3` |  | |  | `name3` | `CHAR(40)` | Name 3 |
| `AddresseeName4` |  | |  | `name4` | `CHAR(40)` | Name 4 |
| `TaxJurisdiction` |  | |  | `taxjurcode` | `CHAR(15)` | Tax Jurisdiction |
| `TransportZone` |  | |  | `transpzone` | `CHAR(10)` | Transportation zone to or from which the goods are delivered |
| `DeliveryServiceTypeCode` |  | |  | `deli_serv_type` | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceNumber` |  | |  | `deli_serv_number` | `CHAR(10)` | Number of Delivery Service |
| `AddressTimeZone` |  | |  | `time_zone` | `CHAR(6)` | Address Time Zone |
| `SecondaryRegion` |  | |  | `county_code` | `CHAR(8)` | County code for county |
| `SecondaryRegionName` |  | |  | `county` | `CHAR(40)` | County |
| `TertiaryRegion` |  | |  | `township_code` | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | |  | `township` | `CHAR(40)` | Township |
| `AddressSearchTerm1` |  | |  | `sort1` | `CHAR(20)` | Search Term 1 |
| `AddressSearchTerm2` |  | |  | `sort2` | `CHAR(20)` | Search Term 2 |
| `RegionalStructureCheckStatus` |  | |  | `chckstatus` | `CHAR(1)` | City File Test Status |
| `AddressGroup` |  | |  | `addr_group` | `CHAR(4)` | Address Group (Key) (Business Address Services) |
| `DistrictNumber` |  | |  | `cityp_code` | `CHAR(8)` | District code for City and Street file |
| `Village` |  | |  | `cityh_code` | `CHAR(12)` | Different city for city/street file |
| `RegionalStructureGroup` |  | |  | `regiogroup` | `CHAR(8)` | Regional structure grouping |
| `AddressCreatedByUser` |  | |  | `addresscreatedbyuser` | `CHAR(12)` | Created By User |
| `AddressCreatedOnDateTime` |  | |  | `addresscreatedondatetime` | `UTCL(27)` | Creation Date Time |
| `AddressChangedByUser` |  | |  | `addresschangedbyuser` | `CHAR(12)` | Last Changed By User |
| `AddressChangedOnDateTime` |  | |  | `addresschangedondatetime` | `UTCL(27)` | Last Change Date Time |
| `_Region` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_FormOfAddress` | | ✓ | | | | |
| `_TransportationZone` | | ✓ | | | | |
| `_AddressRepresentationCode` | | ✓ | | | | |

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
