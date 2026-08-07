---
name: I_ADDRCURDFLTLANDLINEPHONENMBR
description: Addrcurdfltlandlinephonenmbr
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
  - phone
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRCURDFLTLANDLINEPHONENMBR

**Addrcurdfltlandlinephonenmbr**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressID` | ✓ | |  |  |  |  |
| `AddressPersonID` | ✓ | |  |  |  |  |
| `CommMediumSequenceNumber` |  | |  |  |  |  |
| `PhoneNumberCountry` |  | |  |  |  |  |
| `PhoneAreaCodeSubscriberNumber` |  | |  |  |  |  |
| `PhoneExtensionNumber` |  | |  |  |  |  |
| `InternationalLandlineNumber` |  | |  | `cast( InternationalPhoneNumber as ad_curdfltlandlinephonenmbr preserving type )` |  |  |
| `InternationalPhoneNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `_PhoneNumberCountry` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Current Default Landline Phone Number'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
//@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddrCurDfltLandlinePhoneNmbr as select from I_AddressPhoneNumber_2
{
  key AddressID,
  key AddressPersonID,
      CommMediumSequenceNumber,
      PhoneNumberCountry,
      PhoneAreaCodeSubscriberNumber,
      PhoneExtensionNumber,
      cast( InternationalPhoneNumber as ad_curdfltlandlinephonenmbr preserving type ) as InternationalLandlineNumber,
      InternationalPhoneNumber,
      ValidityStartDate,
      ValidityEndDate,
      _PhoneNumberCountry
}
where PhoneNumberType = '1'
```
