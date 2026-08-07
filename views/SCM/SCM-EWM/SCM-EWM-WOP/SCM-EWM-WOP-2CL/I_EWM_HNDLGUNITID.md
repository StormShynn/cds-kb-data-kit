---
name: I_EWM_HNDLGUNITID
description: Ewm Hndlgunitid
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_HNDLGUNITID

**Ewm Hndlgunitid**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `HandlingUnitUUID` | ✓ | |  | `guid_hu` |
| `EWMHndlgUnitAltvIDType` | ✓ | |  | `idart` |
| `EWMHndlgUnitAltvID` |  | |  | `huident` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IEWMHNDLGUNITID'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Warehouse Alternative Handling Unit Idn'
@VDM.viewType:#BASIC
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@AbapCatalog.buffering:{ type: #GENERIC,
                         status: #ACTIVE,
                         numberOfKeyFields: 2}
                       
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
define view I_EWM_HndlgUnitID as select from /scwm/hu_ident {
  key guid_hu as HandlingUnitUUID,
  key idart as EWMHndlgUnitAltvIDType,
  huident as EWMHndlgUnitAltvID
}
```
