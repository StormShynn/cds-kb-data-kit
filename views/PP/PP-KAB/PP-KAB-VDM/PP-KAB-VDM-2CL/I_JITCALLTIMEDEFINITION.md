---
name: I_JITCALLTIMEDEFINITION
description: "Jitcalltimedefinition"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_JITCALLTIMEDEFINITION

**Jitcalltimedefinition**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallTimeDefinition` | ✓ | |  | `timdef` |  |  |
| `ShiftGrouping` |  | |  | `schgrup` |  |  |
| `ShiftSequence` |  | |  | `sprog` |  |  |
| `FactoryCalendar` |  | |  | `fabkl` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `ProdnPlngAndControlCalendar` |  | |  | `mrppp` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPJITTMDEF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'JIT Call Time Definition'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'JITCallTimeDefinition'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_JITCallTimeDefinition
  as select from ctimedef {
  
  key timdef  as JITCallTimeDefinition,
      schgrup as ShiftGrouping,
      sprog   as ShiftSequence,
      fabkl   as FactoryCalendar,
      werks   as Plant,
      mrppp   as ProdnPlngAndControlCalendar     
  
}
```
