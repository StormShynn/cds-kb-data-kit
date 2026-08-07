---
name: I_REAUTHORIZATIONGROUP
description: Reauthorizationgroup
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
# I_REAUTHORIZATIONGROUP

**Reauthorizationgroup**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RealEstateObjectType` | ✓ | |  | `obart` |
| `REAuthorizationGroup` | ✓ | |  | `authgrp` |
| `_Text` | | ✓ | | |
| `_REObjectType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REAuthorizationGroupText` | [0..*] |
| `_REObjectType` | `I_REObjectType` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREAUTHGROUP'
@EndUserText.label: 'Real Estate Authorization Group'
@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #META,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            representativeKey: 'REAuthorizationGroup',
            semanticKey: [ 'REAuthorizationGroup' ],
            sapObjectNodeType.name: 'RealEstateAuthorizationGroup',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.allowExtensions: true

@AccessControl.authorizationCheck: #MANDATORY

@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@Search.searchable: true
define view entity I_REAuthorizationGroup
  as select from tbo00
  inner join tivcaauthgrp
    on tivcaauthgrp.objtype = tbo00.obart
    or tivcaauthgrp.objtype = ''
  inner join tivcaobjtype 
    on tivcaobjtype.objtype = tbo00.obart
    and tivcaobjtype.hasauthgrp = 'X'
  association [0..*] to I_REAuthorizationGroupText as _Text         on  $projection.RealEstateObjectType = _Text.RealEstateObjectType
                                                                    and $projection.REAuthorizationGroup = _Text.REAuthorizationGroup
  association [0..1] to I_REObjectType             as _REObjectType on  $projection.RealEstateObjectType = _REObjectType.RealEstateObjectType
{

      @ObjectModel.foreignKey.association: '_REObjectType'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key tbo00.obart as RealEstateObjectType,
      @ObjectModel.text.association: '_Text'
  key tivcaauthgrp.authgrp as REAuthorizationGroup,

      _Text,
      _REObjectType

}
```
