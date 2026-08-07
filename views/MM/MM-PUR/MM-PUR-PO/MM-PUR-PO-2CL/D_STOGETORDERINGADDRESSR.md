---
name: D_STOGETORDERINGADDRESSR
description: D Stogetorderingaddressr
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - address
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# D_STOGETORDERINGADDRESSR

**D Stogetorderingaddressr**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `StockTransportOrder` |  | |  | `vdm_stocktransportorder` |
| `AddressID` |  | |  | `ad_addrnum` |
| `AddressPersonID` |  | |  | `ad_persnum` |
| `AddressRepresentationCode` |  | |  | `ad_nation` |
| `CorrespondenceLanguage` |  | |  | `spras` |
| `PrfrdCommMediumType` |  | |  | `ad_comm` |
| `AddresseeFullName` |  | |  | `ad_namtext` |
| `OrganizationName1` |  | |  | `ad_name1` |
| `OrganizationName2` |  | |  | `ad_name2` |
| `OrganizationName3` |  | |  | `ad_name3` |
| `OrganizationName4` |  | |  | `ad_name4` |
| `AddressSearchTerm1` |  | |  | `ad_sort1` |
| `AddressSearchTerm2` |  | |  | `ad_sort2` |
| `CityName` |  | |  | `ad_city1` |
| `DistrictName` |  | |  | `ad_city2` |
| `VillageName` |  | |  | `ad_city3` |
| `PostalCode` |  | |  | `ad_pstcd1` |
| `CompanyPostalCode` |  | |  | `ad_pstcd3` |
| `StreetName` |  | |  | `ad_street` |
| `StreetPrefixName1` |  | |  | `ad_strspp1` |
| `StreetPrefixName2` |  | |  | `ad_strspp2` |
| `StreetSuffixName1` |  | |  | `ad_strspp3` |
| `StreetSuffixName2` |  | |  | `ad_lctn` |
| `HouseNumber` |  | |  | `ad_hsnm1` |
| `HouseNumberSupplementText` |  | |  | `ad_hsnm2` |
| `Building` |  | |  | `ad_bldng` |
| `Floor` |  | |  | `ad_floor` |
| `RoomNumber` |  | |  | `ad_roomnum` |
| `Country` |  | |  | `land1` |
| `Region` |  | |  | `regio` |
| `FormOfAddress` |  | |  | `ad_title` |
| `TaxJurisdiction` |  | |  | `ad_txjcd` |
| `TransportZone` |  | |  | `lzone` |
| `POBox` |  | |  | `ad_pobx` |
| `POBoxIsWithoutNumber` |  | |  | `ad_pobxnum` |
| `POBoxPostalCode` |  | |  | `ad_pstcd2` |
| `POBoxLobbyName` |  | |  | `ad_po_box_lby` |
| `POBoxDeviatingCityName` |  | |  | `ad_pobxloc` |
| `POBoxDeviatingRegion` |  | |  | `ad_pobxreg` |
| `POBoxDeviatingCountry` |  | |  | `ad_pobxcty` |
| `CareOfName` |  | |  | `ad_name_co` |
| `DeliveryServiceTypeCode` |  | |  | `ad_delivery_service_type` |
| `DeliveryServiceNumber` |  | |  | `ad_delivery_service_number` |
| `AddressTimeZone` |  | |  | `ad_tzone` |
| `EmailAddress` |  | |  | `ad_smtpadr` |
| `RegionalStructureCheckStatus` |  | |  | `ad_checkst` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Get Ordering Address details for STO'
define root abstract entity D_STOGetOrderingAddressR
{
  StockTransportOrder          : vdm_stocktransportorder;
  AddressID                    : ad_addrnum;
  AddressPersonID              : ad_persnum;
  AddressRepresentationCode    : ad_nation;
  CorrespondenceLanguage       : spras;
  PrfrdCommMediumType          : ad_comm;
  AddresseeFullName            : ad_namtext;
  OrganizationName1            : ad_name1;
  OrganizationName2            : ad_name2;
  OrganizationName3            : ad_name3;
  OrganizationName4            : ad_name4;
  AddressSearchTerm1           : ad_sort1;
  AddressSearchTerm2           : ad_sort2;
  CityName                     : ad_city1;
  DistrictName                 : ad_city2;
  VillageName                  : ad_city3;
  PostalCode                   : ad_pstcd1;
  CompanyPostalCode            : ad_pstcd3;
  StreetName                   : ad_street;
  StreetPrefixName1            : ad_strspp1;
  StreetPrefixName2            : ad_strspp2;
  StreetSuffixName1            : ad_strspp3;
  StreetSuffixName2            : ad_lctn;
  HouseNumber                  : ad_hsnm1;
  HouseNumberSupplementText    : ad_hsnm2;
  Building                     : ad_bldng;
  Floor                        : ad_floor;
  RoomNumber                   : ad_roomnum;
  Country                      : land1;
  Region                       : regio;
  FormOfAddress                : ad_title;
  TaxJurisdiction              : ad_txjcd;
  TransportZone                : lzone;
  POBox                        : ad_pobx;
  POBoxIsWithoutNumber         : ad_pobxnum;
  POBoxPostalCode              : ad_pstcd2;
  POBoxLobbyName               : ad_po_box_lby;
  POBoxDeviatingCityName       : ad_pobxloc;
  POBoxDeviatingRegion         : ad_pobxreg;
  POBoxDeviatingCountry        : ad_pobxcty;
  CareOfName                   : ad_name_co;
  DeliveryServiceTypeCode      : ad_delivery_service_type;
  DeliveryServiceNumber        : ad_delivery_service_number;
  AddressTimeZone              : ad_tzone;
  EmailAddress                 : ad_smtpadr;
  RegionalStructureCheckStatus : ad_checkst;
}
```
