---
name: I_RETAXGROUP
description: "Retaxgroup"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - tax
  - component:RE-FX-2CL
  - lob:Other
---
# I_RETAXGROUP

**Retaxgroup**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxGroup` | ✓ | |  | `taxgroup` |  |  |
| `REIsTaxGroupExempt` |  | |  | `isnonetax` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RETaxGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true,
              technicalName: 'IRETAXGRP'
}

@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            representativeKey: 'TaxGroup',
            semanticKey: ['TaxGroup'],
            sapObjectNodeType.name: 'RealEstateTaxGroup',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@VDM.viewType:#BASIC
@Search.searchable: true
@EndUserText.label: 'Real Estate Tax Group'
define view entity I_RETaxGroup
  as select from tivrataxgroup
  association [0..*] to I_RETaxGroupText as _Text on $projection.TaxGroup = _Text.TaxGroup
{     
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key taxgroup  as TaxGroup,
      isnonetax as REIsTaxGroupExempt,

      _Text
}
```
