---
name: I_CUSTUNIVHIERARCHYNODE_2
description: Custunivhierarchynode 2
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTUNIVHIERARCHYNODE_2

**Custunivhierarchynode 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `UniversalHierarchy` | ✓ | |  | `hryid` |
| `HierarchyNode` | ✓ | |  | `hrynode` |
| `CustUnivHierarchyValidEndDate` | ✓ | |  | `cast(Node.hryvalto as custhierarchyvalidityenddate preserving type )` |
| `CustUnivHierarchyValidStartDte` |  | |  | `cast(Node.hryvalfrom as custhierarchyvaliditystartdate preserving type )` |
| `CustUnivHierarchyType` |  | |  | `hrytyp` |
| `CustUnivHierarchyShortID` |  | | `_hierarchydirectory` | `hrysid` |
| `CustUnivHierarchyParentNode` |  | |  | `parnode` |
| `CustUnivHierarchyNodeType` |  | |  | `nodetype` |
| `CustUnivHierarchyNodeValue` |  | |  | `nodevalue` |
| `Customer` |  | |  | `cast( _NodeAttribute.hryattrvalue as kunnr)` |
| `CustUnivHierarchyNodeSequence` |  | |  | `hryseqnbr` |
| `CustUnivHierarchyNodeLevel` |  | |  | `hrylevel` |
| `CustUnivHierarchyLeafValue` |  | |  | `leafvalue` |
| `_CustUnivHierarchy` | | ✓ | | |
| `_Text` | | ✓ | | |
| `_Customer` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustUnivHierarchy` | `I_CustUnivHierarchy` | [1..1] |
| `_Text` | `I_CustUnivHierarchyNodeText_2` | [0..*] |
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

```abap
@Analytics.technicalName: 'ICUSTUHFND2'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Customer Universal Hierarchy Node'
@Analytics.internalName:#LOCAL
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true
   }
}
@VDM.viewType: #BASIC
@ObjectModel:{
 usageType : {
 serviceQuality: #A,
 sizeCategory: #L,
 dataClass: #MASTER
 }
 }
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.sapObjectNodeType.name: 'CustomerUniversalHierarchyNode'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION]
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

define view entity I_CustUnivHierarchyNode_2
as select from hrrp_node_n as Node

left outer to one join hrrp_attr_node_n               as _NodeAttribute          on  Node.hrytyp                = _NodeAttribute.hrytyp
                                                                                 and Node.hryid                 = _NodeAttribute.hryid
                                                                                 and Node.hrynode               = _NodeAttribute.hrynode
                                                                                 and Node.parnode               = _NodeAttribute.parnode
                                                                                 and Node.hryvalto              = _NodeAttribute.hryvalto
                                                                                 and _NodeAttribute.hryattrname = 'CUSTOMER'

left outer to one join hrrp_dir_n                     as _hierarchydirectory     on   Node.hryid    = _hierarchydirectory.hryid
                                                                                 and  Node.hryvalto = _hierarchydirectory.hryvalto

association [1..1] to I_CustUnivHierarchy             as _CustUnivHierarchy      on $projection.UniversalHierarchy             = _CustUnivHierarchy.UniversalHierarchy
                                                                                 and $projection.CustUnivHierarchyValidEndDate = _CustUnivHierarchy.CustUnivHierarchyValidEndDate

association [0..*] to I_CustUnivHierarchyNodeText_2   as _Text                   on $projection.UniversalHierarchy                = _Text.UniversalHierarchy
                                                                                 and $projection.HierarchyNode                    = _Text.HierarchyNode
                                                                                 and $projection.CustUnivHierarchyValidEndDate    = _Text.CustUnivHierarchyValidEndDate
                                                                                 and $projection.Customer                         = ' '

association [1..1] to I_Customer                      as _Customer               on  $projection.Customer = _Customer.Customer

{
      @ObjectModel.foreignKey.association: '_CustUnivHierarchy'
   key Node.hryid                                                                as UniversalHierarchy,
       @ObjectModel.text.association: '_Text'       
   key Node.hrynode                                                              as HierarchyNode,
      @Semantics.businessDate.to: true
   key cast(Node.hryvalto as custhierarchyvalidityenddate preserving type )      as CustUnivHierarchyValidEndDate,
      @Semantics.businessDate.from: true
       cast(Node.hryvalfrom as custhierarchyvaliditystartdate preserving type )  as CustUnivHierarchyValidStartDte,
      Node.hrytyp                                                                as CustUnivHierarchyType,
      _hierarchydirectory.hrysid                                                 as CustUnivHierarchyShortID,
      Node.parnode                                                               as CustUnivHierarchyParentNode,
      Node.nodetype                                                              as CustUnivHierarchyNodeType,
      Node.nodevalue                                                             as CustUnivHierarchyNodeValue,
      @ObjectModel.foreignKey.association: '_Customer'
      cast( _NodeAttribute.hryattrvalue as kunnr)                                as Customer,
      Node.hryseqnbr                                                             as CustUnivHierarchyNodeSequence,
      Node.hrylevel                                                              as CustUnivHierarchyNodeLevel,
      Node.leafvalue                                                             as CustUnivHierarchyLeafValue,

   //Associations
   _CustUnivHierarchy,
   _Text,
   _Customer

}
where
  ( Node.hrytyp  = 'CH02' or Node.hrytyp  = 'CH01') and
  ( Node.nodetype = 'L' or Node.nodetype = 'N'or Node.nodetype = 'R' )
```
