---
name: I_ADDRCURDFLTMOBILEPHONENUMBER
description: Addrcurdfltmobilephonenumber
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
# I_ADDRCURDFLTMOBILEPHONENUMBER

**Addrcurdfltmobilephonenumber**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` | ✓ | |  |  | `CHAR(10)` | Person Number |
| `CommMediumSequenceNumber` |  | |  |  | `NUMC(3)` | Sequence Number |
| `PhoneNumberCountry` |  | |  |  | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `PhoneAreaCodeSubscriberNumber` |  | |  |  | `CHAR(30)` | Telephone No.: Dialing Code and Number |
| `InternationalMobileNumber` |  | |  | `cast( InternationalPhoneNumber as ad_curdfltmobilephonenmbr preserving type )` | `CHAR(30)` | Current Default Mobile Phone Number |
| `InternationalPhoneNumber` |  | |  |  | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` |  |
| `_PhoneNumberCountry` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Current Default Mobile PhoneNumber'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
//@ObjectModel.representativeKey: 'AddressID'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddrCurDfltMobilePhoneNumber as select from I_AddressPhoneNumber_2
{
  key AddressID,
  key AddressPersonID,
      CommMediumSequenceNumber,
      PhoneNumberCountry,
      PhoneAreaCodeSubscriberNumber,    
      cast( InternationalPhoneNumber as ad_curdfltmobilephonenmbr preserving type ) as InternationalMobileNumber,
      InternationalPhoneNumber,
      ValidityStartDate,
      ValidityEndDate,
      _PhoneNumberCountry
}
where PhoneNumberType = '3'
```
