---
name: I_REAUTHORIZATIONGROUPTEXT
description: Reauthorizationgrouptext
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
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_REAUTHORIZATIONGROUPTEXT

**Reauthorizationgrouptext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REAuthorizationGroup` | ✓ | |  | `authgrp` |
| `Language` | ✓ | |  | `spras` |
| `RealEstateObjectType` | ✓ | |  | `obart` |
| `REAuthorizationGroupName` |  | |  | `xauthgrp` |
| `_Language` | | ✓ | | |
| `_REObjectType` | | ✓ | | |
| `_REAuthorizationGroup` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_REObjectType` | `I_REObjectType` | [1..1] |
| `_REAuthorizationGroup` | `I_REAuthorizationGroup` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREAUTHGROUPTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC

@Analytics: { dataExtraction.enabled: true }

@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                            },
                resultSet.sizeCategory: #XS,
                dataCategory: #TEXT,
                representativeKey: 'REAuthorizationGroup',
                semanticKey: ['REAuthorizationGroup'],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ],
                sapObjectNodeType.name: 'REAuthorizationGroupText'
}

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Real Estate Authorization Group - Text'
define view entity I_REAuthorizationGroupText 
  as select from tbo00
  inner join tivcaauthgrpt
    on tivcaauthgrpt.objtype = tbo00.obart
    or tivcaauthgrpt.objtype = ''
  inner join tivcaobjtype 
    on tivcaobjtype.objtype = tbo00.obart
    and tivcaobjtype.hasauthgrp = 'X'
// as select from tivcaauthgrpt 
 association [0..1] to I_Language             as _Language             on  $projection.Language             = _Language.Language
 association [1..1] to I_REObjectType         as _REObjectType         on  $projection.RealEstateObjectType = _REObjectType.RealEstateObjectType
 association [0..1] to I_REAuthorizationGroup as _REAuthorizationGroup on  $projection.RealEstateObjectType = _REAuthorizationGroup.RealEstateObjectType
                                                                       and $projection.REAuthorizationGroup = _REAuthorizationGroup.REAuthorizationGroup
 { 
   @ObjectModel.foreignKey.association: '_REAuthorizationGroup'
   key tivcaauthgrpt.authgrp  as REAuthorizationGroup, 
   @ObjectModel.foreignKey.association: '_Language'
   @Semantics.language: true
   key tivcaauthgrpt.spras    as Language,
   @ObjectModel.foreignKey.association: '_REObjectType'
   key tbo00.obart as RealEstateObjectType,
   @Semantics.text: true
   @Search.fuzzinessThreshold: 0.8
   @Search.defaultSearchElement: true
   @Search.ranking: #LOW
   tivcaauthgrpt.xauthgrp as REAuthorizationGroupName,
   
   _Language,
   _REObjectType,
   _REAuthorizationGroup
   
}
```
