---
name: I_RECONTRACTSUBJECTTYPETEXT
description: "Recontractsubjecttypetext"
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
  - contract
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTSUBJECTTYPETEXT

**Recontractsubjecttypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractSubjectType` | ✓ | |  | `cnsubjecttype` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `REContractSubjectTypeName` |  | |  | `xcnsubjecttype` |  |  |
| `_REContractSubjectType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContractSubjectType` | `I_REContractSubjectType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONSUBTYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: { dataExtraction.enabled: true }

@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #M
                            },
                dataCategory: #TEXT,
                representativeKey: 'REContractSubjectType',
                sapObjectNodeType.name: 'REContractSubjectTypeText',
                semanticKey: ['REContractSubjectType'],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ]
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Real Estate Contract Subject - Text'
define view entity I_REContractSubjectTypeText as select from tivbdcnsubtypet 
association [1..1] to I_REContractSubjectType as _REContractSubjectType on $projection.REContractSubjectType = _REContractSubjectType.REContractSubjectType
association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language{
    key cnsubjecttype                                                                                         as REContractSubjectType,
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key tivbdcnsubtypet.spras                                                                                                 as Language,
    @Semantics.text: true
    @Search.fuzzinessThreshold: 0.8
    @Search.defaultSearchElement: true
    @Search.ranking: #LOW    
    xcnsubjecttype                                                                                            as REContractSubjectTypeName,

    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
    _REContractSubjectType,
    _Language
}
```
