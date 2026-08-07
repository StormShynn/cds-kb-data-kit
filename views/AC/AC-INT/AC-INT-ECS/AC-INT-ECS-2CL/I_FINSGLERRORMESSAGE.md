---
name: I_FINSGLERRORMESSAGE
description: Finsglerrormessage
app_component: AC-INT-ECS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - AC-INT-ECS
  - interface-view
  - component:AC-INT-ECS-2CL
  - lob:Other
---
# I_FINSGLERRORMESSAGE

**Finsglerrormessage**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinSGLErrorItemUUID` | ✓ | |  | `item_id` |
| `FinSGLErrorSequenceNo` | ✓ | |  | `seq_no` |
| `FinSGLErrorMessageType` |  | |  | `type` |
| `FinSGLErrorMessageID` |  | |  | `id` |
| `FinSGLErrorMessageNo` |  | |  | `message_no` |
| `FinSGLErrMsgVarbl1Txt` |  | |  | `message_v1` |
| `FinSGLErrMsgVarbl2Txt` |  | |  | `message_v2` |
| `FinSGLErrMsgVarbl3Txt` |  | |  | `message_v3` |
| `FinSGLErrMsgVarbl4Txt` |  | |  | `message_v4` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Financial Services GL Error Message'

@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}

@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  }
}

@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
define view entity I_FinSGLErrorMessage
  as select from gle_ecs_item_msg
{
  key item_id                    as FinSGLErrorItemUUID,
  key seq_no                     as FinSGLErrorSequenceNo,
      type                       as FinSGLErrorMessageType,
      id                         as FinSGLErrorMessageID,
      message_no                 as FinSGLErrorMessageNo,
      message_v1                 as FinSGLErrMsgVarbl1Txt,
      message_v2                 as FinSGLErrMsgVarbl2Txt,
      message_v3                 as FinSGLErrMsgVarbl3Txt,
      message_v4                 as FinSGLErrMsgVarbl4Txt
}
```
