---
name: I_AVAILYCHGLOG
description: Availychglog
app_component: CA-ATP-ACL-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AvailabilityChangeLogUUID` | `netchguuid` |
| `Material` | `matnr` |
| `Plant` | `werks` |
| `MRPArea` | `berid` |
| `AvailabilityChangeLogCategory` | `netchgcategory` |
| `_AvailyChgLogTmeStmp` | *Association* |
| `_AvailyChgLogCat` | *Association* |
| `_Product` | *Association* |
| `_Plant` | *Association* |
| `_MRPArea` | *Association* |

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
