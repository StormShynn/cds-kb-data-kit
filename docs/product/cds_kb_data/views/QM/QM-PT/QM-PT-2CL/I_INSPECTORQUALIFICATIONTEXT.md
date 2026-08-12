---
name: I_INSPECTORQUALIFICATIONTEXT
description: "Inspectorqualificationtext"
app_component: QM-PT-2CL
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
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTORQUALIFICATIONTEXT

**Inspectorqualificationtext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
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
| `InspectorQualification` | ✓ | |  | `prfql` |  |  |
| `Language` | ✓ | |  | `sprsl` |  |  |
| `InspectorQualificationText` |  | |  | `pqtxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspectorQualification` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspectorQualification` | `I_InspectorQualification` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Inspector Qualification - Text'
@AccessControl.authorizationCheck: #CHECK
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        sizeCategory: #M,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'InspectorQualification'
}
@Analytics.technicalName: 'IINSPQUALIFICT'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectorQualificationText as select from tq11t 

   association [0..1] to I_Language as _Language
      on     $projection.Language = _Language.Language
      
   association [1..1] to I_InspectorQualification as _InspectorQualification
      on     $projection.InspectorQualification      = _InspectorQualification.InspectorQualification

{
      //--[ GENERATED:012:GlBfhyFV7kY4h7jYW0xcqG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_InspectorQualificationStdVH',
                     element: 'InspectorQualification' }
        }]
      // ]--GENERATED
  @ObjectModel.foreignKey.association: '_InspectorQualification'
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  key tq11t.prfql as InspectorQualification,
  @Semantics.language: true
  key tq11t.sprsl as Language, 

  @EndUserText.label: 'Inspector Qualification Text'
  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
  tq11t.pqtxt as InspectorQualificationText,
    
  /* Associations */
  _Language,
  _InspectorQualification 
}
```
