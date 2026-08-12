---
name: I_BOPTRIANGULARDEALRELEVANCY
description: "Boptriangulardealrelevancy"
app_component: FI-LOC-FI
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_BOPTRIANGULARDEALRELEVANCY

**Boptriangulardealrelevancy**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOPTriangularDealRelevancy` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as boptriangulardealrelevancy )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BOPTriangularDealRelevancyT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOPTRIDEALREL'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Triangular Deal Relevancy'
@Analytics: { dataCategory: #DIMENSION } 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BOPTriangularDealRelevancy'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_BOPTriangularDealRelevancy as select from dd07l
association [0..*] to I_BOPTriangularDealRelevancyT as _Text on $projection.BOPTriangularDealRelevancy = _Text.BOPTriangularDealRelevancy
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as boptriangulardealrelevancy ) as BOPTriangularDealRelevancy,
  _Text 
}
where domname = 'BOPTRIANGULARDEALRELEVANCY' and as4local = 'A'
```
