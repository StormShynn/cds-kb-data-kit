---
name: C_CHANGERECORDPARTNERDEX
description: "Change RecordPARTNERDEX"
semantic_vi: "View Change Record PARTNERDEX cung cấp truy cập dữ liệu đối tác liên quan đến hồ sơ thay đổi trong ứng dụng thành phần PLM-CR-2CL. Nó được sử dụng để trích xuất và phân tích thông tin đối tác trong bối cảnh hồ sơ thay đổi."
keywords:
  - "change record"
  - "partner"
  - "plm-cr-2cl"
  - "data extraction"
  - "change record partner dex"
  - "thay đổi hồ sơ đối tác"
  - "truy cập dữ liệu"
  - "phân tích thông tin"
semantic_en: "The Change Record PARTNERDEX view provides access to partner data associated with change records in the PLM-CR-2CL application component. It is used to extract and analyze partner information in the context of change records."
app_component: PLM-CR-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
