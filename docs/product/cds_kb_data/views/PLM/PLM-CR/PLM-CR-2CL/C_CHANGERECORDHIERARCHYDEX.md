---
name: C_CHANGERECORDHIERARCHYDEX
description: "Change RecordHIERARCHYDEX"
semantic_vi: "View Change Record HIERARCHYDEX hiển thị một cấu trúc hiyerarchi của các bản ghi thay đổi, cho phép bạn điều hướng và phân tích mối quan hệ giữa các bản ghi thay đổi. View này hữu ích khi bạn cần hiểu tác động của các thay đổi trên các mức khác nhau của hiyerarchi."
keywords:
  - "change record"
  - "hierarchical structure"
  - "change record hierarchy"
  - "thay đổi"
  - "hierarchi"
  - "cấu trúc hiyerarchi"
  - "plm"
  - "plm-cr"
  - "change record relationships"
semantic_en: "The Change Record HIERARCHYDEX view exposes a hierarchical structure of change records, allowing you to navigate and analyze the relationships between change records. This view is useful when you need to understand the impact of changes across different levels of the hierarchy."
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
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDHIERARCHYDEX

**Change RecordHIERARCHYDEX**

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
| `ParentChangeRecordUUID` | ✓ | |  |  |  |  |
| `ChangeRecordUUID` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Change Record Hierarchy'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:[
            {
              table:'/PLMI/CHGRECD_R', role: #MAIN,
              viewElement: ['ParentChangeRecordUUID','ChangeRecordUUID'],
              tableElement: [ 'PARENT_KEY' ,' CHILD_KEY']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordHierarchyDEX as select from I_ChgRecHeader
//  as select from I_ChangeRecordHierNodeRltn
{
  key ParentChangeRecordUUID,
  key ChangeRecordUUID
//      @Semantics.user.createdBy: true
//      CreatedByUser,
//      @Semantics.dateTime: true
//      CreationDateTime,
//      @Semantics.user.lastChangedBy: true
//      LastChangedByUser,
//      @Semantics.dateTime: true
//      LastChangeDateTime

}
```
