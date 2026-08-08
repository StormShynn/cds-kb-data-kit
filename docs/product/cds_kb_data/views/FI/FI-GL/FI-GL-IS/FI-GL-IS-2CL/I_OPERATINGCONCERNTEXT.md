---
name: I_OPERATINGCONCERNTEXT
description: "Operatingconcerntext"
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
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_OPERATINGCONCERNTEXT

**Operatingconcerntext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `OperatingConcernName` |  | |  | `erkrs_bz` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Operating Concern - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OperatingConcern'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIOPERCONCERNT'
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataExtraction.enabled: true }

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.ignorePropagatedAnnotations: true

define view I_OperatingConcernText
  as select from tkebt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key erkrs    as OperatingConcern,
      @Semantics.language
  key spras    as Language,
      @Semantics.text
      erkrs_bz as OperatingConcernName,
      _Language
};
```
