---
name: I_ADDRESSREMARK_2
description: "Addressremark 2"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
# I_ADDRESSREMARK_2

**Addressremark 2**

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
| `AddressRepresentationCode` | ✓ | |  | `nation` | `CHAR(1)` | Version ID for International Addresses |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `AddressRemarkText` |  | |  | `remark` | `CHAR(50)` | Address notes |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@EndUserText.label: 'Address Remarks'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED 

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.sapObjectNodeType.name: 'AddressRemark'


define view entity I_AddressRemark_2
  as select distinct from adrct 
{ 
    key addrnumber as AddressID,
    key nation as AddressRepresentationCode,
    key langu as Language,
        remark as AddressRemarkText
}                       
where adrct.date_from = '00010101'
```
