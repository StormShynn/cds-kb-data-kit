---
name: I_CAAPPLICATIONAREA
description: "Caapplicationarea"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAAPPLICATIONAREA

**Caapplicationarea**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAApplicationArea` | ✓ | |  | `applk` |  |  |
| `CAApplicationAreaIsActive` |  | |  | `aktiv` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAApplicationAreaText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : { dataCategory: #DIMENSION, 
               dataExtraction.enabled: true }

@EndUserText.label: 'Application Area'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CAApplicationArea',
                sapObjectNodeType.name: 'ContrAcctgApplicationArea',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                         #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAApplicationArea
  as select from tfk000

  association [1..*] to I_CAApplicationAreaText as _Text on $projection.CAApplicationArea = _Text.CAApplicationArea

{
  key applk as CAApplicationArea,
      
      @Semantics.booleanIndicator: true
      aktiv as CAApplicationAreaIsActive,
      
      _Text
}
```
