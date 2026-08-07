---
name: I_FINANCIALINSTRPRODUCTTYPE
description: Financialinstrproducttype
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - product
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINANCIALINSTRPRODUCTTYPE

**Financialinstrproducttype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialInstrumentProductType` | ✓ | |  | `gsart` |
| `TreasuryContractType` |  | |  | `rantyp` |
| `FinancialInstrProductCategory` |  | |  | `sanlf` |
| `FinCndnTypeAllocCndnGroup` |  | |  | `skogrp` |
| `_Text` | | ✓ | | |
| `_FinancialInstrProdCat` | | ✓ | | |
| `_FinancialInstrProdTypeSuplmnt` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinancialInstrProdTypeText` | [0..*] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |
| `_FinancialInstrProdTypeSuplmnt` | `I_FinInstrProdTypeSuplmnt` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'IFININSPRODTP'
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Product Type'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'FinancialInstrumentProductType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'FinancialInstrumentProductType'

define view I_FinancialinstrProductType
  as select from tzpa as FinancialInstrumentProductType

  association [0..*] to I_FinancialInstrProdTypeText as _Text on $projection.FinancialInstrumentProductType = _Text.FinancialInstrumentProductType
  association [0..1] to I_FinancialInstrProdCat      as _FinancialInstrProdCat on $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory
  association [0..1] to I_FinInstrProdTypeSuplmnt    as _FinancialInstrProdTypeSuplmnt on $projection.FinancialInstrumentProductType = _FinancialInstrProdTypeSuplmnt.FinancialInstrumentProductType
  
{
      @ObjectModel.text.association: '_Text' 
  key gsart            as FinancialInstrumentProductType, 
      rantyp           as TreasuryContractType, 
      sanlf            as FinancialInstrProductCategory,
      skogrp           as FinCndnTypeAllocCndnGroup,
      //      FinancialInstrumentProductType.skogrp,
      //      FinancialInstrumentProductType.sfdlev,
      //      FinancialInstrumentProductType.aplan,
      //      FinancialInstrumentProductType.saktpas,
      //      FinancialInstrumentProductType.auswa,
      //      FinancialInstrumentProductType.numkr,
      //      FinancialInstrumentProductType.jrefer,
      //      FinancialInstrumentProductType.jeinbehalt,
      //      FinancialInstrumentProductType.seffmeth,
      //      FinancialInstrumentProductType.szbmeth,
      //      FinancialInstrumentProductType.sdisein,
      //      FinancialInstrumentProductType.pdislimit,
      //      FinancialInstrumentProductType.ssolist,
      //      FinancialInstrumentProductType.vvranlwi1,
      //      FinancialInstrumentProductType.vvranlwi2,
      //      FinancialInstrumentProductType.szpa,
      //      FinancialInstrumentProductType.sorder,
      //      FinancialInstrumentProductType.sreval,
      //      FinancialInstrumentProductType.dsart,
      //      FinancialInstrumentProductType.sasgncomp,
      //      FinancialInstrumentProductType.srevalexcl,
      //      FinancialInstrumentProductType.scollater,
      //      FinancialInstrumentProductType.srealest,
      //      FinancialInstrumentProductType.suserexit,
      //      FinancialInstrumentProductType.drawnart,
      //      FinancialInstrumentProductType.drawntext,
      //      FinancialInstrumentProductType.sproduct,
      //      FinancialInstrumentProductType.sfastentry,
      //      FinancialInstrumentProductType.sliveins,
      //      FinancialInstrumentProductType.sdisburse,
      //      FinancialInstrumentProductType.sdeferral,
      //      FinancialInstrumentProductType.sarrearcap,
      //      FinancialInstrumentProductType.snotice,
      //      FinancialInstrumentProductType.snotice_lender,
      //      FinancialInstrumentProductType.scapitaltransfer,
      //      FinancialInstrumentProductType.sbodisbactive,
      //      FinancialInstrumentProductType.sautopaypp,
      //      FinancialInstrumentProductType.sextduning,
      //      FinancialInstrumentProductType.srelease,
      //      FinancialInstrumentProductType.sescrow,
      //      FinancialInstrumentProductType.sinsurance,
      //      FinancialInstrumentProductType.sno_conditions,
      //      FinancialInstrumentProductType.cms,
      //      FinancialInstrumentProductType.new_charges,
      //      FinancialInstrumentProductType.sioa,
      //      FinancialInstrumentProductType.slpg,
      //      FinancialInstrumentProductType.auswa_trm,
      //      FinancialInstrumentProductType.seffmeth_new,
      //      FinancialInstrumentProductType.ic_prod_type,
      //      FinancialInstrumentProductType.refrate,
      //      FinancialInstrumentProductType.flg_pl,
      //      FinancialInstrumentProductType.res_time_value,
      //      FinancialInstrumentProductType.res_time_unit,

      _Text,
      _FinancialInstrProdCat,
      _FinancialInstrProdTypeSuplmnt
}
```
