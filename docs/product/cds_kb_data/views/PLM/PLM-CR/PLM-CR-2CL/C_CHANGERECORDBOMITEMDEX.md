---
name: C_CHANGERECORDBOMITEMDEX
description: "Change RecordBOMITEMDEX"
semantic_vi: "Chỉ ra dữ liệu chi tiết về vật tư trong Change Record BOM ITEM DEX, được sử dụng để theo dõi các thay đổi của danh mục vật tư (BOM) trong một bản ghi thay đổi. View này hữu ích cho việc phân tích và báo cáo về các thay đổi vật tư BOM."
keywords:
  - "change record"
  - "bom"
  - "item-level"
  - "plm"
  - "plm-cr"
  - "consumption-view"
  - "data-extraction"
  - "bom-item"
  - "change-record-referenceuuid"
  - "plm-cr-2cl"
semantic_en: "Exposes item-level data from the Change Record BOM ITEM DEX, which is used to track changes to bill of materials (BOM) items in a change record. This view is useful for analyzing and reporting on BOM item changes."
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
  - bom
  - change-record
  - item-level
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDBOMITEMDEX

**Change RecordBOMITEMDEX**

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
@AccessControl.authorizationCheck:   #PRIVILEGED_ONLY
@EndUserText.label: 'Extraction BOM as Item for Change Record'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordRefBOM'
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
              table:'/PLMI/CHGREC_BOM', role: #MAIN,
              viewElement: ['ChangeRecordReferenceUUID'],
              tableElement: [ 'DB_KEY']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordBOMItemDEX as select from I_ChangeRecordItem // I_ChangeRecordMaterialBOM_2  
{
  key ChangeRecordReferenceUUID
//      ChangeRecordUUID,
//      BillOfMaterial,
//      BillOfMaterialVariant,
//      Material,
//      Plant,
//      BillOfMaterialVariantUsage,
//      BillOfMaterialCategory
}
```
