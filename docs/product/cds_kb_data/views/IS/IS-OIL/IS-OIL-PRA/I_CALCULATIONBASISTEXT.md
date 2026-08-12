---
name: I_CALCULATIONBASISTEXT
description: "Calculation Basis - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
