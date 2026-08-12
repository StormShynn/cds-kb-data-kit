---
name: I_CNSLDTNDOCTYPEHIERARCHYT_2
description: "Cnsldtndoctypehierarchyt 2"
app_component: FIN-CS-MD-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `spras` |  |  |
| `ConsolidationDocTypeHierarchy` | ✓ | |  | `cast(_HierarchyText.hryid as fincs_doctypehierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(_HierarchyText.hryvalto as fincs_validityenddate preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast(_HierarchyText.hryvalfrom as fincs_validitystartdate preserving type )` |  |  |
| `ConsolidationDocTypeHierTxt` |  | |  | `cast(_HierarchyText.hrytxt as fincs_hierarchytext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

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
