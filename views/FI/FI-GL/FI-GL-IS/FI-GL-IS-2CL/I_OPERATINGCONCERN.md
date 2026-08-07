---
name: I_OPERATINGCONCERN
description: Operatingconcern
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_OPERATINGCONCERN

**Operatingconcern**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperatingConcern` | ✓ | |  | `erkrs` |  |  |
| `OperatingConcernName` |  | |  | `_Text[1:Language = $session.system_language].OperatingConcernName` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OperatingConcernText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'OperatingConcern' //Inserted by VDM CDS Suite Plugin
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@EndUserText.label: 'Operating Concern'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIOPERCONCERN'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_OperatingConcern
  as select from tkeb
  association [0..*] to I_OperatingConcernText as _Text on $projection.OperatingConcern = _Text.OperatingConcern
{
      @ObjectModel.text.element: ['OperatingConcernName']
  key erkrs                                                             as OperatingConcern,

      @Semantics.text: true
      _Text[1:Language = $session.system_language].OperatingConcernName as OperatingConcernName,

      _Text
};
```
