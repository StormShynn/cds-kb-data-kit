---
name: I_GLACCOUNTTYPEFLOWTYPETXT
description: GL AccountTYPEFLOWTYPETXT
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
# I_GLACCOUNTTYPEFLOWTYPETXT

**GL AccountTYPEFLOWTYPETXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GLAccountTypeFlowType` | `cast( dd07t.domvalue_l as fis_glacct_type_flow_type )` |
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| `GLAccountTypeFlowTypeName` | `cast(dd07t.ddtext as fis_val_text preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Flow Type for G/L Account Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIGLACCTTFLTPT' 
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'GLAccountTypeFlowType'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true  
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE]

define view entity I_GLAccountTypeFlowTypeTxt as select from dd07t

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  
  key cast( dd07t.domvalue_l as fis_glacct_type_flow_type ) as GLAccountTypeFlowType, 
  
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
  
  @Semantics.text: true
  cast(dd07t.ddtext as fis_val_text preserving type ) as GLAccountTypeFlowTypeName,
  _Language
}  

where dd07t.domname = 'FIS_GLACCT_TYPE_FLOW_TYPE' and dd07t.as4local = 'A';
```
