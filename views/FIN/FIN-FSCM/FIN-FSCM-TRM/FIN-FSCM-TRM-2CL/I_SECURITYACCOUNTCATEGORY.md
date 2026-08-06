---
name: I_SECURITYACCOUNTCATEGORY
description: Securityaccountcategory
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYACCOUNTCATEGORY

**Securityaccountcategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SecurityAccountCategory` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SecurityAccountCategoryText` | [0..*] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'ISCRTYACCTCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Security Account Category'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityAccountCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'SecuritiesAccountCategory'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_SecurityAccountCategory
  as select from dd07l

  association [0..*] to I_SecurityAccountCategoryText as _Text on $projection.SecurityAccountCategory = _Text.SecurityAccountCategory

{
      @ObjectModel.text.association: '_Text'
  key domvalue_l as SecurityAccountCategory,
     _Text
}

where
      dd07l.domname  = 'TPM_SECACC_CAT'
  and dd07l.as4local = 'A'
```
