---
name: I_ADDRESSWORKPLACEDETAILS
description: "Addressworkplacedetails"
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
| `AddressRepresentationCode` | ✓ | |  | `nation` | `CHAR(1)` | Version ID for International Addresses |
| `AddressIsWorkplaceAddress` |  | |  | `case comp_pers when 'C' then cast('X' as ad_isworkplaceaddress preserving type ) else cast(' ' as ad_isworkplaceaddress preserving type ) end` | `CHAR(1)` | Indicator: The address is a workplace address |
| `PersonAddressObjectType` |  | |  | `comp_pers` | `CHAR(1)` | Flag: Person in company (C) or private (P) address |
| `WorkplaceBuilding` |  | |  | `building` | `CHAR(10)` | Building (number or code) |
| `WorkplaceFloor` |  | |  | `floor` | `CHAR(10)` | Floor in Building |
| `WorkplaceRoomNumber` |  | |  | `roomnumber` | `CHAR(10)` | Room or Apartment Number |
| `WorkplaceFunctionalTitleName` |  | |  | `function` | `CHAR(40)` | Function |
| `WorkplaceDepartmentName` |  | |  | `department` | `CHAR(40)` | Department |
| `WorkplacePrfrdCommMediumType` |  | |  | `deflt_comm` | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `WorkplaceCorrespncShortName` |  | |  | `id_code` | `CHAR(10)` | Short name for correspondence |
| `WorkplaceInhouseMail` |  | |  | `ih_mail` | `CHAR(10)` | Internal Mail Postal Code |

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
