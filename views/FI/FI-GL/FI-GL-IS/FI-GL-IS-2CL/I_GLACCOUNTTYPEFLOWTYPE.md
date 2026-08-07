---
name: I_GLACCOUNTTYPEFLOWTYPE
description: GL AccountTYPEFLOWTYPE
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - gl-account
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_GLACCOUNTTYPEFLOWTYPE

**GL AccountTYPEFLOWTYPE**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GLAccountTypeFlowType` | ✓ | |  | `cast( dd07l.domvalue_l as fis_glacct_type_flow_type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GLAccountTypeFlowTypeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Flow Type for G/L Account Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.technicalName: 'IFIGLACCTTFLTP'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'GLAccountTypeFlowType'
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
@ObjectModel.sapObjectNodeType.name: 'GLAccountTypeFlowType'                                     
                                     
define view entity I_GLAccountTypeFlowType as select from dd07l

association [0..*] to I_GLAccountTypeFlowTypeTxt as _Text on $projection.GLAccountTypeFlowType = _Text.GLAccountTypeFlowType

{
   @ObjectModel.text.association: '_Text'
   key cast( dd07l.domvalue_l as fis_glacct_type_flow_type ) as GLAccountTypeFlowType,
  _Text

} 
where dd07l.domname = 'FIS_GLACCT_TYPE_FLOW_TYPE' and dd07l.as4local = 'A';
```
