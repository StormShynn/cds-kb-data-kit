---
name: I_SECURITYCLASSSTOCK
description: "Securityclassstock"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYCLASSSTOCK

**Securityclassstock**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClass` | ✓ | |  | `cast(ranl as ftr_gen_security_class preserving type)` |  |  |
| `SecurityClassStockCategory` |  | |  | `sakar` |  |  |
| `SecurityClassFundType` |  | |  | `sfoty` |  |  |
| `SecurityClNmbrOfIssuedStocks` |  | |  | `aaaaktie` |  |  |
| `SecurityClassNomPerStockValue` |  | |  | `kbnewe` |  |  |
| `SecurityClassIssueStartDate` |  | |  | `debeg` |  |  |
| `_SecurityClass` | | ✓ | | | | |
| `_SecurityClassFundType` | | ✓ | | | | |
| `_SecurityClassStockCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClass` | `I_SecurityClass` | [0..1] |
| `_SecurityClassFundType` | `I_SecurityClassFundType` | [0..1] |
| `_SecurityClassStockCategory` | `I_SecurityClassStockCategory` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED 
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'ISECSTOCK'  
@AccessControl.authorizationCheck: #CHECK // according to XLS / DCL 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE  
@EndUserText.label: 'Security Class Stock'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityClass'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'SecurityClassStock'

define view I_SecurityClassStock as select from vwpakti 
   association [0..1] to I_SecurityClass as _SecurityClass on $projection.SecurityClass = _SecurityClass.SecurityClass
   association [0..1] to I_SecurityClassFundType as _SecurityClassFundType on $projection.SecurityClassFundType = _SecurityClassFundType.SecurityClassFundType
   association [0..1] to I_SecurityClassStockCategory as _SecurityClassStockCategory on $projection.SecurityClassStockCategory = _SecurityClassStockCategory.SecurityClassStockCategory

{
  key cast(ranl as ftr_gen_security_class preserving type)    as SecurityClass,
  sakar                                   as SecurityClassStockCategory,
  sfoty                                   as SecurityClassFundType,
  aaaaktie                                as SecurityClNmbrOfIssuedStocks,
  kbnewe                                  as SecurityClassNomPerStockValue,
  debeg                                   as SecurityClassIssueStartDate,
  
  _SecurityClass,
  _SecurityClassFundType,
  _SecurityClassStockCategory
}
```
