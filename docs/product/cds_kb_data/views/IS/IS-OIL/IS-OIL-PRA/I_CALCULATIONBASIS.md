---
name: I_CALCULATIONBASIS
description: "Calculation Basis"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CALCULATIONBASIS')/$value
semantic_en: "Calculation Basis"
semantic_vi: "Calculation Basis — CDS view giao diện dựa trên dd07l."
keywords:
  - "calculation"
  - "basis"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_CALCULATIONBASIS

**Calculation Basis**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CALCULATIONBASIS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalculationBasis` | ✓ | |  | `cast ( domvalue_l as oiu_actentset_cd )` | `CHAR(1)` | Actual, Entitlement, Settlement Codes |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CalculationBasisText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CALCULATIONBASIS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CALCULATIONBASIS')/$value)*

```abap
@EndUserText.label: 'Calculation Basis'
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCALCBASIS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'CalculationBasis'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRACalculationBasis'
define view I_Calculationbasis
  as select from dd07l
  association [0..*] to I_CalculationBasisText as _Text on $projection.CalculationBasis = _Text.CalculationBasis
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as oiu_actentset_cd ) as CalculationBasis,
      _Text
}
where
      domname  = 'OIU_ACTENTSET_CD'
  and as4local = 'A'
```
