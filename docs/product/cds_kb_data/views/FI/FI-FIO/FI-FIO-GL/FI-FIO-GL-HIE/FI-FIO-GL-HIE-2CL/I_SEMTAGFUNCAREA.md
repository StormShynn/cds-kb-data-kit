---
name: I_SEMTAGFUNCAREA
description: "Semtagfuncarea"
app_component: FI-FIO-GL-HIE-2CL
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
  - interface-view
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_SEMTAGFUNCAREA

**Semtagfuncarea**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
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
| `GLAccountHierarchy` | ✓ | |  |  |  |  |
| `HierarchyNode` | ✓ | |  |  |  |  |
| `SemanticTag` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `ValidityStartDate` | ✓ | |  |  |  |  |
| `FunctionalArea` | ✓ | |  |  |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_GLAccountHierarchyNode` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Functional Area with Semantic Tag'
@AbapCatalog.sqlViewName: 'IFISEMTAGFUAREA'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@ObjectModel.representativeKey: 'SemanticTag'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #CUBE,
              dataExtraction.enabled: true
            }
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@ObjectModel.sapObjectNodeType.name:'SemanticTagFunctionalArea'

define view I_SemTagFuncArea
  as select from P_SemTagFuncArea


{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key GLAccountHierarchy,
      //      @ObjectModel.foreignKey.association: '_GLAccountHierarchyNode'
  key HierarchyNode,
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
  key FunctionalArea,

      _Hierarchy,
      _GLAccountHierarchyNode,
      _SemanticTag,
      _FunctionalArea


}
```
