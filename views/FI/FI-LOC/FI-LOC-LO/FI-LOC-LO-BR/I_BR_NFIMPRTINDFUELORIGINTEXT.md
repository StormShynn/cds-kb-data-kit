---
name: I_BR_NFIMPRTINDFUELORIGINTEXT
description: Brazil Fuel Origin Import Ind - Text
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFIMPRTINDFUELORIGINTEXT')/$value
semantic_en: Brazil Fuel Origin Import Ind - Text
semantic_vi: Brazil Fuel Origin Import Ind - Text — CDS view giao diện dựa trên dd07t.
keywords:
  - brazil
  - fuel
  - origin
  - import
  - ind
  - text
  - language
  - indicator
  - imprt
  - desc
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
