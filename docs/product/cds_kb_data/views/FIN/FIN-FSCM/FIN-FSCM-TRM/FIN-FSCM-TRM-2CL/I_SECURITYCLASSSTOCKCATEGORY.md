---
name: I_SECURITYCLASSSTOCKCATEGORY
description: "Securityclassstockcategory"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SECURITYCLASSSTOCKCATEGORY

**Securityclassstockcategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClassStockCategory` | ✓ | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ScrtyClassStockCategoryText` | [0..*] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'ISCRTYCLSTCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Security Class Stock Category'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityClassStockCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.resultSet.sizeCategory:#XS
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'SecurityClassStockCategory'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_SecurityClassStockCategory
  as select from dd07l

  association [0..*] to I_ScrtyClassStockCategoryText as _Text on $projection.SecurityClassStockCategory = _Text.SecurityClassStockCategory

{

      @ObjectModel.text.association: '_Text'
  key domvalue_l as SecurityClassStockCategory,
      _Text

}

where
      dd07l.domname  = 'SAKAR'
  and dd07l.as4local = 'A'
```
