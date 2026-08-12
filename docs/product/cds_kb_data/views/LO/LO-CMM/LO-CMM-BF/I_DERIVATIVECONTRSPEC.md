---
name: I_DERIVATIVECONTRSPEC
description: "Derivative Contract Specification"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECONTRSPEC')/$value
semantic_en: "Derivative Contract Specification"
semantic_vi: "Derivative Contract Specification — CDS view giao diện dựa trên tbac_dcs."
keywords:
  - "derivative"
  - "contract"
  - "specification"
  - "contr"
  - "spec"
  - "category"
tags:
  - LO
  - bo:companycode
  - component:LO-CMM-BF
  - contract
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_DERIVATIVECONTRSPEC

**Derivative Contract Specification**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECONTRSPEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DerivativeContrSpecification` | ✓ | |  | `dcsid` | `CHAR(20)` | Derivative Contract Specification ID |
| `DerivativeContractSpecCategory` |  | |  | `derivativetype` | `NUMC(3)` | Derivative Category |
| `_Text` | | ✓ | | | | |
| `_DCSCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DerivativeContractSpecText` | [0..*] |
| `_DCSCategory` | `I_DCSCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECONTRSPEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECONTRSPEC')/$value)*

```abap
@EndUserText.label: 'Derivative Contract Specification'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  //or #CHECK
@AbapCatalog.sqlViewName: 'IDCSPEC'
@ObjectModel.representativeKey: 'DerivativeContrSpecification'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]

define view I_DerivativeContrSpec
   as select from tbac_dcs

   association [0..*] to I_DerivativeContractSpecText as _Text
      on $projection.DerivativeContrSpecification = _Text.DerivativeContrSpecification
   association [0..1] to I_DCSCategory as _DCSCategory
       on $projection.DerivativeContractSpecCategory = _DCSCategory.DerivativeContractSpecCategory

{
@ObjectModel.text.association: '_Text'

   key dcsid as DerivativeContrSpecification,
       derivativetype as DerivativeContractSpecCategory,
 //      @Semantics.url
 //      dcs_url as DerivativeContractSpecURL,
       _DCSCategory,
       _Text
 
}
```
