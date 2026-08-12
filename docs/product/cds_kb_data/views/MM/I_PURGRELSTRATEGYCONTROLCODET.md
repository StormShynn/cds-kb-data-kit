---
name: I_PURGRELSTRATEGYCONTROLCODET
description: "Purgrelstrategycontrolcodet"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGRELSTRATEGYCONTROLCODET

**Purgrelstrategycontrolcodet**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgReleaseStrategyControlCode` | ✓ | |  | `frgke` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PurgRelStrategyControlCodeName` |  | |  | `frget` |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PurgReleaseStrategyControlCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
//Commented by VDM CDS Suite Plugin:@ObjectModel.dataCategory: #TEXT
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'ReleaseCode'
@AbapCatalog.sqlViewName: 'IPURRELSTCONCODT'
@EndUserText.label: 'Release Indicator in Purg Doc - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT]
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations: true

define view I_PurgRelStrategyControlCodeT as select from t16fe {
   
    key frgke as PurgReleaseStrategyControlCode,
            
    @Semantics.language: true
    key spras as Language,
    
    @Semantics.text: true
    frget as PurgRelStrategyControlCodeName

    
}
```
