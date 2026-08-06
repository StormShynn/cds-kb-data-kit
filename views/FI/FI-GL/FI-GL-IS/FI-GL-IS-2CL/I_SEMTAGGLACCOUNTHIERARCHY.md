---
name: I_SEMTAGGLACCOUNTHIERARCHY
description: Semtaggl AccountHIERARCHY
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - gl-account
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_SEMTAGGLACCOUNTHIERARCHY

**Semtaggl AccountHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GLAccountHierarchy` | `GLAccountHierarchy` |
| key `ValidityEndDate` | `ValidityEndDate` |
| `ValidityStartDate` | `ValidityStartDate` |
| `HierarchyType` | `HierarchyType` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeTime` | `LastChangeTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GLAccountHierarchyText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'General Ledger Account Hierarchy'
@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL }
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true
@AbapCatalog.sqlViewName: 'IFISTGLACCOUNTH'
@ObjectModel.representativeKey: 'GLAccountHierarchy'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view I_SemTagGLAccountHierarchy
  as select from I_GLAccountHierarchy
  association [0..*] to I_GLAccountHierarchyText as _Text on  $projection.GLAccountHierarchy = _Text.GLAccountHierarchy
                                                          and $projection.ValidityEndDate    = _Text.ValidityEndDate

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
  key GLAccountHierarchy,

      @Semantics.businessDate.to: true
  key ValidityEndDate,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      HierarchyType,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @API.element.releaseState: #DEPRECATED
      @VDM.lifecycle.status:    #DEPRECATED
      @API.element.successor:   'LastChangeDateTime'
      @VDM.lifecycle.successor: 'LastChangeDateTime'
      LastChangeTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      _Text

}
where
  SemanticTagIsUsed is not initial
```
