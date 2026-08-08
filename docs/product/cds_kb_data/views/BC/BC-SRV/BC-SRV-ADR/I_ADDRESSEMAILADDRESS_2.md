---
name: I_ADDRESSEMAILADDRESS_2
description: "Addressemailaddress 2"
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
  - workflow
  - address
  - email
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSEMAILADDRESS_2

**Addressemailaddress 2**

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
| `AddressPersonID` | ✓ | |  | `persnumber` | `CHAR(10)` | Person Number |
| `CommMediumSequenceNumber` | ✓ | |  | `consnumber` | `NUMC(3)` | Sequence Number |
| `EmailAddress` |  | |  | `smtp_addr` | `CHAR(241)` | Email Address |
| `EmailAddressIsCurrentDefault` |  | |  | `cast (flgdefault as ad_emailcurdflt preserving type)` | `CHAR(1)` | Indicator : Current Default Email Address |
| `CommLineNotForUnsolicitedCntct` |  | |  | `cast (flg_nouse as ad_commlinenotforunslctdcntct preserving type)` | `CHAR(1)` | Communication line is not to be used for unsolicited contact |
| `ValidityStartDate` |  | |  | `case valid_from when '' then '00010101' else cast( substring( valid_from,1,8) as abap.dats) end` | `DATS(8)` |  |
| `ValidityEndDate` |  | |  | `case valid_to when '' then '99991231' else cast( substring( valid_to,1,8) as abap.dats) end` | `DATS(8)` |  |
| `_OrgNamePostalAddress` | | ✓ | | | | |
| `_AddressPersonName` | | ✓ | | | | |
| `_AddressCommunicationRemark` | | ✓ | | | | |
| `_AddressCommunicationUsage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrgNamePostalAddress` | `I_AddrOrgNamePostalAddress` | [0..1] |
| `_AddressPersonName` | `I_AddressPersonName` | [0..1] |
| `_AddressCommunicationRemark` | `I_AddressCommunicationRemark_2` | [0..*] |
| `_AddressCommunicationUsage` | `I_AddressCommunicationUsage` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@AccessControl.privilegedAssociations: ['_AddressCommunicationRemark', '_AddressCommunicationUsage']
@EndUserText.label: 'Email Address'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'CommMediumSequenceNumber'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.sapObjectNodeType.name: 'EmailAddress'
define view entity I_AddressEmailAddress_2
  as select from adr6
  association [0..1] to I_AddrOrgNamePostalAddress     as _OrgNamePostalAddress       on  _OrgNamePostalAddress.AddressID                 = $projection.AddressID
                                                                                      and _OrgNamePostalAddress.AddressRepresentationCode = '' 
                                                                                      
  association [0..1] to I_AddressPersonName            as _AddressPersonName          on  $projection.AddressPersonID = _AddressPersonName.AddressPersonID 
                                                                                      and _AddressPersonName.AddressRepresentationCode = ''                                     
                                                                                        
  association [0..*] to I_AddressCommunicationRemark_2 as _AddressCommunicationRemark on  $projection.AddressID                               = _AddressCommunicationRemark.AddressID
                                                                                      and $projection.AddressPersonID                         = _AddressCommunicationRemark.AddressPersonID
                                                                                      and $projection.CommMediumSequenceNumber                = _AddressCommunicationRemark.CommMediumSequenceNumber
                                                                                      and _AddressCommunicationRemark.CommunicationMediumType = 'INT'

  association [0..*] to I_AddressCommunicationUsage    as _AddressCommunicationUsage  on  $projection.AddressID                              = _AddressCommunicationUsage.AddressID
                                                                                      and $projection.AddressPersonID                        = _AddressCommunicationUsage.AddressPersonID
                                                                                      and $projection.CommMediumSequenceNumber               = _AddressCommunicationUsage.CommMediumSequenceNumber
                                                                                      and _AddressCommunicationUsage.CommunicationMediumType = 'INT'
{
  @ObjectModel.foreignKey.association: '_OrgNamePostalAddress'
  key addrnumber                                                        as AddressID,
  @ObjectModel.foreignKey.association: '_AddressPersonName'
  key persnumber                                                        as AddressPersonID,
  key consnumber                                                        as CommMediumSequenceNumber,
      smtp_addr                                                         as EmailAddress,
      cast (flgdefault as ad_emailcurdflt preserving type)              as EmailAddressIsCurrentDefault,
      cast (flg_nouse as ad_commlinenotforunslctdcntct preserving type) as CommLineNotForUnsolicitedCntct,
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
      _OrgNamePostalAddress,
      _AddressPersonName
}
where
  date_from = '00010101'
```
