---
name: I_FUNCNLLOCCLFNCHARVALUETP
description: Funcnllocclfncharvaluetp
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
# I_FUNCNLLOCCLFNCHARVALUETP

**Funcnllocclfncharvaluetp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` | ✓ | |  |  |  |  |
| `ClassType` | ✓ | |  |  |  |  |
| `CharcValuePositionNumber` | ✓ | |  |  |  |  |
| `CharcInternalID` | ✓ | |  |  |  |  |
| `FunctionalLocationLabelName` |  | |  |  |  |  |
| `Characteristic` |  | |  |  |  |  |
| `CharcDataType` |  | |  |  |  |  |
| `ClassInternalID` |  | |  |  |  |  |
| `KeyDate` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `CharcValueIntervalType` |  | |  | `CharcValueDependency` |  |  |
| `CharcValue` |  | |  |  |  |  |
| `CharcFromNumericValue` |  | |  |  |  |  |
| `CharcFromNumericValueUnit` |  | |  |  |  |  |
| `CharcToNumericValue` |  | |  |  |  |  |
| `CharcToNumericValueUnit` |  | |  |  |  |  |
| `CharcFromDecimalValue` |  | |  |  |  |  |
| `CharcToDecimalValue` |  | |  |  |  |  |
| `CharcFromAmount` |  | |  |  |  |  |
| `CharcToAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CharcFromDate` |  | |  |  |  |  |
| `CharcToDate` |  | |  |  |  |  |
| `CharcFromTime` |  | |  |  |  |  |
| `CharcToTime` |  | |  |  |  |  |
| `CharcMaintAuthGrp` |  | |  |  |  |  |
| `ClassMaintAuthGrp` |  | |  |  |  |  |
| `ClassClassfctnAuthGrp` |  | |  |  |  |  |
| `_Characteristic` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
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
@EndUserText.label: 'FL Classification Class Character Value - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_FuncnlLocClfnCharValueTP as projection on R_FuncnlLocClfnCharValueTP
  
{
  key FunctionalLocation,
  key ClassType,
  key CharcValuePositionNumber ,
  key CharcInternalID,
      FunctionalLocationLabelName,
      Characteristic,
      CharcDataType,
      ClassInternalID as ClassInternalID,
      KeyDate,
      ChangeNumber,
      CharcValueDependency as CharcValueIntervalType,
      CharcValue,
      CharcFromNumericValue,
      CharcFromNumericValueUnit,
      CharcToNumericValue,
      CharcToNumericValueUnit,
      CharcFromDecimalValue,
      CharcToDecimalValue,
      @Semantics.amount.currencyCode: 'Currency'
      CharcFromAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CharcToAmount,
      
      Currency,
      CharcFromDate,
      CharcToDate,
      CharcFromTime,
      CharcToTime,
      @Consumption.hidden: true
      CharcMaintAuthGrp,
      @Consumption.hidden: true
      ClassMaintAuthGrp,
      @Consumption.hidden: true
      ClassClassfctnAuthGrp,
     _Characteristic: redirected to parent I_FuncnlLocClfnClassCharTP,
    _FunctionalLocation: redirected to I_FunctionalLocationTP

}
```
