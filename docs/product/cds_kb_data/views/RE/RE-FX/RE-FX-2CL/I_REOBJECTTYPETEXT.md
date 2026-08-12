---
name: I_REOBJECTTYPETEXT
description: "Reobjecttypetext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_REOBJECTTYPETEXT

**Reobjecttypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `RealEstateObjectType` | ✓ | |  | `cast(obart as recaobjtype preserving type )` |  |  |
| `REObjectTypePrefix` |  | |  | `obart_ld` |  |  |
| `RealEstateObjectTypeName` |  | |  | `cast(txt20 as recavdmxobjtype preserving type )` |  |  |
| `RealEstateObjectTypeDesc` |  | |  | `cast (txt60 as recadesc60 preserving type )` |  |  |
| `_REObjectType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REObjectType` | `I_REObjectType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREOBJTYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED // #CHECK
@EndUserText.label: 'Real Estate Object Type - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RealEstateObjectType'
@VDM.viewType: #BASIC
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Search.searchable: true

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:  #META

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT, 
                                        #SQL_DATA_SOURCE, 
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE, 
                                        #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name: 'RealEstateObjectTypeText'
@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

define view I_REObjectTypeText

  as select from tbo01
  association [1..1] to I_REObjectType as _REObjectType on $projection.RealEstateObjectType = _REObjectType.RealEstateObjectType
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
{

      @Semantics.language: true
  key spras                                              as Language,
      @ObjectModel.text.element: ['RealEstateObjectTypeDesc']
  key cast(obart as recaobjtype preserving type )            as RealEstateObjectType,
      obart_ld as REObjectTypePrefix,
      @Semantics.text: true
 //   @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast(txt20 as recavdmxobjtype preserving type )  as RealEstateObjectTypeName,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast (txt60 as recadesc60 preserving type ) as RealEstateObjectTypeDesc,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _REObjectType,
      _Language 
}
```
