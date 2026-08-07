---
name: I_FUNCTIONALLOCATIONLONGTEXTTP
description: Functionallocationlongtexttp
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
  - text
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_FUNCTIONALLOCATIONLONGTEXTTP

**Functionallocationlongtexttp**

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
| `Language` |  | |  |  |  |  |
| `FunctionalLocationLabelName` |  | |  |  |  |  |
| `TextObjectKey` |  | |  | `cast(TextObjectKey as tplnr_unconverted preserving type)` |  |  |
| `TextObjectCategory` |  | |  |  |  |  |
| `TextObjectType` |  | |  |  |  |  |
| `FuncnlLocLongText` |  | |  |  |  |  |
| `_FunctionalLocation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'FL Long Text - TP'
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
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

define view entity I_FunctionalLocationLongTextTP as projection on R_FunctionalLocationLongTextTP
{
      key FunctionalLocation,
      @Semantics.language:true
      Language,
      FunctionalLocationLabelName,
      cast(TextObjectKey as tplnr_unconverted preserving type)      as TextObjectKey,
      TextObjectCategory,
      @Consumption.hidden: true
      TextObjectType,
      @Semantics.text:true
      FuncnlLocLongText,
      _FunctionalLocation: redirected to parent I_FunctionalLocationTP
      
}
```
