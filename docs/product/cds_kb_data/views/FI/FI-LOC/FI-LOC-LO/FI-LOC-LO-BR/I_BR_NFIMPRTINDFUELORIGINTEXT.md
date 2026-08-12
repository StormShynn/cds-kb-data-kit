---
name: I_BR_NFIMPRTINDFUELORIGINTEXT
description: "Brazil Fuel Origin Import Ind - Text"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGINTEXT')/$value
semantic_en: "Brazil Fuel Origin Import Ind - Text"
semantic_vi: "Brazil Fuel Origin Import Ind - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "brazil"
  - "fuel"
  - "origin"
  - "import"
  - "ind"
  - "text"
  - "language"
  - "indicator"
  - "imprt"
  - "desc"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFIMPRTINDFUELORIGINTEXT

**Brazil Fuel Origin Import Ind - Text**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGINTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `BR_NFImportIndicatorFuelOrigin` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_importindfuelorigin preserving type )` | `CHAR(1)` | Fuel Origin Import Indicator |
| `BR_NFImprtIndFuelOriginDesc` |  | |  | `cast( ddtext as logbr_importindfuelorigindesc preserving type )` | `CHAR(60)` | Fuel Origin Import Indicator Description |
| `_BR_NFImprtIndFuelOrigin` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFImprtIndFuelOrigin` | `I_BR_NFImprtIndFuelOrigin` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGINTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGINTEXT')/$value)*

```abap
@EndUserText.label: 'Brazil Fuel Origin Import Ind - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFINDIMPORTT'
@ObjectModel.representativeKey: 'BR_NFImportIndicatorFuelOrigin'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
define view I_BR_NFImprtIndFuelOriginText as select from dd07t
  association [1..1] to I_BR_NFImprtIndFuelOrigin as _BR_NFImprtIndFuelOrigin on $projection.BR_NFImportIndicatorFuelOrigin = _BR_NFImprtIndFuelOrigin.BR_NFImportIndicatorFuelOrigin
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFImprtIndFuelOrigin'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_importindfuelorigin preserving type ) as BR_NFImportIndicatorFuelOrigin,  
  @Semantics.text
  cast( ddtext as logbr_importindfuelorigindesc preserving type ) as BR_NFImprtIndFuelOriginDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFImprtIndFuelOrigin, 
  _Language 
}
where domname  = 'J_1B_NF_INDIMPORT' 
  and as4local = 'A'
```
