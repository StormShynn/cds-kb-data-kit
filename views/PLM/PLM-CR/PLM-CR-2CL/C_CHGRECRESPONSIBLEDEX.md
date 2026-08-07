---
name: C_CHGRECRESPONSIBLEDEX
description: Chgrecresponsibledex
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
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHGRECRESPONSIBLEDEX

**Chgrecresponsibledex**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChangeRecordUUID` | ✓ | |  |  |
| `ParentChangeRecordUUID` |  | |  |  |
| `Partner` |  | |  |  |

## Source Code

```abap
@Metadata:          {allowExtensions:             true,
                     ignorePropagatedAnnotations: true}

@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['Partner']

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
@EndUserText.label: 'DEX for Change Record Responsible'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

define view entity C_ChgRecResponsibleDEX
  as select from I_ChgRecResponsible
{
      @Semantics.uuid: true
  key ChangeRecordUUID,
      @Semantics.uuid: true
      ParentChangeRecordUUID,
      Partner
}
```
