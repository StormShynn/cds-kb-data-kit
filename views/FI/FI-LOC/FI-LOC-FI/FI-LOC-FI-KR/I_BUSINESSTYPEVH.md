---
name: I_BUSINESSTYPEVH
description: "Businesstypevh"
app_component: FI-LOC-FI-KR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - value-help
  - component:FI-LOC-FI-KR
  - lob:Finance
---
# I_BUSINESSTYPEVH

**Businesstypevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessType` | ✓ | |  | `gestyp` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Type of Business'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'BusinessType',
  usageType: { dataClass: #MASTER,
               serviceQuality: #A,
               sizeCategory: #S
  }
}
@ObjectModel.supportedCapabilities: 
   [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ] 
define view entity I_BusinessTypeVH as select from bustype
{
  key bustype.gestyp as BusinessType
}
```
