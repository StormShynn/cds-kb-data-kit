---
name: I_ORGNAMEPOSTLADDRDFLTRPRSTN
description: "Orgnamepostladdrdfltrprstn"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ORGNAMEPOSTLADDRDFLTRPRSTN

**Orgnamepostladdrdfltrprstn**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `AddressRepresentationCode` |  | |  |  | `CHAR(1)` | Version ID for International Addresses |
| `AddressIsPersonAddress` |  | |  |  | `CHAR(1)` | Flag: This is a personal address |
| `CorrespondenceLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `PrfrdCommMediumType` |  | |  |  | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `CityNumber` |  | |  |  | `CHAR(12)` | City code for city/street file |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `DistrictName` |  | |  |  | `CHAR(40)` | District |
| `VillageName` |  | |  |  | `CHAR(40)` | City (different from postal city) |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `CompanyPostalCode` |  | |  |  | `CHAR(10)` | Company Postal Code (for Large Customers) |
| `POBox` |  | |  |  | `CHAR(10)` | PO Box |
| `POBoxAddrNonDeliverableReason` |  | |  |  | `CHAR(4)` | PO Box Address Undeliverable Flag |
| `POBoxIsWithoutNumber` |  | |  |  | `CHAR(1)` | Flag: PO Box Without Number |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
| `POBoxLobbyName` |  | |  |  | `CHAR(40)` | PO Box Lobby |
| `POBoxDeviatingCityName` |  | |  |  | `CHAR(40)` | PO Box city |
| `POBoxDeviatingCityCode` |  | |  |  | `CHAR(12)` | City PO box code (City file) |
| `POBoxDeviatingRegion` |  | |  |  | `CHAR(3)` | Region for PO Box (Country/Region, State, Province, ...) |
| `POBoxDeviatingCountry` |  | |  |  | `CHAR(3)` | PO Box of Country/Region |
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
| `CareOfName` |  | |  |  | `CHAR(40)` | c/o name |
| `FormOfAddress` |  | |  |  | `CHAR(4)` | Form-of-Address Key |
| `AddresseeName1` |  | |  |  | `CHAR(40)` | Name 1 |
| `AddresseeName2` |  | |  |  | `CHAR(40)` | Name 2 |
| `AddresseeName3` |  | |  |  | `CHAR(40)` | Name 3 |
| `AddresseeName4` |  | |  |  | `CHAR(40)` | Name 4 |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `TransportZone` |  | |  |  | `CHAR(10)` | Transportation zone to or from which the goods are delivered |
| `DeliveryServiceTypeCode` |  | |  |  | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceNumber` |  | |  |  | `CHAR(10)` | Number of Delivery Service |
| `AddressTimeZone` |  | |  |  | `CHAR(6)` | Address Time Zone |
| `SecondaryRegion` |  | |  |  | `CHAR(8)` | County code for county |
| `SecondaryRegionName` |  | |  |  | `CHAR(40)` | County |
| `TertiaryRegion` |  | |  |  | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | |  |  | `CHAR(40)` | Township |
| `AddressSearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 |
| `AddressSearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 |
| `RegionalStructureCheckStatus` |  | |  |  | `CHAR(1)` | City File Test Status |
| `AddressGroup` |  | |  |  | `CHAR(4)` | Address Group (Key) (Business Address Services) |
| `_DfltRprstnPostalAddress` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DfltRprstnPostalAddress` | `I_AddrOrgNamePostalAddress` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_Region', '_Country', '_FormOfAddress', '_TransportationZone']
@Analytics.dataCategory: #DIMENSION
@EndUserText.label: 'Dflt Addr Rprstn for Org and Postal'
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
define view entity I_OrgNamePostlAddrDfltRprstn 
     as select from I_AddrOrgNamePostalAddress as PostalAddress
     association [0..*] to I_AddrOrgNamePostalAddress as _DfltRprstnPostalAddress on $projection.AddressID = _DfltRprstnPostalAddress.AddressID
                                                                                  and _DfltRprstnPostalAddress.AddressRepresentationCode is not initial
{
 key PostalAddress.AddressID,
  PostalAddress.AddressRepresentationCode,
  PostalAddress.AddressIsPersonAddress,
  PostalAddress.CorrespondenceLanguage,
  PostalAddress.PrfrdCommMediumType,
  PostalAddress.CityNumber,
  PostalAddress.CityName,
  PostalAddress.DistrictName,
  PostalAddress.VillageName,
  PostalAddress.PostalCode,
  PostalAddress.CompanyPostalCode,
  PostalAddress.POBox,
  @EndUserText.label: 'PO Box Address Non-Deliverable Reason'
  PostalAddress.POBoxAddrNonDeliverableReason,
  PostalAddress.POBoxIsWithoutNumber,
  PostalAddress.POBoxPostalCode,
  PostalAddress.POBoxLobbyName,
  PostalAddress.POBoxDeviatingCityName,
  PostalAddress.POBoxDeviatingCityCode,
  PostalAddress.POBoxDeviatingRegion,
  PostalAddress.POBoxDeviatingCountry,
  PostalAddress.Street,
  PostalAddress.StreetName,
  @EndUserText.label: 'Street Address Non-Deliverable Reason'
  PostalAddress.StreetAddrNonDeliverableReason,
  PostalAddress.StreetPrefixName1,
  PostalAddress.StreetPrefixName2,
  PostalAddress.StreetSuffixName1,
  PostalAddress.StreetSuffixName2,
  PostalAddress.HouseNumber,
  PostalAddress.HouseNumberSupplementText,
  PostalAddress.Building,
  PostalAddress.Floor,
  PostalAddress.RoomNumber,
  @ObjectModel.foreignKey.association: '_Country'  
  PostalAddress.Country,
  PostalAddress.Region,
  PostalAddress.CareOfName,
  @ObjectModel.foreignKey.association: '_FormOfAddress' 
  PostalAddress.FormOfAddress,
  PostalAddress.AddresseeName1,
  PostalAddress.AddresseeName2,
  PostalAddress.AddresseeName3,
  PostalAddress.AddresseeName4,
  PostalAddress.TaxJurisdiction,
  @ObjectModel.foreignKey.association: '_TransportationZone'  
  PostalAddress.TransportZone,
  PostalAddress.DeliveryServiceTypeCode,
  PostalAddress.DeliveryServiceNumber,
  PostalAddress.AddressTimeZone,
  PostalAddress.SecondaryRegion,
  PostalAddress.SecondaryRegionName,
  PostalAddress.TertiaryRegion,
  PostalAddress.TertiaryRegionName,
  PostalAddress.AddressSearchTerm1,
  PostalAddress.AddressSearchTerm2,
  PostalAddress.RegionalStructureCheckStatus,
  PostalAddress.AddressGroup,
  PostalAddress._Country,
  PostalAddress._FormOfAddress,
  PostalAddress._Region,
  PostalAddress._TransportationZone,
  _DfltRprstnPostalAddress
}
where
  AddressRepresentationCode is initial
```
