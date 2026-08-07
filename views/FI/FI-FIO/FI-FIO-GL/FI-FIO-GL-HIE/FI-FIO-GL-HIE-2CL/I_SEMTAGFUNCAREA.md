---
name: I_SEMTAGFUNCAREA
description: Semtagfuncarea
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
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
