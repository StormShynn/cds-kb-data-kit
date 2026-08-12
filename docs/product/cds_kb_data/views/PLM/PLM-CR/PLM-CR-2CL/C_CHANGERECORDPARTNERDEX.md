---
name: C_CHANGERECORDPARTNERDEX
description: "Change RecordPARTNERDEX"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-CR
  - consumption-view
  - data-extraction
  - change-record
  - partner
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDPARTNERDEX

**Change RecordPARTNERDEX**

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

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Partner or Person Resp'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordResponsible'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true
//        delta.changeDataCapture: {
//          mapping:[
//            {
//              table:'/PLMI/CHGRECD_P', role: #MAIN,
//              viewElement: ['ChangeRecordUUID','ChgRecordPartnerRole2' ,'ChangeRecordPartnerType'],
//              tableElement: [ 'DB_KEY','AGENT_ROLE','AGENT_TYPE']
//             }
//           ]
//        }
    }
}
define view entity C_ChangeRecordPartnerDEX as select from I_ChgRecResponsible //I_ChgRecResponsible_2
{
  key ChangeRecordUUID
//  @AnalyticsDetails.query.hidden: true
//  key 'BUP003' as ChgRecordPartnerRole2,
//  @AnalyticsDetails.query.hidden: true
//  key 'BP' as ChangeRecordPartnerType,
//  Partner as  ChangeRecordPartner
}
// where ChgRecordPartnerRole2 = 'BUP003' and ChangeRecordPartnerType = 'BP'
```
