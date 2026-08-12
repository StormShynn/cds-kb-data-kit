---
name: I_ENTWBSELEMENTHIERNODE
description: "This CDS view retrieves the hierarchy nodes of the WBS element hierarchy as well as information about their position within the hierarchy. It provides information about the hierarchical arrangement of WBS elements in enterprise projects and professional services projects. WBS elements of professional services projects are referred to as work packages in professional services apps. This CDS view provides the data to answer the following business questions: Which WBS elements are included as nodes in the WBS element hierarchy? What is the parent node of each WBS element in the hierarchy? What is the sequence of the WBS elements that have the same parent node? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERNODE')/$value
semantic_en: "This CDS view retrieves the hierarchy nodes of the WBS element hierarchy as well as information about their position within the hierarchy. It provides information about the hierarchical arrangement of WBS elements in enterprise projects and professional services projects. WBS elements of professional services projects are referred to as work packages in professional services apps. This CDS view provides the data to answer the following business questions: Which WBS elements are included as nodes in the WBS element hierarchy? What is the parent node of each WBS element in the hierarchy? What is the sequence of the WBS elements that have the same parent node? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Node of WBS Element Hierarchy — CDS view giao diện dựa trên Node of WBS Element Hierarchy."
keywords:
  - "node"
  - "wbs"
  - "element"
  - "hierarchy"
  - "internal"
  - "external"
  - "parent"
  - "object"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - bo:project
---
# I_ENTWBSELEMENTHIERNODE

**This CDS view retrieves the hierarchy nodes of the WBS element hierarchy as well as information about their position within the hierarchy. It provides information about the hierarchical arrangement of WBS elements in enterprise projects and professional services projects. WBS elements of professional services projects are referred to as work packages in professional services apps. This CDS view provides the data to answer the following business questions: Which WBS elements are included as nodes in the WBS element hierarchy? What is the parent node of each WBS element in the hierarchy? What is the sequence of the WBS elements that have the same parent node? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementHierarchy` | ✓ | |  | `cast ('WBSELEMENTHIERARCHY ' as wbshierarchy preserving type)` | `CHAR(42)` |  WBS Element Hierarchy |
| `HierarchyNodeUUID` | ✓ | |  | `cast( task.guid as /s4ppm/tv_hierarchy_node_guid preserving type )` | `RAW(16)` | Hierarchy Node GUID |
| `WBSElementInternalID` |  | |  | `cast ( task.pspnr as /s4ppm/tv_s4_pspnr preserving type )` | `NUMC(8)` | Internal WBS Element ID |
| `WBSElementExternalID` |  | |  | `cast( task.external_id as ps_posid_edit preserving type )` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ParentObjectUUID` |  | |  | `cast( hierarchy.up as /s4ppm/tv_parent_entity_guid preserving type )` | `RAW(16)` | Parent Entity Guid |
| `ProjectElementOrdinalNumber` |  | |  | `sort_number` | `INT4(10)` | Sortnumber |
| `_ProjectElement` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectElement` | `I_EnterpriseProjectElement` | [1..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [1..1] |
| `_Hierarchy` | `I_EntWBSElementHierarchy` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERNODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERNODE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Node of WBS Element Hierarchy'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'EnterpriseProjectElement'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@Hierarchy.parentChild:
   [{ recurse:          {   parent: ['ParentObjectUUID'],   child:  ['HierarchyNodeUUID']  },
   siblingsOrder:    [{   by: 'ProjectElementOrdinalNumber',    direction: #ASC  }],
   directory:        '_Hierarchy'
   }]

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #HIERARCHY

@ObjectModel: {
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE  ],
   usageType: {
     serviceQuality:  #B,
     dataClass:       #MASTER,
     sizeCategory:    #XL
   }
}
 
define view entity I_EntWBSElementHierNode 
  as select from /s4ppm/hierarchy  as hierarchy
// filter milestone  
  inner to one join /s4ppm/task    as task           on task.guid   = hierarchy.object_guid
                                                    and task.milestone is initial 
                                                    
  association [1..1] to I_EnterpriseProjectElement         as _ProjectElement on $projection.HierarchyNodeUUID    = _ProjectElement.ProjectElementUUID
  association [1..1] to I_WBSElementBasicData              as _WBSElement     on $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID    
                                                                             and $projection.WBSElementExternalID = _WBSElement.WBSElementExternalID                                                                                                                                                                                               
  association [1..1] to I_EntWBSElementHierarchy           as _Hierarchy      on  $projection.WBSElementHierarchy = _Hierarchy.WBSElementHierarchy

{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
      key cast ('WBSELEMENTHIERARCHY                       ' as wbshierarchy preserving type)   as WBSElementHierarchy,   
      @ObjectModel.foreignKey.association: '_ProjectElement'   
      key cast( task.guid    as  /s4ppm/tv_hierarchy_node_guid preserving type )                as HierarchyNodeUUID,
      @ObjectModel.foreignKey.association: '_WBSElement'  
      cast ( task.pspnr      as /s4ppm/tv_s4_pspnr           preserving type )                  as WBSElementInternalID,
      cast( task.external_id as ps_posid_edit                preserving type )                  as WBSElementExternalID,  // = prps.posid_edit, not transferred with coding mask
               
      cast( hierarchy.up     as /s4ppm/tv_parent_entity_guid  preserving type )                 as ParentObjectUUID,
      hierarchy.sort_number                                                                     as ProjectElementOrdinalNumber, // HierarchyNodeSequence,
      
      _WBSElement,
      _ProjectElement,
      _Hierarchy

} where hierarchy.hierarchy_type = 'T'
```
