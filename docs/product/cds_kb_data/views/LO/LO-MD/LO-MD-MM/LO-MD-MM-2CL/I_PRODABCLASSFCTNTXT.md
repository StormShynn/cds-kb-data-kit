---
name: I_PRODABCLASSFCTNTXT
description: "Prodabclassfctntxt"
app_component: LO-MD-MM-2CL
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
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODABCLASSFCTNTXT

**Prodabclassfctntxt**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
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
| `MaterialABCClassification` | ✓ | |  | `cast(maabc as abcindicator preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaterialABCClassificationDesc` |  | |  | `tmabc` |  |  |
| `_ABCIndicator` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ABCIndicator` | `I_Prodabclassfctn` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IABCINDTXT'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ABC Indicator text'
@ObjectModel.representativeKey: 'MaterialABCClassification'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_Prodabclassfctntxt
  as select from tmabct
  association [0..1] to I_Prodabclassfctn as _ABCIndicator on $projection.MaterialABCClassification = _ABCIndicator.MaterialABCClassification
  association [0..1] to I_Language        as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ABCIndicator'
  key cast(maabc as abcindicator preserving type ) as MaterialABCClassification,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tmabct.spras                                 as Language,
      @Semantics.text: true
      @Search:{
        defaultSearchElement: true,
        ranking: #LOW
      }
      tmabc                                        as MaterialABCClassificationDesc,
      _ABCIndicator,
      _Language


}
```
