---
name: I_LOGISTICALROUNDINGUOMGROUP
description: "Logisticalroundinguomgroup"
app_component: LO-RFM-MD-ART
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - unit-of-measure
  - component:LO-RFM-MD-ART
  - lob:Logistics General
---
# I_LOGISTICALROUNDINGUOMGROUP

**Logisticalroundinguomgroup**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogisticalRoundingUoMGroup` | ✓ | |  | `megru` |  |  |
| `_LogisticalRoundingUoMGrpUoM` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Logistical Rounding UoM Group'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
    representativeKey: 'LogisticalRoundingUoMGroup',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define root view entity I_LogisticalRoundingUoMGroup

as select distinct from twmeg
composition [1..*] of I_LogisticalRoundingUoMGrpUoM as _LogisticalRoundingUoMGrpUoM
  {
   key megru as LogisticalRoundingUoMGroup,
   _LogisticalRoundingUoMGrpUoM
};
```
