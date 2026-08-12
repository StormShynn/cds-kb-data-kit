---
name: I_FUNCTIONALAREA
description: "Functionalarea"
app_component: FI-GL-GL-A-2CL
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
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FUNCTIONALAREA

**Functionalarea**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `FunctionalArea` | ✓ | |  | `fkber` |  |  |
| `CreationDate` |  | |  | `created_on` |  |  |
| `LastChangeDate` |  | |  | `modified_on` |  |  |
| `_Text` | | ✓ | | | | |
| `_FunctionalAreaHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FunctionalAreaText` | [0..*] |
| `_FunctionalAreaHierarchyNode` | `I_FunctionalAreaHierNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Functional Area'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIFUNCAREA'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'FunctionalArea'
@ObjectModel.sapObjectNodeType.name: 'FunctionalArea'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #FULL
}
//@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Search.searchable: true
define view I_FunctionalArea
  as select from tfkb
  association [0..*] to I_FunctionalAreaText     as _Text                        on $projection.FunctionalArea = _Text.FunctionalArea
  association [0..*] to I_FunctionalAreaHierNode as _FunctionalAreaHierarchyNode on $projection.FunctionalArea = _FunctionalAreaHierarchyNode.FunctionalArea

{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_FunctionalAreaHierarchyNode'
  key fkber       as FunctionalArea,
  
      @Semantics.systemDate.createdAt: true
      created_on  as CreationDate,
      @Semantics.systemDate.lastChangedAt: true
      modified_on as LastChangeDate,
  
      _Text,
      _FunctionalAreaHierarchyNode
}
```
