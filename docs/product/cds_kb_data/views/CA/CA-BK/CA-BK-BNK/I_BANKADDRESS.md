---
name: I_BANKADDRESS
description: "Bank Address"
app_component: CA-BK-BNK
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKADDRESS')/$value
semantic_en: "Bank Address"
semantic_vi: "Bank Address — CDS view giao diện dựa trên I_Bank_2."
keywords:
  - "bank"
  - "address"
  - "country"
  - "internal"
  - "long"
  - "name"
  - "branch"
  - "street"
tags:
  - CA
  - CA-BK
  - CA-BK-BNK
  - component:CA-BK-BNK
  - interface-view
  - lob:cross_application components
---
# I_BANKADDRESS

**Bank Address**

| Property | Value |
|---|---|
| App Component | `CA-BK-BNK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKADDRESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` | ✓ | |  |  | `CHAR(15)` | Bank Keys |
| `LongBankName` |  | |  | `cast( concat(Address.AddresseeName1, Address.AddresseeName2) as bf_bank_name_in_local_script preserving type )` | `CHAR(80)` | Bank Name |
| `LongBankBranch` |  | |  | `cast( concat(Address.AddresseeName3, Address.AddresseeName4) as bf_bank_branch_in_local_script preserving type )` | `CHAR(80)` | Bank Branch |
| `StreetName` |  | |  | `case when ( Address.StreetName is null or Address.StreetName is initial ) then Bank.ShortStreetName else Address.StreetName end` | `CHAR(60)` | Street |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | |  |  | `CHAR(10)` | House number supplement |
| `CityName` |  | |  | `case when ( Address.CityName is null or Address.CityName is initial ) then Bank.ShortCityName else Address.CityName end` | `CHAR(40)` | City |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  | `case when ( Address.Region is null or Address.Region is initial ) then Bank.Region else Address.Region end` | `CHAR(3)` | Region (State, Province, County) |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `CorrespondenceLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `PrfrdCommMediumType` |  | |  |  | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `AddresseeFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `DistrictName` |  | |  |  | `CHAR(40)` | District |
| `VillageName` |  | |  |  | `CHAR(40)` | City (different from postal city) |
| `CompanyPostalCode` |  | |  |  | `CHAR(10)` | Company Postal Code (for Large Customers) |
| `StreetAddrNonDeliverableReason` |  | |  |  | `CHAR(4)` | Street Address Undeliverable Flag |
| `StreetPrefixName1` |  | |  |  | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` |  | |  |  | `CHAR(40)` | Street 3 |
| `StreetSuffixName1` |  | |  |  | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` |  | |  |  | `CHAR(40)` | Street 5 |
| `Building` |  | |  |  | `CHAR(20)` | Building (Number or Code) |
| `Floor` |  | |  |  | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | |  |  | `CHAR(10)` | Room or Apartment Number |
| `FormOfAddress` |  | |  |  | `CHAR(4)` | Form-of-Address Key |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `TransportZone` |  | |  |  | `CHAR(10)` | Transportation zone to or from which the goods are delivered |
| `AddressSearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 |
| `AddressSearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 |
| `POBox` |  | |  |  | `CHAR(10)` | PO Box |
| `POBoxAddrNonDeliverableReason` |  | |  |  | `CHAR(4)` | PO Box Address Undeliverable Flag |
| `POBoxIsWithoutNumber` |  | |  |  | `CHAR(1)` | Flag: PO Box Without Number |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
| `POBoxLobbyName` |  | |  |  | `CHAR(40)` | PO Box Lobby |
| `POBoxDeviatingCityName` |  | |  |  | `CHAR(40)` | PO Box city |
| `POBoxDeviatingRegion` |  | |  |  | `CHAR(3)` | Region for PO Box (Country/Region, State, Province, ...) |
| `POBoxDeviatingCountry` |  | |  |  | `CHAR(3)` | PO Box of Country/Region |
| `CareOfName` |  | |  |  | `CHAR(40)` | c/o name |
| `DeliveryServiceTypeCode` |  | |  |  | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceNumber` |  | |  |  | `CHAR(10)` | Number of Delivery Service |
| `AddressTimeZone` |  | |  |  | `CHAR(6)` | Address Time Zone |
| `SecondaryRegionName` |  | |  |  | `CHAR(40)` | County |
| `TertiaryRegionName` |  | |  |  | `CHAR(40)` | Township |
| `AddressRepresentationCode` |  | |  |  | `CHAR(1)` | Version ID for International Addresses |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` |  | |  |  | `CHAR(10)` | Person Number |
| `_Region` | | ✓ | | | | |
| `_BankScriptVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Region` | `I_Region` | [0..1] |
| `_BankScriptVariant` | `I_BankScriptedAddress` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKADDRESS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKADDRESS')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Address'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@VDM.viewType: #COMPOSITE
define view entity I_BankAddress
  as select from           I_Bank_2                  as Bank
    left outer to one join I_BankOrganizationAddress as Address on  Bank.AddressID                    = Address.AddressID
                                                                and Address.AddressPersonID           is initial
                                                                and Address.AddressRepresentationCode is initial

  association [0..1] to I_Region              as _Region            on  $projection.Region  = _Region.Region
                                                                    and $projection.Country = _Region.Country

  association [1..*] to I_BankScriptedAddress as _BankScriptVariant on  $projection.BankCountry    = _BankScriptVariant.BankCountry
                                                                    and $projection.BankInternalID = _BankScriptVariant.BankInternalID
{
  key Bank.BankCountry,
  key Bank.BankInternalID,


      cast( concat(Address.AddresseeName1, Address.AddresseeName2)
          as bf_bank_name_in_local_script preserving type ) as LongBankName, //char80
      cast( concat(Address.AddresseeName3, Address.AddresseeName4)
        as bf_bank_branch_in_local_script preserving type ) as LongBankBranch, //char80

      //      cast(bnk_long_name_concat(
      //           name1  => Address.AddresseeName1,
      //           name2  => Address.AddresseeName2 ) as bf_bank_name_in_local_script preserving type )   as LongBankName,
      //      cast(bnk_long_name_concat(
      //           name1  => Address.AddresseeName3,
      //           name2  => Address.AddresseeName4 ) as bf_bank_branch_in_local_script preserving type ) as LongBankBranch,

      case
        when ( Address.StreetName is null or Address.StreetName is initial ) then Bank.ShortStreetName
        else Address.StreetName
      end                                                   as StreetName,

      Address.HouseNumber,
      Address.HouseNumberSupplementText,

      case
        when ( Address.CityName is null or Address.CityName is initial ) then Bank.ShortCityName
        else Address.CityName
      end                                                   as CityName,

      Address.PostalCode,
      @ObjectModel.foreignKey.association: '_Country'
      Address.Country,

      @ObjectModel.foreignKey.association: '_Region'
      case
        when ( Address.Region is null or Address.Region is initial ) then Bank.Region
        else Address.Region
      end                                                   as Region,

      Address.AddressObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_CorrespondenceLanguage'
      Address.CorrespondenceLanguage,
      Address.PrfrdCommMediumType,
      Address.AddresseeFullName,
      Address.DistrictName,
      Address.VillageName,
      Address.CompanyPostalCode,
      Address.StreetAddrNonDeliverableReason,
      Address.StreetPrefixName1,
      Address.StreetPrefixName2,
      Address.StreetSuffixName1,
      Address.StreetSuffixName2,
      Address.Building,
      Address.Floor,
      Address.RoomNumber,
      @ObjectModel.foreignKey.association: '_FormOfAddress'
      Address.FormOfAddress,
      Address.TaxJurisdiction,
      Address.TransportZone,
      Address.AddressSearchTerm1,
      Address.AddressSearchTerm2,
      Address.POBox,
      Address.POBoxAddrNonDeliverableReason,
      Address.POBoxIsWithoutNumber,
      Address.POBoxPostalCode,
      Address.POBoxLobbyName,
      Address.POBoxDeviatingCityName,
      Address.POBoxDeviatingRegion,
      Address.POBoxDeviatingCountry,
      Address.CareOfName,
      Address.DeliveryServiceTypeCode,
      Address.DeliveryServiceNumber,
      Address.AddressTimeZone,
      Address.SecondaryRegionName,
      Address.TertiaryRegionName,
      Address.AddressRepresentationCode,
      Address.AddressID,
      Address.AddressPersonID,

      Address._Country,
      Address._FormOfAddress,
      Address._AddressRepresentationCode,
      Address._CorrespondenceLanguage,
      Address._AddressObjectType,
      Address._AddressPersonName,
      Address._CurrentDfltEmailAddress,
      Address._CurrentDfltFaxNumber,
      Address._CurrentDfltLandlinePhoneNmbr,
      Address._CurrentDfltMobilePhoneNumber,
      Address._DeliveryServiceTypeCode,
      Address._EmailAddress,
      Address._FaxNumber,
      Address._MainWebsiteURL,
      Address._PhoneNumber,
      Address._POBoxAddrNonDeliverableReason,
      Address._POBoxDeviatingCountry,
      Address._POBoxDeviatingRegion,
      Address._PrfrdCommMediumType,
      Address._StreetAddrNonDeliverableRsn,
      Address._TimeZone,
      Address._TransportationZone,
      Address._UniformResourceIdentifier,

      _BankScriptVariant,
      _Region
}
```
