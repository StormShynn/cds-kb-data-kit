---
name: I_RETERMTYPE
description: Retermtype
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
  - component:RE-FX-2CL
  - lob:Other
---
# I_RETERMTYPE

**Retermtype**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RealEstateObjectType` | ✓ | |  | `objtype` |
| `RETermType` | ✓ | |  | `termtype` |
| `RETermCategory` |  | |  | `termcate` |
| `_REObjectType` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REObjectType` | `I_REObjectType` | [1..1] |
| `_Text` | `I_RETermTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Term Type'
@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}
@Analytics.technicalName: 'IRETERMTYPE'
@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #B,
                        sizeCategory: #S
            },
            representativeKey: 'RETermType',
            semanticKey: [ 'RETermType', 'RealEstateObjectType' ],
            sapObjectNodeType.name: 'RealEstateTermType',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE],
            modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view entity I_RETermType
  as select from tivtmtermtype
  association [1..1] to I_REObjectType   as _REObjectType on  $projection.RealEstateObjectType = _REObjectType.RealEstateObjectType
  association [0..*] to I_RETermTypeText as _Text         on  $projection.RealEstateObjectType = _Text.RealEstateObjectType
                                                          and $projection.RETermType           = _Text.RETermType
{
        @ObjectModel.foreignKey.association:  '_REObjectType'
  key   objtype  as RealEstateObjectType,
        @ObjectModel.text.association: '_Text'
  key   termtype as RETermType,
        termcate as RETermCategory,

        _Text,
        _REObjectType


}
```
