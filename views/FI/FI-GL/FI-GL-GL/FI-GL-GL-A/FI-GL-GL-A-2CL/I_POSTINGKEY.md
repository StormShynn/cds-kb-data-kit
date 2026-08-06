---
name: I_POSTINGKEY
description: Postingkey
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
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_POSTINGKEY

**Postingkey**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PostingKey` | `cast(tbsl.bschl as fis_bschl preserving type)` |
| `DebitCreditCode` | `cast(tbsl.shkzg as fis_shkzg preserving type )` |
| `FinancialAccountType` | `cast(tbsl.koart as farp_koart preserving type )` |
| `IsSalesRelated` | `cast(tbsl.xumsw as farp_xumsw preserving type)` |
| `IsUsedInPaymentTransaction` | `tbsl.xzahl` |
| `ReversalPostingKey` | `tbsl.stbsl` |
| `IsSpecialGLTransaction` | `tbsl.xsonu` |
| `_PostingKeyText` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PostingKeyText` | `I_PostingKeyText` | [0..*] |
| `_Text` | `I_PostingKeyT` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK 
@Analytics.technicalName: 'IFIPOSTINGKEY' 
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping: 
            [
              { 
                table: 'tbsl',
                role: #MAIN,
                viewElement: ['PostingKey'],
                tableElement: ['bschl']
              }
            ] 
        }
    }
}
@EndUserText.label: 'Posting Key'
@ObjectModel: { representativeKey: 'PostingKey',    
                sapObjectNodeType.name: 'PostingKey', 
                usageType: { sizeCategory: #S, 
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                compositionRoot: true,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION }                 
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_PostingKey as select from tbsl 

association [0..*] to I_PostingKeyText as _PostingKeyText on $projection.PostingKey = _PostingKeyText.PostingKey
association [0..*] to I_PostingKeyT as _Text on $projection.PostingKey = _Text.PostingKey 
{
@ObjectModel.text.association: '_PostingKeyText'
@Search.defaultSearchElement: true
@Search.fuzzinessThreshold: 0.8 
key cast(tbsl.bschl as fis_bschl preserving type) as PostingKey,
cast(tbsl.shkzg as fis_shkzg preserving type ) as DebitCreditCode,
cast(tbsl.koart as farp_koart preserving type ) as FinancialAccountType, 
cast(tbsl.xumsw as farp_xumsw preserving type) as IsSalesRelated,
tbsl.xzahl as IsUsedInPaymentTransaction,
tbsl.stbsl as ReversalPostingKey,
tbsl.xsonu as IsSpecialGLTransaction,

@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
_PostingKeyText,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PostingKeyText'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PostingKeyText'
_Text

};
```
