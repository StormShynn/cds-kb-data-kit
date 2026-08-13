---
name: I_ADDRESSPHONENUMBER_2
description: "Addressphonenumber 2"
semantic_vi: "Chứa thông tin số điện thoại liên quan đến địa chỉ, có thể sử dụng trong việc quản lý thông tin liên hệ trong các ứng dụng kinh doanh."
keywords:
  - "address"
  - "phone number"
  - "contact information"
  - "business application"
  - "số điện thoại"
  - "thông tin liên hệ"
  - "địa chỉ"
  - "kinh doanh"
  - "sds"
  - "bc-srv-adr"
  - "addressphonenumber"
semantic_en: "Exposes phone numbers associated with addresses, useful for managing contact information in various business applications."
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
  - address
  - phone
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSPHONENUMBER_2

**Addressphonenumber 2**

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
| `AddressID` | ✓ | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `AddressPersonID` | ✓ | |  | `persnumber` | `CHAR(10)` | Person Number |
| `CommMediumSequenceNumber` | ✓ | |  | `consnumber` | `NUMC(3)` | Sequence Number |
| `PhoneNumberCountry` |  | |  | `country` | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `PhNmbrIsCurrentOverallDefault` |  | |  | `cast (flgdefault as ad_phnmbrcurovrldflt preserving type)` | `CHAR(1)` | Indicator : Current Overall Default Phone Number |
| `CommLineNotForUnsolicitedCntct` |  | |  | `cast (flg_nouse as ad_commlinenotforunslctdcntct preserving type)` | `CHAR(1)` | Communication line is not to be used for unsolicited contact |
| `PhoneAreaCodeSubscriberNumber` |  | |  | `tel_number` | `CHAR(30)` | Telephone No.: Dialing Code and Number |
| `PhoneExtensionNumber` |  | |  | `tel_extens` | `CHAR(10)` | Telephone no.: Extension |
| `InternationalPhoneNumber` |  | |  | `telnr_long` | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `PhoneIsSMSEnabled` |  | |  | `dft_receiv` | `CHAR(1)` | Indicator: Telephone is SMS-Enabled |
| `PhoneNumberType` |  | |  | `cast (r3_user as ad_phonenumbertype preserving type)` | `CHAR(1)` | Phone Number Type |
| `ValidityStartDate` |  | |  | `case valid_from when '' then '00010101' else cast( substring( valid_from,1,8) as abap.dats) end` | `DATS(8)` |  |
| `ValidityEndDate` |  | |  | `case valid_to when '' then '99991231' else cast( substring( valid_to,1,8) as abap.dats) end` | `DATS(8)` |  |
| `_AddressCommunicationRemark` | | ✓ | | | | |
| `_AddressCommunicationUsage` | | ✓ | | | | |
| `_PhoneNumberCountry` | | ✓ | | | | |
| `_PhoneNumberType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AddressCommunicationRemark` | `I_AddressCommunicationRemark_2` | [0..*] |
| `_AddressCommunicationUsage` | `I_AddressCommunicationUsage` | [0..*] |
| `_PhoneNumberCountry` | `I_Country` | [0..1] |
| `_PhoneNumberType` | `I_PhoneNumberType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_AddressCommunicationRemark', '_AddressCommunicationUsage']
@EndUserText.label: 'Phone Number'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
//@ObjectModel.representativeKey: 'AddressID'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.sapObjectNodeType.name: 'PhoneNumber'

define view entity I_AddressPhoneNumber_2
  as select from adr2

  association [0..*] to I_AddressCommunicationRemark_2 as _AddressCommunicationRemark on  $projection.AddressID                               = _AddressCommunicationRemark.AddressID
                                                                                      and $projection.AddressPersonID                         = _AddressCommunicationRemark.AddressPersonID
                                                                                      and $projection.CommMediumSequenceNumber                = _AddressCommunicationRemark.CommMediumSequenceNumber
                                                                                      and _AddressCommunicationRemark.CommunicationMediumType = 'TEL'

  association [0..*] to I_AddressCommunicationUsage    as _AddressCommunicationUsage  on  $projection.AddressID                              = _AddressCommunicationUsage.AddressID
                                                                                      and $projection.AddressPersonID                        = _AddressCommunicationUsage.AddressPersonID
                                                                                      and $projection.CommMediumSequenceNumber               = _AddressCommunicationUsage.CommMediumSequenceNumber
                                                                                      and _AddressCommunicationUsage.CommunicationMediumType = 'TEL'

  association [0..1] to I_Country                      as _PhoneNumberCountry         on  $projection.PhoneNumberCountry = _PhoneNumberCountry.Country

  association [0..1] to I_PhoneNumberType              as _PhoneNumberType            on  $projection.PhoneNumberType = _PhoneNumberType.PhoneNumberType

{
  key addrnumber                                                        as AddressID,
  key persnumber                                                        as AddressPersonID,
  key consnumber                                                        as CommMediumSequenceNumber,
      @ObjectModel.foreignKey.association: '_PhoneNumberCountry'
      country                                                           as PhoneNumberCountry,
      cast (flgdefault as ad_phnmbrcurovrldflt preserving type)         as PhNmbrIsCurrentOverallDefault,
      cast (flg_nouse as ad_commlinenotforunslctdcntct preserving type) as CommLineNotForUnsolicitedCntct,
      tel_number                                                        as PhoneAreaCodeSubscriberNumber,
      tel_extens                                                        as PhoneExtensionNumber,
      telnr_long                                                        as InternationalPhoneNumber,
      dft_receiv                                                        as PhoneIsSMSEnabled,
      @ObjectModel.foreignKey.association: '_PhoneNumberType'
      cast (r3_user    as ad_phonenumbertype preserving type)           as PhoneNumberType,
      case valid_from
          when '' then '00010101'
          else cast( substring( valid_from,1,8) as abap.dats)
      end                                                               as ValidityStartDate,
      case valid_to
          when '' then '99991231'
          else cast( substring( valid_to,1,8) as abap.dats)
      end                                                               as ValidityEndDate,

      _AddressCommunicationRemark,
      _AddressCommunicationUsage,
      _PhoneNumberCountry,
      _PhoneNumberType
}
where
  date_from = '00010101'
```
