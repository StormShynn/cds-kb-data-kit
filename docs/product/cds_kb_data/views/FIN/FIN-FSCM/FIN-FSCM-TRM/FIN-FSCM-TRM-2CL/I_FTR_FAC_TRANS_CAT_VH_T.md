---
name: I_FTR_FAC_TRANS_CAT_VH_T
description: "Facility Transaction Category - Text"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH_T')/$value
semantic_en: "Facility Transaction Category - Text"
semantic_vi: "Facility Transaction Category - Text — CDS view giao diện dựa trên at01t."
keywords:
  - "facility"
  - "transaction"
  - "category"
  - "text"
  - "instr"
  - "financial"
  - "product"
  - "language"
  - "domain"
tags:
  - FIN
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FTR_FAC_TRANS_CAT_VH_T

**Facility Transaction Category - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH_T')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinInstrTransactionCategory` | ✓ | |  | `sfgtyp` | `NUMC(3)` | Transaction Category |
| `FinancialInstrProductCategory` | ✓ | |  | `sanlfor` | `NUMC(3)` | Financial Product Category |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `DomainText` |  | |  | `xtext` | `CHAR(30)` | Name of Transaction Category |
| `_Language` | | ✓ | | | | |
| `_FinInstrTransactionCategory` | | ✓ | | | | |
| `_FinancialInstrProductCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FinInstrTransactionCategory` | `I_Ftr_Fac_Trans_Cat_Vh` | [0..1] |
| `_FinancialInstrProductCategory` | `I_Ftr_Fac_Product_Cat` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH_T')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH_T')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFACTRANSCATVHT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.serviceQuality: #D
@VDM.viewType: #BASIC
@ObjectModel.dataCategory:#TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #ORGANIZATIONAL
@ObjectModel.representativeKey: 'FinInstrTransactionCategory'
@EndUserText.label: 'Facility Transaction Category - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_Ftr_Fac_Trans_Cat_Vh_T
  as select from at01t
  association [0..1] to I_Language             as _Language                      on  $projection.Language = _Language.Language
  association [0..1] to I_Ftr_Fac_Trans_Cat_Vh as _FinInstrTransactionCategory   on  $projection.FinancialInstrProductCategory = _FinInstrTransactionCategory.FinancialInstrProductCategory
                                                                                 and $projection.FinInstrTransactionCategory   = _FinInstrTransactionCategory.FinInstrTransactionCategory

  association [1..1] to I_Ftr_Fac_Product_Cat  as _FinancialInstrProductCategory on  $projection.FinancialInstrProductCategory = _FinancialInstrProductCategory.FinancialInstrProductCategory
{

      @ObjectModel.foreignKey.association: '_FinInstrTransactionCategory'
  key at01t.sfgtyp  as FinInstrTransactionCategory,

      @ObjectModel.foreignKey.association: '_FinancialInstrProductCategory'
  key at01t.sanlfor as FinancialInstrProductCategory,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key at01t.spras   as Language,
      @Semantics.text: true
      at01t.xtext   as DomainText,

      _Language,
      _FinInstrTransactionCategory,
      _FinancialInstrProductCategory
}
where
  at01t.sanlfor = '560'
```
