---
name: I_PRODSHELFLIFEEXPRTNDTEPERDT
description: "Prodshelflifeexprtndteperdt"
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
# I_PRODSHELFLIFEEXPRTNDTEPERDT

**Prodshelflifeexprtndteperdt**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ShelfLifeExpirationDatePeriod` | ✓ | |  | `cast( dd07t.domvalue_l as shelflifeexpirationdateperiod )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `Name` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDSHELFEXPPERT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Shelf Life Exprtn Date Period - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ShelfLifeExpirationDatePeriod'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY ]

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_ProdShelfLifeExprtnDtePerdT 
as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,

      @ObjectModel.text.element: ['Name']
  key cast( dd07t.domvalue_l as shelflifeexpirationdateperiod ) as ShelfLifeExpirationDatePeriod,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as Name,

      _Language
}
where
      dd07t.domname  = 'DATTP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
