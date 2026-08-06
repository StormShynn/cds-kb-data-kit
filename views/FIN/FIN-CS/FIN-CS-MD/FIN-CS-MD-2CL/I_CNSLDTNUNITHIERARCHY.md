---
name: I_CNSLDTNUNITHIERARCHY
description: Cnsldtnunithierarchy
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITHIERARCHY

**Cnsldtnunithierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationUnitHierarchy` | `cast(_Hierarchy.UniversalHierarchy as fincs_consolidationunithier preserving type )` |
| key `ValidityEndDate` | `_Hierarchy.ValidityEndDate` |
| `ValidityStartDate` | `_Hierarchy.ValidityStartDate` |
| `LastChangedByUser` | `_Hierarchy.LastChangedByUser` |
| `LastChangeDateTime` | `_Hierarchy.LastChangeDateTime` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnUnitHierarchyText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCUNITHIER',
  compiler.compareFilter: true
  }
@Analytics: {
  internalName:#LOCAL,
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationUnitHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationUnitHierarchy'
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit Hierarchy'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnUnitHierarchy
  as select from P_CnsldtnUnivHierarchy_3(P_HierarchyType : 'CS17', P_MasterDataType : 'RBUNIT' ) as _Hierarchy

  association [0..*] to I_CnsldtnUnitHierarchyText as _Text on $projection.ConsolidationUnitHierarchy = _Text.ConsolidationUnitHierarchy
  //                                                            and $projection.ValidityEndDate            = _Text.ValidityEndDate
{
      @ObjectModel.text.association: '_Text'
  key cast(_Hierarchy.UniversalHierarchy as fincs_consolidationunithier preserving type ) as ConsolidationUnitHierarchy,

      @Semantics.businessDate.to: true
  key _Hierarchy.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Hierarchy.ValidityStartDate,

      @Semantics.user.lastChangedBy: true
      _Hierarchy.LastChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      _Hierarchy.LastChangeDateTime,


      _Text
};
```
