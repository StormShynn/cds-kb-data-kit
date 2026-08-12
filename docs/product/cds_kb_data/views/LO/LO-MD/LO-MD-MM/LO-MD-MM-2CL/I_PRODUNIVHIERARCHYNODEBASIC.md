---
name: I_PRODUNIVHIERARCHYNODEBASIC
description: "Produnivhierarchynodebasic"
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUNIVHIERARCHYNODEBASIC

**Produnivhierarchynodebasic**

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
| `ProdUnivHierarchy` | ✓ | |  | `cast(substring( node.hryid, 6, 26 ) as prod_hier_id )` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `ProdHierarchyValidityEndDate` | ✓ | |  | `cast(node.hryvalto as prodhierarchyvalidityenddate preserving type )` |  |  |
| `ProdHierarchyValidityStartDate` |  | |  | `cast(node.hryvalfrom as prodhierarchyvaliditystartdate preserving type )` |  |  |
| `ParentNode` |  | |  | `parnode` |  |  |
| `ProdUnivHierarchyNode` |  | |  | `cast( case node.nodetype when 'R' then node.nodevalue when 'N' then node.nodevalue else '' end as prod_hier_node_value )` |  |  |
| `Product` |  | |  | `cast( case node.hrytype when 'MD01' then case node.nodetype when 'L' then node.nodevalue else '' end else case node.nodetype when 'L' then node.nodevalue when 'N' then node.nodevalue else '' end end as productnumber )` |  |  |
| `HierarchyNodeSequence` |  | |  | `hryseqnbr` |  |  |
| `NodeType` |  | |  | `nodetype` |  |  |
| `HierarchyNodeLevel` |  | |  | `hrylevel` |  |  |
| `HierarchyType` |  | |  | `hrytype` |  |  |
| `_ProductHierarchy` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductHierarchy` | `I_ProdUnivHierarchyBasic` | [1..1] |
| `_Text` | `I_ProdUnivHierNodeText_2` | [0..*] |
| `_Product` | `I_Product` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDUNIVHIERNDB',
  compiler.compareFilter: true,
  preserveKey: true
 }

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Hierarchy Node'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL
  },
  representativeKey: 'HierarchyNode'
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
@Analytics:{  
    dataExtraction: {
        enabled: true
    } 
}
@ObjectModel.sapObjectNodeType.name:'ProdUnivHierarchyNormalNode'
define view I_ProdUnivHierarchyNodeBasic
  as select from hrrp_node as node
     inner join   hrrp_directory as dir on  dir.hryid    = node.hryid
                                         and dir.hryvalto = node.hryvalto
                                         and dir.hryver   = node.hryver
  //                                       and dir.hrytyp   = 'MD01'         
  association [1..1] to I_ProdUnivHierarchyBasic as _ProductHierarchy on  $projection.ProdUnivHierarchy            = _ProductHierarchy.ProdUnivHierarchy
                                                                      and $projection.ProdHierarchyValidityEndDate = _ProductHierarchy.ProdHierarchyValidityEndDate

  association [0..*] to I_ProdUnivHierNodeText_2 as _Text             on  $projection.ProdUnivHierarchy            = _Text.ProdUnivHierarchy
                                                                      and $projection.HierarchyNode                = _Text.HierarchyNode
                                                                      and $projection.ProdHierarchyValidityEndDate = _Text.ProdHierarchyValidityEndDate
                                                                      and $projection.Product                      = '' // we need this text assoc only for non-leaf nodes

  association [1..1] to I_Product                as _Product          on  $projection.Product = _Product.Product

{
      @ObjectModel.foreignKey.association: '_ProductHierarchy'
  key cast(substring( node.hryid, 6, 26 ) as prod_hier_id )                    as ProdUnivHierarchy,
      @ObjectModel.text.association: '_Text'
  key node.hrynode                                                             as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast(node.hryvalto as prodhierarchyvalidityenddate preserving type )     as ProdHierarchyValidityEndDate,
      @Semantics.businessDate.from: true
      cast(node.hryvalfrom as prodhierarchyvaliditystartdate preserving type ) as ProdHierarchyValidityStartDate,
      node.parnode                                                             as ParentNode,

      @EndUserText.label: 'Product Hierarchy Node'
      cast( case node.nodetype
        when 'R' then node.nodevalue
        when 'N' then node.nodevalue
        else ''
      end as prod_hier_node_value )                                            as ProdUnivHierarchyNode,

      @ObjectModel.foreignKey.association: '_Product'
      cast(
        case node.hrytype
          when 'MD01' then
            case node.nodetype
              when 'L' then node.nodevalue
              else ''
             end
          else
            case node.nodetype
              when 'L' then node.nodevalue
              when 'N' then node.nodevalue
              else  ''
            end
         end as productnumber  )                                               as Product,
      node.hryseqnbr                                                           as HierarchyNodeSequence,

      node.nodetype                                                            as NodeType,
      node.hrylevel                                                            as HierarchyNodeLevel,
      node.hrytype                                                             as HierarchyType,
      _ProductHierarchy,
      _Text,
      _Product
}
where
  (
       node.hrytype  = 'MD01'
    or node.hrytype  = 'MD02'
  )
  and(
       node.nodetype = 'L'
    or node.nodetype = 'N'
    or node.nodetype = 'R'
  )
```
