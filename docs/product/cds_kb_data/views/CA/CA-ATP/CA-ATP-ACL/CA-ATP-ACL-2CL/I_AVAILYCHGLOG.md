---
name: I_AVAILYCHGLOG
description: "Availychglog"
app_component: CA-ATP-ACL-2CL
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
  - CA
  - CA-ATP
  - CA-ATP-ACL
  - interface-view
  - component:CA-ATP-ACL-2CL
  - lob:Cross-Application Components
---
# I_AVAILYCHGLOG

**Availychglog**

| Property | Value |
|---|---|
| App Component | `CA-ATP-ACL-2CL` |
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
| `AvailabilityChangeLogUUID` | ✓ | |  | `netchguuid` | `RAW(16)` | Availability Change Log UUID |
| `Material` |  | |  | `matnr` | `CHAR(40)` | Material Number |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `MRPArea` |  | |  | `berid` | `CHAR(10)` | MRP Area |
| `AvailabilityChangeLogCategory` |  | |  | `netchgcategory` | `NUMC(2)` | Availability Change Log Category |
| `_AvailyChgLogTmeStmp` | | ✓ | | | | |
| `_AvailyChgLogCat` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AvailyChgLogTmeStmp` | `I_AvailyChgLogTmeStmp` | [1..*] |
| `_AvailyChgLogCat` | `I_AvailyChgLogCat` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_MRPArea` | `I_MRPArea` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Availability Change Log'
@AccessControl.authorizationCheck: #MANDATORY //#CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'AvailabilityChangeLogUUID',
    usageType: {
      serviceQuality: #A,
      sizeCategory: #M,
      dataClass: #TRANSACTIONAL
    },
    modelingPattern: #NONE,
    supportedCapabilities: [#SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE]
}
@VDM: {
  lifecycle: {
    contract.type: #PUBLIC_LOCAL_API
  },
  viewType: #BASIC
}
define view entity I_AvailyChgLog
  as select from atpnetchgfilter
  association [1..*] to I_AvailyChgLogTmeStmp as _AvailyChgLogTmeStmp on $projection.AvailabilityChangeLogUUID = _AvailyChgLogTmeStmp.AvailabilityChangeLogUUID
  association [1..1] to I_AvailyChgLogCat     as _AvailyChgLogCat     on $projection.AvailabilityChangeLogCategory = _AvailyChgLogCat.AvailabilityChangeLogCategory
  association [1..1] to I_Product             as _Product             on $projection.Material = _Product.Product
  association [1..1] to I_Plant               as _Plant               on $projection.Plant = _Plant.Plant
  association [1..1] to I_MRPArea             as _MRPArea             on $projection.MRPArea = _MRPArea.MRPArea  
{
  key netchguuid     as AvailabilityChangeLogUUID,
      matnr          as Material,
      werks          as Plant,
      berid          as MRPArea,
      @ObjectModel.foreignKey.association: '_AvailyChgLogCat'
      netchgcategory as AvailabilityChangeLogCategory,

      /* Associations */
      _AvailyChgLogCat,
      _Product,
      _Plant,
      _MRPArea,      
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _AvailyChgLogTmeStmp
}
```
