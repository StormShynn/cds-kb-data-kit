---
name: I_EWM_HNDLGUNITID
description: "Ewm Hndlgunitid"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitUUID` | ✓ | |  | `guid_hu` |  |  |
| `EWMHndlgUnitAltvIDType` | ✓ | |  | `idart` |  |  |
| `EWMHndlgUnitAltvID` |  | |  | `huident` |  |  |

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
