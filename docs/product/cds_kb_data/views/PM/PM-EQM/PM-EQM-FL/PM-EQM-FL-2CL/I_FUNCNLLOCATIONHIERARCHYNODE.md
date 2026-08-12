---
name: I_FUNCNLLOCATIONHIERARCHYNODE
description: "Funcnllocationhierarchynode"
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-FL
  - interface-view
  - component:PM-EQM-FL-2CL
  - lob:Plant Maintenance
---
# I_FUNCNLLOCATIONHIERARCHYNODE

**Funcnllocationhierarchynode**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'SuperiorFunctionalLocation']` |  | |  | `parent: [ 'SuperiorFunctionalLocation']` |  |  |
| `'FunctionalLocation']` |  | |  | `child: [ 'FunctionalLocation']` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #BASIC
@EndUserText.label: 'Functional Location Hiearchy Interface'

@ObjectModel: {
  dataCategory: #HIERARCHY,
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  },
  supportedCapabilities: [#PARENT_CHILD_HIERARCHY_NODE_PROVIDER],
  modelingPattern: #PARENT_CHILD_HIERARCHY_NODE_PROVIDER
}
@Analytics.technicalName: 'IFLOCHIERNODE'
@ObjectModel.sapObjectNodeType.name: 'FunctionalLocation'

@Metadata.ignorePropagatedAnnotations:true

@Hierarchy.parentChild: [ {
  name: 'FunctionalLocationHierarchy',
  label: 'Functional Location Hierarchy',
  recurse: {
    parent: [ 'SuperiorFunctionalLocation'],
    child:  [  'FunctionalLocation']
  }
}]
@Analytics: {
  dataExtraction.enabled,
  --dataExtraction.delta.changeDataCapture.automatic
  dataExtraction.delta.changeDataCapture.mapping: [{
    role: #MAIN,
    table: 'IFLOT',
    viewElement: ['FunctionalLocation'],//['HierarchyNode'],
    tableElement: ['tplnr']
  }]
}

define view entity I_FuncnlLocationHierarchyNode as select from I_FunctionalLocation
association [0..1] to I_FunctionalLocationData as _FunctionalLocationData on $projection.FunctionalLocation = _FunctionalLocationData.FunctionalLocation
association [0..*] to I_FunctionalLocationText as _Text on $projection.FunctionalLocation = _Text.FunctionalLocation
 {
   @ObjectModel.foreignKey.association: '_FunctionalLocationData'
   @ObjectModel.text.association: '_Text'
  key I_FunctionalLocation.FunctionalLocation,
  
  I_FunctionalLocation.FunctionalLocation as HierarchyNode,
  
  I_FunctionalLocation.SuperiorFunctionalLocation,
 
  _Text,
  _FunctionalLocationData // Make association public
}
```
