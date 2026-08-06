---
name: I_ADDRESSPHONENUMBER_2
description: Addressphonenumber 2
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AddressID` | `addrnumber` |
| key `AddressPersonID` | `persnumber` |
| key `CommMediumSequenceNumber` | `consnumber` |
| `PhoneNumberCountry` | `country` |
| `PhNmbrIsCurrentOverallDefault` | `cast (flgdefault as ad_phnmbrcurovrldflt preserving type)` |
| `CommLineNotForUnsolicitedCntct` | `cast (flg_nouse as ad_commlinenotforunslctdcntct preserving type)` |
| `PhoneAreaCodeSubscriberNumber` | `tel_number` |
| `PhoneExtensionNumber` | `tel_extens` |
| `InternationalPhoneNumber` | `telnr_long` |
| `PhoneIsSMSEnabled` | `dft_receiv` |
| `PhoneNumberType` | `cast (r3_user as ad_phonenumbertype preserving type)` |
| `ValidityStartDate` | `case valid_from when '' then '00010101' else cast( substring( valid_from,1,8) as abap.dats) end` |
| `ValidityEndDate` | `case valid_to when '' then '99991231' else cast( substring( valid_to,1,8) as abap.dats) end` |
| `_AddressCommunicationRemark` | *Association* |
| `_AddressCommunicationUsage` | *Association* |
| `_PhoneNumberCountry` | *Association* |
| `_PhoneNumberType` | *Association* |

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
