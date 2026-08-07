---
name: I_CNSLDTNDOCTYPEHIERARCHYT_2
description: Cnsldtndoctypehierarchyt 2
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
# I_CNSLDTNDOCTYPEHIERARCHYT_2

**Cnsldtndoctypehierarchyt 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `spras` |
| `ConsolidationDocTypeHierarchy` | ✓ | |  | `cast(_HierarchyText.hryid as fincs_doctypehierarchy preserving type )` |
| `ValidityEndDate` | ✓ | |  | `cast(_HierarchyText.hryvalto as fincs_validityenddate preserving type )` |
| `ValidityStartDate` |  | |  | `cast(_HierarchyText.hryvalfrom as fincs_validitystartdate preserving type )` |
| `ConsolidationDocTypeHierTxt` |  | |  | `cast(_HierarchyText.hrytxt as fincs_hierarchytext preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCDOCTYPEHDIRT2',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationDocTypeHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,                          
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnDocumentTypeHierText'                        
  }
@VDM: {viewType: #BASIC }
@EndUserText.label: 'Cnsldtn Document Type Hierarchy - Text'

define view I_CnsldtnDocTypeHierarchyT_2
  as select from hrrp_directoryt as _HierarchyText

    inner join   hrrp_directory on  hrrp_directory.hryid    = _HierarchyText.hryid
                                and hrrp_directory.hryver   = _HierarchyText.hryver
                                and hrrp_directory.hryvalto = _HierarchyText.hryvalto

  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language

{
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language
  key   _HierarchyText.spras                                                        as Language,

  key   cast(_HierarchyText.hryid as fincs_doctypehierarchy preserving type )       as ConsolidationDocTypeHierarchy,

        @Semantics.businessDate.to: true
  key   cast(_HierarchyText.hryvalto as fincs_validityenddate preserving type )     as ValidityEndDate,

        @Semantics.businessDate.from: true
        cast(_HierarchyText.hryvalfrom as fincs_validitystartdate preserving type ) as ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.hrytxt as fincs_hierarchytext preserving type )         as ConsolidationDocTypeHierTxt,


        _Language
}
where
  _HierarchyText.hrytype = 'CS19';
```
