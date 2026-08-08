---
name: I_ADDRESSCOMMUNICATIONREMARK_2
description: "Addresscommunicationremark 2"
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
# I_ADDRESSCOMMUNICATIONREMARK_2

**Addresscommunicationremark 2**

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
| `CommunicationMediumType` | ✓ | |  | `comm_type` | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `CommMediumSequenceNumber` | ✓ | |  | `consnumber` | `NUMC(3)` | Sequence Number |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CommunicationRemarkText` |  | |  | `remark` | `CHAR(50)` | Communication link notes |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Remark for Communication Data'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
//@ObjectModel.representativeKey: 'AddressID'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddressCommunicationRemark_2 as select from adrt
{
  key addrnumber as AddressID,
  key persnumber as AddressPersonID,
  key comm_type  as CommunicationMediumType,
  key consnumber as CommMediumSequenceNumber,
  key langu      as Language,
      remark     as CommunicationRemarkText
}
where date_from = '00010101'
```
