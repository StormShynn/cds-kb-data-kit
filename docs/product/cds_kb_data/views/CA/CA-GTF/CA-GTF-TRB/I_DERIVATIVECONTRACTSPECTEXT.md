---
name: I_DERIVATIVECONTRACTSPECTEXT
description: "Derivative Contract Specification - Text"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECONTRACTSPECTEXT')/$value
semantic_en: "Derivative Contract Specification - Text"
semantic_vi: "Derivative Contract Specification - Text — CDS view giao diện dựa trên tbac_dcst."
keywords:
  - "derivative"
  - "contract"
  - "specification"
  - "text"
  - "contr"
  - "language"
  - "spec"
  - "name"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-TRB
  - component:CA-GTF-TRB
  - contract
  - interface-view
  - lob:cross_application components
---
# I_DERIVATIVECONTRACTSPECTEXT

**Derivative Contract Specification - Text**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECONTRACTSPECTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DerivativeContrSpecification` | ✓ | |  | `dcsid` | `CHAR(20)` | Derivative Contract Specification ID |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `DerivativeContrSpecName` |  | |  | `text` | `CHAR(40)` | Description of Derivative Contract Specification |
| `_Language` | | ✓ | | | | |
| `_DerivativeContrSpecification` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_DerivativeContrSpecification` | `I_DerivativeContrSpec` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECONTRACTSPECTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECONTRACTSPECTEXT')/$value)*

```abap
@EndUserText.label: 'Derivative Contract Specification - Text'
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IDCST'
@ObjectModel.representativeKey: 'DerivativeContrSpecification'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]

define view I_DerivativeContractSpecText
   as select from tbac_dcst

    association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
    association [1..1] to I_DerivativeContrSpec  as _DerivativeContrSpecification
      on $projection.DerivativeContrSpecification = _DerivativeContrSpecification.DerivativeContrSpecification

{

   key dcsid as DerivativeContrSpecification,
   @Semantics.language: true
   key langu as Language,
   @Semantics.text: true
   text as DerivativeContrSpecName,
   _DerivativeContrSpecification,
   _Language
  
}
```
