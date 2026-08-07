---
name: I_PRODCOMPONENTBACKFLUSHCODET
description: Prodcomponentbackflushcodet
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODCOMPONENTBACKFLUSHCODET

**Prodcomponentbackflushcodet**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `ProductComponentBackflushCode` | ✓ | |  | `cast ( domvalue_l as rgekm )` |  |  |
| `Name` |  | |  | `cast ( ddtext as val_text )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDCMPBKFLSHCDT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Component Backflush Code - Text'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name:'ProdComponentBackflushCodeText'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY, 
                                      #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@Search.searchable: true
@ObjectModel.representativeKey: 'ProductComponentBackflushCode'
@Metadata.ignorePropagatedAnnotations: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */

define view I_ProdComponentBackflushCodeT 
    as select from dd07t
    association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
    {
   @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type ) as Language,
  key cast ( domvalue_l as rgekm )                as ProductComponentBackflushCode,
      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW
      }
      cast ( ddtext as val_text )                 as Name,
      _Language
}
where
     dd07t.domname  = 'RGEKM'
 and dd07t.as4local = 'A'
 and dd07t.as4vers  = '0000'
```
