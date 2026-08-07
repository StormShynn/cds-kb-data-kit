---
name: I_ADDRESSCOMMUNICATIONUSAGE
description: Addresscommunicationusage
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
# I_ADDRESSCOMMUNICATIONUSAGE

**Addresscommunicationusage**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AddressID` | ✓ | |  | `addrnumber` |
| `AddressPersonID` | ✓ | |  | `persnumber` |
| `CommunicationMediumType` | ✓ | |  | `comm_type` |
| `CommMediumSequenceNumber` | ✓ | |  | `consnumber` |
| `CommunicationMediumTypeUsage` | ✓ | |  | `comm_usage` |
| `ValidityStartDate` |  | |  | `case valid_from when '' then '00010101' else cast( substring( valid_from,1,8) as abap.dats) end` |
| `ValidityEndDate` |  | |  | `case valid_to when '' then '99991231' else cast( substring( valid_to,1,8) as abap.dats) end` |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Usage of Communication Data'
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

define view entity I_AddressCommunicationUsage as select from adru
{
  key addrnumber as AddressID,
  key persnumber as AddressPersonID,
  key comm_type  as CommunicationMediumType,
  key consnumber as CommMediumSequenceNumber,
  key comm_usage as CommunicationMediumTypeUsage,
      case valid_from
          when '' then '00010101'
          else cast( substring( valid_from,1,8) as abap.dats)
      end as ValidityStartDate,
      case valid_to
         when '' then '99991231'
         else cast( substring( valid_to,1,8) as abap.dats)
      end as ValidityEndDate
}
```
