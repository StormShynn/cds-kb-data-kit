---
name: I_RECONDITIONTYPETEXT
description: Reconditiontypetext
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
  - text-view
  - pricing-condition
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONDITIONTYPETEXT

**Reconditiontypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `REConditionType` | ✓ | |  | `condtype` |  |  |
| `REConditionTypeName` |  | |  | `xcondtypel` |  |  |
| `_Language` | | ✓ | | | | |
| `_REConditionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECNDNTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true

@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #M
                            },
                dataCategory: #TEXT,
                representativeKey: 'REConditionType',
                semanticKey: ['REConditionType'],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ],
                sapObjectNodeType.name: 'RealEstateConditionTypeText'
}
                                     
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType:#BASIC
@EndUserText.label: 'Real Estate Condition Type - Text'
define view entity I_REConditionTypeText 
    as select from tivcdcondtypet
    association  to parent I_REConditionType     as _REConditionType       on $projection.REConditionType = _REConditionType.REConditionType
    association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras            as Language,
      @ObjectModel.foreignKey.association: '_REConditionType'
  key condtype  as REConditionType,
      @Semantics.text: true
      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      xcondtypel as REConditionTypeName,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _REConditionType,
      _Language
}
```
