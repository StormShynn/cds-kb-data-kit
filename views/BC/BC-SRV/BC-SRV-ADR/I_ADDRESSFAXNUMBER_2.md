---
name: I_ADDRESSFAXNUMBER_2
description: Addressfaxnumber 2
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
# I_ADDRESSFAXNUMBER_2

**Addressfaxnumber 2**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressID` | ✓ | |  | `addrnumber` |  |  |
| `AddressPersonID` | ✓ | |  | `persnumber` |  |  |
| `CommMediumSequenceNumber` | ✓ | |  | `consnumber` |  |  |
| `FaxNumberCountry` |  | |  | `country` |  |  |
| `CommLineNotForUnsolicitedCntct` |  | |  | `flg_nouse` |  |  |
| `FaxAreaCodeSubscriberNumber` |  | |  | `fax_number` |  |  |
| `FaxExtensionNumber` |  | |  | `fax_extens` |  |  |
| `InternationalFaxNumber` |  | |  | `faxnr_long` |  |  |
| `FaxNumberIsCurrentDefault` |  | |  | `cast (flgdefault as ad_faxcurdflt preserving type)` |  |  |
| `ValidityStartDate` |  | |  | `case valid_from when '' then '00010101' else cast( substring( valid_from,1,8) as abap.dats) end` |  |  |
| `ValidityEndDate` |  | |  | `case valid_to when '' then '99991231' else cast( substring( valid_to,1,8) as abap.dats) end` |  |  |
| `_AddressCommunicationRemark` | | ✓ | | | | |
| `_AddressCommunicationUsage` | | ✓ | | | | |
| `_FaxNumberCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AddressCommunicationRemark` | `I_AddressCommunicationRemark_2` | [0..*] |
| `_AddressCommunicationUsage` | `I_AddressCommunicationUsage` | [0..*] |
| `_FaxNumberCountry` | `I_Country` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_AddressCommunicationRemark', '_AddressCommunicationUsage']
@EndUserText.label: 'Fax Number'
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
@ObjectModel.sapObjectNodeType.name: 'FaxNumber'
define view entity I_AddressFaxNumber_2
  as select from adr3

  association [0..*] to I_AddressCommunicationRemark_2 as _AddressCommunicationRemark on  $projection.AddressID                               = _AddressCommunicationRemark.AddressID
                                                                                      and $projection.AddressPersonID                         = _AddressCommunicationRemark.AddressPersonID
                                                                                      and $projection.CommMediumSequenceNumber                = _AddressCommunicationRemark.CommMediumSequenceNumber
                                                                                      and _AddressCommunicationRemark.CommunicationMediumType = 'FAX'

  association [0..*] to I_AddressCommunicationUsage    as _AddressCommunicationUsage  on  $projection.AddressID                              = _AddressCommunicationUsage.AddressID
                                                                                      and $projection.AddressPersonID                        = _AddressCommunicationUsage.AddressPersonID
                                                                                      and $projection.CommMediumSequenceNumber               = _AddressCommunicationUsage.CommMediumSequenceNumber
                                                                                      and _AddressCommunicationUsage.CommunicationMediumType = 'FAX'

  association [0..1] to I_Country                      as _FaxNumberCountry           on  $projection.FaxNumberCountry = _FaxNumberCountry.Country

{
  key addrnumber                                         as AddressID,
  key persnumber                                         as AddressPersonID,
  key consnumber                                         as CommMediumSequenceNumber,
      @ObjectModel.foreignKey.association: '_FaxNumberCountry'
      country                                            as FaxNumberCountry,
      flg_nouse                                          as CommLineNotForUnsolicitedCntct,
      fax_number                                         as FaxAreaCodeSubscriberNumber,
      fax_extens                                         as FaxExtensionNumber,
      faxnr_long                                         as InternationalFaxNumber,
      cast (flgdefault as ad_faxcurdflt preserving type) as FaxNumberIsCurrentDefault,
      case valid_from
          when '' then '00010101'
          else cast( substring( valid_from,1,8) as abap.dats)
      end                                                as ValidityStartDate,
      case valid_to
          when '' then '99991231'
          else cast( substring( valid_to,1,8) as abap.dats)
      end                                                as ValidityEndDate,

      _AddressCommunicationRemark,
      _AddressCommunicationUsage,
      _FaxNumberCountry
}
where
  date_from = '00010101'
```
