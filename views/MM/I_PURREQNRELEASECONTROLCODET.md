---
name: I_PURREQNRELEASECONTROLCODET
description: "Purreqnreleasecontrolcodet"
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - lease
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURREQNRELEASECONTROLCODET

**Purreqnreleasecontrolcodet**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurReqnReleaseControlCode` | ✓ | |  | `frgkz` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PurReqnRelStrgyControlCodeName` |  | |  | `fkztx` |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PurReqnReleaseControlCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.sqlViewName: 'IPR_RELCONCODET'
@EndUserText.label: 'Release Indicator in PurReqn - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT]
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations: true

define view I_PurReqnReleaseControlCodeT as select from t161u {
   
    key frgkz as PurReqnReleaseControlCode,
            
    @Semantics.language: true
    key spras as Language,
    
    @Semantics.text: true
    fkztx as PurReqnRelStrgyControlCodeName

    
}
```
