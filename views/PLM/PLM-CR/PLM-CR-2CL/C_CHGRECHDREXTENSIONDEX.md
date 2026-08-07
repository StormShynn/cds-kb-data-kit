---
name: C_CHGRECHDREXTENSIONDEX
description: "Chgrechdrextensiondex"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-CR
  - consumption-view
  - data-extraction
  - header-level
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHGRECHDREXTENSIONDEX

**Chgrechdrextensiondex**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordUUID` | ✓ | |  |  |  |  |
| `ParentChangeRecordUUID` |  | |  |  |  |  |
| `ChgRecdHdrExtnUUID` |  | |  |  |  |  |
| `ChgRecdReasonForChange` |  | |  |  |  |  |
| `ChgRecdChangeStatus` |  | |  |  |  |  |
| `ChgRecdExpectedCompletionDate` |  | |  |  |  |  |
| `ChgRecdPrflIdn` |  | |  |  |  |  |
| `ChangeRecordDetailDescription` |  | |  |  |  |  |
| `ChgRecdEngEffectiveDate` |  | |  |  |  |  |
| `ChgRecdMfgEffectiveDate` |  | |  |  |  |  |
| `ChgRecdInitiatedStatusAction` |  | |  |  |  |  |
| `ChangeRecordItemEditMode` |  | |  |  |  |  |

## Source Code

```abap
@Metadata:          {allowExtensions:             true,
                     ignorePropagatedAnnotations: true}

@ObjectModel:       {usageType:                   {serviceQuality: #D,
                                                   sizeCategory:   #L,
                                                   dataClass:      #MIXED},
                     modelingPattern:             #NONE,
                     supportedCapabilities:      [
                                                  #EXTRACTION_DATA_SOURCE]}

@VDM:               {viewType:                    #CONSUMPTION,
                     lifecycle.contract.type:     #PUBLIC_LOCAL_API}

@Analytics:         {dataCategory:                #FACT,
                     dataExtraction:              {enabled: true,
                                                   delta.changeDataCapture: {
                                                   automatic: true                                                            }
                                                  },                                                  
                     internalName:                #LOCAL}
                                                  

@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@EndUserText.label: 'Change Record Header Ext for DEX'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

define view entity C_ChgRecHdrExtensionDEX as select from I_ChgRecHdrExtension
{
       @Semantics.uuid: true
  key  ChangeRecordUUID,
       @Semantics.uuid: true
       ParentChangeRecordUUID,
       @Semantics.uuid: true
       ChgRecdHdrExtnUUID,
       ChgRecdReasonForChange,
       ChgRecdChangeStatus,
       ChgRecdExpectedCompletionDate,
       ChgRecdPrflIdn,
       ChangeRecordDetailDescription,
       ChgRecdEngEffectiveDate,
       ChgRecdMfgEffectiveDate,
       ChgRecdInitiatedStatusAction,
       ChangeRecordItemEditMode

}
```
