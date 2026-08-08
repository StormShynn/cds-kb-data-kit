---
name: I_SUPLRINVCSUPLRTOLSTTGSAPI01
description: "Suplrinvcsuplrtolsttgsapi 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCSUPLRTOLSTTGSAPI01

**Suplrinvcsuplrtolsttgsapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `SuplrInvcVerificatTolGroup` | ✓ | |  |  |  |  |
| `APARToleranceGroupName` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Tolerance Settings for Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'SuplrInvcVerificatTolGroup'
define view entity I_SuplrInvcSuplrTolSttgsAPI01 
  as select from I_SuplrInvcSuplrTolSettings
{
key CompanyCode,
key SuplrInvcVerificatTolGroup,
    APARToleranceGroupName  
}
```
