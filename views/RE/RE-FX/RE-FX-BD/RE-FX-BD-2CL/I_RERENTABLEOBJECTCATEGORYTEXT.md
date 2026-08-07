---
name: I_RERENTABLEOBJECTCATEGORYTEXT
description: Rerentableobjectcategorytext
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - text-view
  - text
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_RERENTABLEOBJECTCATEGORYTEXT

**Rerentableobjectcategorytext**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `RERentableObjectCategory` | ✓ | |  | `cast( dd07t.domvalue_l as regorentablecategory )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `RERentableObjectCategoryName` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_RERentableObjectCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREPARTTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Rentable Object Category - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RERentableObjectCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    internalName: #LOCAL,
    technicalName: 'IREROCATET',
    dataExtraction: {
        enabled: true
    }
}

define view entity I_RERentableObjectCategoryText
  as select from dd07t
  association        to parent I_RERentableObjectCategory as _RERentableObjectCategory on $projection.RERentableObjectCategory = _RERentableObjectCategory.RERentableObjectCategory
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_RERentableObjectCategory'
      @ObjectModel.text.element: ['RERentableObjectCategory']
  key cast( dd07t.domvalue_l as regorentablecategory )  as RERentableObjectCategory,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as RERentableObjectCategoryName,
      _RERentableObjectCategory,
      _Language
}
where
      dd07t.domname  = 'REGORENTABLECATEGORY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
