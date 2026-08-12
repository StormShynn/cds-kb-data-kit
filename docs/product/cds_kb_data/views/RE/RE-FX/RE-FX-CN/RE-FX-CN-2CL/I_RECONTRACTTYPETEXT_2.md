---
name: I_RECONTRACTTYPETEXT_2
description: "Recontracttypetext 2"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - contract
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTTYPETEXT_2

**Recontracttypetext 2**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractType` | ✓ | |  | `smvart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `REContractTypeName` |  | |  | `cast( xmbez as recnvdmcnttypetxt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_REContractType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONTYPET2'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Contract Type - Text'
//@ClientDependent: true
@VDM.viewType: #BASIC
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REContractType' ,
  semanticKey: ['REContractType'],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateContractTypeText'
}
@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

// Double Maintenance with I_REContractTypeText required

define view entity I_REContractTypeText_2 as select from tiv2f 
association to parent I_REContractType_2 as _REContractType on $projection.REContractType = _REContractType.REContractType
association [1..1] to I_Language              as _Language              on $projection.Language = _Language.Language{
    @ObjectModel.foreignKey.association: '_REContractType'
    @ObjectModel.text.element: ['REContractTypeName']
    key smvart                                                                                                as REContractType,
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key spras                                                                                                 as Language,
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    cast( xmbez as recnvdmcnttypetxt preserving type )                                                        as REContractTypeName,
    
    _REContractType,
    _Language
}
```
