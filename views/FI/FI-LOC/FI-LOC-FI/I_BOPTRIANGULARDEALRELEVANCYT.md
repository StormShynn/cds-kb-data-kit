---
name: I_BOPTRIANGULARDEALRELEVANCYT
description: Boptriangulardealrelevancyt
app_component: FI-LOC-FI
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI
  - lob:Finance
---
# I_BOPTRIANGULARDEALRELEVANCYT

**Boptriangulardealrelevancyt**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `BOPTriangularDealRelevancy` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as boptriangulardealrelevancy )` |  |  |
| `BOPTriangularDealRelevancyName` |  | |  | `cast ( ddtext as glo_bop_tri_deal_rel_name )` |  |  |
| `_BOPTriangularDealRelevancy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BOPTriangularDealRelevancy` | `I_BOPTriangularDealRelevancy` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOPTRIDEALRELT'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Triangular Deal Relevancy - Text'
@VDM.viewType: #BASIC 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BOPTriangularDealRelevancy'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_BOPTriangularDealRelevancyT as select from dd07t 
  association [0..1] to I_BOPTriangularDealRelevancy as _BOPTriangularDealRelevancy on $projection.BOPTriangularDealRelevancy = _BOPTriangularDealRelevancy.BOPTriangularDealRelevancy
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  @Semantics.language:true
  key cast( ddlanguage as spras ) as Language,
  @ObjectModel.foreignKey.association: '_BOPTriangularDealRelevancy'
  key cast ( substring( domvalue_l, 1, 1 ) as boptriangulardealrelevancy ) as BOPTriangularDealRelevancy, 
  @Semantics.text:true
  cast ( ddtext as glo_bop_tri_deal_rel_name ) as BOPTriangularDealRelevancyName,
  _BOPTriangularDealRelevancy,
  _Language
}
where domname = 'BOPTRIANGULARDEALRELEVANCY' and as4local = 'A'
```
