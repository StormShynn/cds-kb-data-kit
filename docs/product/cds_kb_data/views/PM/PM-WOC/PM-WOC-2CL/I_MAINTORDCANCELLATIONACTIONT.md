---
name: I_MAINTORDCANCELLATIONACTIONT
description: "Maintordcancellationactiont"
app_component: PM-WOC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - interface-view
  - component:PM-WOC-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDCANCELLATIONACTIONT

**Maintordcancellationactiont**

| Property | Value |
|---|---|
| App Component | `PM-WOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `MaintOrdCancellationAction` | ✓ | |  | `cast( dd07t.domvalue_l as maintordcancellationaction )` |  |  |
| `MaintOrdCancellationActionTxt` |  | |  | `cast( dd07t.ddtext as maintordcancellationactiontxt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_MaintOrdCancellationAction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Status sel for do not execute - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IORDCNCLACTTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'MaintOrdCancellationAction'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
//@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
//                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
//                                     #LANGUAGE_DEPENDENT_TEXT,
//                                     #SEARCHABLE_ENTITY,
//                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC


define view entity I_MaintOrdCancellationActionT as select from dd07t
association to parent I_MaintOrdCancellationAction as _MaintOrdCancellationAction
on $projection.MaintOrdCancellationAction = _MaintOrdCancellationAction.MaintOrdCancellationAction
association [0..1] to I_Language as _Language
on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,

//      @ObjectModel.foreignKey.association: '_MaintOrdSelDoNotExecute'
      @ObjectModel.text.element: ['MAINTORDCANCELLATIONACTIONTXT']
  key cast( dd07t.domvalue_l as maintordcancellationaction ) as MaintOrdCancellationAction,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as maintordcancellationactiontxt preserving type ) as MaintOrdCancellationActionTxt,


      // Associations
      _MaintOrdCancellationAction,
      _Language
}
where
      dd07t.domname  = 'MAINTORDCANCELLATIONACTION'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
