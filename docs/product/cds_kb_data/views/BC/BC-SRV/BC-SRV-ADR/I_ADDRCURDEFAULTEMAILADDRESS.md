---
name: I_ADDRCURDEFAULTEMAILADDRESS
description: "Addrcurdefaultemailaddress"
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
  - workflow
  - address
  - email
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRCURDEFAULTEMAILADDRESS

**Addrcurdefaultemailaddress**

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
| `EmailAddress` |  | |  |  | `CHAR(241)` | Email Address |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` |  |
| `_AddressCommunicationRemark` | | ✓ | | | | |
| `_AddressCommunicationUsage` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics : { dataCategory: #DIMENSION,
               dataExtraction: { enabled: true }
             }
@EndUserText.label: 'Current Default Email Address'
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

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_AddrCurDefaultEmailAddress
  as select from I_AddressEmailAddress_2
{
  key AddressID,
  key AddressPersonID,
      CommMediumSequenceNumber,
      EmailAddress,
      ValidityStartDate,
      ValidityEndDate,
      
      _AddressCommunicationRemark,
      _AddressCommunicationUsage
}
where
  EmailAddressIsCurrentDefault = 'X'
```
