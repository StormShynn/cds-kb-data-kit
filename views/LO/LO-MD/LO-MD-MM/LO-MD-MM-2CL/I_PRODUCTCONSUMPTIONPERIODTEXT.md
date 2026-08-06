---
name: I_PRODUCTCONSUMPTIONPERIODTEXT
description: Productconsumptionperiodtext
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
  - text-view
  - product
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTCONSUMPTIONPERIODTEXT

**Productconsumptionperiodtext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| key `PeriodType` | `cast ( domvalue_l as perkz )` |
| `Name` | `cast ( ddtext as val_text )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODPERKZTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {
  status: #ACTIVE,
  type: #GENERIC,
  numberOfKeyFields: 1
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Consumption Period - Text'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #META
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
@ObjectModel.representativeKey: 'PeriodType'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY ]
define view I_ProductConsumptionPeriodText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type ) as Language,
  key cast ( domvalue_l as perkz )                as PeriodType,
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
  dd07t.domname = 'PERKZ'
```
