---
name: I_EG_EDOCCANCELLATIONREASON
description: EG Edoccancellationreason
app_component: CA-GTF-CSC-EDO-EG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-EG
  - lob:Cross-Application Components
---
# I_EG_EDOCCANCELLATIONREASON

**EG Edoccancellationreason**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-EG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EG_EDocCancellationCode` | ✓ | |  |  |
| `EG_EDocLanguage` | ✓ | |  |  |
| `EG_EDocCanclnReasonText` |  | |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Egypt Reason for cancellation'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
},
modelingPattern: #NONE,
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ]
                           }
@Search.searchable: true
define view entity I_EG_EDocCancellationReason as select from R_EG_EDocCancellationReason
{
     @Search: {
      defaultSearchElement: true,
      ranking: #HIGH,
      fuzzinessThreshold: 0.8 }
      @ObjectModel: { text.element:  [ 'EG_EDocCanclnReasonText' ]}
  key EG_EDocCancellationCode,
    @Semantics.language
      @UI.hidden: true
  key EG_EDocLanguage,
     @Semantics.text: true
      @Search: {
       defaultSearchElement: true,
       ranking: #LOW,
       fuzzinessThreshold: 0.8 }  
  EG_EDocCanclnReasonText
}
```
