---
name: I_GLACCOUNTFLOWTYPE
description: "GL AccountFLOWTYPE"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - gl-account
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLACCOUNTFLOWTYPE

**GL AccountFLOWTYPE**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountFlowType` | ✓ | |  | `cast( dd07l.domvalue_l as fis_glaccount_flow_type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GLAccountFlowTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'GLAccount Flow Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.technicalName: 'IFIGLACCTFLTP'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'GLAccountFlowType'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true  

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'GeneralLedgerAccountFlowType'
                                     
define view entity I_GLAccountFlowType as select from dd07l

association [0..*] to I_GLAccountFlowTypeText as _Text on $projection.GLAccountFlowType = _Text.GLAccountFlowType

{
   @ObjectModel.text.association: '_Text'
   key cast( dd07l.domvalue_l as fis_glaccount_flow_type ) as GLAccountFlowType,
  _Text

} 
where dd07l.domname = 'FIS_GLACCOUNT_FLOW_TYPE' and dd07l.as4local = 'A';
```
