---
name: I_INSPECTIONRESULTORIGIN
description: Inspectionresultorigin
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONRESULTORIGIN

**Inspectionresultorigin**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionResultOrigin` | ✓ | |  | `qergdath` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Inspectionresultorigintext` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Inspection Result Origin'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IINSPRESOR'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'InspectionResultOrigin'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'InspectionResultOrigin'
define view I_InspectionResultOrigin
  as select from tq73
  association [0..*] to I_Inspectionresultorigintext as _Text on $projection.InspectionResultOrigin = _Text.InspectionResultOrigin
{
  key qergdath as InspectionResultOrigin,
      _Text

}
```
