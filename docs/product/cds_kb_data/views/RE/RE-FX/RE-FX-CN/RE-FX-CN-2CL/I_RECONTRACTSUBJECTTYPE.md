---
name: I_RECONTRACTSUBJECTTYPE
description: "Recontractsubjecttype"
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
  - contract
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTSUBJECTTYPE

**Recontractsubjecttype**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REContractSubjectTypeText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONSUBTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #M
            },
            compositionRoot: true,
            representativeKey: 'REContractSubjectType',
            semanticKey: [ 'REContractSubjectType' ],
            sapObjectNodeType.name: 'RealEstateContractSubjectType',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Real Estate Contract Subject'
define view entity I_REContractSubjectType as select from tivbdcnsubtype 
association [0..*] to I_REContractSubjectTypeText              as _Text              on $projection.REContractSubjectType = _Text.REContractSubjectType{
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #HIGH
        @ObjectModel.text.association: '_Text'
        key cnsubjecttype as REContractSubjectType,
        
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
```
