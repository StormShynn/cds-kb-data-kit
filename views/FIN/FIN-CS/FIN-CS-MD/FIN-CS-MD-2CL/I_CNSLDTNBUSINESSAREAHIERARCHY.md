---
name: I_CNSLDTNBUSINESSAREAHIERARCHY
description: Cnsldtnbusinessareahierarchy
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
# I_CNSLDTNBUSINESSAREAHIERARCHY

**Cnsldtnbusinessareahierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnBusinessAreaHierarchy` | ✓ | |  | `cast(_Hierarchy.UniversalHierHierarchyID as fincs_businessareahierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |  |  |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |  |  |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnBusinessAreaHierText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCBAHIER',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
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
  representativeKey: 'CnsldtnBusinessAreaHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnBusinessAreaHierarchy'
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Business Area Hierarchy'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnBusinessAreaHierarchy
  as select from P_CnsldtnUnivHierarchy(P_HierarchyType : 'CS06', P_MasterDataType : 'RBUSA' ) as _Hierarchy

  association [0..*] to I_CnsldtnBusinessAreaHierText as _Text on $projection.CnsldtnBusinessAreaHierarchy = _Text.CnsldtnBusinessAreaHierarchy
  //                                                          and $projection.ValidityEndDate               = _Text.ValidityEndDate
{
      @ObjectModel.text.association: '_Text'
  key cast(_Hierarchy.UniversalHierHierarchyID as fincs_businessareahierarchy preserving type ) as CnsldtnBusinessAreaHierarchy,

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
