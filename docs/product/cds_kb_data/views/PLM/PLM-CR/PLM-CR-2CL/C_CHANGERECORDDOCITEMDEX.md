---
name: C_CHANGERECORDDOCITEMDEX
description: "Change RecordDOCITEMDEX"
semantic_vi: "View Change RecordDOCITEMDEX hiển thị dữ liệu chi tiết về các mục trong các bản ghi thay đổi trong PLM-CR-2CL, cho phép các nhà phát triển trích xuất và phân tích các mục cụ thể trong các bản ghi thay đổi."
keywords:
  - "change record"
  - "đơn thay đổi"
  - "plm-cr-2cl"
  - "item-level"
  - "data extraction"
  - "thay đổi"
  - "plm"
  - "cr"
  - "item"
  - "dữ liệu"
semantic_en: "The Change RecordDOCITEMDEX view exposes item-level data for change records in PLM-CR-2CL, allowing developers to extract and analyze specific items within change records."
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
  - item-level
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDDOCITEMDEX

**Change RecordDOCITEMDEX**

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
| `ChangeRecordReferenceUUID` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Document as Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordReferenceDocument'
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
              table:'/PLMI/CHGREC_DOC', role: #MAIN,
              viewElement: ['ChangeRecordReferenceUUID'],
              tableElement: [ 'DB_KEY']
             }
           ]
        }
    }
}

define view entity C_ChangeRecordDocItemDEX as select from I_ChangeRecordItem 
//  as select from I_ChangeRecordDocInfoRecord
{
  key ChangeRecordReferenceUUID
//      ChangeRecordUUID,      
//      DocumentInfoRecordDocNumber,
//      DocumentInfoRecordDocType,
//      DocumentInfoRecordDocVersion,
//      DocumentInfoRecordDocPart
}
```
