---
name: I_PRODUNIVHIERNODETEXT_2
description: "Produnivhiernodetext 2"
app_component: LO-MD-MM-2CL
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
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUNIVHIERNODETEXT_2

**Produnivhiernodetext 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `ProdUnivHierarchy` | ✓ | |  | `cast(substring( nodet.hryid, 6, 26 ) as prod_hier_id )` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `ProdHierarchyValidityEndDate` | ✓ | |  | `cast(nodet.hryvalto as prodhierarchyvalidityenddate preserving type )` |  |  |
| `ProdHierarchyValidityStartDate` |  | |  | `cast(nodet.hryvalfrom as prodhierarchyvaliditystartdate preserving type )` |  |  |
| `ProdUnivHierarchyNodeText` |  | |  | `cast(nodetxt as prod_hier_node_value_text)` |  |  |
| `_ProductHierarchy` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductHierarchy` | `I_ProdUnivHierarchyBasic` | [1..*] |
| `_ProductHierarchyNode` | `I_ProdUnivHierarchyNodeBasic` | [1..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDUNIVHIERNDT2',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Hierarchy Node - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'HierarchyNode',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL
  },
  dataCategory: #TEXT
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE
]
@Analytics:{  
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true
    }
}
define view I_ProdUnivHierNodeText_2
  as select from hrrp_nodet     as nodet
    inner join   hrrp_directory as dir on  dir.hryid    = nodet.hryid
                                       and dir.hryvalto = nodet.hryvalto
                                       and dir.hryver   = nodet.hryver
  //                                    and dir.hrytyp   = 'MD01'
  //[1..*] as they are temporal assoc
  association [1..*] to I_ProdUnivHierarchyBasic     as _ProductHierarchy     on  $projection.ProdUnivHierarchy = _ProductHierarchy.ProdUnivHierarchy

  association [1..*] to I_ProdUnivHierarchyNodeBasic as _ProductHierarchyNode on  $projection.ProdUnivHierarchy = _ProductHierarchyNode.ProdUnivHierarchy
                                                                              and $projection.HierarchyNode     = _ProductHierarchyNode.HierarchyNode

{

      @Semantics.language: true
  key spras                                                                     as Language,
      @ObjectModel.foreignKey.association: '_ProductHierarchy'
  key cast(substring( nodet.hryid, 6, 26 ) as prod_hier_id )                    as ProdUnivHierarchy,
      @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
  key nodet.hrynode                                                             as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast(nodet.hryvalto as prodhierarchyvalidityenddate preserving type )     as ProdHierarchyValidityEndDate,
      @Semantics.businessDate.from: true
      cast(nodet.hryvalfrom as prodhierarchyvaliditystartdate preserving type ) as ProdHierarchyValidityStartDate,
      @Semantics.text: true
      cast(nodetxt as prod_hier_node_value_text)                                as ProdUnivHierarchyNodeText,
      _ProductHierarchy,
      _ProductHierarchyNode // Make association public
}
where
     dir.hrytyp = 'MD01'
  or dir.hrytyp = 'MD02'
```
