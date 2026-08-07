---
name: I_REGENERICRENTALOBJECTTYPETXT
description: Regenericrentalobjecttypetxt
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
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REGENERICRENTALOBJECTTYPETXT

**Regenericrentalobjecttypetxt**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `REGenericRentalObjectType` | ✓ | |  | `cast( dd07t.domvalue_l as regoobjtype )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `REGenericRentalObjectTypeText` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |
| `_REGenericRentalObjectType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory:[#NONE]
@AccessControl.authorizationCheck:#NOT_REQUIRED

@Analytics:{
    dataExtraction.enabled: true,
    technicalName: 'IREGOTYPET'
  }

@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                            },
                dataCategory: #TEXT,
                representativeKey: 'REGenericRentalObjectType',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ],
                sapObjectNodeType.name: 'REGenericRentalObjectTypeText'
}

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label:'RE Generic Rental Object Type - Text'
define view entity I_REGenericRentalObjectTypeTxt
  as select from dd07t
  association        to parent I_REGenericRentalObjectType as _REGenericRentalObjectType on $projection.REGenericRentalObjectType = _REGenericRentalObjectType.REGenericRentalObjectType
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REGenericRentalObjectType'
      @ObjectModel.text.element: ['REGenericRentalObjectTypeText']
  key cast( dd07t.domvalue_l as regoobjtype )           as REGenericRentalObjectType,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                      as REGenericRentalObjectTypeText,

      _REGenericRentalObjectType,
      _Language
}
where
      dd07t.domname  = 'REGOOBJTYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
