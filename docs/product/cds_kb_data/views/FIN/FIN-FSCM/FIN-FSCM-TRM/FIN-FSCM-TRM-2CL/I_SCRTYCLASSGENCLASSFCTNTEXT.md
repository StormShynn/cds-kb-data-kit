---
name: I_SCRTYCLASSGENCLASSFCTNTEXT
description: "Scrtyclassgenclassfctntext"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ScrtyClassGenClassification` | ✓ | |  | `alwpkl` |  |  |
| `ScrtyClassGenClassfctnName` |  | |  | `cast (xlangbez as ftr_gen_gen_secu_class_name preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_SecurityClassGenClassfctn` | | ✓ | | | | |

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
