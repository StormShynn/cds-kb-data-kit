---
name: I_CNSLDTNDOCTYPEHIERARCHY_2
description: Cnsldtndoctypehierarchy 2
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
# I_CNSLDTNDOCTYPEHIERARCHY_2

**Cnsldtndoctypehierarchy 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDocTypeHierarchy` | ✓ | |  | `cast(_Hierarchy.hryid as fincs_doctypehierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `hryvalto` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `hryvalfrom` |  |  |
| `LastChangedByUser` |  | |  | `cast(_Hierarchy.upduser as fincs_lastchangedbyuser preserving type )` |  |  |
| `LastChangeDateTime` |  | |  | `cast(_Hierarchy.updtime as fincs_lastchangedatetime preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnDocTypeHierarchyT_2` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCDOCTYPEHDIR2',
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
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationDocTypeHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,                          
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnDocumentTypeHierarchy'
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Document Type Hierarchy'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnDocTypeHierarchy_2
  as select from hrrp_directory as _Hierarchy

  association [0..*] to I_CnsldtnDocTypeHierarchyT_2 as _Text on $projection.ConsolidationDocTypeHierarchy = _Text.ConsolidationDocTypeHierarchy
  //                                                            and $projection.ValidityEndDate            = _Text.ValidityEndDate

{
      @ObjectModel.text.association: '_Text'
  key cast(_Hierarchy.hryid as fincs_doctypehierarchy preserving type )     as ConsolidationDocTypeHierarchy,

      @Semantics.businessDate.to: true
  key _Hierarchy.hryvalto                                                   as ValidityEndDate,

      @Semantics.businessDate.from: true
      _Hierarchy.hryvalfrom                                                 as ValidityStartDate,

      @Semantics.user.lastChangedBy: true
      cast(_Hierarchy.upduser as fincs_lastchangedbyuser preserving type )  as LastChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      cast(_Hierarchy.updtime as fincs_lastchangedatetime preserving type ) as LastChangeDateTime,


      /* Associations */
      _Text
}
where
  _Hierarchy.hrytyp = 'CS19';
```
