---
name: I_FUNCNLLOCCLFNCLASSCHARTP
description: Funcnllocclfnclasschartp
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - transactional-processing
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_FUNCNLLOCCLFNCLASSCHARTP

**Funcnllocclfnclasschartp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FunctionalLocation` | ✓ | |  |  |
| `ClassInternalID` | ✓ | |  |  |
| `CharcInternalID` | ✓ | |  |  |
| `FunctionalLocationLabelName` |  | |  |  |
| `Characteristic` |  | |  |  |
| `CharcDataType` |  | |  |  |
| `KeyDate` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `ClassType` |  | |  |  |
| `ClassMaintAuthGrp` |  | |  |  |
| `ClassClassfctnAuthGrp` |  | |  |  |
| `CharcMaintAuthGrp` |  | |  |  |
| `Class` |  | |  |  |
| `_Value` | | ✓ | | |
| `_Class` | | ✓ | | |
| `_FunctionalLocation` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'FL Classification Class Character - TP'
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MASTER
   },
   semanticKey: ['FunctionalLocation']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_FuncnlLocClfnClassCharTP as projection on R_FuncnlLocClfnClassCharTP {
    key FunctionalLocation,
    key ClassInternalID ,
    key CharcInternalID,
    FunctionalLocationLabelName,
    Characteristic,
    CharcDataType,
    KeyDate,
    ChangeNumber,
    ClassType,
    ClassMaintAuthGrp,
    ClassClassfctnAuthGrp,
    @Consumption.hidden: true
    CharcMaintAuthGrp,
    Class,
    _Value: redirected to composition child I_FuncnlLocClfnCharValueTP,
   _Class: redirected to parent I_FuncnlLocClfnClassTP,
    _FunctionalLocation: redirected to I_FunctionalLocationTP
}
```
