---
name: I_GLACCOUNTFLOWTYPETEXT
description: "GL AccountFLOWTYPETEXT"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - gl-account
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLACCOUNTFLOWTYPETEXT

**GL AccountFLOWTYPETEXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountFlowType` | ✓ | |  | `cast( dd07t.domvalue_l as fis_glaccount_flow_type preserving type )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `GLAccountFlowTypeName` |  | |  | `cast(dd07t.ddtext as fis_val_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'G/L Account Flow Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIGLACCTFLTPT' 
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'GLAccountFlowType'
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

define view entity I_GLAccountFlowTypeText as select from dd07t

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  
  key cast( dd07t.domvalue_l as fis_glaccount_flow_type preserving type ) as GLAccountFlowType, 
  
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
  
  @Semantics.text: true
  cast(dd07t.ddtext as fis_val_text preserving type ) as GLAccountFlowTypeName,
  _Language
}  

where dd07t.domname = 'FIS_GLACCOUNT_FLOW_TYPE' and dd07t.as4local = 'A';
```
