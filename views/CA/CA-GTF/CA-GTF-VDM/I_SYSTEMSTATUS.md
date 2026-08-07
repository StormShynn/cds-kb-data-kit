---
name: I_SYSTEMSTATUS
description: Systemstatus
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - interface-view
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_SYSTEMSTATUS

**Systemstatus**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SystemStatus` | ✓ | |  | `istat` |  |  |
| `StatusIsHidden` |  | |  | `nodis` |  |  |
| `_SystemStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SystemStatusText` | `I_SystemStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'SystemStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'ISYSSTATUS'
@AbapCatalog.preserveKey:true
@EndUserText.label: 'System Status'
@Analytics : {dataCategory: #DIMENSION , dataExtraction.enabled : true}
@VDM.viewType: #BASIC 
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_SystemStatus as select from tj02 

association[0..*] to I_SystemStatusText as _SystemStatusText on $projection.SystemStatus = _SystemStatusText.SystemStatus
{ 
  @ObjectModel.text.association: '_SystemStatusText'
  key tj02.istat as SystemStatus,
  tj02.nodis as StatusIsHidden,
  
  _SystemStatusText 
}
```
