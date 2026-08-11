---
name: I_CALCULATIONBASISTEXT
description: "Calculation Basis - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CALCULATIONBASISTEXT')/$value
semantic_en: "Calculation Basis - Text"
semantic_vi: "Calculation Basis - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "calculation"
  - "basis"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_CALCULATIONBASISTEXT

**Calculation Basis - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CALCULATIONBASISTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalculationBasis` | ✓ | |  | `cast ( domvalue_l as oiu_actentset_cd )` | `CHAR(1)` | Actual, Entitlement, Settlement Codes |
| `Language` | ✓ | |  | `cast( ddlanguage as spras)` | `LANG(1)` | Language Key |
| `CalculationBasisName` |  | |  | `cast( ddtext as oiu_vdm_calc_basis_name )` | `CHAR(60)` | Indicator of Actual, Entitled, or Settlement Basis Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CALCULATIONBASISTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CALCULATIONBASISTEXT')/$value)*

```abap
@EndUserText.label: 'Calculation Basis - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCALCBASIST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CalculationBasis'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META

define view I_CalculationBasisText
  as select from dd07t
{
  key cast ( domvalue_l as oiu_actentset_cd )   as CalculationBasis,
      @Semantics.language
  key cast( ddlanguage as spras)                as Language,
      @Semantics.text
      cast( ddtext as oiu_vdm_calc_basis_name ) as CalculationBasisName
}
where
      domname  = 'OIU_ACTENTSET_CD'
  and as4local = 'A'
```
