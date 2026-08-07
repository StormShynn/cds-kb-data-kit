---
name: I_RECONDITIONGROUP
description: Reconditiongroup
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - pricing-condition
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONDITIONGROUP

**Reconditiongroup**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REConditionGroup` | ✓ | |  | `condgroup` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRECNDNGROUP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'REConditionGroup'
@ObjectModel.semanticKey: 'REConditionGroup'

@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Condition Group'

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
                                     
define root view I_REConditionGroup 
 as select from tivcdcondgroup
   composition [0..*] of I_REConditionGroupText  as _Text
 {
       @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  @ObjectModel.text.association: '_Text'
  key condgroup as REConditionGroup,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
//  isflatrate as Isflatrate,
//  isprepayment as Isprepayment,
//  isinfogrp as Isinfogrp
}
```
