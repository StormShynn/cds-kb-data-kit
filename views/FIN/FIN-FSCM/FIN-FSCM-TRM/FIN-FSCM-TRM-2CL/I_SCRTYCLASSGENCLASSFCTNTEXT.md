---
name: I_SCRTYCLASSGENCLASSFCTNTEXT
description: Scrtyclassgenclassfctntext
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
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SCRTYCLASSGENCLASSFCTNTEXT

**Scrtyclassgenclassfctntext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `ScrtyClassGenClassification` | `alwpkl` |
| `ScrtyClassGenClassfctnName` | `cast (xlangbez as ftr_gen_gen_secu_class_name preserving type)` |
| `_Language` | *Association* |
| `_SecurityClassGenClassfctn` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SecurityClassGenClassfctn` | `I_SecurityClassGenClassfctn` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED 
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.sqlViewName: 'ISCRTGENCLS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Security Class Gen Classification - Text'
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ScrtyClassGenClassification'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'ScrtyClGenClassificationText'

define view I_ScrtyClassGenClassfctnText as select from tw22t 
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
association [0..1] to I_SecurityClassGenClassfctn as _SecurityClassGenClassfctn on $projection.ScrtyClassGenClassification = _SecurityClassGenClassfctn.ScrtyClassGenClassification

{
   @Semantics.language: true
   @ObjectModel.foreignKey.association: '_Language'
   key spras     as Language,
   key alwpkl    as ScrtyClassGenClassification,
   @Semantics.text: true
   cast (xlangbez as ftr_gen_gen_secu_class_name preserving type)     as ScrtyClassGenClassfctnName,  
       
  _Language,
  _SecurityClassGenClassfctn
}
```
