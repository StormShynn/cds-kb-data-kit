---
name: I_ADDRESSWORKPLACEDETAILS
description: Addressworkplacedetails
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
# I_ADDRESSWORKPLACEDETAILS

**Addressworkplacedetails**

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
| `AddressRepresentationCode` | ✓ | |  | `nation` |  |  |
| `AddressIsWorkplaceAddress` |  | |  | `case comp_pers when 'C' then cast('X' as ad_isworkplaceaddress preserving type ) else cast(' ' as ad_isworkplaceaddress preserving type ) end` |  |  |
| `PersonAddressObjectType` |  | |  | `comp_pers` |  |  |
| `WorkplaceBuilding` |  | |  | `building` |  |  |
| `WorkplaceFloor` |  | |  | `floor` |  |  |
| `WorkplaceRoomNumber` |  | |  | `roomnumber` |  |  |
| `WorkplaceFunctionalTitleName` |  | |  | `function` |  |  |
| `WorkplaceDepartmentName` |  | |  | `department` |  |  |
| `WorkplacePrfrdCommMediumType` |  | |  | `deflt_comm` |  |  |
| `WorkplaceCorrespncShortName` |  | |  | `id_code` |  |  |
| `WorkplaceInhouseMail` |  | |  | `ih_mail` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Person Workplace Address Details'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
//@ObjectModel.representativeKey: 'AddressPersonID'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddressWorkplaceDetails as select from adcp
{
  key addrnumber as AddressID,
  key persnumber as AddressPersonID,
  key nation     as AddressRepresentationCode,
      case comp_pers
         when 'C' then cast('X' as ad_isworkplaceaddress preserving type )
         else cast(' ' as ad_isworkplaceaddress preserving type )
      end        as AddressIsWorkplaceAddress,
      comp_pers  as PersonAddressObjectType,
      building   as WorkplaceBuilding,
      floor      as WorkplaceFloor,
      roomnumber as WorkplaceRoomNumber,
      function   as WorkplaceFunctionalTitleName,
      department as WorkplaceDepartmentName,
      deflt_comm as WorkplacePrfrdCommMediumType,
      id_code    as WorkplaceCorrespncShortName,
      ih_mail    as WorkplaceInhouseMail
}
where date_from = '00010101'
```
