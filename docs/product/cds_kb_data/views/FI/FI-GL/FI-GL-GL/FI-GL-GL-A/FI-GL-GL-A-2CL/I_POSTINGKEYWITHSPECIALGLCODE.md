---
name: I_POSTINGKEYWITHSPECIALGLCODE
description: "Postingkeywithspecialglcode"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_POSTINGKEYWITHSPECIALGLCODE

**Postingkeywithspecialglcode**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingKey` | ✓ | |  |  |  |  |
| `SpecialGLCode` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PostingKeyWthSpclGLCodeTxt` | [0..*] |
| `_PostingKey` | `I_PostingKey` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK
@Analytics.technicalName: 'IFIPSTNGKEYGLCD' 
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true
}
@EndUserText.label: 'Posting Key with Special General Ledger Code'
@ObjectModel: { representativeKey: 'SpecialGLCode',    
                usageType: { sizeCategory: #S, 
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                compositionRoot: true,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION }                 
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true 
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name: 'PostingKeyWithSpecialGLCode' 

define view entity I_PostingKeyWithSpecialGLCode as select from I_PostingKeyTextDEX 

association [0..*] to I_PostingKeyWthSpclGLCodeTxt as _Text       on  $projection.PostingKey    = _Text.PostingKey 
                                                                  and $projection.SpecialGLCode = _Text.SpecialGLCode 
association [0..1] to I_PostingKey                 as _PostingKey on  $projection.PostingKey    = _PostingKey.PostingKey 
                                                            
{
@ObjectModel.text.association: '_Text'
@Search.defaultSearchElement: true
@Search.fuzzinessThreshold: 0.8 
@ObjectModel.foreignKey.association: '_PostingKey'
key PostingKey,

key SpecialGLCode,

@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
_Text,
_PostingKey

} group by PostingKey, SpecialGLCode;
```
