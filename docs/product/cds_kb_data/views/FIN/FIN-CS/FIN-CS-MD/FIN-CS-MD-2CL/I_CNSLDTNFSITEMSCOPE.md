---
name: I_CNSLDTNFSITEMSCOPE
description: "Cnsldtnfsitemscope"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMSCOPE

**Cnsldtnfsitemscope**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnFSItemScope` | ✓ | |  | `cast( _FSItemAttribValue.CnsldtnFSItemAttributeValue as fincs_fsitemscope preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFSItemScopeText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSISCOPE',
  compiler.compareFilter: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    representativeKey: 'CnsldtnFSItemScope',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,                            
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnFSItemScope'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FS Item Scope Selection'

define view I_CnsldtnFSItemScope
  as select from P_CnsldtnFSItemAttribValue(P_CnsldtnFSItemAttribute : '006') as _FSItemAttribValue

  association [0..*] to I_CnsldtnFSItemScopeText as _Text on $projection.CnsldtnFSItemScope = _Text.CnsldtnFSItemScope
{
      @ObjectModel.text.association: '_Text'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key cast( _FSItemAttribValue.CnsldtnFSItemAttributeValue as fincs_fsitemscope preserving type ) as CnsldtnFSItemScope,


      _Text
}
```
