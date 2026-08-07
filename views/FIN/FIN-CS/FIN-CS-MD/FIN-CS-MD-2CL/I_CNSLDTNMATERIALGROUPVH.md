---
name: I_CNSLDTNMATERIALGROUPVH
description: "CNSLDTNMaterial GroupVH"
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
  - value-help
  - material
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIALGROUPVH

**CNSLDTNMaterial GroupVH**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialGroup` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSMTGROUPVH',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'MaterialGroup',
  semanticKey: ['MaterialGroup'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Material Group'

define view I_CnsldtnMaterialGroupVH
  as select from I_CnsldtnMaterialGroup as _CnsldtnMaterialGroup

{
      @ObjectModel.text.element: ['MaterialGroupName']
  key MaterialGroup,

      @Semantics.text
      _CnsldtnMaterialGroup._Text[1: Language=$session.system_language].MaterialGroupName
}
```
