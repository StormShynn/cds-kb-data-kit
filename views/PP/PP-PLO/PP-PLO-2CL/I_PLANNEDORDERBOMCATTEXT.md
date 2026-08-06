---
name: I_PLANNEDORDERBOMCATTEXT
description: Planned OrderBOMCATTEXT
app_component: PP-PLO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PLO
  - interface-view
  - text-view
  - planned-order
  - bom
  - text
  - component:PP-PLO-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERBOMCATTEXT

**Planned OrderBOMCATTEXT**

| Property | Value |
|---|---|
| App Component | `PP-PLO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `dd07t.ddlanguage` |
| key `BillOfMaterialCategory` | `cast (dd07t.domvalue_l as pph_stlty)` |
| key `BillOfMaterialCategoryDesc` | `dd07t.ddtext` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Planned Order BOM Category - Text'
@ObjectModel.dataCategory: #TEXT
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
@Consumption.ranked: true
@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #CUSTOMIZING
}
define view entity I_PlannedOrderBOMCatText 
as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

      @Semantics.language : true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
       @Semantics.text: true
       @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key cast (dd07t.domvalue_l as pph_stlty) as BillOfMaterialCategory ,
      @Semantics.text: true
  key dd07t.ddtext     as BillOfMaterialCategoryDesc,
      _Language

}
where
      dd07t.as4local = 'A'
  and dd07t.domname  = 'STLTY';
```
