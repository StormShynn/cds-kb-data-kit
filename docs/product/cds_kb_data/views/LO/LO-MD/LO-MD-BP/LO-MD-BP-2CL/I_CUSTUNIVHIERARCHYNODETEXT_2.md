---
name: I_CUSTUNIVHIERARCHYNODETEXT_2
description: "Custunivhierarchynodetext 2"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTUNIVHIERARCHYNODETEXT_2

**Custunivhierarchynodetext 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `UniversalHierarchy` | ✓ | |  | `hryid` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `CustUnivHierarchyValidEndDate` | ✓ | |  | `cast(nodetn.hryvalto as custhierarchyvalidityenddate preserving type )` |  |  |
| `CustUnivHierarchyValidStartDte` |  | |  | `cast(nodetn.hryvalfrom as custhierarchyvaliditystartdate preserving type )` |  |  |
| `CustUnivHierarchyType` |  | |  | `hrytyp` |  |  |
| `CustUnivHierarchyShortID` |  | |  | `hrysid` |  |  |
| `CustUnivHierarchyParentNode` |  | |  | `parnode` |  |  |
| `HierarchyNodeText` |  | |  | `nodetxt` |  |  |
| `_CustUnivHierarchy` | | ✓ | | | | |
| `_CustomerHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustUnivHierarchy` | `I_CustUnivHierarchy` | [1..1] |
| `_CustomerHierarchyNode` | `I_CustUnivHierarchyNode_2` | [1..1] |

## Source Code

```abap
@Analytics.technicalName: 'ICUSTUHFNDT2'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Customer Universal Hierarchy Node - Text'
@Analytics: {
  dataExtraction: {
    enabled: true
   }
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  },
  dataCategory: #TEXT
}
@ObjectModel.sapObjectNodeType.name: 'CustomerUnivHierarchyNodeText'
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT
]
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CustUnivHierarchyNodeText_2
as select from hrrp_nodet_n     as nodetn

inner join hrrp_dir_n                             as dir                         on  dir.hryid    = nodetn.hryid
                                                                                 and dir.hryvalto = nodetn.hryvalto


association [1..1] to I_CustUnivHierarchy         as _CustUnivHierarchy          on $projection.UniversalHierarchy             = _CustUnivHierarchy.UniversalHierarchy
                                                                                 and $projection.CustUnivHierarchyValidEndDate = _CustUnivHierarchy.CustUnivHierarchyValidEndDate

association [1..1] to I_CustUnivHierarchyNode_2   as _CustomerHierarchyNode      on $projection.UniversalHierarchy             = _CustomerHierarchyNode.UniversalHierarchy
                                                                                 and $projection.HierarchyNode                 = _CustomerHierarchyNode.HierarchyNode
                                                                                 and $projection.CustUnivHierarchyValidEndDate = _CustomerHierarchyNode.CustUnivHierarchyValidEndDate

{
      @Semantics.language: true
  key nodetn.spras                                                               as Language,
     @ObjectModel.foreignKey.association: '_CustUnivHierarchy'
  key nodetn.hryid                                                               as UniversalHierarchy,
      @ObjectModel.foreignKey.association: '_CustomerHierarchyNode'
      @ObjectModel.text.element: [ 'HierarchyNodeText' ]
  key  nodetn.hrynode                                                            as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast(nodetn.hryvalto as custhierarchyvalidityenddate preserving type )     as CustUnivHierarchyValidEndDate,
      @Semantics.businessDate.from: true
      cast(nodetn.hryvalfrom as custhierarchyvaliditystartdate preserving type ) as CustUnivHierarchyValidStartDte,
      nodetn.hrytyp                                                              as CustUnivHierarchyType,
      dir.hrysid                                                                 as CustUnivHierarchyShortID,
      nodetn.parnode                                                             as CustUnivHierarchyParentNode,
      @Semantics.text: true
      nodetn.nodetxt                                                             as HierarchyNodeText,
      //Associations
      _CustUnivHierarchy,
      _CustomerHierarchyNode

}
where nodetn.hrytyp = 'CH02' or nodetn.hrytyp = 'CH01'
```
