---
name: I_ADDRCURDEFAULTFAXNUMBER
description: "Addrcurdefaultfaxnumber"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRCURDEFAULTFAXNUMBER

**Addrcurdefaultfaxnumber**

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
| `FaxNumberCountry` |  | |  |  | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `FaxAreaCodeSubscriberNumber` |  | |  |  | `CHAR(30)` | Fax Number: Dialing Code and Number |
| `FaxExtensionNumber` |  | |  |  | `CHAR(10)` | Fax no.: Extension |
| `InternationalFaxNumber` |  | |  |  | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` |  |
| `_FaxNumberCountry` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Current Default Fax Number'
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

define view entity I_AddrCurDefaultFaxNumber
  as select from I_AddressFaxNumber_2
{
  key AddressID,
  key AddressPersonID,
      CommMediumSequenceNumber,
      FaxNumberCountry,
      FaxAreaCodeSubscriberNumber,
      FaxExtensionNumber,
      InternationalFaxNumber,
      ValidityStartDate,
      ValidityEndDate,
      _FaxNumberCountry
}
where
  FaxNumberIsCurrentDefault = 'X'
```
